import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVideos1639579974177 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "videos",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "uuid",
          },
          {
            name: "duration",
            type: "numeric",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_videos_category",
            columnNames: ["category_id"], //coluna para relacionamento
            referencedTableName: "categories", // nome da tabela de relacionamento
            referencedColumnNames: ["id"], // coluna de referencia para relacionamento
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("videos");
  }
}
