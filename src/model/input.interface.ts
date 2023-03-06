import { Coordinate } from './coordinate'
import { Command } from './command.interface'

export interface Input {
  upperRight: Coordinate
  commands: Command[]
}
