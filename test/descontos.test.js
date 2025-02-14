const freteGratis = require('../src/descontos');

test('freteGratis é verdadeiro para compras acima de 150', ()=>{
  expect(freteGratis(151)).toBeTruthy()
})