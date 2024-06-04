import { Request, Response } from 'express';
import { CadMateriaPrimaService } from '../../services/MateriaPrima/CadMateriaPrimaService';

class CadMateriaPrimaController {
  async handle(req: Request, res: Response) {
    const materiaprima = req.body;
    const model = new CadMateriaPrimaService();

    const result = await model.execute(materiaprima);

    return res.json(result);
  }
}

export { CadMateriaPrimaController };
