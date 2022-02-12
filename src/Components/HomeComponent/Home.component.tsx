import { Button, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h1" component="h2" style={{ color: theme.palette.secondary.main }}>
          STAR WARS
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/people/`)
          }}
          style={{ background: theme.palette.primary.main }}
        >
          START
        </Button>
        <Typography variant="body2" component="body">
          By Enyerson Camero
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Home
