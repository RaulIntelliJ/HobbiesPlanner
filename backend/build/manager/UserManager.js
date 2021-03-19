"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const UserRepository_1 = require("./../repository/UserRepository");
class UserManager {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
    }
    async findUser(email, password) {
        return await this.userRepository.getUserByEmail(email, password);
    }
    async findUserById(id) {
        return await this.userRepository.getUserById(id);
    }
    async findAllUsers() {
        return await this.userRepository.getAllUsers();
    }
}
exports.UserManager = UserManager;
//# sourceMappingURL=UserManager.js.map