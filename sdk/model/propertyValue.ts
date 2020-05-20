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

import { MetricValue } from './metricValue';

/**
* The value of the property.
*/
export class PropertyValue {
    /**
    * The text value of a property defined as having the \'Label\' type.
    */
    'labelValue'?: string;
    'metricValue'?: MetricValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labelValue",
            "baseName": "labelValue",
            "type": "string"
        },
        {
            "name": "metricValue",
            "baseName": "metricValue",
            "type": "MetricValue"
        }    ];

    static getAttributeTypeMap() {
        return PropertyValue.attributeTypeMap;
    }
}

