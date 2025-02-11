import { Button, Tooltip } from '@mui/material'
import { FaEdit, FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

function ActionButtons({ handleDelete, params }) {
  return (
    <div style={{ display: 'flex', gap: 1 }}>
      <Tooltip title='ویرایش'>
        <Button
          variant='contained'
          sx={{
            minWidth: 45,
            padding: '8px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E3F2FD',
            color: '#1565c0',
            boxShadow: 'none',
            transition: '0.2s',
            '&:hover': { backgroundColor: '#BBDEFB' },
          }}
          onClick={() => console.log('Edit:', params.row)}
        >
          <FaEdit size={16} />
        </Button>
      </Tooltip>
      <Tooltip title='حذف'>
        <Button
          variant='contained'
          sx={{
            minWidth: 45,
            padding: '8px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFEBEE',
            color: '#D32F2F',
            boxShadow: 'none',
            transition: '0.2s',
            '&:hover': { backgroundColor: '#FFCDD2' },
          }}
          onClick={() => handleDelete(params.id)}
        >
          <FaTrash size={16} />
        </Button>
      </Tooltip>
    </div>
  )
}
ActionButtons.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.number.isRequired,
    row: PropTypes.object.isRequired,
  }).isRequired,
}

export default ActionButtons
