import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class createTechnologyIdColumnInUserTechnologiesTable1659481926742
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users_technologies',
      new TableColumn({
        name: 'technologyId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'users_technologies',
      new TableForeignKey({
        name: 'user_technologies_technology',
        columnNames: ['technologyId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'technologies',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'users_technologies',
      'user_technologies_technology',
    );

    await queryRunner.dropColumn('users_technologies', 'technologyId');
  }
}
