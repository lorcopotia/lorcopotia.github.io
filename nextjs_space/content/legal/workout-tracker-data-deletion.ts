import type { DeletionDoc } from '@/lib/legal';

export const workoutTrackerDeletionEs: DeletionDoc = {
  kind: 'deletion',
  slug: 'workout-tracker-data-deletion',
  locale: 'es',
  appName: 'Workout Tracker',
  title: 'Cómo eliminar tu cuenta y tus datos en Workout Tracker',
  summary:
    'Puedes eliminar tu cuenta y absolutamente todos los datos asociados a ella — rutinas, racha, progreso y preferencias — tú mismo, dentro de la app, en unos pocos toques; la eliminación es inmediata y permanente, tanto en nuestros servidores como en tu dispositivo.',
  lastUpdated: '2026-08-01',
  packageName: 'com.mytaller.workout_tracker',
  overviewMd:
    'Esta página describe, para la ficha de Workout Tracker en Google Play, cómo cualquier usuario puede solicitar y completar la eliminación de su cuenta y de los datos que la app guarda sobre él. Para el detalle completo de qué datos se recopilan y por qué, consulta nuestra [política de privacidad](/es/legal/workout-tracker-privacy-policy).',
  stepsIntroMd: 'Si iniciaste sesión con Google, puedes eliminar tu cuenta sin salir de la app:',
  steps: [
    {
      title: 'Abre Ajustes',
      body: 'Toca el ícono de engranaje `⚙` en la esquina superior derecha de la pantalla principal (pestaña Rutina).',
    },
    {
      title: 'Ve a la sección Cuenta',
      body: 'Desplázate hasta `Cuenta`, donde aparece el correo con el que iniciaste sesión.',
    },
    {
      title: 'Toca "Eliminar cuenta"',
      body: 'Justo debajo de tu correo, en rojo, con el ícono de papelera.',
    },
    {
      title: 'Confirma',
      body: 'Lee la advertencia y toca `Eliminar definitivamente`. La app cierra tu sesión de inmediato y te devuelve a la pantalla de bienvenida.',
    },
  ],
  warningMd:
    '**Esta acción es inmediata y no se puede deshacer.** No hay periodo de gracia ni forma de recuperar la cuenta o los datos después de confirmar.',
  whatDeletedIntroMd: 'Al confirmar la eliminación se borra, de forma permanente:',
  deletionRows: [
    { data: 'Tu cuenta (correo, identificador, vínculo con Google)', where: 'Supabase Auth' },
    { data: 'Rutinas guardadas', where: 'Nube + dispositivo' },
    { data: 'Historial de racha (fechas de actividad)', where: 'Nube + dispositivo' },
    { data: 'Progreso de recompensas (ejercicios completados)', where: 'Nube + dispositivo' },
    { data: 'Preferencias (idioma, sonido, tema)', where: 'Nube + dispositivo' },
  ],
  whatDeletedOutroMd:
    'Al eliminarse tu cuenta se cierra tu sesión automáticamente y la app vuelve a un estado de instalación nueva en este dispositivo (sin rutinas, racha ni preferencias guardadas).',
  noAccountMd:
    'Sin una cuenta no existen datos en nuestros servidores: todo vive únicamente en tu dispositivo. Para eliminarlo, usa las herramientas del propio sistema operativo:\n\n- **Android:** Ajustes → Apps → Workout Tracker → Almacenamiento → Borrar datos (o simplemente desinstalar la app).',
  emailMd:
    'Si no puedes usar la app (por ejemplo, la desinstalaste antes de eliminar tu cuenta), puedes solicitar la eliminación por correo. Incluye el correo de Google con el que iniciabas sesión para que podamos localizar tu cuenta.',
  timingMd:
    'La eliminación desde la app es **inmediata**: la cuenta y sus datos se borran de nuestra base de datos en el momento en que confirmas. Las solicitudes por correo se procesan en un plazo máximo de 30 días, con confirmación por email al completarse.',
  contactIntroMd: 'Para solicitudes de eliminación por correo o dudas sobre este proceso, escribe a:',
  contactEmail: 'lorcopotia@gmail.com',
};

export const workoutTrackerDeletionEn: DeletionDoc = {
  kind: 'deletion',
  slug: 'workout-tracker-data-deletion',
  locale: 'en',
  appName: 'Workout Tracker',
  title: 'How to delete your account and data in Workout Tracker',
  summary:
    'You can delete your account and every piece of data tied to it — routines, streak, progress, and preferences — yourself, inside the app, in a few taps; deletion is immediate and permanent, both on our servers and on your device.',
  lastUpdated: '2026-08-01',
  packageName: 'com.mytaller.workout_tracker',
  overviewMd:
    "This page describes, for Workout Tracker's Google Play listing, how any user can request and complete deletion of their account and the data the app stores about them. For the full detail of what data is collected and why, see our [privacy policy](/en/legal/workout-tracker-privacy-policy).",
  stepsIntroMd: 'If you signed in with Google, you can delete your account without leaving the app:',
  steps: [
    {
      title: 'Open Settings',
      body: 'Tap the gear icon `⚙` in the top-right corner of the main screen (Routine tab).',
    },
    {
      title: 'Go to the Account section',
      body: 'Scroll down to `Account`, where the email you signed in with is shown.',
    },
    {
      title: 'Tap "Delete account"',
      body: 'Right below your email, in red, with the trash icon.',
    },
    {
      title: 'Confirm',
      body: 'Read the warning and tap `Delete permanently`. The app signs you out immediately and returns you to the welcome screen.',
    },
  ],
  warningMd:
    '**This action is immediate and cannot be undone.** There is no grace period and no way to recover the account or its data after confirming.',
  whatDeletedIntroMd: 'Confirming deletion permanently erases:',
  deletionRows: [
    { data: 'Your account (email, ID, Google link)', where: 'Supabase Auth' },
    { data: 'Saved routines', where: 'Cloud + device' },
    { data: 'Streak history (activity dates)', where: 'Cloud + device' },
    { data: 'Rewards progress (exercises completed)', where: 'Cloud + device' },
    { data: 'Preferences (language, sound, theme)', where: 'Cloud + device' },
  ],
  whatDeletedOutroMd:
    'Deleting your account signs you out automatically and the app returns to a fresh-install state on this device (no saved routines, streak, or preferences).',
  noAccountMd:
    "Without an account, no data exists on our servers: everything lives only on your device. To delete it, use your operating system's own tools:\n\n- **Android:** Settings → Apps → Workout Tracker → Storage → Clear data (or simply uninstall the app).",
  emailMd:
    "If you can't use the app (for example, you uninstalled it before deleting your account), you can request deletion by email. Include the Google email you signed in with so we can locate your account.",
  timingMd:
    'In-app deletion is **immediate**: the account and its data are removed from our database the moment you confirm. Email requests are processed within 30 days at most, with an email confirmation once complete.',
  contactIntroMd: 'For email deletion requests or questions about this process, write to:',
  contactEmail: 'lorcopotia@gmail.com',
};
