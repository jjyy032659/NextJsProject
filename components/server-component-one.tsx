import fs from 'fs'
import { ServerComponentTwo } from './server-component-two'


export const ServerComponentOne = () => {

    fs.readFileSync("./components/server-component-one.tsx", "utf-8");
    return <><h2>Server Component One</h2>
    <ServerComponentTwo/>
    </>
}