const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( '/build'));
    
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})