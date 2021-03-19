import {UserRepository} from './../repository/UserRepository';
import {User} from './../models/User';

export class UserManager {
    userRepository = new UserRepository();

    async findUser(email : string, password: string): Promise<User> {
        return await this.userRepository.getUserByEmail(email, password);
    }

    async findUserById(id: number): Promise<User> {
        return await this.userRepository.getUserById(id);
    }

    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.getAllUsers();
    }
}