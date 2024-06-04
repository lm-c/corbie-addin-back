import prismaClient from '../../prisma';

interface ProcessoRequest {
  codigo: number;
  descricao: string;
  gerar_dxf: boolean;
  sequencia_id: number;
  maquina_id: number;
  empresa_id: number;
}

class CadProcessoService {
  async execute(processo: ProcessoRequest) {
    const result = await prismaClient.processo.create({
      data: {
        codigo: processo.codigo,
        descricao: processo.descricao,
        gerar_dxf: processo.gerar_dxf,
        sequencia_id: processo.sequencia_id,
        maquina_id: processo.maquina_id,
        empresa_id: processo.empresa_id,
        criado_em: new Date(),
        atualizado_em: new Date(),
        ativo: true,
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

export { CadProcessoService };
