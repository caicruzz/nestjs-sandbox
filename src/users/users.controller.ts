import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?/')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', ParseIntPipe) limit: any,
    @Query('page', ParseIntPipe) page: any,
  ) {
    console.log(typeof id);
    console.log(typeof limit);
    console.log(typeof page);
    return 'Hello World of Users';
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
