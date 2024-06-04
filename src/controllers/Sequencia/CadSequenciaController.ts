import { Request, Response } from 'express';
import { CadSequenciaService } from '../../services/Sequencia/CadSequenciaService';

class CadSequenciaController {
  async handle(req: Request, res: Response) {
    const { descricao, empresa_id } = req.body;
    const model = new CadSequenciaService();

    const result = await model.execute({
      descricao,
      empresa_id,
    });

    return res.json(result);
  }
}

export { CadSequenciaController };
