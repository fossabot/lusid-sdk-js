/**
 * LUSID API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.10.1380
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Link } from './link';

export class DeletedEntityResponse {
    /**
    * The specific Uniform Resource Identifier (URI) for this resource at the requested effective and asAt datetime.
    */
    'href'?: string;
    /**
    * The effective datetime at which the deletion became valid. May be null in the case where multiple date times are applicable.
    */
    'effectiveFrom'?: Date;
    /**
    * The asAt datetime at which the deletion was committed to LUSID.
    */
    'asAt': Date;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "effectiveFrom",
            "baseName": "effectiveFrom",
            "type": "Date"
        },
        {
            "name": "asAt",
            "baseName": "asAt",
            "type": "Date"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return DeletedEntityResponse.attributeTypeMap;
    }
}

