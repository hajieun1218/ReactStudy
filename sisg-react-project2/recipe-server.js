// 서버
const express=require("express")

const app=express(); // 서버 생성
const port=3355;

app.listen(port,()=>{
    console.log("Start Server...","http://localhost:3355")
})

// node cross domain
// Express에서 CORS 허용하기
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


const MongoConnect=require("mongodb").MongoClient; // Mongodb 연결 객체 생성

// #################################### 레시피 #########################################

//  /recipe_data?page=1
/*
    @RequestMapping("/recipe_data")
    public String recipe_date(HttpServletRequest request, HttpServletResponse response) {}
 */
app.get('/recipe_data',(req,res)=>{ // get방식
    var page=req.query.page; // request.getParameter("page")
    var rowSize=12;
    var skip=(page*rowSize)-rowSize;

    var url="mongodb://211.238.142.181:27017";
    // 몽고디비 연결 => 연결 객체 얻기
    // MongoClient client=new MongoClient();
    /*
       database : XE, mydb
       table => collection
     */
    MongoConnect.connect(url,function(err,client){
        var db=client.db('mydb');  // XE
        // 가져온 데이터를 배열로 만들어라 [{},{},{},{},...]
        // docs : object[] 배열,  docs=[{},{},{],{},...]
        db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            // json으로 변환해서 전송
            // res.send(docs) => 문자열 전송
            res.json(docs);  // model.addAttribute("list",list)
            client.close();
        });
    })
})

app.get('/total_data',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,client)=>{
        var db=client.db('mydb');
        db.collection('recipe').find({}).count((err,count)=>{ // 총 개수
            res.json({total:Math.ceil(count/12.0)})
            // SELECT CEIL(COUNT(*)/12.0) FROM recipe
            client.close();
            return count;
        })
    })
})


// #################################### 셰프 #########################################

app.get('/chef_data',(req,res)=>{
    var page=req.query.page;
    var rowSize=50;
    var skip=(page*rowSize)-rowSize;

    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,function(err,client){
        var db=client.db('mydb');
        db.collection('chef').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            res.json(docs);
            client.close();
        });
    })
})


app.get('/chef_total',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,client)=>{
        var db=client.db('mydb');
        db.collection('chef').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/50.0)})
            client.close();
            return count;
        })
    })
})



// XML데이터 => JSON
const xml2js=require("xml2js");
// 서버에서 다른 서버로 연결할 때 사용
const request=require("request");

app.get('/recipe_news',(req,res)=>{
    var query=encodeURIComponent(req.query.fd);
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+query;
    var parser=new xml2js.Parser({
        explicitArray:false // 공백일때 false
    })
    request({url:url},(err,request,xml)=>{
        // url을 통해서 xml을 가져옴
        console.log(xml);
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item);
            res.json(pJson.rss.channel.item);
        })
    })
})