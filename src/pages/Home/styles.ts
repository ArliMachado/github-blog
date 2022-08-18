import styled, { css } from 'styled-components'

export const Container = styled.div``

export const SearchContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;

    input {
      width: 100%;
      height: 3.125rem;
      border-radius: 6px;
      padding: 0.75rem 1rem;
      gap: 8px;

      background: ${theme['base-input']};
      color: ${theme['base-text']};

      border: 1px solid ${theme['base-border']};

      &::placeholder {
        color: ${theme['base-label']};
      }
    }
  `}
`

export const SearchTitle = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${theme['base-span']};
    }
  `}
`
export const PostContent = styled.div`
  /* box-sizing: border-box; */
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostItem = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  background: ${({ theme }) => theme['base-post']};
`

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-title']};
  }

  span {
    width: 6rem;
    /* display: inline-block; */
    /* overflow: auto; */
    /* margin-left: 2rem; */
    text-align: end;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
  }
`

export const PostDescription = styled.p`
  width: 22rem;

  margin-top: 1.25rem;
  line-height: 25.6px;
  max-height: 7rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
