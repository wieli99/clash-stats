import {boot} from "quasar/wrappers"

const {io} = require("socket.io-client")

const socket = io("http://82.165.166.229:80")

export default boot(async ({app}) => {
})

export {socket}
