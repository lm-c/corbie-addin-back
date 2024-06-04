import prismaClient from '../../prisma';

interface ProcessoGetRequest {
  id: number;
}

class GetProcessoService {
  async execute({ id }: ProcessoGetRequest) {
    const result = await prismaClient.processo.findFirst({
      where: {
        id: id,
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
      orderBy: { descricao: 'desc' },
    });

    return result;
  }
}

export { GetProcessoService };
