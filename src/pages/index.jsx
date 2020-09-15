import React, { useState } from "react";
import { InputAdornment, Input } from "@material-ui/core";
import Date from "../assets/svg/Icon/Date.svg";
import Image from "../assets/svg/Icon/Image.svg";
import Logo from "../assets/svg/Icon/Logo.svg";
import Menu from "../assets/svg/Icon/Menu.svg";
import Person from "../assets/svg/Icon/Person.svg";
import Place from "../assets/svg/Icon/Place.svg";
import Search from "../assets/svg/Icon/Search.svg";

const Home = () => {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [pessoas, setPessoas] = useState(0);

  return (
    <>
      <div className="absolute bg-gray-400 w-full  bg-gradient-to-b from-gray-500 -z-1000 to-gray-600">
        <div className="h-64" />
        <div className="h-32" />
      </div>
      <header className="container max-w-screen-lg px-4 mx-auto">
        <nav className="flex items-center justify-between flex-wrap bg-transparent py-3">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo />
            <span className="font-semibold ml-1 text-xl  tracking-tight">
              Explore
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 rounded text-white">
              <Menu className="menu-mobile">
                <title>Menu</title>
              </Menu>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden md:visible lg:visible xl:visible justify-between">
            <div className="text-sm lg:flex-row ">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                Sobre nós
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                Seguros
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
              >
                Hotéis
              </a>
            </div>
            <div className="flex flex-row">
              <div>
                <a
                  href="#"
                  className="inline-block text-sm px-4 py-2 leading-none   text-white   mt-4 lg:mt-0"
                >
                  Viagens
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
        <hr />
      </header>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white ">Viaje pelo mundo inteiro</h1>
        <span className="text-other">
          Aqui você encontra os melhores voos do mundo
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <form className="w-full max-w-screen-lg bg-white shadow-md rounded pt-6  mb-4">
          <div className="px-8">
            <div className="mb-4">
              <div className="flex flex-row ">
                <label className="mr-6">
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={true}
                    className="ml-2"
                  />
                  Ida e volta
                </label>
                <label className="mr-6">
                  <input name="isGoing" type="checkbox" className="ml-2" />
                  Só ida
                </label>
                <label className="mr-6">
                  <input name="isGoing" type="checkbox" className="ml-2" />
                  Só volta
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row  xl:flex-row w-full justify-between">
              <div className="w-full md:w-1/5 lg:w-1/5  xl:w-1/5 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Origem"
                >
                  Origem
                </label>
                <Input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Origem"
                  type="text"
                  value={origem}
                  onChange={(event) => setOrigem(event.target.value)}
                  placeholder="Sua Origem"
                  startAdornment={
                    <InputAdornment position="start">
                      <Image />
                    </InputAdornment>
                  }
                />
              </div>
              <div className="w-full md:w-1/5 lg:w-1/5  xl:w-1/5 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Destino"
                >
                  Destino
                </label>
                <Input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Destino"
                  type="text"
                  value={destino}
                  onChange={(event) => setDestino(event.target.value)}
                  placeholder="Seu Destino"
                  startAdornment={
                    <InputAdornment position="start">
                      <Place />
                    </InputAdornment>
                  }
                />
              </div>
              <div className="w-full md:w-1/5 lg:w-1/5  xl:w-1/5 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Data de Ida / Retorno"
                >
                  Data de Ida / Retorno
                </label>
                <Input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline no-calendar"
                  id="Data de Ida / Retorno"
                  type="date"
                  placeholder="data da viagem"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <Date />
                    </InputAdornment>
                  }
                />
              </div>
              <div className="w-full md:w-1/5 lg:w-1/5  xl:w-1/5 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Número de pessoas"
                >
                  Número de pessoas
                </label>
                <Input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Número de pessoas"
                  type="number"
                  placeholder="numero de pessoas"
                  value={pessoas}
                  onChange={(event) => setPessoas(event.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex mt-6 bg-gray-200 p-4 items-center justify-end">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Search width={20} height={20} />
              <span className="ml-4">Busque as viagens</span>
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-lg bg-gray-200 flex flex-col mt-10 mx-auto">
        <span className="text-gray-600">VALOR DO FORM</span>
        <span>{"{"}</span>
        <span> “origem”:“{origem}“</span>
        <span> “destino”:“{destino}“</span>
        <span> “data”:“{data}“</span>
        <span> “pessoas”:{pessoas}</span>
        <span>{"{"}</span>
      </div>
    </>
  );
};

Home.displayName = "Home";
export default Home;
