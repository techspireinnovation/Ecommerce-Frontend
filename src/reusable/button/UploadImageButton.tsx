"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useEffect, useState } from "react";

interface UploadImageButtonProps {
  text: string;
  onFileUpload: (file: File) => void;
  previewUrl: string | null;
  setPreviewUrl: any;
}

const UploadImageButton = ({
  text,
  onFileUpload,
  previewUrl,
  setPreviewUrl,
}: UploadImageButtonProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      const url = URL.createObjectURL(file);

      onFileUpload(file);
      setPreviewUrl(url);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="upload" className="w-max">
        <Button  asChild variant="default" >
          <div className="flex items-center gap-2">
            <Upload />
            <span className="!text-white">{text}</span>
          </div>
        </Button>
      </label>
      <input
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadImageButton;
