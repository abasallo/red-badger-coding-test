import { Coordinate } from '../model/coordinate'

export const edge: Coordinate[] = []

export const isEdge = (coordinate: Coordinate, edgeCoordinates: Coordinate[] = edge): boolean =>
  edgeCoordinates.some((it) => coordinate.x === it.x && coordinate.y === it.y)

export const markAsEdge = (coordinate: Coordinate): number => edge.push(coordinate)

export const isOverTheEdge = (fall: Coordinate, upperRight: Coordinate): boolean =>
  fall.x > upperRight.x || fall.y > upperRight.y || fall.x < 0 || fall.y < 0
