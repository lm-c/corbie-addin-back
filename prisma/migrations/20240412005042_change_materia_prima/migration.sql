/*
  Warnings:

  - You are about to drop the column `comprimanto` on the `materia_primas` table. All the data in the column will be lost.
  - You are about to drop the column `largura` on the `materia_primas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `materia_primas` DROP COLUMN `comprimanto`,
    DROP COLUMN `largura`;
