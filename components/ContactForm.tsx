"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading02Icon, SentIcon } from "@hugeicons/core-free-icons";
import { sendMail } from "@/lib/mailConfig";
import toast from "react-hot-toast";

// Zod schema for form validation
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  purpose: z.string().min(1, "Please select a purpose"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const purposeOptions = [
  { value: "freelance-project", label: "Hiring for freelance project" },
  { value: "casual-chat", label: "Just a casual chat" },
  { value: "collaboration", label: "Looking for collaboration" },
  { value: "job-opportunity", label: "Offering job opportunity" },
];

function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ContactFormValues>({
    resolver: standardSchemaResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      purpose: "",
      message: "",
    },
  });

  const selectedPurpose = watch("purpose");

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    const sent = await sendMail({
      email: data.email,
      name: data.fullName,
      message: data.message,
      purpose: data.purpose,
    });
    if (sent) {
      toast.success("Message sent successfully!");
      reset();
      return;
    }
    toast.error("Failed to send message. Please try again.");
  };

  return (
    <div className="w-full">
      <div className="mb-8 text-start">
        <h2 className="text-lg md:text-xl font-semibold text-title mb-2">
          Send me a message
        </h2>
        <p className="text-muted-foreground">
          Fill out the form below and I will get back to you as soon as
          possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 [&_input]:rounded-[8px] [&_textarea]:rounded-[8px] [&_input]:border-solid [&_input]:border-black/30 dark:[&_input]:border-white/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Full Name Field */}
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <div className="p-[2px] border border-solid border-black/30 dark:border-white/30 rounded-[10px]">
              <Input
                id="fullName"
                placeholder="John Doe"
                {...register("fullName")}
                aria-invalid={!!errors.fullName}
              />
            </div>
            {errors.fullName && (
              <p className="text-sm text-destructive">
                {errors.fullName.message as string}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <div className="p-[2px] border border-solid border-black/30 dark:border-white/30 rounded-[10px]">
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>
        {/* Purpose Dropdown Field */}
        <div className="space-y-2 md:w-xs">
          <Label htmlFor="purpose">
            Purpose <span className="text-destructive">*</span>
          </Label>
          <div className="p-[2px] border border-solid border-black/30 dark:border-white/30 rounded-[10px]">
            <Select
              value={selectedPurpose}
              onValueChange={(value) =>
                setValue("purpose", value, { shouldValidate: true })
              }
            >
              <SelectTrigger
                className="w-full border border-solid border-black/30 dark:border-white/30 rounded-[8px]"
                aria-invalid={!!errors.purpose}
              >
                <SelectValue placeholder="Select purpose of message" />
              </SelectTrigger>
              <SelectContent>
                {purposeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {errors.purpose && (
            <p className="text-sm text-destructive">{errors.purpose.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <div className="p-[2px] border border-solid border-black/30 dark:border-white/30 rounded-[8px]">
            <Textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              className="resize-none h-[150px] border border-solid border-black/30 dark:border-white/30 rounded-[8px]"
              {...register("message")}
              aria-invalid={!!errors.message}
            />
          </div>
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <div className="p-[2px] group border w-fit border-dashed dark:border-white/30 border-black/20  rounded-[10px]">
          <Button
            className="rounded-[10px] [&_svg]:group-hover:rotate-45 transition-all duration-300"
            disabled={!isDirty || isSubmitting}
            size={"lg"}
          >
            {isSubmitting ? "Sending Message" : "Send Message"}
            {isSubmitting ? (
              <HugeiconsIcon icon={Loading02Icon} className="animate-spin" />
            ) : (
              <HugeiconsIcon icon={SentIcon} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
