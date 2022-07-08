import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  pk: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  description: string;
  @ApiProperty()
  @Column()
  date: string;
  @ApiProperty()
  @Column()
  address: string;
  @ApiProperty()
  @Column()
  city: string;
  @ApiProperty()
  @Column()
  country: string;
}
