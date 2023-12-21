import type { Skill } from './skill';

export enum ProjectName {
  I01 = 'I01',
  RUSH = 'Rush',
  ANYX = 'AnyX',
  ANYLOGI = 'Anylogi',
  DOGS_REBELLION = 'DogsRebellion',
  TRAJECTORY = 'Trajectory',
  DIG_FALL = 'DigFall',
  ATRAKCJA = 'Atrakcja',
  INSANITY = 'Insanity',
  FORTIS = 'Fortis',
  HURT = 'Hurt',
  SUGAR_FIGHT = 'SugarFight',
  SNEAKY_SNAKE = 'SneakySnake',
}

export interface ProjectInfo {
  logo: string;
  background: string;
  illustrationSmall: string[];
  illustrationBig: string[];
  madeWith: Skill[];
  demo: {
    openTab: boolean;
    url: string;
  };
}
