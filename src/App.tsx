import { RotateCcw } from "lucide-react";
import ImageCard from "./components/ImageCard";
import { useEffect, useState } from "react";

export type ItemType = [
  number,
  { image: { src: string; caption: string; alt: string }; isDeleted: boolean },
];

export default function App() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Majestic Mountain Landscape",
      alt: "Snow-capped mountains against a blue sky",
    },
    {
      src: "https://images.unsplash.com/photo-1617381519460-d87050ddeb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NzMxNjA2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Modern City Architecture",
      alt: "Contemporary urban buildings with glass facades",
    },
    {
      src: "https://images.unsplash.com/photo-1514747975201-4715db583da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzfGVufDF8fHx8MTc1NzI4NzIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Ocean Waves",
      alt: "Powerful ocean waves crashing on the shore",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlc3xlbnwxfHx8fDE3NTcyMzQwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Forest Trees",
      alt: "Dense forest with tall green trees",
    },
    {
      src: "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBza3l8ZW58MXx8fHwxNzU3MzM2MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Sunset Sky",
      alt: "Beautiful sunset with orange and pink colors in the sky",
    },
    {
      src: "https://images.unsplash.com/photo-1605895370326-e96b9d52e3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBnYXJkZW58ZW58MXx8fHwxNzU3MzM2MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Flower Garden",
      alt: "Colorful flowers blooming in a garden",
    },
    {
      src: "https://images.unsplash.com/photo-1729543039240-e62cc29133f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwcmVmbGVjdGlvbiUyMG5hdHVyZXxlbnwxfHx8fDE3NTgxMzYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Lake Reflection",
      alt: "Serene lake with perfect mountain reflections",
    },
    {
      src: "https://images.unsplash.com/photo-1685564551828-5724076c8458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwbWVhZG93JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1ODEzNjI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Wildflower Meadow",
      alt: "Colorful wildflowers in a vast meadow landscape",
    },
  ];
  const [deleteCount, setDeleteCount] = useState(0);
  const initialItems: ItemType[] = [];

  galleryImages.forEach((image, index) => {
    initialItems.push([
      index,
      {
        image: { src: image.src, caption: image.caption, alt: image.alt },
        isDeleted: false,
      },
    ]);
  });

  const [items, setItems] = useState(initialItems);

  const allRestoreClick = () =>
    setItems((item) =>
      item.map(([id, data]) => [id, { ...data, isDeleted: false }])
    );

  useEffect(() => {
    const count = items.filter(([_, data]) => data.isDeleted).length;
    setDeleteCount(count);
  }, [items]);

  return (
    <main className="min-h-screen bg-background">
      <header className="text-center py-8 sm:py-12 px-4 sm:px-6">
        {deleteCount === 0 ? null : (
          <div className="flex justify-between items-start max-w-7xl mx-auto mb-8">
            <div className="flex gap-3">
              <button
                onClick={allRestoreClick}
                className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background hover:bg-accent transition-colors duration-200 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Restore All {deleteCount}
              </button>
            </div>
          </div>
        )}
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
          {items.map((item) => (
            <ImageCard item={item} setItems={setItems} />
          ))}
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
            {deleteCount} images hidden • {galleryImages.length - deleteCount}{" "}
            displayed
          </span>
        </p>
      </footer>
    </main>
  );
}
