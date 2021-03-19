import { User } from './../models/User';


export class UserRepository {
    async getUserById(id: number) {
        return User.findOne({
            where: {
                id: id
            }
        })
    }


    async getUserByEmail(email: string, password: string) {
        return User.findOne({
            where: {
                email: email
            }
        })
    }

    async getAllUsers() {
        return await User.findAll();
    }
}