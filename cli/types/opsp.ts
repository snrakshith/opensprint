export interface OpenAPIPath {
  [method: string]: {
    summary: string;
    parameters?: string[]; // Updated type to string[] to store parameter names
    requestBody?: {
      content: {
        "application/json": {
          schema: {
            $ref: string; // Change the type to $ref
          };
        };
      };
    };
    responses?: { [status: string]: { $ref: string } };
    headers?: { [name: string]: OpenAPIParameter };
  };
}

export interface OpenAPIParameter {
  name: string;
  in: string;
  required?: boolean;
  schema: {
    type: string;
  };
  $ref?: string;
}

export interface OpenAPI {
  paths: { [path: string]: OpenAPIPath };
  components?: {
    parameters?: { [name: string]: OpenAPIParameter };
    headers?: { [name: string]: OpenAPIParameter };
    schemas?: {
      [name: string]: { properties: { [key: string]: { type: string } } };
    };
  };
}
