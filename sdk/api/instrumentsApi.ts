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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { DeleteInstrumentResponse } from '../model/deleteInstrumentResponse';
import { GetInstrumentsResponse } from '../model/getInstrumentsResponse';
import { Instrument } from '../model/instrument';
import { InstrumentDefinition } from '../model/instrumentDefinition';
import { LusidProblemDetails } from '../model/lusidProblemDetails';
import { LusidValidationProblemDetails } from '../model/lusidValidationProblemDetails';
import { PagedResourceListOfInstrument } from '../model/pagedResourceListOfInstrument';
import { ResourceListOfInstrumentIdTypeDescriptor } from '../model/resourceListOfInstrumentIdTypeDescriptor';
import { UpdateInstrumentIdentifierRequest } from '../model/updateInstrumentIdentifierRequest';
import { UpsertInstrumentPropertiesResponse } from '../model/upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from '../model/upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from '../model/upsertInstrumentsResponse';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { OAuth } from '../model/models';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum InstrumentsApiApiKeys {
}

export class InstrumentsApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: InstrumentsApiApiKeys, value: string) {
        (this.authentications as any)[InstrumentsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    /**
     * Delete a single instrument identified by a unique instrument identifier. Once an instrument has been  deleted it will be marked as \'inactive\' and it can no longer be used when updating or inserting transactions or holdings.  You can still query existing transactions and holdings related to the deleted instrument.
     * @summary [EARLY ACCESS] Delete instrument
     * @param identifierType The identifier being supplied e.g. \&quot;Figi\&quot;.
     * @param identifier The value of the identifier that resolves to the instrument to delete.
     */
    public async deleteInstrument (identifierType: string, identifier: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeleteInstrumentResponse;  }> {
        const localVarPath = this.basePath + '/api/instruments/{identifierType}/{identifier}'
            .replace('{' + 'identifierType' + '}', encodeURIComponent(String(identifierType)))
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'identifierType' is not null or undefined
        if (identifierType === null || identifierType === undefined) {
            throw new Error('Required parameter identifierType was null or undefined when calling deleteInstrument.');
        }

        // verify required parameter 'identifier' is not null or undefined
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling deleteInstrument.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: DeleteInstrumentResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "DeleteInstrumentResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get the definition of a single instrument identified by a unique instrument identifier.
     * @summary Get instrument
     * @param identifierType The identifier being supplied e.g. \&quot;Figi\&quot;.
     * @param identifier The value of the identifier for the requested instrument.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the instrument definition.              Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the instrument definition. Defaults to              return the latest version of the instrument definition if not specified.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto the instrument.              These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     */
    public async getInstrument (identifierType: string, identifier: string, effectiveAt?: string, asAt?: Date, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Instrument;  }> {
        const localVarPath = this.basePath + '/api/instruments/{identifierType}/{identifier}'
            .replace('{' + 'identifierType' + '}', encodeURIComponent(String(identifierType)))
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'identifierType' is not null or undefined
        if (identifierType === null || identifierType === undefined) {
            throw new Error('Required parameter identifierType was null or undefined when calling getInstrument.');
        }

        // verify required parameter 'identifier' is not null or undefined
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling getInstrument.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Instrument;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Instrument");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get the allowable instrument identifier types and their descriptions.
     * @summary [EARLY ACCESS] Get instrument identifier types
     */
    public async getInstrumentIdentifierTypes (options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfInstrumentIdTypeDescriptor;  }> {
        const localVarPath = this.basePath + '/api/instruments/identifierTypes';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: ResourceListOfInstrumentIdTypeDescriptor;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ResourceListOfInstrumentIdTypeDescriptor");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Get the definition of one or more instruments identified by a collection of unique instrument identifiers.
     * @summary Get instruments
     * @param identifierType The identifier being supplied e.g. \&quot;Figi\&quot;.
     * @param identifiers The values of the identifier for the requested instruments.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the instrument definitions.              Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the instrument definitions.              Defaults to return the latest version of each instrument definition if not specified.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto the instrument.              These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     */
    public async getInstruments (identifierType: string, identifiers: Array<string>, effectiveAt?: string, asAt?: Date, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetInstrumentsResponse;  }> {
        const localVarPath = this.basePath + '/api/instruments/$get';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'identifierType' is not null or undefined
        if (identifierType === null || identifierType === undefined) {
            throw new Error('Required parameter identifierType was null or undefined when calling getInstruments.');
        }

        // verify required parameter 'identifiers' is not null or undefined
        if (identifiers === null || identifiers === undefined) {
            throw new Error('Required parameter identifiers was null or undefined when calling getInstruments.');
        }

        if (identifierType !== undefined) {
            localVarQueryParameters['identifierType'] = ObjectSerializer.serialize(identifierType, "string");
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(identifiers, "Array<string>")
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: GetInstrumentsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "GetInstrumentsResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * List all the instruments that have been mastered in the LUSID instrument master.  The maximum number of instruments that this method can list per request is 2,000.
     * @summary [EARLY ACCESS] List instruments
     * @param asAt The asAt datetime at which to list the instruments. Defaults to return the latest              version of each instruments if not specified.
     * @param effectiveAt The effective datetime or cut label at which to list the instruments.              Defaults to the current LUSID system datetime if not specified.
     * @param page The pagination token to use to continue listing instruments from a previous call to list instruments.              This value is returned from the previous call. If a pagination token is provided the sortBy, filter, effectiveAt, and asAt fields              must not have changed since the original request. Also, if set, a start value cannot be provided.
     * @param sortBy Order the results by these fields. Use use the \&#39;-\&#39; sign to denote descending order e.g. -MyFieldName.
     * @param start When paginating, skip this number of results.
     * @param limit When paginating, limit the number of returned results to this many.
     * @param filter Expression to filter the result set. Defaults to filter down to active instruments only, i.e. those              that have not been deleted. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param instrumentPropertyKeys A list of property keys from the \&quot;Instrument\&quot; domain to decorate onto each instrument. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot;.
     */
    public async listInstruments (asAt?: Date, effectiveAt?: string, page?: string, sortBy?: Array<string>, start?: number, limit?: number, filter?: string, instrumentPropertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PagedResourceListOfInstrument;  }> {
        const localVarPath = this.basePath + '/api/instruments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (sortBy !== undefined) {
            localVarQueryParameters['sortBy'] = ObjectSerializer.serialize(sortBy, "Array<string>");
        }

        if (start !== undefined) {
            localVarQueryParameters['start'] = ObjectSerializer.serialize(start, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (instrumentPropertyKeys !== undefined) {
            localVarQueryParameters['instrumentPropertyKeys'] = ObjectSerializer.serialize(instrumentPropertyKeys, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: PagedResourceListOfInstrument;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "PagedResourceListOfInstrument");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Update, insert or delete a single instrument identifier for a single instrument. If it is not being deleted  the identifier will be updated if it already exists and inserted if it does not.
     * @summary [EARLY ACCESS] Update instrument identifier
     * @param identifierType The identifier to use to resolve the instrument e.g. \&quot;Figi\&quot;.
     * @param identifier The original value of the identifier for the requested instrument.
     * @param request The identifier to update or remove. This may or may not be the same identifier used              to resolve the instrument.
     */
    public async updateInstrumentIdentifier (identifierType: string, identifier: string, request: UpdateInstrumentIdentifierRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Instrument;  }> {
        const localVarPath = this.basePath + '/api/instruments/{identifierType}/{identifier}'
            .replace('{' + 'identifierType' + '}', encodeURIComponent(String(identifierType)))
            .replace('{' + 'identifier' + '}', encodeURIComponent(String(identifier)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'identifierType' is not null or undefined
        if (identifierType === null || identifierType === undefined) {
            throw new Error('Required parameter identifierType was null or undefined when calling updateInstrumentIdentifier.');
        }

        // verify required parameter 'identifier' is not null or undefined
        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling updateInstrumentIdentifier.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateInstrumentIdentifier.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(request, "UpdateInstrumentIdentifierRequest")
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Instrument;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Instrument");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Update or insert one or more instruments into the LUSID instrument master. An instrument will be updated  if it already exists and inserted if it does not.                In the request each instrument definition should be keyed by a unique correlation id. This id is ephemeral  and is not stored by LUSID. It serves only as a way to easily identify each instrument in the response.                The response will return both the collection of successfully updated or inserted instruments, as well as those that failed.  For the failures a reason will be provided explaining why the instrument could not be updated or inserted.                It is important to always check the failed set for any unsuccessful results.  The maximum number of instruments that this method can upsert per request is 2,000.
     * @summary Upsert instruments
     * @param instruments The definitions of the instruments to update or insert.
     */
    public async upsertInstruments (instruments: { [key: string]: InstrumentDefinition; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpsertInstrumentsResponse;  }> {
        const localVarPath = this.basePath + '/api/instruments';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'instruments' is not null or undefined
        if (instruments === null || instruments === undefined) {
            throw new Error('Required parameter instruments was null or undefined when calling upsertInstruments.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(instruments, "{ [key: string]: InstrumentDefinition; }")
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: UpsertInstrumentsResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "UpsertInstrumentsResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Update or insert one or more instrument properties for one or more instruments. Each instrument property will be updated  if it already exists and inserted if it does not. If any properties fail to be updated or inserted, none will be updated or inserted and  the reason for the failure will be returned.
     * @summary Upsert instruments properties
     * @param instrumentProperties A collection of instruments and associated instrument properties to update or insert.
     */
    public async upsertInstrumentsProperties (instrumentProperties: Array<UpsertInstrumentPropertyRequest>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpsertInstrumentPropertiesResponse;  }> {
        const localVarPath = this.basePath + '/api/instruments/$upsertproperties';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'instrumentProperties' is not null or undefined
        if (instrumentProperties === null || instrumentProperties === undefined) {
            throw new Error('Required parameter instrumentProperties was null or undefined when calling upsertInstrumentsProperties.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(instrumentProperties, "Array<UpsertInstrumentPropertyRequest>")
        };

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: UpsertInstrumentPropertiesResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "UpsertInstrumentPropertiesResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
