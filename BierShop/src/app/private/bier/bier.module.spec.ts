import { BierModule } from './bier.module';

describe('BierModule', () => {
  let bierModule: BierModule;

  beforeEach(() => {
    bierModule = new BierModule();
  });

  it('should create an instance', () => {
    expect(bierModule).toBeTruthy();
  });
});
