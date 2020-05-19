/**
 * LUSID API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.10.1386
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class TransactionPropertyMapping {
    /**
    * The Side
    */
    'propertyKey': string;
    /**
    * The Side
    */
    'mapFrom'?: string;
    /**
    * The Side
    */
    'setTo'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "propertyKey",
            "baseName": "propertyKey",
            "type": "string"
        },
        {
            "name": "mapFrom",
            "baseName": "mapFrom",
            "type": "string"
        },
        {
            "name": "setTo",
            "baseName": "setTo",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return TransactionPropertyMapping.attributeTypeMap;
    }
}

