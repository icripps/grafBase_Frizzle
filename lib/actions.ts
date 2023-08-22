import { createUserMutation, getUserQuery } from '@/graphql'
import { GraphQLClient } from 'graphql-request'

const isProduction = process.env.NODE_ENV ===  "production"

const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBSE_API_URL || '' : 'http://127.0.0.1:4000/graphql'

const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBSE_API_KEY || '' : 'LETMEIN'

const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000'

const client = new GraphQLClient(apiUrl as string)


const makeGraphQlRequest = async (query: string, variables: {})=>{
    try {
        return await client.request(query, variables)
    } catch (error) {
        throw error
    }
}

export const getUser = async (email: string) => {
    client.setHeader('x-api-key',apiKey)
    return makeGraphQlRequest(getUserQuery,{email})
}

export type createUser = {
    name: string, email: string, avatarUrl: string
}

export const createUser = async (name: string, email: string, avatarUrl: string)=>{
    client.setHeader('x-api-key',apiKey) 
    const variables = {
        input: {
            name,
            email,
            avatarUrl
       } 
    }

    return makeGraphQlRequest(createUserMutation, variables)
}