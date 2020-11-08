import { v4 } from 'uuid';

export interface PatientEntity {
  id?: string;
  firstname?: string;
  lastname?: string;
  dob?: string;
  phone?: string;
}

let DATA: { [index: string]: PatientEntity } = {};

export class DAO {
  static async addPatient(data: PatientEntity): Promise<string> {
    const id = v4();
    DATA[id] = {
      id,
      firstname: data?.firstname ?? null,
      lastname: data?.lastname ?? null,
      dob: data?.dob ?? null,
      phone: data?.phone ?? null,
    } as PatientEntity;
    return id;
  }
  static async getPatient(id: string): Promise<PatientEntity> {
    if (!id) return null;
    return DATA[id] ?? null;
  }
  static async getPatients(): Promise<PatientEntity[]> {
    const keys = Object.keys(DATA);
    return keys.map((id) => DATA[id]);
  }
  static async removePatient(id: string): Promise<void> {
    if (!id) return;
    delete DATA[id];
  }
  static async clear(): Promise<void> {
    DATA = {};
  }
}

const postPatients = async (req, res): Promise<void> => {
  const { body } = req;
  const id = await DAO.addPatient(body);
  res.json({ id });
};

const getPatients = async (req, res): Promise<void> => {
  const list = await DAO.getPatients();
  res.json(list);
};

const getPatient = async (req, res): Promise<void> => {
  const { id } = req.params;
  const obj = await DAO.getPatient(id);
  if (!obj) {
    res.json(404, {
      error: 'INVALID_PATIENT',
      message: `Entity not found ${id}`,
    });
    return;
  }
  res.json(obj);
};

export const addRoutes = (server: any): void => {
  server.post('/v1/patients', postPatients);
  server.get('/v1/patients', getPatients);
  server.get('/v1/patients/:id', getPatient);
};

export default addRoutes;
