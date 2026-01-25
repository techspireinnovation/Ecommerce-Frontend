"use client";
import ReusableField from "../field/ReusableField";
import { Input } from "@/components/ui/input";
import SeoSettingsReusable from "../SeoSettingsReusable";
import ReusableStatusCard from "../ReusableStatusCard";
import SubmitCancel from "../submitCancel";
import UploadImageContainer from "../UploadImageContainer";
import { Image } from "lucide-react";
import DialogCreateFormHeader from "./header";
import { CategoryTypes } from "@/features/product/categories/category.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useEffect } from "react";
import { Form } from "@/components/ui/form";

interface ReusableCreateDialogProps {
  label: string;
  schema: any;
  createFn: any;
  isEdit: boolean;
  updateFn: any;
  showFn: any;
  selectedId: any;
}

const ReusableCreateDialog = ({
  label,
  schema,
  isEdit,
  updateFn,
  showFn,
  createFn,
  selectedId,
}: ReusableCreateDialogProps) => {
  const methods = useForm<CategoryTypes>({
    resolver: zodResolver(schema),
    shouldUnregister: false,

    defaultValues: {
      name: "",
      seo_title: "",
      seo_description: "",
      seo_keywords: [],
    },
  });

  const getById = async (id: number) => {
    (async () => {
      const res = await showFn(selectedId);
      const api = res.data.data;
      console.log("api", api);
      methods.reset(
        {
          name: api.name ?? "",
          seo_image_url: api.seo_image_url,

          seo_title: api.seo_title ?? "",
          seo_description: api.seo_description ?? "",
          seo_keywords: api.seo_keywords ?? [],
          status: api.status === "active",
          image_url: api.image_url,
        },
        {
          keepDirty: false,
        },
      );
    })();
  };

  useEffect(() => {
    if (isEdit) {
      getById(selectedId);
    }
  }, [isEdit]);

  const onSubmitHandler = async (data: CategoryTypes) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("status", data.status == true ? "1" : "0");

    if (typeof data.image_url == "string") {
      formData.append("image", data.image_url);
      formData.append("seo_image", data.seo_image_url);
    }

    if (data.seo_description)
      formData.append("seo_description", data.seo_description);
    formData.delete("seo_keywords");
    formData.append("seo_keywords[]", "rice");
    if (data.seo_title) formData.append("seo_title", data.seo_title);
    try {
      let res = undefined;
      if (isEdit) {
        formData.append("_method", "PUT");
        res = await updateFn(formData, selectedId);
      } else {
        res = await createFn(formData);
      }
      if (res.success == false) {
        const error = res.error.body.message;
        console.log("res", { error: res });
        const newformData = res.FormData;
        for (const pair of newformData.entries()) {
          console.log(pair[0], pair[1]);
        }
        toast.error(error, { position: "bottom-center" });
      }
      if (res.success == true) {
        toast.success("Category created Successfully");
      }
    } catch (error) {
      console.log("error", { error });
    } finally {
      console.log("finally");
    }
  };

  const onErrorHandler = (errors: any) => {
    console.log(errors, { values: methods.getValues() });
    const firstError = Object.entries(errors)[0];
    if (firstError) {
      const [field, error] = firstError;
      const message = error?.message;
    }
  };

  return (
    <>
      <DialogCreateFormHeader pageFor={label} />
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler, onErrorHandler)}>
          <UploadImageContainer
            icon={<Image size={80} color="gray" />}
            label={label}
            uploadButtonText={"Upload Image"}
            name="image_url"
            register={methods.register}
            control={methods.control}
            setValue={methods.setValue}
            error={methods.formState.errors.image_url?.message}
            getValues={methods.getValues}
          />
          <ReusableField label={`${label} name`}>
            <Input {...methods.register("name")} />
          </ReusableField>
          <SeoSettingsReusable
            register={methods.register}
            setValue={methods.setValue}
            errors={methods.formState.errors}
            control={methods.control}
            getValues={methods.getValues}
            reset={methods.reset}
          />
          <ReusableStatusCard
            control={methods.control}
            name={`${label}`}
            register={methods.register}
          />
          <SubmitCancel isSubmitting={methods.formState.isSubmitting} />
        </form>
      </Form>
    </>
  );
};

export default ReusableCreateDialog;
