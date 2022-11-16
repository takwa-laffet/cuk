import { useState } from "react";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonItemDivider,
} from "@ionic/react";

import Swal from "sweetalert2";
import { supabase } from "../../data/Client";

import "./ScanQr.css";
export default function ScanQr() {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  const handleErrorWebCam = (error: any) => {
    console.log(error);
  };

  async function signIn(email: string, password: string) {
    try {
      const { error, user } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      } else {
        if (user) {
          navigate("/home");
        }
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  const handleScanWebCam = (result: string | null) => {
    if (result) {
      let userArray: string[] = result.split(",");
      setScanResultWebCam(userArray[0]);
      setemail(scanResultWebCam);
      setpassword(userArray[1]);
      signIn(email, password);
    }
  };

  return (
    <IonContent className="container-card__clz">
      <IonItemDivider className="sun-box__clz">
        <IonCard className="card-qr__clz">
          <IonCardHeader>
            <h2 className="qr-login__clz">Login with QR code</h2>
          </IonCardHeader>
          <QrReader
            delay={300}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
          <br />
        </IonCard>
      </IonItemDivider>
      <div className="stars-box__clz">
        <div className="stars-group-1__clz"></div>
        <div className="stars-group-2__clz"></div>
        <div className="stars-group-3__clz"></div>
        <div className="stars-group-4__clz"></div>
        <div className="stars-group-5__clz"></div>
        <div className="stars-group-6__clz"></div>
      </div>
    </IonContent>
  );
}
