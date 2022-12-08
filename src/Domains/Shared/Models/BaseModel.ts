import {
  CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

class BaseModel {
  @PrimaryGeneratedColumn('uuid')
    id?: string;

  @CreateDateColumn()
    createdAt?: Date;

  @UpdateDateColumn()
    updatedAt?: Date;

  @DeleteDateColumn()
    deletedAt?: Date;
}

export default BaseModel;
