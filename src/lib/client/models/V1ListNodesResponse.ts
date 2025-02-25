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
 * @interface V1ListNodesResponse
 */
export interface V1ListNodesResponse {
    /**
     * 
     * @type {Array<V1Node>}
     * @memberof V1ListNodesResponse
     */
    nodes?: Array<V1Node>;
}

/**
 * Check if a given object implements the V1ListNodesResponse interface.
 */
export function instanceOfV1ListNodesResponse(value: object): value is V1ListNodesResponse {
    return true;
}

export function V1ListNodesResponseFromJSON(json: any): V1ListNodesResponse {
    return V1ListNodesResponseFromJSONTyped(json, false);
}

export function V1ListNodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListNodesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'nodes': json['nodes'] == null ? undefined : ((json['nodes'] as Array<any>).map(V1NodeFromJSON)),
    };
}

export function V1ListNodesResponseToJSON(json: any): V1ListNodesResponse {
    return V1ListNodesResponseToJSONTyped(json, false);
}

export function V1ListNodesResponseToJSONTyped(value?: V1ListNodesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nodes': value['nodes'] == null ? undefined : ((value['nodes'] as Array<any>).map(V1NodeToJSON)),
    };
}

