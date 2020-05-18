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

import { ReferencePortfolioConstituentRequest } from './referencePortfolioConstituentRequest';

export class UpsertReferencePortfolioConstituentsRequest {
    /**
    * The first date from which the weights will apply
    */
    'effectiveFrom': string;
    /**
    * 
    */
    'weightType': UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum;
    /**
    * 
    */
    'periodType'?: UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum;
    /**
    * 
    */
    'periodCount'?: number;
    /**
    * Set of constituents (instrument/weight pairings)
    */
    'constituents': Array<ReferencePortfolioConstituentRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "effectiveFrom",
            "baseName": "effectiveFrom",
            "type": "string"
        },
        {
            "name": "weightType",
            "baseName": "weightType",
            "type": "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum"
        },
        {
            "name": "periodType",
            "baseName": "periodType",
            "type": "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum"
        },
        {
            "name": "periodCount",
            "baseName": "periodCount",
            "type": "number"
        },
        {
            "name": "constituents",
            "baseName": "constituents",
            "type": "Array<ReferencePortfolioConstituentRequest>"
        }    ];

    static getAttributeTypeMap() {
        return UpsertReferencePortfolioConstituentsRequest.attributeTypeMap;
    }
}

export namespace UpsertReferencePortfolioConstituentsRequest {
    export enum WeightTypeEnum {
        Static = <any> 'Static',
        Floating = <any> 'Floating',
        Periodical = <any> 'Periodical'
    }
    export enum PeriodTypeEnum {
        Daily = <any> 'Daily',
        Weekly = <any> 'Weekly',
        Monthly = <any> 'Monthly',
        Quarterly = <any> 'Quarterly',
        Annually = <any> 'Annually'
    }
}
