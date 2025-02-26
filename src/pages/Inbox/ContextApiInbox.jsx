import { createContext, useContext, useState } from 'react'

const StarredContext = createContext()

export const StarredProvider = ({ children }) => {
  const [starredEmails, setStarredEmails] = useState([])
  const [deletedEmails, setDeletedEmails] = useState([])
  const toggleStars = (email) => {
    console.log(email)

    setStarredEmails((prevState) =>
      prevState.includes(email)
        ? prevState.filter((e) => e !== email)
        : [...prevState, email],
    )
  }
  const deleteStarredEmail = (email) => {
    console.log(email)

    setStarredEmails((prevEmails) =>
      prevEmails.filter((starredEmail) => starredEmail.id !== email.id),
    )
    setDeletedEmails((prevDeletedEmails) => [...prevDeletedEmails, email])
  }
  return (
    <StarredContext.Provider
      value={{ starredEmails, deletedEmails, toggleStars, deleteStarredEmail }}
    >
      {children}
    </StarredContext.Provider>
  )
}

export const useStarred = () => {
  return useContext(StarredContext)
}
