import { Request, Response } from 'express';
import { GetMateriaPrimaService } from '../../services/MateriaPrima/GetMateriaPrimaService';

class GetMateriaPrimaController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.query.id as string, 10);

    const model = new GetMateriaPrimaService();

    const result = await model.execute({
      id,
    });

    return res.json(result);
  }
}

export { GetMateriaPrimaController };
