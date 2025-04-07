import { Contacts } from '../../constants/Contacts'
import HeroTitle from '../../components/common/HeroTitle'
import ContactCard from './ContactCard'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
        <meta name='Contacts' content='Contacts' />
      </Helmet>

      <HeroTitle name='Contacts' />
      <section className='contacts mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {Contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </section>
    </>
  )
}
