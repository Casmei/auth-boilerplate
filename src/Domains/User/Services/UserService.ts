import { Inject, Service } from 'typedi';
import dataSource from '../../../Config/TypeOrm';
import AuthDto from '../../Auth/Dto/AuthDto';
import User from '../Models/UserModel';
import UserRepository from '../Repository/UserRepository';

@Service('UserService')
class UserService {
  constructor(
    @Inject('userRepository')
    private userRepository: UserRepository,
  ) {
    this.userRepository = dataSource.getRepository(User);
  }

  create(user: AuthDto) {
    return this.userRepository.save(user);
  }
}

export default UserService;
