import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export default function UsersDataGrid({
  rows,
  columns,
  pageSize = 5,
  checkboxSelection = true,
}) {
  return (
    <Box sx={{ height: 370, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize,
            },
          },
        }}
        pageSizeOptions={[pageSize]}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
      />
    </Box>
  )
}

UsersDataGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  checkboxSelection: PropTypes.bool,
}
