import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'get_user' })
  getUser(): string {
    return this.usersService.getUser();
  }
  @MessagePattern({ cmd: 'new_user' })
  createUser(data: any): string {
    // Lógica para criar um novo usuário
    return `User ${data.name} created!`;
  }
  @MessagePattern({ cmd: 'delete_user' })
  deleteUser(data: any): string {
    // Lógica para deletar um usuário
    return `User with id ${data.id} deleted!`;
  }
  @MessagePattern({ cmd: 'update_user' })
  updateUser(data: any): string {
    // Lógica para atualizar um usuário
    return `User with id ${data.id} updated!`;
  }
}
