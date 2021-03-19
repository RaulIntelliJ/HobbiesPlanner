"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbiesPlannerServer = void 0;
const bodyParser = require("body-parser");
const core_1 = require("@overnightjs/core");
const UserController_1 = require("./controllers/UserController");
const PlanController_1 = require("./controllers/PlanController");
const UserPlanController_1 = require("./controllers/UserPlanController");
const Cors_1 = require("./config/Cors");
class HobbiesPlannerServer extends core_1.Server {
    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(Cors_1.default);
        super.addControllers([new UserController_1.UserController(), new PlanController_1.PlanController(), new UserPlanController_1.UserPlanController()]);
    }
    start() {
        this.app.listen(3000, () => {
            console.log('Server listening on port: ' + '3000');
        });
    }
}
exports.HobbiesPlannerServer = HobbiesPlannerServer;
//# sourceMappingURL=app.js.map