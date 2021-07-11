import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1626038665945 implements MigrationInterface {
  name = 'UserTable1626038665945';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(256) NOT NULL, "password" character varying(256) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
