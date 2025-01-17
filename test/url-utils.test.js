import {encodeFormDataToUrlSearch, getLinkParams} from '../src/url-utils';

test('encodeFormDataToUrlSearch', () => {
  expect(encodeFormDataToUrlSearch({keyword: 'test', value: 'foo'})).toStrictEqual('keyword=test&value=foo');
});

test('getLinkParams', () => {
  expect(getLinkParams('http://localhost:8080?keyword=test&value=foo', 'keyword')).toStrictEqual('test');
})

test('getLinkParams', () => {
  expect(getLinkParams('http://localhost:8080?keyword=', 'keyword')).toStrictEqual('');
})
