import HeroTitle from '../../components/common/HeroTitle'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

import { Box, TextField } from '@mui/material'
import { useState } from 'react'

export default function Inbox() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <HeroTitle name='Inbox' />
      <div className='mx-auto flex w-full min-w-0 flex-col gap-2 md:flex-row'>
        <Sidebar className='w-full md:w-[300px]' />

        <Box
          sx={{
            width: '100%',
            maxWidth: '980px',
            height: '660px',
            p: 3,
            ml: 'auto',
            boxShadow: 2,
            bgcolor: 'background.paper',
          }}
          className='flex-grow'
        >
          <Box display='flex' alignItems='center' mb={2}>
            <TextField
              fullWidth
              placeholder='Search mail by name'
              variant='outlined'
              size='small'
              sx={{ maxWidth: 400 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='sm:max-w-[300px] md:max-w-[400px]'
            />
            <Box display='flex' ml='auto'></Box>
          </Box>

          <Outlet context={{ searchTerm }} />
        </Box>
      </div>
    </div>
  )
}
