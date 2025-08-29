import express from 'express';

const app = express();
app.use(express.static('dist'));
app.get('/',(req,res)=>{
    res.send("Server is ready");
});

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Tech Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "Math Joke",
            content: "Why was the math book sad? Because it had too many problems."
        },
        {
            id: 3,
            title: "Dad Joke",
            content: "Why don't skeletons fight each other? They don’t have the guts."
        },
        {
            id: 4,
            title: "Work Joke",
            content: "Why did the developer go broke? Because he used up all his cache."
        },
        {
            id: 5,
            title: "Animal Joke",
            content: "Why do cows have hooves instead of feet? Because they lactose."
        }
    ];
    res.send(jokes);
});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});