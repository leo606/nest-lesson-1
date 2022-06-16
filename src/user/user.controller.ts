import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('list')
  getAll() {
    return [...Array(3)].map((_value, index) => ({ id: index, name: 'name' }));
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return { id, name: 'name' };
  }

  @Post()
  create(@Body() user) {
    return { user };
  }
}
