"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanManager = void 0;
const PlanRepository_1 = require("./../repository/PlanRepository");
class PlanManager {
    constructor() {
        this.planRepository = new PlanRepository_1.PlanRepository();
    }
    async findPlanById(id) {
        return await this.planRepository.getPlanById(id);
    }
    async findAllPlans() {
        return await this.planRepository.getAllPlans();
    }
}
exports.PlanManager = PlanManager;
//# sourceMappingURL=PlanManager.js.map