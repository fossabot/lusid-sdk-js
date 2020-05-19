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
import { PortfolioHolding } from './portfolioHolding';
import { Version } from './version';

export class VersionedResourceListOfPortfolioHolding {
    'version': Version;
    'values': Array<PortfolioHolding>;
    'href'?: string;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<PortfolioHolding>"
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
        return VersionedResourceListOfPortfolioHolding.attributeTypeMap;
    }
}

