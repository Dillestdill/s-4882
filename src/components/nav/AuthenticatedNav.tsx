import { Link } from "react-router-dom";

interface AuthenticatedNavProps {
  handleSignOut: () => Promise<void>;
}

const AuthenticatedNav = ({ handleSignOut }: AuthenticatedNavProps) => {
  const pathname = window.location.pathname;
  
  return (
    <div className="flex items-center gap-8">
      <Link 
        to="/home" 
        className={`text-[#141413] hover:text-[#141413]/80 transition-colors ${
          pathname === '/home' ? 'font-semibold' : ''
        }`}
      >
        AI Assistant
      </Link>
      <Link 
        to="/educator-chat" 
        className={`text-[#141413] hover:text-[#141413]/80 transition-colors ${
          pathname === '/educator-chat' ? 'font-semibold' : ''
        }`}
      >
        Educator Chat
      </Link>
      <Link 
        to="/lesson-planning" 
        className={`text-[#141413] hover:text-[#141413]/80 transition-colors ${
          pathname === '/lesson-planning' ? 'font-semibold' : ''
        }`}
      >
        Lesson Planning
      </Link>
      <button 
        onClick={handleSignOut}
        className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors"
      >
        Sign out
      </button>
    </div>
  );
};

export default AuthenticatedNav;