import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://quelys-nantes.fr',
  integrations: [tailwind()],
});
