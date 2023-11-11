import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDataIntoProducts1693953158470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO products VALUES (16,'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML',18.44,20.49);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (18,'BEBIDA ENERGÉTICA VIBE 2L',8.09,8.99);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (19,'ENERGÉTICO  RED BULL ENERGY DRINK 250ML',6.56,7.29);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (20,'ENERGÉTICO RED BULL ENERGY DRINK 355ML',9.71,10.79);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (21,'BEBIDA ENERGÉTICA RED BULL RED EDITION 250ML',10.71,11.71);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (22,'ENERGÉTICO  RED BULL ENERGY DRINK SEM AÇÚCAR 250ML',6.74,7.49);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (23,'ÁGUA MINERAL BONAFONT SEM GÁS 1,5L',2.15,2.39);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M',5.21,5.79);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (1000,'BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES',48.54,53.94);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);"
    );
    await queryRunner.query(
      "INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM products;");
  }
}
