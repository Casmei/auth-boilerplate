import { Service } from 'typedi';
import { Repository } from 'typeorm';
import dataSource from '../../../Config/TypeOrm';
import User from '../Models/UserModel';

@Service('userRepository')
class UserRepository extends Repository<User> {
  constructor() {
    super(User, dataSource.createEntityManager());
  }
}

export default UserRepository;
