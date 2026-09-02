import { skills } from '../../data/skills'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const groups = [
  { key: 'professional', label: 'Professional Skills' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'tools', label: 'Tools' },
]

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--background)]">
      <Container>
        <SectionHeading eyebrow="What She Brings" title="Skills" />

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {groups.map((group, i) => (
            <GlassCard key={group.key} delay={i * 0.1}>
              <h3 className="text-[var(--gold-light)] font-medium mb-4">{group.label}</h3>
              <ul className="space-y-2">
                {skills[group.key].map((item) => (
                  <li key={item} className="text-sm text-[var(--muted)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
