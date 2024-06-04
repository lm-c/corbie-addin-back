import { Request, Response } from 'express';
import { CadProcessoService } from '../../services/Processo/CadProcessoService';

class CadProcessoController {
  async handle(req: Request, res: Response) {
    const processo = req.body;
    const model = new CadProcessoService();

    const result = await model.execute(processo);

    return res.json(result);
  }
}

export { CadProcessoController };
