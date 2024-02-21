"use server"
import { promises as fs } from 'fs';

const arrayA=[]
const arrayB=[]

export async function readTextFile(file) {
    const text = await fs.readFile(file, 'utf-8');
    
    const line = text.split('\n');
    
    line.forEach(l => {
        const part = l.split(';');

        arrayA.push(part[0])
        arrayB.push(part[1])

    })
    //console.log(arrayA)
    //console.log(arrayB)
    return {arrayA,arrayB}
}
