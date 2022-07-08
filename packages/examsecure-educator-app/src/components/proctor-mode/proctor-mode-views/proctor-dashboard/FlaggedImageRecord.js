import React from 'react';
import { Button } from '@examsecure/design-system';

// todo: show more details modal when user clicks on the image as well

const FlaggedImageRecord = ({
  archived,
  toggleDetailsModal,
  toggleDisqualifyModal,
  record,
  setDetailsFlagRecord,
}) => {
  const handleModalClick = () => {
    toggleDetailsModal();
    setDetailsFlagRecord(record.id);
  };
  return (
    <div className="proc-dash-flagged-image-record">
      <div className="proc-dash-flagged-image-src">
        <img src={record?.imageURL} alt={'flagged image'} />
      </div>
      <div className="proc-dash-flagged-image-details">
        <div>
          <strong>Nome do aluno: </strong>
          <span>{record?.candidate_name}</span>
        </div>
        <div>
          <strong>Motivo da sinalização: </strong>
          <span>{record?.reason}</span>
        </div>

        <div className="proc-dash-flagged-image-details-btn">
          <Button
            label={'Mais detalhes'}
            variant={'secondary'}
            onClick={handleModalClick}
          />
        </div>
      </div>

      <div className="proc-dash-flagged-image-actions">
        {!archived && (
          <>
            <Button
              label={'Desqualificar'}
              variant={'secondary'}
              onClick={toggleDisqualifyModal}
            />
            <Button label={'Arquivar'} variant={'secondary'} />
          </>
        )}
      </div>
    </div>
  );
};

export default FlaggedImageRecord;
