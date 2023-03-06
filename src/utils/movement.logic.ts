import { Position } from '../model/position'
import { Orientation } from '../model/orientation.enum'

export const executeLeftTurn = (initial: Position): Position => {
  const final: Position = {
    coordinate: initial.coordinate,
    orientation: initial.orientation
  }
  switch (initial.orientation) {
    case Orientation.N:
      final.orientation = Orientation.W
      break
    case Orientation.S:
      final.orientation = Orientation.E
      break
    case Orientation.E:
      final.orientation = Orientation.N
      break
    case Orientation.W:
      final.orientation = Orientation.S
      break
    default:
      throw new Error(`Unknown orientation: ${initial.orientation}.`)
  }
  return final
}

export const executeRightTurn = (initial: Position): Position => {
  const final: Position = {
    coordinate: initial.coordinate,
    orientation: initial.orientation
  }
  switch (initial.orientation) {
    case Orientation.N:
      final.orientation = Orientation.E
      break
    case Orientation.S:
      final.orientation = Orientation.W
      break
    case Orientation.E:
      final.orientation = Orientation.S
      break
    case Orientation.W:
      final.orientation = Orientation.N
      break
    default:
      throw new Error(`Unknown orientation: ${initial.orientation}.`)
  }
  return final
}

export const executeForwardStep = (initial: Position): Position => {
  const final: Position = {
    coordinate: initial.coordinate,
    orientation: initial.orientation
  }
  switch (initial.orientation) {
    case Orientation.N:
      final.coordinate = {
        x: initial.coordinate.x,
        y: initial.coordinate.y + 1
      }
      break
    case Orientation.S:
      final.coordinate = {
        x: initial.coordinate.x,
        y: initial.coordinate.y - 1
      }
      break
    case Orientation.E:
      final.coordinate = {
        x: initial.coordinate.x + 1,
        y: initial.coordinate.y
      }
      break
    case Orientation.W:
      final.coordinate = {
        x: initial.coordinate.x - 1,
        y: initial.coordinate.y
      }
      break
    default:
      throw new Error(`Unknown orientation: ${initial.orientation}.`)
  }
  return final
}
