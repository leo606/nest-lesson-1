import { MigrationInterface, QueryRunner } from "typeorm";

export class userAddressColumnRemove1658710547128 implements MigrationInterface {
    name = 'userAddressColumnRemove1658710547128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "address" integer`);
    }

}
