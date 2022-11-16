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

import "../auth/SignUp.css";

export default function Page() {
  const [firstname, setfirstname] = React.useState<string>("");
  const [lastname, setlastname] = React.useState<string>("");
  const [age, setage] = React.useState<string>("");
  const [id, setid] = React.useState<string>("");
  const [email, setemail] = React.useState<string>("");
  const [password, setpassword] = React.useState<string>("");
  const [qr, setqr] = React.useState<any>();
  async function recl() {
    const { error } = await supabase.from("etudiants").insert([
      {
        daten: email,
        tel: password,
        id: firstname,
        nom: lastname,
        pren: age,
        vill: id,
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
        title: "etudiants ajouter avec succes",
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
    <IonContent className="container-card__clz">
      <div className="stars-box__clz">
        <div className="stars-group-1__clz"></div>
        <div className="stars-group-2__clz"></div>
        <div className="stars-group-3__clz"></div>
        <div className="stars-group-4__clz"></div>
        <div className="stars-group-5__clz"></div>
        <div className="stars-group-6__clz"></div>

        <IonCard className=" card-signup__clz">
          <IonCardHeader>
            <h3>ajouter un etudiants</h3>
          </IonCardHeader>
          <CardBody>
            <FormGroup>
              <Input
                type="text"
                placeholder="Cin"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setfirstname(e.target.value!)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="nom"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setlastname(e.target.value)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="prenome"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setage(e.target.value)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="ville"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setid(e.target.value)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="date de naissance"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setemail(e.target.value)
                }
              />
              <br />
              <Input
                placeholder="telphone"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setpassword(e.target.value)
                }
              />
              <br />
            </FormGroup>
          </CardBody>
          <CardFooter className="footer-sing-up__clz">
            <Button className="btn-sing-up__clz" onClick={recl}>
              ajouter
            </Button>
          </CardFooter>
        </IonCard>
      </div>

 
    </IonContent>
  );
}
