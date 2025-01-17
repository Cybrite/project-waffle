import styled from 'styled-components';
import tw from 'twin.macro';

export const H1 = styled.h1`
  ${tw`text-2xl font-poppins py-[0.45rem] md:py-2 font-semibold leading-tight tracking-tighter ssm:text-4xl smd:text-5xl md:text-6xl`}
  background: linear-gradient(91deg, #E84B7D 0.34%, #B02753 99.81%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const H2 = styled.h2`
  ${tw`text-2xl font-satoshi font-semibold leading-snug tracking-normal sm:text-3xl md:text-4xl`}
`;

export const H3 = styled.h3`
  ${tw`text-xl font-poppins font-medium leading-snug tracking-normal sm:text-2xl md:text-3xl`}
`;

export const Paragraph = styled.p`
  ${tw`text-white font-inter text-base font-normal leading-relaxed text-justify sm:text-lg md:text-xl`}
`;

export const Heading3 = styled.h3`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw` 
   text-2xl
   leading-9

   md:text-3xl
   md:leading-10

   text-[#cd3a69]
   font-prompt
`}
  ${(props) => props.italic && 'font-style: italic;'}
`;
