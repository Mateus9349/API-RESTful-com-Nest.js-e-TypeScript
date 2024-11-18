import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity({ name: 'compradores' })
export class CompradorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'razao_social', type: 'varchar', length: 200, nullable: false })
    razaoSocial: string;

    @Column({ name: 'cnpj', type: 'varchar', length: 18, nullable: false, unique: true })
    cnpj: string;

    @Column({ name: 'inscricao_municipal', type: 'varchar', length: 50, nullable: false })
    inscricaoMunicipal: string;

    @Column({ name: 'inscricao_estadual', type: 'varchar', length: 50, nullable: true })
    inscricaoEstadual?: string;

    @Column({ name: 'endereco', type: 'varchar', length: 200, nullable: false })
    endereco: string;

    @Column({ name: 'cep', type: 'varchar', length: 200, nullable: false })
    cep: string;

    @Column({ name: 'municipio', type: 'varchar', length: 100, nullable: false })
    municipio: string;

    @Column({ name: 'uf', type: 'varchar', length: 10, nullable: false })
    uf: string;

    @Column({ name: 'telefone', type: 'varchar', length: 20, nullable: true })
    telefone?: string;

    @Column({ name: 'celular', type: 'varchar', length: 20, nullable: false })
    celular: string;

    @Column({ name: 'email', type: 'varchar', length: 100, nullable: false })
    email: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
