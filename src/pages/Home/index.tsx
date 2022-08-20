import { Link } from 'react-router-dom'
import { Profile } from './components/Profile'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Profile />

      <S.SearchContent>
        <S.SearchTitle>
          <strong>Publicações</strong>
          <p>6 publicações</p>
        </S.SearchTitle>
        <input type="text" placeholder="Buscar conteúdo" />
      </S.SearchContent>

      <S.PostContent>
        <S.PostItem>
          <S.PostTitle>
            <Link to="/post">
              <h1>JavaScript data types and data structures</h1>
            </Link>
            <span>Há 1 dia</span>
          </S.PostTitle>
          <S.PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </S.PostDescription>
        </S.PostItem>

        <S.PostItem>
          <S.PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </S.PostTitle>
          <S.PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </S.PostDescription>
        </S.PostItem>

        <S.PostItem>
          <S.PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </S.PostTitle>
          <S.PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </S.PostDescription>
        </S.PostItem>

        <S.PostItem>
          <S.PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </S.PostTitle>
          <S.PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </S.PostDescription>
        </S.PostItem>

        <S.PostItem>
          <S.PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </S.PostTitle>
          <S.PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </S.PostDescription>
        </S.PostItem>

        <S.PostItem>
          <S.PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </S.PostTitle>
          <S.PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </S.PostDescription>
        </S.PostItem>
      </S.PostContent>
    </S.Container>
  )
}
