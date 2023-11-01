import { ProjectName, type ProjectInfo } from '$lib/models/projects';
import { Skill } from '$lib/models/skill';

export const PROJECTS = {
  [ProjectName.RUSH]: {
    logo: '$lib/assets/images/projects/Rush.jpg',
    background: '$lib/assets/images/projects/rush/Rush_bg.jpg',
    illustrationSmall: [
      '$lib/assets/images/projects/rush/Rush01_small.jpg',
      '$lib/assets/images/projects/rush/Rush02_small.jpg',
      '$lib/assets/images/projects/rush/Rush03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/rush/Rush01.jpg',
      '$lib/assets/images/projects/rush/Rush02.jpg',
      '$lib/assets/images/projects/rush/Rush03.jpg',
    ],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
      url: '$lib/assets/project/rush/index.html',
    },
  },
  [ProjectName.TRAJECTORY]: {
    logo: '$lib/assets/images/projects/Trajectory.png',
    background: '$lib/assets/images/projects/trajectory/Trajectory_bg.jpg',
    illustrationSmall: [
      '$lib/assets/images/projects/trajectory/Trajectory00_small.jpg',
      '$lib/assets/images/projects/trajectory/Trajectory01_small.jpg',
      '$lib/assets/images/projects/trajectory/Trajectory02_small.jpg',
      '$lib/assets/images/projects/trajectory/Trajectory03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/videos/projects/trajectory/trailer.mp4',
      '$lib/assets/images/projects/trajectory/Trajectory01.jpg',
      '$lib/assets/images/projects/trajectory/Trajectory02.jpg',
      '$lib/assets/images/projects/trajectory/Trajectory03.jpg',
    ],
    madeWith: [Skill.ANGULAR, Skill.TYPESCRIPT],
    demo: {
      openTab: true,
      url: 'https://trajectory.jp/',
    },
  },
  [ProjectName.DOGS_REBELLION]: {
    logo: '$lib/assets/images/projects/DogsRebellion.jpg',
    background: '$lib/assets/images/projects/dogsrebellion/DogsRebellion_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/dogsrebellion/DogsRebellion01_small.jpg',
      '$lib/assets/images/projects/dogsrebellion/DogsRebellion02_small.jpg',
      '$lib/assets/images/projects/dogsrebellion/DogsRebellion03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/dogsrebellion/DogsRebellion01.jpg',
      '$lib/assets/images/projects/dogsrebellion/DogsRebellion02.jpg',
      '$lib/assets/images/projects/dogsrebellion/DogsRebellion03.jpg',
    ],
    madeWith: [Skill.JAVASCRIPT, Skill.HTML_5],
    demo: {
      openTab: false,
      url: '$lib/assets/project/dogsrebellion/index.html',
    },
  },
  [ProjectName.I01]: {
    logo: '$lib/assets/images/projects/I01.png',
    background: '$lib/assets/images/projects/i01/i01_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/i01/i0101_small.png',
      '$lib/assets/images/projects/i01/i0102_small.png',
      '$lib/assets/images/projects/i01/i0103_small.png',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/i01/i0101.png',
      '$lib/assets/images/projects/i01/i0102.png',
      '$lib/assets/images/projects/i01/i0103.png',
    ],
    madeWith: [Skill.UNREAL],
    demo: {
      openTab: true,
      url: 'https://installation01.org',
    },
  },
  [ProjectName.ANYX]: {
    logo: '$lib/assets/images/projects/Anyx.png',
    background: '$lib/assets/images/projects/anyx/Anyx_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/anyx/Anyx01_small.jpg',
      '$lib/assets/images/projects/anyx/Anyx02_small.jpg',
      '$lib/assets/images/projects/anyx/Anyx03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/anyx/Anyx01.jpg',
      '$lib/assets/images/projects/anyx/Anyx02.jpg',
      '$lib/assets/images/projects/anyx/Anyx03.jpg',
    ],
    madeWith: [Skill.REACT],
    demo: {
      openTab: true,
      url: 'https://any-x.com/',
    },
  },
  [ProjectName.ANYLOGI]: {
    logo: '$lib/assets/images/projects/Anylogi.png',
    background: '$lib/assets/images/projects/anylogi/Anylogi_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/anylogi/Anylogi01_small.jpg',
      '$lib/assets/images/projects/anylogi/Anylogi02_small.jpg',
      '$lib/assets/images/projects/anylogi/Anylogi03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/anylogi/Anylogi01.jpg',
      '$lib/assets/images/projects/anylogi/Anylogi02.jpg',
      '$lib/assets/images/projects/anylogi/Anylogi03.jpg',
    ],
    madeWith: [Skill.ANGULAR],
    demo: {
      openTab: true,
      url: 'https://anylogi.com/',
    },
  },
  [ProjectName.DIG_FALL]: {
    logo: '$lib/assets/images/projects/DigFall.jpg',
    background: '$lib/assets/images/projects/digfall/DigFall_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/digfall/DigFall01_small.jpg',
      '$lib/assets/images/projects/digfall/DigFall02_small.jpg',
      '$lib/assets/images/projects/digfall/DigFall03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/digfall/DigFall01.jpg',
      '$lib/assets/images/projects/digfall/DigFall02.jpg',
      '$lib/assets/images/projects/digfall/DigFall03.jpg',
    ],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
      url: '$lib/assets/project/digfall/digfall.html',
    },
  },
  [ProjectName.ATRAKCJA]: {
    logo: '$lib/assets/images/projects/Atrakcja.jpg',
    background: '$lib/assets/images/projects/atrakcja/Atrakcja_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/atrakcja/Atrakcja01_small.jpg',
      '$lib/assets/images/projects/atrakcja/Atrakcja02_small.jpg',
      '$lib/assets/images/projects/atrakcja/Atrakcja03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/atrakcja/Atrakcja01.jpg',
      '$lib/assets/images/projects/atrakcja/Atrakcja02.jpg',
      '$lib/assets/images/projects/atrakcja/Atrakcja03.jpg',
    ],
    madeWith: [Skill.JAVASCRIPT],
    demo: {
      openTab: false,
      url: '$lib/assets/project/atrakcja/index.html',
    },
  },
  [ProjectName.INSANITY]: {
    logo: '$lib/assets/images/projects/Insanity.jpg',
    background: '$lib/assets/images/projects/insanity/Insanity_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/insanity/Insanity00_small.jpg',
      '$lib/assets/images/projects/insanity/Insanity01_small.jpg',
      '$lib/assets/images/projects/insanity/Insanity02_small.jpg',
      '$lib/assets/images/projects/insanity/Insanity03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/videos/projects/insanity/trailer.mp4',
      '$lib/assets/images/projects/insanity/Insanity01.jpg',
      '$lib/assets/images/projects/insanity/Insanity02.jpg',
      '$lib/assets/images/projects/insanity/Insanity03.jpg',
    ],
    madeWith: [Skill.UNREAL],
    demo: {
      openTab: true,
      url: 'https://isart-digital.itch.io/insanity',
    },
  },
  [ProjectName.FORTIS]: {
    logo: '$lib/assets/images/projects/Fortis.jpg',
    background: '$lib/assets/images/projects/fortis/Fortis_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/fortis/Fortis01_small.jpg',
      '$lib/assets/images/projects/fortis/Fortis02_small.jpg',
      '$lib/assets/images/projects/fortis/Fortis03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/fortis/Fortis01.jpg',
      '$lib/assets/images/projects/fortis/Fortis02.jpg',
      '$lib/assets/images/projects/fortis/Fortis03.jpg',
    ],
    madeWith: [Skill.HTML_5, Skill.CSS_3, Skill.JAVASCRIPT],
    demo: {
      openTab: false,
      url: '$lib/assets/project/fortis/index.html',
    },
  },
  [ProjectName.HURT]: {
    logo: '$lib/assets/images/projects/Hurt.jpg',
    background: '$lib/assets/images/projects/hurt/Hurt_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/hurt/Hurt01_small.jpg',
      '$lib/assets/images/projects/hurt/Hurt02_small.jpg',
      '$lib/assets/images/projects/hurt/Hurt03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/hurt/Hurt01.jpg',
      '$lib/assets/images/projects/hurt/Hurt02.jpg',
      '$lib/assets/images/projects/hurt/Hurt03.jpg',
    ],
    madeWith: [Skill.HTML_5, Skill.JAVASCRIPT],
    demo: {
      openTab: false,
      url: '$lib/assets/project/hurt/index.html',
    },
  },
  [ProjectName.SUGAR_FIGHT]: {
    logo: '$lib/assets/images/projects/SugarFight.png',
    background: '$lib/assets/images/projects/sugarfight/SugarFight_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/sugarfight/SugarFight01_small.jpg',
      '$lib/assets/images/projects/sugarfight/SugarFight02_small.jpg',
      '$lib/assets/images/projects/sugarfight/SugarFight03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/sugarfight/SugarFight01.jpg',
      '$lib/assets/images/projects/sugarfight/SugarFight02.jpg',
      '$lib/assets/images/projects/sugarfight/SugarFight03.jpg',
    ],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
      url: '$lib/assets/project/sugarfight/index.html',
    },
  },
  [ProjectName.SNEAKY_SNAKE]: {
    logo: '$lib/assets/images/projects/SneakySnake.jpg',
    background: '$lib/assets/images/projects/sneakysnake/SneakySnake_bg.png',
    illustrationSmall: [
      '$lib/assets/images/projects/sneakysnake/SneakySnake01_small.jpg',
      '$lib/assets/images/projects/sneakysnake/SneakySnake02_small.jpg',
      '$lib/assets/images/projects/sneakysnake/SneakySnake03_small.jpg',
    ],
    illustrationBig: [
      '$lib/assets/images/projects/sneakysnake/SneakySnake01.jpg',
      '$lib/assets/images/projects/sneakysnake/SneakySnake02.jpg',
      '$lib/assets/images/projects/sneakysnake/SneakySnake03.jpg',
    ],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
      url: '$lib/assets/project/sneakysnake/index.html',
    },
  },
} as Record<ProjectName, ProjectInfo>;
