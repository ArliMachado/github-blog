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

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.blue};
    gap: 0.5rem;
    font-size: 0.75rem;
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['base-subtitle']};

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme['base-label']};
  }
`
