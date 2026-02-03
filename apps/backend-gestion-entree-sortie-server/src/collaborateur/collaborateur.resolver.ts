import * as graphql from "@nestjs/graphql";
import { CollaborateurResolverBase } from "./base/collaborateur.resolver.base";
import { Collaborateur } from "./base/Collaborateur";
import { CollaborateurService } from "./collaborateur.service";

@graphql.Resolver(() => Collaborateur)
export class CollaborateurResolver extends CollaborateurResolverBase {
  constructor(protected readonly service: CollaborateurService) {
    super(service);
  }
}
