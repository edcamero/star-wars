import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
interface IBackdropCustom {
  open: boolean
}
const BackdropCustom: React.FC<IBackdropCustom> = ({ open }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default BackdropCustom
