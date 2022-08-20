import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

type InfoItemProps = {
  icon: IconDefinition
  description: string
}

export function InfoItem({ icon, description }: InfoItemProps) {
  return (
    <S.Container>
      <FontAwesomeIcon icon={icon} />
      {description}
    </S.Container>
  )
}
