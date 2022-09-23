declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT: string
      JWT_SECRET: string
      JWT_EXPIRE: string
    }
  }
}

// not sure if this is working or not !
