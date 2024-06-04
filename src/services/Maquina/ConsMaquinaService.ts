import prismaClient from '../../prisma';

interface MaquinaFiltroRequest {
  empresa_id: number;
  ativo: boolean | null;
}

class ConsMaquinaService {
  async execute({ empresa_id, ativo }: MaquinaFiltroRequest) {
    let whereCondition: any = {
      empresa_id: empresa_id,
    };

    if (ativo !== null) {
      whereCondition.ativo = ativo;
    }

    const result = await prismaClient.maquina.findMany({
      where: whereCondition,
      select: {
        id: true,
        codigo: true,
        descricao: true,
        ativo: true,
      },
      orderBy: { descricao: 'asc' },
    });

    return result;
  }
}

export { ConsMaquinaService };
