interface Movie{
    id: number
    title: string
    director: string
    duration: number
    url?: string | undefined
    description?: string | undefined  
    budget?: number | undefined
}

export type {Movie};