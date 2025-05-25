import RegisterForm from '../components/RegisterForm';

export const metadata = {
  title: 'Create Account - GalleryX',
  description: 'Create a new account to access virtual tours and exhibits on GalleryX',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <RegisterForm />
    </div>
  );
}