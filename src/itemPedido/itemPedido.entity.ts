import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'itens_pedido' })
export class ItemPedidoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    pedidoId: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descricao: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    unidade: string;

    @Column({ type: 'int', nullable: false })
    quantidade: number;

    @Column({ type: 'decimal', nullable: false })
    valorUnidade: number;

    @Column({ type: 'decimal', nullable: false })
    valorTotal: number;
}
