import prismaClient from '../../prisma';

interface MaterialRequest {
  descricao: string;
  empresa_id: number;
}

class CadMaterialService {
  async execute({ descricao, empresa_id }: MaterialRequest) {
    const result = await prismaClient.material.create({
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

export { CadMaterialService };
