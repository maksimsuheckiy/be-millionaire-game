export const setLetterNumbering = (index: number) => {
    return String.fromCharCode(65 + index)
}

export const shuffleArray = (array: string[]) => {
    return array.map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value)
}