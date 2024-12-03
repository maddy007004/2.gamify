import { useStore } from '../../store/useStore';
import { Trophy, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const user = useStore((state) => state.user);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">LearnQuest</span>
          </Link>

          {user ? (
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">{user.points} pts</span>
              </div>
              <Link
                to="/profile"
                className="flex items-center space-x-2 rounded-full bg-gray-100 p-2 hover:bg-gray-200"
              >
                <User className="h-5 w-5" />
                <span className="font-medium">{user.name}</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};