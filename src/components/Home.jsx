import React from 'react';

export const Home = () => {
  return (
    <div className="text-white">
      <div className=" pt-16 w-full h-screen mx-auto text-center flex flex-col">
        <div
          className="h-screen bg-[url(/foto_fondo.jpg)] bg-center bg-cover shadow"
        >
          <div className="flex align-middle mt-[160px] ml-8">
            <p className="font-bold text-[46px]">Bienvenidos a Pisacco Propiedades.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;