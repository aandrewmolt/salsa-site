import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-sand-50">
      <div className="max-w-xl text-center bg-white rounded-3xl p-10 border border-sand-100 shadow-sm">
        <div className="text-6xl mb-6">🌺</div>
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
          You&apos;re offline
        </h1>
        <p className="text-gray-600 mb-8">
          No worries—your PWA is ready. Please check your connection and try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-coral-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-coral-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-white text-coral-700 px-6 py-3 rounded-full font-semibold border-2 border-coral-200 hover:border-coral-400 transition-colors"
          >
            Book a Lesson
          </Link>
        </div>
      </div>
    </div>
  );
}
