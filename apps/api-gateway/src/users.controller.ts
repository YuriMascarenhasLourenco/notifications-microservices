import { Controller, Delete, Get, Inject, Patch, Post } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createUser(): string {
    return this.usersClient.send({ cmd: 'new_user' }, userDto);
  }
  @Patch()
  updateUser(): string {}
  @Delete()
  deleteUser(id: number): string {
    return this.usersClient.send({ cmd: 'delete_user' }, { id });
  }
}
