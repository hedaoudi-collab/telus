import { EntreeSortieWhereInput } from "./EntreeSortieWhereInput";
import { EntreeSortieOrderByInput } from "./EntreeSortieOrderByInput";

export type EntreeSortieFindManyArgs = {
  where?: EntreeSortieWhereInput;
  orderBy?: Array<EntreeSortieOrderByInput>;
  skip?: number;
  take?: number;
};
