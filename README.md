# CV y portafolio de Jose Ayala

Sitio profesional de una sola página construido con React, TypeScript, Vite y Tailwind CSS. Está preparado para ejecutarse de forma autónoma con Docker y Nginx en una máquina virtual, sin depender de una plataforma externa de hosting.

## Requisitos

Para desarrollo local:

- Node.js 22 o una versión LTS compatible.
- npm 10 o superior.

Para publicación:

- Docker Engine.
- Docker Compose v2.
- Una máquina virtual Linux con acceso al puerto que se vaya a publicar.

## Desarrollo local

Instalá las dependencias:

```bash
npm ci
```

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local del sitio. Para comprobar la compilación de producción:

```bash
npm run build
```

El resultado se genera en `dist/`.

## Actualizar el contenido

Todos los datos personales y profesionales están centralizados en:

```text
src/content/cv.ts
```

El archivo usa el tipo `CvData`, definido en `src/types/cv.ts`. Ahí podés completar:

- Perfil y disponibilidad.
- Experiencia laboral.
- Estudios.
- Grupos de habilidades.
- Proyectos.
- Correo, GitHub y LinkedIn.

Los campos opcionales vacíos no se muestran. Las secciones de experiencia, proyectos y contacto aparecen automáticamente cuando sus listas o enlaces contienen datos válidos.

Ejemplo de un proyecto:

```ts
projects: [
  {
    name: 'Nombre del proyecto',
    description: 'Descripción breve y verificable.',
    technologies: ['Swift', 'SwiftUI'],
    liveUrl: '',
    repositoryUrl: '',
  },
],
```

Después de modificar el contenido, ejecutá `npm run build` para confirmar que los tipos y la compilación sean correctos.

## Publicar en una máquina virtual de Proxmox

Creá una máquina virtual Linux, instalá Docker Engine y Docker Compose, y copiá esta carpeta completa a la máquina virtual. No es necesario instalar Node.js en el servidor porque la compilación se realiza dentro del contenedor.

Desde la carpeta del proyecto en la máquina virtual, creá el archivo de configuración local:

```bash
cp .env.example .env
```

El puerto predeterminado es `8080`. Podés cambiarlo en `.env`:

```dotenv
SITE_PORT=8080
```

Construí e iniciá el sitio:

```bash
docker compose up -d --build
```

Comprobá el estado del contenedor:

```bash
docker compose ps
```

El sitio quedará disponible en:

```text
http://IP_DE_LA_MAQUINA_VIRTUAL:8080
```

Si usás un firewall en la máquina virtual, habilitá únicamente el puerto configurado. Para exponer el sitio mediante un dominio y HTTPS, podés colocar tu proxy inverso habitual delante de este contenedor; el proyecto no necesita cambios para funcionar detrás de él.

## Actualizar el sitio publicado

1. Editá `src/content/cv.ts` o los componentes necesarios en tu copia de trabajo.
2. Ejecutá `npm run build` para validar los cambios.
3. Copiá los archivos actualizados a la carpeta del proyecto en la máquina virtual.
4. Reconstruí el contenedor:

```bash
docker compose up -d --build
```

Docker reemplazará el contenedor anterior y conservará la política de reinicio automático.

## Detener el sitio

```bash
docker compose down
```

## Estructura principal

```text
src/
  components/       Componentes reutilizables de la interfaz
  content/cv.ts     Contenido editable del CV
  types/cv.ts       Tipos del contenido
  App.tsx           Composición de la página
  styles.css        Tema, utilidades y movimiento
Dockerfile          Construcción y servidor de producción
docker-compose.yml  Ejecución del contenedor
nginx.conf          Configuración del servidor web
```
