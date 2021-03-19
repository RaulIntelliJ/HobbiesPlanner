"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPlanManager = void 0;
const UserPlanRepository_1 = require("./../repository/UserPlanRepository");
class UserPlanManager {
    constructor() {
        this.userPlanRepository = new UserPlanRepository_1.UserPlanRepository();
    }
    async findPlansByUserId(id) {
        return await this.userPlanRepository.getAllPlansByUserId(id);
    }
}
exports.UserPlanManager = UserPlanManager;
//# sourceMappingURL=UserPlan.js.map