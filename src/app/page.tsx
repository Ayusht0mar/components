import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold my-10">Components</h1>
      <Link
        href="/infinitescrollingcarousel"
      >
        Infinite Scrolling Carousel
      </Link>
    </div>
  );
}
