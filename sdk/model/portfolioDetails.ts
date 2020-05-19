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

import { Link } from './link';
import { ResourceId } from './resourceId';
import { Version } from './version';

export class PortfolioDetails {
    /**
    * The specific Uniform Resource Identifier (URI) for this resource at the requested effective and asAt datetime.
    */
    'href'?: string;
    'originPortfolioId': ResourceId;
    'version': Version;
    /**
    * The base currency of the transaction portfolio.
    */
    'baseCurrency': string;
    'corporateActionSourceId'?: ResourceId;
    'subHoldingKeys'?: Array<string>;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "originPortfolioId",
            "baseName": "originPortfolioId",
            "type": "ResourceId"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "baseCurrency",
            "baseName": "baseCurrency",
            "type": "string"
        },
        {
            "name": "corporateActionSourceId",
            "baseName": "corporateActionSourceId",
            "type": "ResourceId"
        },
        {
            "name": "subHoldingKeys",
            "baseName": "subHoldingKeys",
            "type": "Array<string>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return PortfolioDetails.attributeTypeMap;
    }
}

