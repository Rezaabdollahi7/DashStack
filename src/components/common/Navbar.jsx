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
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { sidebarLinks } from '../../constants/SidebarLinks'
import Logo from '../../assets/icons/Logo.svg'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import {
  mobileMenuVariants,
  hamburgerIconVariants,
  menuItemVariants,
} from '../../utils/motionVariants'
const languages = [
  { code: 'en', name: 'English', icon: EnIcon },
  { code: 'fa', name: 'Persian', icon: IrIcon },
]

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

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
    <nav className='relative z-50 flex w-full items-center justify-between gap-4 bg-white px-4 py-3'>
      {/* Search Bar - Full width on mobile */}
      <Paper
        component='form'
        sx={{
          p: '0px 8px',
          display: 'flex',
          alignItems: 'center',
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
        {/* Icons - Hidden on smaller screens */}
        <div className='hidden items-center gap-x-4 md:flex'>
          <AiTwotoneSetting className='animate-wiggle h-6 w-6 text-gray-600' />
          <PiUsersThreeDuotone className='h-7 w-7 text-gray-600' />
        </div>

        {/* Language selector - Hidden on mobile */}
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

        {/* Avatar - Always visible */}
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

        {/* Hamburger Menu Button - Only visible on smaller screens */}
        <motion.div
          className='cursor-pointer lg:hidden'
          variants={hamburgerIconVariants}
          animate={mobileMenuOpen ? 'open' : 'closed'}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <IoClose
              className='h-8 w-8 text-gray-700'
              onClick={toggleMobileMenu}
            />
          ) : (
            <BiMenuAltRight
              className='h-8 w-8 text-gray-700'
              onClick={toggleMobileMenu}
            />
          )}
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className='bg-opacity-50 fixed inset-0 z-40 bg-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className='fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm overflow-y-auto bg-white shadow-xl'
            variants={mobileMenuVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            <div className='px-4 py-6'>
              <div className='mb-8 flex items-center justify-between'>
                <img src={Logo} alt='DashStack logo' width={130} height={25} />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMobileMenu}
                >
                  <IoClose className='h-6 w-6 text-gray-700' />
                </motion.button>
              </div>

              {/* Language Selector (mobile) */}
              <div className='mb-6 border-b border-gray-200 pb-4'>
                <p className='mb-2 text-sm text-gray-500'>Language</p>
                <div className='flex space-x-4'>
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedLanguage(language)}
                      className={`flex items-center space-x-2 rounded-md p-2 ${
                        selectedLanguage.code === language.code
                          ? 'border border-blue-200 bg-blue-50'
                          : 'bg-gray-50'
                      }`}
                    >
                      <img
                        src={language.icon}
                        alt={language.name}
                        width={20}
                        height={20}
                      />
                      <span>{language.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className='space-y-1'>
                {sidebarLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <NavLink
                      to={link.Link}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-primary-light flex items-center gap-3 rounded-lg px-4 py-3 text-white'
                          : 'flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-gray-100'
                      }
                      onClick={closeMobileMenu}
                    >
                      <span className='text-lg'>{link.icon}</span>
                      <span>{link.LinkName}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
