import {server} from '../../../mocks/server';
import Type from '../Type';
import {rest} from 'msw';
import {render, screen} from '@testing-library/react';

test('displays product images from server', async () => {
  render(<Type orderType="products" />);

  // 서버에서 받아온 이미지
  const productImages = await screen.findAllByRole('img', {
    name: /product$/i
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(['America product', 'England product']);
});

test('fetch option information from server', async () => {
  render(<Type orderType="options" />);

  const optionCheckboxes = await screen.findAllByRole('checkbox');

  expect(optionCheckboxes).toHaveLength(2);
});

test('when fetching product datas, face an error', async () => {
  // 서버에 대한 에러 확인
  server.resetHandlers(
    rest.get('http://localhost:5000/products', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId('error-banner');
  expect(errorBanner).toHaveTextContent('에러가 발생했습니다.');
});
