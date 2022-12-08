import { Column, Entity } from 'typeorm';
import BaseModel from '../../Shared/Models/BaseModel';

@Entity('users')
class User extends BaseModel {
  @Column({
    type: 'varchar', length: 200, unique: true, nullable: false,
  })
    username?: string;

  @Column({
    type: 'varchar', length: 64, unique: true, nullable: false,
  })
    email?: string;

  @Column({ nullable: false })
    password?: string;

  @Column({ nullable: true, type: 'jsonb' })
    extra_data: any;
}

export default User;
