import * as S from './styles'

import profileImg from '../../../../assets/profile.svg'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoItem } from '../../../../components/InfoItem'

export function Profile() {
  return (
    <S.Container>
      <img src={profileImg} alt="" />
      <S.ProfileInfo>
        <S.TitleContent>
          <h1>Cameron Williamson</h1>
          <a href="#">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </S.TitleContent>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <S.Info>
          <InfoItem icon={faGithub} description="cameronwll" />
          <InfoItem icon={faBuilding} description="Rocketseat" />
          <InfoItem icon={faUserGroup} description="32 seguidores" />
        </S.Info>
      </S.ProfileInfo>
    </S.Container>
  )
}
