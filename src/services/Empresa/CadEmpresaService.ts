import prismaClient from '../../prisma';

interface EmpresaRequest {
  razao_social: string;
  cnpj: string;
  inscricao_estadual: string;
  inscricao_municipal: string;
  solid_versao: string;
  cep: string;
  endereco: string;
  endereco_numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

class CadEmpresaService {
  async execute({
    razao_social,
    cnpj,
    inscricao_estadual,
    inscricao_municipal,
    solid_versao,
    cep,
    endereco,
    endereco_numero,
    complemento,
    bairro,
    cidade,
    uf,
  }: EmpresaRequest) {
    if (!razao_social) throw new Error('Nome Inválido!');
    if (!cnpj) throw new Error('E-mail Inválido!');

    const idAlreadyExixts = await prismaClient.empresa.findFirst({
      where: { cnpj: cnpj },
    });
    if (idAlreadyExixts) {
      throw new Error(`Empresa \'CNPJ: ${cnpj}\' já cadastrada!`);
    }

    var res_endereco = await prismaClient.endereco.create({
      data: {
        cep: cep,
        endereco: endereco,
        endereco_numero: endereco_numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
      },
      select: {
        id: true,
      },
    });

    const result = await prismaClient.empresa.create({
      data: {
        razao_social: razao_social,
        cnpj: cnpj,
        inscricao_estadual: inscricao_estadual,
        inscricao_municipal: inscricao_municipal,
        solid_versao: solid_versao,
        endereco_id: res_endereco.id,
        ativo: true,
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

export { CadEmpresaService };
