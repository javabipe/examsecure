import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

class Caught extends Component {
  componentDidMount() {
    this.props.loadForSeconds();
  }

  render() {
    return (
      <Card style={{ marginTop: "50px" }} className={"container"}>
        <Alert variant={"danger"} style={{ textAlign: "center" }}>
          <b>Você foi desconectado devido à detecção de mal uso.</b>
          <br />
          Por favor contate o Professor.
        </Alert>

        <Button href={"/"} variant={"outline-primary"}>
          Clique para retornar à Pagina Principal
        </Button>
      </Card>
    );
  }
}

export default Caught;
