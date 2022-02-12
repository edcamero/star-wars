import { Alert, AlertTitle, Collapse, AlertColor, IconButton } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/system/createTheme'

const messageStyles = makeStyles((theme:Theme) => ({
  notification: {
    marginBottom: theme.spacing(2),
  },
}))
interface IMessagesProps {
  open: boolean
  setOpen(open: boolean): void
  message: string
  severity: AlertColor|undefined
  title: string
}

const Messages: React.FC<IMessagesProps> = (props) => {
  const classes = messageStyles()
  return (
    <React.Fragment>
      <Collapse in={props.open}>
        <Alert
          className={classes.notification}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setOpen(false)
              }}
              data-testid="button-close-message"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={props.severity}
          data-testid="message"
        >
          <AlertTitle>{props.title}</AlertTitle>
          {props.message}
        </Alert>
      </Collapse>
    </React.Fragment>
  )
}
export default Messages
