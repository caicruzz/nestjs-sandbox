import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { PatchUserDto } from './patch-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

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
    this.userService.create(createUserDto);
    return createUserDto;
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
