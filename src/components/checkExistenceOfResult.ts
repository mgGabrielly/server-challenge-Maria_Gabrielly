import { Bimesters, Disciplines, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkResultExist(bimester: Bimesters, discipline: Disciplines): Promise<boolean> {
    try {
        const resultExist = await prisma.result.findFirst({
            where: { bimester, discipline },
        });

        return !!resultExist;
    } catch (error) {
        throw new Error("Erro ao verificar existência.");
    }
}
