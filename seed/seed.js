import mongoose from 'mongoose'
import connection from '../connections.js'
import data from '../data.json' assert { type: 'json' }
import Team from '../models/Teams.js'


season
  .deleteMany({})
  .then(() => Team.create(data))
  .then(() => console.log('done!'))
  .then(() => mongoose.disconnect())
  .catch(error => console.error('Error', error))





