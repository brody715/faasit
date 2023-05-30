import { z } from 'zod'
export * from './service'

export type Value =
  | {
      kind: 'v_string'
      value: string
    }
  | { kind: 'v_int'; value: number }
  | { kind: 'v_bool'; value: boolean }
  | { kind: 'v_any'; value: unknown }
  | { kind: 'v_list'; items: Value[] }
  | {
      kind: 'v_object'
      props: {
        key: string
        value: Value
      }[]
    }

export type Spec = {
  version: string
  modules: Module[]
}
export type Module = {
  kind: 'm_inline'
  id: string
  blocks: Block[]
}
export type Block = {
  kind: 'b_custom'
  block_type: string
  name: string
  props: { key: string; value: Value }[]
}

export function validateSpec(o: unknown): Spec {
  return SpecSchema.parse(o)
}

export function validateModule(o: unknown): Module {
  return ModuleSchema.parse(o)
}

export function validateBlock(o: unknown): Block {
  return BlockSchema.parse(o)
}

// we should declare type first to use recursive schema
const ValueSchema: z.ZodType<Value> = z.union([
  z.object({
    kind: z.literal('v_int'),
    value: z.number(),
  }),
  z.object({
    kind: z.literal('v_bool'),
    value: z.boolean(),
  }),
  z.object({
    kind: z.literal('v_string'),
    value: z.string(),
  }),
  z.object({
    kind: z.literal('v_list'),
    items: z.array(z.lazy(() => ValueSchema)),
  }),
  z.object({
    kind: z.literal('v_object'),
    props: z.array(
      z.object({
        key: z.string(),
        value: z.lazy(() => ValueSchema),
      })
    ),
  }),
])

const BlockSchema: z.ZodType<Block> = z.object({
  kind: z.literal('b_custom'),
  block_type: z.string(),
  name: z.string(),
  props: z.array(
    z.object({
      key: z.string(),
      value: ValueSchema,
    })
  ),
})

const ModuleSchema: z.ZodType<Module> = z.object({
  kind: z.literal('m_inline'),
  id: z.string(),
  blocks: z.array(BlockSchema),
})

const SpecSchema: z.ZodType<Spec> = z.object({
  version: z.string(),
  modules: z.array(ModuleSchema),
})
