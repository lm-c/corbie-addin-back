import prismaClient from '../../prisma';

interface MaquinaRequest {
  codigo: number;
  descricao: string;
  empresa_id: number;
}

class CadMaquinaService {
  async execute({ codigo, descricao, empresa_id }: MaquinaRequest) {
    const result = await prismaClient.maquina.create({
      data: {
        codigo: codigo,
        descricao: descricao,
        empresa_id: empresa_id,
        criado_em: new Date(),
        atualizado_em: new Date(),
        ativo: true,
      },
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

export { CadMaquinaService };
