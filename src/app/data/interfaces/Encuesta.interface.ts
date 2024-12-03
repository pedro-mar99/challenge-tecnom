export interface Encuesta {
  asignacion_tipo: string;
  asignacion_usuarios: any[];
  enabled: boolean;
  llamado_dias_planificado: number;
  llamado_dias_vencimiento: number;
  mapping: Mapping;
  pregunta: string | null;
}

export interface Mapping {
  score_1: string;
  score_2: string;
  score_3: string;
  score_4: string;
  score_5: string;
}

export interface Score {
  number: number;
  text: string;
}