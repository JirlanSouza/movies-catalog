"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovie1669417913433 = void 0;
const typeorm_1 = require("typeorm");
class CreateMovie1669417913433 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createIndex('movies', new typeorm_1.TableIndex({
            name: 'movies_title',
            columnNames: ['title'],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex('movies', 'movies_title');
        await queryRunner.dropTable('movies');
    }
}
exports.CreateMovie1669417913433 = CreateMovie1669417913433;
//# sourceMappingURL=1669417913433-CreateMovie.js.map