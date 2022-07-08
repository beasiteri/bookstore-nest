import { ApiProperty } from '@nestjs/swagger';

export class CustomerDto {
  @ApiProperty({
    description: 'Customer first name',
    type: 'string',
  })
  first_name: string;
  @ApiProperty({
    description: 'Customer last name',
    type: 'string',
  })
  last_name: string;
  @ApiProperty({
    description: 'Customer email',
    type: 'string',
  })
  email: string;
  @ApiProperty({
    description: 'Customer phone',
    type: 'string',
  })
  phone: string;
  @ApiProperty({
    description: 'Customer address',
    type: 'string',
  })
  address: string;
  @ApiProperty({
    description: 'Customer postal code',
    type: 'string',
  })
  postal_code: string;
  @ApiProperty({
    description: 'Customer city',
    type: 'string',
  })
  city: string;
}
