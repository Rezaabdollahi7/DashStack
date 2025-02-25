import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { columns } from '../../constants/ProductsListTable'
import { rows } from '../../constants/ProductsListTable'

export default function ProductsTable() {
  return (
    <div
      className='my-5 flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-5'
      id='products'
    >
      <DataGrid
        sx={{ borderRadius: 3 }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        rowHeight={105}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  )
}
