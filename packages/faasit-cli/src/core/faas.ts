import { z } from 'zod'
import { ir } from './ir'

const FunctionTriggerSchema = z.object({
  name: z.string(),
  type: z.string(),
  props: z.any(),
})

const FunctionSchema = z.object({
  name: z.string(),
  runtime: z.string(),
  codeDir: z.string(),
  handler: z.string().optional(),
  resource: z.object({
    cpu: z.string(),
    memory: z.string(),
  }),
  triggers: z.array(FunctionTriggerSchema),
})

const ApplicationSchema = z.object({
  provider: z.object({
    name: z.string(),
  }),
  functions: z.array(FunctionSchema),
})

export type Application = z.infer<typeof ApplicationSchema>

export function resolveApplication(spec: ir.SpecService): Application {
  throw new Error(`not impl`)
}

export function parseApplication(o: unknown): Application {
  return ApplicationSchema.parse(o)
}
