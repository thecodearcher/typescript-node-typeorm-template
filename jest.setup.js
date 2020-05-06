const { createConnection } = require("typeorm")

let DbCon;
beforeEach(async (done) => {
    try {
        DbCon = await createConnection({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            migrations: ['/src/db/migrations/*.ts'],
            entities: ['**/api/**/*Model.ts'],
        });
        done()
    } catch (err) {
        throw new Error(('Unable to connect to the database:' + err));
    }

});

afterEach(() => {
    return DbCon.close()
})