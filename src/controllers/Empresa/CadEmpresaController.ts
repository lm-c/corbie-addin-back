import { Request, Response } from 'express';
import { CadEmpresaService } from '../../services/Empresa/CadEmpresaService';

class CadEmpresaController {
  async handle(req: Request, res: Response) {
    const empresa = req.body;
    const model = new CadEmpresaService();

    const result = await model.execute(empresa);

    return res.json(result);
  }
}

export { CadEmpresaController };
