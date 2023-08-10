import { Response } from 'express'
export const success = (datas: any, res: Response) => {
    res.status(200).send(
        {
            status: 200,
            date: new Date(),
            datas
        }

    )
}

export const error = (statusCode:number,message: string, res: Response) => {
    res.status(statusCode).send({
        status: statusCode,
        date: new Date(),
        success:'ko',
        message,

    })
}