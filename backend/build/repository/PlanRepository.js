"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanRepository = void 0;
const Plan_1 = require("./../models/Plan");
class PlanRepository {
    async getPlanById(id) {
        return Plan_1.Plan.findOne({
            where: {
                id: id
            }
        });
    }
    async getAllPlans() {
        let plans = await Plan_1.Plan.findAll();
        console.log(plans);
        return plans;
    }
}
exports.PlanRepository = PlanRepository;
//# sourceMappingURL=PlanRepository.js.map