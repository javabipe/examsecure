import React from 'react';
import { Title } from '@examsecure/design-system';
import ComingSoon from './ComingSoon';

const TestReports = () => {
  return (
    <div>
      <div>
        <Title value={'Análise de Testes'} />
        <div className="proc-dash-flagged-images-text">
          Esta é uma visão geral do teste com base no desempenho por candidato, tempo para realização do teste, etc.
        </div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default TestReports;
