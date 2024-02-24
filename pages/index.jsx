import Head from 'next/head';
import LoginForm from '@/components/LoginForm';

export default function Home() {
	return (
		<>
			<main className="px-4 m-0 bg-gradient-to-br from-primary-color to-blue-400">
				<LoginForm />
			</main>
		</>
	);
}
