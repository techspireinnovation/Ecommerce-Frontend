"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useState } from "react";

const UploadImageButton = ({ text }: { text: string }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="upload" className="w-max">
        <Button asChild variant={"default"}>
          <div>
            <Upload />
            {text}
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
      {fileName && <span className="text-sm text-light">{fileName}</span>}
    </div>
  );
};

export default UploadImageButton;
