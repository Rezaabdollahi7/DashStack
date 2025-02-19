import { useStarred } from './ContextApiInbox'
import { TableBody, TableRow, TableCell, Typography } from '@mui/material'

function Bin() {
  const { deletedEmails } = useStarred()

  return (
    <TableBody>
      {deletedEmails.length === 0 ? (
        <Typography>No deleted emails yet.</Typography>
      ) : (
        deletedEmails.map((email, index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography fontWeight='bold' fontSize={14}>
                {email.name}
              </Typography>
            </TableCell>

            <TableCell
              sx={{
                width: '710px',
              }}
            >
              <Typography fontSize={14}>{email.subject}</Typography>
            </TableCell>

            <TableCell>
              <Typography fontSize={12} color='text.secondary'>
                {email.time}
              </Typography>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  )
}

export default Bin
