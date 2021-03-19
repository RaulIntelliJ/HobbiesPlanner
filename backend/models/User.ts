import {Table, Column, Model, AllowNull, AutoIncrement, PrimaryKey, BelongsToMany, HasMany} from 'sequelize-typescript';
import { Plan } from './Plan';
import { UserPlan } from './UserPlan';

@Table({ createdAt: false, updatedAt: false, tableName:"user" })
export class User extends Model<User> {

	/*@AutoIncrement
	@PrimaryKey
	@Column
	id: number;*/

  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false, unique: true})
  email: string;

  @Column({allowNull: false, unique: true})
  password: string;

  @HasMany(() => UserPlan)
  plans: UserPlan[];

  public get getId() : number {
    return this.id
  }

  public get getName() : string {
    return this.name
  }

  public get getPassword() : string {
    return this.password
  }

  public get getEmail() : string {
    return this.email
  }

  public get getPlans() : UserPlan[] {
    return this.plans
  }

  public set setId(id : number) {
    this.id = id;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public set setEmail(email: string) {
    this.email = email;
  }

  public set setPassword(password: string) {
    this.password = password;
  }

  
}