import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from "path";
import router from './routes';
import { ENV } from './utils';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use(router);

app.listen(ENV.PORT, () => console.log(`Server is running on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`));
