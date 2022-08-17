import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 13.25rem;

  padding: 2rem;
  border-radius: 10px;
  margin-top: -6.6rem;

  display: flex;
  gap: 2rem;

  background: ${({ theme }) => theme['base-profile']};
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }
`
