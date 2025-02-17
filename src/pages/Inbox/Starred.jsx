import { useStarred } from './ContextApiInbox'

function Starred() {
  const { starredEmails } = useStarred()

  return (
    <div>
      <h2>Starred Emails</h2>
      {starredEmails.length === 0 ? (
        <p>No starred emails yet.</p>
      ) : (
        starredEmails.map((email, index) => (
          <div key={index}>
            <h3>{email.name}</h3>
            <p>{email.subject}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Starred
