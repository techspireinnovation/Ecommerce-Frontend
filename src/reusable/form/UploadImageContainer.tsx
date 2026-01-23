"use client";

import { useEffect, useState } from "react";
import UploadImageButton from "../button/UploadImageButton";
import { useController, useWatch } from "react-hook-form";

interface UploadImageContainerProps {
  icon: React.ReactNode;
  uploadButtonText: string;
  label?: string;
  name: string;
  setValue: any;
  error?: string;
  getValues: any;
  register: any;
  control: any;
}

const UploadImageContainer = ({
  icon,
  uploadButtonText,
  label,
  name,
  error,
  control,
}: UploadImageContainerProps) => {
  const { field } = useController({ name, control });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const handleFileUpload = (file: File) => {
    field.onChange(file);
  };

  const imageUrlValue = useWatch({
    control, name
  });


  useEffect(() => {
  if (imageUrlValue) {
    setPreviewUrl(imageUrlValue);
  } else {
    setPreviewUrl(null);
  }
}, [imageUrlValue]);

  return (
    <>
      {label && <label className="font-medium">{label} Logo</label>}
      <div className="flex flex-col items-center gap-4 border-1 my-2 py-4 rounded-lg">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="h-32 w-32 rounded-md object-cover border"
          />
        ) : (
          <>
            {icon}
            <p>No Image uploaded</p>
          </>
        )}
        <UploadImageButton
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
          onFileUpload={handleFileUpload}
          text={uploadButtonText}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </>
  );
};

export default UploadImageContainer;
