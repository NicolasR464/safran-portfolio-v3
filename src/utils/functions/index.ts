/** Replace :id in path with ID passed. */
export const pathWithId = (path: string, id: number | string) => {
    return path.replace(':id', id.toString())
}
