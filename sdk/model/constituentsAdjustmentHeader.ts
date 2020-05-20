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

import { Link } from './link';
import { Version } from './version';

export class ConstituentsAdjustmentHeader {
    /**
    * There can be at most one holdings adjustment for a portfolio at a  specific effective time so this uniquely identifies the adjustment.
    */
    'effectiveAt'?: Date;
    'version'?: Version;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "effectiveAt",
            "baseName": "effectiveAt",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return ConstituentsAdjustmentHeader.attributeTypeMap;
    }
}

