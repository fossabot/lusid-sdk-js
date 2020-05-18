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

import { Link } from './link';

/**
* Configuration needed to define a side. Sides are referenced by Label. Beyond that, other properties  can be used to reference either transaction fields, or transaction properties.
*/
export class SideConfigurationData {
    /**
    * The side\'s label.
    */
    'side': string;
    /**
    * The security, or instrument.
    */
    'security': string;
    /**
    * The currency.
    */
    'currency': string;
    /**
    * The rate.
    */
    'rate': string;
    /**
    * The units.
    */
    'units': string;
    /**
    * The amount.
    */
    'amount': string;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "side",
            "baseName": "side",
            "type": "string"
        },
        {
            "name": "security",
            "baseName": "security",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return SideConfigurationData.attributeTypeMap;
    }
}

