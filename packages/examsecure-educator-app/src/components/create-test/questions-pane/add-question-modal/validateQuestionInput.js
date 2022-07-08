export default function validateQuestionInput(questionsInput) {
  let isTestDetailsOK = true;
  let errorMessage = '';

  Object.entries(questionsInput).map(([k, v]) => {
    if (k === 'choices' && questionsInput.question_type !== 'subjective') {
      if (v.length <= 1) {
        errorMessage += ' Digite mais de uma opção para a resposta. \n';
        isTestDetailsOK = false;
      }
      v?.forEach((choice) => {
        if (choice.choice_text === '') {
          errorMessage += ' Verifique se as opções não estão vazias!. \n';
          isTestDetailsOK = false;
        }
      });
    } else if (
      k === 'correct_choice_id' &&
      questionsInput.question_type === 'mcq_single' &&
      v === ''
    ) {
      errorMessage += ' Certifique-se de selecionar a resposta correta. \n';
      isTestDetailsOK = false;
    } else if (
      k === 'correct_choices' &&
      questionsInput.question_type === 'mcq_multiple'
    ) {
      const choicesArray = [...v];
      if (choicesArray.length < 1) {
        errorMessage += ' Certifique-se de selecionar as opções corretas. \n';
        isTestDetailsOK = false;
      }
    } else if (v === '' && k !== 'correct_choice_id') {
      errorMessage += ` Por favor preencha o campo ${k} ! \n`;
      isTestDetailsOK = false;
    }
  });

  if (errorMessage) {
    alert(errorMessage);
  }

  return isTestDetailsOK;
}
