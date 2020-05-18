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


/**
* The version metadata.
*/
export class Version {
    /**
    * The effective datetime at which this version became valid. Only applies when a single entity is being interacted with.
    */
    'effectiveFrom': Date;
    /**
    * The asAt datetime at which the data was committed to LUSID.
    */
    'asAtDate': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "effectiveFrom",
            "baseName": "effectiveFrom",
            "type": "Date"
        },
        {
            "name": "asAtDate",
            "baseName": "asAtDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Version.attributeTypeMap;
    }
}

