import {Request, Response} from 'express'

export function ping (req: Request, res: Response): Response{
    return res.json('pong')
}