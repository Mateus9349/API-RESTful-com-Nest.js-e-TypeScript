import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizandoTabelaProcessosAdicionandoDespesaMadeira1727360380026 implements MigrationInterface {
    name = 'AtualizandoTabelaProcessosAdicionandoDespesaMadeira1727360380026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processos " ADD "despesa_madeira" double precision NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "processos " ALTER COLUMN "quantidade_de_entrada" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processos " ALTER COLUMN "quantidade_de_entrada" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "processos " DROP COLUMN "despesa_madeira"`);
    }

}
