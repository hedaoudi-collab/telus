import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CollaborateurController } from "../collaborateur.controller";
import { CollaborateurService } from "../collaborateur.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateDepart: new Date(),
  dateEmbauche: new Date(),
  dateEntreePoste: new Date(),
  departement: "exampleDepartement",
  equipeNPlusUn: "exampleEquipeNPlusUn",
  id: "exampleId",
  mailProfessionnel: "exampleMailProfessionnel",
  matriculePaie: "exampleMatriculePaie",
  nom: "exampleNom",
  numeroTel: "exampleNumeroTel",
  poste: "examplePoste",
  prenom: "examplePrenom",
  service: "exampleService",
  siteProduction: "exampleSiteProduction",
  teletravail: "true",
  updatedAt: new Date(),
  wdId: "exampleWdId",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateDepart: new Date(),
  dateEmbauche: new Date(),
  dateEntreePoste: new Date(),
  departement: "exampleDepartement",
  equipeNPlusUn: "exampleEquipeNPlusUn",
  id: "exampleId",
  mailProfessionnel: "exampleMailProfessionnel",
  matriculePaie: "exampleMatriculePaie",
  nom: "exampleNom",
  numeroTel: "exampleNumeroTel",
  poste: "examplePoste",
  prenom: "examplePrenom",
  service: "exampleService",
  siteProduction: "exampleSiteProduction",
  teletravail: "true",
  updatedAt: new Date(),
  wdId: "exampleWdId",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateDepart: new Date(),
    dateEmbauche: new Date(),
    dateEntreePoste: new Date(),
    departement: "exampleDepartement",
    equipeNPlusUn: "exampleEquipeNPlusUn",
    id: "exampleId",
    mailProfessionnel: "exampleMailProfessionnel",
    matriculePaie: "exampleMatriculePaie",
    nom: "exampleNom",
    numeroTel: "exampleNumeroTel",
    poste: "examplePoste",
    prenom: "examplePrenom",
    service: "exampleService",
    siteProduction: "exampleSiteProduction",
    teletravail: "true",
    updatedAt: new Date(),
    wdId: "exampleWdId",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateDepart: new Date(),
  dateEmbauche: new Date(),
  dateEntreePoste: new Date(),
  departement: "exampleDepartement",
  equipeNPlusUn: "exampleEquipeNPlusUn",
  id: "exampleId",
  mailProfessionnel: "exampleMailProfessionnel",
  matriculePaie: "exampleMatriculePaie",
  nom: "exampleNom",
  numeroTel: "exampleNumeroTel",
  poste: "examplePoste",
  prenom: "examplePrenom",
  service: "exampleService",
  siteProduction: "exampleSiteProduction",
  teletravail: "true",
  updatedAt: new Date(),
  wdId: "exampleWdId",
};

const service = {
  createCollaborateur() {
    return CREATE_RESULT;
  },
  collaborateurs: () => FIND_MANY_RESULT,
  collaborateur: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Collaborateur", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CollaborateurService,
          useValue: service,
        },
      ],
      controllers: [CollaborateurController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /collaborateurs", async () => {
    await request(app.getHttpServer())
      .post("/collaborateurs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDepart: CREATE_RESULT.dateDepart.toISOString(),
        dateEmbauche: CREATE_RESULT.dateEmbauche.toISOString(),
        dateEntreePoste: CREATE_RESULT.dateEntreePoste.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /collaborateurs", async () => {
    await request(app.getHttpServer())
      .get("/collaborateurs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateDepart: FIND_MANY_RESULT[0].dateDepart.toISOString(),
          dateEmbauche: FIND_MANY_RESULT[0].dateEmbauche.toISOString(),
          dateEntreePoste: FIND_MANY_RESULT[0].dateEntreePoste.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /collaborateurs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/collaborateurs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /collaborateurs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/collaborateurs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateDepart: FIND_ONE_RESULT.dateDepart.toISOString(),
        dateEmbauche: FIND_ONE_RESULT.dateEmbauche.toISOString(),
        dateEntreePoste: FIND_ONE_RESULT.dateEntreePoste.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /collaborateurs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/collaborateurs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDepart: CREATE_RESULT.dateDepart.toISOString(),
        dateEmbauche: CREATE_RESULT.dateEmbauche.toISOString(),
        dateEntreePoste: CREATE_RESULT.dateEntreePoste.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/collaborateurs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
