import {
  Box,
  Grid,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Chip,
} from '@mui/material'
import PropTypes from 'prop-types'
import { Search, Delete, Settings } from '@mui/icons-material'
import Sidebar from './Sidebar'

function InboxDataGrid() {
  return (
    <Grid container>
      <Sidebar />
      <Box
        sx={{
          width: 980,
          height: 660,
          p: 3,
          ml: 'auto',
          boxShadow: 2,
          bgcolor: 'background.paper',
        }}
      >
        <Box display='flex' alignItems='center' mb={2}>
          <TextField
            fullWidth
            placeholder='Search mail'
            variant='outlined'
            size='small'
            sx={{ maxWidth: 400 }}
          />
          <Box display='flex' ml='auto'>
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
          </Box>
        </Box>

        <Table>
          <TableBody>
            {[
              {
                name: 'Jullu Jalal',
                category: 'Primary',
                subject: 'Commerce program',
                time: '8:38 AM',
              },
              {
                name: 'Minerva Barnett',
                category: 'Work',
                subject: 'Best Advertiser In Your Pocket',
                time: '8:13 AM',
              },
            ].map((email, index) => (
              <TableRow key={index}>
                <TableCell padding='checkbox'>
                  <input type='checkbox' />
                </TableCell>
                <TableCell>
                  <Typography fontWeight='bold' fontSize={14}>
                    {email.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={email.category} color='primary' size='small' />
                </TableCell>
                <TableCell>
                  <Typography fontSize={14}>{email.subject}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={12} color='text.secondary'>
                    {email.time}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Grid>
  )
}
InboxDataGrid.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
export default InboxDataGrid
