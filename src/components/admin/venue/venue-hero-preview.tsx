import { Camera } from 'lucide-react';

interface Props {
  name?: string;
  imageUrl?: string;
  onUploadPhoto?: () => void;
}

export function VenueHeroPreview({
  name = 'Placeholder Nama Venue',
  imageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtCHQHkHecMadViuqe429f2Y8CTY6m3cN4npMQIq4I9HH7y8Ak7Yqm6hjMeyANHWWLrEoVxp2xgbnfhWxzvkiZoDoAKE4PcxlzjUM4ONq5gjl6XqEZadFUBGVTUfXBncN7iLmAndPEvJkQqlTC-HBzxeA3LZIOlkWQCFqAVYOclZf1jQlH8RKFdLQb8LEDLtXL_qwRGD3qgBA6au0Z5IXZwlnFl6H8g-jOSDQ5xhLvR4j2jiRbzy0UYw',
  onUploadPhoto,
}: Props) {
  return (
    <div className="mt-5 relative w-full h-44 rounded-xl overflow-hidden bg-surface-container-low shadow-md border border-outline-variant/30 group">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-surface via-surface-container-lowest/60 to-transparent" />

      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <h3 className="font-headline-sm text-sm text-on-surface font-bold truncate drop-shadow-sm">
            {name}
          </h3>
        </div>
        <button
          onClick={onUploadPhoto}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/40 text-on-surface hover:text-primary hover:border-primary/40 active:scale-95 transition-all text-label-xs font-label-xs font-semibold shadow-md flex-shrink-0"
          type="button"
        >
          <Camera className='"material-symbols-outlined w-4 h-4 text-primary' />

          <span>Upload Foto Arena</span>
        </button>
      </div>
    </div>
  );
}
