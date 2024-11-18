import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'pedidos' })
export class PedidoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string; // Removido o '?'

    @Column({ name: 'comprador_id', type: 'uuid', nullable: false })
    compradorId: string;

    @Column({ name: 'numero_pedido', type: 'int', nullable: false })
    numeroPedido: number;

    @Column({ name: 'data_pedido', type: 'timestamp', nullable: false })
    dataPedido: Date;

    @Column({ name: 'subtotal', type: 'decimal', nullable: false })
    subtotal: number;

    @Column({ name: 'forma_pagamento', type: 'varchar', length: 100, nullable: false })
    formaPagamento: string;

    @Column({ name: 'observacoes', type: 'varchar', length: 255, nullable: true })
    observacoes?: string;

    @Column({ name: 'total_volume', type: 'decimal', nullable: false })
    totalVolume: number;

    @Column({ name: 'datas_pagamento', type: 'timestamp', array: true, nullable: true })
    datasPagamento: Date[];

    @Column({ name: 'tipo_nota', type: 'varchar', length: 50, nullable: false })
    tipoNota: string;

    @Column({ name: 'data_entrega', type: 'timestamp', nullable: false })
    dataEntrega: Date;

    @Column({ name: 'frete_pago_por', type: 'varchar', length: 20, nullable: true })
    fretePagoPor?: 'Contratante' | 'Fornecedor';

    @Column({ name: 'valor_frete', type: 'decimal', nullable: true })
    valorFrete: number;

    @Column({ name: 'descontos', type: 'decimal', nullable: true })
    descontos?: number;

    @Column({ name: 'total', type: 'decimal', nullable: true })
    total?: number;

    @Column({ name: 'nf', type: 'int', nullable: false })
    NF: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
