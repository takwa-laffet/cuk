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

export default function SignUp() {
  const [firstname, setfirstname] = React.useState<string>("");
  const [lastname, setlastname] = React.useState<string>("");
  const [age, setage] = React.useState<string>("");
  const [id, setid] = React.useState<string>("");
  const [email, setemail] = React.useState<string>("");
  const [password, setpassword] = React.useState<string>("");
  const [qr, setqr] = React.useState<any>();

  async function send() {
    try {
      const { error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
        },
        {
          data: {
            FN: firstname,
            LN: lastname,
            age: age,
            id: id,
          },
        }
      );
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } else {
        QRCode.toDataURL(`${email},${password}`).then((data) => {
          setqr(
            <IonItemDivider>
              <h1 className="qr-code-header"> your Qr code</h1>
              <img className="qrcode" src={data} alt=" "></img>
            </IonItemDivider>
          );
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
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
            <h3>Sign Up</h3>
          </IonCardHeader>
          <CardBody>
            <FormGroup>
              <Input
                type="text"
                placeholder="First_name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setfirstname(e.target.value!)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="Last_name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setlastname(e.target.value)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="age"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setage(e.target.value)
                }
              />
              <br />

              <Input
                type="text"
                placeholder="Id"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setid(e.target.value)
                }
              />
              <br />

              <Input
                type="email"
                placeholder="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setemail(e.target.value)
                }
              />
              <br />
              <Input
                placeholder="password"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setpassword(e.target.value)
                }
              />
              <br />
            </FormGroup>
          </CardBody>
          <CardFooter className="footer-sing-up__clz">
            <Button className="btn-sing-up__clz" onClick={send}>
              Sing up
            </Button>
          </CardFooter>
        </IonCard>
      </div>

      {qr}
    </IonContent>
  );
}
