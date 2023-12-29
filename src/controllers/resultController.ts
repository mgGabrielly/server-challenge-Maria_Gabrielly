import { Request, Response } from 'express';
import { Result } from '../models/result.model'; // Certifique-se de ajustar o caminho para a sua classe Result

export class ResultController {
  private resultModel: Result;

  constructor() {
    this.resultModel = new Result();
  }

  async createResult(req: Request, res: Response): Promise<void> {
    try {
      const resultData = req.body; // Supondo que os dados são enviados via corpo da requisição
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
      const resultId = req.params.id; // Supondo que você está passando o ID na URL
      await this.resultModel.deleteResult(resultId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: `Erro ao deletar: ${error}` });
    }
  }
}
