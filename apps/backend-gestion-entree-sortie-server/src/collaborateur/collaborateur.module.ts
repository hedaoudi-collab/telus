import { Module } from "@nestjs/common";
import { CollaborateurModuleBase } from "./base/collaborateur.module.base";
import { CollaborateurService } from "./collaborateur.service";
import { CollaborateurController } from "./collaborateur.controller";
import { CollaborateurResolver } from "./collaborateur.resolver";

@Module({
  imports: [CollaborateurModuleBase],
  controllers: [CollaborateurController],
  providers: [CollaborateurService, CollaborateurResolver],
  exports: [CollaborateurService],
})
export class CollaborateurModule {}
