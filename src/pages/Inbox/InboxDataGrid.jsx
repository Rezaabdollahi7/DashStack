import { Grid } from '@mui/material'
import Sidebar from './Sidebar'
import InboxData from './InboxData'

function InboxDataGrid() {
  return (
    <Grid container>
      <Sidebar />
      <InboxData />
    </Grid>
  )
}

export default InboxDataGrid
