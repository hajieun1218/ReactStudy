const express=require('express')
const app=express();

// node cross domain
// Express에서 CORS 허용하기
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


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


// 뉴스
const request=require("request");  // 외부 서버 연결 (naver)
const xml2js=require("xml2js");

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

app.get('/movielist',(req,res)=>{
    var type=req.query.type;
    var page=req.query.page;
    var rowSize=12;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.186:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("movie3").find({type:Number(type)}).skip(skip).limit(rowSize).toArray((err,docs)=>{
            res.json(docs)
            client.close();
        })
    })
})


app.get('/moviedetail',(req,res)=>{
    var mno=req.query.mno;
    var url="mongodb://localhost:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb");
        // Table => Collection => recipe
        db.collection("movie3").find({mno:Number(mno)}).toArray((err,docs)=>{
            res.json(docs)
            console.log(docs)
            client.close();
        })
    })
})