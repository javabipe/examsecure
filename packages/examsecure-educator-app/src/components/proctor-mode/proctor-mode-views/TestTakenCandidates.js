import React from 'react';
import { Title } from '@examsecure/design-system';

const TestTakenCandidates = () => {
  return (
    <div>
      <Title value={'Testes realizados'} />
      <div className="proc-dash-flagged-images-text">
        Esta página mostra a relação de alunos que já realizaram o teste ou que
        foram desqualificados. Clique no aluno para ver os relatório com detalhes.
      </div>
    </div>
  );
};

export default TestTakenCandidates;
