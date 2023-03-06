import { Position } from './position'
import { Instruction } from './instruction.enum'

export interface Command {
  origin: Position
  instructions: Instruction[]
}
