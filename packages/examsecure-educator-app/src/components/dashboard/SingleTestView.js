import React from 'react';
import { Button } from '@examsecure/design-system';
import { Link } from 'react-router-dom';

const SingleTestView = ({ test, id }) => {
  return (
    <div className="dash-single-test-view">
      <div className="dash-single-test-view-left">
        <div className="dash-single-test-view-left-test-name">
          {test.test_name}
        </div>
        <div className="dash-single-test-view-left-test-details">
          <div className="dash-single-test-view-left-test-details-row">
            <div>Começa em {test.test_starts_at}</div>
            <div>Termina em {test.test_ends_at}</div>
          </div>
          <div className="dash-single-test-view-left-test-details-row">
            <div>10 Alunos terminaram</div>
            <div>10 Questões, {test.test_duration} minutos</div>
          </div>
        </div>
      </div>
      <div className="dash-single-test-view-right">
        <Link to={`/proctor-mode/test_overview?test=${id}`}>
          <Button variant={'secondary'} label={'Mais detalhes'} />
        </Link>
        <Link to={`/proctor-mode/proctor_dashboard?test=${id}`}>
          <Button variant={'secondary'} label={'Modo supervisor'} />
        </Link>
      </div>
    </div>
  );
};

export default SingleTestView;
