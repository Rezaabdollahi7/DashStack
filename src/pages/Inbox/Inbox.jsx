import HeroTitle from '../../components/common/HeroTitle'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Box, Grid, IconButton, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

import { useState } from 'react'

export default function Inbox() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <Helmet>
        <title>Inbox</title>
        <meta name='Inbox' content='Inbox' />
      </Helmet>
      <div>
        <HeroTitle name='Inbox' />
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
                placeholder='Search mail by name'
                variant='outlined'
                size='small'
                sx={{ maxWidth: 400 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Box display='flex' ml='auto'>
                <IconButton>
                  <Search />
                </IconButton>
              </Box>
            </Box>

            <Outlet searchTerm={searchTerm} />
          </Box>
        </Grid>
      </div>
    </>
  )
}
