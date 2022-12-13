// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import {server} from './mocks/server';

beforeAll(() => server.listen()); // 테스트 시작 전에 서버 listen
afterEach(() => server.resetHandlers()); // 테스트 중 다른 테스트에 영향이 가지 않도록
afterAll(() => server.close()); // 테스트 후 서버를 클린업
