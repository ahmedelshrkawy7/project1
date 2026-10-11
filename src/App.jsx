// import heroImg from "./assets/hero.svg";
// import knifeImg from "./assets/knife.svg";
// 4  5  2 github
export default function App() {
  return (
       <Nav/>
  );
}

function Nav() {
  return (
    <nav className="h-[100px] bg-black">
           <img src="" alt="" />
           <ul>
            <li></li>
            <li></li>
            <li></li>
           </ul>
       </nav>
  );
}

function Footer() {
  <header className="w-full px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between z-20">
    <div className="text-2xl sm:text-3xl font-serif font-bold tracking-widest uppercase">
      Gerícht
    </div>
    <nav className="hidden lg:flex items-center space-x-8 text-sm text-gray-300 tracking-wide font-sans">
      <a href="#home" className="hover:text-brandGold transition-colors">
        Home
      </a>
      <a href="#pages" className="hover:text-brandGold transition-colors">
        Pages
      </a>
      <a href="#contact" className="hover:text-brandGold transition-colors">
        Contact Us
      </a>
      <a href="#blog" className="hover:text-brandGold transition-colors">
        Blog
      </a>
      <a href="#landing" className="hover:text-brandGold transition-colors">
        Landing
      </a>
    </nav>
    <div className="hidden sm:flex items-center space-x-6 text-sm font-sans tracking-wide">
      <a href="#login" className="hover:text-brandGold transition-colors">
        Log In / Registration
      </a>
      <span className="w-px h-6 bg-gray-700"></span>
      <a href="#book" className="hover:text-brandGold transition-colors">
        Book Table
      </a>
    </div>
  </header>;
}

function Sidebar (){

  return ()
}
