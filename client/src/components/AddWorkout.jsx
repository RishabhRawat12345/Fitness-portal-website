import React from 'react'
import styled from "styled-components"
import TextInput from './TextInput';
import { Button } from 'style-components';
const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const AddWorkout = ({workout,setWorkout,addNewWorkout,buttonLoading}) => {
  return (
    <Card>
      <Title> Add neww Workout</Title>
      <TextInput label="workout"
      textArea rows={10} placeholder={`Enter in this format:

      #Category
      -Workout Name
      -Sets
      -Reps
      -Weight
      -Duration`}

      value={workout}
      handleChange={(e)=>setWorkout(e.target.vaue)}/>
      <Button text="Add workout"
      small
      onClick={()=>addNewWorkout()}
      isLoading={buttonLoading}
      isDisable={buttonLoading}/>
    </Card>
  )
}

export default AddWorkout
