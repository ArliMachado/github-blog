import { PostHeader } from './components/PostHeader'
import * as S from './styles'

export function Post() {
  return (
    <S.Container>
      <PostHeader />
      <h1>Post</h1>
    </S.Container>
  )
}
