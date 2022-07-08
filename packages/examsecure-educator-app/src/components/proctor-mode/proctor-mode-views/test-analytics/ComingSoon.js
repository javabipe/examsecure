import { ReactComponent as ComingSoonIllustration } from '../../../../assets/coming_soon.svg';
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="proc-dash-coming-soon">
      <div>
        <ComingSoonIllustration />
        <div>
          <b>Estamos trabalhando neste recuro. Volte em breve!</b>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
