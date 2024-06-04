import prismaClient from '../../prisma';

interface AltMateriaPrimaRequest {
  id: number;
  codigo: number;
  descricao: string;
  espessura: number;
  tipo_materia_prima: number;
  material_id: number;
}

class AltMateriaPrimaService {
  async execute({
    id,
    codigo,
    descricao,
    espessura,
    tipo_materia_prima,
    material_id,
  }: AltMateriaPrimaRequest) {
    const existingMateriaPrima = await prismaClient.materiaPrima.findUnique({
      where: { id: id },
    });

    if (!existingMateriaPrima) {
      // Lógica de tratamento caso o MateriaPrima não exista
      throw new Error(`Materia Prima com ID ${id} não encontrado.`);
    }

    const result = await prismaClient.materiaPrima.update({
      where: { id: id },
      data: {
        codigo: codigo,
        descricao: descricao,
        espessura: espessura,
        tipo_materia_prima: tipo_materia_prima,
        material_id: material_id,
        atualizado_em: new Date(),
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

export { AltMateriaPrimaService };
