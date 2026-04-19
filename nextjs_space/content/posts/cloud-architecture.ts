import type { Post } from '@/lib/posts';

const sharedTags = ['Cloud', 'Terraform', 'GCP', 'Azure', 'IaC'];

export const cloudArchitectureEs: Post = {
  slug: 'arquitectura-cloud-multicloud',
  locale: 'es',
  title: 'Arquitectura cloud multi-proveedor con Terraform',
  description:
    'Cómo diseñar infraestructura reproducible entre GCP y Azure con Terraform: módulos, networking, identidad y revisión en PR.',
  date: '2026-02-11',
  readingTime: 8,
  tags: sharedTags,
  content: `Trabajar con más de una nube pública ya no es una rareza. Sea por regulación, por coste o por estrategia, los equipos se encuentran con servicios críticos distribuidos entre Azure, GCP y AWS. Esta es la arquitectura de referencia que aplico cuando parto desde cero.

## 1. Un repositorio por dominio, módulos compartidos

La tentación de poner todo en un único monorepo de Terraform termina mal. En su lugar:

- Un repositorio por dominio de negocio (pagos, catálogo, datos…).
- Un repositorio de **módulos reutilizables** con versionado semántico.
- Un repositorio central de **políticas** (OPA / Sentinel).

## 2. Red primero, servicios después

Antes de desplegar clústeres o bases de datos, diseña la red:

- **Rangos CIDR** no solapados, con espacio para crecer.
- **Peering / Interconnect** entre nubes y on-prem.
- **DNS privado** compartido y resolución cross-cloud.

## 3. Identidad federada

Usar identidades gestionadas locales (GCP Workload Identity, Azure Managed Identities) y federarlas con el IdP corporativo evita secretos de larga duración. Desde Terraform esto se traduce en…

\`\`\`hcl
resource "google_service_account" "app" {
  account_id   = "app-prod"
  display_name = "App Prod"
}

resource "google_service_account_iam_binding" "wi" {
  service_account_id = google_service_account.app.name
  role               = "roles/iam.workloadIdentityUser"
  members            = ["serviceAccount:\${var.project}.svc.id.goog[apps/app]"]
}
\`\`\`

## 4. Pipelines con revisión humana

No ejecuto \`terraform apply\` directamente desde una máquina. Uso Azure DevOps (o Terraform Enterprise cuando está disponible) con aprobación manual en entornos productivos y salida del \`plan\` publicada como comentario en la PR.

## 5. Observabilidad y coste

Para que la arquitectura sea sostenible:

1. Exporta métricas de coste a un data lake central.
2. Etiqueta absolutamente todo (\`env\`, \`team\`, \`app\`, \`criticality\`).
3. Alerta sobre desviaciones, no sobre valores absolutos.

## Conclusiones

La arquitectura multicloud no es más compleja por tener dos nubes, sino por tener dos formas de trabajar. Terraform, identidad federada y revisión en PR convierten esa complejidad en algo operable.
`,
};

export const cloudArchitectureEn: Post = {
  slug: 'multicloud-architecture-terraform',
  locale: 'en',
  title: 'Multi-cloud architecture with Terraform',
  description:
    'How to design reproducible infrastructure between GCP and Azure with Terraform: modules, networking, identity and PR review.',
  date: '2026-02-11',
  readingTime: 8,
  tags: sharedTags,
  content: `Working with more than one public cloud is no longer rare. Whether for regulation, cost or strategy, teams end up with critical services spread across Azure, GCP and AWS. This is the reference architecture I apply when I start from scratch.

## 1. One repo per domain, shared modules

The temptation to put everything in a single Terraform monorepo ends badly. Instead:

- One repo per business domain (payments, catalog, data…).
- One repo of **reusable modules** with semantic versioning.
- A central repo for **policies** (OPA / Sentinel).

## 2. Networking first, services later

Before deploying clusters or databases, design the network:

- **Non-overlapping CIDR ranges** with headroom.
- **Peering / Interconnect** between clouds and on-prem.
- **Private DNS** shared across clouds.

## 3. Federated identity

Using managed local identities (GCP Workload Identity, Azure Managed Identities) and federating them with your corporate IdP avoids long-lived secrets. From Terraform this looks like…

\`\`\`hcl
resource "google_service_account" "app" {
  account_id   = "app-prod"
  display_name = "App Prod"
}

resource "google_service_account_iam_binding" "wi" {
  service_account_id = google_service_account.app.name
  role               = "roles/iam.workloadIdentityUser"
  members            = ["serviceAccount:\${var.project}.svc.id.goog[apps/app]"]
}
\`\`\`

## 4. Pipelines with human review

I never run \`terraform apply\` directly from a laptop. I use Azure DevOps (or Terraform Enterprise when available) with manual approval on production and the \`plan\` output posted as a PR comment.

## 5. Observability and cost

To make the architecture sustainable:

1. Export cost metrics to a central data lake.
2. Tag absolutely everything (\`env\`, \`team\`, \`app\`, \`criticality\`).
3. Alert on deviations, not absolute values.

## Takeaways

Multi-cloud architecture is not more complex because you have two clouds, but because you have two ways of working. Terraform, federated identity and PR review turn that complexity into something operable.
`,
};
