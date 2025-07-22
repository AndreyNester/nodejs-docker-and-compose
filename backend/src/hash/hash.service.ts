import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hash(
    data: string | Buffer,
    saltOrRounds: string | number,
  ): Promise<string> {
    return bcrypt.hash(data, saltOrRounds);
  }

  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }
}
