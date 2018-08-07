import * as Koa from 'koa';
import * as Router from 'koa-router';
import { query } from './utils/sql'
import { lchmod } from 'fs';

const app = new Koa();
const router = new Router();

const selectAllData = async() => {
  let sql = 'SELECT * FROM workpieces'
  let dataList = await query(sql, {})
  
  return dataList
}

router.get('/*', async (ctx) => {
  await selectAllData().then((value) => {
    ctx.body = value
  })
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000, welcome to my koa app');
