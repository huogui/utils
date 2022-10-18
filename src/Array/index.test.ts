import { expect, it } from 'vitest'
import { unique } from './index'
it('unique', () => {
  expect(unique([1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
