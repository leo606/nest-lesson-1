import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1658710352564 implements MigrationInterface {
    name = 'initial1658710352564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_technologies_technologies" ("usersId" integer NOT NULL, "technologiesId" integer NOT NULL, CONSTRAINT "PK_17d1513677546f6e1d9b2a192af" PRIMARY KEY ("usersId", "technologiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4b183e88b3aae55a5fe57087c8" ON "users_technologies_technologies" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a240ffc539cbea3857c1f147b3" ON "users_technologies_technologies" ("technologiesId") `);
        await queryRunner.query(`ALTER TABLE "users_technologies_technologies" ADD CONSTRAINT "FK_4b183e88b3aae55a5fe57087c8e" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_technologies_technologies" ADD CONSTRAINT "FK_a240ffc539cbea3857c1f147b34" FOREIGN KEY ("technologiesId") REFERENCES "technologies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_technologies_technologies" DROP CONSTRAINT "FK_a240ffc539cbea3857c1f147b34"`);
        await queryRunner.query(`ALTER TABLE "users_technologies_technologies" DROP CONSTRAINT "FK_4b183e88b3aae55a5fe57087c8e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a240ffc539cbea3857c1f147b3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4b183e88b3aae55a5fe57087c8"`);
        await queryRunner.query(`DROP TABLE "users_technologies_technologies"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
