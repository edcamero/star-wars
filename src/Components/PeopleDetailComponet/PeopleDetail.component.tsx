import {
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles/createTheme'
import PeopleDetailHeader from './PeopleDetailHeader.component'
import { Data } from '../../Models/IPerson'
import { gql, useQuery } from '@apollo/client'
import BackdropCustom from '../Utils/BackdropCustom.component'

interface IPeopleDetailProps {
  open: boolean
  handleClose(): void
  idPeople: string
  urlImage: string
}

const PeopleDetail: React.FC<IPeopleDetailProps> = (props) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const QUERY_GET_PERSON = gql`
query GetPerson {
  person(id:"${props.idPeople}"){
    name,
    birthYear,
    eyeColor,
    gender,
    hairColor,
    height,
    mass,
    skinColor,
    homeworld{
      name      
    },
    filmConnection{
      films{title,episodeID, director,planetConnection{planets{name}}}
    },
    
  }
  }`
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { loading, data } = useQuery<Data>(QUERY_GET_PERSON)

  return (
    <>
      <BackdropCustom open={loading} />
      {data !== undefined && (
        <Dialog open={props.open} fullScreen={fullScreen} onClose={props.handleClose}>
          <PeopleDetailHeader handleClose={props.handleClose} name={data?.person.name || ''} />
          <Divider />
          <Grid className={classes.dialogContent}>
            <Grid
              item={true}
              xs={12}
              container={true}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid xs={12} md={4} item={true}>
                <CardMedia component="img" height="280" image={props.urlImage} alt="green iguana" />
              </Grid>
              <Grid xs={12} md={7} item={true} container alignItems="flex-start">
                <Grid xs={6}>
                  <ListItemText primary={data?.person.birthYear} secondary="Birth Year" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.eyeColor} secondary="Eye Color" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.gender} secondary="Gender" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.hairColor} secondary="Hair Color" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.height} secondary="Height" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.mass} secondary="Mass" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.skinColor} secondary="Skin Color" />
                </Grid>
                <Grid xs={6}>
                  <ListItemText primary={data?.person.homeworld.name} secondary="Home World" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <DialogContent className={classes.dialogContent}>
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              dense={true}
              subheader={'Films:'}
            >
              {data.person.filmConnection.films.map((film, index) => {
                return (
                  <>
                    <ListItem alignItems="flex-start" key={index}>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="subtitle1"
                              color="text.primary"
                            >
                              <Chip
                                label={`${film.title} - episode ${film.episodeID} - directed by:${film.director}`}
                                size="small"
                                color="success"
                                variant="outlined"
                              />
                            </Typography>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            Planets:{' '}
                            {film.planetConnection.planets.map((planet, index) => {
                              return (
                                <Chip
                                  key={index}
                                  label={planet.name}
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                  className={classes.chip}
                                />
                              )
                            })}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </>
                )
              })}
            </List>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default PeopleDetail

const useStyles = makeStyles((theme: Theme) => ({
  dialogContent: {
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(65),
    },
    paddingBottom: theme.spacing(0.1),
    paddingTop: theme.spacing(0.1),
  },
  itemList: {
    padding: theme.spacing(0),
  },
  chip: {
    margin: theme.spacing(0.2),
  },
}))

