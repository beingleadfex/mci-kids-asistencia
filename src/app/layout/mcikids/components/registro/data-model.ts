export class KID {
  id: number = 0;
  datosKID: KIDdata;
  datosAP: APdata[];
}

export class KIDdata {
  nombre: string;
  apellido: string;
  nacimiento: string;
  edad: number;
  sexo: string;
  rut: string;
  nacionalidad: string;
  telefono: string;
  direccion: Address[];
  salud: HealthData;
  ministerio: MinistryData;
  observacion: string;
}

export class APdata {
  nombre: string;
  apellido: string;
  nacimiento: string;
  sexo: string;
  rut: string;
  nacionalidad: string;
  telefono: string;
  direccion: Address[];
  ministerio: MinistryData;
  observacion: string;
}

export class MinistryData {
  iglesia: string;
  pastor: string;
  ministerio: string;
  lider1: string;
  lider2: string;
  lider3: string;
}

export class HealthData {
  prevision: string;
  preferente: string;
  sangre: string;
  alergia: string;
  fobia: string;
  cuidado: string;
}

export class Address {
  calle: string;
  ciudad: string;
  region: string;
  comuna: string;
}

export const nacionalidades = [
  'Chile',
  'Colombia',
  'Peru',
  'Argentina',
  'Bolivia',
  'Venezuela',
  'Costa Rica'
];

export const regiones = [
  'I de Tarapacá',
  'II de Antofagasta',
  'III de Atacama',
  'IV de Coquimbo',
  'V de Valparaíso',
  'VI del Libertador General Bernardo O Higgins',
  'VII del Maule',
  'VIII del Bío Bío',
  'IX de la Araucanía',
  'X de los Lagos',
  'XI Aisén del General Carlos Ibáñez del Campo',
  'XII de Magallanes y Antártica Chilena',
  'Metropolitana de Santiago',
  'XIV de los Ríos',
  'XV de Arica y Parinacota',
];
export const comunas = [

]
