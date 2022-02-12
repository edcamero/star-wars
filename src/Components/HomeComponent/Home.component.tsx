import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate(`/people/`)
      }}
    >
      Iniciar
    </Button>
  )
}

export default Home
