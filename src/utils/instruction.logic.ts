import { Position } from '../model/position'
import { Instruction } from '../model/instruction.enum'

import { executeForwardStep, executeLeftTurn, executeRightTurn } from './movement.logic'

export const executeInstruction = (initial: Position, instruction: Instruction): Position => {
  switch (instruction) {
    case Instruction.L:
      return executeLeftTurn(initial)
    case Instruction.R:
      return executeRightTurn(initial)
    case Instruction.F:
      return executeForwardStep(initial)
    default:
      throw new Error(`Unknown instruction: ${instruction}.`)
  }
}
