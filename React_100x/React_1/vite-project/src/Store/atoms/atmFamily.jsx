import { atomFamily } from "recoil";


export const counterAtomFamily = atomFamily({
    key: "counterFamily",
    default: 0
});


export const todoAtomFamily = atomFamily({
  key: "todoAtom",   // must be unique
  default: (id) => ({
    id,
    title: "",
    completed: false,
  }),
});