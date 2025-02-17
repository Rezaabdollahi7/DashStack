import { createContext, useContext, useState } from 'react'

const StarredContext = createContext()

export const StarredProvider = ({ children }) => {
  const [starredEmails, setStarredEmails] = useState([])

  const toggleStars = (email) => {
    setStarredEmails((prevState) =>
      prevState.includes(email)
        ? prevState.filter((e) => e !== email)
        : [...prevState, email],
    )
  }

  return (
    <StarredContext.Provider value={{ starredEmails, toggleStars }}>
      {children}
    </StarredContext.Provider>
  )
}

export const useStarred = () => {
  return useContext(StarredContext)
}
