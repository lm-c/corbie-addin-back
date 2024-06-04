import prismaClient from '../../prisma';

interface UsuarioFiltroRequest {
  empresa_id: number;
  ativo: boolean | null;
}

class ConsUsuarioService {
  async execute({ empresa_id, ativo }: UsuarioFiltroRequest) {
    let whereCondition: any = {
      empresa_id: empresa_id,
    };

    if (ativo !== null) {
      whereCondition.ativo = ativo;
    }

    const result = await prismaClient.usuario.findMany({
      where: whereCondition,
      select: {
        id: true,
        nome: true,
        login: true,
        projetista: true,
        responsavel: true,
        email: true,
        ativo: true,
        empresa: {
          select: {
            id: true,
            razao_social: true,
            cnpj: true,
            inscricao_estadual: true,
            inscricao_municipal: true,
            solid_versao: true,
            endereco: {
              select: {
                id: true,
                cep: true,
                endereco: true,
                endereco_numero: true,
                complemento: true,
                bairro: true,
                cidade: true,
                uf: true,
              },
            },
          },
        },
      },
      orderBy: { nome: 'asc' },
    });

    return result;
  }
}

export { ConsUsuarioService };
