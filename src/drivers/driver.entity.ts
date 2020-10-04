import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { Driver } from '../graphql';

@Entity('drivers')
export class DriverEntity implements Driver{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}