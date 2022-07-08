import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDto {
  @ApiProperty({
    description: 'Invoice number',
    type: 'string',
  })
  number: string;
  @ApiProperty({
    description: 'Invoice date',
    type: 'string',
  })
  date: string;
  @ApiProperty({
    description: 'Invoice total price',
    type: 'string',
  })
  total_price: string;
}
