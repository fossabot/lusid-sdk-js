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


export class IUnitDefinitionDto {
    'schema'?: IUnitDefinitionDto.SchemaEnum;
    'code'?: string;
    'displayName'?: string;
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "schema",
            "baseName": "schema",
            "type": "IUnitDefinitionDto.SchemaEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IUnitDefinitionDto.attributeTypeMap;
    }
}

export namespace IUnitDefinitionDto {
    export enum SchemaEnum {
        NoUnits = <any> 'NoUnits',
        Basic = <any> 'Basic',
        Iso4217Currency = <any> 'Iso4217Currency'
    }
}
