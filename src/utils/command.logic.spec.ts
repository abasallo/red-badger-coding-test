import { Instruction } from '../model/instruction.enum'
import { Position } from '../model/position'
import { Coordinate } from '../model/coordinate'
import { Command } from '../model/command.interface'
import { Orientation } from '../model/orientation.enum'

import { executeCommand } from './command.logic'
import { markAsEdge } from './edge.logic'

let isOverTheEdgeResult = true
jest.mock('./instruction.logic', () => ({
  executeInstruction: () => ({
    coordinate: { x: 1, y: 1 },
    orientation: Orientation.N
  })
}))
jest.mock('./edge.logic', () => ({
  isOverTheEdge: () => isOverTheEdgeResult,
  isEdge: () => false,
  markAsEdge: jest.fn()
}))

const coordinate: Coordinate = {} as Coordinate
const position: Position = {
  coordinate,
  orientation: Orientation.N
} as Position
const upperRight: Coordinate = {} as Coordinate
const instructions = [Instruction.F, Instruction.L, Instruction.R] as Instruction[]
const command = {
  origin: position,
  instructions
} as Command

describe('executeCommand', () => {
  test('isOverTheEdge is true', () => {
    const result: string = executeCommand(command, upperRight)
    expect(markAsEdge).toHaveBeenCalledWith(coordinate)
    expect(result.includes('LOST')).toBeTruthy()
  })

  test('isOverTheEdge is false', () => {
    isOverTheEdgeResult = false
    const result: string = executeCommand(command, upperRight)
    expect(result.includes('LOST')).toBeFalsy()
    expect(result.includes('1 1 N')).toBeTruthy()
  })
})
