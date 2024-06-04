import prismaClient from '../../prisma';

interface MateriaPrimaFiltroRequest {
  empresa_id: number;
  ativo: boolean | null;
}

class ConsMateriaPrimaService {
  async execute({ empresa_id, ativo }: MateriaPrimaFiltroRequest) {
    let whereCondition: any = {
      empresa_id: empresa_id,
    };

    if (ativo !== null) {
      whereCondition.ativo = ativo;
    }

    const result = await prismaClient.materiaPrima.findMany({
      where: whereCondition,
      select: {
        id: true,
        codigo: true,
        descricao: true,
        espessura: true,
        tipo_materia_prima: true,
        ativo: true,
        material: { select: { id: true, descricao: true } },
      },
      orderBy: { descricao: 'asc' },
    });

    return result;
  }
}

export { ConsMateriaPrimaService };
