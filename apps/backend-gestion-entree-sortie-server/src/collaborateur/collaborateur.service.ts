import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaborateurServiceBase } from "./base/collaborateur.service.base";

@Injectable()
export class CollaborateurService extends CollaborateurServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
