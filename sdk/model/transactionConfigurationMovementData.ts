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

import { PerpetualProperty } from './perpetualProperty';
import { TransactionPropertyMapping } from './transactionPropertyMapping';

export class TransactionConfigurationMovementData {
    /**
    * The Movement Types
    */
    'movementTypes': TransactionConfigurationMovementData.MovementTypesEnum;
    /**
    * The Movement Side
    */
    'side': string;
    /**
    * The Movement direction
    */
    'direction': number;
    'properties'?: { [key: string]: PerpetualProperty; };
    'mappings'?: Array<TransactionPropertyMapping>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "movementTypes",
            "baseName": "movementTypes",
            "type": "TransactionConfigurationMovementData.MovementTypesEnum"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "number"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "mappings",
            "baseName": "mappings",
            "type": "Array<TransactionPropertyMapping>"
        }    ];

    static getAttributeTypeMap() {
        return TransactionConfigurationMovementData.attributeTypeMap;
    }
}

export namespace TransactionConfigurationMovementData {
    export enum MovementTypesEnum {
        Settlement = <any> 'Settlement',
        Traded = <any> 'Traded',
        FutureCash = <any> 'FutureCash',
        Commitment = <any> 'Commitment',
        Receivable = <any> 'Receivable',
        CashSettlement = <any> 'CashSettlement',
        Accrual = <any> 'Accrual',
        ForwardFx = <any> 'ForwardFx',
        UnsettledCashTypes = <any> 'UnsettledCashTypes',
        StockMovement = <any> 'StockMovement',
        CashCommitment = <any> 'CashCommitment',
        CashReceivable = <any> 'CashReceivable',
        CashForward = <any> 'CashForward',
        CashFxForward = <any> 'CashFxForward',
        CashAccrual = <any> 'CashAccrual'
    }
}
