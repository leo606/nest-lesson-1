import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class createUserIdColumnInUserTechnologiesTable1659481266951
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users_technologies',
      new TableColumn({
        name: 'userId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'users_technologies',
      new TableForeignKey({
        name: 'user_technologies_user',
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'users_technologies',
      'user_technologies_user',
    );

    await queryRunner.dropColumn('users_technologies', 'userId');
  }
}
