import { Request, Response } from 'express';
import { GetProcessoService } from '../../services/Processo/GetProcessoService';

class GetProcessoController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.query.id as string, 10);

    const model = new GetProcessoService();

    const result = await model.execute({
      id,
    });

    return res.json(result);
  }
}

export { GetProcessoController };
