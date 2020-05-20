/**
 * LUSID API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.10.1390
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Expanded instrument definition - in the case of OTC instruments  this contains the definition of the non-exchange traded instrument.  The format for this can be client-defined, but in order to transparently use  vendor libraries it must conform to a format that LUSID understands.
*/
export class InstrumentEconomicDefinition {
    /**
    * The format of the expanded definition.
    */
    'instrumentFormat': string;
    /**
    * The content of the expanded definition. There is no validation on the format of this.
    */
    'content': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instrumentFormat",
            "baseName": "instrumentFormat",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentEconomicDefinition.attributeTypeMap;
    }
}

