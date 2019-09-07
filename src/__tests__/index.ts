import { sayHello } from '../index';

test('Should return string argument', () => {
  expect(
    sayHello({
      hello: 'Hello, no commands yet',
    })
  ).toEqual('Hello, no commands yet');
});
