import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizandoTabelaPedidoComValorFrete1729700394422 implements MigrationInterface {
    name = 'AtualizandoTabelaPedidoComValorFrete1729700394422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "valor_frete" numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "valor_frete"`);
    }

}
