
const request = require('supertest');
const server = require("../server");

// describe('events model', () => {
//   describe('insert', () => {
//     it('should insert events into the db', async () => {
//       await Events.add({
//          client_msg_id: 'b0638bde-c139-4f5c-8d86-d7577e86ab54',
//          type: 'message',
//          text: 'Event !',
//          user: 'U014YE5KZ34',
//          ts: '1594863453.000200',
//          team: 'T014X2Z6M6Z',
//          blocks: [ { type: 'rich_text', block_id: '37x', elements: [Array] } ],
//          channel: 'C014RMZFEMU',
//          event_ts: '1594863453.000200',
//          channel_type: 'channel'
//          });

//       const addedEvents = await db('events')
//       expect(addedEvents).toHaveLength(1);
//     });

//     it('should insert event into the db', async () => {
//       let event = await Events.add({text: "Testing the testing database"})
//       expect(event.text).toBe('Testing the testing database')
//     })
//   })
// })
describe('GET /', () => {
  it('should return 200', () => {
    return request(server)
    .get('/event')
    .set("Accept", "application/json")
    .then(res => {
      console.log(res.body)
      const a = Object.getPrototypeOf(Array());
      const b = Object.getPrototypeOf(res.body);
      console.log(b)
      expect(a === b).toBe(true);
    })
  })
})

describe('Post request',() => {
  it('inserts event into database', function(done) {
    request(server)
      .post('/event/new')
      .send({event:{
        client_msg_id: 'b0638bde-c139-4f5c-8d86-d7577e86ab54',
         type: 'message',
         text: 'Event !',
         user: 'U014YE5KZ34',
         ts: '1594863453.000200',
         team: 'T014X2Z6M6Z',
         blocks: [ { type: 'rich_text', block_id: '37x', elements: [Array] } ],
         channel: 'C014RMZFEMU',
         event_ts: '1594863453.000200',
         channel_type: 'channel'
      }})
      .set('Accept', 'application/json')
      .expect(200).then(res => {
        console.log(res.body)
        done();
      })  
  })
})


