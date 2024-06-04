import { Request, Response } from 'express';
import { GetSequenciaService } from '../../services/Sequencia/GetSequenciaService';

class GetSequenciaController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.query.id as string, 10);

    const model = new GetSequenciaService();

    const result = await model.execute({
      id,
    });

    return res.json(result);
  }
}

export { GetSequenciaController };
