import type { Post } from '@/lib/posts';
import { kubernetesDevOpsEs, kubernetesDevOpsEn } from './kubernetes-devops';
import { cloudArchitectureEs, cloudArchitectureEn } from './cloud-architecture';
import {
  sonarqubeExclusionsDotnetEs,
  sonarqubeExclusionsDotnetEn,
} from './sonarqube-exclusions-dotnet';

export const posts: Post[] = [
  sonarqubeExclusionsDotnetEs,
  sonarqubeExclusionsDotnetEn,
  kubernetesDevOpsEs,
  kubernetesDevOpsEn,
  cloudArchitectureEs,
  cloudArchitectureEn,
];
