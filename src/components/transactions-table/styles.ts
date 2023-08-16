import { styled } from 'styled-components'

export const Container = styled.section``

export const Table = styled.table`
  width: 100%;
  margin: 4rem auto 0;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; */

  td {
    padding: 1.25rem 2rem;

    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface IPriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<IPriceHighLightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-500'] : theme['red-500']};
`
