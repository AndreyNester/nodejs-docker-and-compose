import { Optional } from '@nestjs/common';
import { IsInt, Min } from 'class-validator';

export class CreateOfferDto {
  @Min(1)
  amount: number;

  @Optional()
  hidden?: boolean;

  @IsInt()
  itemId: number;
}
