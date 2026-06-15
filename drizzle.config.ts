import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql', // or 'mysql' | 'sqlite'
  dbCredentials: {
    // This is your connection "path" / string
    url: process.env.DATABASE_URL!,
  },
  schema: './src/database/drizzle/schema',
});
