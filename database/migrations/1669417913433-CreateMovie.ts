import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateMovie1669417913433 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'genre',
            type: 'varchar',
          },
          {
            name: 'overview',
            type: 'varchar',
          },
          {
            name: 'company',
            type: 'varchar',
          },
          {
            name: 'releaseDate',
            type: 'date',
          },
          {
            name: 'votesAvg',
            type: 'integer',
            default: 0,
          },
          {
            name: 'votesCount',
            type: 'integer',
            default: 0,
          },
          {
            name: 'runtimeUrl',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createIndex(
      'movies',
      new TableIndex({
        name: 'movies_title',
        columnNames: ['title'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('movies', 'movies_title');
    await queryRunner.dropTable('movies');
  }
}
