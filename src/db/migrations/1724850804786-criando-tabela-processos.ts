import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelaProcessos1724850804786 implements MigrationInterface {
    name = 'CriandoTabelaProcessos1724850804786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "processos " ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "madeira_id" character varying(200) NOT NULL, "tipo_processo" character varying(100) NOT NULL, "produto" character varying(100) NOT NULL, "inicio" date NOT NULL, "fim" date NOT NULL, "despesa_energia" double precision NOT NULL, "despesa_colaborador" double precision NOT NULL, "despesa_maquina" double precision NOT NULL, "despesa_insumos" double precision NOT NULL, "finalizado" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_970297362abb2cc212b077a7181" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "processos "`);
    }

}
