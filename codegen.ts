import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:54321/graphql/v1',
  documents: ['components/**/*.tsx', 'pages/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          UUID: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
