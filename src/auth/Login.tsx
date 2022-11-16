import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, FormGroup, CardFooter, Button, CardBody } from "reactstrap";
import { IonContent, IonCard, IonCardHeader } from "@ionic/react";
import Swal from "sweetalert2";

import { supabase } from "../data/Client";

export default function LogIn() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  let navigate = useNavigate();

  async function signin() {
    try {
      const { error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });

      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } else {
        navigate("/home");
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

        <IonCard className="card-singin__clz">
          <IonCardHeader>
            <h3>Sign In</h3>
          </IonCardHeader>
          <CardBody>
            <FormGroup>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <br />

              <Input
                type="password"
                placeholder="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </FormGroup>
            <Button
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "end",
              }}
              onClick={signin}
            >
              Login
            </Button>
          </CardBody>
          <CardFooter>
            <div className=" links__clz">
              <Link to="/sign">envoyer une reclamation</Link>
            </div>
            {/*  <div className=" link-qr__clz">
              <Link to="/scanqr">Login with scan qr </Link>
            </div>
              <div className=" link-qr__clz">
              <Link to="/fingerprint">Login with fingerprint </Link>
            </div> */}
          </CardFooter>
        </IonCard>
      </div>
    </IonContent>
  );
}
