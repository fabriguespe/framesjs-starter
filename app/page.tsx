import { fetchMetadata } from "frames.js/next";

export async function generateMetadata({}: Props) {
  const queryString = `/frame`;
  const metadata = {
    title: "FramesJs Frame",
    other: {
      ...(await fetchMetadata(
        new URL(queryString, process.env.BASE_URL || "http://localhost:3001")
      )),
    },
  };
  return metadata;
}

export default function Home() {
  return <main>Hello</main>;
}
