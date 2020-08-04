const {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLSchema} = require('graphql');





const UserType = new GraphQLObjectType({
    name:"User",
    fields:()=>({
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        interestedIn:{type:GraphQLString},
        searchGender:{type:GraphQLString},
        location:{type:GraphQLString},
        dob:{type:GraphQLString},
        age:{type:GraphQLInt},
        matches:{type:GraphQLInt},
    })
})

const MessageType = new GraphQLObjectType({
    name:"Message",
    fields:()=>({
        sender:{type:GraphQLString},
        receiver:{type:GraphQLString},
        message:{type:GraphQLString},
        title:{type:GraphQLString},
      
    })
})



const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        users:{
            type:new GraphQLList(UserType),
            resolve(args,parent){
                return User.find()
                .then(users=>users)
            }
        },
        user:{
            type:UserType,
            args:{
                username:{type:GraphQLString}
            },
            resolve(args,parent){
                return User.find({username:args.username})
                .then(user=>user)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query:RootQuery
})