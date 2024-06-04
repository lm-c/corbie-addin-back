import prismaClient from '../../prisma';

interface MateriaPrimaRequest {
  codigo: number;
  descricao: string;
  espessura: number;
  tipo_materia_prima: number;
  material_id: number;
  empresa_id: number;
}

class CadMateriaPrimaService {
  async execute(materiaprima: MateriaPrimaRequest) {
    const result = await prismaClient.materiaPrima.create({
      data: {
        codigo: materiaprima.codigo,
        descricao: materiaprima.descricao,
        espessura: materiaprima.espessura,
        tipo_materia_prima: materiaprima.tipo_materia_prima,
        material_id: materiaprima.material_id,
        empresa_id: materiaprima.empresa_id,
        criado_em: new Date(),
        atualizado_em: new Date(),
        ativo: true,
      },
      select: {
        id: true,
        codigo: true,
        descricao: true,
        espessura: true,
        tipo_materia_prima: true,
        material_id: true,
        ativo: true,
      },
    });

    return result;
  }
}

export { CadMateriaPrimaService };
