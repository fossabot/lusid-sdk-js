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
import { Version } from './version';

/**
* A record of holdings adjustments made on the transaction portfolio.
*/
export class HoldingsAdjustmentHeader {
    /**
    * The effective datetime from which the adjustment is valid. There can only be one holdings adjustment for a transaction portfolio at a specific effective datetime, so this uniquely identifies the adjustment.
    */
    'effectiveAt': Date;
    'version': Version;
    /**
    * Describes how the holdings were adjusted. If \'PositionToZero\' the entire transaction portfolio\'s holdings were set via a call to \'Set holdings\'. If \'KeepTheSame\' only the specified holdings were adjusted via a call to \'Adjust holdings\'.
    */
    'unmatchedHoldingMethod': HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum;
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
            "name": "unmatchedHoldingMethod",
            "baseName": "unmatchedHoldingMethod",
            "type": "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return HoldingsAdjustmentHeader.attributeTypeMap;
    }
}

export namespace HoldingsAdjustmentHeader {
    export enum UnmatchedHoldingMethodEnum {
        PositionToZero = <any> 'PositionToZero',
        KeepTheSame = <any> 'KeepTheSame'
    }
}
