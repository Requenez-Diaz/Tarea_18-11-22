export interface Category {
    id: string
    name: string
    description: string
    slug: string
}

export interface Recipe {
    id: string,
    title: string,
    image: string,
    ingredients: [string]
}

interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}

export interface ListRecipesResponse {
    data: [Recipe] | []
    metadata: Metadata
}

export interface ListCategoriesResponse {
    data: [Category] | []
    pagination: Metadata
}
