export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves in your business, users and market to understand the real problem worth solving.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Define',
    description: 'We align on the product vision, success metrics and the scope that will deliver the most value fastest.',
    duration: '1 week',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create user flows, wireframes and high-fidelity prototypes — testing assumptions before writing code.',
    duration: '2–3 weeks',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Engineering begins in short sprints, with working software delivered continuously and stakeholders kept informed.',
    duration: 'Ongoing sprints',
  },
  {
    number: '05',
    title: 'Validate',
    description: 'We test with real users and run automated quality checks to catch issues before they reach production.',
    duration: 'Each sprint',
  },
  {
    number: '06',
    title: 'Launch',
    description: "A controlled, monitored release with rollback plans in place. We don't just deploy — we land.",
    duration: '1 week',
  },
  {
    number: '07',
    title: 'Improve',
    description: 'Post-launch monitoring, user feedback loops and iterative improvements keep the product moving forward.',
    duration: 'Ongoing',
  },
]
