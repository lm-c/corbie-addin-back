import { Request, Response } from 'express';
import { AltSequenciaService } from '../../services/Sequencia/AltSequenciaService';

class AltSequenciaController {
  async handle(req: Request, res: Response) {
    const sequencia = req.body;
    const model = new AltSequenciaService();

    const result = await model.execute(sequencia);

    return res.json(result);
  }
}

export { AltSequenciaController };
