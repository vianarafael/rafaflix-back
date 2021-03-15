import { getRepository } from "typeorm";
import { NextFunction, Request, response, Response } from "express";
import { Movies } from "../entity/Movies";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const getMovies = async (request: Request, response: Response) => {
  const { user_id } = request.params;

  const movies = await getRepository(Movies)
    .find({
      where: {
      user_id
    }
    })

  response.json(movies);
}

export const addMovie = async ( request: Request, response: Response) => {
  const { user_id, movie_id } = request.body

  const movie = await getRepository(Movies).save({
    user_id,
    movie_id
  })

  response.json(movie);
}
