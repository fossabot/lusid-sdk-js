/**
 * LUSID API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.10.1380
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ResourceId {
    'scope'?: string;
    'code'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResourceId.attributeTypeMap;
    }
}

