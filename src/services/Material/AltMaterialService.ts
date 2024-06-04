import prismaClient from '../../prisma';

interface AltMaterialRequest {
  id: number;
  descricao: string;
}

class AltMaterialService {
  async execute({ descricao, id }: AltMaterialRequest) {
    const existingMaterial = await prismaClient.material.findUnique({
      where: { id: id },
    });

    if (!existingMaterial) {
      // Lógica de tratamento caso o Material não exista
      throw new Error(`Material com ID ${id} não encontrado.`);
    }

    const result = await prismaClient.material.update({
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

export { AltMaterialService };
