import prismaClient from '../../prisma';

interface MateriaPrimaGetRequest {
  id: number;
}

class GetMateriaPrimaService {
  async execute({ id }: MateriaPrimaGetRequest) {
    const result = await prismaClient.materiaPrima.findFirst({
      where: {
        id: id,
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
      orderBy: { descricao: 'desc' },
    });

    return result;
  }
}

export { GetMateriaPrimaService };
