import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>react avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, Next.js e Styled Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente com uma tela com código."
    />
  </S.Wrapper>
)
export default Main
