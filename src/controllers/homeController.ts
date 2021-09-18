import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    let filtro: string = req.query.name as string;
    if (!filtro) {
        filtro = '%%%';
    }
    let users = await User.findAll({
        where: {
            age: {
                [Op.gte]: filtro
            }
        },
        // offset: 2, // Pula de X em X
        limit: 10 // Limitar duas linhas
        // Decidir a ordenação e a sequencia da ordenação
        // order: [
        //     ['name', 'ASC'],
        //     ['age', 'DESC']
        // ]

    });
    res.render('pages/home', {
        users
    });

};

export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body
    if (name && age) {
        console.log('Primeiro if');
        const user = await User.create({
            name: name,
            age: age
        });
    } else if (name && !age) {
        console.log('segundo if');
        const user = await User.create({
            name: name,
        });
    }
    res.redirect('/');
}
