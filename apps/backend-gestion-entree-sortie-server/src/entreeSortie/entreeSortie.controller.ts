import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntreeSortieService } from "./entreeSortie.service";
import { EntreeSortieControllerBase } from "./base/entreeSortie.controller.base";

@swagger.ApiTags("entreeSorties")
@common.Controller("entreeSorties")
export class EntreeSortieController extends EntreeSortieControllerBase {
  constructor(protected readonly service: EntreeSortieService) {
    super(service);
  }
}
