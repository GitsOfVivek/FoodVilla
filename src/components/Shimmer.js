import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const arr = new Array(15).fill(1);

const Shimmer = () => {
	return (
		<div className="flex flex-wrap justify-center items-center w-4/5 m-auto">
			{arr.map(() => (
				<div key={Math.random()}>
					<Skeleton className="m-2" height={280} width={256} />
					<div className="mx-2">
						<Skeleton className="my-1" height={20} width={150} />
						<Skeleton className="my-1" height={20} width={200} />
						<Skeleton className="my-1" height={20} width={256} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Shimmer;
