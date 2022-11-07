import { describe, test, expect } from 'vitest'

describe('testing .env arguments', () => {
  test('testing if okay', () => {
    const result = import.meta.env.VITE_APP_URL;
    console.log('==========')
    console.log(result);
    console.log('==========')
    expect('hello_genos', result);
  })
})
