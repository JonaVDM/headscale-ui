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
import type { V1User } from './V1User';
import {
    V1UserFromJSON,
    V1UserFromJSONTyped,
    V1UserToJSON,
    V1UserToJSONTyped,
} from './V1User';

/**
 * 
 * @export
 * @interface V1RenameUserResponse
 */
export interface V1RenameUserResponse {
    /**
     * 
     * @type {V1User}
     * @memberof V1RenameUserResponse
     */
    user?: V1User;
}

/**
 * Check if a given object implements the V1RenameUserResponse interface.
 */
export function instanceOfV1RenameUserResponse(value: object): value is V1RenameUserResponse {
    return true;
}

export function V1RenameUserResponseFromJSON(json: any): V1RenameUserResponse {
    return V1RenameUserResponseFromJSONTyped(json, false);
}

export function V1RenameUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RenameUserResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : V1UserFromJSON(json['user']),
    };
}

export function V1RenameUserResponseToJSON(json: any): V1RenameUserResponse {
    return V1RenameUserResponseToJSONTyped(json, false);
}

export function V1RenameUserResponseToJSONTyped(value?: V1RenameUserResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': V1UserToJSON(value['user']),
    };
}

