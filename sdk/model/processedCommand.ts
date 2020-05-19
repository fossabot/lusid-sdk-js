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

import { User } from './user';

/**
* The list of commands.
*/
export class ProcessedCommand {
    /**
    * The description of the command issued.
    */
    'description': string;
    /**
    * The unique identifier for the command including the request id.
    */
    'path'?: string;
    'userId': User;
    /**
    * The asAt datetime that the events published by the processing of this command were committed to LUSID.
    */
    'processedTime': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "User"
        },
        {
            "name": "processedTime",
            "baseName": "processedTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ProcessedCommand.attributeTypeMap;
    }
}

