import LinkedIn from '@/img/linkedin.svg';
import GitHub from '@/img/github.svg';
import Phone from '@/img/phone.svg';
import Mail from '@/img/mail.svg';

export default function profiles() {
	return (
		<>
			<a className="w-fill text-xl" href="https://github.com/snrankin" target="_blank">
				<span className="icon">
					<GitHub className="block stroke-2" />
				</span>

				<span className="sr-only">View My GitHub Profile</span>
			</a>
			<a className="w-fill text-xl" href="https://www.linkedin.com/in/snrankin" target="_blank">
				<span className="icon">
					<LinkedIn className="block stroke-2" />
				</span>
				<span className="sr-only">View My LinkedIn Profile</span>
			</a>
			<a className="w-fill text-xl" href="tel:480-382-4295" target="_blank">
				<span className="icon">
					<Phone className="block stroke-2" />
				</span>
				<span className="sr-only">Call me at 480-382-4295</span>
			</a>
			<a className="w-fill text-xl" href="mailto:samrankin.dev@gmail.com" target="_blank">
				<span className="icon">
					<Mail className="block stroke-2" />
				</span>
				<span className="sr-only">Email me at samrankin.dev@gmail.com</span>
			</a>
		</>
	);
}
