import { ISimulatorGameSettings } from "./simulator";

export interface IGameTerms {
  limitedCategory: string; //5 star , S tier, 5★
  pullName: string; // e.g. "Wish", "Warp"
  pullConjugation: string; //es , s   (wish-es, warp-s)
  currencyName: string; // e.g. "Primogem", "Stellar Jade"
  currencyConjugation: string; // e.g. "s" (Primogem-s, Stellar Jade-s)
  characterName: string; // "Agent", "Character"
  weaponName: string; // "W-Engine", "Light Cone"
}

export interface IGame {
  id: string;
  name: string;
  icon: string;
  gameTerms: IGameTerms;
  simulationSettings: ISimulatorGameSettings;
}

export const GAMES: IGame[] = [
  // Honkai Star Rail
  {
    id: "hsr",
    name: "Honkai Star Rail",
    icon: "/icons/hsr.webp",
    gameTerms: {
      limitedCategory: "5★",
      pullName: "Warp",
      pullConjugation: "s",
      currencyName: "Stellar Jade",
      currencyConjugation: "s",
      characterName: "Character",
      weaponName: "Light Cone",
    },
    simulationSettings: {
      characterPity: {
        hardPity: 90,
        softPity: 74,
        softPityIncrement: 0.06,
      },
      characterRate: {
        baseRate: 0.006,
        guaranteedAfter: 1,
        limitedOptions: 1,
        limitedRate: 0.5,
      },
      weaponPity: {
        hardPity: 80,
        softPity: 64,
        softPityIncrement: 0.06,
      },
      weaponRate: {
        baseRate: 0.008,
        guaranteedAfter: 1,
        limitedOptions: 1,
        limitedRate: 0.75,
      },
      conversionRate: 160
    },
  },
  // Genshin Impact
  {
    id: "genshin",
    name: "Genshin Impact",
    icon: "/icons/genshin.webp",
    gameTerms: {
      limitedCategory: "5★",
      pullName: "Wish",
      pullConjugation: "es",
      currencyName: "Primogem",
      currencyConjugation: "s",
      characterName: "Character",
      weaponName: "Weapon",
    },
    simulationSettings: {
      characterRate: {
        baseRate: 0.006,
        guaranteedAfter: 1,
        limitedOptions: 1,
        limitedRate: 0.5,
      },
      characterPity: {
        hardPity: 90,
        softPity: 74,
        softPityIncrement: 0.06,
      },

      weaponRate: {
        baseRate: 0.007,
        guaranteedAfter: 1,
        limitedOptions: 2,
        limitedRate: 0.75,
      },
      weaponPity: {
        hardPity: 80,
        softPity: 64,
        softPityIncrement: 0.06,
      },
      conversionRate: 160
    },
  },
  // Zenless Zone Zero
  {
    id: "zzz",
    name: "Zenless Zone Zero",
    icon: "/icons/zzz.webp",
    gameTerms: {
      limitedCategory: "S-Rank",
      characterName: "Agent",
      pullName: "Signal Search",
      pullConjugation: "es",
      currencyName: "Polychrome",
      currencyConjugation: "s",
      weaponName: "W-Engine",
    },
    simulationSettings: {
      characterPity: {
        hardPity: 90,
        softPity: 74,
        softPityIncrement: 0.06,
      },
      characterRate: {
        baseRate: 0.006,
        guaranteedAfter: 1,
        limitedOptions: 1,
        limitedRate: 0.5,
      },
      weaponPity: {
        hardPity: 80,
        softPity: 65,
        softPityIncrement: 0.06,
      },
      weaponRate: {
        baseRate: 0.01,
        guaranteedAfter: 1,
        limitedOptions: 1,
        limitedRate: 0.75,
      },
      conversionRate: 160
    },
  },
] as const;

export const CUSTOM_GAME: IGame = {
  id: "custom",
  icon: "/icons/hsr.webp",
  name: "Custom Game",
  gameTerms: {
    limitedCategory: "5★",
    pullName: "Pull",
    pullConjugation: "s",
    currencyName: "Currency",
    currencyConjugation: "",
    characterName: "Character",
    weaponName: "Weapon",
  },
  simulationSettings: {
    characterRate: {
      baseRate: 0.006,
      guaranteedAfter: 1,
      limitedOptions: 1,
      limitedRate: 0.5,
    },
    characterPity: {
      hardPity: 90,
      softPity: 74,
      softPityIncrement: 0.06,
    },
    weaponRate: {
      baseRate: 0.006,
      guaranteedAfter: 1,
      limitedOptions: 2,
      limitedRate: 0.75,
    },
    weaponPity: {
      hardPity: 80,
      softPity: 64,
      softPityIncrement: 0.06,
    },
    conversionRate: 160
  },
} as const;
