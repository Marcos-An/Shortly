import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3a3354;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  left: 9%;
  border-radius: 10px;
  width: 80vw;
  position: absolute;
  margin: auto;
  bottom: -20vh;
`
export const Input = styled.input`
  width: 70%;
  padding: 15px 20px;
  border-radius: 10px;
  margin-right: 25px;
  outline: none;
  border: 0px;
  font-family: 'Poppins', sans-serif;
`
