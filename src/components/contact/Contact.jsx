import { Mail, Phone, MapPin } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { profile } from '../../data/profile'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import GoldfishSVG from '../ui/GoldfishSVG'

function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[var(--background)] overflow-hidden">
      <Container className="text-center relative z-10">
        <SectionHeading eyebrow="Let's Talk" title="Get In Touch" align="center" />

        <p className="text-[var(--muted)] max-w-xl mx-auto mt-6">
          Open to conversations on leadership, operations, and strategy roles. Reach out directly or connect on LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href={`mailto:${profile.email}`}>
            <Mail size={18} /> {profile.email}
          </Button>
          <Button as="a" href={profile.linkedin} variant="outline" target="_blank" rel="noreferrer">
            <FaLinkedin size={18} /> LinkedIn
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-[var(--gold)]" /> {profile.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-[var(--gold)]" /> {profile.location}
          </span>
        </div>
      </Container>

      <div className="absolute bottom-0 right-[-40px] w-40 opacity-40" style={{ animation: 'swim-idle 7s ease-in-out infinite' }}>
        <GoldfishSVG className="w-full" />
      </div>
    </section>
  )
}

export default Contact
