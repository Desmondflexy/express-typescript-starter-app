import express from 'express';
import usersRouter from "./users";

const router = express.Router();

const defaultRoutes: RoutesListType = [
    { path: "/users", route: usersRouter }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
