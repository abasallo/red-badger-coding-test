import axios from 'axios'
import http from 'http'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import app from '../src/app'

const TEST_SERVER_PORT = 4001

const testData = {
  upperRight: { x: 5, y: 3 },
  commands: [
    {
      origin: {
        coordinate: { x: 1, y: 1 },
        orientation: 'E'
      },
      instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
    },
    {
      origin: {
        coordinate: { x: 3, y: 2 },
        orientation: 'N'
      },
      instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L']
    },
    {
      origin: {
        coordinate: { x: 0, y: 3 },
        orientation: 'W'
      },
      instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L']
    }
  ]
}

let server: http.Server
beforeAll(async () => {
  server = app.listen({ port: TEST_SERVER_PORT }, () => console.log(`Test Server initialised on port: ${TEST_SERVER_PORT}`))
})

afterAll(() => {
  server.close()
})

describe('Server E2E tests', () => {
  describe('Health Check E2E tests', () => {
    test('Expected response for Health Check', async () => {
      const { status, statusText, data } = await axios({
        method: 'get',
        url: `http://localhost:${TEST_SERVER_PORT}/`
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })
  })

  describe('Robots E2E tests', () => {
    test('Expected results for provided sample data', async () => {
      const { status, statusText, data } = await axios({
        method: 'get',
        url: `http://localhost:${TEST_SERVER_PORT}/robots`,
        data: testData
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })

    test('Wrong format payload', async () => {
      try {
        await axios({
          method: 'get',
          url: `http://localhost:${TEST_SERVER_PORT}/robots`,
          data: { id: 'wrong' }
        })
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
  })
})
