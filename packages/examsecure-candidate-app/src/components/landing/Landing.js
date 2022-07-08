import React, { Fragment, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import '../../styles/landing.css';
import {
  defineFullscreenChangeEvent,
  makeFullScreen,
} from '../../utils/fullscreenAPI';
import AddFaceBox from '../helpers/AddFaceBox';
import { mode } from '../helpers/modeSetter';
import isDeviceMobile from '../../utils/checkMobileDeviceAPI';
import { pageview } from 'react-ga';

const Landing = ({ loadForSeconds, currentUser, questionSetMetadata }) => {
  const [isWebCamReady, setIsWebcamReady] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const webcam = useRef(undefined);
  const history = useHistory();
  const currentUrl = window.location.href;

  const setupWebcam = (instance) => {
    webcam.current = instance;

    const checkIfReady = () => {
      if (
        webcam.current &&
        webcam.current.state &&
        webcam.current.state.hasUserMedia
      ) {
        setIsWebcamReady(true);
      } else {
        setTimeout(checkIfReady, 250);
      }
    };

    checkIfReady();
  };

  const captureFrame = () => {
    if (webcam.current) {
      const image = webcam.current.getScreenshot();
      if (image) {
        return image.split(',')[1];
      }
    }
  };

  useEffect(() => {
    if (isDeviceMobile()) {
      alert(
        'Faça login a partir de um PC para obter a melhor experiência. Usar um telefone celular pode levar a um comportamento inesperado.',
      );
      history.push('/');
    }
    loadForSeconds();
    pageview(window.location.pathname + window.location.search);
    if (!document.isFullscreenListenerSet) {
      defineFullscreenChangeEvent(onFullscreenExit, onFullscreenEnter);
      document.isFullscreenListenerSet = true;
    }
  }, []);

  const enterFullscreen = async () => {
    await makeFullScreen('rootWrapper');
    if (!window.onblur) window.onblur = onFocusLost;
    setIsFullscreenActive(true);
  };

  const onFullscreenExit = () => {
    if (mode === 1) {
      setActiveSlide(1);
      setIsFullscreenActive(false);
      alert(
        'Por favor, não saia do modo de tela cheia ou clique em qualquer outro lugar. Você será desconectado!',
      );
      window.location.href = '/';
    }
  };

  const onFocusLost = () => {
    setActiveSlide(1);
    setIsFullscreenActive(false);
    document.exitFullscreen().catch(() => console.log('not in fullscreen'));
  };

  const onFullscreenEnter = () => {
    setIsFullscreenActive(true);
  };

  const WebcamSetupInstructions = () => (
    <Fragment>
      <Alert variant={'warning'} width={'500px'} className={'instructionsBox'}>
        <Alert.Heading className={'instrHeading'}>
          Por favor, permita as permissões necessárias para continuar
        </Alert.Heading>
        <ul className={'instructionsBoxList'}>
          <li>
            Quando solicitado, você precisa clicar <i>Permitir</i> para usar o aplicativo
            com sua webcam.
          </li>
          <li>
           Se você não vir a caixa de diálogo, tente{' '}
            <a href={currentUrl}>abrindo o aplicativo</a> em uma nova janla
            ou revise as configurações de sua webcam em seu navegador.
          </li>
          <li>
            Recomendamos usar a versão mais recente do <b>Google Chrome</b> para uma
            experiência sem complicações.
          </li>
        </ul>
      </Alert>

      <Button
        variant={'secondary'}
        size={'lg'}
        className={'NextButton'}
        disabled
        block
      >
        Próximo
      </Button>
    </Fragment>
  );

  const FullscreenSetup = () => (
    <Fragment>
      <Alert variant={'info'} width={'500px'} className={'instructionsBox'}>
        <Alert.Heading className={'instrHeading'}>
          Instruções do modo de tela cheia
        </Alert.Heading>
        <ul className={'instructionsBoxList'}>
          <li>Clique no botão abaixo para entrar no modo de tela cheia</li>
          <li>
            Não tente sair do modo de tela cheia durante o exame. Você será
            desconectado!
          </li>
          <li>
            Certifique-se de que todos <b>pop-ups foram desativados</b> antes de proceder.
          </li>
          <li>
            Se você continuar sendo redirecionado para esta tela, certifique-se de estar
            permitindo acesso à câmera. Recomendamos usar o Google
            Chrome.
          </li>
        </ul>
      </Alert>

      {isFullscreenActive ? (
        <Button
          variant={'primary'}
          size={'lg'}
          className={'NextButton'}
          block
          onClick={() => setActiveSlide(2)}
        >
          Próximo
        </Button>
      ) : (
        <Button
          variant={'outline-primary'}
          size={'lg'}
          className={'NextButton'}
          block
          onClick={() =>
            enterFullscreen().catch(() =>
              console.log("Couldn't enter full screen"),
            )
          }
        >
          Entrar em tela cheia
        </Button>
      )}
    </Fragment>
  );

  const ExamInstructions = () => (
    <Fragment>
      <Alert variant={'info'} width={'500px'} className={'instructionsBox'}>
        <Alert.Heading className={'instrHeading'}>
          Instruções do Exame
        </Alert.Heading>
        <ul className={'instructionsBoxList'}>
          <li>Certifique-se de que seu rosto esteja claramente visível na webcam.</li>
          <li>
            Não tente sair do modo de tela cheia. Você será desconectado.
          </li>
          <li>
           Não use boné, óculos de proteção/óculos de sol, fones de ouvido.
          </li>
          <li>Não tente esconder seu rosto durante o teste.</li>
          <li>
            Certifique-se de que ninguém mais esteja sentado com você durante toda a
            duração do teste.
          </li>
        </ul>
      </Alert>

      <Button
        variant={'primary'}
        size={'lg'}
        className={'NextButton'}
        block
        onClick={() => setActiveSlide(3)}
      >
        Próximo
      </Button>
    </Fragment>
  );

  const ExamStartConfirmation = () => (
    <Fragment>
      <Alert
        variant={'info'}
        width={'500px'}
        className={'instructionsBox confirmationBox'}
      >
        <Alert.Heading className={'instrHeading'}>Confirmação</Alert.Heading>
        {questionSetMetadata ? (
          <div className={'confirmationText'}>
            <div>
              Exame Selecionado: <b>{questionSetMetadata.test_name}</b>
            </div>
            <div>
              Duração do Exame:{' '}
              <b>{questionSetMetadata.test_duration} minutos</b>
            </div>
          </div>
        ) : null}
        <div>Tem certeza de que deseja iniciar o teste?</div>
      </Alert>

      <Link to={'/exam'}>
        <Button variant={'primary'} size={'lg'} className={'NextButton'} block>
          Start the Test
        </Button>
      </Link>
    </Fragment>
  );

  const CurrentlyActiveSlide = () => {
    if (activeSlide === 1) return <FullscreenSetup />;
    else if (activeSlide === 2) return <ExamInstructions />;
    else if (activeSlide === 3)
      return (
        <AddFaceBox
          setActiveSlide={setActiveSlide}
          activeSlide={activeSlide}
          currentUser={currentUser}
          captureFrame={captureFrame}
        />
      );
    else if (activeSlide === 4) return <ExamStartConfirmation />;
  };

  return (
    <>
      <Container>
        <Row className={'mainRow align-middle'}>
          <Col xs={12} md={6}>
            <Webcam
              ref={setupWebcam}
              screenshotFormat={'image/jpeg'}
              videoConstraints={{
                width: 1280,
                height: 640,
                facingMode: 'user',
              }}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={12} md={6}>
            {isWebCamReady ? (
              <>
                <CurrentlyActiveSlide />
              </>
            ) : (
              <WebcamSetupInstructions />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
