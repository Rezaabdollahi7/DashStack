import SearchIcon from '@mui/icons-material/Search'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import AvatarImage from '../../assets/icons/Avatars/avatar-2.webp'
import { useState, useMemo, useCallback } from 'react'
import { PiUsersThreeDuotone } from 'react-icons/pi'
import { AiTwotoneSetting } from 'react-icons/ai'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EnIcon from '../../assets/icons/england.avif'
import IrIcon from '../../assets/icons/iran.png'

const languages = [
  { code: 'en', name: 'English', icon: EnIcon },
  { code: 'fa', name: 'Persian', icon: IrIcon },
]

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleLanguageChange = useCallback(
    (language) => {
      setSelectedLanguage(language)
      handleClose()
    },
    [handleClose],
  )

  const selectedLanguageIcon = useMemo(
    () => (
      <img
        src={selectedLanguage.icon}
        alt='Language Icon'
        width={20}
        height={20}
      />
    ),
    [selectedLanguage],
  )

  return (
    <nav className='flex w-full items-center justify-between bg-white px-4 py-3'>
      <Paper
        component='form'
        sx={{
          p: '0px 8px',
          display: 'flex',
          alignItems: 'center',
          width: 250,
          background: '#f5f6fa',
          borderRadius: 30,
          border: ' 1px solid ',
          borderColor: '#e5e7eb',
          boxShadow: 0,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search...'
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className='right-section flex items-center justify-center gap-x-4'>
        <AiTwotoneSetting className='animate-wiggle h-6 w-6 text-gray-600' />
        <PiUsersThreeDuotone className='h-7 w-7 text-gray-600' />
        <div className='hidden md:block'>
          <Button
            aria-controls='language-menu'
            aria-haspopup='true'
            onClick={handleClick}
            startIcon={selectedLanguageIcon}
            sx={{ color: '#162556' }}
          >
            {selectedLanguage.name}
          </Button>
          <Menu
            id='language-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {languages.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                sx={{ gap: 1 }}
              >
                <img
                  src={language.icon}
                  alt='Language Icon'
                  width={20}
                  height={20}
                />
                {language.name}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <div className='avatar-wrapper flex items-center gap-1'>
          <div className='wrapper relative w-max'>
            <img
              src={AvatarImage}
              alt=''
              className='absolute top-[5%] right-[5%] z-10 flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 border-white bg-white'
            />

            <div className='circle-gradient'></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
