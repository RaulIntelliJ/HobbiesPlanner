import { Plan } from './../models/Plan';


export class PlanRepository {
    async getPlanById(id: number) {
        return Plan.findOne({
            where: {
                id: id
            }
        })
    }

    async getAllPlans() {
        let plans = await Plan.findAll();
        console.log(plans);
        return plans;
    }
}