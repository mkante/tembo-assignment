
const postPatients = async (req, res) => {

};

const getPatients = async (req, res) => {

};

const getPatient = async (req, res) => {

};

export const addRoutes = (server: any): void => {

  server.post('/v1/patients', postPatients);
  server.get('/v1/patients', getPatients);
  server.get('/v1/patients/:id', getPatient);
};

export default addRoutes;
