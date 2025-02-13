import { Contacts } from '../../constants/Contacts'
import HeroTitle from '../../components/common/HeroTitle'
import ContactCard from './ContactCard'

export default function Contact() {
  return (
    <>
      <HeroTitle name='Contacts' />
      <section className='contacts mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {Contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </section>
    </>
  )
}
