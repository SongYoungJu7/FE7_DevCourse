export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <header className="text-center py-8 sm:py-12 px-4 sm:px-6">
        <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl">Gallery Wall</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
          An art gallery inspired collection featuring natural landscapes in
          various scales and arrangements
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <article
          className="grid gap-2 sm:gap-3 md:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{
            gridAutoRows: "150px sm:180px md:200px",
          }}
        >
          {/* 이미지 1장 렌더링 */}
          <figure
            className={`
                  group bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative                 
                  col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2
                `}
            style={{
              borderWidth: "0.5px",
            }}
          >
            <section className="relative overflow-hidden h-full">
              <img
                src={
                  "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                }
                alt={"Snow-capped mountains against a blue sky"}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
              />
              <section className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></section>
              <figcaption
                className={`
                        absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        text-white transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 p-3 sm:p-3 md:p-4
                      `}
              >
                <h3 className="mb-1">Majestic Mountain Landscape</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Snow-capped mountains against a blue sky
                </p>
              </figcaption>
            </section>
          </figure>
        </article>
      </section>

      <footer className="text-center py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-muted/30">
        <p className="text-muted-foreground text-sm sm:text-base">
          <span className="block sm:inline">
            Curated Photography Collection
          </span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">Gallery Wall Experience</span>
          <span className="block mt-2 text-xs sm:text-sm">
            0 images hidden • 0 displayed
          </span>
        </p>
      </footer>
    </main>
  );
}
