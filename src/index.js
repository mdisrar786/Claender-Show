

import ReactDOM from "react-dom/client";
import Calendar from "./components/Calendar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main style={{ padding: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
    <section>
      <h2>03 Oct 2022</h2>
      <Calendar date={new Date(2022, 9, 3)} />
    </section>

    <section>
      <h2>23 Mar 2020</h2>
      <Calendar date={new Date(2020, 2, 23)} />
    </section>
  </main>
);