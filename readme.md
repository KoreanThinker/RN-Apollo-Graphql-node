# RN-Apollo-Graphql-node 템플릿

## Dev Stack
#### Frontend (app)
- react-native (hook & functional component)
- typescript
- graphql

#### Backend
- node
- typescript


## Setting
#### Frontend
1. [typescript로 react-native init](https://facebook.github.io/react-native/docs/typescript)
2. [react-navigation 설치](https://reactnavigation.org/docs/en/getting-started.html)
3. apollo 설치 - 공식문서랑 커밋 보고 하자
4. apollo 연동 할때 uri는 ```http://192.168.35.227:4000``` 요런식으로 가야됨
#### Backend
<details>
<summary>graphql 서버 init</summary>

참고 : [graphql서버 init](https://code0xff.tistory.com/166)
1. backend level에서 package.json 생성하기
 > npm init -y
2. 필요한 모듈들 설치해주자
> npm install graphql-yoga
> npm install -g nodemon 
> npm install @babel/core @babel/cli @babel/node @babel/preset-env --save-dev
3. backend level에  .babelrc 파일을 생성하여 babel preset 설정하기
```
{
  "presets": ["@babel/preset-env"]
}
```
4.  package.json 파일을 열어 scripts에 start를 추가해줍니다. 이때 nodemon과 babel-node를 사용하여 프로그램을 실행시키도록 명령어를 입력해줍니다.
```
"scripts": {
    "start": "nodemon --exec babel-node index.js",
    ...
  },
```
5. backend level에 index.js 생성후 아래 내용 입력
```js
import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
```
6. > npm start
7. [localhost:4000](localhost:4000)에 접속해서 아래 처럼 입력하고 결과가 나오면 성공
```
{
  hello
}
```

</details>