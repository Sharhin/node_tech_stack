import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './model/users.entity';
import { DataSource, Repository } from 'typeorm';
import { PasswordService } from 'src/utils/password.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private dataSource: DataSource,
    private passwordService: PasswordService,
    private configService: ConfigService
  ) { }

  async create(data: Users): Promise<Users> {
    const { password, ...rest } = data;
    const hashpassword = this.passwordService.generatePassword(password)
    const addData: Users = { ...rest, password: hashpassword } as Users
    return await this.userRepository.save(addData);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.createQueryBuilder("users").getMany();
  }

  async findOne(id: number): Promise<Users> {
    return this.userRepository.findOneBy({ id });
  }

  async findOneBy(data: { [key: string]: string }): Promise<Users> {
    const key = Object.keys(data)[0];
    const value = data[Object.keys(data)[0]];
    return this.userRepository.findOneBy({ [key]: value });
  }


  async save(id: number, data: Users): Promise<Users> {
    await this.userRepository.update(id, data);
    return this.userRepository.findOneBy({ id });
  }

  async saveProp(id, key, value) {
    return this.dataSource.getRepository(Users).save({
      id,
      [key]: value
    });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

}