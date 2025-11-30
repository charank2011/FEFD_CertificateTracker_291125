export const certificationData = [
  {
    id: 1,
    domain: 'Data Science & Analytics',
    emoji: '📊',
    companies: ['Google', 'Microsoft', 'Amazon', 'IBM', 'Accenture', 'Deloitte', 'Capital One'],
    description: 'Crucial for companies that rely on data-driven decision-making. Professionals analyze data, build predictive models, and provide actionable insights.',
    roles: ['Data Analyst', 'Data Scientist', 'Analytics Engineer', 'Business Intelligence Analyst'],
    certifications: [
      {
        id: 101,
        name: 'Google Data Analytics Professional Certificate',
        provider: 'Google',
        duration: '3-6 months',
        difficulty: 'Beginner',
        price: '$39/month',
        companies: ['Deloitte', 'Target', 'Verizon', 'Google'],
        description: 'Highly valued by companies in the Google partner network'
      },
      {
        id: 102,
        name: 'IBM Data Science Professional Certificate',
        provider: 'IBM',
        duration: '3-5 months',
        difficulty: 'Intermediate',
        price: '$39/month',
        companies: ['IBM', 'Microsoft', 'Accenture'],
        description: 'Top choice for roles at IBM and companies using their technology'
      },
      {
        id: 103,
        name: 'Microsoft Certified: Azure Data Scientist Associate',
        provider: 'Microsoft',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $165 exam',
        companies: ['Microsoft', 'Amazon', 'Google'],
        description: 'Must-have for jobs within Microsoft ecosystem and Azure-invested companies'
      }
    ]
  },
  {
    id: 2,
    domain: 'Artificial Intelligence & Machine Learning',
    emoji: '🧠',
    companies: ['Google', 'Amazon', 'Microsoft', 'OpenAI', 'NVIDIA', 'Meta'],
    description: 'Companies at the forefront of innovation developing AI-powered products. They seek experts who can design, build, and deploy complex ML models.',
    roles: ['Machine Learning Engineer', 'AI Engineer', 'NLP Specialist', 'Computer Vision Engineer'],
    certifications: [
      {
        id: 201,
        name: 'AWS Certified Machine Learning – Specialty',
        provider: 'AWS',
        duration: '2-3 months',
        difficulty: 'Advanced',
        price: 'Free training, $300 exam',
        companies: ['Amazon', 'Netflix', 'Airbnb'],
        description: 'Essential for companies building AI infrastructure on AWS'
      },
      {
        id: 202,
        name: 'Microsoft Certified: Azure AI Engineer Associate',
        provider: 'Microsoft',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $165 exam',
        companies: ['Microsoft', 'Google', 'IBM'],
        description: 'Key credential for roles at Microsoft and companies using their cloud'
      },
      {
        id: 203,
        name: 'Google Professional Machine Learning Engineer',
        provider: 'Google Cloud',
        duration: '3-4 months',
        difficulty: 'Advanced',
        price: 'Free training, $200 exam',
        companies: ['Google', 'Meta', 'OpenAI'],
        description: 'Prime certification for roles at Google and Google Cloud Platform'
      }
    ]
  },
  {
    id: 3,
    domain: 'Cybersecurity & Networking',
    emoji: '🛡️',
    companies: ['IBM', 'Cisco', 'Palo Alto Networks', 'Deloitte', 'Accenture', 'JPMorgan Chase'],
    description: 'As digital threats grow, companies need strong cybersecurity teams. They look for professionals who can protect assets, prevent attacks, and respond to incidents.',
    roles: ['Security Engineer', 'Network Administrator', 'Penetration Tester', 'Security Architect'],
    certifications: [
      {
        id: 301,
        name: 'CompTIA Security+',
        provider: 'CompTIA',
        duration: '1-3 months',
        difficulty: 'Beginner',
        price: 'Free training, $370 exam',
        companies: ['IBM', 'Dell', 'Microsoft', 'Cisco'],
        description: 'Entry-level but highly recognized for a wide range of companies'
      },
      {
        id: 302,
        name: '(ISC)² CISSP',
        provider: 'ISC²',
        duration: '3-6 months',
        difficulty: 'Advanced',
        price: '$749 exam',
        companies: ['Deloitte', 'Accenture', 'JPMorgan Chase', 'Bank of America'],
        description: 'Gold standard for experienced security professionals'
      },
      {
        id: 303,
        name: 'Certified Ethical Hacker (CEH)',
        provider: 'EC-Council',
        duration: '2-4 months',
        difficulty: 'Advanced',
        price: '$1199 training + exam',
        companies: ['PwC', 'Government Agencies', 'Accenture'],
        description: 'Favored by organizations requiring penetration testing and threat intelligence'
      },
      {
        id: 304,
        name: 'CCNA (Cisco Certified Network Associate)',
        provider: 'Cisco',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $330 exam',
        companies: ['Cisco', 'Verizon', 'Microsoft'],
        description: 'Foundational certification for networking roles using Cisco equipment'
      }
    ]
  },
  {
    id: 4,
    domain: 'Cloud Computing',
    emoji: '☁️',
    companies: ['Amazon', 'Microsoft', 'Google', 'Salesforce'],
    description: 'Cloud skills are now a core requirement for almost all tech-related roles. Companies are migrating infrastructure to the cloud and need certified experts.',
    roles: ['Cloud Architect', 'Cloud Engineer', 'DevOps Engineer', 'Cloud Solutions Architect'],
    certifications: [
      {
        id: 401,
        name: 'AWS Certified Solutions Architect - Associate',
        provider: 'AWS',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $150 exam',
        companies: ['Amazon', 'Netflix', 'Airbnb', 'Twitter'],
        description: 'Most in-demand cloud certification'
      },
      {
        id: 402,
        name: 'Microsoft Certified: Azure Fundamentals / Associate',
        provider: 'Microsoft',
        duration: '1-2 months',
        difficulty: 'Beginner',
        price: 'Free training, $99-165 exam',
        companies: ['Microsoft', 'IBM', 'Google'],
        description: 'Essential for roles at Microsoft and Azure-invested companies'
      },
      {
        id: 403,
        name: 'Google Cloud Certified - Professional Cloud Architect',
        provider: 'Google Cloud',
        duration: '2-3 months',
        difficulty: 'Advanced',
        price: 'Free training, $200 exam',
        companies: ['Google', 'Spotify', 'LinkedIn'],
        description: 'Top-paying certification preferred by Google and GCP companies'
      }
    ]
  },
  {
    id: 5,
    domain: 'DevOps & Site Reliability Engineering',
    emoji: '🛠️',
    companies: ['Google', 'Amazon', 'Netflix', 'Microsoft'],
    description: 'Companies focusing on continuous software delivery and reliability require DevOps and SRE professionals. These roles bridge development and operations.',
    roles: ['DevOps Engineer', 'SRE Engineer', 'Infrastructure Engineer', 'Release Manager'],
    certifications: [
      {
        id: 501,
        name: 'Certified Kubernetes Administrator (CKA)',
        provider: 'Linux Foundation',
        duration: '2-3 months',
        difficulty: 'Advanced',
        price: 'Free training, $395 exam',
        companies: ['Google', 'Red Hat', 'Docker'],
        description: 'Key certification for companies using Kubernetes'
      },
      {
        id: 502,
        name: 'AWS Certified DevOps Engineer - Professional',
        provider: 'AWS',
        duration: '2-3 months',
        difficulty: 'Advanced',
        price: 'Free training, $300 exam',
        companies: ['Amazon', 'Netflix', 'Airbnb'],
        description: 'Essential for DevOps roles at Amazon'
      },
      {
        id: 503,
        name: 'Microsoft Certified: DevOps Engineer Expert',
        provider: 'Microsoft',
        duration: '2-3 months',
        difficulty: 'Advanced',
        price: 'Free training, $165 exam',
        companies: ['Microsoft', 'Google', 'Amazon'],
        description: 'Required for DevOps roles at Microsoft'
      }
    ]
  },
  {
    id: 6,
    domain: 'Software Development & Web Development',
    emoji: '💻',
    companies: ['Google', 'Microsoft', 'Meta', 'Amazon'],
    description: 'Core of computer science. Nearly every company needs software developers from small businesses to global corporations.',
    roles: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Software Engineer'],
    certifications: [
      {
        id: 601,
        name: 'AWS Certified Developer – Associate',
        provider: 'AWS',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $150 exam',
        companies: ['Amazon', 'Netflix', 'Airbnb'],
        description: 'Valued by Amazon and companies building on AWS'
      },
      {
        id: 602,
        name: 'Oracle Certified Professional: Java SE Developer',
        provider: 'Oracle',
        duration: '2-4 months',
        difficulty: 'Intermediate',
        price: '$245 exam',
        companies: ['Oracle', 'IBM', 'Financial Services'],
        description: 'Strong credential for Java-reliant companies'
      },
      {
        id: 603,
        name: '(ISC)² Certified Secure Software Lifecycle Professional',
        provider: 'ISC²',
        duration: '3-6 months',
        difficulty: 'Advanced',
        price: '$749 exam',
        companies: ['Microsoft', 'Oracle', 'Google'],
        description: 'Required by companies with strong security emphasis'
      }
    ]
  },
  {
    id: 7,
    domain: 'Database Administration',
    emoji: '💾',
    companies: ['Oracle', 'Microsoft', 'IBM', 'Amazon'],
    description: 'Every application needs a database to store information. DBAs are essential for managing, securing, and optimizing these systems.',
    roles: ['Database Administrator', 'Database Architect', 'Data Engineer', 'Database Developer'],
    certifications: [
      {
        id: 701,
        name: 'Oracle Certified Professional: Oracle Database',
        provider: 'Oracle',
        duration: '3-6 months',
        difficulty: 'Advanced',
        price: '$330-995 exams',
        companies: ['Oracle', 'IBM', 'Financial Institutions'],
        description: 'Most prestigious certification for Oracle DBAs'
      },
      {
        id: 702,
        name: 'Microsoft Certified: Azure Database Administrator Associate',
        provider: 'Microsoft',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $165 exam',
        companies: ['Microsoft', 'Amazon', 'Google'],
        description: 'Preferred by Microsoft and SQL Server/Azure users'
      },
      {
        id: 703,
        name: 'MongoDB Certified DBA Associate',
        provider: 'MongoDB',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: '$150 exam',
        companies: ['MongoDB', 'Startups', 'Tech Companies'],
        description: 'Crucial for NoSQL databases and flexible data models'
      }
    ]
  },
  {
    id: 8,
    domain: 'Blockchain Technology',
    emoji: '⛓️',
    companies: ['ConsenSys', 'Ripple', 'Block.one', 'TCS', 'Tech Mahindra'],
    description: 'Emerging field with roles in fintech, supply chain, and decentralized applications.',
    roles: ['Blockchain Developer', 'Smart Contract Developer', 'Blockchain Architect', 'Crypto Developer'],
    certifications: [
      {
        id: 801,
        name: 'Certified Blockchain Developer (CBD)',
        provider: 'Blockchain Council',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: '$199-299',
        companies: ['ConsenSys', 'Ripple', 'Startups'],
        description: 'General-purpose certification for blockchain startups'
      },
      {
        id: 802,
        name: 'Hyperledger Fabric Developer',
        provider: 'Linux Foundation',
        duration: '2-3 months',
        difficulty: 'Advanced',
        price: 'Free training, $120 exam',
        companies: ['IBM', 'Accenture', 'Enterprise Companies'],
        description: 'Preferred for enterprise blockchain applications'
      }
    ]
  },
  {
    id: 9,
    domain: 'Game Development',
    emoji: '🎮',
    companies: ['Epic Games', 'Unity Technologies', 'Ubisoft'],
    description: 'Specialized domain for creating video games and interactive experiences.',
    roles: ['Game Developer', 'Game Engineer', 'Graphics Programmer', 'Game Designer'],
    certifications: [
      {
        id: 901,
        name: 'Unity Certified Programmer',
        provider: 'Unity',
        duration: '2-3 months',
        difficulty: 'Intermediate',
        price: 'Free training, $149 exam',
        companies: ['Unity Technologies', 'Mobile Developers', 'Indie Studios'],
        description: 'Must-have for roles using Unity engine'
      },
      {
        id: 902,
        name: 'Unreal Engine Certified Professional',
        provider: 'Epic Games',
        duration: '3-4 months',
        difficulty: 'Advanced',
        price: 'Free training, $150 exam',
        companies: ['Epic Games', 'AAA Studios', 'Ubisoft'],
        description: 'Preferred by Epic Games and AAA game studios'
      }
    ]
  }
];

export const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Data Scientist',
    department: 'Analytics',
    certifications: [
      {
        certId: 101,
        name: 'Google Data Analytics Professional Certificate',
        issuedDate: '2023-01-15',
        expiryDate: '2026-01-15',
        status: 'active'
      },
      {
        certId: 401,
        name: 'AWS Certified Solutions Architect - Associate',
        issuedDate: '2022-06-20',
        expiryDate: '2025-06-20',
        status: 'expiring-soon'
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Cloud Architect',
    department: 'Infrastructure',
    certifications: [
      {
        certId: 402,
        name: 'Microsoft Certified: Azure Fundamentals',
        issuedDate: '2023-03-10',
        expiryDate: '2026-03-10',
        status: 'active'
      }
    ]
  },
  {
    id: 3,
    name: 'Bob Wilson',
    email: 'bob@example.com',
    role: 'DevOps Engineer',
    department: 'Operations',
    certifications: [
      {
        certId: 501,
        name: 'Certified Kubernetes Administrator',
        issuedDate: '2022-11-05',
        expiryDate: '2025-11-05',
        status: 'expiring-soon'
      }
    ]
  }
];
