import { Request, Response } from 'express'
import { success,error } from '../util/response.util'
const users = [
    {
        id: 1,
        firstName: 'yang',
        lastName: 'weijiang',
        email: 'sfqsdg@sfd.com'
    },
    {
        id: 2,
        firstName: 'zhao',
        lastName: 'yang',
        email: 'tyutudg@sfd.com'
    },

    {
        id: 3,
        firstName: 'liu',
        lastName: 'gang',
        email: 'rtthgnghg@sfd.com'
    }
]

export const getAll = (req: Request, res: Response) => {
    success(users, res);
};

export const getById = (req: Request, res: Response) => {
    
    const id = req.params.id;
    const [user] = users.filter(el => el.id === +id)
    if(!user)error(404,'user is not found!',res);
  res.send(user);
};

export const add = (req: Request, res: Response) => {
    res.send('On ajoute des users ici!')
}

export const edit = (req: Request, res: Response) => {
  res.send("On edit un user ici!");
};