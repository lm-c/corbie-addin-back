import { format } from 'date-fns';
import prismaClient from '../../prisma';
import moment from 'moment-timezone';

interface StatMaterialRequest {
  id: number;
  ativo: boolean;
}

class StatMaterialService {
  async execute({ id, ativo }: StatMaterialRequest) {
    const now = new Date();

    const result = await prismaClient.material.update({
      where: { id: id },
      data: {
        ativo: ativo,
        atualizado_em: now,
      },
      select: {
        id: true,
        descricao: true,
        ativo: true,
      },
    });

    return result;
  }
}

export { StatMaterialService };
