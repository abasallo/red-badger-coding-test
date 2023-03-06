import { Coordinate } from '../model/coordinate'
import { isEdge, isOverTheEdge, markAsEdge } from './edge.logic'

describe('Edge logic', () => {
  describe('isEdge', () => {
    const coordinates = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 }
    ]

    const results = [false, false, false, true]

    for (const [index, coordinate] of coordinates.entries()) {
      test(`Expected result for ${JSON.stringify(coordinate)}`, () => {
        const edgeCoordinates: Coordinate[] = [{ x: 1, y: 1 }]
        const result = isEdge(coordinate, edgeCoordinates)
        expect(result).toEqual(results[index])
      })
    }
  })

  describe('markAsEdge', () => {
    test('Expected result', () => {
      markAsEdge({ x: 2, y: 2 })

      expect(isEdge({ x: 2, y: 2 })).toBeTruthy()
      expect(isEdge({ x: 0, y: 0 })).toBeFalsy()
    })
  })

  describe('isOverTheEdge', () => {
    const upperRight = { x: 1, y: 1 }

    const coordinates = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: 2 },
      { x: 3, y: 0 },
      { x: 1, y: -1 }
    ]

    const results = [false, false, false, false, true, true, true, true]

    for (const [index, coordinate] of coordinates.entries()) {
      test(`Expected result for ${JSON.stringify(coordinate)}`, () => {
        const result = isOverTheEdge(coordinate, upperRight)
        expect(result).toEqual(results[index])
      })
    }
  })
})
