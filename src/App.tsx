import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import Tournament from "./components/Tournament";
import type TournamentType from "./types/tournament.type";
import Impressum from "./components/Impressum";
import TournamentSettings from "./components/TournamentSettings";
import { type ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IProps {
  tournaments: TournamentType[];
}

const App = (props: IProps): ReactJSXElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const backHomeButton = location.pathname !== "/" && (
    <Button
      color={"inherit"}
      onClick={() => {
        navigate("/");
      }}
    >
      Back to Home
    </Button>
  );

  return (
    <Container className="App">
      <AppBar position="fixed" component="header">
        <Toolbar>{backHomeButton}</Toolbar>
      </AppBar>
      <Container style={{ marginTop: "5em", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home tournaments={props.tournaments} />} />
          <Route
            path="/tournament/:tournamentId"
            element={<Tournament tournaments={props.tournaments} />}
          />
          <Route
            path="/tournament/:tournamentId/settings"
            element={<TournamentSettings tournaments={props.tournaments} />}
          />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Container>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid xs display="flex" justifyContent={"center"}>
            <Typography fontWeight={"bold"}>© Tornea</Typography>
          </Grid>
          <Grid xs display="flex" justifyContent={"center"}>
            <Button
              onClick={() => {
                navigate("/impressum");
              }}
              color={"inherit"}
              disabled={location.pathname === "/impressum"}
            >
              <Typography>Impressum</Typography>
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Container>
  );
};

export default App;
