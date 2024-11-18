import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelaPedidos1729528757922 implements MigrationInterface {
    name = 'CriandoTabelaPedidos1729528757922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comprador_id" uuid NOT NULL, "numero_pedido" integer NOT NULL, "data_pedido" TIMESTAMP NOT NULL, "subtotal" numeric NOT NULL, "forma_pagamento" character varying(100) NOT NULL, "observacoes" character varying(255), "total_volume" numeric NOT NULL, "datas_pagamento" TIMESTAMP array, "tipo_nota" character varying(50) NOT NULL, "data_entrega" TIMESTAMP NOT NULL, "frete_pago_por" character varying(20), "descontos" numeric, "total" numeric, "nf" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pedidos"`);
    }

}
