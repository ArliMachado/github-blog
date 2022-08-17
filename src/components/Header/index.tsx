import * as S from './styles'
import logoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <S.Container>
      <img src={logoSvg} alt="" />
    </S.Container>
  )
}
