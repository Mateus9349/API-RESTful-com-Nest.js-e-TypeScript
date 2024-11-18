import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'processos '})
export class ProcessoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'madeira_id', type: 'varchar', length: 200, nullable: false })
    madeiraId: string;

    @Column({ name: 'quantidade_de_entrada', type: 'float', nullable: false})
    quantidadeDeEntrada: number;

    @Column({ name: 'tipo_processo', type: 'varchar', length: 100, nullable: false })
    tipoProcesso: string;

    @Column({ name: 'produto', type: 'varchar', length: 100, nullable: false })
    produto: string;

    @Column({ name: 'inicio', type: 'date', nullable: false })
    inicio: string;

    @Column({ name: 'fim', type: 'date', nullable: false })
    fim: string;

    @Column({name: 'despesa_energia', type: 'float', nullable: false })
    despesaEnergia: number;

    @Column({name: 'despesa_colaborador', type: 'float', nullable: false })
    despesaColaborador: number;

    @Column({name: 'despesa_maquina', type: 'float', nullable: false })
    despesaMaquina: number;

    @Column({name: 'despesa_insumos', type: 'float', nullable: false })
    despesaInsumos: number;

    @Column({name: 'despesa_madeira', type: 'float', nullable: false })
    despesaMadeira: number;

    @Column({ name: 'finalizado', type: 'boolean', nullable: false })
    finalizado: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}