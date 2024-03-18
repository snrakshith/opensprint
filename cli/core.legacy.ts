import * as fs from "fs";
import * as yaml from "js-yaml";
import { OpenAPI } from "./types/opsp";

export function generateAPICalls(openapiFile: string, outputDir: string): void {
  const openapiSpec = yaml.load(
    fs.readFileSync(openapiFile, "utf8")
  ) as OpenAPI;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const path in openapiSpec.paths) {
    const methods = openapiSpec.paths[path];
    for (const method in methods) {
      const { summary, parameters, requestBody, responses, headers } =
        methods[method];

      const paramsString = parameters
        ? parameters
            .map((paramName) => {
              const resolvedParam =
                openapiSpec.components?.parameters?.[paramName];
              if (resolvedParam) {
                return `${resolvedParam.name}: ${
                  resolvedParam.schema ? resolvedParam.schema.type : "unknown"
                }`;
              } else {
                console.warn(`Parameter ${paramName} not found in components.`);
                return "";
              }
            })
            .filter(Boolean) // Filter out any empty strings
            .join(", ")
        : "";

      const headersString = headers
        ? Object.keys(headers)
            .map((headerName) => {
              const resolvedHeader =
                openapiSpec.components?.headers?.[headerName];
              if (resolvedHeader) {
                return `${resolvedHeader.name}: ${
                  resolvedHeader.schema ? resolvedHeader.schema.type : "unknown"
                }`;
              } else {
                console.warn(`Header ${headerName} not found in components.`);
                return "";
              }
            })
            .filter(Boolean)
            .join(", ")
        : "";

      let bodyString = "{}"; // Default empty JSON object
      if (
        requestBody &&
        requestBody.content &&
        requestBody.content["application/json"] &&
        requestBody.content["application/json"].schema &&
        requestBody.content["application/json"].schema.$ref
      ) {
        const schemaRef = requestBody.content["application/json"].schema.$ref;
        const schemaName: any = schemaRef.split("/").pop();
        const schema = openapiSpec.components?.schemas?.[schemaName];
        if (schema) {
          bodyString = JSON.stringify(schema.properties);
        } else {
          console.warn(`Schema ${schemaName} not found in components.`);
        }
      }

      const responsesCases = responses
        ? Object.entries(responses).map(([status, response]) => {
            const responseName = response.$ref.split("/").pop();
            return `
                case ${status}:
                    // Handle ${status} response
                    // Example: return ${responseName};
                    break;
                `;
          })
        : [];

      const responsesSwitchCase = responsesCases.join("\n").trim();

      const camelCaseSummary = summary.replace(/\s+(.)/g, (_, char) =>
        char.toUpperCase()
      );
      const serviceName = `${camelCaseSummary}.service.ts`;
      const serviceContent = `
import fetch from 'node-fetch';

export const ${camelCaseSummary} = async (${paramsString}) => {
    const headers = { ${headersString} };
    const body = ${bodyString};

    try {
        const response: Response = await fetch('${path}', {
            method: '${method.toUpperCase()}',
            headers: headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        switch (response.status) {
          ${responsesSwitchCase}
          default:
              // Handle other status codes
              break;
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};
`;

      fs.writeFileSync(`${outputDir}/${serviceName}`, serviceContent);
      console.log(`Generated service file: ${outputDir}/${serviceName}`);
    }
  }
}
