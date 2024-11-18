import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelaMadeira1724085687486 implements MigrationInterface {
    name = 'CriaTabelaMadeira1724085687486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "madeiras" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data_entrada" character varying NOT NULL, "tipo" character varying(30) NOT NULL, "dofe" character varying(50) NOT NULL, "codigo" character varying(50) NOT NULL, "altura" integer NOT NULL, "comprimento" integer NOT NULL, "largura" integer NOT NULL, "metro_cubico" integer NOT NULL, "valor_pago" integer NOT NULL, "ativo" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_8731826d3860550f9ee46110ddb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "madeiras"`);
    }

}
