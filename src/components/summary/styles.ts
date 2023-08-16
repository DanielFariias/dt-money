import { css, styled } from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface ICardProps {
  variant?: 'green'
}

export const Card = styled.div<ICardProps>`
  margin-top: -5rem;

  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant }) =>
    variant === 'green' &&
    css`
      background-color: ${({ theme }) => theme['green-700']};
      color: ${({ theme }) => theme.white};
    `}
`
