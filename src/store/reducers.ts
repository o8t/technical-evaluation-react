import { Action } from "redux";

export interface NewClown {
  name: string;
  profilePicture: string;
}

export interface Clown extends NewClown {
  id: string;
}

export interface AppState {
  clowns: { [key: string]: Clown },
  clownsLoaded: boolean;
}

export interface LoadClowns extends Action {
  type: "LOAD_CLOWNS"
  payload: { [key: string]: Clown }
}

export interface RegisterClown extends Action {
  type: "REGISTER"
  payload: Clown
}

export interface DeleteClown extends Action {
  type: "DELETE",
  payload: { id: string }
}

export type AppAction = RegisterClown | DeleteClown | LoadClowns;

const clownReducer = function (state: AppState | undefined, action: AppAction) {
  if (!state) {
    state = { clowns: {}, clownsLoaded: false };
  }
  switch (action.type) {
    case "REGISTER":
      state.clowns = { ...state.clowns };
      state.clowns[action.payload.id] = action.payload;
      return state;
    case "DELETE":
      state.clowns = { ...state.clowns };
      delete state.clowns[action.payload.id];
      return state;
    case "LOAD_CLOWNS":
      state.clowns = action.payload;
      state.clownsLoaded = true;
      return state;
    default:
      return state;
  }
};

export { clownReducer };