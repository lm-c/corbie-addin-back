import prismaClient from '../../prisma';

interface EmpresaGetRequest {
  id: number;
}

class GetEmpresaService {
  async execute({ id }: EmpresaGetRequest) {
    const result = await prismaClient.empresa.findFirst({
      where: {
        id: id,
      },
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
    });

    return result;
  }
}

export { GetEmpresaService };
