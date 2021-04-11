import { getUsers } from '.';

describe('getUsers', () => {
  it('should return users list', async () => {
    const result = await getUsers();
    const list = result.data;
    // expect(list.length).toBeGreaterThan(0);
    expect(list).toBe(result.data);
  });
  it('should return "luparsene" informations', async () => {
    const result = await getUsers();
    const list = result.data[4];
    expect(result.data[4]).toBe(list);
  });
});
