import { promises as fs } from 'fs'

export async function getData() {
    try {
        const data = await fs.readFile("data/data.json", "utf8")
        const arr = await JSON.parse(data)
        return arr
    } catch (err) {
        throw new Error(err)
    }
}

export async function getSetsId(id) {
    try {
        const data = await fs.readFile("data/seats.json", "utf8")
        const arr = await JSON.parse(data)
        return arr
    } catch (err) {
        throw new Error(err)
    }
}





