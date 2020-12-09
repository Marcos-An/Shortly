import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
`
export const Item = styled.li`
  list-style-type: none;
  margin-right: 30px;
  font-weight: 600;
  color: #97969e;
  cursor: pointer;

  :hover {
    color: #34313d;
    border-bottom: solid 2px #34313d;
  }
`
