import { Request, Response } from 'express';
import { AltProcessoService } from '../../services/Processo/AltProcessoService';

class AltProcessoController {
  async handle(req: Request, res: Response) {
    const processo = req.body;
    const model = new AltProcessoService();

    const result = await model.execute(processo);

    return res.json(result);
  }
}

export { AltProcessoController };
