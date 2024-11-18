import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'maquinas' })
export class MaquinaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name:'nome', type: 'varchar', length: 100, nullable: false })
    nome: string;

    @Column({ name: 'tipo_processo', type: 'varchar', length: 50, nullable: false })
    tipoProcesso: string;

    @Column({ name: 'fonte_energia', type: 'varchar', length: 50, nullable: false })
    fonteEnergia: string;

    @Column({ type: 'float', nullable: false })
    valor: number;

    @Column({ name: 'data_aquisicao', type: 'date', nullable: false })
    dataAquisicao: string;

    @Column({ name: 'vida_util', type: 'float', nullable: false })
    vidaUtil: number;

    @Column({ name: 'depreciacao_anual', type: 'float', nullable: false })
    depreciacaoAnual: number;

    @Column({ name: 'depreciacao_dia', type: 'float', nullable: false })
    depreciacaoDia: number;

    @Column({ name: 'dias_utilizados', type: 'int', nullable: false })
    diasUtilizados: number;

    @Column({ name: 'horas_trabalhadas', type: 'float', nullable: false })
    horasTrabalhadas: number;

    @Column({ type: 'float', nullable: false })
    potencia: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
