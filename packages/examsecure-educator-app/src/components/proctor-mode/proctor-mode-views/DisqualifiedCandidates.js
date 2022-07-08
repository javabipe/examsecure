import React from 'react';
import { Title } from '@examsecure/design-system';

const DisqualifiedCandidates = () => {
  return (
    <div>
      <Title value={'Alunos desqualificados'} />
      <div className="proc-dash-flagged-images-text">
        Esta página mostra a relação dos alunos que foram desqualificados
        do teste. Você pode reiniciar o teste e dar uma nova oportunidade.
      </div>
    </div>
  );
};

export default DisqualifiedCandidates;
