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

import { ActionId } from './actionId';

export class IdSelectorDefinition {
    'identifier'?: { [key: string]: string; };
    'actions'?: Array<ActionId>;
    'name'?: string;
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<ActionId>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IdSelectorDefinition.attributeTypeMap;
    }
}

