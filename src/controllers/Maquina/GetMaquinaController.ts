import { Request, Response } from 'express';
import { GetMaquinaService } from '../../services/Maquina/GetMaquinaService';

class GetMaquinaController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.query.id as string, 10);

    const model = new GetMaquinaService();

    const result = await model.execute({
      id,
    });

    return res.json(result);
  }
}

export { GetMaquinaController };
