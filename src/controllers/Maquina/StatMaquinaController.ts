import { Request, Response } from 'express';
import { StatMaquinaService } from '../../services/Maquina/StatMaquinaService';

class StatMaquinaController {
  async handle(req: Request, res: Response) {
    const user = req.body;
    const model = new StatMaquinaService();

    const result = await model.execute(user);

    return res.json(result);
  }
}

export { StatMaquinaController };
