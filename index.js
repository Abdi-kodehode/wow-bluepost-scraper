const PORT = 3500;
const express = require('express');
const puppeteer = require('puppeteer')
const cors = require('cors')

const app = express();

app.get('/', cors(), async (req, res) => {
    try {
        let url = 'https://www.wowhead.com/wotlk/blue-tracker';
        let browser = await puppeteer.launch({ headless: true }); 
        let page = await browser.newPage();
    
        await page.goto(url);
        let post_details = await page.evaluate(() => {
            let table = document.querySelector('.clickable');
            let table_children = Array.from(table.children);
            console.log(table)
            
            let table_info = table_children.map(e => {
                let subject = e.querySelector('.forums-topicsubject').textContent;
                let blue_post_link = e.querySelector('.forums-topicsubject').getAttribute('href')
                let author = e.querySelector('.small > .blizzard-blue').textContent
                let date = e.querySelector('.q1').textContent
                return {subject, blue_post_link, author, date};
            })
            return table_info
        })
        // console.log(post_details);
        res.send(post_details)
        await browser.close();


    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});