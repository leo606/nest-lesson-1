import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() user) {
    return this.userService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() body) {
    this.userService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.userService.remove(+id);
  }
}
