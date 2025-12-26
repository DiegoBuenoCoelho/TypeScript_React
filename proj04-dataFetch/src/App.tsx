import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import imgFetching from "../public/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getData = async () => {
			setIsFetching(true);

			try {
				const theData = (await get(
					"https://jsonplaceholder.typicode.com/posts"
				)) as RawDataBlogPost[];

				console.warn({ theData });

				const blogPosts: BlogPost[] = theData.map((rawData) => {
					return {
						id: rawData.id,
						title: rawData.title,
						text: rawData.body,
					};
				});
				setFetchedPosts(blogPosts);
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
				}
			} finally {
				setIsFetching(false);
			}
		};

		getData();
	}, []);

	let contentNodePlaceHolder: ReactNode;
	if (fetchedPosts) {
		contentNodePlaceHolder = <BlogPosts posts={fetchedPosts} />;
	}

	let contentNodeError: ReactNode;
	if (error) {
		contentNodeError = <ErrorMessage text={error} />;
	}

	return (
		<main>
			{isFetching && (
				<img
					src={imgFetching}
					alt="Fetching"
				/>
			)}
			{contentNodeError}
			{contentNodePlaceHolder}
		</main>
	);
}

export default App;
