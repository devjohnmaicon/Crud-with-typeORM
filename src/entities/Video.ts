import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("videos")
export class Video {
  constructor() {
    //Caso não venha com uma id na criação, é criado um por padrão
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @CreateDateColumn()
  created_at: Date;
}
