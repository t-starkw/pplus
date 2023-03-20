const { Schema } = require('mongoose');

const pwdSchema = new Schema(
    {
        site: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
);

module.exports = pwdSchema;