import { format } from 'date-fns';
import prismaClient from '../../prisma';
import moment from 'moment-timezone';

interface StatMateriaPrimaRequest {
  id: number;
  ativo: boolean;
}

class StatMateriaPrimaService {
  async execute({ id, ativo }: StatMateriaPrimaRequest) {
    const now = new Date();

    const result = await prismaClient.materiaPrima.update({
      where: { id: id },
      data: {
        ativo: ativo,
        atualizado_em: now,
      },
      select: {
        id: true,
        codigo: true,
        descricao: true,
        espessura: true,
        tipo_materia_prima: true,
        material_id: true,
        ativo: true,
      },
    });

    return result;
  }
}

export { StatMateriaPrimaService };
