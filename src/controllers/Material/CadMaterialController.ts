import { Request, Response } from 'express';
import { CadMaterialService } from '../../services/Material/CadMaterialService';

class CadMaterialController {
  async handle(req: Request, res: Response) {
    const { descricao, empresa_id } = req.body;
    const model = new CadMaterialService();

    const result = await model.execute({
      descricao,
      empresa_id,
    });

    return res.json(result);
  }
}

export { CadMaterialController };
