import { Module } from "@nestjs/common";
import { EntreeSortieModuleBase } from "./base/entreeSortie.module.base";
import { EntreeSortieService } from "./entreeSortie.service";
import { EntreeSortieController } from "./entreeSortie.controller";
import { EntreeSortieResolver } from "./entreeSortie.resolver";

@Module({
  imports: [EntreeSortieModuleBase],
  controllers: [EntreeSortieController],
  providers: [EntreeSortieService, EntreeSortieResolver],
  exports: [EntreeSortieService],
})
export class EntreeSortieModule {}
