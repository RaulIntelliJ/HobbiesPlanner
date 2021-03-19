import {Table, Column, Model, AllowNull, AutoIncrement, PrimaryKey, ForeignKey} from 'sequelize-typescript';
import { Plan } from './Plan';
import { User } from './User';

@Table({ createdAt: false, updatedAt: false, tableName:"userplan" })
export class UserPlan extends Model<UserPlan> {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId: number

    @ForeignKey(() => Plan)
    @PrimaryKey
    @Column
    planId: number
}