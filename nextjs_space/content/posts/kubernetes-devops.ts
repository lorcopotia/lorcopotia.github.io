import type { Post } from '@/lib/posts';

const sharedTags = ['Kubernetes', 'DevOps', 'Openshift', 'Ansible'];

export const kubernetesDevOpsEs: Post = {
  slug: 'kubernetes-devops-en-produccion',
  locale: 'es',
  title: 'De cero a producción: Kubernetes para equipos DevOps',
  description:
    'Guía práctica para operar clústeres Kubernetes y Openshift en producción: observabilidad, backups, automatización con Ansible Tower y CI/CD.',
  date: '2026-03-18',
  readingTime: 9,
  tags: sharedTags,
  content: `Operar Kubernetes en producción no consiste en crear un clúster y olvidarse de él. Consiste en construir una plataforma: observable, reproducible, con backups probados y pipelines que cualquier desarrollador pueda usar sin sobresaltos. En este artículo resumo el enfoque que llevo aplicando durante los últimos años administrando clústeres de Red Hat Openshift 4.x on-prem (VMware) y en Azure.

## 1. Trata al clúster como un producto

Las últimas migraciones en las que he participado tenían algo en común: el clúster no era un "detalle técnico", era un producto con usuarios internos. Definir SLOs claros y un catálogo de servicios ayuda a priorizar qué automatizas primero.

- **SLO de disponibilidad** por namespace, no solo por clúster.
- **Runbooks** vivos en Git, revisados trimestralmente.
- **On-call rotativo** con métricas sobre el tiempo de resolución.

## 2. Infraestructura como código, siempre

Todo recurso se crea con **Terraform** y se configura con **Ansible**. La regla es sencilla: si no está en un repositorio, no existe. En mi experiencia, combinar Terraform (networking, clústeres, identidades) con Ansible Tower (configuración día 2, parcheo, backups) ofrece lo mejor de ambos mundos.

\`\`\`hcl
# Ejemplo simplificado de módulo Terraform para un nodo de trabajo
module "openshift_worker" {
  source         = "./modules/ocp-worker"
  cluster_name   = var.cluster_name
  replica_count  = 5
  instance_type  = "Standard_D8s_v5"
  tags           = local.common_tags
}
\`\`\`

## 3. Observabilidad sin drama

El stack por defecto (Prometheus + Alertmanager + Loki o Elastic) es suficiente para la mayoría de casos, pero conviene invertir tiempo en:

1. **Alertas accionables**, con enlace directo al runbook.
2. **Dashboards por equipo**, no un monolítico "cluster overview".
3. **Logs estructurados** desde las aplicaciones, no solo stdout.

## 4. Backups y recuperación, probados

Un backup que no se ha probado no es un backup. Automatizo restauraciones periódicas con Ansible Tower sobre entornos efímeros. Velero para clústeres, snapshots a nivel de volumen y export de configuración a Git completan la estrategia.

## 5. CI/CD sin fricción

En Azure DevOps utilizo pipelines con plantillas compartidas, aprobaciones por entorno y análisis estático con SonarQube. Los equipos de desarrollo no deberían necesitar conocer YAML avanzado para desplegar: proporciona plantillas bien documentadas.

## Conclusiones

La clave no es la herramienta, sino la disciplina operativa: código versionado, runbooks vivos y automatización de lo aburrido. Kubernetes recompensa a los equipos que tratan la infraestructura como un producto.
`,
};

export const kubernetesDevOpsEn: Post = {
  slug: 'kubernetes-devops-in-production',
  locale: 'en',
  title: 'From zero to production: Kubernetes for DevOps teams',
  description:
    'A practical guide to operating Kubernetes and Openshift clusters in production: observability, backups, Ansible Tower automation and CI/CD.',
  date: '2026-03-18',
  readingTime: 9,
  tags: sharedTags,
  content: `Running Kubernetes in production is not about spinning up a cluster and moving on. It is about building a platform: observable, reproducible, with tested backups and pipelines that any developer can use without friction. This is the approach I have been applying over the last years administering Red Hat Openshift 4.x clusters on-prem (VMware) and on Azure.

## 1. Treat the cluster as a product

Every recent migration I took part in had one thing in common: the cluster was not a "technical detail", it was a product with internal users. Defining clear SLOs and a service catalog helps prioritise what to automate first.

- **Availability SLOs** per namespace, not only per cluster.
- **Runbooks** living in Git, reviewed quarterly.
- **On-call rotation** with metrics on time-to-resolution.

## 2. Infrastructure as Code, always

Every resource is created with **Terraform** and configured with **Ansible**. The rule is simple: if it is not in a repo, it does not exist. Combining Terraform (networking, clusters, identity) with Ansible Tower (day-2 configuration, patching, backups) gives you the best of both worlds.

\`\`\`hcl
# Simplified Terraform module for an Openshift worker
module "openshift_worker" {
  source         = "./modules/ocp-worker"
  cluster_name   = var.cluster_name
  replica_count  = 5
  instance_type  = "Standard_D8s_v5"
  tags           = local.common_tags
}
\`\`\`

## 3. Observability without drama

The default stack (Prometheus + Alertmanager + Loki or Elastic) is enough for most cases, but it pays off to invest time in:

1. **Actionable alerts** with a direct link to the runbook.
2. **Per-team dashboards**, not a monolithic "cluster overview".
3. **Structured logs** from applications, not just stdout.

## 4. Backups and recovery, tested

A backup that has never been tested is not a backup. I automate periodic restores with Ansible Tower on ephemeral environments. Velero for cluster state, volume-level snapshots and config export to Git complete the strategy.

## 5. Frictionless CI/CD

On Azure DevOps I use pipelines with shared templates, per-environment approvals and static analysis with SonarQube. Developers should not need advanced YAML skills to deploy: provide well-documented templates.

## Takeaways

The key is not the tool, it is operational discipline: versioned code, living runbooks and automating the boring parts. Kubernetes rewards teams that treat infrastructure as a product.
`,
};
