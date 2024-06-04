-- CreateTable
CREATE TABLE `templates_solid` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formato_a4r` VARCHAR(500) NOT NULL,
    `formato_a4p` VARCHAR(500) NOT NULL,
    `formato_a3` VARCHAR(500) NOT NULL,
    `formato_a2` VARCHAR(500) NOT NULL,
    `formato_a1` VARCHAR(500) NOT NULL,
    `formato_a0` VARCHAR(500) NOT NULL,
    `template_a4r` VARCHAR(100) NOT NULL,
    `template_a4p` VARCHAR(100) NOT NULL,
    `template_a3` VARCHAR(100) NOT NULL,
    `template_a2` VARCHAR(100) NOT NULL,
    `template_a1` VARCHAR(100) NOT NULL,
    `template_a0` VARCHAR(100) NOT NULL,
    `lista_montagem` VARCHAR(500) NOT NULL,
    `lista_soldagem` VARCHAR(500) NOT NULL,
    `empresa_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `templates_solid` ADD CONSTRAINT `templates_solid_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
