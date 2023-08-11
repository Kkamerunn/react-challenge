import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="w-full bg-slate-900 h-full">
      <div className="container mx-auto flex py-4">
        <div className="flex w-1/2 items-center">
          <img src={Logo} alt="Logo" className="bg-white h-16" />
          <p className="text-white pl-7">Editar medidas</p>
        </div>
        <div className="flex w-1/2 justify-end items-center">
          <p className="text-white pr-7">nuevo proyecto</p>
          <select className="p-3 rounded-md text-slate-400">
            <option>Guardar y salir</option>
            <option>Salir sin guardar</option>
            <option>Guardar y continuar</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
