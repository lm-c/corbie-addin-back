import { Request, Response } from 'express';
import { GetMaterialService } from '../../services/Material/GetMaterialService';

class GetMaterialController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.query.id as string, 10);

    const model = new GetMaterialService();

    const result = await model.execute({
      id,
    });

    return res.json(result);
  }
}

export { GetMaterialController };
