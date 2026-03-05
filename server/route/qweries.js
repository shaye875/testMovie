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
        for (let i in arr) {
            if (String(id) === i) {
                return arr[id]
            }
        }
    } catch (err) {
        throw new Error(err)
    }
}

export async function postSets(id, seatNumber) {
    try {
        const data = await fs.readFile("data/seats.json", "utf8")
        const arr = await JSON.parse(data)
        for (let i in arr) {
            if (String(id) === i) {
                for (let s of arr[i]) {
                    if (String(s.id) === String(seatNumber)) {

                    }
                }
            }
        }
    } catch (err) {
        throw new Error(err)
    }
}





