import React from 'react';
import { Form } from 'react-bootstrap';

const MCQMultipleChoicesInput = ({
  choiceSelectChangeHandler,
  choiceTextChangeHandler,
  inputs,
}) => {
  return (
    <Form.Group className="qp-add-new-question-choices-container">
      <Form.Label>Opções de resposta</Form.Label>
      {inputs.choices.map(({ id, choice_text }) => (
        <Form.Check key={id}>
          <Form.Check.Input
            type={'checkbox'}
            name={'mcq_multiple_choice_option'}
            id={id}
            onChange={choiceSelectChangeHandler}
          />
          <Form.Check.Label>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder={`Option ${id} `}
                id={id}
                onChange={choiceTextChangeHandler}
                value={choice_text}
              />
            </Form.Group>
          </Form.Check.Label>
        </Form.Check>
      ))}

      <Form.Text muted>
        Por favor, escolha as respostas corretas entre as opções
      </Form.Text>
    </Form.Group>
  );
};

export default MCQMultipleChoicesInput;
