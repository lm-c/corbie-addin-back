import prismaClient from '../../prisma';
import md5 from 'md5';

interface AltEmpresaRequest {
  id: number;
  razao_social: string;
  cnpj: string;
  inscricao_estadual: string;
  inscricao_municipal: string;
  solid_versao: string;
  endereco_id: number;
  cep: string;
  endereco: string;
  endereco_numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

class AltEmpresaService {
  async execute({
    id,
    razao_social,
    cnpj,
    inscricao_estadual,
    inscricao_municipal,
    solid_versao,
    endereco_id,
    cep,
    endereco,
    endereco_numero,
    complemento,
    bairro,
    cidade,
    uf,
  }: AltEmpresaRequest) {
    if (!razao_social) throw new Error('Nome Inválido!');
    if (!cnpj) throw new Error('E-mail Inválido!');

    await prismaClient.endereco.update({
      where: { id: endereco_id },
      data: {
        cep: cep,
        endereco: endereco,
        endereco_numero: endereco_numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
      },
    });

    const result = await prismaClient.empresa.update({
      where: { id: id },
      data: {
        razao_social: razao_social,
        cnpj: cnpj,
        inscricao_estadual: inscricao_estadual,
        inscricao_municipal: inscricao_municipal,
        solid_versao: solid_versao,
        endereco_id: endereco_id,
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

export { AltEmpresaService };
