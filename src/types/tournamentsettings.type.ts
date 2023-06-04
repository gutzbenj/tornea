export const sportsType = ["volleyball", "football"] as const;

export interface TournamentSettingsType {
  sportsType?: typeof sportsType[number];
}
