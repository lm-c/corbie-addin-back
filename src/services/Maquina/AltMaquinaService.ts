import prismaClient from '../../prisma';

interface AltMaquinaRequest {
  id: number;
  codigo: number;
  descricao: string;
}

class AltMaquinaService {
  async execute({ codigo, descricao, id }: AltMaquinaRequest) {
    const existingMaquina = await prismaClient.maquina.findUnique({
      where: { id: id },
    });

    if (!existingMaquina) {
      // Lógica de tratamento caso o Maquina não exista
      throw new Error(`Máquina com ID ${id} não encontrado.`);
    }

    const result = await prismaClient.maquina.update({
      where: { id: id },
      data: { codigo: codigo, descricao: descricao, atualizado_em: new Date() },
      select: {
        id: true,
        codigo: true,
        descricao: true,
        ativo: true,
      },
    });

    return result;
  }
}

export { AltMaquinaService };
