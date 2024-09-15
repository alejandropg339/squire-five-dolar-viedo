// TODO: CREATE UTILITY DELAY FUNCTION

export const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}