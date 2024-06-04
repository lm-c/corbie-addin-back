import { Request, Response } from 'express';
import { GetTemplateSolidService } from '../../services/TemplateSolid/GetTemplateSolidService';

class GetTemplateSolidController {
  async handle(req: Request, res: Response) {
    const empresa_id = parseInt(req.query.empresa_id as string, 10);

    const model = new GetTemplateSolidService();

    const result = await model.execute({
      empresa_id,
    });

    return res.json(result);
  }
}

export { GetTemplateSolidController };
