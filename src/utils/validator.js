import Joi from 'joi-browser';

export const validate = (data, schema) => {
  const { error } = Joi.validate(data, schema, {
    abortEarly: false
  });
  return error ? error.details : null;
};

export const validateProperty = ({ name, value }, schema) => {
  const propertySchema = { [name]: schema[name] };
  const data = { [name]: value };
  const { error } = Joi.validate(data, propertySchema, {
    language: {
      key: '{{key}} '
    }
  });
  return error ? error.details[0].message : null;
};
