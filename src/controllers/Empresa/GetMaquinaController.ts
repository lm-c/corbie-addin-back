import { Request, Response } from 'express';
import { GetEmpresaService } from '../../services/Empresa/GetEmpresaService';

class GetEmpresaController {
  async handle(req: Request, res: Response) {
    const id = parseInt(req.query.id as string, 10);

    const model = new GetEmpresaService();

    const result = await model.execute({
      id,
    });

    return res.json(result);
  }
}

export { GetEmpresaController };
