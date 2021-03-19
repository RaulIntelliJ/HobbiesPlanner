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
exports.Plan = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const UserPlan_1 = require("./UserPlan");
let Plan = class Plan extends sequelize_typescript_1.Model {
    get getId() {
        return this.id;
    }
    get getDuration() {
        return this.duration;
    }
    get getName() {
        return this.name;
    }
    get getHour() {
        return this.hour;
    }
    get getDate() {
        return this.date;
    }
    get getAgeAllowedBottom() {
        return this.ageAllowedBottom;
    }
    get getAgeAllowedTop() {
        return this.ageAllowedTop;
    }
    get getDescription() {
        return this.description;
    }
    get getParticipants() {
        return this.participants;
    }
    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    set setDuration(duration) {
        this.duration = duration;
    }
    set setHour(hour) {
        this.hour = hour;
    }
    set setDate(date) {
        this.date = date;
    }
    set setAgeAllowedTop(ageAllowedTop) {
        this.ageAllowedTop = ageAllowedTop;
    }
    set setAgeAllowedBottom(ageAllowedBottom) {
        this.ageAllowedBottom = ageAllowedBottom;
    }
    set setDescription(description) {
        this.description = description;
    }
    set setParticipants(participants) {
        this.participants = participants;
    }
};
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], Plan.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", Number)
], Plan.prototype, "duration", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", Number)
], Plan.prototype, "hour", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", Date)
], Plan.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", Number)
], Plan.prototype, "ageAllowedBottom", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", Number)
], Plan.prototype, "ageAllowedTop", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], Plan.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => UserPlan_1.UserPlan),
    __metadata("design:type", Array)
], Plan.prototype, "participants", void 0);
Plan = __decorate([
    sequelize_typescript_1.Table({ createdAt: false, updatedAt: false, tableName: "plan" })
], Plan);
exports.Plan = Plan;
//# sourceMappingURL=Plan.js.map