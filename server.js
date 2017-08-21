var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
   'article-one':{
    title:'Article One/jyothsna',
    heading:'Article One',
    date:'Aug 19,2017',
    content:`      <p>
                        This is article one.This is article one.This is article one.This is article one.
                        This is article one.This is article one.This is article one.This is article one.
                        This is article one.This is article one.This is article one.
                    </p>
                     <p> 
                         This is article one.This is article one.This is article one.This is article one.
                        This is article one.This is article one.This is article one.This is article one.
                        This is article one.This is article one.This is article one.
                    </p>
                     <p> 
                         This is article one.This is article one.This is article one.This is article one.
                        This is article one.This is article one.This is article one.This is article one.
                        This is article one.This is article one.This is article one.
                    </p>`
  },
  'article-two':{ title:'Article Two/jyothsna',
                heading:'Article Two',
                date:'Aug 19,2017',
                content:`      <p>
                                    This is article Two This is article Two This is article Two.
                                   
                                </p>`
        
             },
  'artcle-three':{ 
             title:'Article Three/jyothsna',
            heading:'Article Three',
            date:'Aug 19,2017',
            content:`      <p>
                                This is article Three.This is article Three.This is article Three.
                            </p>`
      }
};
function createTemplate(data){
    var title =data.title;
    var date= data.date;
    var heading=data.heading;
    var content=data.content;
    
    
    var htmlTemplate=`
         <html>
        <head>
            <title>
               ${title}
                </title>
                <meta name="viewport" content="width=divice-width , initial-scale=1" />
               <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href='/'>Home</a>
                     </div>
                        <hr/>
                    <h3>${heading}</h3>
                    <div>
                           ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
                </body>
                </html>
    
    
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
