import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./Headings.js";
import { SectionDescription } from "./Typography.js";
import { Container, ContentWithPaddingXl } from "./Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../static/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../static/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion.custom(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  faqs = [
    {
      question: "O que é o Ensino Seguro?",
      answer:
        "Ensino Seguro é uma plataforma de supervisão educacional que utiliza de Inteligência Artificial para monitorar os alunos durante cursos/provas EAD. Utiliza da webcam do aluno para detectar qualquer tipo de cola/fraude/mal uso.",
    },
    {
      question: "Quais são as vantagens do Ensino Seguro?",
      answer: (
        <>
           Durante a pandemia de Covid, os cursos EAD tornaram-se uma
           necessidade. No entanto, há sempre uma questão sobre a integridade do
           curso/exame realizado online, uma vez que é relativamente fácil para os candidatos
           colar/burlar. É aqui que entra em cena o Ensino seguro.
           A supervisão online automatizada torna possível garantir a integridade
           dos cursos/exames sem necessidade de intervenção humana constante. Isto
           garante autenticidade, evitando que o aluno trapaceie ou cole.
        </>
      ),
    },
    {
      question: "Como funciona o Ensino Seguro?",
      answer:
        "O Ensino Seguro utiliza de Inteligência Artificial para analisar imagens em tempo real e detectar qualquer violação a regras de ensino EAD, evitando que alunos possam utilizar de meios fraudulentos para realizar cursos ou avaliações. Através de estimativa de posição facial, o sistema determina se o aluno está desatento e emite um alerta. Na realização das atividades, o sistema bloqueia completamente o navegador, avisando se o aluno tentar alternar entre as guias ou sair do modo de tela cheia.",
    },
    {
      question: "O que é a estimativa de posição facial?",
      answer:
        "A estimativa da posição facial diz respeito à previsão da pose de uma cabeça humana em uma imagem em termos da teoria angular de Euler. Os valores são usados para descrever a rotação de um objeto no espaço 3D. Nosso sistema é capaz de determinar em qual direção a cabeça humana está voltada usando esses valores.",
    },
    {
      question: "O Ensino Seguro é adaptável à minha necessidade?",
      answer:
        "Sim, nosso sistema foi desenvolvido para atender todo tipo de instituição de ensino, podendo ser modificado para atender qualquer demanda.",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            <Heading>FAQs</Heading>
            <Description>Perguntas Frequentes</Description>
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 style={{ zIndex: "1" }} />
      <DecoratorBlob2 style={{ zIndex: "1" }} />
    </Container>
  );
};
