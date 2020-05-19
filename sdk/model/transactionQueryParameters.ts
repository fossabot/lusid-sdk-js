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


export class TransactionQueryParameters {
    /**
    * The lower bound effective datetime or cut label (inclusive) from which to build the transactions.
    */
    'startDate': string;
    /**
    * The upper bound effective datetime or cut label (inclusive) from which to retrieve transactions.
    */
    'endDate': string;
    /**
    * The date to compare against the upper and lower bounds for the effective datetime or cut label. Defaults to \'TradeDate\' if not specified.
    */
    'queryMode'?: TransactionQueryParameters.QueryModeEnum;
    /**
    * Option to specify whether or not to include cancelled transactions in the output. Defaults to False if not specified.
    */
    'showCancelledTransactions'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "queryMode",
            "baseName": "queryMode",
            "type": "TransactionQueryParameters.QueryModeEnum"
        },
        {
            "name": "showCancelledTransactions",
            "baseName": "showCancelledTransactions",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TransactionQueryParameters.attributeTypeMap;
    }
}

export namespace TransactionQueryParameters {
    export enum QueryModeEnum {
        TradeDate = <any> 'TradeDate',
        SettleDate = <any> 'SettleDate'
    }
}
