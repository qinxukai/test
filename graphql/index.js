var express = require('express');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');

var schema = buildSchema(`
    schema {
    query: Query
}

type Config{
    name: String
}

type CurrentUser{
    id: String
    phone: String
    avatar: String
    nickname: String
    credit: String
    isSign: Boolean
    verifyAvatar: UserVerifyAvatar
    realname: UserRealname
}

type UserVerifyAvatar{
    avatar: String
    verifyTime: Int
    status: Int
}

type UserRealname{
    name: String
    identityNumber: String
    time: Int
    status: Boolean
}

type Pagination{
    totalCount: Int
    pageCount: Int
    currentPage: Int
    perPage: Int
}

type Game{
    id: String
    name: String
    type: Int
    discount: Float
    icon: String
    imgs: String
    desc: String
    intro: String
    welfare: String
    rebate: String
    vipprice: String
    labels: String
    tags: String
    downloadCount: Int
    video: String
    isFavorite: Boolean
    issuer: GameIssuer
    platforms: [GamePlatform]
    servers: [GameServer]
    gift: [GameGift]
    score: Score
}

type GameTag{
    id: String
    name: String
}

type GameServer{
    id: String
    name: String
    time: Int
    deviceType: String #为空则是全平台
    game: Game
}

type GameGift{
    id: String
    name: String
    game: Game
}

type GameIssuer{
    id: String
    name: String
    company: String
    logo: String
    url: String
    score: Score
}

type GamePlatform{
    id: String
    name: String
    company: String
    logo: String
    url: String
    score: Score
}

type Score{
    score: Float # 评分
    count: Int # 评价数
    count1: Int # 1星数
    count2: Int # 2星数
    count3: Int # 3星数
    count4: Int # 4星数
    count5: Int # 5星数
}

type Video{
    id: String
    video: String
    likeCount: Int
    isLike: Boolean
    game: Game
}

type Games{
    game: [Game]
    pagination: Pagination
}

type GameServers{
    gameServers: [GameServer]
    pagination: Pagination
}

type GameGifts{
    gameGifts: [GameGift]
    pagination: Pagination
}

type GameIssuers{
    gameIssuers: [GameIssuer]
    pagination: Pagination
}

type GamePlatforms{
    gamePlatforms: [GamePlatform]
    pagination: Pagination
}

type Videos{
    videos: [Video]
    pagination: Pagination
}

type Query {
    echo(message: String): String # 测试

    config: Config # 配置参数
    currentUser: CurrentUser # 配置参数

    game(id: String): Game # 游戏详情
    games(pageSize: Int, currentPage: Int, sort: String): Games # 游戏列表
    favoritedGames(pageSize: Int, currentPage: Int, sort: String): Games # 收藏的游戏列表
    browsedGames(pageSize: Int, currentPage: Int, sort: String): Games # 收藏的游戏列表
    downloadedGames(pageSize: Int, currentPage: Int, sort: String): Games # 下载的游戏列表

    gameTags(id: String): [GameTag] # 游戏tag列表

    gameServers(id: String): GameServers # 游戏开服列表
    gameGifts(id: String): GameServers # 游戏礼包列表

    videos(pageSize: Int, currentPage: Int, sort: String): Videos # 视频列表
    likedVideos(pageSize: Int, currentPage: Int, sort: String): Videos # 喜欢视频列表

    gameIssuer(id: String): GameIssuer # 游戏发行详情
    gameIssuers(pageSize: Int, currentPage: Int, sort: String): GameIssuers # 游戏发行列表

    gamePlatform(id: String): GamePlatform # 游戏平台详情
    gamePlatforms(pageSize: Int, currentPage: Int, sort: String): GamePlatforms # 游戏平台列表
}
`);

var root = {
    hello: () => {
        return 'hello world!'
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000)