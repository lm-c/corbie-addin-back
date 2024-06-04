import prismaClient from '../../prisma';

interface MaquinaGetRequest {
  id: number;
}

class GetMaquinaService {
  async execute({ id }: MaquinaGetRequest) {
    const result = await prismaClient.maquina.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        codigo: true,
        descricao: true,
        ativo: true,
      },
      orderBy: { descricao: 'desc' },
    });

    return result;
  }
}

export { GetMaquinaService };
