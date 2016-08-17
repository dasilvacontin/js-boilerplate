#!/usr/bin/env node
// @flow
import { listWords } from '../lib'

const files = process.argv.slice(2)

listWords(files)
.then(words => {
  let humanList = words.join(', ')
  console.log(humanList)
  return
})
.catch(console.log.bind(console))
