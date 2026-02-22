import postgres from 'postgres'

export const sql = postgres(process.env.DATABASE_URL!, {
  max: 20,
  prepare: false,
  // ssl:
  //   process.env.NODE_ENV === 'production'
  //     ? {
  //         ca: process.env.POSTGRES_CA,
  //         rejectUnauthorized: true,
  //       }
  //     : false,
  transform: { ...postgres.camel, undefined: null },
  idle_timeout: 60 * 10, // 10 minutes
})
