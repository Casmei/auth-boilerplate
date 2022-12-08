// todo: artigo
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: number;
      DB_DIALECT: 'postgres' | 'mysql';
      DB_HOST?: string;
      DB_PORT: number;
      DB_PASSWORD: string;
      DB_USERNAME: string;
      DB_DATABASE: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
