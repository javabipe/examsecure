import logo from '../../assets/logo.png';
import '../../styles/Loading.css';
import React from 'react';

const Loading = ({ show }) => {
  if (show) {
    return (
      <div className={'loadingWrapper'}>
        <div className="loadingLogo">
          <img src={logo} alt={'ExamSecure'} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
