import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { PlanManager } from './../manager/PlanManager';
import { Request, Response } from 'express';

@Controller('plans')
export class PlanController {
    planManager: PlanManager = new PlanManager();

    @Get('all')
    async getAll(req: Request, res: Response) {
        return res.status(200).json(await this.planManager.findAllPlans());
    }

    @Get(':id')
    async get(req: Request, res: Response) {
        let user = await this.planManager.findPlanById(Number.parseInt(req.params.id));
        return res.status(200).json(user);
    }
}