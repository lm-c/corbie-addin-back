import prismaClient from '../../prisma';

interface SequenciaGetRequest {
  id: number;
}

class GetSequenciaService {
  async execute({ id }: SequenciaGetRequest) {
    const result = await prismaClient.sequencia.findFirst({
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

export { GetSequenciaService };
