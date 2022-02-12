import { DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Theme } from '@mui/material/styles/createTheme'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'

interface IPeopleDetailHeaderProps {
  name: string
  handleClose: () => void
}
const PeopleDetailHeader: React.FC<IPeopleDetailHeaderProps> = (props) => {
  const classes = useStyles()
  return (
    <DialogTitle>
      <Grid container={true} direction="row" justifyContent="space-between">
        <Grid item={true} xs={11} container={true} direction="column">
          <Typography variant="h5" data-testid="test-name-professional">
            {props.name}
          </Typography>
        </Grid>
        <Grid
          item={true}
          xs={1}
          container={true}
          direction="row"
          justifyContent={'flex-end'}
          alignItems="flex-start"
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.iconButtonClosed}
            onClick={props.handleClose}
            data-testid="test-close-schedule"
          >
            <CloseIcon className={classes.iconClosed} />
          </IconButton>
        </Grid>
      </Grid>
    </DialogTitle>
  )
}

export default PeopleDetailHeader

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    fontSize: theme.spacing(1.5),
    marginBottom: theme.spacing(-0.2),
  },
  iconButtonClosed: {
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(-0.2),
    marginRight: theme.spacing(-3),
    marginTop: theme.spacing(-2.5),
  },
  iconClosed: {
    fontSize: theme.spacing(2),
  },
}))
