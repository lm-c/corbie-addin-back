import { Request, Response } from 'express';
import { AltMateriaPrimaService } from '../../services/MateriaPrima/AltMateriaPrimaService';

class AltMateriaPrimaController {
  async handle(req: Request, res: Response) {
    const materiaprima = req.body;
    const model = new AltMateriaPrimaService();

    const result = await model.execute(materiaprima);

    return res.json(result);
  }
}

export { AltMateriaPrimaController };
