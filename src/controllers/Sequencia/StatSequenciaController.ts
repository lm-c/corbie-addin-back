import { Request, Response } from 'express';
import { StatSequenciaService } from '../../services/Sequencia/StatSequenciaService';

class StatSequenciaController {
  async handle(req: Request, res: Response) {
    const user = req.body;
    const model = new StatSequenciaService();

    const result = await model.execute(user);

    return res.json(result);
  }
}

export { StatSequenciaController };
