import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5vkw73un',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk9HU0PZH74R6XBDrByag0wN3XjONNsW9hMRHFzCuLuLMpSvKryztxv305I5yYhqjKMJTDsgALhJaPq88CnAh1FiIUIq3zrrGDsWtNEiyX1HnLh8PSztDYaT3bFMHPwMPreIiRAyDQZNwaTHGm39c6Ehg2s2Vl9gW4cYrK0rq0jD2Z6n2kEY',
  useCdn: false,
})
