/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CLIENT_ID?: string;
  readonly CLIENT_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
