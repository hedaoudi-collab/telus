import * as graphql from "@nestjs/graphql";
import { EntreeSortieResolverBase } from "./base/entreeSortie.resolver.base";
import { EntreeSortie } from "./base/EntreeSortie";
import { EntreeSortieService } from "./entreeSortie.service";

@graphql.Resolver(() => EntreeSortie)
export class EntreeSortieResolver extends EntreeSortieResolverBase {
  constructor(protected readonly service: EntreeSortieService) {
    super(service);
  }
}
