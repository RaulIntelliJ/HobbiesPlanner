import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { UserManager } from './../manager/UserManager';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
    userManager: UserManager = new UserManager();

    @Get('all')
    async getAll(req: Request, res: Response) {
        return res.status(200).json(await this.userManager.findAllUsers());
    }

    @Get(':id')
    async get(req: Request, res: Response) {
        let user = await this.userManager.findUserById(Number.parseInt(req.params.id));
        return res.status(200).json(user);
    }
}