import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntreeSortieServiceBase } from "./base/entreeSortie.service.base";

@Injectable()
export class EntreeSortieService extends EntreeSortieServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
