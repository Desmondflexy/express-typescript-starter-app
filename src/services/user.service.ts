import { Request, Response } from "express";
import { appError } from "../utils.ts";

class UserService {
    async getUsers(req: Request): ServiceResponseType {
        if (Math.random() > 0.5) {
            throw appError(500, "Failed to get users");
        }
        const users = [{ name: "John Micheal" }, { name: "Jane Doe" }];
        return {
            message: "Get all users",
            data: users
        }
    }
}

const userService = new UserService();
export default userService;