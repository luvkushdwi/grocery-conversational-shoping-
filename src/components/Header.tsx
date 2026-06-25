export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 shadow-sm shadow-brand-600/30">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-stone-900">
              Yu<span className="font-serif italic text-brand-600">cart</span>
            </h1>
            <p className="text-xs text-stone-500">Conversational grocery shopping</p>
          </div>
        </div>
      </div>
    </header>
  );
}
