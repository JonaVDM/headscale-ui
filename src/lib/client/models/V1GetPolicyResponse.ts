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
 * @interface V1GetPolicyResponse
 */
export interface V1GetPolicyResponse {
    /**
     * 
     * @type {string}
     * @memberof V1GetPolicyResponse
     */
    policy?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1GetPolicyResponse
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the V1GetPolicyResponse interface.
 */
export function instanceOfV1GetPolicyResponse(value: object): value is V1GetPolicyResponse {
    return true;
}

export function V1GetPolicyResponseFromJSON(json: any): V1GetPolicyResponse {
    return V1GetPolicyResponseFromJSONTyped(json, false);
}

export function V1GetPolicyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GetPolicyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'policy': json['policy'] == null ? undefined : json['policy'],
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
    };
}

export function V1GetPolicyResponseToJSON(json: any): V1GetPolicyResponse {
    return V1GetPolicyResponseToJSONTyped(json, false);
}

export function V1GetPolicyResponseToJSONTyped(value?: V1GetPolicyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'policy': value['policy'],
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

