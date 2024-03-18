"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCallGenerator = void 0;
var fs = require("fs");
var yaml = require("js-yaml");
var openapi_fetch_1 = require("../templates/openapi-fetch");
function ApiCallGenerator(openapiFile, outputDir) {
    var _a, _b;
    var openapiSpec = yaml.load(fs.readFileSync(openapiFile, "utf8"));
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    for (var path in openapiSpec.paths) {
        var methods = openapiSpec.paths[path];
        for (var method in methods) {
            var _c = methods[method], summary = _c.summary, parameters = _c.parameters, requestBody = _c.requestBody, responses = _c.responses, headers = _c.headers;
            var paramsString = parameters
                ? parameters
                    .map(function (paramName) {
                    var _a, _b;
                    var resolvedParam = (_b = (_a = openapiSpec.components) === null || _a === void 0 ? void 0 : _a.parameters) === null || _b === void 0 ? void 0 : _b[paramName];
                    if (resolvedParam) {
                        return "".concat(resolvedParam.name, ": ").concat(resolvedParam.schema ? resolvedParam.schema.type : "unknown");
                    }
                    else {
                        console.warn("Parameter ".concat(paramName, " not found in components."));
                        return "";
                    }
                })
                    .filter(Boolean) // Filter out any empty strings
                    .join(", ")
                : "";
            var headersString = headers
                ? Object.keys(headers)
                    .map(function (headerName) {
                    var _a, _b;
                    var resolvedHeader = (_b = (_a = openapiSpec.components) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b[headerName];
                    if (resolvedHeader) {
                        return "".concat(resolvedHeader.name, ": ").concat(resolvedHeader.schema ? resolvedHeader.schema.type : "unknown");
                    }
                    else {
                        console.warn("Header ".concat(headerName, " not found in components."));
                        return "";
                    }
                })
                    .filter(Boolean)
                    .join(", ")
                : "";
            var bodyString = "{}"; // Default empty JSON object
            if (requestBody &&
                requestBody.content &&
                requestBody.content["application/json"] &&
                requestBody.content["application/json"].schema &&
                requestBody.content["application/json"].schema.$ref) {
                var schemaRef = requestBody.content["application/json"].schema.$ref;
                var schemaName = schemaRef.split("/").pop();
                var schema = (_b = (_a = openapiSpec.components) === null || _a === void 0 ? void 0 : _a.schemas) === null || _b === void 0 ? void 0 : _b[schemaName];
                if (schema) {
                    bodyString = JSON.stringify(schema.properties);
                }
                else {
                    console.warn("Schema ".concat(schemaName, " not found in components."));
                }
            }
            var responsesCases = responses
                ? Object.entries(responses).map(function (_a) {
                    var status = _a[0], response = _a[1];
                    var responseName = response.$ref.split("/").pop();
                    return "\n                case ".concat(status, ":\n                    // Handle ").concat(status, " response\n                    // Example: return ").concat(responseName, ";\n                    break;\n                ");
                })
                : [];
            var responsesSwitchCase = responsesCases.join("\n").trim();
            var camelCaseSummary = summary.replace(/\s+(.)/g, function (_, char) {
                return char.toUpperCase();
            });
            var serviceName = "".concat(camelCaseSummary, ".service.ts");
            var serviceContent = (0, openapi_fetch_1.openFetchTemplate)(camelCaseSummary, paramsString, headersString, bodyString, path, method, responsesSwitchCase);
            fs.writeFileSync("".concat(outputDir, "/").concat(serviceName), serviceContent);
            console.log("Generated service file: ".concat(outputDir, "/").concat(serviceName));
        }
    }
}
exports.ApiCallGenerator = ApiCallGenerator;
