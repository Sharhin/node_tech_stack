import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import SHA3 from 'sha3';

@Injectable()
export class PasswordService {
  generatePassword(passwordRaw: string): String {
    const hash = new SHA3(512);
    hash.update(passwordRaw);
    console.log(hash);
    let a = hash.digest('hex') as String;
    console.log(hash);
    console.log(a);
    return a;
  }

}