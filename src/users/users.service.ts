import { Injectable } from "@nestjs/common"; 
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: Array<{ id: number } & CreateUserDto> = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto) {
    const newUser = { id: this.idCounter++, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}