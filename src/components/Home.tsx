import React, { useState } from "react";
import { Box, Container, MenuItem, TextField } from "@mui/material";
import type TournamentType from "../types/tournament.type";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { type ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IProps {
  tournaments: TournamentType[];
}

const Home = (props: IProps): ReactJSXElement => {
  const navigate = useNavigate();
  const [tournamentName, setTournament] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTournament(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (tournamentName?.trim() === "") {
      return;
    }
    const tournament = { id: uuidv4(), name: tournamentName, settings: {} };
    props.tournaments.push(tournament);
    setTournament("");
    navigate(`/tournament/${tournament.id}`);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id={"new-tournament-input"}
          label={"Create Tournament"}
          value={tournamentName}
          onChange={handleChange}
          onSubmit={handleSubmit}
          error={props.tournaments.map((t) => t.name).includes(tournamentName)}
          fullWidth
        />
      </Box>

      <TextField label={"Select Tournament"} select fullWidth>
        {props.tournaments.map((tournament) => (
          <MenuItem
            key={tournament.id}
            id={tournament.id}
            value={tournament.name}
            onClick={(e) => {
              navigate(`/tournament/${e.currentTarget.id}`);
            }}
          >
            {tournament.name}
          </MenuItem>
        ))}
      </TextField>
    </Container>
  );
};

export default Home;
