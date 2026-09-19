import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-pad mx-auto max-w-site py-32 text-center">
      <p className="label">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page has left the table.</h1>
      <Link href="/shop" className="mt-8 inline-block text-[11px] uppercase tracking-label">
        Return to the collection
      </Link>
    </div>
  );
}
