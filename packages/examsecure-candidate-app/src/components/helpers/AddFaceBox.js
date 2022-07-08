import React, { Fragment, useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import gateway from "../../utils/gateway";
import Spinner from "react-bootstrap/Spinner";
import { mode } from "./modeSetter";

const AddFaceBox = ({
  setActiveSlide,
  activeSlide,
  currentUser,
  captureFrame,
}) => {
  const [isFaceAdded, setIsFaceAdded] = useState(false);

  useEffect(() => {
    if (activeSlide === 3 && isFaceAdded === false) {
      if (mode === 1) {
        let b64ImageData = captureFrame();
        gateway
          .addIndexFace(b64ImageData, currentUser)
          .then(() => setIsFaceAdded(true));
      } else {
        console.log("In Development mode, NOT sending request to Lmabda");
        setTimeout(() => setIsFaceAdded(true), 1000); // For testing purposes
      }
    }
  }, [activeSlide]);

  return (
    <Fragment>
      <Alert variant={"info"} width={"500px"} className={"instructionsBox"}>
        <Alert.Heading className={"instrHeading"}>
          Vamos salvar seu rosto
        </Alert.Heading>
        <ul className={"instructionsBoxList"}>
          <li>
            Aguarde, nosso sistema está salvando sua biometria
            facial.
          </li>
          <li>
            Se qualquer rosto diferente daquele que está sendo escaneado agora aparecer
            durante o teste, um alerta de fraude será emitido.
          </li>
          <li>Certifique-se de não usar nada cobrindo o rosto.</li>
        </ul>
      </Alert>

      {isFaceAdded ? (
        <Button
          variant={"primary"}
          size={"lg"}
          className={"NextButton"}
          block
          onClick={() => setActiveSlide(4)}
        >
          Prosseguir
        </Button>
      ) : (
        <Button
          variant={"secondary"}
          disabled
          size={"lg"}
          className={"NextButton"}
          block
          onClick={() => {}}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner animation={"border"} style={{ marginRight: "12px" }} />
            Salvando sua biomtria ...
          </span>
        </Button>
      )}
    </Fragment>
  );
};

export default AddFaceBox;
