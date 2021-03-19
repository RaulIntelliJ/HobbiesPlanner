import { UserPlan } from './../models/UserPlan';


export class UserPlanRepository {
    async getAllPlansByUserId(id: number) {
        return UserPlan.findAll({
            where: {
                userId: id
            }
        })
    }
}