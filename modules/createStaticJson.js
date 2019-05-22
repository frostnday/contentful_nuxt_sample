import { createClient } from '../plugins/contentful.js'
const env = require('../env.js');
const fs = require('fs');

const outputPath = 'static/json/article.json'

module.exports = function outputStaticDataBeforeBuild() {
  this.nuxt.hook('build:before', async builder => {
    const client = createClient()
    // contentfulからデータを取得する
    const posts = await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    })

    // jsonとして出力する
    fs.writeFile(
      outputPath,
      JSON.stringify(posts),
      err => {
        if (err) {
          throw err;
        }
      },
    );
  });
};
