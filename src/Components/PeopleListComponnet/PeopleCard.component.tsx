import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

interface IPeopleCardProps {
    title: string,
    urlImage:string
}

const PeopleCard: React.FC<IPeopleCardProps> = (props) => {
    return <Card sx={{ maxWidth: 300, marginX: 1.5 ,marginTop:3,background:'#66FCF1'}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="380"
                image={props.urlImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h6" >
                    {props.title}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                See
            </Button>
        </CardActions>
    </Card>
}
export default PeopleCard