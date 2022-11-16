import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";
import Swal from "sweetalert2";

import { supabase } from "../../data/Client";

import "./ClockAndDate.css";

export default function ClockDate() {
  const [clockState, setClockState] = React.useState<string>("");
  const [dateState, setDateState] = React.useState("");

  React.useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const newday = day + "/" + month + "/" + year;
    setDateState(newday);
    setInterval(() => {
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();

      setClockState(h + ":" + m);
    });
  }, []);
  const user = supabase.auth.user();
  async function takeBreak() {
    const { error } = await supabase.from("TimeBreack").insert([
      {
        email: user?.email,
        break: clockState,
        date: dateState,
      },
    ]);
    if (error) {
      console.log(error);
    } else {
      Swal.fire({
        title: "Have Fun",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
    }
  }

  async function back() {
    const { error } = await supabase
      .from("TimeBack")
      .insert([{ email: user?.email, timeback: clockState, date: dateState }]);
    if (error) {
      console.log(error);
    } else {
      Swal.fire({
        title: "Lets work",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://c.tenor.com/GfSX-u7VGM4AAAAM/coding.gif")
    left top
    no-repeat
  `,
      });
    }
  }

  async function work() {
    const { error } = await supabase.from("TimeLogin").insert([
      {
        email: user?.email,
        timelogin: clockState,
        date: dateState,
      },
    ]);

    if (error) {
      console.log(error);
    } else {
      Swal.fire({
        title: "Lets work",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://c.tenor.com/GfSX-u7VGM4AAAAM/coding.gif")
    left top
    no-repeat
  `,
      });
    }
  }

  async function exit() {
    const { error } = await supabase.from("TimeLogout").insert([
      {
        email: user?.email,
        timelogout: clockState,
        date: dateState,
      },
    ]);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      Swal.fire({
        title: "Bye",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
    }
  }

  return (
    <Container>
      <div className="clockDate__clz">
        <div className="clock__clz">{clockState}</div>
        <div className=" date__clz ">{dateState}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            width: "auto",
            margin: "auto",
            padding: "auto",
            gap: 10,
          }}
        >
          <div>
            <Button className="btn-lets-work" onClick={work}>
              Lets work
            </Button>
          </div>
          <div>
            <Button className="btn-take-break" onClick={takeBreak}>
              Take a break
            </Button>
          </div>
          <div>
            <Button className="btn-back" onClick={back}>
              I'am back
            </Button>
          </div>
          <div>
            <Button className="btn-exit" onClick={exit}>
              Exit
            </Button>
            <br />
            <br />
          </div>
          <br />
          <br />
          <Link to="/signup">envoyer votre motif</Link>
        </div>
      </div>
    </Container>
  );
}
