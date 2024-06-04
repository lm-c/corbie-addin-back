import prismaClient from '../../prisma';

interface ProcessoFiltroRequest {
  empresa_id: number;
  ativo: boolean | null;
}

class ConsProcessoService {
  async execute({ empresa_id, ativo }: ProcessoFiltroRequest) {
    let whereCondition: any = {
      empresa_id: empresa_id,
    };

    if (ativo !== null) {
      whereCondition.ativo = ativo;
    }

    const result = await prismaClient.processo.findMany({
      where: whereCondition,
      select: {
        id: true,
        codigo: true,
        descricao: true,
        gerar_dxf: true,
        ativo: true,
        maquina: { select: { id: true, codigo: true, descricao: true } },
        sequencia: { select: { id: true, descricao: true } },
      },
      orderBy: { codigo: 'asc' },
    });

    return result;
  }
}

export { ConsProcessoService };
