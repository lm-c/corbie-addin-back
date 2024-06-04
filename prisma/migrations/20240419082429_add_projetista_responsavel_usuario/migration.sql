-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `projetista` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `responsavel` BOOLEAN NOT NULL DEFAULT false;
