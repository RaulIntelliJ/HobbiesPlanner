import {UserPlanRepository} from '../repository/UserPlanRepository';
import {UserPlan} from '../models/UserPlan';

export class UserPlanManager {
    userPlanRepository = new UserPlanRepository();

    async findPlansByUserId(id: number): Promise<UserPlan[]> {
        return await this.userPlanRepository.getAllPlansByUserId(id);
    }
}