import { Link } from "react-router-dom";

export default function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-muted-foreground">{description}</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
