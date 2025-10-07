import { atom, selector } from "recoil";
import axios from "axios";
// Atom

// HardCoded

// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: {
//         network: 100,
//         jobs: 21,
//         messaging: 32,
//         notifications: 11
//     }
// });


// Taking from API

// Asynchronous Data Queries

export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationSelector",
        get: async() => {
        const response = await axios.get('http://localhost:3000/api/v1/notifications');
        return response.data
    }
    })

});


// Selector
export const AllNotifications = selector({
    key: "allNotifications",
    get: ({get}) => {
        const notifications = get(notificationAtom);
        // Sum of all Notifications 
        return notifications.network + notifications.jobs + notifications.messaging + notifications.notifications;
    }
})