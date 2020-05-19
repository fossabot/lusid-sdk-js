/**
 * LUSID API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.10.1387
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResourceId } from './resourceId';

export class PortfolioReconciliationRequest {
    'portfolioId': ResourceId;
    /**
    * The effective date of the portfolio
    */
    'effectiveAt': string;
    /**
    * Optional. The AsAt date of the portfolio
    */
    'asAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "portfolioId",
            "baseName": "portfolioId",
            "type": "ResourceId"
        },
        {
            "name": "effectiveAt",
            "baseName": "effectiveAt",
            "type": "string"
        },
        {
            "name": "asAt",
            "baseName": "asAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PortfolioReconciliationRequest.attributeTypeMap;
    }
}

