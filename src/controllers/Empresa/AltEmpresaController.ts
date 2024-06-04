import { Request, Response } from 'express';
import { AltEmpresaService } from '../../services/Empresa/AltEmpresaService';

class AltEmpresaController {
  async handle(req: Request, res: Response) {
    const empresa = req.body;
    const model = new AltEmpresaService();

    const result = await model.execute(empresa);

    return res.json(result);
  }
}

export { AltEmpresaController };
