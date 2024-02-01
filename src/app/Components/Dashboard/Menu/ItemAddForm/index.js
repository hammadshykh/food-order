"use client";

import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { uploadImage } from "@/app/Context/actions";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

const ItemAddForm = ({ onAdd, onToast }) => {
  const form = useForm();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { imageUrl, progress, error } = useSelector((state) => state.menuStore);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      dispatch(uploadImage(image));
    }
  };
  // ...

  // 2. Define a submit handler.
  function onSubmit(values) {
    if (
      !values.itemName ||
      !values.description ||
      !values.category ||
      !values.price
    ) {
      onToast({
        variant: "destructive",
        title: "ItemAddForm",
        description: "please fill the all fields",
        action: "Try Again",
      });
      return;
    }
    onAdd({ ...values, imageUrl });
    onToast({
      variant: "success",
      title: "Added Item !",
      description: "Added Item successfully",
      action: "thanks",
    });
  }

  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div>
          <input type="file" onChange={handleChange} />
          <Button className="my-3" variant="secondary" onClick={handleUpload}>
            Upload
          </Button>
          {progress > 0 && <p>Upload Progress: {progress}%</p>}
          {error && <p>Error: {error}</p>}
          {imageUrl && <Image src={imageUrl} alt="Uploaded" />}
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="itemName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item name</FormLabel>
                <FormControl>
                  <Input placeholder="ItemName" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Category" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="price" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="block w-full bg-red-600 dark:text-white"
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ItemAddForm;
