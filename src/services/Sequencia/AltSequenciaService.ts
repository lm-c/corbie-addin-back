import prismaClient from '../../prisma';

interface AltSequenciaRequest {
  id: number;
  descricao: string;
}

class AltSequenciaService {
  async execute({ descricao, id }: AltSequenciaRequest) {
    const existingSequencia = await prismaClient.sequencia.findUnique({
      where: { id: id },
    });

    if (!existingSequencia) {
      // Lógica de tratamento caso o Sequencia não exista
      throw new Error(`Sequência com ID ${id} não encontrado.`);
    }

    const result = await prismaClient.sequencia.update({
      where: { id: id },
      data: {
        atualizado_em: new Date(),
        descricao: descricao,
      },
      select: {
        id: true,
        descricao: true,
        ativo: true,
      },
    });

    return result;
  }
}

export { AltSequenciaService };
