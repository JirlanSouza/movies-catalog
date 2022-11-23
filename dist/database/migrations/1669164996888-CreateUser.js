"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1669164996888 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1669164996888 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user');
    }
}
exports.CreateUser1669164996888 = CreateUser1669164996888;
//# sourceMappingURL=1669164996888-CreateUser.js.map