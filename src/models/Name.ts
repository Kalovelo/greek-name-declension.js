import { Column, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table
export class Name extends Model<Name> {
  @PrimaryKey
  @Unique
  @Column
  name!: string;

  @Column
  nominative!: string;

  @Column
  possesive!: string;

  @Column
  accusative!: string;

  @Column
  vocative!: string;
}
