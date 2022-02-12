import { gql, useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import BackdropCustom from '../BackdropCustom.component'
import PeopleCard from './PeopleCard.component'

export interface IPeople {
    allPeople: IPeopleData;
}

export interface IPeopleData {
    people: IPerson[];
}

export interface IPerson {
    id:string
    name: string;
    species: ISpecies | null;
}

export interface ISpecies {
    name: string;
}

const GET_ALL_PEOPLE = gql`
query GetAllPeople {
    allPeople{
      people{
        id,
        name,
        species{
          name
        }
      }
    }
  }`

const PeopleList: React.FC = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery<IPeople, IPeopleData>(GET_ALL_PEOPLE);
    return <>
        <BackdropCustom open={loading} />
        <div className={classes.root}>
            <Grid
                container
                justifyContent="space-around"
                direction="row"
                alignItems="center"
                className={classes.grid}
            >
                {data?.allPeople.people.map((people, index) => {
                    return (<PeopleCard key={index} title={people.name} urlImage={`${process.env.REACT_APP_IMAGES_URL}${index + 1}.jpg`} />)
                })}
            </Grid>
        </div>
    </>
}

export default PeopleList

const useStyles = makeStyles({
    root: {
        paddingTop: 20,
        width: '100%',
    },
    section: {
        width: '100%',
    },
    title: {
        color: '#008000',
    },
    grid: {
        padding: 1,
    },
})
