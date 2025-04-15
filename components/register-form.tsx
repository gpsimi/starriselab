"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Checkbox } from './ui/checkbox'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  city: z.string().min(2, 'Please enter a valid city'),
  birthYear: z.string(),
  newsletter: z.boolean(),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must consent to receive communications',
  }),
})

type FormValues = z.infer<typeof formSchema>

const RegisterForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      city: '',
      birthYear: '',
      newsletter: false,
      consent: false,
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      toast.success('Application submitted successfully!')
      form.reset()
    } catch (error) {
      toast.error('Failed to submit application. Please try again.')
      console.error('Submission error:', error)
    }
  }

  return (
    <div className="structure py-10">
      <Card className="max-w-4xl mx-auto text-primary">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold">APPLICATION FORM</CardTitle>
          <CardDescription className="text-xl">Ready to apply? Hooray! We look forward to meeting you.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <span className="size-5 rounded-full bg-primary/10 flex items-center justify-center">⏱</span>
            Estimated Time to Complete: 2 min (Part-Time) | 10 min (Bootcamp)
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" className="border-primary focus-visible:ring-primary focus-visible:ring-1" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-700" />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" className="border-primary focus-visible:ring-primary focus-visible:ring-1" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" className="border-primary focus-visible:ring-primary focus-visible:ring-1" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Where are you applying from?</FormLabel>
                      <FormControl>
                        <Input placeholder="City Name" className="border-primary focus-visible:ring-primary focus-visible:ring-1" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Which year were you born?</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-primary focus-visible:ring-primary focus-visible:ring-1">
                            <SelectValue placeholder="Select a year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='z-50 bg-white'>
                          {Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - 50 + i).map(year => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary [&>span]:text-white" 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Subscribe to our Newsletter</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          we promise to only send you the good stuff.
                        </p>
                      </div>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary [&>span]:text-white" 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I consent to receive phone and text communications regarding my application.</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full md:w-auto float-right text-white">Begin</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterForm