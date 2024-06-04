import prismaClient from '../../prisma';

interface TemplateSolidGetRequest {
  empresa_id: number;
}

class GetTemplateSolidService {
  async execute({ empresa_id }: TemplateSolidGetRequest) {
    const result = await prismaClient.templateSolid.findFirst({
      where: {
        empresa_id: empresa_id,
      },
      select: {
        id: true,
        formato_a4r: true,
        formato_a4p: true,
        formato_a3: true,
        formato_a2: true,
        formato_a1: true,
        formato_a0: true,
        template_a4r: true,
        template_a4p: true,
        template_a3: true,
        template_a2: true,
        template_a1: true,
        template_a0: true,
        lista_montagem: true,
        lista_soldagem: true,
      },
    });

    return result;
  }
}

export { GetTemplateSolidService };
