import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button as ESButton } from '@examsecure/design-system';
import './ModalStyles.scss';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getHeadPoseInterpretation } from '../../../../utils/headPoseAnalysisUtils';
import Alert from 'react-bootstrap/Alert';

const DetailsModal = ({
  show,
  onModalHide,
  detailsFlagRecord,
  flaggedImages,
}) => {
  const [currentRecord] =
    flaggedImages &&
    flaggedImages.filter((record) => record?.id === detailsFlagRecord);

  const testRes = currentRecord?.testRes;
  console.log({ testRes });

  return (
    <Modal show={show} onHide={onModalHide} size={'xl'} className="proc-modal">
      <Modal.Header closeButton>
        <Modal.Title>Detalhes da imagem sinalizada</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {currentRecord && testRes && (
          <>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <img src={currentRecord.imageURL} alt={'examsecure'} />
                  <div
                    className={'container'}
                    style={{
                      margin: '20px auto 30px auto',
                    }}
                  >
                    <>
                      {testRes ? (
                        <div>
                          <h3>Análise da Posição Facial</h3>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Parâmetro da Análise</th>
                                <th>Resultado da Análise</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Roll</td>
                                <td>
                                  {testRes[3]['MoreDetails']?.[0]
                                    ? testRes[3]['MoreDetails']?.[0]['Pose']
                                        .Roll
                                    : 'Rosto não detectado'}
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Pitch</td>
                                <td>
                                  {testRes[3]['MoreDetails']?.[0]
                                    ? testRes[3]['MoreDetails']?.[0]['Pose']
                                        .Pitch
                                    : 'Rosto não detectado'}
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Yaw</td>
                                <td>
                                  {testRes[3]['MoreDetails']?.[0]
                                    ? testRes[3]['MoreDetails']?.[0]['Pose'].Yaw
                                    : 'Rosto não detectado'}
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Interpretation</td>
                                <td>
                                  {testRes[3]['MoreDetails']?.[0] ? (
                                    <b>
                                      {getHeadPoseInterpretation(
                                        testRes[3]['MoreDetails']?.[0]['Pose']
                                          .Roll,
                                        testRes[3]['MoreDetails']?.[0]['Pose']
                                          .Pitch,
                                        testRes[3]['MoreDetails']?.[0]['Pose']
                                          .Yaw,
                                      )}
                                    </b>
                                  ) : (
                                    'Rosto não detectado'
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      ) : null}
                    </>
                    )}
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="demoTestResults">
                    {testRes ? (
                      <>
                        <h3>Resultado da Análise de Imagem</h3>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Descrição da Análise</th>
                              <th>Resultado da Análise</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Número de rostos detectados</td>
                              <td>{testRes ? testRes[3]['Details'] : '-'}</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>A pessoa foi reconhecida</td>
                              <td>
                                {testRes ? (
                                  <>
                                    {testRes[2]['Success']
                                      ? `Sim. Identidade: ${testRes[2]['Details']}`
                                      : 'Não'}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Análise de mais de um rosto</td>
                              <td>
                                {testRes ? (
                                  <>
                                    {testRes[3]['Details'] > 1 ? (
                                      <b>Mais de uma pessoa detectada!</b>
                                    ) : (
                                      'Não'
                                    )}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Nenhum rosto detectado</td>
                              <td>
                                {testRes ? (
                                  <>
                                    {testRes[3]['Details'] === 0 ? (
                                      <b>Não foi possível detectar qualquer rosto!</b>
                                    ) : (
                                      'Nao'
                                    )}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Aviso de uso de objeto proibido</td>
                              <td>
                                {testRes ? (
                                  <>
                                    {testRes[0]['Success'] === false
                                      ? `Sim. ${testRes[0]['Details']}`
                                      : 'Não'}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={'3'}>
                                <i>
                                  Atributos previstos do rosto detectado -
                                </i>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Faixa etária prevista</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {
                                      testRes[3]['MoreDetails']?.[0]['AgeRange']
                                        .Low
                                    }{' '}
                                    -{' '}
                                    {
                                      testRes[3]['MoreDetails']?.[0]['AgeRange']
                                        .High
                                    }
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Gênero previsto</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {
                                      testRes[3]['MoreDetails']?.[0]['Gender']
                                        .Value
                                    }
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Óculos</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {testRes[3]['MoreDetails']?.[0][
                                      'Eyeglasses'
                                    ].Value ||
                                    testRes[3]['MoreDetails']?.[0]['Sunglasses']
                                      .Value
                                      ? 'Sim'
                                      : 'Não'}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>Expressão Facial - Sorriso</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {testRes[3]['MoreDetails']?.[0]['Smile']
                                      .Value
                                      ? 'Sim'
                                      : 'Não'}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>Expressão Facial - Olhos Abertos?</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {testRes[3]['MoreDetails']?.[0]['EyesOpen']
                                      .Value
                                      ? 'Sim'
                                      : 'Não'}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>

                            <tr>
                              <td>12</td>
                              <td>Expressão Facial - Boca Aberta?</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {testRes[3]['MoreDetails']?.[0]['MouthOpen']
                                      .Value
                                      ? 'Sim'
                                      : 'Não'}
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>

                            <tr>
                              <td>13</td>
                              <td>Expressão Emoiconal predominante</td>
                              <td>
                                {testRes[3]['MoreDetails']?.[0] ? (
                                  <>
                                    {
                                      testRes[3]['MoreDetails']?.[0][
                                        'Emotions'
                                      ][0]['Type']
                                    }{' '}
                                    -{' '}
                                    {Math.floor(
                                      testRes[3]['MoreDetails']?.[0][
                                        'Emotions'
                                      ][0]['Confidence'],
                                    )}
                                    %
                                  </>
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </>
                    ) : (
                      <>
                        <>
                          <Alert
                            variant={'warning'}
                            width={'500px'}
                            className={'instructionsBox'}
                          >
                            <Alert.Heading className={'instrHeading'}>
                              Autorize as permissões requeridas para continuar.
                            </Alert.Heading>
                            <ul className={'instructionsBoxList'}>
                              <li>
                                Quando perguntado, clique em <i>Permitir</i> para
                                o aplicativo utilizar sua webcam.
                              </li>
                              <li>
                                Se você não vir a caixa de diálogo, tente{' '}
                                <a href={window.location}>
                                  abrir a aplicação
                                </a>{' '}
                                em uma nova página ou reveja as autorizações de uso da webcam.
                              </li>
                              <li>
                                Nós recomendamos utilizar a última versão do{' '}
                                <b>Google Chrome</b> para uma melhor experiência.
                              </li>
                            </ul>
                          </Alert>
                        </>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <ESButton variant="secondary" onClick={onModalHide} label={'Back'} />
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
