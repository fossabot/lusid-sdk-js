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

import { InstrumentIdTypeDescriptor } from './instrumentIdTypeDescriptor';
import { Link } from './link';

export class ResourceListOfInstrumentIdTypeDescriptor {
    'values': Array<InstrumentIdTypeDescriptor>;
    'href'?: string;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<InstrumentIdTypeDescriptor>"
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
        return ResourceListOfInstrumentIdTypeDescriptor.attributeTypeMap;
    }
}

