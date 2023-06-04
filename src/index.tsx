import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import type TournamentType from "./types/tournament.type";

const tournaments: TournamentType[] = [
  { id: "abc", name: "volleyball", settings: { sportsType: "football" } },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/tornea"}>
      <App tournaments={tournaments} />
    </BrowserRouter>
  </React.StrictMode>
);
