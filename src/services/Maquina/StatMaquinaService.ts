import { format } from 'date-fns';
import prismaClient from '../../prisma';
import moment from 'moment-timezone';

interface StatMaquinaRequest {
  id: number;
  ativo: boolean;
}

class StatMaquinaService {
  async execute({ id, ativo }: StatMaquinaRequest) {
    const now = new Date();

    const result = await prismaClient.maquina.update({
      where: { id: id },
      data: {
        ativo: ativo,
        atualizado_em: now,
      },
      select: {
        id: true,
        codigo: true,
        descricao: true,
        ativo: true,
      },
    });

    return result;
  }
}

export { StatMaquinaService };
