const express=require('express')
const app=express();  // 가벼운 서버


// node cross domain
// Express에서 CORS 허용하기
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


/*
    bind() ===> bind(post,ip) => 개통
    listen() => 대기상태
    accept() => 연결이 되면 ~~ 처리
 */

app.listen(3355,()=>{
    console.log("Server Start...","http://localhost:3355")
})


const path=require('path')
// public 디렉터리의 내용을 자동으로 응답합니다. --- (※3)
app.use('/', express.static('./public'))
// 최상위 페이지에 접속하면 /public으로 리다이렉트합니다.
app.get('/', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})




/*
    라이브러리 불러올 때
        Java, React ==> import
        c/c++ ==> include
        c# ==> using
        Node ==> require
 */
// 뉴스
// require ==> import
const request=require("request");  // 외부 서버 연결 (naver)
const xml2js=require("xml2js");

// 웹 => 사용자가 요청한 정보를 모아서 전송, 응답정보(사용자의 ip,port)
//                  request                   response           => 시스템(webserver)에서 처리

// Spring => 톰캣이 request,response 만들어줌
// Node => express가 req,res 만들어줌

// "영화"라고 입력 => /news?fd=영화
app.get('/news',(req,res)=>{
    var fd=encodeURIComponent(req.query.fd)
    // 네이버에 연결
    // rss : xml
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+fd;
    // XML => JSON (파서기 생성)
    var parser=new xml2js.Parser({
        explicitArray:false // 변환이 안되는것은 array에 포함하지 않는다
    })

    // 네이버 서버에 접근
    request({url:url},(err,request,xml)=>{
        // console.log(xml)
        // xml을  pJson으로 변경
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item);
            res.json(pJson.rss.channel.item);
        })
    })
})





const Client=require("mongodb").MongoClient

app.get('/recipe',(req,res)=>{
    var page=req.query.page;
    var rowSize=9;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("recipe").find({}).skip(skip).limit(rowSize).toArray((err,docs)=>{
            res.json(docs)
            client.close();
        })
    })
})


app.get('/category',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("category").find({}).toArray((err,docs)=>{
            res.json(docs)
            client.close();
        })
    })
})


// cate_food?cno=1
app.get('/cate_food',(req,res)=>{
    var cno=req.query.cno;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("food").find({cno:Number(cno)}).toArray((err,docs)=>{
            res.json(docs)
            console.log(docs)
            client.close();
        })
    })
})



// ######################### andriod  ####################################

app.get('/category2',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("category").find({}).toArray((err,docs)=>{
            res.json({category:docs})
            client.close();
        })
    })
})

app.get('/cate_food2',(req,res)=>{
    var cno=req.query.cno;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("food").find({cno:Number(cno)}).toArray((err,docs)=>{
            res.json({"cate_food":docs})
            console.log(docs)
            client.close();
        })
    })
})


app.get('/news2',(req,res)=>{
    var fd=encodeURIComponent(req.query.fd)
    // 네이버에 연결
    // rss : xml
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+fd;
    // XML => JSON (파서기 생성)
    var parser=new xml2js.Parser({
        explicitArray:false // 변환이 안되는것은 array에 포함하지 않는다
    })

    // 네이버 서버에 접근
    request({url:url},(err,request,xml)=>{
        // console.log(xml)
        // xml을  pJson으로 변경
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item);
            res.json({"news":pJson.rss.channel.item});
        })
    })
})
