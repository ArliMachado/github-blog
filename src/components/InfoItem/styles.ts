import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['base-span']};

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme['base-label']};
  }
`
