import { RemoveHtmlPipe } from './pipe/remove-html.pipe';

describe('RemoveHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
