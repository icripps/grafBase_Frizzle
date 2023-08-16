export const getUserQuery = `
   query getUser($email: String!) {
        User(by: {email: $email}){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`

export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!){
    userCreate(input: $input) {
        user {
            name,
            email,
            avataUrl,
            descriptuion,
            githubUrl,
            linkedInUrl,
            id
        }
    }
}
`