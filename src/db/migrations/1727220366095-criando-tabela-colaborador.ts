import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelaColaborador1727220366095 implements MigrationInterface {
    name = 'CriandoTabelaColaborador1727220366095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "colaboradores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(200) NOT NULL, "idade" integer NOT NULL, "sexo" character varying(10) NOT NULL, "comunidade" character varying(200) NOT NULL, "funcao" character varying(100) NOT NULL, "valor_hora" numeric NOT NULL, "valor_diaria" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "colaboradores"`);
    }

}
