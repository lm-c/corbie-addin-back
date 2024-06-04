import { Request, Response } from 'express';
import { StatProcessoService } from '../../services/Processo/StatProcessoService';

class StatProcessoController {
  async handle(req: Request, res: Response) {
    const user = req.body;
    const model = new StatProcessoService();

    const result = await model.execute(user);

    return res.json(result);
  }
}

export { StatProcessoController };
