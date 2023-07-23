export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error(err);
  }
};

// export class Storage {
//   private todo
//   static get(key: string) {
//     return localStorage.getItem(key);
//   }
//
//   static set(key: string, value: string) {
//     localStorage.setItem(key, value);
//   }
//
//   static remove(key: string) {
//     localStorage.removeItem(key);
//   }
// }
