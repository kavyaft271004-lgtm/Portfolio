import { profile } from '../../data/profile'
import Container from '../ui/Container'

function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/15 py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--gold-light)] transition-colors">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--gold-light)] transition-colors">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
