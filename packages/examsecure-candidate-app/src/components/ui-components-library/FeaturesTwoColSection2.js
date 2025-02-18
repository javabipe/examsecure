import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from './Headings';
import { PrimaryButton as PrimaryButtonBase } from './Buttons';
import TeamIllustrationSrc from '../../static/shieldIcon.png';
import { ReactComponent as SvgDotPattern } from '../../static/dot-pattern.svg';
import { useHistory } from 'react-router-dom';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading,
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

export default ({
  subheading = 'Our Expertise',
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </>
  ),
  primaryButtonText = 'Saiba mais',
  primaryButtonUrl = 'https://www.google.com.br',
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const history = useHistory();
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            className={'homeFeatureImg2'}
            css={imageCss}
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading className={'homeSectionTitle'}>{heading}</Heading>
            <Description style={{ color: '#000000bf' }}>
              EnsinoSeguro é capaz de detectar{' '}
              <b>a direnção que o usuário está olhando</b> utilizando de Estimativa
              de Posição da Cabeça. Se o usuário estiver desatento por um período
              de tempo, EnsinoSeguro emite um alerta chamando a atenção do aluno.
            </Description>
            <PrimaryButton
              as="a"
              css={buttonRoundedCss}
              className={'heroSectionButton'}
              href={'#'}
              onClick={() => history.push('/demo')}
              style={{ fontSize: '19px', padding: '0.7rem' }}
            >
              Faça um teste
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
