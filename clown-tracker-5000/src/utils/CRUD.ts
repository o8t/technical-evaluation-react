import { ClownFormDataType } from "../types";
const STORAGE_UPDATE_EVENT = 'StorageUpdated';

/*
 Local storage CRUD operations, overloaded to dispatch custom event
 indicating storage has been altered, and state should be refetched
 from local storage
*/

const createClown = (clownData: ClownFormDataType) => {
  localStorage.setItem(clownData.id, JSON.stringify(clownData))
  window.dispatchEvent(new Event(STORAGE_UPDATE_EVENT));
};

const updateClown = (clownData: ClownFormDataType) => {
  localStorage.setItem(clownData.id, JSON.stringify(clownData))
  window.dispatchEvent(new Event(STORAGE_UPDATE_EVENT));
};

const deleteClown = (id: string) => {
  localStorage.removeItem(id)
  window.dispatchEvent(new Event(STORAGE_UPDATE_EVENT));
};

// if local storage is empty, fill with dummy clowns
const setupStorageWithDummyClowns = async () => {
  if(localStorage.length !== 0) return;

  console.log("setupStorageWithDummyClowns");
  let response = await fetch("DummyClownData.json");
  let parsedJson = await response.json();

  let clown1 = await fetch("clown_1.jpg");
  let clown2 = await fetch("clown_2.jpg");
  let clown3 = await fetch("clown_3.jpg");
  let clown4 = await fetch("clown_4.jpg");
  let clown1Blob = await clown1.blob();
  let clown2Blob = await clown2.blob();
  let clown3Blob = await clown3.blob();
  let clown4Blob = await clown4.blob();

  [clown1Blob, clown2Blob, clown3Blob, clown4Blob].forEach((blob, i) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      let b64Data = reader.result;

      let clown = {
        id: parsedJson[i].id,
        name: parsedJson[i].name,
        posse: parsedJson[i].posse,
        age: parsedJson[i].age,
        image: '' + b64Data,
      };
      createClown(clown);
    }
    reader.readAsDataURL(blob);
  });
};

export { createClown, updateClown, deleteClown, setupStorageWithDummyClowns };
