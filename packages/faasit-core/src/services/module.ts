/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type {
  DeepPartial,
  DefaultSharedModuleContext,
  LangiumServices,
  LangiumSharedServices,
  Module,
  PartialLangiumServices,
} from 'langium'
import { createDefaultModule, createDefaultSharedModule, inject } from 'langium'
import { FaasitGeneratedModule, FaasitGeneratedSharedModule } from '../parser'
import { FaasitValidationRegistry, FaasitValidator } from './validator'
import { FaasitFormatter } from './lsp/formatter'
import { FaasitSemanticTokenProvider } from './lsp/semantic-token-provider'
import { FaasitHoverProvider } from './lsp/hover-provider'
import { FaasitScopeProvider } from './scope'
import { FaasitWorkspaceManager } from './workspace-manager'

/**
 * Declaration of custom services - add your own service classes here.
 */
export type FaasitAddedServices = {
  validation: {
    FaasitValidator: FaasitValidator
  }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
export type FaasitServices = LangiumServices & FaasitAddedServices

export type FaasitSharedServices = LangiumSharedServices;

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const FaasitModule: Module<
  FaasitServices,
  PartialLangiumServices & FaasitAddedServices
> = {
  lsp: {
    SemanticTokenProvider: (s) => new FaasitSemanticTokenProvider(s),
    Formatter: () => new FaasitFormatter(),
    HoverProvider: (services) => new FaasitHoverProvider(services),
  },
  references: {
    ScopeProvider: (services) => new FaasitScopeProvider(services),
  },
  validation: {
    ValidationRegistry: (s) => new FaasitValidationRegistry(s),
    FaasitValidator: () => new FaasitValidator(),
  },
}

export const FaasitSharedModule: Module<FaasitSharedServices, DeepPartial<FaasitSharedServices>> = {
  workspace: {
    WorkspaceManager: (services) => new FaasitWorkspaceManager(services)
  }
}

/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
export function createFaasitServices(context: DefaultSharedModuleContext): {
  shared: LangiumSharedServices
  faasit: FaasitServices
} {
  const shared = inject(
    createDefaultSharedModule(context),
    FaasitGeneratedSharedModule,
    FaasitSharedModule
  )
  const faasit = inject(
    createDefaultModule({ shared }),
    FaasitGeneratedModule,
    FaasitModule
  )
  shared.ServiceRegistry.register(faasit)
  return { shared, faasit }
}
