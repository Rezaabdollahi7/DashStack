import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const StarredContext = createContext()

export const StarredProvider = ({ children, initialCategory }) => {
  const [starredEmails, setStarredEmails] = useState([])
  const [deletedEmails, setDeletedEmails] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const toggleStars = (email) => {
    setStarredEmails((prevState) =>
      prevState.includes(email)
        ? prevState.filter((e) => e !== email)
        : [...prevState, email],
    )
  }

  const changeCategory = (category) => {
    setSelectedCategory(category)
  }

  const deleteStarredEmail = (email) => {
    setStarredEmails((prevEmails) =>
      prevEmails.filter((starredEmail) => starredEmail.id !== email.id),
    )
    setDeletedEmails((prevDeletedEmails) => [...prevDeletedEmails, email])
  }

  return (
    <StarredContext.Provider
      value={{
        starredEmails,
        deletedEmails,
        toggleStars,
        deleteStarredEmail,
        selectedCategory,
        changeCategory,
      }}
    >
      {children}
    </StarredContext.Provider>
  )
}

StarredProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialCategory: PropTypes.string,
}

StarredProvider.defaultProps = {
  initialCategory: 'all',
}

export const useStarred = () => {
  return useContext(StarredContext)
}
