import 'dotenv/config';
import { connecDataBase } from './database/connect.database';
import app from "./app";

const port = process.env.PORT || 3000;

connecDataBase();

app.listen(port, () => console.log(`Server is running port ${port}`));