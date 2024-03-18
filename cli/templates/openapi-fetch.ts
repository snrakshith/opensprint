export const openFetchTemplate = (
  camelCaseSummary,
  paramsString,
  headersString,
  bodyString,
  path,
  method,
  responsesSwitchCase
) => {
  return `
        import fetch from 'node-fetch';

        export const ${camelCaseSummary} = async (${paramsString}) => {
            const headers = { ${headersString} };
            const body = ${bodyString};

            try {
                const response = await fetch('${path}', {
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
};

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
