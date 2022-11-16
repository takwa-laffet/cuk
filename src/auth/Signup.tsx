import React from "react";
import { FormGroup, Button, Input, CardBody, CardFooter } from "reactstrap";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonItemDivider,
} from "@ionic/react";
import Swal from "sweetalert2";
import QRCode from "qrcode";

import { supabase } from "../data/Client";

import "./SignUp.css";

export default function Recl() {
  const [rec, setrec] = React.useState<any>("");

  async function recl() {
    const { error } = await supabase.from("reclamation").insert([
      {
        reclamation: rec,
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
        title: "attendez notre reponse et merci",
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
    <>
      <label>donnez votre nom et matrcule et votre problmme :</label>
      <br />
      <textarea
        id="w3review"
        name="w3review"
        onChange={(e: any) => setrec(e.target.value!)}
      ></textarea>
      <Button onClick={recl}>ok</Button>
    </>
  );
}
