import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateUsersTable1580601294696 implements MigrationInterface {
    public name = 'CreateUsersTable1580601294696';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE `users` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NULL, `phoneNumber` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `IDX_1e3d0240b49c40521aaeb95329` (`phoneNumber`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP INDEX `IDX_1e3d0240b49c40521aaeb95329` ON `users`', undefined);
        await queryRunner.query('DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`', undefined);
        await queryRunner.query('DROP TABLE `users`', undefined);
    }

}
