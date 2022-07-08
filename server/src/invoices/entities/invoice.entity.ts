import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const InvoiceSchema = new mongoose.Schema({
  number: { type: String, required: true },
  date: { type: String, required: true },
  total_price: { type: String, required: true },
});

export class Invoice {
  @ApiProperty()
  id: number;
  @ApiProperty()
  number: string;
  @ApiProperty()
  date: string;
  @ApiProperty()
  total_price: string;
}
