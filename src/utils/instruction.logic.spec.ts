import { Instruction } from '../model/instruction.enum'
import { Position } from '../model/position'
import { Coordinate } from '../model/coordinate'
import { Orientation } from '../model/orientation.enum'

import { executeInstruction } from './instruction.logic'
import { executeForwardStep, executeLeftTurn, executeRightTurn } from './movement.logic'

jest.mock('./movement.logic')

const coordinate: Coordinate = {} as Coordinate
const position: Position = {
  coordinate,
  orientation: Orientation.N
} as Position

describe('executeInstruction', () => {
  test('Expected result for Left Turn', () => {
    executeInstruction(position, Instruction.L)
    expect(executeLeftTurn).toHaveBeenCalledWith(position)
  })

  test('Expected result for Right Turn', () => {
    executeInstruction(position, Instruction.R)
    expect(executeRightTurn).toHaveBeenCalledWith(position)
  })

  test('Expected result for Forward Step', () => {
    executeInstruction(position, Instruction.F)
    expect(executeForwardStep).toHaveBeenCalledWith(position)
  })

  test('Expected result for unknown Instruction', () => {
    try {
      executeInstruction(position, 'Unknown' as Instruction)
    } catch (e) {
      expect(e).toBeDefined()
    }
  })
})
