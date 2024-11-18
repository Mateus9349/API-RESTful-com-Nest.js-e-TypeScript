import { 
    Column,
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'madeiras' })
export class MadeiraEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'data', type: 'varchar', nullable: true })
    data: string;

    @Column({ name: 'placa', type: 'varchar', nullable: true })
    placa: string;

    @Column({ name: 'processada', type: 'varchar', nullable: true })
    processada: string;

    @Column({ name: 'nome_popular', type: 'varchar', nullable: true })
    nomePopular: string;

    @Column({ name: 'nome_cientifico', type: 'varchar', nullable: true })
    nomeCientifico: string;

    @Column({ name: 'tora', type: 'varchar', nullable: true })
    tora: string;

    @Column({ name: 'produto', type: 'varchar', nullable: true })
    produto: string;

    @Column({ name: 'expessura', type: 'float', nullable: true })
    expessura: number;

    @Column({ name: 'largura', type: 'float', nullable: true })
    largura: number;

    @Column({ name: 'comprimento', type: 'float', nullable: true })
    comprimento: number;

    @Column({ name: 'quantidade', type: 'int', nullable: true })
    quantidade: number;

    @Column({ name: 'metro_cubico', type: 'float', nullable: true })
    metroCubico: number;

    @Column({ name: 'COD', type: 'int', nullable: true })
    COD: number;

    @Column({ name: 'NF', type: 'varchar', nullable: true })
    NF: string;

    @Column({ name: 'DOF', type: 'varchar', nullable: true })
    DOF: string;

    @Column({ name: 'observacao', type: 'text', nullable: true })
    observacao: string;

    @Column({ name: 'valor', type: 'float', nullable: true })
    valor: number;

    @Column({ name: 'ativo', type: 'boolean', nullable: true })
    ativo: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
