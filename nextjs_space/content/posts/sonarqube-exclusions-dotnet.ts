import type { Post } from '@/lib/posts';

const sharedTags = ['SonarQube', '.NET', 'Azure DevOps', 'DevSecOps'];

export const sonarqubeExclusionsDotnetEs: Post = {
  slug: 'exclusiones-sonarqube-dotnet',
  locale: 'es',
  title: 'Guía de exclusiones de archivos en SonarQube para proyectos .NET',
  description:
    'Cómo configurar sonar.exclusions en pipelines de Azure DevOps para acelerar el análisis SAST, SCA y SBOM en proyectos .NET sin perder cobertura real.',
  date: '2026-07-20',
  readingTime: 6,
  tags: sharedTags,
  content: `Cuando un análisis de SonarQube tarda demasiado o llena el quality gate de avisos sobre archivos que nadie ha escrito a mano, casi siempre el problema es el mismo: se está analizando lo que no hace falta analizar. En proyectos .NET con Advanced Security (SAST, SCA y generación de SBOM) activado en Azure DevOps, definir bien \`sonar.exclusions\` marca la diferencia entre un pipeline ágil y uno que todo el mundo evita mirar.

## 1. Binarios compilados y símbolos de depuración

Los ensamblados y símbolos generados en el build no son código fuente, así que no aportan nada al análisis salvo ruido:

- \`**/*.dll\`, \`**/*.exe\`, \`**/*.pdb\`
- \`**/*.so\`, \`**/*.dylib\`
- \`**/*.nupkg\`, \`**/*.snupkg\`

## 2. Carpetas de build e intermedios

Los directorios \`bin\` y \`obj\` de .NET, junto con los resultados de test, no deberían entrar nunca en el análisis:

- \`**/bin/**\`, \`**/obj/**\`
- \`**/TestResults/**\`

## 3. Activos estáticos

Imágenes, audio, vídeo y archivos comprimidos no contienen lógica de negocio, así que escanearlos solo añade tiempo:

- \`**/*.jpg\`, \`**/*.png\`, \`**/*.svg\`, \`**/*.ico\`
- \`**/*.mp3\`, \`**/*.mp4\`
- \`**/*.pdf\`, \`**/*.zip\`, \`**/*.7z\`

## 4. Metadatos del IDE

Archivos de espacio de trabajo local que no aportan nada a un análisis compartido en pipeline:

- \`**/.vs/**\`, \`**/.vscode/**\`, \`**/.idea/**\`
- \`**/*.user\`, \`**/*.suo\`

## 5. Código autogenerado y minificado

Este es el grupo que más falsos positivos genera, porque son archivos que nadie revisa en PR:

- \`**/*.min.js\`, \`**/*.min.css\`
- \`**/*.designer.cs\`, \`**/*.g.cs\`, \`**/*.i.cs\`

> **Importante:** no excluyas \`*.csproj\`, \`*.vbproj\`, \`packages.config\`, \`Directory.Build.props/targets\` ni \`packages.lock.json\`. SonarQube Advanced Security necesita esos archivos intactos para resolver dependencias, construir el SBOM y ejecutar el análisis SCA sobre CVEs conocidos. Excluirlos "para ir más rápido" es la forma más habitual de romper la parte de seguridad que en realidad importa.

## Configuración en Azure DevOps

En el task \`SonarQubePrepare\`, el patrón de exclusión se define en \`extraProperties\`:

\`\`\`yaml
- task: SonarQubePrepare@5
  inputs:
    SonarQube: 'SonarQube-Service-Connection'
    scannerMode: 'MSBuild'
    projectKey: 'DotNet_Application_Key'
    projectName: 'DotNet Application'
    extraProperties: |
      sonar.exclusions=**/bin/**,**/obj/**,**/*.dll,**/*.exe,**/*.pdb,**/*.designer.cs,**/*.g.cs,**/*.min.js,**/*.min.css,**/*.png,**/*.jpg,**/*.zip,**/*.nupkg,**/.vs/**
\`\`\`

También puede configurarse a nivel de proyecto en la UI de SonarQube, en **Project Settings > Analysis Scope > File Exclusions**, si prefieres no tocar el pipeline cada vez que cambia la lista.

## Conclusiones

Excluir bien no es esconder código: es dejar que el análisis se concentre en lo que de verdad se escribe y se revisa. Mantén fuera del análisis los binarios, los artefactos de build y el código autogenerado, pero nunca los archivos de dependencias. Esa distinción es la que mantiene rápido el pipeline y fiable el quality gate.
`,
};

export const sonarqubeExclusionsDotnetEn: Post = {
  slug: 'sonarqube-exclusions-dotnet',
  locale: 'en',
  title: 'SonarQube file exclusion guide for .NET projects',
  description:
    'How to configure sonar.exclusions in Azure DevOps pipelines to speed up SAST, SCA and SBOM analysis in .NET projects without losing real coverage.',
  date: '2026-07-20',
  readingTime: 6,
  tags: sharedTags,
  content: `When a SonarQube analysis takes too long or fills the quality gate with warnings about files nobody wrote by hand, the problem is usually the same: it's analysing things it doesn't need to. In .NET projects with Advanced Security (SAST, SCA and SBOM generation) enabled in Azure DevOps, getting \`sonar.exclusions\` right is the difference between a pipeline people trust and one everyone avoids looking at.

## 1. Compiled binaries and debug symbols

Assemblies and symbols produced during the build are not source code, so scanning them only adds noise:

- \`**/*.dll\`, \`**/*.exe\`, \`**/*.pdb\`
- \`**/*.so\`, \`**/*.dylib\`
- \`**/*.nupkg\`, \`**/*.snupkg\`

## 2. Build and intermediate folders

The .NET \`bin\` and \`obj\` folders, along with test results, should never be part of the analysis:

- \`**/bin/**\`, \`**/obj/**\`
- \`**/TestResults/**\`

## 3. Static assets

Images, audio, video and compressed archives carry no business logic, so scanning them just costs time:

- \`**/*.jpg\`, \`**/*.png\`, \`**/*.svg\`, \`**/*.ico\`
- \`**/*.mp3\`, \`**/*.mp4\`
- \`**/*.pdf\`, \`**/*.zip\`, \`**/*.7z\`

## 4. IDE metadata

Local workspace files that add nothing to an analysis shared through a pipeline:

- \`**/.vs/**\`, \`**/.vscode/**\`, \`**/.idea/**\`
- \`**/*.user\`, \`**/*.suo\`

## 5. Auto-generated and minified code

This is the group that produces the most false positives, since nobody reviews these files in a PR:

- \`**/*.min.js\`, \`**/*.min.css\`
- \`**/*.designer.cs\`, \`**/*.g.cs\`, \`**/*.i.cs\`

> **Important:** don't exclude \`*.csproj\`, \`*.vbproj\`, \`packages.config\`, \`Directory.Build.props/targets\` or \`packages.lock.json\`. SonarQube Advanced Security needs these files intact to resolve dependencies, build the SBOM and run SCA analysis against known CVEs. Excluding them "to go faster" is the most common way to break the security part that actually matters.

## Configuration in Azure DevOps

In the \`SonarQubePrepare\` task, the exclusion pattern is set under \`extraProperties\`:

\`\`\`yaml
- task: SonarQubePrepare@5
  inputs:
    SonarQube: 'SonarQube-Service-Connection'
    scannerMode: 'MSBuild'
    projectKey: 'DotNet_Application_Key'
    projectName: 'DotNet Application'
    extraProperties: |
      sonar.exclusions=**/bin/**,**/obj/**,**/*.dll,**/*.exe,**/*.pdb,**/*.designer.cs,**/*.g.cs,**/*.min.js,**/*.min.css,**/*.png,**/*.jpg,**/*.zip,**/*.nupkg,**/.vs/**
\`\`\`

It can also be set at the project level in the SonarQube UI, under **Project Settings > Analysis Scope > File Exclusions**, if you'd rather not touch the pipeline every time the list changes.

## Takeaways

Excluding well isn't about hiding code: it's about letting the analysis focus on what is actually written and reviewed. Keep binaries, build artifacts and auto-generated code out of the scan, but never the dependency files. That distinction is what keeps the pipeline fast and the quality gate trustworthy.
`,
};
