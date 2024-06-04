import prismaClient from '../../prisma';

interface SequenciaFiltroRequest {
  empresa_id: number;
  ativo: boolean | null;
}

class ConsSequenciaService {
  async execute({ empresa_id, ativo }: SequenciaFiltroRequest) {
    let whereCondition: any = {
      empresa_id: empresa_id,
    };

    if (ativo !== null) {
      whereCondition.ativo = ativo;
    }

    const result = await prismaClient.sequencia.findMany({
      where: whereCondition,
      select: {
        id: true,
        descricao: true,
        ativo: true,
      },
      orderBy: { id: 'asc' },
    });

    return result;
  }
}

export { ConsSequenciaService };
