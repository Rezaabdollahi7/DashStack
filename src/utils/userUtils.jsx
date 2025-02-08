export const deleteUser = (userId, userRows, setUserRows, handleClick) => {
  handleClick()
  const updatedUsers = userRows.filter((user) => user.id !== userId)
  setUserRows(updatedUsers)
}
