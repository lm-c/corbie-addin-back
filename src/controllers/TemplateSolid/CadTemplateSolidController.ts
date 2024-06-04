import { Request, Response } from 'express';
import { CadTemplateSolidService } from '../../services/TemplateSolid/CadTemplateSolidService';

class CadTemplateSolidController {
  async handle(req: Request, res: Response) {
    const template_solid = req.body;

    const model = new CadTemplateSolidService();

    const result = await model.execute(template_solid);

    return res.json(result);
  }
}

export { CadTemplateSolidController };
