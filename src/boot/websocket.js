import {boot} from "quasar/wrappers"

const {io} = require("socket.io-client")

const socket = io("http://localhost:3000")

export default boot(async ({app}) => {
})

export {socket}
