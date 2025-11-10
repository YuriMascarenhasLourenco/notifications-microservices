import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from 'libs/shared/dtos/create-user.dto';
import { UpdateUserDto } from 'libs/shared/dtos/update-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'get_user' })
  async getUser(): string {
    return await this.usersService.getUser();
  }
  @MessagePattern({ cmd: 'new_user' })
  async createUser(data: CreateUserDto): string {
    // Lógica para criar um novo usuário
    return await this.usersService.createUser(data);
  }
  @MessagePattern({ cmd: 'delete_user' })
  async deleteUser(id: number): string {
    // Lógica para deletar um usuário
    return await this.usersService.deleteUser(id);
  }
  @MessagePattern({ cmd: 'update_user' })
  async updateUser(id: number, data: UpdateUserDto): string {
    return await this.usersService.updateUser(id, data);
  }
}
