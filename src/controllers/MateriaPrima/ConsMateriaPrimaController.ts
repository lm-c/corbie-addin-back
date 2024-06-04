import { Request, Response } from 'express';
import { ConsMateriaPrimaService } from '../../services/MateriaPrima/ConsMateriaPrimaService';

class ConsMateriaPrimaController {
  async handle(req: Request, res: Response) {
    const empresa_id = parseInt(req.query.empresa_id as string, 10);
    let ativo: boolean | null = null;

    if (req.query.ativo !== undefined && req.query.ativo !== '') {
      ativo = req.query.ativo === 'true';
    }

    const model = new ConsMateriaPrimaService();

    const result = await model.execute({
      empresa_id,
      ativo,
    });

    return res.json(result);
  }
}

export { ConsMateriaPrimaController };
