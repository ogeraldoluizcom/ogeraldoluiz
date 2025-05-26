'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Title } from '@/components/title'

import { contactFormSchema } from '@/schemas/contact'

export const SectionContact = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      body: ''
    }
  })

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values)
  }

  return (
    <div className="space-y-4 p-8">
      <Title
        align="left"
        subtitle="Contato"
        description="Entre em contato e vamos conversar sobre o seu projeto."
      />
      <div className="rounded-md p-4 bg-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Title
            align="left"
            subtitle="Bora conversar?"
            description="Vamos trocar uma ideia sobre o seu projeto, tirar dúvidas ou até mesmo tomar um café virtual. Estou aqui para ajudar!"
          />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Assunto"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem aqui..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <Button type="submit" variant="secondary">
                  Enviar
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => form.reset()}
                >
                  Limpar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
