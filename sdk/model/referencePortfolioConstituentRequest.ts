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

import { PerpetualProperty } from './perpetualProperty';

export class ReferencePortfolioConstituentRequest {
    /**
    * Unique instrument identifiers
    */
    'instrumentIdentifiers': { [key: string]: string; };
    'properties'?: { [key: string]: PerpetualProperty; };
    /**
    * 
    */
    'weight': number;
    /**
    * 
    */
    'currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instrumentIdentifiers",
            "baseName": "instrumentIdentifiers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReferencePortfolioConstituentRequest.attributeTypeMap;
    }
}

