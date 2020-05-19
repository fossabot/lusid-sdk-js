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

import { ActionId } from './actionId';
import { IdSelectorDefinition } from './idSelectorDefinition';
import { Link } from './link';

export class AccessControlledAction {
    'description': string;
    'action': ActionId;
    'limitedSet'?: Array<IdSelectorDefinition>;
    'links'?: Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "ActionId"
        },
        {
            "name": "limitedSet",
            "baseName": "limitedSet",
            "type": "Array<IdSelectorDefinition>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return AccessControlledAction.attributeTypeMap;
    }
}

