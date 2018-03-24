let config = {
    mysql: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'data'
    },
    redis: {
        host: 'localhost',
        port: "6379",
        username: 'requirepass',
        password: '1223'
    },
    mongodb: {
        host: "localhost",
        port: 27017,
        user: '',
        password: '',
        database: "api"
    },
    bae: {
        mysql: {//todo
            host: 'localhost',
            port: "80",
            user: '035ff98eba134ce5ac18f03a06aecfe3',
            password: 'e45fdc86731d4c6882d2c0f49a42103d',
            database: 'gziyJggvZOnIkFVOolEQ'
        },
        redis: {//todo
            host: 'localhost',
            port: "80",
            user: '035ff98eba134ce5ac18f03a06aecfe3',
            password: 'e45fdc86731d4c6882d2c0f49a42103d',
            database: 'gziyJggvZOnIkFVOolEQ'
        },
        mongodb: {
            host: "mongo.duapp.com",
            port: 8908,
            user: '035ff98eba134ce5ac18f03a06aecfe3',
            password: 'e45fdc86731d4c6882d2c0f49a42103d',
            database: "JfFHglbFaTCTWYnEmdCn"
        }
    }
}

module.exports = config