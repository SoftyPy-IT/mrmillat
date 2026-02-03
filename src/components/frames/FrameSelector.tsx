"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Grid3x3 } from "lucide-react";
import { Button, Card, CardContent } from "@mui/material";
import Image from "next/image";

interface Frame {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}

interface FrameSelectorProps {
  selectedFrameId: string;
  onFrameSelect: (frameId: string) => void;
}

const FRAME_DATA: Frame[] = Array.from({ length: 11 }, (_, i) => ({
  id: `frame${i + 1}`,
  name: `Frame ${i + 1}`,
  url: `/frames/frame${i + 1}.png`,
  thumbnail: `/frames/frame${i + 1}.png`,
}));

export const FrameSelector = memo<FrameSelectorProps>(function FrameSelector({
  selectedFrameId,
  onFrameSelect,
}) {
  const frames = useMemo(() => FRAME_DATA, []);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
    new Set(),
  );

  // Preload first 3 frames for faster initial loading
  useEffect(() => {
    const preloadFrames = async () => {
      const framesToPreload = frames.slice(0, 3);

      framesToPreload.forEach((frame) => {
        const img = new window.Image();
        img.onload = () => {
          setPreloadedImages((prev) => new Set(prev).add(frame.id));
        };
        img.src = frame.url;
      });
    };

    preloadFrames();
  }, [frames]);

  const handleImageLoad = useCallback((frameId: string) => {
    setLoadedImages((prev) => new Set(prev).add(frameId));
  }, []);

  const gradientTextClass =
    "bg-gradient-to-r from-[#006a4e] via-[#007a5e] to-[#007a5e] bg-clip-text text-transparent";
  const gradientBgClass =
    "bg-gradient-to-r from-[#006a4e] via-[#007a5e] to-[#007a5e]";

  return (
    <Card
      className="w-full"
      elevation={0}
      sx={{
        border: "1px solid rgba(0, 106, 78, 0.3)",
      }}
    >
      <CardContent className="p-3">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Grid3x3 className="w-5 h-5 text-[#006a4e]" />
            <h3 className={cn("text-base font-semibold", gradientTextClass)}>
              উপলব্ধ ফ্রেম
            </h3>
            <span
              className={cn(
                "ml-auto text-xs font-medium px-2.5 py-1 rounded-full text-white",
                gradientBgClass,
              )}
            >
              {frames.length} ফ্রেম
            </span>
          </div>

          {/* Scroll Container */}
          <div className="relative">
            {/* Frames Grid */}
            <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide scroll-smooth px-0.5">
              {frames.map((frame) => {
                const isSelected = selectedFrameId === frame.id;
                return (
                  <div key={frame.id} className="flex-shrink-0">
                    <Button
                      type="button"
                      onClick={() => onFrameSelect(frame.id)}
                      className="group"
                      aria-label={`Select ${frame.name}`}
                      aria-pressed={isSelected}
                      sx={{
                        minWidth: 0,
                        padding: 1.5,
                        width: { xs: 96, sm: 112 },
                        height: { xs: 96, sm: 112 },
                        borderRadius: 2,
                        border: "2px solid",
                        borderColor: isSelected
                          ? "#006a4e"
                          : "rgba(0, 106, 78, 0.4)",
                        backgroundColor: isSelected
                          ? "rgba(0, 106, 78, 0.05)"
                          : "transparent",
                        boxShadow: isSelected
                          ? "0 0 0 4px rgba(0, 122, 94, 0.3)"
                          : "none",
                        transition:
                          "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
                        "&:hover": {
                          borderColor: "#007a5e",
                          backgroundColor: "rgba(0, 122, 94, 0.05)",
                        },
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center relative">
                        {!loadedImages.has(frame.id) &&
                          !preloadedImages.has(frame.id) && (
                            <div className="absolute inset-0 bg-muted/50 animate-pulse flex items-center justify-center z-10 rounded-md">
                              <div className="h-5 w-5 border-2 border-[#006a4e]/30 border-t-[#007a5e] rounded-full animate-spin" />
                            </div>
                          )}
                        <Image
                          src={frame.thumbnail || "/placeholder.svg"}
                          alt={frame.name}
                          width={96}
                          height={96}
                          sizes="(max-width: 640px) 96px, 112px"
                          className={cn(
                            "h-full w-full object-contain transition-all duration-300",
                            loadedImages.has(frame.id) ||
                              preloadedImages.has(frame.id)
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                          onLoad={() => handleImageLoad(frame.id)}
                          onError={() => handleImageLoad(frame.id)}
                          priority={
                            parseInt(frame.id.replace("frame", "")) <= 3
                          }
                          quality={85}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>

                      {isSelected && (
                        <div
                          className={cn(
                            "absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-white shadow-lg border border-white/20 animate-in zoom-in duration-300",
                            gradientBgClass,
                          )}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </div>
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info Text */}
          <p className="text-xs text-[#006a4e] text-center mt-4">
            আপনার পছন্দের ফ্রেমটি নির্বাচন করুন এবং আপনার ছবি যোগ করুন
          </p>
        </div>
      </CardContent>
    </Card>
  );
});
