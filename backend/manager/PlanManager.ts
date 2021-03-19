import {PlanRepository} from './../repository/PlanRepository';
import {Plan} from './../models/Plan';

export class PlanManager {
    planRepository = new PlanRepository();

    async findPlanById(id: number): Promise<Plan> {
        return await this.planRepository.getPlanById(id);
    }

    async findAllPlans(): Promise<Plan[]> {
        return await this.planRepository.getAllPlans();
    }
}