import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button as ESButton } from '@examsecure/design-system';
import './ModalStyles.scss';

const DetailsModal = ({ show, onModalHide }) => {
  return (
    <Modal show={show} onHide={onModalHide} className="proc-modal">
      <Modal.Header closeButton>
        <Modal.Title>Desqualificar o aluno?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Quando desqualificado, o teste do aluno será automaticamente encerrado
        e ele será desconectado da plataforma!
      </Modal.Body>

      <Modal.Footer>
        <ESButton
          variant="primary"
          onClick={onModalHide}
          label={'Desqualificar'}
        />
        <ESButton variant="secondary" onClick={onModalHide} label={'Voltar'} />
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
