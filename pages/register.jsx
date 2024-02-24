import RegistrationForm from '@/components/RegistrationForm';
import Head from 'next/head';
import React from 'react';

const register = () => {
	return (
		<>
			
			<main className="px-4 m-0 bg-gradient-to-br from-primary-color to-blue-400 min-h-screen">
				<RegistrationForm />
			</main>
		</>
	);
};

export default register;
