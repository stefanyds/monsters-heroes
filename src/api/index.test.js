import { getUsers } from '.';

describe('getUsers', () => {
  it('should return five users in list', async () => {
    const result = await getUsers();
    const list = result.data;
    expect(list).toHaveLength(5);
  });
  it('should return "luparsene" informations', async () => {
    const result = await getUsers();
    const userLuparsene = result.data.find((user) => user.username === "luparsene");
    expect(userLuparsene.email).toBe("ouilupin@psg.fr");
    expect(Object.keys(userLuparsene)).toContain("email");
    expect(Object.keys(userLuparsene)).toContain("password");
    expect(Object.keys(userLuparsene)).toContain("username");
    expect(Object.keys(userLuparsene)).toContain("name");
    expect(Object.keys(userLuparsene)).toContain("id");
  });
});
