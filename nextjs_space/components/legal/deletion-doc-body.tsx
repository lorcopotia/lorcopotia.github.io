import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MdxContent } from '@/components/mdx-content';
import { renderInline } from '@/lib/markdown';
import type { DeletionDoc } from '@/lib/legal';

const sectionHeadings = {
  es: {
    overview: '1. Resumen',
    steps: '2. Eliminar tu cuenta desde la app',
    whatDeleted: '3. Qué se elimina',
    noAccount: '4. Si nunca iniciaste sesión',
    email: '5. Alternativa por correo',
    timing: '6. Plazos',
    contact: '7. Contacto',
    dataCol: 'Dato',
    whereCol: 'Dónde',
  },
  en: {
    overview: '1. Overview',
    steps: '2. Delete your account in the app',
    whatDeleted: '3. What gets deleted',
    noAccount: '4. If you never signed in',
    email: '5. Email alternative',
    timing: '6. Timing',
    contact: '7. Contact',
    dataCol: 'Data',
    whereCol: 'Where',
  },
} as const;

function Inline({ text }: { text: string }) {
  return (
    <span
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: renderInline(text) }}
    />
  );
}

export function DeletionDocBody({ doc }: { doc: DeletionDoc }) {
  const s = sectionHeadings[doc.locale];

  return (
    <div className="prose-custom max-w-none">
      <h2>{s.overview}</h2>
      <MdxContent source={doc.overviewMd} />

      <h2>{s.steps}</h2>
      <MdxContent source={doc.stepsIntroMd} />

      <div className="my-6 space-y-4">
        {doc.steps.map((step, idx) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
              {idx + 1}
            </div>
            <div className="pt-0.5">
              <p className="font-semibold text-foreground">{step.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                <Inline text={step.body} />
              </p>
            </div>
          </div>
        ))}
      </div>

      <Alert variant="destructive" className="my-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <Inline text={doc.warningMd} />
        </AlertDescription>
      </Alert>

      <h2>{s.whatDeleted}</h2>
      <MdxContent source={doc.whatDeletedIntroMd} />

      <div className="not-prose my-4 overflow-hidden rounded-xl ring-1 ring-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{s.dataCol}</TableHead>
              <TableHead>{s.whereCol}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doc.deletionRows.map((row) => (
              <TableRow key={row.data}>
                <TableCell className="text-sm text-foreground">{row.data}</TableCell>
                <TableCell>
                  <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">
                    {row.where}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <MdxContent source={doc.whatDeletedOutroMd} />

      <h2>{s.noAccount}</h2>
      <MdxContent source={doc.noAccountMd} />

      <h2>{s.email}</h2>
      <MdxContent source={doc.emailMd} />

      <h2>{s.timing}</h2>
      <MdxContent source={doc.timingMd} />

      <h2>{s.contact}</h2>
      <MdxContent source={doc.contactIntroMd} />
      <p>
        <a href={`mailto:${doc.contactEmail}`}>{doc.contactEmail}</a>
      </p>
    </div>
  );
}
