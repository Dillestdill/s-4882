import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium text-[#141413]">EduMaCation</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/pricing" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Pricing</a>
          <a href="/teacher-reviews" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Teacher Reviews</a>
          <a href="/challenge" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Challenge</a>
          <a href="#faq" className="text-[#141413] hover:text-[#141413]/80 transition-colors">FAQ</a>
        </div>

        <button className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;