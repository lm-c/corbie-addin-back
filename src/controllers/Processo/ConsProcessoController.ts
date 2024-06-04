import { Request, Response } from 'express';
import { ConsProcessoService } from '../../services/Processo/ConsProcessoService';

class ConsProcessoController {
  async handle(req: Request, res: Response) {
    const empresa_id = parseInt(req.query.empresa_id as string, 10);
    let ativo: boolean | null = null;

    if (req.query.ativo !== undefined && req.query.ativo !== '') {
      ativo = req.query.ativo === 'true';
    }

    const model = new ConsProcessoService();

    const result = await model.execute({
      empresa_id,
      ativo,
    });

    return res.json(result);
  }
}

export { ConsProcessoController };
