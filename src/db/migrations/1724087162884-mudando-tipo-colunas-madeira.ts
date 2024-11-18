import { MigrationInterface, QueryRunner } from "typeorm";

export class MudandoTipoColunasMadeira1724087162884 implements MigrationInterface {
    name = 'MudandoTipoColunasMadeira1724087162884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "data_entrada"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "data_entrada" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "altura"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "altura" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "comprimento"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "comprimento" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "largura"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "largura" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "metro_cubico"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "metro_cubico" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "valor_pago"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "valor_pago" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "valor_pago"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "valor_pago" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "metro_cubico"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "metro_cubico" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "largura"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "largura" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "comprimento"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "comprimento" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "altura"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "altura" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "madeiras" DROP COLUMN "data_entrada"`);
        await queryRunner.query(`ALTER TABLE "madeiras" ADD "data_entrada" character varying NOT NULL`);
    }

}
