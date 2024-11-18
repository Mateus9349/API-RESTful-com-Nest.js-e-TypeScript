import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelaComprador1729472171424 implements MigrationInterface {
    name = 'CriandoTabelaComprador1729472171424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "compradores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "razao_social" character varying(200) NOT NULL, "cnpj" character varying(18) NOT NULL, "inscricao_municipal" character varying(50) NOT NULL, "inscricao_estadual" character varying(50), "endereco" character varying(200) NOT NULL, "telefone" character varying(20), "celular" character varying(20) NOT NULL, "email" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_6eaeb1398a2d6d1ac56113ebb8c" UNIQUE ("cnpj"), CONSTRAINT "PK_c9fd683d8d305120866ba84ad73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "processos " ALTER COLUMN "despesa_madeira" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processos " ALTER COLUMN "despesa_madeira" SET DEFAULT '0'`);
        await queryRunner.query(`DROP TABLE "compradores"`);
    }

}
