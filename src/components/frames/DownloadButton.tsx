"use client";

import { Button } from "@mui/material";
import { Check, Download, Loader } from "lucide-react";
import { memo, useCallback, useState } from "react";

interface DownloadButtonProps {
  onDownload: () => void;
  disabled?: boolean;
}

export const DownloadButton = memo<DownloadButtonProps>(
  function DownloadButton({ onDownload, disabled }) {
    const [isDownloading, setIsDownloading] = useState(false);
    const [justDownloaded, setJustDownloaded] = useState(false);

    const handleDownload = useCallback(async () => {
      if (disabled || isDownloading) return;

      try {
        setIsDownloading(true);

        // Add processing delay for visual feedback
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Execute the download
        onDownload();

        setJustDownloaded(true);
        setTimeout(() => setJustDownloaded(false), 2000);
      } catch (error) {
        console.error("Download error:", error);
        alert("ডাউনলোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      } finally {
        setIsDownloading(false);
      }
    }, [disabled, isDownloading, onDownload]);

    const getButtonContent = () => {
      if (isDownloading) {
        return (
          <>
            <Loader className="w-5 h-5 animate-spin" strokeWidth={2.5} />
            <span>প্রসেসিং...</span>
          </>
        );
      }

      if (justDownloaded) {
        return (
          <>
            <Check className="w-5 h-5" strokeWidth={2.5} />
            <span>ডাউনলোড সম্পন্ন!</span>
          </>
        );
      }

      return (
        <>
          <Download className="w-5 h-5" strokeWidth={2.5} />
          <span>ছবি ডাউনলোড করুন</span>
        </>
      );
    };

    const buttonGradient =
      "linear-gradient(90deg, #006a4e 0%, #007a5e 50%, #007a5e 100%)";
    const buttonGradientHover =
      "linear-gradient(90deg, #005a43 0%, #006a4e 50%, #006a4e 100%)";

    return (
      <div className="space-y-3">
        <Button
          onClick={handleDownload}
          disabled={disabled || isDownloading}
          className={justDownloaded ? "animate-pulse" : ""}
          variant="contained"
          disableElevation
          sx={{
            width: "100%",
            height: 40,
            borderRadius: 2,
            background: buttonGradient,
            color: "#ffffff",
            fontWeight: 700,
            fontSize: 15,
            textTransform: "none",
            gap: 1.5,
            transition: "transform 0.15s ease, opacity 0.2s ease",
            "&:hover": {
              background: buttonGradientHover,
            },
            "&:active": {
              transform: "scale(0.98)",
            },
            "&.Mui-disabled": {
              opacity: 0.55,
              color: "#ffffff",
              background: buttonGradient,
            },
          }}
        >
          {getButtonContent()}
        </Button>
      </div>
    );
  },
);
