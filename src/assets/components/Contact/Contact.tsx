import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type FormValues = {
  your_name: string
  your_email: string
  message: string
}

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      your_name: "",
      your_email: "",
      message: "",
    },
  })

  const sendEmail = (formData: FormValues) => {
    const emailData = {
      from_name: formData.your_name,
      from_email: formData.your_email,
      to_name: "Tobi",
      message: formData.message,
    }

    return emailjs.send(
      "service_bhz6eog",
      "template_o4jl7u5",
      emailData,
      "-hujtdpN8h5bMz6oo"
    )
  }

  const onSubmit = async (formData: FormValues) => {
    try {
      await sendEmail(formData)
      toast.success("Message sent. I’ll get back to you soon.")
      reset()
    } catch {
      toast.error("Something went wrong. Please try again or email directly.")
    }
  }

  return (
    <div className="mx-auto max-w-lg pb-8 pt-8 sm:pt-10">
      <h1 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Contact
      </h1>
      <p className="mt-2 text-muted-foreground">
        Share a note about work, collaborations, or anything you’d like to discuss.
      </p>

      <form
        className="mt-10 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="space-y-2">
          <Label htmlFor="your_name">Name</Label>
          <Input
            id="your_name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.your_name)}
            className={cn("h-10", errors.your_name && "aria-invalid")}
            {...register("your_name", {
              required: "Name is required",
              maxLength: { value: 80, message: "Name is too long" },
              pattern: {
                value: /^[A-Za-z\s'.-]+$/,
                message: "Use letters and common name characters only",
              },
            })}
          />
          {errors.your_name && (
            <p className="text-sm text-destructive" role="alert">
              {errors.your_name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="your_email">Email</Label>
          <Input
            id="your_email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.your_email)}
            className={cn("h-10", errors.your_email && "aria-invalid")}
            {...register("your_email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.your_email && (
            <p className="text-sm text-destructive" role="alert">
              {errors.your_email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Your message"
            aria-invalid={Boolean(errors.message)}
            className={cn("min-h-32", errors.message && "aria-invalid")}
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Please write a bit more detail" },
            })}
          />
          {errors.message && (
            <p className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  )
}

export default Contact
