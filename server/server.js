require("dotenv").config();

const express=require("express");
const axios=require("axios");
const app = express();

const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: '*', // Be cautious with this in production
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
const API_KEY = process.env.API_KEY;

function fetchNews(url,res){
    axios.get(url)
    .then(response=>{
        if(response.data.totalResults>0){
            res.json({
                status:200,
                success:true,
                message:"Successfully fetched the data",
                data:response.data
            });
        }else{
            res.json({
                status:200,
                success:true,
                message:"No more results to show"
            });
        };
    })
    .catch(error=>{
        res.json({
            status:500,
            success:false,
            message:"Failed to fetch data from the API",
            error:error.message
        });
    });
};

//locally for indian users
app.get("/local-news",(req,res)=>{
    let pageSize=parseInt(req.query.pageSize)||40;
    let page=parseInt(req.query.page)||1;
    let url=`https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${pageSize}&category=business&sortBy=publishedAt&apiKey=${API_KEY}`
    fetchNews(url,res);
});

//top headlines accross the globe
app.get("/top-headlines",(req,res)=>{
    let pageSize=parseInt(req.query.pageSize)||40;
    let page=parseInt(req.query.page)||1;
    let url=`https://newsapi.org/v2/everything?q=(stock OR sharemarket OR business OR finance OR equity OR government)&page=${page}&pageSize=${pageSize}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
    fetchNews(url,res);
});

//country wise headlines
app.options("/country-headlines/:iso",cors());
app.get("/country-headlines/:iso",(req,res)=>{
    let pageSize=parseInt(req.query.pageSize)||80;
    let page=parseInt(req.query.page)||1;
    const country=req.params.iso;
    let url=`https://newsapi.org/v2/top-headlines?category=business&
    page=${page}&pageSize=${pageSize}&country=${country}&sortBy=publishedAt&apiKey=${API_KEY}`;
    fetchNews(url,res);
})

//port
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});
