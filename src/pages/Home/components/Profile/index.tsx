import * as S from './styles'

import profileImg from '../../../../assets/profile.svg'

export function Profile() {
  return (
    <S.Container>
      <img src={profileImg} alt="" />
      <S.ProfileInfo>
        <S.TitleContent>
          <h1>Cameron Williamson</h1>
          <span>GITHUB</span>
        </S.TitleContent>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
      </S.ProfileInfo>
    </S.Container>
  )
}
