import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Target" size={28} className="text-[#8B5CF6]" />
            <h1 className="text-xl font-bold text-white font-['Montserrat']">
              CS2 PRO
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-[#8B5CF6] transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8B5CF6] transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8B5CF6] transition-colors font-medium"
            >
              Игроки
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8B5CF6] transition-colors font-medium"
            >
              Новости
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#8B5CF6] transition-colors font-medium"
            >
              Связь
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
            >
              <Icon name="Tv" size={16} className="mr-2" />
              Live
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
