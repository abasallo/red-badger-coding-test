import { Position } from '../model/position'
import { Orientation } from '../model/orientation.enum'

import { executeForwardStep, executeLeftTurn, executeRightTurn } from './movement.logic'
import { Coordinate } from '../model/coordinate'

const positions: Position[] = [
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.N },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.S },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.E },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.W }
]

const turnLeftResults: Position[] = [
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.W },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.E },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.N },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.S }
]

const turnRightResults: Position[] = [
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.E },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.W },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.S },
  { coordinate: { x: 1, y: 1 }, orientation: Orientation.N }
]

const forwardStepResults: Position[] = [
  { coordinate: { x: 1, y: 2 }, orientation: Orientation.N },
  { coordinate: { x: 1, y: 0 }, orientation: Orientation.S },
  { coordinate: { x: 2, y: 1 }, orientation: Orientation.E },
  { coordinate: { x: 0, y: 1 }, orientation: Orientation.W }
]

describe('Movement logic', () => {
  describe('executeLeftTurn', () => {
    for (const [index, position] of positions.entries()) {
      test(`Expected result for ${JSON.stringify(position)}`, () => expect(executeLeftTurn(position)).toEqual(turnLeftResults[index]))
    }

    test('Unknown initial orientation', () => {
      try {
        executeLeftTurn({ coordinate: {} as Coordinate, orientation: 'Unknown' as Orientation })
      } catch (e) {
        expect(e).toBeDefined()
      }
    })
  })

  describe('executeRightTurn', () => {
    for (const [index, position] of positions.entries()) {
      test(`Expected result for ${JSON.stringify(position)}`, () => expect(executeRightTurn(position)).toEqual(turnRightResults[index]))
    }

    test('Unknown initial orientation', () => {
      try {
        executeLeftTurn({ coordinate: {} as Coordinate, orientation: 'Unknown' as Orientation })
      } catch (e) {
        expect(e).toBeDefined()
      }
    })
  })

  describe('executeForwardStep', () => {
    for (const [index, position] of positions.entries()) {
      test(`Expected result for ${JSON.stringify(position)}`, () => expect(executeForwardStep(position)).toEqual(forwardStepResults[index]))
    }

    test('Unknown initial orientation', () => {
      try {
        executeLeftTurn({ coordinate: {} as Coordinate, orientation: 'Unknown' as Orientation })
      } catch (e) {
        expect(e).toBeDefined()
      }
    })
  })
})
