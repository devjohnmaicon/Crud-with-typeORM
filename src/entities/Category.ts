import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('categories')
export class Category {
  constructor() {
    //Caso não venha com uma id na criação, é criado um por padrão
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  //@Column("name_category") Caso queira referenciar uma coluna
  //   com nome diferente do db
  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}
