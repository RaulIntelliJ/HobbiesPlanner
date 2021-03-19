"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("./../models/User");
class UserRepository {
    async getUserById(id) {
        return User_1.User.findOne({
            where: {
                id: id
            }
        });
    }
    async getUserByEmail(email, password) {
        return User_1.User.findOne({
            where: {
                email: email
            }
        });
    }
    async getAllUsers() {
        return await User_1.User.findAll();
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map