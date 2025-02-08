import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import PropTypes from 'prop-types'
export default function CustomSnackbar({
  open,
  onClose,
  message,
  severity = 'success',
  autoHideDuration = 3000,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant='standard'
        sx={{ width: '100%', fontSize: '1.2rem' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

CustomSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string,
  autoHideDuration: PropTypes.number,
  open: PropTypes.oneOf([true, false]),
  onClose: PropTypes.func,
}
