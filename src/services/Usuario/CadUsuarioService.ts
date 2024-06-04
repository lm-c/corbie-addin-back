import moment from 'moment';
import prismaClient from '../../prisma';
import md5 from 'md5';
import { format } from 'date-fns';

interface UserRequest {
  nome: string;
  email: string;
  login: string;
  projetista: boolean;
  responsavel: boolean;
  senha: string;
  tipo_perfil: number;
  empresa_id: number;
}

class CadUsuarioService {
  async execute({
    nome,
    email,
    login,
    projetista,
    responsavel,
    senha,
    tipo_perfil,
    empresa_id,
  }: UserRequest) {
    if (!nome) throw new Error('Nome Inválido!');
    if (!email) throw new Error('E-mail Inválido!');

    const idAlreadyExixts = await prismaClient.usuario.findFirst({
      where: { login: login },
    });
    if (idAlreadyExixts) {
      throw new Error(`Usuário \'Login: ${login}\' já cadastrado!`);
    }

    if (!!login) {
      const userAlreadyExixts = await prismaClient.usuario.findFirst({
        where: { login: login },
      });
      if (userAlreadyExixts) {
        throw new Error(`Usuário \'${login}\' já cadastrado!`);
      }
    }

    const hashPass = md5(senha);

    const result = await prismaClient.usuario.create({
      data: {
        nome: nome,
        email: email,
        login: login,
        projetista: projetista,
        responsavel: responsavel,
        senha: hashPass,
        tipo_perfil: tipo_perfil,
        empresa_id: empresa_id,
        criado_em: new Date(),
        atualizado_em: new Date(),
        ativo: true,
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

export { CadUsuarioService };
