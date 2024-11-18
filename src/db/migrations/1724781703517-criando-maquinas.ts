import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoMaquinas1724781703517 implements MigrationInterface {
    name = 'CriandoMaquinas1724781703517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maquinas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "tipo_processo" character varying(50) NOT NULL, "fonte_energia" character varying(50) NOT NULL, "valor" double precision NOT NULL, "data_aquisicao" date NOT NULL, "vida_util" double precision NOT NULL, "depreciacao_anual" double precision NOT NULL, "depreciacao_dia" double precision NOT NULL, "dias_utilizados" integer NOT NULL, "horas_trabalhadas" double precision NOT NULL, "potencia" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_03277021499de4c201cf4b58501" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "maquinas"`);
    }

}
