const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, alta, sintomas } = paciente;

  return (
    <div>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">{nombre} </span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Propetario: {''}
          <span className="font-normal normal-case">{propietario} </span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{email} </span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">{alta} </span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;