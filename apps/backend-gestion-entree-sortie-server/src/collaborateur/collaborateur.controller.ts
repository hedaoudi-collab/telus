import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollaborateurService } from "./collaborateur.service";
import { CollaborateurControllerBase } from "./base/collaborateur.controller.base";

@swagger.ApiTags("collaborateurs")
@common.Controller("collaborateurs")
export class CollaborateurController extends CollaborateurControllerBase {
  constructor(protected readonly service: CollaborateurService) {
    super(service);
  }
}
