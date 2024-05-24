import { atom } from "recoil";

export const networkAtom = atom({
    key:"networkAtom",  // keys should be unique for every atoms
    default:104
})


export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})
export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})