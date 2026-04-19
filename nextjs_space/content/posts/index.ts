import type { Post } from '@/lib/posts';
import { kubernetesDevOpsEs, kubernetesDevOpsEn } from './kubernetes-devops';
import { cloudArchitectureEs, cloudArchitectureEn } from './cloud-architecture';

export const posts: Post[] = [
  kubernetesDevOpsEs,
  kubernetesDevOpsEn,
  cloudArchitectureEs,
  cloudArchitectureEn,
];
