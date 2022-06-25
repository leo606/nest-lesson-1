import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly lastName: string;

  @IsInt()
  readonly age: number;

  @IsString({ each: true })
  readonly technologies: string[];
}
