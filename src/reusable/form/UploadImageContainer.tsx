import UploadImageButton from "../button/UploadImageButton";

const UploadImageContainer = ({
  icon,
  uploadButtonText = "Upload Image",
  label
}: any) => {
  return (
    <>
      {label && <label>{label} Logo</label>}
      <div className="flex flex-col items-center gap-4 border-1 my-2 py-4 rounded-lg">
        {icon}
        <p>No Image uploaded</p>
        <UploadImageButton text={uploadButtonText} />
      </div>
    </>
  );
};

export default UploadImageContainer;
