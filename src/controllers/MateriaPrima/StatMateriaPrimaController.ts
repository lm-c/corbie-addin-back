import { Request, Response } from 'express';
import { StatMateriaPrimaService } from '../../services/MateriaPrima/StatMateriaPrimaService';

class StatMateriaPrimaController {
  async handle(req: Request, res: Response) {
    const user = req.body;
    const model = new StatMateriaPrimaService();

    const result = await model.execute(user);

    return res.json(result);
  }
}

export { StatMateriaPrimaController };
