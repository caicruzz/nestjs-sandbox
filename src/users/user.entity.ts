import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    name: 'first_name',
  })
  firstName: string;

  @Column({
    nullable: false,
    name: 'last_name',
  })
  lastName: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;
}
