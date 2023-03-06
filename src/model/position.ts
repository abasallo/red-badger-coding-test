import { Coordinate } from './coordinate'
import { Orientation } from './orientation.enum'

export interface Position {
  coordinate: Coordinate
  orientation: Orientation
}
