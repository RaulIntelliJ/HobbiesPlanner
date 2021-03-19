"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: 'hobbiesplanner',
    dialect: 'mysql',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    storage: ':memory:',
    models: [__dirname + '/models'],
});
//# sourceMappingURL=sequelize.js.map