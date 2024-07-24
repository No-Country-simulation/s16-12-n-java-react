import { z } from 'zod';

export const TaskSchema = z.object({
  titulo: z
    .string({ required_error: 'El título es requerido' })
    .min(1, 'El título no puede estar vacío')
    .max(100, 'El título no puede tener más de 100 caracteres')
    .trim(),

  descripcion: z.string({ required_error: 'La descripción es requerida' }),

  presupuesto: z
    .number({ required_error: 'El presupuesto es requerido' })
    .positive('El presupuesto debe ser mayor que 0'),

  imagenUrl: z
    .string({ required_error: 'La URL de la imagen es requerida' })
    .url('Debe ser una URL válida')
    .refine((url) => /\.(webp|jpg|jpeg|png)$/i.test(url), {
      message: 'La URL debe ser una imagen en formato webp, jpg, jpeg o png',
    }),

  plazo: z
    .string({ required_error: 'El plazo es requerido' })
    .datetime('Debe ser una fecha válida'),

  nombreCategoria: z
    .string({ required_error: 'El nombre de la categoría es requerido' })
    .min(1, 'El nombre de la categoría no puede estar vacío')
    .max(50, 'El nombre de la categoría no puede tener más de 50 caracteres')
    .trim(),

  nombreHabilidades: z
    .array(z.string())
    .nonempty('Debe proporcionar al menos una habilidad'),
});
