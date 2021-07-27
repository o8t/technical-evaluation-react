import store from "../store/store";
import LocalStorageProvider from '../storage/LocalStorageProvider';
import { Clown, NewClown } from "../store/reducers";

async function registerClown(newClown: NewClown): Promise<void> {
  /* Save to storage provider */
  let clown: Clown;
  try {
    clown = await LocalStorageProvider.registerClown(newClown);

    /* Update state */
    store.dispatch({ type: 'REGISTER', payload: clown });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to save clown registration!");
  }
}

async function deleteClown(clownId: string): Promise<void> {
  try {
    /* Remove clown from storage */
    await LocalStorageProvider.removeClown(clownId);

    /* Update state */
    store.dispatch({ type: 'DELETE', payload: { id: clownId } });
  } catch (e) {
    console.error("Failed to delete clown registration!");
    console.error(e);
  }
}

async function loadClownsFromStorage() {
  const clowns = await LocalStorageProvider.getClowns();
  store.dispatch({ type: 'LOAD_CLOWNS', payload: clowns });
}

export {registerClown, deleteClown, loadClownsFromStorage}