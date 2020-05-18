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

import { InstrumentEconomicDefinition } from './instrumentEconomicDefinition';
import { Link } from './link';
import { Property } from './property';
import { ResourceId } from './resourceId';
import { Version } from './version';

/**
* A list of instruments.
*/
export class Instrument {
    /**
    * The specific Uniform Resource Identifier (URI) for this resource at the requested effective and asAt datetime.
    */
    'href'?: string;
    /**
    * The unique LUSID Instrument Identifier (LUID) of the instrument.
    */
    'lusidInstrumentId': string;
    'version': Version;
    /**
    * The name of the instrument.
    */
    'name': string;
    /**
    * The set of identifiers that can be used to identify the instrument.
    */
    'identifiers': { [key: string]: string; };
    /**
    * The requested instrument properties. These will be from the \'Instrument\' domain.
    */
    'properties'?: Array<Property>;
    'lookthroughPortfolio'?: ResourceId;
    'instrumentDefinition'?: InstrumentEconomicDefinition;
    /**
    * The state of of the instrument at the asAt datetime of this version of the instrument definition.
    */
    'state': Instrument.StateEnum;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "lusidInstrumentId",
            "baseName": "lusidInstrumentId",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<Property>"
        },
        {
            "name": "lookthroughPortfolio",
            "baseName": "lookthroughPortfolio",
            "type": "ResourceId"
        },
        {
            "name": "instrumentDefinition",
            "baseName": "instrumentDefinition",
            "type": "InstrumentEconomicDefinition"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "Instrument.StateEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return Instrument.attributeTypeMap;
    }
}

export namespace Instrument {
    export enum StateEnum {
        Active = <any> 'Active',
        Inactive = <any> 'Inactive'
    }
}
