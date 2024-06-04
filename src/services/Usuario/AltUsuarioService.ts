import { format } from 'date-fns';
import prismaClient from '../../prisma';
import moment from 'moment-timezone';

interface AltUsuarioRequest {
  id: number;
  nome: string;
  login: string;
  projetista: boolean;
  responsavel: boolean;
  email: string;
  observacao: string;
  tipo_perfil: number;
}

class AltUsuarioService {
  async execute({
    id,
    nome,
    login,
    projetista,
    responsavel,
    email,
    observacao,
    tipo_perfil,
  }: AltUsuarioRequest) {
    if (!nome) throw new Error('Nome Inválido!');
    if (!login) throw new Error('Login Inválido!');

    const now = new Date();

    const result = await prismaClient.usuario.update({
      where: { id: id },
      data: {
        nome: nome,
        login: login,
        projetista: projetista,
        responsavel: responsavel,
        email: email,
        observacao: observacao,
        tipo_perfil: tipo_perfil,
        atualizado_em: now,
      },
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
    });

    return result;
  }
}

export { AltUsuarioService };
