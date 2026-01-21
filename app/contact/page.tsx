import ContactForm from '@/components/ContactForm'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">
      <div className="flex flex-col gap-4 items-center justify-center border-b pb-8">
        <h1 className="md:text-5xl text-4xl text-title font-bold text-center font-instrument-serif tracking-wider italic">
          Contact Me
        </h1>
        <p className="md:text-lg text-base text-muted-foreground tracking-wider text-center">
          Get in touch with me. I will get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  )
}

export default page