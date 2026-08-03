import type { Service, EngagementModel } from '@/types/service'

export const services: Service[] = [
  {
    slug: 'product-strategy',
    title: 'Product Strategy',
    description: 'Validate ideas, define roadmaps and align product with business outcomes before a line of code is written.',
    longDescription: 'We work with founders, product leaders and technical teams to clarify product vision, identify user needs and define the roadmap that creates real value.',
    deliverables: ['Product vision document', 'User research synthesis', 'Feature prioritisation framework', 'Go-to-market roadmap'],
    icon: 'Target',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research-driven design that makes complex software simple, intuitive and genuinely enjoyable to use.',
    longDescription: 'From wireframes to high-fidelity prototypes, we design interfaces grounded in user research — tested, iterated and built to convert.',
    deliverables: ['User research & personas', 'Information architecture', 'Wireframes & prototypes', 'Design system & handoff'],
    icon: 'Palette',
  },
  {
    slug: 'web-development',
    title: 'Web Application Development',
    description: 'Scalable, performant web applications built with modern frameworks and engineering rigour.',
    longDescription: 'We build production-grade web applications using Next.js, React and TypeScript — with clean architecture, thorough testing and seamless deployment.',
    deliverables: ['Full-stack web application', 'API design & implementation', 'Performance optimisation', 'Deployment & CI/CD pipeline'],
    icon: 'Code2',
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Application Development',
    description: 'Cross-platform mobile apps that feel native on iOS and Android — delivered as a single codebase.',
    longDescription: 'We build React Native applications that deliver native performance and feel, with offline support, push notifications and app store deployment handled end to end.',
    deliverables: ['iOS & Android application', 'Offline and sync support', 'Push notification system', 'App store submission'],
    icon: 'Smartphone',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    description: 'Intelligent systems that eliminate repetitive work, surface insights and help your team make faster decisions.',
    longDescription: 'From LLM-powered features to custom ML pipelines, we design and build AI systems that solve real product problems — not just impressive demos.',
    deliverables: ['AI feature specification', 'Model integration & fine-tuning', 'Automation workflow design', 'Monitoring & evaluation framework'],
    icon: 'Brain',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Resilient, scalable infrastructure that grows with your product — and keeps it running reliably.',
    longDescription: 'We architect and manage cloud infrastructure on AWS, GCP or Azure — with automated deployments, observability and security built in from the start.',
    deliverables: ['Cloud architecture design', 'CI/CD pipeline setup', 'Container orchestration', 'Monitoring & alerting'],
    icon: 'Cloud',
  },
  {
    slug: 'quality-engineering',
    title: 'Quality Engineering',
    description: 'Comprehensive testing strategies that ship confidence — not surprises.',
    longDescription: 'Unit, integration, end-to-end and accessibility testing designed to catch regressions early and keep product quality high as your codebase scales.',
    deliverables: ['Test strategy document', 'Automated test suite', 'CI-integrated quality gates', 'Accessibility audit & fixes'],
    icon: 'ShieldCheck',
  },
  {
    slug: 'product-maintenance',
    title: 'Product Maintenance',
    description: 'Ongoing engineering support to keep your product secure, up to date and continuously improving.',
    longDescription: 'After launch, your product needs ongoing attention. We provide structured support arrangements that cover security patches, dependency upgrades, performance monitoring and incremental improvements.',
    deliverables: ['Monthly maintenance reports', 'Dependency & security updates', 'Performance monitoring', 'Ongoing feature iterations'],
    icon: 'Wrench',
  },
]

export const engagementModels: EngagementModel[] = [
  {
    title: 'Complete Product Delivery',
    description: 'We own the full product lifecycle — from strategy through design, engineering, testing and launch.',
    bestFor: 'Founders and companies launching a new product',
  },
  {
    title: 'Dedicated Product Team',
    description: 'A fully embedded Rocket.io team works alongside your organisation as a seamless extension of your capability.',
    bestFor: 'Scale-ups needing sustained engineering capacity',
  },
  {
    title: 'Technical Consultancy',
    description: 'Expert guidance on architecture, technology decisions and product direction without ongoing execution.',
    bestFor: 'Teams with in-house engineers who need strategic direction',
  },
  {
    title: 'Product Modernisation',
    description: 'We audit, redesign and rebuild legacy systems into modern, maintainable and scalable products.',
    bestFor: 'Organisations with outdated technology that is limiting growth',
  },
  {
    title: 'Ongoing Engineering Support',
    description: 'A structured support arrangement covering maintenance, security, performance and incremental improvements.',
    bestFor: 'Launched products needing reliable ongoing care',
  },
]
