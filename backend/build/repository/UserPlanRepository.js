"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPlanRepository = void 0;
const UserPlan_1 = require("./../models/UserPlan");
class UserPlanRepository {
    async getAllPlansByUserId(id) {
        return UserPlan_1.UserPlan.findAll({
            where: {
                userId: id
            }
        });
    }
}
exports.UserPlanRepository = UserPlanRepository;
//# sourceMappingURL=UserPlanRepository.js.map