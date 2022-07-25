import { MigrationInterface, QueryRunner } from "typeorm";

export class userAddressColumn1658710491941 implements MigrationInterface {
    name = 'userAddressColumn1658710491941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "address" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
    }

}
