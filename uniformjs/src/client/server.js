import App from './app/App.jsx';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('views', __dirname);

app.use('/index.html', (req, res) => {
    const app = new App();
    const data = app.getData();
    console.log("data:" + data);
    res.render('index.ejs', {data: data});
});
app.use('/', express.static(`${__dirname}`));
app.listen(port, ()=> {
    console.log(`Website listening on port ${port}`);
    if (process.env.NODE_ENV === "production") {
        console.log('ENVIRONEMENT VARIABLES :');
        console.log(process.env);
    }
});