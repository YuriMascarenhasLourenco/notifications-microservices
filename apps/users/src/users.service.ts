import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'libs/shared/dtos/create-user.dto';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './enitties/user.entity';
import { UpdateUserDto } from 'libs/shared/dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async getUser(): string {
    return await this.userRepo.findOne({ where: { id: 1 } });
  }
  async createUser(data: CreateUserDto): Promise<UserDto> {
    try {
      const newUser = this.userRepo.create(data);
      return await this.userRepo.save(newUser);
    } catch (error) {
      throw new HttpException(
        'Error creating user',
        HttpStatus.NOT_IMPLEMENTED,
      );
    }
  }
  async updateUser(id: number, data: UpdateUserDto): Promise<UserDto> {
    try {
      const user = await this.userRepo.findOne({ where: { id } });
      if (user) {
        user.name = data.name;
        user.email = data.email;
        user.password = data.password;
        return await this.userRepo.save(user);
      }
    } catch (error) {
      throw new HttpException(
        'Error updating user',
        HttpStatus.NOT_IMPLEMENTED,
      );
    }
  }
  async deleteUser(id: number): Promise<void> {
    try {
      const user = await this.userRepo.findOne({ where: { id } });
      if (user) {
        await this.userRepo.remove(user);
      }
    } catch (error) {
      throw new HttpException(
        'Error deleting user',
        HttpStatus.NOT_IMPLEMENTED,
      );
    }
  }
}
