import { Request, Response } from "express";
import { handleRequest } from "../utils.ts";
import { userService } from "../services";

class UserController {
    getAllUsers(req: Request, res: Response) {
        handleRequest(req, res, () => userService.getUsers(req), 'users');
    }
}

const userController = new UserController();
export default userController;
