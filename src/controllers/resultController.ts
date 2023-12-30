import { Request, Response } from 'express';
import { Result } from '../models/result.model';
import { PrismaClient } from '@prisma/client';
import { checkResultExist } from '../components/checkExistenceOfResult';
import { checkNote } from '../components/checkNoteFormat';

const prisma = new PrismaClient();

export class ResultController {
  private resultModel: Result;

  constructor() {
    this.resultModel = new Result();
  }

  async createResult(req: Request, res: Response): Promise<void> {
    try {
      const { bimester, discipline, note } = req.body;

      const resultExist = await checkResultExist( bimester, discipline );
      if (resultExist) {
        res.status(405).json( "Disciplina no bimetre já existe." );
        return;
      } 

      if (!(checkNote(note))) {
        res.status(406).json( "Nota inválida." );
        return;
      }

      const resultData = { bimester, discipline, note };
      const result = await this.resultModel.createResult(resultData);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: `Erro ao criar: ${error}` });
    }
  }

  async listResults(req: Request, res: Response): Promise<void> {
    try {
      const results = await this.resultModel.listResults();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: `Erro ao listar: ${error}` });
    }
  }

  async deleteResult(req: Request, res: Response): Promise<void> {
    try {
      const resultId = req.params.id;
      await this.resultModel.deleteResult(resultId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: `Erro ao deletar: ${error}` });
    }
  }

}
