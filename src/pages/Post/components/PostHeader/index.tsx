import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoItem } from '../../../../components/InfoItem'
import * as S from './styles'

export function PostHeader() {
  return (
    <S.Container>
      <S.HeaderInfo>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a href="#">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </S.HeaderInfo>

      <S.Title>JavaScript data types and data structures</S.Title>

      <S.Info>
        <InfoItem icon={faGithub} description="camerowll" />
        <InfoItem icon={faCalendarDay} description="Há 1 dia" />
        <InfoItem icon={faComment} description="5 comentários" />
      </S.Info>
    </S.Container>
  )
}
