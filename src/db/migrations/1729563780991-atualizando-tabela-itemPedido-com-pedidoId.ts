import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizandoTabelaItemPedidoComPedidoId1729563780991 implements MigrationInterface {
    name = 'AtualizandoTabelaItemPedidoComPedidoId1729563780991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_pedido" ADD "pedidoId" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_pedido" DROP COLUMN "pedidoId"`);
    }

}
