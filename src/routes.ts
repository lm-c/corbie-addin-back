import express, { Router } from 'express';

import { estaAutenticado } from './middlewares/estaAutenticado';

import { CadEmpresaController } from './controllers/Empresa/CadEmpresaController';
import { AltEmpresaController } from './controllers/Empresa/AltEmpresaController';
import { GetEmpresaController } from './controllers/Empresa/GetMaquinaController';

import { CadUsuarioController } from './controllers/Usuario/CadUsuarioController';
import { AltUsuarioController } from './controllers/Usuario/AltUsuarioController';
import { StatUsuarioController } from './controllers/Usuario/StatUsuarioController';
import { GetMailUsuarioFromLoginController } from './controllers/Usuario/GetMailUsuarioFromLoginController';
import { TokenValidateController } from './controllers/Usuario/TokenValidateController';
import { CadSenhaUsuarioController } from './controllers/Usuario/CadSenhaUsuarioController';
import { LoginUsuarioController } from './controllers/Usuario/LoginUsuarioController';
import { ConsUsuarioController } from './controllers/Usuario/ConsUsuarioController';
import { DetalheUsuarioController } from './controllers/Usuario/DetalheUsuarioController';
import { AltSenhaUsuarioController } from './controllers/Usuario/AltSenhaUsuarioController';

import { CadMaterialController } from './controllers/Material/CadMaterialController';
import { AltMaterialController } from './controllers/Material/AltMaterialController';
import { StatMaterialController } from './controllers/Material/StatMaterialController';
import { ConsMaterialController } from './controllers/Material/ConsMaterialController';
import { GetMaterialController } from './controllers/Material/GetMaterialController';

import { CadMaquinaController } from './controllers/Maquina/CadMaquinaController';
import { AltMaquinaController } from './controllers/Maquina/AltMaquinaController';
import { StatMaquinaController } from './controllers/Maquina/StatMaquinaController';
import { ConsMaquinaController } from './controllers/Maquina/ConsMaquinaController';
import { GetMaquinaController } from './controllers/Maquina/GetMaquinaController';

import { CadMateriaPrimaController } from './controllers/MateriaPrima/CadMateriaPrimaController';
import { AltMateriaPrimaController } from './controllers/MateriaPrima/AltMateriaPrimaController';
import { StatMateriaPrimaController } from './controllers/MateriaPrima/StatMateriaPrimaController';
import { ConsMateriaPrimaController } from './controllers/MateriaPrima/ConsMateriaPrimaController';
import { GetMateriaPrimaController } from './controllers/MateriaPrima/GetMateriaPrimaController';

import { CadSequenciaController } from './controllers/Sequencia/CadSequenciaController';
import { AltSequenciaController } from './controllers/Sequencia/AltSequenciaController';
import { StatSequenciaController } from './controllers/Sequencia/StatSequenciaController';
import { ConsSequenciaController } from './controllers/Sequencia/ConsSequenciaController';
import { GetSequenciaController } from './controllers/Sequencia/GetSequenciaController';

import { CadProcessoController } from './controllers/Processo/CadProcessoController';
import { AltProcessoController } from './controllers/Processo/AltProcessoController';
import { StatProcessoController } from './controllers/Processo/StatProcessoController';
import { ConsProcessoController } from './controllers/Processo/ConsProcessoController';
import { GetProcessoController } from './controllers/Processo/GetProcessoController';

import { CadTemplateSolidController } from './controllers/TemplateSolid/CadTemplateSolidController';
import { GetTemplateSolidController } from './controllers/TemplateSolid/GetTemplateSolidController';

// import { EditCategoryController } from './controllers/category/EditCategoryController';

import { DiretorioArquivos } from './enums/dirs_files';

const router = Router();

// --- Rotas EMPRESA ---
router.post('/empresa/cad', new CadEmpresaController().handle);
router.put('/empresa/alt', estaAutenticado, new AltEmpresaController().handle);
router.get('/empresa/get', estaAutenticado, new GetEmpresaController().handle);

// --- Rotas USUARIO ---
router.post('/usuario/cad', new CadUsuarioController().handle);
router.put('/usuario/alt', estaAutenticado, new AltUsuarioController().handle);
router.put(
  '/usuario/changestatus',
  estaAutenticado,
  new StatUsuarioController().handle
);
router.get('/usuario/getmail', new GetMailUsuarioFromLoginController().handle);
router.post('/usuario/tokenvalidation', new TokenValidateController().handle);
router.put('/usuario/resetpass', new CadSenhaUsuarioController().handle);
router.post('/usuario/login', new LoginUsuarioController().handle);
router.get(
  '/usuario/cons',
  estaAutenticado,
  new ConsUsuarioController().handle
);
router.get(
  '/usuario/info',
  estaAutenticado,
  new DetalheUsuarioController().handle
);
router.put(
  '/usuario/changepass',
  estaAutenticado,
  new AltSenhaUsuarioController().handle
);
// router.delete('/user/rem', estaAutenticado, new RemoveUserController().handle);

// --- Rotas MATERIAL ---
router.post(
  '/material/cad',
  estaAutenticado,
  new CadMaterialController().handle
);
router.put(
  '/material/alt',
  estaAutenticado,
  new AltMaterialController().handle
);
router.put(
  '/material/changestatus',
  estaAutenticado,
  new StatMaterialController().handle
);
router.get(
  '/material/cons',
  estaAutenticado,
  new ConsMaterialController().handle
);
router.get(
  '/material/get',
  estaAutenticado,
  new GetMaterialController().handle
);

// --- Rotas MAQUINA ---
router.post('/maquina/cad', estaAutenticado, new CadMaquinaController().handle);
router.put('/maquina/alt', estaAutenticado, new AltMaquinaController().handle);
router.get(
  '/maquina/cons',
  estaAutenticado,
  new ConsMaquinaController().handle
);
router.put(
  '/maquina/changestatus',
  estaAutenticado,
  new StatMaquinaController().handle
);
router.get('/maquina/get', estaAutenticado, new GetMaquinaController().handle);

// --- Rotas MATERIA PRIMA ---
router.post(
  '/materiaprima/cad',
  estaAutenticado,
  new CadMateriaPrimaController().handle
);
router.put(
  '/materiaprima/alt',
  estaAutenticado,
  new AltMateriaPrimaController().handle
);
router.put(
  '/materiaprima/changestatus',
  estaAutenticado,
  new StatMateriaPrimaController().handle
);
router.get(
  '/materiaprima/cons',
  estaAutenticado,
  new ConsMateriaPrimaController().handle
);
router.get(
  '/materiaprima/get',
  estaAutenticado,
  new GetMateriaPrimaController().handle
);

// --- Rotas SEQUENCIA ---
router.post(
  '/sequencia/cad',
  estaAutenticado,
  new CadSequenciaController().handle
);
router.put(
  '/sequencia/alt',
  estaAutenticado,
  new AltSequenciaController().handle
);
router.put(
  '/sequencia/changestatus',
  estaAutenticado,
  new StatSequenciaController().handle
);
router.get(
  '/sequencia/cons',
  estaAutenticado,
  new ConsSequenciaController().handle
);
router.get(
  '/sequencia/get',
  estaAutenticado,
  new GetSequenciaController().handle
);

// --- Rotas PROCESSO ---
router.post(
  '/processo/cad',
  estaAutenticado,
  new CadProcessoController().handle
);
router.put(
  '/processo/alt',
  estaAutenticado,
  new AltProcessoController().handle
);
router.put(
  '/processo/changestatus',
  estaAutenticado,
  new StatProcessoController().handle
);
router.get(
  '/processo/cons',
  estaAutenticado,
  new ConsProcessoController().handle
);
router.get(
  '/processo/get',
  estaAutenticado,
  new GetProcessoController().handle
);

// --- Rotas TEMPLATE SOLID ---
router.post(
  '/templatesolid/cad',
  estaAutenticado,
  new CadTemplateSolidController().handle
);
router.get(
  '/templatesolid/get',
  estaAutenticado,
  new GetTemplateSolidController().handle
);

export { router };
