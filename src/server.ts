import 'dotenv/config';
import { connecDataBase } from './database/connect.database';
import app from './app';

const startServer = async () => {
    try {
        await connecDataBase();
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

startServer();
