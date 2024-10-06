import express, { Router } from 'express';

const router = express.Router();

type RoutesListType = {
    path: string;
    route: Router;
}[];

const defaultRoutes: RoutesListType = [];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
