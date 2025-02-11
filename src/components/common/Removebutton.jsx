import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  Button,
} from '@mui/material'
import PropTypes from 'prop-types'
function Removebutton({
  handleDeleteCancel,
  handleDeleteConfirm,
  openDeleteDialog,
}) {
  return (
    <div>
      <Dialog open={openDeleteDialog} onClose={handleDeleteCancel}>
        <DialogTitle
          sx={{ fontWeight: 'bold', textAlign: 'center', color: '#D32F2F' }}
        >
          تأیید حذف
        </DialogTitle>
        <DialogContent sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant='body1' sx={{ fontSize: '16px', color: '#333' }}>
            آیا مطمئن هستید که می‌خواهید این آیتم را حذف کنید؟
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '16px' }}>
          <Button
            onClick={handleDeleteCancel}
            color='default'
            sx={{
              backgroundColor: '#f0f0f0',
              padding: '10px 20px',
              borderRadius: '5px',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            لغو
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color='error'
            sx={{
              backgroundColor: '#f44336',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              '&:hover': { backgroundColor: '#d32f2f' },
            }}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
Removebutton.propTypes = {
  handleDeleteCancel: PropTypes.func.isRequired,
  handleDeleteConfirm: PropTypes.func.isRequired,
  openDeleteDialog: PropTypes.bool.isRequired,
}

export default Removebutton
