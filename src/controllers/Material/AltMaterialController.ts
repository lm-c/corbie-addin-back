import { Request, Response } from 'express';
import { AltMaterialService } from '../../services/Material/AltMaterialService';

class AltMaterialController {
  async handle(req: Request, res: Response) {
    const material = req.body;
    const model = new AltMaterialService();

    const result = await model.execute(material);

    return res.json(result);
  }
}

export { AltMaterialController };
