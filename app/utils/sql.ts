import DB_CONFIG from '../config/dbconfig'
import { createPool } from 'mysql'

const pool = createPool(DB_CONFIG)

let query = (sql:string, values:Object) => {
  return new Promise((resolve, reject) => {
    pool.getConnection( (err:any, connection:any) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err: any, rows: any) => {
          console.log();

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

export { query }