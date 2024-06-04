import { format } from 'date-fns';
import prismaClient from '../../prisma';
import moment from 'moment-timezone';

interface StatProcessoRequest {
  id: number;
  ativo: boolean;
}

class StatProcessoService {
  async execute({ id, ativo }: StatProcessoRequest) {
    const now = new Date();

    const result = await prismaClient.processo.update({
      where: { id: id },
      data: {
        ativo: ativo,
        atualizado_em: now,
      },
      select: {
        id: true,
        codigo: true,
        descricao: true,
        gerar_dxf: true,
        ativo: true,
        maquina: { select: { id: true, codigo: true, descricao: true } },
        sequencia: { select: { id: true, descricao: true } },
      },
    });

    return result;
  }
}

export { StatProcessoService };
