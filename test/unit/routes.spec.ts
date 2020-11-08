import { DAO } from '../../src/routes';

test('Should reset all data', async () => {
  await DAO.clear();
  const list = await DAO.getPatients();
  expect(list.length).toBe(0);
});

test('Should add 2 patients', async () => {
  await DAO.clear();
  const id1 = await DAO.addPatient({ firstname: 'user1', dob: '1999-01-01' });
  const id2 = await DAO.addPatient({ firstname: 'user2', dob: '1999-02-01' });
  const list = await DAO.getPatients();
  expect(list.length).toBe(2);
  expect(id1).toBeDefined();
  expect(id2).toBeDefined();
  expect(id1).not.toBe(id2);
});

test('Should get user3', async () => {
  await DAO.clear();
  await DAO.addPatient({ firstname: 'user1', dob: '1999-01-01' });
  const id = await DAO.addPatient({ firstname: 'user3', dob: '1999-02-01' });
  const obj = await DAO.getPatient(id);
  expect(obj.id).toBe(id);
  expect(obj.dob).toBe('1999-02-01');
  expect(obj.firstname).toBe('user3');
  expect(obj.lastname).toBeNull();
  expect(obj.phone).toBeNull();
});
