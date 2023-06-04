import { useNavigate, useParams } from "react-router-dom";
import type TournamentType from "../types/tournament.type";
import React from "react";
import { Container, MenuItem, TextField } from "@mui/material";
import { sportsType } from "../types/tournamentsettings.type";
import { type ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IProps {
  tournaments: TournamentType[];
}

const TournamentSettings = (props: IProps): ReactJSXElement => {
  const navigate = useNavigate();
  const { tournamentId } = useParams();

  const tournament = props.tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    navigate("/");
    return <></>;
  }

  return (
    <Container>
      <h1>tournament {tournament.name}</h1>
      <TextField
        label={"Select Tournament"}
        value={tournament.settings.sportsType}
        select
        fullWidth
      >
        {sportsType.map((t) => (
          <MenuItem
            key={t}
            value={t}
            onClick={(e) => {
              let tournamentSettings = tournament?.settings;
              tournamentSettings = {
                ...tournamentSettings,
                sportsType: t,
              };
              tournament.settings = tournamentSettings;
            }}
          >
            {t}
          </MenuItem>
        ))}
      </TextField>
    </Container>
  );
};

export default TournamentSettings;
