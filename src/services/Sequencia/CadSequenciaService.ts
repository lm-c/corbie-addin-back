import prismaClient from '../../prisma';

interface SequenciaRequest {
  descricao: string;
  empresa_id: number;
}

class CadSequenciaService {
  async execute({ descricao, empresa_id }: SequenciaRequest) {
    const result = await prismaClient.sequencia.create({
      data: {
        descricao: descricao,
        empresa_id: empresa_id,
        criado_em: new Date(),
        atualizado_em: new Date(),
        ativo: true,
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

export { CadSequenciaService };
