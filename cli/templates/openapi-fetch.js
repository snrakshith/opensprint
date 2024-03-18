"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFetchTemplate = void 0;
var openFetchTemplate = function (camelCaseSummary, paramsString, headersString, bodyString, path, method, responsesSwitchCase) {
    return "\n        import fetch from 'node-fetch';\n\n        export const ".concat(camelCaseSummary, " = async (").concat(paramsString, ") => {\n            const headers = { ").concat(headersString, " };\n            const body = ").concat(bodyString, ";\n\n            try {\n                const response = await fetch('").concat(path, "', {\n                    method: '").concat(method.toUpperCase(), "',\n                    headers: headers,\n                    body: JSON.stringify(body),\n                });\n\n                if (!response.ok) {\n                    throw new Error('Network response was not ok');\n                }\n\n                switch (response.status) {\n                    ").concat(responsesSwitchCase, "\n                    default:\n                        // Handle other status codes\n                        break;\n                }\n\n                return await response.json();\n            } catch (error) {\n                console.error('There was a problem with the fetch operation:', error);\n                throw error;\n            }\n        };\n    ");
};
exports.openFetchTemplate = openFetchTemplate;
// Example usage:
// const serviceContent = openFetchTemplate(
//   "fetchUserData",
//   "userId",
//   '"Content-Type": "application/json"',
//   "{ userId }",
//   "/api/user",
//   "get",
//   `case 200:
//         return response.json();
//     case 404:
//         throw new Error('User not found');
//     default:
//         throw new Error('Unexpected status code: ' + response.status);`
// );
// console.log(serviceContent);
