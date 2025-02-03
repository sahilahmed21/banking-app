'use client';

import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
const formSchema = authFormSchema('sign-up')
interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}
const CustomInput = ({ control, name, label, placeholder, ...props }: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem suppressHydrationWarning>
                    <FormLabel suppressHydrationWarning>{label}</FormLabel>
                    <FormControl suppressHydrationWarning>
                        <Input
                            placeholder={placeholder}
                            className="input-class"
                            type={name === 'password' ? 'password' : 'text'}
                            {...field}
                            {...props}
                            suppressHydrationWarning
                        />
                    </FormControl>
                    <FormMessage suppressHydrationWarning />
                </FormItem>
            )}
        />
    )
}
export default CustomInput
