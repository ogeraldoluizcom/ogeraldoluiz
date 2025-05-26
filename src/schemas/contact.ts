import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Campo nome é obrigatório!'
  }),
  subject: z.string().min(2, {
    message: 'Campo assunto é obrigatório!'
  }),
  email: z
    .string()
    .min(2, {
      message: 'O campo de email é obrigatório.'
    })
    .email({
      message: 'O email deve ser válido.'
    }),

  body: z.string().min(5, {
    message: 'A mensagem deve ter pelo menos 5 caracteres.'
  })
})
