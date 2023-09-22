import { connect, connection } from 'mongoose'

const mongosrc = process.env.MONGOSRC

const conn = { isConnection: false }

export async function connectDB () {
  if (conn.isConnection) return

  const db = await connect(mongosrc)
  console.log('db name: ', db.connection.db.databaseName)
  conn.isConnection = db.connections[0].readyState
}

connection.on('connected', () => {
  console.log('Mongoose is connected')
})

connection.on('error', (error) => {
  console.error('Mongoose failed', error)
})
