import { atom, selector, useRecoilSnapshot, useRecoilState, useSetRecoilState } from "recoil";

export const counterAtom = atom({
    default: 0,
    key: "counter"
});


// Selector 

export const evenSelector = selector({
    key: "evenSelector",
    get: function({get}) {
        const currentCount = get(counterAtom);
        const isEven = (currentCount % 2 == 0);
        return isEven;
    }
})

