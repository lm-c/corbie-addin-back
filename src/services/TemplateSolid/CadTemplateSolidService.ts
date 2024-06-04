import prismaClient from '../../prisma';

interface TemplateSolidRequest {
  formato_a4r: string;
  formato_a4p: string;
  formato_a3: string;
  formato_a2: string;
  formato_a1: string;
  formato_a0: string;
  template_a4r: string;
  template_a4p: string;
  template_a3: string;
  template_a2: string;
  template_a1: string;
  template_a0: string;
  lista_montagem: string;
  lista_soldagem: string;
  empresa_id: number;
}

class CadTemplateSolidService {
  async execute(template_solid: TemplateSolidRequest) {
    const template = await prismaClient.templateSolid.findFirst({
      where: { empresa_id: template_solid.empresa_id },
      select: {
        id: true,
      },
    });

    if (template) {
      const result = await prismaClient.templateSolid.update({
        where: { id: template.id },
        data: {
          formato_a4r: template_solid.formato_a4r,
          formato_a4p: template_solid.formato_a4p,
          formato_a3: template_solid.formato_a3,
          formato_a2: template_solid.formato_a2,
          formato_a1: template_solid.formato_a1,
          formato_a0: template_solid.formato_a0,
          template_a4r: template_solid.template_a4r,
          template_a4p: template_solid.template_a4p,
          template_a3: template_solid.template_a3,
          template_a2: template_solid.template_a2,
          template_a1: template_solid.template_a1,
          template_a0: template_solid.template_a0,
          lista_montagem: template_solid.lista_montagem,
          lista_soldagem: template_solid.lista_soldagem,
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
    } else {
      const result = await prismaClient.templateSolid.create({
        data: {
          formato_a4r: template_solid.formato_a4r,
          formato_a4p: template_solid.formato_a4p,
          formato_a3: template_solid.formato_a3,
          formato_a2: template_solid.formato_a2,
          formato_a1: template_solid.formato_a1,
          formato_a0: template_solid.formato_a0,
          template_a4r: template_solid.template_a4r,
          template_a4p: template_solid.template_a4p,
          template_a3: template_solid.template_a3,
          template_a2: template_solid.template_a2,
          template_a1: template_solid.template_a1,
          template_a0: template_solid.template_a0,
          lista_montagem: template_solid.lista_montagem,
          lista_soldagem: template_solid.lista_soldagem,
          empresa_id: template_solid.empresa_id,
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
}

export { CadTemplateSolidService };
