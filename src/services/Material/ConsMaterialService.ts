import prismaClient from '../../prisma';

interface MaterialFiltroRequest {
  empresa_id: number;
  ativo: boolean | null;
}

class ConsMaterialService {
  async execute({ empresa_id, ativo }: MaterialFiltroRequest) {
    let whereCondition: any = {
      empresa_id: empresa_id,
    };

    if (ativo !== null) {
      whereCondition.ativo = ativo;
    }

    const result = await prismaClient.material.findMany({
      where: whereCondition,
      select: {
        id: true,
        descricao: true,
        ativo: true,
      },
      orderBy: { descricao: 'asc' },
    });

    return result;
  }
}

export { ConsMaterialService };
