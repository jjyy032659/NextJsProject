import fs from 'fs'

import { ClientComponentOne } from './client-component-one';

export const ServerComponentTwo = () => {

    fs.readFileSync("./components/server-component-two.tsx", "utf-8");
    return <>
    <h2>Server Component Two</h2>;
    <ClientComponentOne/>
    </>
}