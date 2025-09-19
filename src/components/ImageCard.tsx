import { RotateCcw, Trash2 } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import type { ItemType } from "../App";

type imageCardProps = {
  item: ItemType;
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function ImageCard(props: imageCardProps) {
  const { item, setItems } = props;
  const { 0: index, 1: data } = item;
  const { image, isDeleted } = data;

  const DeleteBtnClick = () => {
    setItems((item: ItemType[]) =>
      item.map(([id, data]) =>
        id === index ? [id, { ...data, isDeleted: true }] : [id, data]
      )
    );
  };

  const restoreBtnClick = () => {
    setItems((item: ItemType[]) =>
      item.map(([id, data]) =>
        id === index ? [id, { ...data, isDeleted: false }] : [id, data]
      )
    );
  };

  return (
    <>
      <figure
        key={index}
        data-deleted={isDeleted}
        className={`
                  group bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative                 
                  col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2 ${isDeleted ? "opacity-40 grayscale border-dashed border-muted-foreground/30" : ""}
                `}
        style={{
          borderWidth: "0.5px",
        }}
      >
        <section className="relative overflow-hidden h-full">
          <ImageWithFallback
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
          />
          <section className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></section>
          {/* Delete button */}
          <button
            onClick={DeleteBtnClick}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-destructive text-destructive-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-destructive/90 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {isDeleted ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={restoreBtnClick}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-md hover:bg-accent transition-colors duration-200 shadow-lg cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Restore
              </button>
            </div>
          ) : (
            <figcaption
              className={`
                        absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        text-white transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 p-3 sm:p-3 md:p-4
                      `}
            >
              <h3 className="mb-1">{image.caption}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {image.alt}
              </p>
            </figcaption>
          )}
        </section>
      </figure>
    </>
  );
}
