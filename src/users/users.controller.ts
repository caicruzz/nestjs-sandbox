import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

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
}
