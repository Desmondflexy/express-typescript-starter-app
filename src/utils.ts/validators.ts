import joi from 'joi';
import { passwordCheck } from '.';

class Validator {

    signup = joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required().min(8).custom((value, helpers) => {
            const result = passwordCheck(value);
            if (result !== 'valid') {
                return helpers.message(result);
            }
            return value;
        }),
        confirm: joi.string().valid(joi.ref('password')).required().messages({ 'any.only': 'Passwords do not match' }),
    });


    login = joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });


    private schemas: Record<string, joi.ObjectSchema> = {
        signup: this.signup,
        login: this.login,
    };


    /**Get schema dynamically by schemaName */
    getSchema(schemaName: string) {
        const schema = this.schemas[schemaName];
        if (!schema) {
            throw new Error(`Joi validation: Schema ${schemaName} not found`);
        }
        return this.schemas[schemaName];
    }
}


const validator = new Validator();
export default validator;
