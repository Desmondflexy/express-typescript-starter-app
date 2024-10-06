import type { Request, Response } from 'express';

declare global {
    namespace Express {
        export interface Request {
            user: IUserPayload;
        }
    }

    type IUserPayload = {
        id: string;
        role: string;
    }

    type RoutesListType = {
        path: string;
        route: Router;
    }[];

    type ServiceMethod = (req: Request, res?: Response) => ServiceResponseType;

    type ServiceResponseType = Promise<{
        statusCode?: number;
        message: string;
        data?: object;
    }>;
}
