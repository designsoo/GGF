import { GameNameEN, GameNameKR, MatchTypeEN } from '@/types';

export const GAME_NAME_LIST_EN: GameNameEN[] = ['LEAGUE OF LEGENDS', 'BATTLEGROUNDS', 'OVERWATCH 2', 'MINECRAFT'];
export const MATCH_TYPE_LIST_EN: MatchTypeEN[] = ['Offline Match', 'Online Match', 'Clan Recruitment', 'Game Strategy'];

export const GAME_NAME_EN_TO_KR: Record<GameNameEN, GameNameKR> = {
  'LEAGUE OF LEGENDS': '리그오브레전드',
  BATTLEGROUNDS: '배틀그라운드',
  'OVERWATCH 2': '오버워치 2',
  MINECRAFT: '마인크래프트',
};

export const CATEGORY_TO_GAME: Record<string, GameNameEN> = {
  스포츠: 'LEAGUE OF LEGENDS',
  투어: 'BATTLEGROUNDS',
  관광: 'OVERWATCH 2',
  웰빙: 'MINECRAFT',
};

export const GAME_T0_CATEGORY = {
  'LEAGUE OF LEGENDS': '스포츠',
  BATTLEGROUNDS: '투어',
  'OVERWATCH 2': '관광',
  MINECRAFT: '웰빙',
};

export const GAME_FILTERS = [
  { id: 'all', text: '전체' },
  { id: '스포츠', text: '리그오브레전드' },
  { id: '투어', text: '배틀그라운드' },
  { id: '관광', text: '오버워치 2' },
  { id: '웰빙', text: '마인크래프트' },
];

export const GAME_NAME_KR_TO_PATH_NAME: Record<string, string> = {
  리그오브레전드: 'league-of-legends',
  배틀그라운드: 'battlegrounds',
  '오버워치 2': 'overwatch-2',
  마인크래프트: 'minecraft',
};

export const GAME_PATH_NAME_TO_GAME_NAME_EN: Record<string, string> = {
  'league-of-legends': GAME_NAME_LIST_EN[0],
  battlegrounds: GAME_NAME_LIST_EN[1],
  'overwatch-2': GAME_NAME_LIST_EN[2],
  minecraft: GAME_NAME_LIST_EN[3],
};

export const PRICE_TO_MATCH_TYPE: Record<string, string> = {
  0: MATCH_TYPE_LIST_EN[0],
  1: MATCH_TYPE_LIST_EN[1],
  2: MATCH_TYPE_LIST_EN[2],
  3: MATCH_TYPE_LIST_EN[3],
};
