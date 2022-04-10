import {boot} from "quasar/wrappers"

const {io} = require("socket.io-client")

const socket = io("https://clash.wieli.at:443")

export default boot(async ({app}) => {
})

export {socket}
