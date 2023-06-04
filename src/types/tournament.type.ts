import { TournamentSettingsType } from "./tournamentsettings.type";

interface TournamentType {
  id: string;
  name: string;
  settings: TournamentSettingsType;
}

export default TournamentType;
