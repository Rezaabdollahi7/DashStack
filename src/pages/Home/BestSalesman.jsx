import { DataGrid } from '@mui/x-data-grid'
import { rows } from '../../constants/BestSalesman'
import { columns } from '../../constants/BestSalesman'

export default function BestSalesman() {
  return (
    <section
      id='bestSellers'
      className='flex h-full flex-col gap-4 rounded-2xl bg-white p-4'
    >
      <h6 className='text-light-black text-xl font-semibold'>Best Salesman</h6>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        sx={{ borderRadius: 3 }}
        rowHeight={75}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </section>
  )
}
