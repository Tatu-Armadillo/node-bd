import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    let users = await User.findAll({
        where: {
            [Op.or]: [
                {age: 20},
                {name: 'Julia'}
            ]
        }
        // where: {age: 20},
        // attributes: ['name', 'age']
    });
    res.render('pages/home', {
        users
    });

};

