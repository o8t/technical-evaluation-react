import { NewClown, Clown } from "../store/reducers";

export interface StorageProvider {
  registerClown: (clown: NewClown) => Promise<Clown>;
  removeClown: (clownId: string) => Promise<void>;
}