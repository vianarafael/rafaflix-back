import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const index = async (request: Request, response: Response) => {
  response.json({ message: "Welcome to Rafaflix"})
}

export const login = async (request: Request, response: Response) => {

    const { email, password } = request.body;

    const user = await getRepository(User).find({
        where: {
            email
        }
    })

    if (user.length === 1) {
        if (await bcrypt.compare(password, user[0].password)) {
            const token = jwt.sign({ id: user[0].id }, process.env.APP_SECRET, {
                expiresIn: '1d'
            })

            const data = {
                id: user[0].id,
                name: user[0].name,
                email: user[0].email,
                token
            }

            return response.json(data)
        } else {
            return response.status(404).json({ message: 'user not found'})
        }
    } else {
        return response.status(404).json({ message: 'user not found'})
    }
}

export const getUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).findOne(id);
  return response.json(user);
}

export const signUp = async (request: Request, response: Response) => {

  try {
   const { name, email, password } = request.body;
    // number of rounds?
    const passwordHash = await bcrypt.hash(password, 8);

    const user = await getRepository(User).save({
        name,
        email,
        password: passwordHash
    })

    return response.json(user);
  } catch (err) {
    response.json(
      {
        version: 1,
        message: err,
        db: User
      })
  }


}
