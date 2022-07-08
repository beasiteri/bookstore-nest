import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  writer: { type: String, required: true },
  publish_date: { type: String, required: true },
});

export class Book {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  writer: string;
  @ApiProperty()
  publish_date: string;
}
