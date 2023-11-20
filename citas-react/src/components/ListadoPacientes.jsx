import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra a tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.map((paciente) => {
        return <Paciente key={paciente.id} paciente={paciente} />;
      })}
    </div>
  );
};

export default ListadoPacientes;