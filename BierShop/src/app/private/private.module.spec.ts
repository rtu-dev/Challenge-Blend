import { PrivateModule } from './private.module';

describe('PrivateModule', () => {
  let privateModule: PrivateModule;

  beforeEach(() => {
    privateModule = new PrivateModule();
  });

  it('should create an instance', () => {
    expect(privateModule).toBeTruthy();
  });
});
