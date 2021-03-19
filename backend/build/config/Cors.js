"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
//const whitelist = process.env.CORS_WHITELIST.split(',')
const options = {
    origin: '*',
    credentials: false,
    allowedHeaders: 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
    methods: 'POST, GET, DELETE, PUT, OPTIONS',
    maxAge: 3600
};
exports.default = cors(options);
//# sourceMappingURL=Cors.js.map