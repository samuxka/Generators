import handle from "./handle.js"

async function createPassword(){
    const password = await handle()
    console.log("Your password is:")
    console.log(password)
}

export default createPassword