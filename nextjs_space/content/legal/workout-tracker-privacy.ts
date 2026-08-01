import type { LegalDoc } from '@/lib/legal';

export const workoutTrackerPrivacyEs: LegalDoc = {
  kind: 'markdown',
  slug: 'workout-tracker-privacy-policy',
  locale: 'es',
  appName: 'Workout Tracker',
  title: 'Política de privacidad de Workout Tracker',
  summary:
    'Workout Tracker funciona por completo en tu dispositivo por defecto; solo si decides iniciar sesión con Google se guarda una copia de tus rutinas, tu racha y tus preferencias en la nube para poder sincronizarlas entre dispositivos. No mostramos anuncios, no usamos rastreadores de terceros y no vendemos datos.',
  lastUpdated: '2026-07-31',
  packageName: 'com.mytaller.workout_tracker',
  content: `## 1. Qué es esta app

Workout Tracker es una app para crear rutinas de ejercicio (una lista de ejercicios, cada uno con una duración), ejecutarlas con un temporizador general, guardarlas para más tarde, llevar una racha de uso diario con historial, celebrar cada rutina terminada con confeti y sonido, y desbloquear recompensas motivacionales. También ofrece 10 temas visuales seleccionables y funciona en español e inglés.

Iniciar sesión es **opcional**: la app es completamente funcional sin una cuenta. Su único propósito es sincronizar tus datos entre varios dispositivos.

## 2. Datos que recopilamos

### Si no inicias sesión

Todo se guarda únicamente en tu dispositivo (mediante el almacenamiento local de la app): tus rutinas guardadas, tu historial de racha, tu idioma, tu preferencia de sonido y tu tema visual. Nada de esto sale de tu teléfono.

### Si inicias sesión con Google

Usamos el inicio de sesión de Google (a través de nuestro backend en Supabase) para identificar tu cuenta y sincronizar los siguientes datos entre tus dispositivos:

- **Correo, identificador de cuenta y foto de perfil de Google** (origen: Google OAuth) — para identificar tu cuenta.
- **Rutinas guardadas**, ejercicios y duraciones (origen: escrito por ti) — para sincronizarlas entre dispositivos.
- **Historial de racha**, fechas de actividad (origen: generado por el uso) — para mantener tu racha entre dispositivos.
- **Contador de ejercicios válidos completados** (origen: generado por el uso) — para el progreso del sistema de recompensas.
- **Idioma, sonido y tema elegidos** (origen: escrito por ti) — para recordar tus preferencias.
- **Eventos de seguridad de tu cuenta de Google**, por ejemplo sesión revocada o cuenta deshabilitada (origen: Google RISC) — para cerrar tu sesión automáticamente si tu cuenta se ve comprometida.

No solicitamos ni recibimos tu contraseña de Google en ningún momento: la autenticación la gestiona Google directamente.

## 3. Lo que no hacemos

- No mostramos anuncios.
- No usamos analítica ni rastreo de terceros.
- No accedemos a cámara, micrófono ni contactos.
- No accedemos a tu ubicación.
- No vendemos ni alquilamos datos.
- No compartimos datos con fines publicitarios.

La app solicita permiso de **Internet** (para la sincronización opcional) y usa la función del sistema para mantener la pantalla encendida durante el conteo regresivo del temporizador; no requiere ningún otro permiso del dispositivo.

## 4. Cómo usamos los datos

- Sincronizar tus rutinas, racha, progreso y preferencias entre los dispositivos donde inicias sesión.
- Calcular tu racha de días activos y tus niveles de recompensa.
- Proteger tu cuenta: si Google nos notifica que tu sesión o cuenta fue comprometida, cerramos tu sesión en la app automáticamente.

No usamos tus datos para entrenar modelos de terceros ni para ningún fin distinto a los descritos arriba.

## 5. Terceros implicados

Dos proveedores procesan datos en nuestro nombre, únicamente para hacer funcionar la sincronización en la nube:

- **Google** (Google Sign-In / OAuth y Cross-Account Protection) gestiona el inicio de sesión y nos avisa de eventos de seguridad de tu cuenta. [policies.google.com/privacy](https://policies.google.com/privacy)
- **Supabase** aloja la base de datos donde se guarda la copia en la nube de tus rutinas, racha, progreso y preferencias, protegida con reglas de acceso por usuario (Row Level Security), de modo que solo tu cuenta puede leer o escribir tus propios datos. [supabase.com/privacy](https://supabase.com/privacy)

Ninguno de los dos utiliza tus datos de la app para publicidad.

## 6. Almacenamiento y seguridad

Los datos sincronizados viajan cifrados en tránsito (HTTPS) y se almacenan en tablas con Row Level Security activada, de forma que cada cuenta solo puede acceder a sus propios registros. Los eventos de seguridad de Google se procesan de forma automatizada exclusivamente para detectar cuentas comprometidas; no se usan para ningún otro propósito.

## 7. Conservación y borrado

Si nunca inicias sesión, tus datos existen solo en tu dispositivo y desaparecen si desinstalas la app o borras sus datos desde los ajustes del sistema.

Si iniciaste sesión, conservamos tu copia en la nube mientras tu cuenta exista. Puedes eliminar tu cuenta y todos los datos asociados (rutinas, historial de racha, progreso y preferencias) en cualquier momento, tú mismo, desde **Ajustes → Cuenta → Eliminar cuenta** dentro de la propia app: la eliminación es inmediata, tanto en nuestros servidores como en tu dispositivo, sin necesidad de escribirnos. Instrucciones detalladas, con capturas de pantalla, en nuestra [página de eliminación de datos](/es/legal/workout-tracker-data-deletion). También puedes solicitarlo por correo al contacto de abajo.

## 8. Menores de edad

Workout Tracker no está dirigida a niños menores de 13 años y no recopilamos a sabiendas datos de menores de esa edad. Si crees que un menor nos ha proporcionado datos personales, contáctanos para eliminarlos.

## 9. Cambios a esta política

Si actualizamos esta política, cambiaremos la fecha de "última actualización" en la parte superior de esta página. Si el cambio es significativo, lo indicaremos también dentro de la app.

## 10. Contacto

Para preguntas sobre esta política, o para solicitar la eliminación de tus datos, escribe a [lorcopotia@gmail.com](mailto:lorcopotia@gmail.com).`,
};

export const workoutTrackerPrivacyEn: LegalDoc = {
  kind: 'markdown',
  slug: 'workout-tracker-privacy-policy',
  locale: 'en',
  appName: 'Workout Tracker',
  title: 'Workout Tracker Privacy Policy',
  summary:
    'Workout Tracker works entirely on your device by default; only if you choose to sign in with Google do we keep a copy of your routines, streak, and preferences in the cloud so they can sync across devices. We show no ads, use no third-party trackers, and never sell data.',
  lastUpdated: '2026-07-31',
  packageName: 'com.mytaller.workout_tracker',
  content: `## 1. What this app is

Workout Tracker is an app for building exercise routines (a list of exercises, each with a duration), running them with an overall countdown timer, saving them for later, tracking a daily-use streak with history, celebrating a finished routine with confetti and sound, and unlocking motivational rewards. It also offers 10 selectable visual themes and works in both English and Spanish.

Signing in is **optional**: the app is fully usable without an account. Its only purpose is to sync your data across multiple devices.

## 2. Data we collect

### If you don't sign in

Everything is stored only on your device (via the app's local storage): your saved routines, your streak history, your language, your sound preference, and your visual theme. None of this leaves your phone.

### If you sign in with Google

We use Google Sign-In (through our Supabase backend) to identify your account and sync the following data across your devices:

- **Google email, account ID, and profile photo** (source: Google OAuth) — to identify your account.
- **Saved routines**, exercises and durations (source: entered by you) — to sync across devices.
- **Streak history**, activity dates (source: generated by use) — to keep your streak across devices.
- **Lifetime valid-exercises-completed counter** (source: generated by use) — for rewards system progress.
- **Chosen language, sound setting, and theme** (source: entered by you) — to remember your preferences.
- **Google account security events**, e.g. session revoked or account disabled (source: Google RISC) — to automatically sign you out if your Google account is compromised.

We never request or receive your Google password: authentication is handled directly by Google.

## 3. What we don't do

- No advertising.
- No third-party analytics or tracking.
- No access to camera, microphone, or contacts.
- No access to your location.
- We never sell or rent data.
- No sharing data for advertising purposes.

The app requests **Internet** permission (for optional sync) and uses the system's keep-screen-awake feature during the countdown timer; it requires no other device permission.

## 4. How we use data

- Sync your routines, streak, progress, and preferences across the devices where you sign in.
- Calculate your active-day streak and your reward tiers.
- Protect your account: if Google notifies us your session or account was compromised, we sign you out of the app automatically.

We do not use your data to train third-party models or for any purpose other than those described above.

## 5. Third parties involved

Two providers process data on our behalf, solely to make cloud sync work:

- **Google** (Google Sign-In / OAuth and Cross-Account Protection) handles sign-in and notifies us of security events on your account. [policies.google.com/privacy](https://policies.google.com/privacy)
- **Supabase** hosts the database that stores the cloud copy of your routines, streak, progress, and preferences, protected with per-user access rules (Row Level Security), so only your account can read or write your own data. [supabase.com/privacy](https://supabase.com/privacy)

Neither uses your app data for advertising.

## 6. Storage & security

Synced data travels encrypted in transit (HTTPS) and is stored in tables with Row Level Security enabled, so each account can only access its own records. Google security events are processed automatically solely to detect compromised accounts; they are not used for any other purpose.

## 7. Retention & deletion

If you never sign in, your data exists only on your device and disappears if you uninstall the app or clear its data from system settings.

If you signed in, we keep your cloud copy for as long as your account exists. You can delete your account and all associated data (routines, streak history, progress, and preferences) yourself, at any time, from **Settings → Account → Delete account** inside the app itself: deletion is immediate, both on our servers and on your device, with no need to email us. Step-by-step instructions with screenshots are on our [data deletion page](/en/legal/workout-tracker-data-deletion). You can also request it by emailing the contact address below.

## 8. Children's privacy

Workout Tracker is not directed at children under 13, and we do not knowingly collect data from anyone under that age. If you believe a child has provided us with personal data, please contact us so we can delete it.

## 9. Changes to this policy

If we update this policy, we will change the "last updated" date at the top of this page. If the change is significant, we will also flag it inside the app.

## 10. Contact

For questions about this policy, or to request deletion of your data, write to [lorcopotia@gmail.com](mailto:lorcopotia@gmail.com).`,
};
