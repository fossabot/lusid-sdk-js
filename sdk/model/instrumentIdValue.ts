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


export class InstrumentIdValue {
    /**
    * The value of the identifier.
    */
    'value': string;
    /**
    * The effective datetime from which the identifier will be valid. If left unspecified the default value is the beginning of time.
    */
    'effectiveAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "effectiveAt",
            "baseName": "effectiveAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentIdValue.attributeTypeMap;
    }
}

