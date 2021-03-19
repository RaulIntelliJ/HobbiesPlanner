import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { UserPlanManager } from './../manager/UserPlanManager';
import { Request, Response } from 'express';

@Controller('userplans')
export class UserPlanController {
    userPlanManager: UserPlanManager = new UserPlanManager();

    @Get(':id')
    async get(req: Request, res: Response) {
        let user = await this.userPlanManager.findPlansByUserId(Number.parseInt(req.params.id));
        return res.status(200).json(user);
    }
}