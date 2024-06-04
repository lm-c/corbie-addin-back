import { Request, Response } from 'express';
import { ConsMaquinaService } from '../../services/Maquina/ConsMaquinaService';

class ConsMaquinaController {
  async handle(req: Request, res: Response) {
    const empresa_id = parseInt(req.query.empresa_id as string, 10);
    let ativo: boolean | null = null;

    if (req.query.ativo !== undefined && req.query.ativo !== '') {
      ativo = req.query.ativo === 'true';
    }

    const model = new ConsMaquinaService();

    const result = await model.execute({
      empresa_id,
      ativo,
    });

    return res.json(result);
  }
}

export { ConsMaquinaController };
