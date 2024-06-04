import { Request, Response } from 'express';
import { AltMaquinaService } from '../../services/Maquina/AltMaquinaService';

class AltMaquinaController {
  async handle(req: Request, res: Response) {
    const maquina = req.body;
    const model = new AltMaquinaService();

    const result = await model.execute(maquina);

    return res.json(result);
  }
}

export { AltMaquinaController };
