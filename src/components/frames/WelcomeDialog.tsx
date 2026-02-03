"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Download, Frame, Upload, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

interface WelcomeDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function WelcomeDialog({
  open: controlledOpen,
  onOpenChange,
}: WelcomeDialogProps) {
  const gradient =
    "linear-gradient(90deg, #006a4e 0%, #007a5e 50%, #007a5e 100%)";
  const gradientHover =
    "linear-gradient(90deg, #005a43 0%, #006a4e 50%, #006a4e 100%)";

  const [internalOpen, setInternalOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setTimeout(() => setInternalOpen(true), 0);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasVisitedBefore", "true");
    if (onOpenChange) {
      onOpenChange(false);
    } else {
      setInternalOpen(false);
    }
  };

  const isOpen = controlledOpen ?? internalOpen;

  const steps = [
    {
      icon: <Frame size={24} />,
      title: "ফ্রেম নির্বাচন",
      description: "যেকোনো একটি ফ্রেম নির্বাচন করুন।",
      step: "১",
    },
    {
      icon: <Upload size={24} />,
      title: "ছবি আপলোড",
      description: "আপনার একটি ছবি আপলোড করুন।",
      step: "২",
    },
    {
      icon: <ZoomIn size={24} />,
      title: "পজিশন সামঞ্জস্য",
      description: "জুম ইন আউট করে আপনার ছবির পজিশন ঠিক করুন।",
      step: "৩",
    },
    {
      icon: <Download size={24} />,
      title: "ডাউনলোড",
      description: "প্রিভিউ দেখে আপনার ফটোকার্ড টি ডাউনলোড করুন।",
      step: "৪",
    },
  ];

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      maxWidth="sm"
      fullWidth
      disableEscapeKeyDown
      PaperProps={{
        sx: {
          maxHeight: "90vh",
        },
      }}
    >
    <DialogTitle sx={{ textAlign: "center", fontWeight: 700, fontSize: 28 }}>
        <Box
          component="span"
          sx={{
            backgroundImage: gradient,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          নির্দেশিকা
        </Box>
        <Typography variant="body1" color="text.secondary" mt={1}>
          মাত্র ৪টি ক্লিকে নির্বাচনী ফটোকার্ড বানান
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={3}>
          {steps.map((step) => (
            <Box
              key={step.step}
              display="flex"
              gap={2}
              p={2}
              borderRadius={2}
              sx={{
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <Box
                width={48}
                height={48}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
                sx={{
                  backgroundImage: gradient,
                  color: "#ffffff",
                }}
              >
                {step.icon}
              </Box>

              <Box flex={1}>
                <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                  <Box
                    width={24}
                    height={24}
                    borderRadius="50%"
                    sx={{
                      backgroundImage: gradient,
                      color: "#ffffff",
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={14}
                    fontWeight={700}
                  >
                    {step.step}
                  </Box>
                  <Typography fontWeight={600} fontSize={18}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleClose}
          disableElevation
          sx={{
            backgroundImage: gradient,
            textTransform: "none",
            fontWeight: 700,
            "&:hover": {
              backgroundImage: gradientHover,
            },
          }}
        >
          শুরু করুন
        </Button>
      </DialogActions>
    </Dialog>
  );
}
