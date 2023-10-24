export default function NotFound() {
	return (
		<div className="grid h-screen px-4 bg-base-100 place-content-center">
			<div className="text-center">
				<h1 className="font-black text-9xl">404</h1>

				<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

				<p className="mt-4 text-gray-500">We can`&apos;`t find that page.</p>

				<a href="#" className="btn btn-primary">
					Go Back Home
				</a>
			</div>
		</div>
	);
}
