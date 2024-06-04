import prismaClient from '../../prisma';

interface AltProcessoRequest {
  id: number;
  codigo: number;
  descricao: string;
  gerar_dxf: boolean;
  sequencia_id: number;
  maquina_id: number;
  empresa_id: number;
}

class AltProcessoService {
  async execute(processo: AltProcessoRequest) {
    const existingProcesso = await prismaClient.processo.findUnique({
      where: { id: processo.id },
    });

    if (!existingProcesso) {
      // Lógica de tratamento caso o Processo não exista
      throw new Error(`Processo com ID ${processo.id} não encontrado.`);
    }

    const result = await prismaClient.processo.update({
      where: { id: processo.id },
      data: {
        codigo: processo.codigo,
        descricao: processo.descricao,
        gerar_dxf: processo.gerar_dxf,
        sequencia_id: processo.sequencia_id,
        maquina_id: processo.maquina_id,
        atualizado_em: new Date(),
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
    });

    return result;
  }
}

export { AltProcessoService };
