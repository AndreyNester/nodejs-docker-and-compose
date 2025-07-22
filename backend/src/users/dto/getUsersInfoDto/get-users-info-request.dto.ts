import { IsString } from 'class-validator';

export class GetUsersInfoRequestDto {
  @IsString()
  query: string;
}
