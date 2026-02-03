"use client";

import { memo, useCallback } from "react";
import { Box, IconButton, Slider } from "@mui/material";
import { Minus, Plus } from "lucide-react";

interface ZoomSliderProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export const ZoomSlider = memo<ZoomSliderProps>(function ZoomSlider({
  value,
  onChange,
  disabled,
}) {
  const gradient =
    "linear-gradient(90deg, #006a4e 0%, #007a5e 50%, #007a5e 100%)";
  const gradientHover =
    "linear-gradient(90deg, #005a43 0%, #006a4e 50%, #006a4e 100%)";

  const handleIncrement = useCallback(() => {
    if (!disabled) {
      onChange(Math.min(value + 10, 300));
    }
  }, [disabled, onChange, value]);

  const handleDecrement = useCallback(() => {
    if (!disabled) {
      onChange(Math.max(value - 10, 50));
    }
  }, [disabled, onChange, value]);

  const handleSliderChange = useCallback(
    (_: Event, newValue: number | number[]) => {
      if (Array.isArray(newValue)) {
        onChange(newValue[0]);
      } else {
        onChange(newValue);
      }
    },
    [onChange],
  );

  return (
    <Box width="100%">
      <Box display="flex" alignItems="center" gap={{ xs: 1.5, sm: 2 }}>
        {/* Decrease */}
        <IconButton
          onClick={handleDecrement}
          disabled={disabled || value <= 50}
          aria-label="Decrease zoom"
          sx={{
            width: { xs: 36, sm: 40 },
            height: { xs: 36, sm: 40 },
            borderRadius: 2,
            background: gradient,
            color: "#ffffff",
            transition: "all 0.2s ease",
            "&:hover": {
              background: gradientHover,
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
            "&.Mui-disabled": {
              opacity: 0.4,
              color: "#ffffff",
              background: gradient,
            },
          }}
        >
          <Minus size={20} />
        </IconButton>

        {/* Slider */}
        <Box flex={1} px={1}>
          <Slider
            value={value}
            onChange={handleSliderChange}
            min={50}
            max={300}
            step={5}
            disabled={disabled}
            aria-label="Zoom slider"
            sx={{
              height: 6,
              "& .MuiSlider-rail": {
                opacity: 0.25,
                backgroundColor: "#006a4e",
              },
              "& .MuiSlider-track": {
                backgroundImage: gradient,
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 18,
                height: 18,
                backgroundImage: gradient,
                border: "2px solid #ffffff",
                boxShadow: "0 4px 10px rgba(0, 122, 94, 0.25)",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0 6px 14px rgba(0, 122, 94, 0.35)",
                },
              },
            }}
          />
        </Box>

        {/* Increase */}
        <IconButton
          onClick={handleIncrement}
          disabled={disabled || value >= 300}
          aria-label="Increase zoom"
          sx={{
            width: { xs: 36, sm: 40 },
            height: { xs: 36, sm: 40 },
            borderRadius: 2,
            background: gradient,
            color: "#ffffff",
            transition: "all 0.2s ease",
            "&:hover": {
              background: gradientHover,
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
            "&.Mui-disabled": {
              opacity: 0.4,
              color: "#ffffff",
              background: gradient,
            },
          }}
        >
          <Plus size={20} />
        </IconButton>
      </Box>
    </Box>
  );
});
