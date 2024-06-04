import { Request, Response } from 'express';
import { StatMaterialService } from '../../services/Material/StatMaterialService';

class StatMaterialController {
  async handle(req: Request, res: Response) {
    const user = req.body;
    const model = new StatMaterialService();

    const result = await model.execute(user);

    return res.json(result);
  }
}

export { StatMaterialController };
