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
import type { V1Node } from './V1Node';
import {
    V1NodeFromJSON,
    V1NodeFromJSONTyped,
    V1NodeToJSON,
    V1NodeToJSONTyped,
} from './V1Node';

/**
 * 
 * @export
 * @interface V1GetNodeResponse
 */
export interface V1GetNodeResponse {
    /**
     * 
     * @type {V1Node}
     * @memberof V1GetNodeResponse
     */
    node?: V1Node;
}

/**
 * Check if a given object implements the V1GetNodeResponse interface.
 */
export function instanceOfV1GetNodeResponse(value: object): value is V1GetNodeResponse {
    return true;
}

export function V1GetNodeResponseFromJSON(json: any): V1GetNodeResponse {
    return V1GetNodeResponseFromJSONTyped(json, false);
}

export function V1GetNodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GetNodeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'node': json['node'] == null ? undefined : V1NodeFromJSON(json['node']),
    };
}

export function V1GetNodeResponseToJSON(json: any): V1GetNodeResponse {
    return V1GetNodeResponseToJSONTyped(json, false);
}

export function V1GetNodeResponseToJSONTyped(value?: V1GetNodeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'node': V1NodeToJSON(value['node']),
    };
}

