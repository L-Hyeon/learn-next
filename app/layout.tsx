import "./globals.css";

export const metadata = {
	title: "Learn-Next",
	description: "Learning Next",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko-kr">
			<body>{children}</body>
		</html>
	);
}
