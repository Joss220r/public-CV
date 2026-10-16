# CV y portafolio de Jose Ayala

Sitio profesional construido con Next.js, React, TypeScript, Tailwind CSS y pnpm. El proyecto genera una imagen autónoma de producción con Docker y publica el servicio directamente en el puerto 80 del LXC.

## Requisitos

Para desarrollo local:

- Node.js 22.
- pnpm 12.14.0.

Para publicación:

- Docker Engine.
- Docker Compose.
- La red externa de Docker `red-cv` creada en el LXC.

## Desarrollo local

Instalá las dependencias:

```bash
pnpm install --frozen-lockfile
```

Iniciá el servidor de desarrollo:

```bash
pnpm dev
```

Abrí `http://localhost:3000`. Para comprobar tipos y compilación de producción:

```bash
pnpm typecheck
pnpm build
```

## Actualizar el contenido

Todos los datos personales y profesionales están centralizados en:

```text
src/content/cv.ts
```

El archivo utiliza el tipo `CvData`, definido en `src/types/cv.ts`. Ahí podés completar el perfil, disponibilidad, experiencia laboral, estudios, habilidades, proyectos y enlaces de contacto.

Los campos opcionales vacíos no se muestran. Las secciones de experiencia, proyectos y contacto aparecen únicamente cuando contienen datos válidos.

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

## Primera publicación en el LXC

Creá una vez la red compartida requerida por la infraestructura:

```bash
docker network create red-cv
```

Desde la carpeta del proyecto, construí e iniciá el servicio:

```bash
docker compose up -d --build
```

Comprobá el estado:

```bash
docker compose ps
curl -I http://127.0.0.1
```

El sitio queda disponible dentro de la red en:

```text
http://IP_DEL_LXC:80
```

El hostname público de Cloudflare debe apuntar mediante HTTP a esa dirección y puerto.

## Actualizar el sitio

Después de actualizar los archivos del proyecto, validá y reconstruí:

```bash
pnpm typecheck
pnpm build
docker compose up -d --build
```

## Detener el sitio

```bash
docker compose down
```

## Estructura principal

```text
app/
  layout.tsx          Metadatos y estructura raíz
  page.tsx            Página principal
src/
  components/         Componentes reutilizables
  content/cv.ts       Contenido editable del CV
  types/cv.ts         Tipos del contenido
  App.tsx             Composición de la página
  styles.css          Tema, utilidades y movimiento
Dockerfile            Construcción standalone de Next.js
docker-compose.yml    Servicio en el puerto 80
next.config.ts        Configuración de producción
```
