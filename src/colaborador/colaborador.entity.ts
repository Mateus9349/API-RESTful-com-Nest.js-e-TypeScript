import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'colaboradores' })
export class ColaboradorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', type: 'varchar', length: 200, nullable: false })
    nome: string;

    @Column({ name: 'idade', type: 'int', nullable: false })
    idade: number;

    @Column({ name: 'sexo', type: 'varchar', length: 10, nullable: false })
    sexo: string;

    @Column({ name: 'comunidade', type: 'varchar', length: 200, nullable: false })
    comunidade: string;

    @Column({ name: 'funcao', type: 'varchar', length: 100, nullable: false })
    funcao: string;

    @Column({ name: 'valor_hora', type: 'decimal', nullable: false })
    valorHora: number;

    @Column({ name: 'valor_diaria', type: 'decimal', nullable: false })
    valorDiaria: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
