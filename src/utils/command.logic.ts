import { Position } from '../model/position'
import { Instruction } from '../model/instruction.enum'
import { Command } from '../model/command.interface'
import { Coordinate } from '../model/coordinate'

import { isEdge, isOverTheEdge, markAsEdge } from './edge.logic'
import { executeInstruction } from './instruction.logic'

export const executeCommand = (command: Command, upperRight: Coordinate): string => {
  let actual: Position = command.origin
  const instructions: Instruction[] = command.instructions
  for (const instruction of instructions) {
    const next: Position = executeInstruction(actual, instruction)
    if (isOverTheEdge(next.coordinate, upperRight)) {
      if (!isEdge(actual.coordinate)) {
        markAsEdge(actual.coordinate)
        return `${actual.coordinate.x} ${actual.coordinate.y} ${actual.orientation} LOST`
      }
    } else {
      actual = next
    }
  }
  return `${actual.coordinate.x} ${actual.coordinate.y} ${actual.orientation}`
}
