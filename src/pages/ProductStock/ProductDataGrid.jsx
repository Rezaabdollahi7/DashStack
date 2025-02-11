import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import ColorCircle from '../../components/common/ColorCircle'
import products1Logo from '/src/assets/images/ProductStock/Image.png'
import products2Logo from '/src/assets/images/ProductStock/Image2.png'
import products3Logo from '/src/assets/images/ProductStock/Image1.png'
import products4Logo from '/src/assets/images/ProductStock/Image3.png'
import products5Logo from '/src/assets/images/ProductStock/Image4.png'

export const rows = [
  {
    id: 1,
    image: products1Logo,
    productName: 'Apple Watch Series 4',
    category: 'Electronics',
    price: 100,
    piece: 10,
    availableColor: ['Red', 'Green', 'Blue', 'Purple'],
  },
  {
    id: 2,
    image: products2Logo,
    productName: 'Microsoft Headsquare',
    category: 'Clothing',
    price: 200,
    piece: 15,
    availableColor: ['Blue', 'Yellow', 'Orange', 'Pink'],
  },
  {
    id: 3,
    image: products3Logo,
    productName: 'Women’s Dress',
    category: 'Furniture',
    price: 150,
    piece: 8,
    availableColor: ['Green', 'Orange', 'Yellow', 'Red'],
  },
  {
    id: 4,
    image: products4Logo,
    productName: 'Samsung A50',
    category: 'Sports',
    price: 80,
    piece: 20,
    availableColor: ['Yellow', 'Purple', 'Blue', 'Green'],
  },
  {
    id: 5,
    image: products5Logo,
    productName: 'Camera',
    category: 'Toys',
    price: 250,
    piece: 5,
    availableColor: ['Pink', 'Blue', 'Red', 'Purple'],
  },
]

export const columns = [
  {
    field: 'image',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <img src={params.value} alt='Product' width='50' height='50' />
    ),
  },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 180,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'piece',
    headerName: 'Piece',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'availableColor',
    headerName: 'Available Color',
    width: 150,
    editable: true,
    renderCell: (params) => {
      const colors = Array.isArray(params.value) ? params.value : ['gray']
      return <ColorCircle colors={colors} />
    },
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => console.log('Edit:', params.row)}
          sx={{ minWidth: 80 }}
        >
          Edit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => console.log('Delete:', params.row)}
          sx={{ minWidth: 80 }}
        >
          Delete
        </Button>
      </Box>
    ),
  },
]

const ProductDataGrid = ({ rows, columns }) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableRowSelectionOnClick
        sx={{ paddingBottom: '20px' }}
      />
    </Box>
  )
}

ProductDataGrid.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      piece: PropTypes.number.isRequired,
      availableColor: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      renderCell: PropTypes.func,
      editable: PropTypes.bool,
      sortable: PropTypes.bool,
      type: PropTypes.string,
    }),
  ).isRequired,
}

export default ProductDataGrid
