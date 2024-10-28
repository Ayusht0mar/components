import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold my-10">Components</h1>
      <div className="flex flex-col gap-4">
          <Link
            href="/infinitescrollingcarousel"
          >
            Infinite Scrolling Carousel
          </Link>
          <Link
            href="/figmastyletoolbar/"
          >
            Figma Style Toolbar
          </Link>
          <Link
            href="/animatednumbercounter/"
          >
            Animated Numbers Counter
          </Link>
          <Link
            href="/glassmaterialnavbar/"
          >
            Glass Material Navbar
          </Link>
          <Link
            href="/animatedgrid/"
          >
            Animated Grid
          </Link>
          <Link
            href="/bottomtray/"
          >
            Bottom Tray
          </Link>
          <Link
            href="/rotatingbordergradientbutton/"
          >
            Rotating Border Gradient Button
          </Link>
          <Link
            href="/glowingbordergradientbutton/"
          >
            Glowing Border Gradient Button
          </Link>
      </div>
    </div>
  );
}
