import { Request, Response } from 'express';
import { CadMaquinaService } from '../../services/Maquina/CadMaquinaService';

class CadMaquinaController {
  async handle(req: Request, res: Response) {
    const { codigo, descricao, empresa_id } = req.body;
    const model = new CadMaquinaService();

    const result = await model.execute({
      codigo,
      descricao,
      empresa_id,
    });

    return res.json(result);
  }
}

export { CadMaquinaController };
