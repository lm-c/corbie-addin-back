-- CreateTable
CREATE TABLE `empresas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `razao_social` VARCHAR(100) NOT NULL,
    `cnpj` VARCHAR(20) NOT NULL,
    `inscricao_estadual` VARCHAR(20) NULL,
    `inscricao_municipal` VARCHAR(20) NULL,
    `solid_versao` VARCHAR(10) NULL,
    `ativo` BOOLEAN NOT NULL,
    `endereco_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enderecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(9) NULL,
    `endereco` VARCHAR(50) NULL,
    `endereco_numero` VARCHAR(6) NULL,
    `complemento` VARCHAR(100) NULL,
    `bairro` VARCHAR(50) NULL,
    `cidade` VARCHAR(50) NULL,
    `uf` VARCHAR(2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `login` VARCHAR(80) NOT NULL,
    `senha` VARCHAR(100) NULL,
    `email` VARCHAR(250) NULL,
    `ativo` BOOLEAN NOT NULL,
    `observacao` VARCHAR(255) NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tipo_perfil` INTEGER NOT NULL,
    `empresa_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materiais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(250) NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `empresa_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `materia_primas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,
    `descricao` VARCHAR(250) NOT NULL,
    `tipo_materia_prima` INTEGER NOT NULL,
    `espessura` DOUBLE NULL,
    `largura` DOUBLE NULL,
    `comprimanto` DOUBLE NULL,
    `ativo` BOOLEAN NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `empresa_id` INTEGER NOT NULL,
    `material_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maquinas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,
    `descricao` VARCHAR(250) NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `empresa_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sequencias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(250) NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `empresa_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `processos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,
    `descricao` VARCHAR(250) NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `gerar_dxf` BOOLEAN NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `empresa_id` INTEGER NOT NULL,
    `sequencia_id` INTEGER NOT NULL,
    `maquina_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `empresas` ADD CONSTRAINT `empresas_endereco_id_fkey` FOREIGN KEY (`endereco_id`) REFERENCES `enderecos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `materiais` ADD CONSTRAINT `materiais_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `materia_primas` ADD CONSTRAINT `materia_primas_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `materia_primas` ADD CONSTRAINT `materia_primas_material_id_fkey` FOREIGN KEY (`material_id`) REFERENCES `materiais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maquinas` ADD CONSTRAINT `maquinas_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sequencias` ADD CONSTRAINT `sequencias_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processos` ADD CONSTRAINT `processos_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processos` ADD CONSTRAINT `processos_sequencia_id_fkey` FOREIGN KEY (`sequencia_id`) REFERENCES `sequencias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processos` ADD CONSTRAINT `processos_maquina_id_fkey` FOREIGN KEY (`maquina_id`) REFERENCES `maquinas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
