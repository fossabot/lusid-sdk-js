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

import { InstrumentEconomicDefinition } from './instrumentEconomicDefinition';
import { InstrumentIdValue } from './instrumentIdValue';
import { Property } from './property';
import { ResourceId } from './resourceId';

export class InstrumentDefinition {
    /**
    * The name of the instrument.
    */
    'name': string;
    /**
    * A set of identifiers that can be used to identify the instrument. At least one of these must be configured to be a unique identifier.
    */
    'identifiers': { [key: string]: InstrumentIdValue; };
    /**
    * Set of unique instrument properties and associated values to store with the instrument. Each property must be from the \'Instrument\' domain.
    */
    'properties'?: Array<Property>;
    'lookThroughPortfolioId'?: ResourceId;
    'definition'?: InstrumentEconomicDefinition;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "{ [key: string]: InstrumentIdValue; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<Property>"
        },
        {
            "name": "lookThroughPortfolioId",
            "baseName": "lookThroughPortfolioId",
            "type": "ResourceId"
        },
        {
            "name": "definition",
            "baseName": "definition",
            "type": "InstrumentEconomicDefinition"
        }    ];

    static getAttributeTypeMap() {
        return InstrumentDefinition.attributeTypeMap;
    }
}

