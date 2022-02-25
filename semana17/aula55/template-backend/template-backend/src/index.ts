import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { v4 } from "uuid"
import * as jwt from "jsonwebtoken";
import knex from "knex";


dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}

export class Authenticator {
  private static EXPIRES_IN = "10min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }
}

interface AuthenticationData {
  id: string;
}