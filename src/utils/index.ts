import handleRequest, { handleError } from "./api-response";
import { Request } from "express";
import Joi from "joi";
import { ENV } from "./constants";

export {
    handleRequest,
    handleError,
    ENV
};

/**Creates an error object with the specified message and status code.
 * -- Example usage: throw appError("User not found", 404)*/
export function appError(statusCode: number, message: string) {
    return { statusCode, message };
}

/**Validates request data (body, query or params) against schema. Returns request data if valid otherwise throws an error */
export function validateRequest(req: Request, validatorSchema: Joi.ObjectSchema<any>, reqType: 'body' | 'query' | 'params' = 'body') {
    const { error } = validatorSchema.validate(req[reqType]);
    if (error) throw appError(400, error.message);
    return req[reqType];
}

/**Returns "valid" if password passes all tests otherwise returns the reason for failure. */
export function passwordCheck(password: string): any {
    if (!/[a-z]/.test(password)) {
        return 'Password must contain at least one lowercase letter';
    }

    if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter';
    }

    if (!/[0-9]/.test(password)) {
        return 'Password must contain at least one number';
    }

    // if (!/[!@#$%^&*_()+=?]/.test(password)) {
    //     return "Password must contain at least one special character";
    // }

    // const repeatedCharPattern = /(\w)\1{2,}/;
    // if (repeatedCharPattern.test(password)) {
    //     return "Password must not contain more than 2 repeated characters";
    // }

    return 'valid';
}