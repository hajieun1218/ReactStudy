const express=require('express')
const app=express();  // 가벼운 서버

/*
    bind() ===> bind(post,ip) => 개통
    listen() => 대기상태
    accept() => 연결이 되면 ~~ 처리
 */

app.listen(3355,()=>{
    console.log("Server Start...","http://localhost:3355")
})

// node cross domain
// Express에서 CORS 허용하기
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});




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
            console.log(pJson.rss.channel.item)
        })
    })
})