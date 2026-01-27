import { Input } from "@/components/ui/input";
import ReusableField from "@/reusable/form/field/ReusableField";
import ReusableStatusCard from "@/reusable/form/ReusableStatusCard";
import SeoSettingsReusable from "@/reusable/form/SeoSettingsReusable";
import SubmitCancel from "@/reusable/form/submitCancel";
import UploadImageContainer from "@/reusable/form/UploadImageContainer";
import { Image } from "lucide-react";
import { ReusableCreateDialogProps } from "../categories/categories.types";
import { Controller, useForm } from "react-hook-form";
import { SubCategorytypes } from "./sub-category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { getActiveCategoryListApi } from "../categories/categoryActions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { consoleFormData } from "@/utils/helper/formDataHelper";

const SubCategoryForWrapper = ({
  label,
  schema,
  isEdit,
  updateFn,
  showFn,
  createFn,
  selectedId,
}: ReusableCreateDialogProps) => {
  const [categoryList, setCategoryList] = useState([]);

  const methods = useForm<SubCategorytypes>({
    resolver: zodResolver(schema),
    shouldUnregister: false,
    defaultValues: {
      name: "",

      category_name: null,

      image_url: null,

      status: "active",

      seo_title: null,
      seo_description: null,
      seo_keywords: "",

      seo_image_url: null,
    },
  });

  const getById = useCallback(
    async (id: number) => {
      console.log({id})
      const res = await showFn(id);
            console.log('getById',{res})
      const data = res.data.data;
     
     
      methods.reset({
        category_id: data.category_id,
        category_name: data.category_name,
        image_url: data.image_url,
        name: data.name,
        seo_description: data.seo_description,
        seo_image_url: data.seo_image_url,
        seo_title: data.seo_title,
        seo_keywords: data.seo_keywords.join(','),
        status: data.status 
      });
    },
    [methods, showFn],
  );

  const getActiveCategoryUi = useCallback(async () => {
    const res = await getActiveCategoryListApi();
    const successStatus = res.success;
    if (successStatus == true) {
      const data = res.data.data;
      if (data.length > 0) {
        let changedData = data.map(
          ({ id, name }: { id: number; name: string }) => {
            return { value: id, label: name };
          },
        );
        setCategoryList(changedData);
      }
    }
  }, []);

  useEffect(() => {
    console.log({isEdit, selectedId});
    if (isEdit) {
      getById(selectedId);
    }
    getActiveCategoryUi();
  }, [isEdit]);

  const buildFormData = (data: SubCategorytypes) => {
    const fd = new FormData();
    fd.append("category_id", data.category_id);
    if (data.category_name) {
      fd.append("category_name", data.category_name);
    }
    if (data.image_url instanceof File) {
      fd.append("image", data.image_url);
      fd.append("seo_image", data.image_url);
    }
    fd.append("name", data.name);
    if (data.seo_title) {
      fd.append("seo_title", data.seo_title);
    }
    if (data.seo_description) {
      fd.append("seo_description", data.seo_description);
    }
    if (data.seo_keywords) {
      const seoKWArr = data.seo_keywords?.split(",");
      seoKWArr.forEach((keyword) => {
        fd.append("seo_keywords[]", keyword);
      });
    }
    fd.append("status", data.status ? "1" : "0");
    return fd;
  };

  const onSubmitHandler = useCallback(
    async (data: SubCategorytypes) => {
      const formData = buildFormData(data);
      console.log(consoleFormData(formData));
      try {
        let res;
        if (isEdit) {
          formData.append("_method", "PUT");
          res = await updateFn(formData, selectedId);
        } else {
          res = await createFn(formData);
          console.log("res", { res });
        }
        if (!res?.success) {
          toast.error(res?.error?.body?.message ?? "Failed to save");
          return;
        }

        toast.success(
          isEdit
            ? "Sub Category updated successfully"
            : "Sub Category created successfully",
        );
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      } finally {
        console.log("finally");
      }
    },
    [isEdit, selectedId, createFn, updateFn],
  );

  const onErrorHandler = (errors: any) => {
    console.log(errors, { values: methods.getValues() });
    const firstError = Object.entries(errors)[0];
  };

  return (
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
        <div className="flex gap-3">
          <ReusableField label={`${label} name*`}>
            <Input {...methods.register("name")} />
          </ReusableField>
          <ReusableField label={`Parent Category`}>
            <Controller
              name="category_id"
              control={methods.control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>

                  <SelectContent>
                    {categoryList.map(({ value, label }) => (
                      <SelectItem key={value} value={String(value)}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </ReusableField>
        </div>
        <SeoSettingsReusable
          register={methods.register}
          setValue={methods.setValue}
          errors={methods.formState.errors}
          control={methods.control}
          getValues={methods.getValues}
          reset={methods.reset}
          label={label}
        />
        <ReusableStatusCard
          control={methods.control}
          name={`${label}`}
          register={methods.register}
        />
        <SubmitCancel isSubmitting={methods.formState.isSubmitting} />
      </form>
    </Form>
  );
};

export default SubCategoryForWrapper;
