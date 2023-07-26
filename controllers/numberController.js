const axios = require('axios')

exports.getNumber = (async (req, res, next) => {
    const urls = req.query.url
    let result = []    
    await Promise.all(urls.map(async (url) => {
        await axios.get(url)
        .then(response => {
            result = result.concat(response.data.numbers)
            console.log("dd",response.data.numbers)
        }).catch(err => {
            console.log(err);
        });
    }))
    let resultnumbers = new Set(result.sort());
    let ans = Array.from(resultnumbers);
    ans = ans.sort();
    res.status(200).json({
      status: 'success',
      data: ans
    });
});