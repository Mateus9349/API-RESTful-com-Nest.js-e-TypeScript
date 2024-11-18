import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizandoTabelaCompradorComCepMunicipioUf1729690778057 implements MigrationInterface {
    name = 'AtualizandoTabelaCompradorComCepMunicipioUf1729690778057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Adiciona a coluna 'cep' com um valor padrão temporário para evitar problemas de valores NULL
        await queryRunner.query(`ALTER TABLE "compradores" ADD "cep" character varying(200) DEFAULT '00000-000' NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compradores" ADD "municipio" character varying(100) DEFAULT 'Desconhecido' NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compradores" ADD "uf" character varying(10) DEFAULT 'XX' NOT NULL`);

        // Opcional: Remover o valor padrão após adicionar as colunas, se necessário
        await queryRunner.query(`ALTER TABLE "compradores" ALTER COLUMN "cep" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "compradores" ALTER COLUMN "municipio" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "compradores" ALTER COLUMN "uf" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compradores" DROP COLUMN "uf"`);
        await queryRunner.query(`ALTER TABLE "compradores" DROP COLUMN "municipio"`);
        await queryRunner.query(`ALTER TABLE "compradores" DROP COLUMN "cep"`);
    }
}

