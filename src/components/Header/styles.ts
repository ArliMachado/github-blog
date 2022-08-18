import styled from 'styled-components'
import headerBackground from '../../assets/background-header.svg'

export const Container = styled.div`
  width: 100%;
  height: 18.5rem;
  background-image: url(${headerBackground});
  background-size: contain;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 9.25rem;
    height: 6.1rem;

    margin-top: 4rem;
  }
`
