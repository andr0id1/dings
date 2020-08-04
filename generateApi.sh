#!/bin/sh

# install OpenAPI generator CLI if not installed.
package='@openapitools/openapi-generator-cli'
if [ `npm list -g | grep -c $package` -eq 0 ]; then
    npm install @openapitools/openapi-generator-cli -g
fi

# generate api from swagger file.
openapi-generator generate -g typescript-angular -o src/generated -i https://my.sevdesk.de/swaggerJSON/swagger.json
