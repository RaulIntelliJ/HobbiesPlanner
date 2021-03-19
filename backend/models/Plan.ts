import {Table, Column, Model, AllowNull, AutoIncrement, PrimaryKey, HasMany, BelongsToMany} from 'sequelize-typescript';
import { User } from './User';
import { UserPlan } from './UserPlan';

@Table({ createdAt: false, updatedAt: false, tableName:"plan" })
export class Plan extends Model<Plan> {
    
	/*@AutoIncrement
	@PrimaryKey
	@Column
	id: number;*/

    @Column({allowNull: false})
	name: string;

    @Column({allowNull: false})
    duration: number;

    @Column({allowNull: false})
    hour: number;

    @Column({allowNull: false})
    date: Date;

    @Column({allowNull: false})
    ageAllowedBottom: number;

    @Column({allowNull: false})
    ageAllowedTop: number;

    @Column({allowNull: false})
    description: string;

    @HasMany(() => UserPlan)
    participants: UserPlan[];

    public get getId() : number {
        return this.id
    }
    
    public get getDuration() : number {
        return this.duration;
    }
    
    public get getName() : string {
        return this.name;
    }

    public get getHour() : number {
        return this.hour;
    }

    public get getDate() : Date {
        return this.date;
    }

    public get getAgeAllowedBottom() : number {
        return this.ageAllowedBottom;
    }

    public get getAgeAllowedTop() : number {
        return this.ageAllowedTop;
    }

    public get getDescription() : string {
        return this.description;
    }

    public get getParticipants() : UserPlan[] {
        return this.participants;
    }

    public set setId(id : number) {
        this.id = id;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setDuration(duration: number) {
        this.duration = duration;
    }

    public set setHour(hour: number) {
        this.hour = hour;
    }

    public set setDate(date: Date) {
        this.date = date;
    }

    public set setAgeAllowedTop(ageAllowedTop: number) {
        this.ageAllowedTop = ageAllowedTop;
    }

    public set setAgeAllowedBottom(ageAllowedBottom: number) {
        this.ageAllowedBottom = ageAllowedBottom;
    }

    public set setDescription(description: string) {
        this.description = description;
    }

    public set setParticipants(participants: UserPlan[]) {
        this.participants = participants;
    }

}