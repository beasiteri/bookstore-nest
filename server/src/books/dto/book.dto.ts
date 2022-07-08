import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty({
    description: 'Book title',
    type: 'string',
  })
  title: string;
  @ApiProperty({
    description: 'Book writer',
    type: 'string',
  })
  writer: string;
  @ApiProperty({
    description: 'Book publish date',
    type: 'string',
  })
  pubish_date: string;
}
