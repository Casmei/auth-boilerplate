import {
  IsEmail, IsNotEmpty, Min,
} from 'class-validator';

abstract class AuthDto {
  @IsNotEmpty()
    username?: string;

  @IsNotEmpty()
  @IsEmail()
    email?: string;

  @Min(4)
    password?: string;
}

export default AuthDto;
