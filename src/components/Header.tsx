export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <img
            src="/yucart-logo.png"
            alt="Yucart"
            className="h-11 w-11 rounded-xl object-contain"
          />
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-stone-900">
              Yu<span className="text-brand-500">cart</span>
            </h1>
            <p className="text-xs text-stone-500">Conversational grocery shopping</p>
          </div>
        </div>
      </div>
    </header>
  );
}
