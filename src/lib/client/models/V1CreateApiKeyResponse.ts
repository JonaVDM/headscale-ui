/* tslint:disable */
/* eslint-disable */
/**
 * headscale/v1/headscale.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1CreateApiKeyResponse
 */
export interface V1CreateApiKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof V1CreateApiKeyResponse
     */
    apiKey?: string;
}

/**
 * Check if a given object implements the V1CreateApiKeyResponse interface.
 */
export function instanceOfV1CreateApiKeyResponse(value: object): value is V1CreateApiKeyResponse {
    return true;
}

export function V1CreateApiKeyResponseFromJSON(json: any): V1CreateApiKeyResponse {
    return V1CreateApiKeyResponseFromJSONTyped(json, false);
}

export function V1CreateApiKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateApiKeyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'apiKey': json['apiKey'] == null ? undefined : json['apiKey'],
    };
}

export function V1CreateApiKeyResponseToJSON(json: any): V1CreateApiKeyResponse {
    return V1CreateApiKeyResponseToJSONTyped(json, false);
}

export function V1CreateApiKeyResponseToJSONTyped(value?: V1CreateApiKeyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiKey': value['apiKey'],
    };
}

