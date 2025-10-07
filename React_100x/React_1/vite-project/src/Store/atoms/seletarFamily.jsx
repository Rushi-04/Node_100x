import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

// Simple Implementation
// export const userAtomFamily = atomFamily({
//     key: "userAtomFamily",
//     default: (id) => ({
//         id,
//         name: "",
//         age: 0
//     })
// });

// export const isUserAdult = selectorFamily({
//     key: "isUserAdult",
//     get: (id) => ({get}) => {
//         const user = get(userAtomFamily(id));
//         return user.age >= 18;
//     }
// });


// Async Selector Family (API fetch per param)

export const todoAtomFamily1 = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async() => {              
            const response = await axios.get(`http://localhost:3000/api/v1/todos?id=${id}`);
            return response.data
        }
    })
});