/**
 * LUSID API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.10.1381
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class UpdateInstrumentIdentifierRequest {
    /**
    * The allowable instrument identifier to update, insert or remove e.g. \'Figi\'.
    */
    'type': string;
    /**
    * The new value of the allowable instrument identifier. If unspecified the identifier will be removed from the instrument.
    */
    'value'?: string;
    /**
    * The effective datetime from which the identifier should be updated, inserted or removed. Defaults to the current LUSID system datetime if not specified.
    */
    'effectiveAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "effectiveAt",
            "baseName": "effectiveAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateInstrumentIdentifierRequest.attributeTypeMap;
    }
}

