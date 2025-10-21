import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  video?: string;
  currentIndex?: number;
}

export function ImageGallery({ images, alt, video, currentIndex = 0 }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [showVideo, setShowVideo] = useState(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    setShowVideo(false);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    setShowVideo(false);
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setShowVideo(false);
    setOpen(true);
  };

  const handleVideoClick = () => {
    setShowVideo(true);
    setOpen(true);
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 gap-2">
        <div 
          className="aspect-video overflow-hidden bg-slate-100 cursor-pointer relative group flex items-center justify-center"
          onClick={() => handleImageClick(0)}
        >
          <img 
            src={images[0]} 
            alt={alt}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {video && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoClick();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-all hover:scale-105"
              >
                <Play className="h-5 w-5 fill-white" />
                Watch Video
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              +{images.length - 1} more
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          <div className="relative w-full h-[90vh] flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Video/Image Toggle */}
            {video && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
                <Button
                  variant={!showVideo ? "default" : "ghost"}
                  size="sm"
                  className={!showVideo ? "bg-white text-black hover:bg-slate-200" : "text-white hover:bg-white/10"}
                  onClick={() => setShowVideo(false)}
                >
                  Photos
                </Button>
                <Button
                  variant={showVideo ? "default" : "ghost"}
                  size="sm"
                  className={showVideo ? "bg-white text-black hover:bg-slate-200" : "text-white hover:bg-white/10"}
                  onClick={() => setShowVideo(true)}
                >
                  Video
                </Button>
              </div>
            )}

            {/* Previous Button */}
            {!showVideo && images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 text-white hover:bg-white/10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Main Content */}
            <div className="w-full h-full flex items-center justify-center p-12">
              {showVideo && video ? (
                <video
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg"
                >
                  <source src={video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={images[activeIndex]}
                  alt={`${alt} - Image ${activeIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Next Button */}
            {!showVideo && images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 text-white hover:bg-white/10"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}

            {/* Image Counter */}
            {!showVideo && images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded">
                {activeIndex + 1} / {images.length}
              </div>
            )}

            {/* Thumbnail Strip */}
            {!showVideo && images.length > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                      idx === activeIndex ? 'border-white' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

