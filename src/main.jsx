import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const banner = "  ____                  _    ____  _ _\n |  _ \\               | |  | __ )(_) |_ ___\n | |_) | _ __ ___  __ _| | _|  _ \\| | __/ _ \\\n |  _ < | |__/ -_)/ _` | |/ /|_) | | ||  __/\n |_| \\_\\|_|  \\___|\\__,_|_|\\_\\____/|_|\\__\\___|\n\n";

console.log(
  "%c" + banner +
  "%cHey there, curious one. \n\n" +
  "Looks like you opened the console. Respect.\n" +
  "I am Aftab � full-stack developer, CDAC PG-DAC 2026, shipping BreakBite right now.\n\n" +
  "If you are hiring fresher SDEs or full-stack devs:\n" +
  "? aftabalammansoorii@gmail.com\n" +
  "? linkedin.com/in/aftabalammansoori\n" +
  "? github.com/aftabalammansoori\n\n" +
  "Built with Passion. Source on GitHub.\n",
  "color: #34d399; font-family: monospace; font-size: 11px; line-height: 1.4;",
  "color: #e5e5e5; font-family: monospace; font-size: 13px; line-height: 1.6;"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
