import { useState } from "react"
import { Menu, X } from "lucide-react" // íconos modernos y livianos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-[#112e3d] shadow-md fixed top-0 left-0 right-0 z-50">
      <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nombre */}
          <div className="flex items-center">
            <img src="/perfilFacebookPisaccoPropiedades.jpg" alt="img" className="h-8 w-8 mr-2 rounded-full" />
            <a href="#home" className="text-xl font-semibold text-white">Pisacco Propiedades</a>
          </div>

          {/* Botón Hamburguesa en mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className= "text-white hover:text-blue-600 transition">Inicio</a>
            <a href="#sobre-nosotros" className=" text-white hover:text-blue-600 transition">Sobre Nosotros</a>
            <a href="#contactForm" className=" text-white hover:text-blue-600 transition">Contacto</a>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#112e3d] px-4 pb-4 space-y-2 shadow-md">
          <a href="" className="block text-white hover:text-blue-600">Inicio</a>
          <a href="#contactForm" className="block text-white hover:text-blue-600">Contacto</a>
          <a href="#sobre-nosotros" className="block text-white hover:text-blue-600">Sobre Nosotros</a>
        </div>
      )}
    </nav>
  )
}
