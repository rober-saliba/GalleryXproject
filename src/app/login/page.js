import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

export const metadata = {
  title: 'Login - GalleryX',
  description: 'Log in to your GalleryX account to access virtual tours and exhibits',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <LoginForm />
    </div>
  );
}