import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="bg-zinc-900 text-white h-12">
			<div className="w-4/5 h-full m-auto flex items-center justify-center">
				<Link className="text-3xl font-bold uppercase" to="/">
					FoodVilla
				</Link>
				<span className="mx-5">
					Created with{' '}
					<span className="text-cyan-500 text-lg font-semibold">
						React ❤️{' '}
					</span>{' '}
					by{' '}
					<Link
						target={'_blank'}
						className="text-orange-400 text-xl font-semibold"
						to={'https://github.com/GitsOfVivek'}>
						VIVEK
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Footer;
