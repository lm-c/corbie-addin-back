import prismaClient from '../../prisma';

interface MaterialGetRequest {
  id: number;
}

class GetMaterialService {
  async execute({ id }: MaterialGetRequest) {
    const result = await prismaClient.material.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        descricao: true,
        ativo: true,
      },
      orderBy: { descricao: 'desc' },
    });

    return result;
  }
}

export { GetMaterialService };
