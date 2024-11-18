import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizandoTabelaProcessos1727358416993 implements MigrationInterface {
    name = 'AtualizandoTabelaProcessos1727358416993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processos " ADD "quantidade_de_entrada" double precision NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processos " DROP COLUMN "quantidade_de_entrada"`);
    }

}
