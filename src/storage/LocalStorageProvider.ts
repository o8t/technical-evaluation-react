import { StorageProvider } from "./StorageProvider";
import { NewClown, Clown } from "../store/reducers";
import { v4 } from 'uuid';

class LocalStorageProvider implements StorageProvider {
  async registerClown(newClown: NewClown): Promise<Clown> {

    /* Generate ID and bulid clown */
    const id: string = v4().toString();
    const clown: Clown = {
      id,
      ...newClown
    }

    /* Pull list and add */
    const clowns = await this.getClowns();
    clowns[id] = clown;

    /* Save back to store */
    window.localStorage.setItem("clowns", JSON.stringify(clowns));
    return clown;
  }

  async removeClown(clownId: string): Promise<void> {
    /* Pull list and add */
    const clowns = await this.getClowns();
    delete clowns[clownId];

    /* Save back to store */
    window.localStorage.setItem("clowns", JSON.stringify(clowns));
  }

  async getClowns(): Promise<{ [key: string]: Clown}> {
    let clowns = JSON.parse(window.localStorage.getItem("clowns") as string) as { [key: string]: Clown } || null;
    if (!clowns) {
      return {};
    } else {
      return clowns;
    }
  }
}

export default new LocalStorageProvider();