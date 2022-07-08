import React from 'react';
import { Title } from '@examsecure/design-system';

const InvitedCandidates = () => {
  return (
    <div>
      <Title value={'Alunos convidados'} />
      <div className="proc-dash-flagged-images-text">
        Esta página mostra a lista de alunos convidados para o teste.
        Clique em Adicionar para convidar mais alunos.
      </div>
    </div>
  );
};

export default InvitedCandidates;
