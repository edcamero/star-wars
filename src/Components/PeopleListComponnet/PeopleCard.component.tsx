import { Card, CardActionArea, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface IPeopleCardProps {
  id: string
  title: string
  urlImage: string
}

const PeopleCard: React.FC<IPeopleCardProps> = (props) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const handlingClick = () => {
    navigate(`/people/${props.id}`)
  }
  return (
    <Card
      sx={{ maxWidth: 300, marginX: 1.5, marginTop: 3, background: theme.palette.background.paper }}
      onClick={handlingClick}
    >
      <CardActionArea>
        <CardMedia component="img" height="380" image={props.urlImage} alt="green iguana" />
        <CardContent>
          <Typography variant="h6">{props.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default PeopleCard
