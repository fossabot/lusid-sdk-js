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

import { PropertyValue } from './propertyValue';

export class Property {
    /**
    * The key of the property. This takes the format {domain}/{scope}/{code} e.g. \'Instrument/system/Name\' or \'Transaction/strategy/quantsignal\'.
    */
    'key': string;
    'value': PropertyValue;
    /**
    * The effective datetime from which the property is valid.
    */
    'effectiveFrom'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "PropertyValue"
        },
        {
            "name": "effectiveFrom",
            "baseName": "effectiveFrom",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Property.attributeTypeMap;
    }
}

