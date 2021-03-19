"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanController = void 0;
const core_1 = require("@overnightjs/core");
const PlanManager_1 = require("./../manager/PlanManager");
let PlanController = class PlanController {
    constructor() {
        this.planManager = new PlanManager_1.PlanManager();
    }
    async getAll(req, res) {
        return res.status(200).json(await this.planManager.findAllPlans());
    }
    async get(req, res) {
        let user = await this.planManager.findPlanById(Number.parseInt(req.params.id));
        return res.status(200).json(user);
    }
};
__decorate([
    core_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getAll", null);
__decorate([
    core_1.Get(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "get", null);
PlanController = __decorate([
    core_1.Controller('plans')
], PlanController);
exports.PlanController = PlanController;
//# sourceMappingURL=PlanController.js.map