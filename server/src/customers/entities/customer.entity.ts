import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  postal_code: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String, required: true },
});

export class Customer {
  @ApiProperty()
  id: number;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  postal_code: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  image: string;
}
