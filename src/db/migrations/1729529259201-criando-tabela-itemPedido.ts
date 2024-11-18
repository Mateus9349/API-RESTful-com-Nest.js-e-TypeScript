import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelaItemPedido1729529259201 implements MigrationInterface {
    name = 'CriandoTabelaItemPedido1729529259201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens_pedido" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "descricao" character varying(255) NOT NULL, "unidade" character varying(50) NOT NULL, "quantidade" integer NOT NULL, "valorUnidade" numeric NOT NULL, "valorTotal" numeric NOT NULL, CONSTRAINT "PK_34ba752329a604381e367c431ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "itens_pedido"`);
    }

}
