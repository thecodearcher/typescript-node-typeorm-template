import express from "express";
import { userRouter } from "./api/User";
import { BASE_PATH, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "./config";
import { errorHandler, global } from "./middleware";
import { logger } from "./utils/logger";
import { createConnection } from "typeorm";
import "reflect-metadata";
class App {
    public express = express();
    public basePath = BASE_PATH || "";
    constructor() {
        this.boot();
    }

    private boot() {
        this.initializeDb();
        this.registerMiddlewares();
        this.mountRoutes();
        this.handleUncaughtErrorEvents();

    }

    private mountRoutes() {
        this.express.use(`${this.basePath}/user`, userRouter);
    }

    private registerMiddlewares() {
        global(this.express);
    }

    private async initializeDb() {
        try {
            await createConnection({
                type: "mysql",
                host: DB_HOST,
                port: 3306,
                username: DB_USER,
                password: DB_PASSWORD,
                database: DB_NAME,
                synchronize: false,
                migrations: ["/src/db/migrations/*.ts"],
                entities: ["**/api/**/*Model.js"],
            });
            logger.info("Database connection has been established successfully.");
        } catch (err) {
            throw new Error(("Unable to connect to the database:" + err));
        }

    }

    // Error handlers
    private handleUncaughtErrorEvents() {
        process.on("unhandledRejection", (reason, promise) => {
            throw reason;
        });

        process.on("uncaughtException", (error) => {
            logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
            process.exit(1);
        });

        process.on("SIGINT", () => {
            logger.info(" Alright! Bye bye!");
            process.exit();
        });

        this.express.use(errorHandler);

    }
}

const app = new App().express;
export default app;
