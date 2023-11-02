import { ProjectName, type ProjectInfo } from '$lib/models/projects';
import { Skill } from '$lib/models/skill';

import RushLogo from '$lib/assets/images/projects/Rush.jpg';
import RushBackground from '$lib/assets/images/projects/rush/Rush_bg.jpg';
import RushSmall01 from '$lib/assets/images/projects/rush/Rush01_small.jpg';
import RushSmall02 from '$lib/assets/images/projects/rush/Rush01_small.jpg';
import RushSmall03 from '$lib/assets/images/projects/rush/Rush01_small.jpg';
import RushBig01 from '$lib/assets/images/projects/rush/Rush01.jpg';
import RushBig02 from '$lib/assets/images/projects/rush/Rush02.jpg';
import RushBig03 from '$lib/assets/images/projects/rush/Rush03.jpg';

import TrajectoryLogo from '$lib/assets/images/projects/Trajectory.png';
import TrajectoryBackground from '$lib/assets/images/projects/trajectory/Trajectory_bg.jpg';
import TrajectorySmall01 from '$lib/assets/images/projects/trajectory/Trajectory00_small.jpg';
import TrajectorySmall02 from '$lib/assets/images/projects/trajectory/Trajectory01_small.jpg';
import TrajectorySmall03 from '$lib/assets/images/projects/trajectory/Trajectory02_small.jpg';
import TrajectorySmall04 from '$lib/assets/images/projects/trajectory/Trajectory03_small.jpg';
import TrajectoryBig01 from '$lib/assets/videos/projects/trajectory/trailer.mp4';
import TrajectoryBig02 from '$lib/assets/images/projects/trajectory/Trajectory01.jpg';
import TrajectoryBig03 from '$lib/assets/images/projects/trajectory/Trajectory02.jpg';
import TrajectoryBig04 from '$lib/assets/images/projects/trajectory/Trajectory03.jpg';

import DogsRebellionLogo from '$lib/assets/images/projects/DogsRebellion.jpg';
import DogsRebellionBackground from '$lib/assets/images/projects/dogsrebellion/DogsRebellion_bg.png';
import DogsRebellionSmall01 from '$lib/assets/images/projects/dogsrebellion/DogsRebellion01_small.jpg';
import DogsRebellionSmall02 from '$lib/assets/images/projects/dogsrebellion/DogsRebellion02_small.jpg';
import DogsRebellionSmall03 from '$lib/assets/images/projects/dogsrebellion/DogsRebellion03_small.jpg';
import DogsRebellionBig01 from '$lib/assets/images/projects/dogsrebellion/DogsRebellion01.jpg';
import DogsRebellionBig02 from '$lib/assets/images/projects/dogsrebellion/DogsRebellion02.jpg';
import DogsRebellionBig03 from '$lib/assets/images/projects/dogsrebellion/DogsRebellion03.jpg';

import I01Logo from '$lib/assets/images/projects/I01.png';
import I01Background from '$lib/assets/images/projects/i01/i01_bg.png';
import I01Small01 from '$lib/assets/images/projects/i01/i0101_small.png';
import I01Small02 from '$lib/assets/images/projects/i01/i0102_small.png';
import I01Small03 from '$lib/assets/images/projects/i01/i0103_small.png';
import I01Big01 from '$lib/assets/images/projects/i01/i0101.png';
import I01Big02 from '$lib/assets/images/projects/i01/i0102.png';
import I01Big03 from '$lib/assets/images/projects/i01/i0103.png';

import AnyxLogo from '$lib/assets/images/projects/Anyx.png';
import AnyxBackground from '$lib/assets/images/projects/anyx/Anyx_bg.png';
import AnyxSmall01 from '$lib/assets/images/projects/anyx/Anyx01_small.jpg';
import AnyxSmall02 from '$lib/assets/images/projects/anyx/Anyx02_small.jpg';
import AnyxSmall03 from '$lib/assets/images/projects/anyx/Anyx03_small.jpg';
import AnyxBig01 from '$lib/assets/images/projects/anyx/Anyx01.jpg';
import AnyxBig02 from '$lib/assets/images/projects/anyx/Anyx02.jpg';
import AnyxBig03 from '$lib/assets/images/projects/anyx/Anyx03.jpg';

import AnylogiLogo from '$lib/assets/images/projects/Anylogi.png';
import AnylogiBackground from '$lib/assets/images/projects/anylogi/Anylogi_bg.png';
import AnylogiSmall01 from '$lib/assets/images/projects/anylogi/Anylogi01_small.jpg';
import AnylogiSmall02 from '$lib/assets/images/projects/anylogi/Anylogi02_small.jpg';
import AnylogiSmall03 from '$lib/assets/images/projects/anylogi/Anylogi03_small.jpg';
import AnylogiBig01 from '$lib/assets/images/projects/anylogi/Anylogi01.jpg';
import AnylogiBig02 from '$lib/assets/images/projects/anylogi/Anylogi02.jpg';
import AnylogiBig03 from '$lib/assets/images/projects/anylogi/Anylogi03.jpg';

import DigFallLogo from '$lib/assets/images/projects/DigFall.jpg';
import DigFallBackground from '$lib/assets/images/projects/digfall/DigFall_bg.png';
import DigFallSmall01 from '$lib/assets/images/projects/digfall/DigFall01_small.jpg';
import DigFallSmall02 from '$lib/assets/images/projects/digfall/DigFall02_small.jpg';
import DigFallSmall03 from '$lib/assets/images/projects/digfall/DigFall03_small.jpg';
import DigFallBig01 from '$lib/assets/images/projects/digfall/DigFall01.jpg';
import DigFallBig02 from '$lib/assets/images/projects/digfall/DigFall02.jpg';
import DigFallBig03 from '$lib/assets/images/projects/digfall/DigFall03.jpg';

import AtrakcjaLogo from '$lib/assets/images/projects/Atrakcja.jpg';
import AtrakcjaBackground from '$lib/assets/images/projects/atrakcja/Atrakcja_bg.png';
import AtrakcjaSmall01 from '$lib/assets/images/projects/atrakcja/Atrakcja01_small.jpg';
import AtrakcjaSmall02 from '$lib/assets/images/projects/atrakcja/Atrakcja02_small.jpg';
import AtrakcjaSmall03 from '$lib/assets/images/projects/atrakcja/Atrakcja03_small.jpg';
import AtrakcjaBig01 from '$lib/assets/images/projects/atrakcja/Atrakcja01.jpg';
import AtrakcjaBig02 from '$lib/assets/images/projects/atrakcja/Atrakcja02.jpg';
import AtrakcjaBig03 from '$lib/assets/images/projects/atrakcja/Atrakcja03.jpg';

import InsanityLogo from '$lib/assets/images/projects/Insanity.jpg';
import InsanityBackground from '$lib/assets/images/projects/insanity/Insanity_bg.png';
import InsanitySmall01 from '$lib/assets/images/projects/insanity/Insanity00_small.jpg';
import InsanitySmall02 from '$lib/assets/images/projects/insanity/Insanity01_small.jpg';
import InsanitySmall03 from '$lib/assets/images/projects/insanity/Insanity02_small.jpg';
import InsanitySmall04 from '$lib/assets/images/projects/insanity/Insanity03_small.jpg';
import InsanityBig01 from '$lib/assets/videos/projects/insanity/trailer.mp4';
import InsanityBig02 from '$lib/assets/images/projects/insanity/Insanity01.jpg';
import InsanityBig03 from '$lib/assets/images/projects/insanity/Insanity02.jpg';
import InsanityBig04 from '$lib/assets/images/projects/insanity/Insanity03.jpg';

import FortisLogo from '$lib/assets/images/projects/Fortis.jpg';
import FortisBackground from '$lib/assets/images/projects/fortis/Fortis_bg.png';
import FortisSmall01 from '$lib/assets/images/projects/fortis/Fortis01_small.jpg';
import FortisSmall02 from '$lib/assets/images/projects/fortis/Fortis02_small.jpg';
import FortisSmall03 from '$lib/assets/images/projects/fortis/Fortis03_small.jpg';
import FortisBig01 from '$lib/assets/images/projects/fortis/Fortis01.jpg';
import FortisBig02 from '$lib/assets/images/projects/fortis/Fortis02.jpg';
import FortisBig03 from '$lib/assets/images/projects/fortis/Fortis03.jpg';

import HurtLogo from '$lib/assets/images/projects/Hurt.jpg';
import HurtBackground from '$lib/assets/images/projects/hurt/Hurt_bg.png';
import HurtSmall01 from '$lib/assets/images/projects/hurt/Hurt01_small.jpg';
import HurtSmall02 from '$lib/assets/images/projects/hurt/Hurt02_small.jpg';
import HurtSmall03 from '$lib/assets/images/projects/hurt/Hurt03_small.jpg';
import HurtBig01 from '$lib/assets/images/projects/hurt/Hurt01.jpg';
import HurtBig02 from '$lib/assets/images/projects/hurt/Hurt02.jpg';
import HurtBig03 from '$lib/assets/images/projects/hurt/Hurt03.jpg';

import SugarFightLogo from '$lib/assets/images/projects/SugarFight.png';
import SugarFightBackground from '$lib/assets/images/projects/sugarfight/SugarFight_bg.png';
import SugarFightSmall01 from '$lib/assets/images/projects/sugarfight/SugarFight01_small.jpg';
import SugarFightSmall02 from '$lib/assets/images/projects/sugarfight/SugarFight02_small.jpg';
import SugarFightSmall03 from '$lib/assets/images/projects/sugarfight/SugarFight03_small.jpg';
import SugarFightBig01 from '$lib/assets/images/projects/sugarfight/SugarFight01.jpg';
import SugarFightBig02 from '$lib/assets/images/projects/sugarfight/SugarFight02.jpg';
import SugarFightBig03 from '$lib/assets/images/projects/sugarfight/SugarFight03.jpg';

import SneakySnakeLogo from '$lib/assets/images/projects/SneakySnake.jpg';
import SneakySnakeBackground from '$lib/assets/images/projects/sneakysnake/SneakySnake_bg.png';
import SneakySnakeSmall01 from '$lib/assets/images/projects/sneakysnake/SneakySnake01_small.jpg';
import SneakySnakeSmall02 from '$lib/assets/images/projects/sneakysnake/SneakySnake02_small.jpg';
import SneakySnakeSmall03 from '$lib/assets/images/projects/sneakysnake/SneakySnake03_small.jpg';
import SneakySnakeBig01 from '$lib/assets/images/projects/sneakysnake/SneakySnake01.jpg';
import SneakySnakeBig02 from '$lib/assets/images/projects/sneakysnake/SneakySnake02.jpg';
import SneakySnakeBig03 from '$lib/assets/images/projects/sneakysnake/SneakySnake03.jpg';

export const PROJECTS = {
  [ProjectName.RUSH]: {
    logo: RushLogo,
    background: RushBackground,
    illustrationSmall: [RushSmall01, RushSmall02, RushSmall03],
    illustrationBig: [RushBig01, RushBig02, RushBig03],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.TRAJECTORY]: {
    logo: TrajectoryLogo,
    background: TrajectoryBackground,
    illustrationSmall: [TrajectorySmall01, TrajectorySmall02, TrajectorySmall03, TrajectorySmall04],
    illustrationBig: [TrajectoryBig01, TrajectoryBig02, TrajectoryBig03, TrajectoryBig04],
    madeWith: [Skill.ANGULAR, Skill.TYPESCRIPT],
    demo: {
      openTab: true,
      url: 'https://trajectory.jp/',
    },
  },
  [ProjectName.DOGS_REBELLION]: {
    logo: DogsRebellionLogo,
    background: DogsRebellionBackground,
    illustrationSmall: [DogsRebellionSmall01, DogsRebellionSmall02, DogsRebellionSmall03],
    illustrationBig: [DogsRebellionBig01, DogsRebellionBig02, DogsRebellionBig03],
    madeWith: [Skill.JAVASCRIPT, Skill.HTML_5],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.I01]: {
    logo: I01Logo,
    background: I01Background,
    illustrationSmall: [I01Small01, I01Small02, I01Small03],
    illustrationBig: [I01Big01, I01Big02, I01Big03],
    madeWith: [Skill.UNREAL],
    demo: {
      openTab: true,
      url: 'https://installation01.org',
    },
  },
  [ProjectName.ANYX]: {
    logo: AnyxLogo,
    background: AnyxBackground,
    illustrationSmall: [AnyxSmall01, AnyxSmall02, AnyxSmall03],
    illustrationBig: [AnyxBig01, AnyxBig02, AnyxBig03],
    madeWith: [Skill.REACT],
    demo: {
      openTab: true,
      url: 'https://any-x.com/',
    },
  },
  [ProjectName.ANYLOGI]: {
    logo: AnylogiLogo,
    background: AnylogiBackground,
    illustrationSmall: [AnylogiSmall01, AnylogiSmall02, AnylogiSmall03],
    illustrationBig: [AnylogiBig01, AnylogiBig02, AnylogiBig03],
    madeWith: [Skill.ANGULAR],
    demo: {
      openTab: true,
      url: 'https://anylogi.com/',
    },
  },
  [ProjectName.DIG_FALL]: {
    logo: DigFallLogo,
    background: DigFallBackground,
    illustrationSmall: [DigFallSmall01, DigFallSmall02, DigFallSmall03],
    illustrationBig: [DigFallBig01, DigFallBig02, DigFallBig03],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.ATRAKCJA]: {
    logo: AtrakcjaLogo,
    background: AtrakcjaBackground,
    illustrationSmall: [AtrakcjaSmall01, AtrakcjaSmall02, AtrakcjaSmall03],
    illustrationBig: [AtrakcjaBig01, AtrakcjaBig02, AtrakcjaBig03],
    madeWith: [Skill.JAVASCRIPT],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.INSANITY]: {
    logo: InsanityLogo,
    background: InsanityBackground,
    illustrationSmall: [InsanitySmall01, InsanitySmall02, InsanitySmall03, InsanitySmall04],
    illustrationBig: [InsanityBig01, InsanityBig02, InsanityBig03, InsanityBig04],
    madeWith: [Skill.UNREAL],
    demo: {
      openTab: true,
      url: 'https://isart-digital.itch.io/insanity',
    },
  },
  [ProjectName.FORTIS]: {
    logo: FortisLogo,
    background: FortisBackground,
    illustrationSmall: [FortisSmall01, FortisSmall02, FortisSmall03],
    illustrationBig: [FortisBig01, FortisBig02, FortisBig03],
    madeWith: [Skill.HTML_5, Skill.CSS_3, Skill.JAVASCRIPT],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.HURT]: {
    logo: HurtLogo,
    background: HurtBackground,
    illustrationSmall: [HurtSmall01, HurtSmall02, HurtSmall03],
    illustrationBig: [HurtBig01, HurtBig02, HurtBig03],
    madeWith: [Skill.HTML_5, Skill.JAVASCRIPT],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.SUGAR_FIGHT]: {
    logo: SugarFightLogo,
    background: SugarFightBackground,
    illustrationSmall: [SugarFightSmall01, SugarFightSmall02, SugarFightSmall03],
    illustrationBig: [SugarFightBig01, SugarFightBig02, SugarFightBig03],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
    },
  },
  [ProjectName.SNEAKY_SNAKE]: {
    logo: SneakySnakeLogo,
    background: SneakySnakeBackground,
    illustrationSmall: [SneakySnakeSmall01, SneakySnakeSmall02, SneakySnakeSmall03],
    illustrationBig: [SneakySnakeBig01, SneakySnakeBig02, SneakySnakeBig03],
    madeWith: [Skill.UNITY],
    demo: {
      openTab: false,
    },
  },
} as Record<ProjectName, ProjectInfo>;
