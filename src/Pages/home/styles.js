import styled from 'styled-components'

export const Container = styled.div``

export const FirstSection = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 45%;
    position: absolute;
    right: -40px;
  }
  .TitleContainer {
    padding-left: 10rem;
  }
`
export const SecondSection = styled.div`
  height: 50vh;
  background-color: #f0f1f6;
`
export const Title = styled.h1`
  color: #35323a;
  font-size: 3rem;
  margin-bottom: 0px;
`
export const SubTitle = styled.p`
  color: #b7b6bb;
  font-size: 1.3rem;
  margin-top: 0px;
`
