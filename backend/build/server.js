"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const sequelize_1 = require("./sequelize");
(async () => {
    await sequelize_1.sequelize.sync({ force: false });
    let server = new app_1.HobbiesPlannerServer();
    server.start();
})();
//# sourceMappingURL=server.js.map