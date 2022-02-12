import { gql, useQuery } from '@apollo/client'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import BackdropCustom from '../Utils/BackdropCustom.component'
import PeopleCard from './PeopleCard.component'
import { useNavigate, useParams } from 'react-router-dom'
import PeopleDetail from '../PeopleDetailComponet/PeopleDetail.component'
import { IPeople, IPeopleData } from '../../Models/IPeople'
import Messages from '../Utils/Message.component'

const GET_ALL_PEOPLE = gql`
  query GetAllPeople {
    allPeople {
      people {
        id
        name
        species {
          name
        }
      }
    }
  }
`
interface IPeopleParams {
  id: string | undefined
}
const PeopleList: React.FC = () => {
  const classes = useStyles()
  const params = useParams<keyof IPeopleParams>()
  const navigate = useNavigate()
  const { loading, data } = useQuery<IPeople, IPeopleData>(GET_ALL_PEOPLE)
  const [openPeopleDetail, setOpenPeopleDetail] = useState(false)
  const [urlImagePeople, setUrlImage] = useState('')
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const handleClose = () => {
    setOpenPeopleDetail(false)
    navigate(`/people/`)
  }

  const searchImage = (idPerson: string) => {
    const index = data?.allPeople.people.findIndex((element) => element.id == idPerson)
    console.log(index)
    if (index !== undefined) {
      if (index >= 0) {
        setUrlImage(`${process.env.REACT_APP_IMAGES_URL}${index + 1}.jpg`)
        setOpenMessage(false)
      } else {
        setOpenMessage(true)
      }
    }
  }

  React.useEffect(() => {
    if (params.id !== undefined && !loading) {
      setOpenPeopleDetail(true)
      searchImage(params.id)
    }
  }, [params.id, loading])
  return (
    <>
      <BackdropCustom open={loading} />
      <Messages
        title="Error"
        open={openMessage}
        setOpen={setOpenMessage}
        message={`invalid route`}
        severity={'error'}
      />
      <Typography variant="h4" component="h4">
        STAR WARS
      </Typography>
      <div className={classes.root}>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="center"
          className={classes.grid}
        >
          {data?.allPeople.people.map((people, index) => {
            return (
              <PeopleCard
                key={index}
                id={people.id}
                title={people.name}
                urlImage={`${process.env.REACT_APP_IMAGES_URL}${index + 1}.jpg`}
              />
            )
          })}
        </Grid>
      </div>
      <PeopleDetail
        open={openPeopleDetail}
        handleClose={handleClose}
        idPeople={params.id || ''}
        urlImage={urlImagePeople}
      />
    </>
  )
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
