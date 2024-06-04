import prismaClient from '../../prisma';

class DetalheUsuarioService {
  async execute(usuario_id: number) {
    const result = await prismaClient.usuario.findFirst({
      where: { id: usuario_id },
      select: {
        id: true,
        nome: true,
        email: true,
        login: true,
        projetista: true,
        responsavel: true,
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
    });

    return result;
  }
}

export { DetalheUsuarioService };
