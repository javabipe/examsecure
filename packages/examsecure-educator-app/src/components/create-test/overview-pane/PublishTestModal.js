import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Button as ESButton } from '@examsecure/design-system';

const PublishTestModal = ({
  show,
  onModalHide,
  testDetailsInput,
  publishTest,
  numOfQuestions,
}) => {
  const onSubmit = () => {
    publishTest();
  };

  return (
    <Modal show={show} onHide={onModalHide} size={'lg'}>
      <Modal.Header closeButton>
        <Modal.Title>Publicar o teste?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Por favor confira o teste antes de publicar.
        <Form>
          <Form.Group>
            <Form.Label>Nome do teste</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={testDetailsInput.test_name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrição do teste</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={testDetailsInput.test_description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duração do teste</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={testDetailsInput.test_duration + ' minutes'}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>O teste começa em</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={testDetailsInput.test_starts_at}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>O teste termina em</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={testDetailsInput.test_ends_at}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tipo de teste</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={testDetailsInput.test_type}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Questões adicionadas</Form.Label>
            <Form.Control
              type="text"
              readOnly
              value={`${numOfQuestions} Questões`}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <ESButton
          variant="secondary"
          onClick={onModalHide}
          label={'Voltar para edição'}
        />
        <ESButton variant="primary" onClick={onSubmit} label={'Publicar o teste'} />
      </Modal.Footer>
    </Modal>
  );
};

export default PublishTestModal;
