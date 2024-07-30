import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { TaskSchema } from '@/validations/taskSchema';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { DatePicker } from './ui/date-picker';
import { Button } from './ui/button';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from '@/config/cloudnary';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';
import useAuthTaskStore from '@/store/authTaskStore';

type FormValues = z.infer<typeof TaskSchema>;

const CATEGORIAS = [
  'Diseno Grafico',
  'Diseno de Interfaces',
  'Animacion y Multimedia',
];

const HABILIDADES = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Figma',
  'Sketch',
  'Prototyping',
  'Wireframing',
  'Animacion 3D',
  'Video Editing',
];

const NuevaTarea = () => {
  const { createTask } = useAuthTaskStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      titulo: '',
      descripcion: '',
      presupuesto: 0,
      imagenUrl: '',
      plazo: new Date().toISOString(),
      nombreCategoria: '',
      nombreHabilidades: [],
    },
  });

  const [uploading, setUploading] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await response.json();
        form.setValue('imagenUrl', data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      await createTask(data);
      toast.success('Tarea publicada');
      form.reset();
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Error desconocido';
      toast.error(`${errorMessage}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='titulo'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder='Título de la tarea' {...field} />
              </FormControl>
              <FormDescription>
                El título de tu tarea (máximo 100 caracteres)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='descripcion'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea placeholder='Describe tu tarea' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='presupuesto'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Presupuesto</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='imagenUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <div>
                  <Input
                    type='file'
                    accept='image/*'
                    onChange={uploadImage}
                    disabled={uploading}
                  />
                  {field.value && (
                    <img
                      src={field.value}
                      alt='Preview'
                      className='mt-2 max-w-xs'
                    />
                  )}
                </div>
              </FormControl>
              <FormDescription>Sube una imagen para tu tarea</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='plazo'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Plazo</FormLabel>
              <DatePicker
                date={field.value ? new Date(field.value) : undefined}
                setDate={(date) => field.onChange(date?.toISOString())}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='nombreCategoria'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoría</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecciona una categoría' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CATEGORIAS.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='nombreHabilidades'
          render={() => (
            <FormItem>
              <FormLabel>Habilidades</FormLabel>
              <FormDescription>
                Selecciona las habilidades requeridas para esta tarea
              </FormDescription>
              <div className='grid grid-cols-2 gap-2'>
                {HABILIDADES.map((habilidad) => (
                  <FormField
                    key={habilidad}
                    control={form.control}
                    name='nombreHabilidades'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={habilidad}
                          className='flex flex-row items-start space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(habilidad)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, habilidad])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== habilidad
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>
                            {habilidad}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' disabled={uploading}>
          {uploading ? 'Subiendo imagen...' : 'Enviar'}
        </Button>
      </form>
    </Form>
  );
};

export default NuevaTarea;
