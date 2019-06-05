import { createClient } from '../plugins/contentful.js'
import env from '../env.js';
import fs from 'fs';

const outputPath = 'static/json/article.json'

/**
 * Contentfulから取得したデータをjsonファイルとして出力します。
 */
export default async function outputStaticDataBeforeBuild() {
  const client = createClient()

  // contentfulからデータを取得
  const articles = await client.getEntries({
    'content_type': env.CTF_BLOG_POST_TYPE_ID,
    order: '-sys.createdAt'
  })

  // jsonとして出力する
  fs.writeFile(
    outputPath,
    JSON.stringify(articles),
    err => {
      if (err) {
        throw err;
      }
    },
  );
};
