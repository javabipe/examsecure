import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import { exitFullScreen } from '../../utils/fullscreenAPI';

class PostSubmit extends Component {
  async componentDidMount() {
    this.props.loadForSeconds();
    await exitFullScreen().catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <Card
        style={{ margin: '100px auto', textAlign: 'center', maxWidth: '800px' }}
      >
        <Card.Title style={{ marginTop: '10px' }}>
          <strong className="mr-auto">Obrigado!</strong>
        </Card.Title>

        <Card.Body>Obrigado por experimentar o EnsinoSeguro!</Card.Body>
      </Card>
    );
  }
}

export default PostSubmit;
