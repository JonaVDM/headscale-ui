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
 * @interface V1DebugCreateNodeRequest
 */
export interface V1DebugCreateNodeRequest {
    /**
     * 
     * @type {string}
     * @memberof V1DebugCreateNodeRequest
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof V1DebugCreateNodeRequest
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof V1DebugCreateNodeRequest
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1DebugCreateNodeRequest
     */
    routes?: Array<string>;
}

/**
 * Check if a given object implements the V1DebugCreateNodeRequest interface.
 */
export function instanceOfV1DebugCreateNodeRequest(value: object): value is V1DebugCreateNodeRequest {
    return true;
}

export function V1DebugCreateNodeRequestFromJSON(json: any): V1DebugCreateNodeRequest {
    return V1DebugCreateNodeRequestFromJSONTyped(json, false);
}

export function V1DebugCreateNodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DebugCreateNodeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : json['user'],
        'key': json['key'] == null ? undefined : json['key'],
        'name': json['name'] == null ? undefined : json['name'],
        'routes': json['routes'] == null ? undefined : json['routes'],
    };
}

export function V1DebugCreateNodeRequestToJSON(json: any): V1DebugCreateNodeRequest {
    return V1DebugCreateNodeRequestToJSONTyped(json, false);
}

export function V1DebugCreateNodeRequestToJSONTyped(value?: V1DebugCreateNodeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'key': value['key'],
        'name': value['name'],
        'routes': value['routes'],
    };
}

