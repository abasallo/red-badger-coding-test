import HttpStatus from 'http-status-codes'
import { Request, Response, Router } from 'express'

import { errorWrapper } from '../errors'
import { cache, cacheMiddleware } from '../cache'

import { Input } from '../../model/input.interface'
import { Coordinate } from '../../model/coordinate'
import { Command } from '../../model/command.interface'
import { executeCommand } from '../../utils/command.logic'

const router = Router()

const composeOutput = (input: Input): string[] => {
  const upperRight: Coordinate = input.upperRight
  const commands: Command[] = input.commands
  return commands.map((command: Command) => executeCommand(command, upperRight))
}

router.get(
  '/',
  cacheMiddleware,
  errorWrapper(async (req: Request, res: Response) => {
    const input: Input = req.body
    if (!input) {
      res.status(HttpStatus.BAD_REQUEST)
    } else {
      const output: string[] = composeOutput(input)
      cache.set(JSON.stringify(input), output)
      res.send(output)
    }
  })
)

export default router
