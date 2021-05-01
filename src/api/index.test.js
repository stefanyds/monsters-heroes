import axios from 'axios';
import { getUsers } from '.';

jest.mock('axios');
const users = [
  {
    id: 1,
    username: "aldops",
    name: "Aldo Pires",
    email: "pires.aldo@disney.com",
    password: "123oliveira"
  },
  {
    id: 2,
    username: "stefanyrs",
    name: "Stefany Souza",
    email: "souza.stefany@rbr.com",
    password: "456pao"
  },
  {
    username: "luparsene",
    name: "Arsene Lupin",
    email: "ouilupin@psg.fr",
    password: "04locomotive",
    id: 5
  }
]

beforeEach(() => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: users }))
});

describe('getUsers', () => {
  it('should return five users in list', async () => {
    const result = await getUsers();
    const list = result.data;
    expect(list).toHaveLength(3);
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
