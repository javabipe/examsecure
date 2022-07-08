import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateTime from '../../helpers/DateTimeWrapper';
import InviteCandidateEmails from './InviteCandidateEmails';
import moment from 'moment';
import { DATE_TIME_FORMAT } from '../../../utils/constants';

// todo: if test is set to be invite only, then show option for adding candidate emails

const OverviewPane = ({
  testDetailsInput,
  handleTestDetailsInputChange,
  handleTestDateTimeChange,
  isProcMode,
}) => {
  return (
    <Container fluid className={'dash-op-container'}>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Test Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exemplo de teste"
                value={testDetailsInput.test_name}
                name={'test_name'}
                onChange={handleTestDetailsInputChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Duração do teste</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="60"
                  min="0"
                  value={testDetailsInput.test_duration}
                  name={'test_duration'}
                  onChange={handleTestDetailsInputChange}
                />
                <InputGroup.Text>mins</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Início em</Form.Label>
              <DateTime
                inputProps={{
                  placeholder: 'Data e hora de início',
                  name: 'test_starts_at',
                }}
                name={'test_starts_at'}
                onDateTimeChange={handleTestDateTimeChange}
                value={
                  isProcMode
                    ? moment(testDetailsInput.test_starts_at, DATE_TIME_FORMAT)
                    : null
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Termina em</Form.Label>
              <DateTime
                inputProps={{
                  placeholder: 'Data e hora de término',
                  name: 'test_ends_at',
                }}
                name={'test_ends_at'}
                onDateTimeChange={handleTestDateTimeChange}
                value={
                  isProcMode
                    ? moment(testDetailsInput.test_ends_at, DATE_TIME_FORMAT)
                    : null
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Descrição do teste</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: '40px' }}
                value={testDetailsInput.test_description}
                name={'test_description'}
                onChange={handleTestDetailsInputChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Tipo do teste</Form.Label>
              <Form.Control
                as={'select'}
                value={testDetailsInput.test_type}
                name={'test_type'}
                onChange={handleTestDetailsInputChange}
              >
                <option value={'open'}>Aberto a todos</option>
                <option value={'invite'}>Apenas convidados</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Enviar relatório aos alunos?</Form.Label>
              <Form.Control
                as={'select'}
                required
                value={testDetailsInput.test_email_report}
                name={'test_email_report'}
                onChange={handleTestDetailsInputChange}
              >
                <option value={'no'}>Não</option>
                <option value={'yes'}>Sim</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <InviteCandidateEmails />
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default OverviewPane;
