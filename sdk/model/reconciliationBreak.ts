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

import { CurrencyAndAmount } from './currencyAndAmount';
import { PerpetualProperty } from './perpetualProperty';
import { Property } from './property';

/**
* A reconciliation break
*/
export class ReconciliationBreak {
    /**
    * Unique instrument identifier
    */
    'instrumentUid': string;
    /**
    * Any other properties that comprise the Sub-Holding Key
    */
    'subHoldingKeys': { [key: string]: PerpetualProperty; };
    /**
    * Units from the left hand side
    */
    'leftUnits': number;
    /**
    * Units from the right hand side
    */
    'rightUnits': number;
    /**
    * Difference in units
    */
    'differenceUnits': number;
    'leftCost': CurrencyAndAmount;
    'rightCost': CurrencyAndAmount;
    'differenceCost': CurrencyAndAmount;
    /**
    * Additional features relating to the instrument
    */
    'instrumentProperties': Array<Property>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instrumentUid",
            "baseName": "instrumentUid",
            "type": "string"
        },
        {
            "name": "subHoldingKeys",
            "baseName": "subHoldingKeys",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "leftUnits",
            "baseName": "leftUnits",
            "type": "number"
        },
        {
            "name": "rightUnits",
            "baseName": "rightUnits",
            "type": "number"
        },
        {
            "name": "differenceUnits",
            "baseName": "differenceUnits",
            "type": "number"
        },
        {
            "name": "leftCost",
            "baseName": "leftCost",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "rightCost",
            "baseName": "rightCost",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "differenceCost",
            "baseName": "differenceCost",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "instrumentProperties",
            "baseName": "instrumentProperties",
            "type": "Array<Property>"
        }    ];

    static getAttributeTypeMap() {
        return ReconciliationBreak.attributeTypeMap;
    }
}

