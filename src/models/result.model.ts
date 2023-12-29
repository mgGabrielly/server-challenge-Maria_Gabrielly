import { PrismaClient } from "@prisma/client";
import  Bimesters from "@prisma/client";
import  Disciplines from "@prisma/client";

interface ResultData {
    bimester: string;
    discipline: string;
    note: number;
  }
  
  export class Result {
    private prisma: PrismaClient;
  
    constructor() {
      this.prisma = new PrismaClient();
    }
  
    async createResult(resultData: ResultData): Promise<any> {
      try {
        const result = await this.prisma.result.create({
          data: {
            ...resultData,
          },
        });
        return result;
      } catch (error) {
        throw new Error(`Erro ao criar: ${error}`);
      }
    }

  async listResults(): Promise<any[]> {
    try {
      const results = await this.prisma.result.findMany();
      return results;
    } catch (error) {
      throw new Error(`Erro ao listar: ${error}`);
    }
  }

  async deleteResult(resultId: string): Promise<void> {
    try {
      await this.prisma.result.delete({
        where: {
          id: resultId,
        },
      });
    } catch (error) {
      throw new Error(`Erro ao deletar: ${error}`);
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
