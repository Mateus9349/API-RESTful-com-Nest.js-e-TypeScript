import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTabelaMadeira1725666970516 implements MigrationInterface {
    name = 'ModificandoTabelaMadeira1725666970516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "dofe"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "codigo"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "data_entrada"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "altura"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "valor_pago"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "data" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "placa" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "processada" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "nome_popular" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "nome_cientifico" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "tora" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "produto" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "expessura" double precision`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "quantidade" integer`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "COD" integer`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "NF" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "DOF" character varying`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "observacao" text`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "valor" double precision`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "largura" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "comprimento" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "metro_cubico" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "ativo" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "ativo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "metro_cubico" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "comprimento" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ALTER COLUMN "largura" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "observacao"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "DOF"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "NF"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "COD"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "quantidade"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "expessura"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "produto"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "tora"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "nome_cientifico"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "nome_popular"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "processada"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "placa"`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "valor_pago" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "altura" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "data_entrada" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "codigo" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "dofe" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "tipo" character varying(30) NOT NULL`);
    }

}
