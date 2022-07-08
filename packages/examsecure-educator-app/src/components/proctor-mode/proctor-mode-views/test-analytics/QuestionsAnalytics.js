import React from 'react';
import { Title } from '@examsecure/design-system';
import ComingSoon from './ComingSoon';

const QuestionsAnalytics = () => {
  return (
    <div>
      <div>
        <Title value={'Análise de Questões'} />
        <div className="proc-dash-flagged-images-text">
          Essa é uma análise inteligente de questões, trazendo quantos alunos
          responderam cada questão, e quantos acertaram as respostas.
        </div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default QuestionsAnalytics;
