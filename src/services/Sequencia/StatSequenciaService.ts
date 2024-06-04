import { format } from 'date-fns';
import prismaClient from '../../prisma';
import moment from 'moment-timezone';

interface StatSequenciaRequest {
  id: number;
  ativo: boolean;
}

class StatSequenciaService {
  async execute({ id, ativo }: StatSequenciaRequest) {
    const now = new Date();

    const result = await prismaClient.sequencia.update({
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

export { StatSequenciaService };
