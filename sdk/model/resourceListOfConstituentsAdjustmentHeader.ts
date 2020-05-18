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

import { ConstituentsAdjustmentHeader } from './constituentsAdjustmentHeader';
import { Link } from './link';

export class ResourceListOfConstituentsAdjustmentHeader {
    'values': Array<ConstituentsAdjustmentHeader>;
    'href'?: string;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ConstituentsAdjustmentHeader>"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return ResourceListOfConstituentsAdjustmentHeader.attributeTypeMap;
    }
}

