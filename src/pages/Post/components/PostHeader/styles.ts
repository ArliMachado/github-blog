import styled from 'styled-components'

export const Container = styled.div`
  width: 54rem;
  height: 10.5rem;
  border-radius: 10px;
  margin-top: -5.25rem;

  background: ${({ theme }) => theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const HeaderInfo = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.blue};
    gap: 0.5rem;
    font-size: 0.75rem;
  }
`

export const Title = styled.h1`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-title']};
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
`
