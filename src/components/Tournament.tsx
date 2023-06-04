import { useNavigate, useParams } from "react-router-dom";
import type TournamentType from "../types/tournament.type";
import React from "react";
import { type ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Button, Container, Grid, Typography } from "@mui/material";

interface IProps {
  tournaments: TournamentType[];
}

const Tournament = (props: IProps): ReactJSXElement => {
  const navigate = useNavigate();
  const { tournamentId } = useParams();

  const tournament = props.tournaments.find((t) => t.id === tournamentId);

  if (!tournament) {
    navigate("/");
    return <></>;
  }

  return (
    <>
      <Grid display={"flex"}>
        <Grid item>
          <Typography variant={"h3"}>tournament {tournament.name}</Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => navigate(`/tournament/${tournament.id}/settings`)}
          >
            Settings
          </Button>
        </Grid>
      </Grid>
      <Typography>Tournament {tournament.settings.sportsType}</Typography>
    </>
  );
};

export default Tournament;
