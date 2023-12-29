-- CreateTable
CREATE TABLE `result` (
    `id` VARCHAR(191) NOT NULL,
    `bimester` ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO') NOT NULL,
    `discipline` ENUM('Biologia', 'Artes', 'Geografia', 'Sociologia') NOT NULL,
    `note` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
