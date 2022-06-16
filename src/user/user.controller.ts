import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('list')
  getAll(@Res() res) {
    const users = [...Array(3)].map((_value, index) => ({
      id: index,
      name: 'name',
    }));
    return res.status(418).json(users);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return { id, name: 'name' };
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() user) {
    return { user };
  }

  @Patch(':id')
  update(@Param() params, @Body() body) {
    return { message: `user id ${params.id} updated`, newUser: body };
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return { message: `user id ${id} deleted` };
  }
}
