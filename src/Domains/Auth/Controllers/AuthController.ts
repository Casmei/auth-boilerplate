import { Inject, Service } from 'typedi';
import { HttpRequest, HttpResponse } from '../../Shared/Protocols/ControllerProtocols';
import ResponseService from '../../Shared/Service/ResponseService';
import AuthDto from '../Dto/AuthDto';
import UserService from '../../User/Services/UserService';

@Service()
class AuthController {
  constructor(@Inject('UserService') private userService: UserService) {
  }

  singin(httpRequest: HttpRequest, httpResponse: HttpResponse) {
    const { username, password } = httpRequest.body;
    return ResponseService.ok(httpResponse, { username, password });
  }

  async singup(httpRequest: HttpRequest, httpResponse: HttpResponse) {
    const userData = httpRequest.body as AuthDto;
    const user = await this.userService.create(userData);
    return ResponseService.ok(httpResponse, user);
  }
}

export default AuthController;
