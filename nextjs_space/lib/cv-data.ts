// Central source of truth for CV data (non-translatable fields: dates, company names, URLs).
// Translatable bullet points live in messages/{locale}.json keyed by job id.

export type Locale = 'es' | 'en';

export const personal = {
  name: 'Duanel Garrido Milán',
  initials: 'DG',
  title: {
    es: 'Ingeniero DevOps Senior',
    en: 'Senior DevOps Engineer',
  },
  location: {
    es: 'Barcelona, España',
    en: 'Barcelona, Spain',
  },

  linkedin: 'https://www.linkedin.com/in/lorcopotia',
  github: 'https://github.com/lorcopotia',
  website: 'https://lorcopotia.github.io',
};

export type Job = {
  id: string;
  company: string;
  role: Record<Locale, string>;
  period: Record<Locale, string>;
  location?: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
};

export const jobs: Job[] = [
  {
    id: 'capitole',
    company: 'Capitole Consulting',
    role: {
      es: 'DevOps/SysOps Senior',
      en: 'Senior DevOps/SysOps',
    },
    period: {
      es: 'Septiembre 2025 — Actualidad',
      en: 'September 2025 — Present',
    },
    bullets: {
      es: [
        'Administración y gestión de Azure DevOps (proyectos, pipelines, agentes).',
        'Administración y gestión de SonarQube para calidad de código.',
        'Apoyo a los equipos de Desarrollo en la aplicación de las mejores prácticas internas.',
        'Automatizaciones con Azure Pipelines para revisión de código, build de artefactos y pruebas.',
        'Reportes internos con Power BI, agentes personalizados e IA con GitHub Copilot y VS Code.',
      ],
      en: [
        'Administration and management of Azure DevOps (projects, pipelines, agents).',
        'Administration and management of SonarQube for code quality.',
        'Support to Development teams applying internal best practices.',
        'Automations with Azure Pipelines for code review, artifact builds and testing.',
        'Internal reports with Power BI, custom agents and AI using GitHub Copilot and VS Code.',
      ],
    },
  },
  {
    id: 'logicalis',
    company: 'Logicalis Spain',
    role: {
      es: 'DevOps Engineer',
      en: 'DevOps Engineer',
    },
    period: {
      es: 'Julio 2020 — Septiembre 2025',
      en: 'July 2020 — September 2025',
    },
    bullets: {
      es: [
        'Formación de personal externo en Docker, Kubernetes y Openshift 4.',
        'Instalación, administración y monitorización de clústeres Red Hat Openshift 4.x on-prem (VMware) y en Azure.',
        'Instalación, administración y monitorización de clústeres de Kubernetes.',
        'Programación de tareas y despliegue de infraestructura con Ansible Tower.',
        'Instalación de repositorio privado de imágenes Harbor en OHE y Azure.',
        'Automatización de tareas con Jenkins y scripting en Bash y Python.',
        'IT Transformation Academy: formación en Python, Ansible, Docker, Openshift, Kubernetes, AWS y Azure.',
      ],
      en: [
        'Training external personnel in Docker, Kubernetes and Openshift 4.',
        'Install, manage and monitor Red Hat Openshift 4.x clusters on-prem (VMware) and on Azure.',
        'Install, manage and monitor Kubernetes clusters.',
        'Task scheduling and infrastructure deployment with Ansible Tower.',
        'Installation of private container image registry Harbor on OHE and Azure.',
        'Task automation with Jenkins and Bash/Python scripting.',
        'IT Transformation Academy: training in Python, Ansible, Docker, Openshift, Kubernetes, AWS and Azure.',
      ],
    },
  },
  {
    id: 'webhelp',
    company: 'Webhelp',
    role: {
      es: 'SysAdmin',
      en: 'SysAdmin',
    },
    period: {
      es: 'Septiembre 2019 — Abril 2020',
      en: 'September 2019 — April 2020',
    },
    bullets: {
      es: [
        'Asesoramiento sobre buenas prácticas en infraestructura cloud, con foco en Google Cloud Platform.',
        'Administración de servidores Windows (2008, 2012, 2016) y Linux (RedHat, CentOS, Debian, Ubuntu).',
        'Redes en cloud: balanceadores, VPC, subredes, DNS, CDN, firewalls e interconexiones.',
        'Seguridad: IAM, IAP, gestores de recursos, KMS y Security Command Center.',
        'Almacenamiento y bases de datos: Cloud Storage, Cloud SQL.',
        'Implementación y orquestación con Kubernetes y Docker.',
        'IaC con Terraform y CI/CD con Jenkins.',
      ],
      en: [
        'Advisory on cloud infrastructure best practices, focused on Google Cloud Platform.',
        'Windows server administration (2008, 2012, 2016) and Linux (RedHat, CentOS, Debian, Ubuntu).',
        'Cloud networking: load balancers, VPC, subnets, DNS, CDN, firewalls and interconnects.',
        'Security: IAM, IAP, resource manager, KMS and Security Command Center.',
        'Storage and databases: Cloud Storage, Cloud SQL.',
        'Deployment and orchestration with Kubernetes and Docker.',
        'IaC with Terraform and CI/CD with Jenkins.',
      ],
    },
  },
  {
    id: 'netgear',
    company: 'Netgear',
    role: {
      es: 'L2 Network Support',
      en: 'L2 Network Support',
    },
    period: {
      es: 'Julio 2018 — Abril 2019',
      en: 'July 2018 — April 2019',
    },
    bullets: {
      es: [
        'Soporte técnico de nivel 2 a clientes empresariales por teléfono, correo y chat.',
        'Especializado en NAS, switches, routers, wireless y sistemas de seguridad.',
        'Gestión de una cola de tickets diversos con atención puntual y efectiva.',
      ],
      en: [
        'Level 2 technical support to business customers via phone, email and chat.',
        'Specialist in NAS, switches, routers, wireless and security systems.',
        'Managed a diverse ticket queue with timely and effective service.',
      ],
    },
  },
  {
    id: 'tesco',
    company: 'Tesco',
    role: {
      es: 'Customer Assistant',
      en: 'Customer Assistant',
    },
    period: {
      es: 'Septiembre 2017 — Enero 2018',
      en: 'September 2017 — January 2018',
    },
    bullets: {
      es: ['Atención al cliente.'],
      en: ['Customer service.'],
    },
  },
  {
    id: 'prensa-latina',
    company: 'Prensa Latina S.A. Press Agency',
    role: {
      es: 'Network and System Administrator',
      en: 'Network and System Administrator',
    },
    period: {
      es: 'Septiembre 2005 — Julio 2016',
      en: 'September 2005 — July 2016',
    },
    bullets: {
      es: [
        'Seguridad de TI y cortafuegos como defensa de primera línea para redes y servidores.',
        'Monitorización de seguridad y respuesta ante incidentes para asegurar la integridad de los sistemas.',
        'Gestión diaria de backups sobre los medios de almacenamiento apropiados.',
        'Instalación y actualización de Mac OS, GNU/Linux, FreeBSD, Windows y Android.',
        'Servicios de red: FTP, SMB, LDAP, DHCP, DNS, Postfix, MySQL y Apache.',
        'Informes de rendimiento y ajustes continuos de la infraestructura.',
        'Administración de listas de correo con Mailman.',
      ],
      en: [
        'IT security and firewalls as first-line defense for networks and servers.',
        'Security monitoring and incident response to ensure systems integrity.',
        'Daily backup operations across the appropriate storage media.',
        'Install and upgrade Mac OS, GNU/Linux, FreeBSD, Windows and Android.',
        'Network services: FTP, SMB, LDAP, DHCP, DNS, Postfix, MySQL and Apache.',
        'Performance reports and continuous infrastructure tuning.',
        'Mailing list administration with Mailman.',
      ],
    },
  },
  {
    id: 'cimeq',
    company: 'CIMEQ',
    role: {
      es: 'Electro Medical Technician',
      en: 'Electro Medical Technician',
    },
    period: {
      es: 'Febrero 2002 — Enero 2005',
      en: 'February 2002 — January 2005',
    },
    bullets: {
      es: [
        'Pruebas y calibración de máquinas Rx para garantizar su precisión.',
        'Mantenimiento preventivo de equipos de Resonancia Magnética.',
        'Mantenimiento de equipos de ultrasonido y laboratorio.',
      ],
      en: [
        'Testing and calibration of X-ray machines to ensure accuracy.',
        'Preventive maintenance of Magnetic Resonance equipment.',
        'Maintenance of ultrasound and laboratory equipment.',
      ],
    },
  },
];

export const skillGroups = {
  platforms: [
    'Linux (RHEL, CentOS, Debian, Ubuntu)',
    'Openshift 4.x',
    'Kubernetes',
    'Docker',
    'VMware',
    'Harbor Registry',
  ],
  iac: [
    'Terraform',
    'Ansible',
    'Ansible Tower',
    'Azure DevOps',
    'Bitbucket',
    'Terraform Enterprise',
  ],
  cloud: [
    'Google Cloud Platform',
    'Microsoft Azure',
    'AWS',
    'VPC / Networking',
    'IAM & KMS',
    'Load Balancing & CDN',
  ],
  scripting: [
    'Bash',
    'Python',
    'Jenkins',
    'Azure Pipelines',
    'SonarQube',
    'GitHub Copilot',
  ],
} as const;

export const education = {
  es: [
    'Técnico Medio Superior en Instrumentación y Control Automático.',
    '4 cursos completos de Ingeniería Informática.',
  ],
  en: [
    'Associate’s Degree in Instrumentation and Automatic Control.',
    '4 full years of Computer Engineering studies.',
  ],
} as const;

export const projects = [
  {
    id: 'one',
    tags: ['Openshift', 'Kubernetes', 'Azure', 'VMware'],
    codeUrl: 'https://github.com/lorcopotia/kubernetes-playground',
    demoUrl: null,
  },
  {
    id: 'two',
    tags: ['Ansible Tower', 'Python', 'Bash'],
    codeUrl: 'https://github.com/lorcopotia/ansible-playground',
    demoUrl: null,
  },
  {
    id: 'three',
    tags: ['Azure DevOps', 'SonarQube', 'Copilot'],
    codeUrl: 'https://github.com/lorcopotia',
    demoUrl: null,
  },
  {
    id: 'four',
    tags: ['Terraform', 'GCP', 'Azure', 'Bitbucket'],
    codeUrl: 'https://github.com/lorcopotia/terraform-playground',
    demoUrl: null,
  },
  {
    id: 'five',
    tags: ['Kubernetes', 'Go', 'OIDC', 'Identity'],
    codeUrl: 'https://github.com/lorcopotia/kube-identity/',
    demoUrl: null,
  },
] as const;
