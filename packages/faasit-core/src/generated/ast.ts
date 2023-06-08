/******************************************************************************
 * This file was generated by langium-cli 1.2.1.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export type Block = CustomBlock | CustomDeclBlock | StructBlock;

export const Block = 'Block';

export function isBlock(item: unknown): item is Block {
    return reflection.isInstance(item, Block);
}

export type Expr = BlockExpr | ListExpr | Literal | QualifiedName | TypeCallExpr;

export const Expr = 'Expr';

export function isExpr(item: unknown): item is Expr {
    return reflection.isInstance(item, Expr);
}

export interface BlockExpr extends AstNode {
    readonly $container: ListExpr | Property | TypeCallExpr;
    readonly $type: 'BlockExpr';
    props: Array<Property>
}

export const BlockExpr = 'BlockExpr';

export function isBlockExpr(item: unknown): item is BlockExpr {
    return reflection.isInstance(item, BlockExpr);
}

export interface CustomBlock extends AstNode {
    readonly $container: Module;
    readonly $type: 'CustomBlock';
    block_type: Reference<CustomDeclBlock>
    for_target?: string
    name?: string
    props: Array<Property>
}

export const CustomBlock = 'CustomBlock';

export function isCustomBlock(item: unknown): item is CustomBlock {
    return reflection.isInstance(item, CustomBlock);
}

export interface CustomDeclBlock extends AstNode {
    readonly $container: Module;
    readonly $type: 'CustomDeclBlock';
    name: string
    props: Array<Property>
}

export const CustomDeclBlock = 'CustomDeclBlock';

export function isCustomDeclBlock(item: unknown): item is CustomDeclBlock {
    return reflection.isInstance(item, CustomDeclBlock);
}

export interface Import extends AstNode {
    readonly $container: Module;
    readonly $type: 'Import';
    url: Array<string>
}

export const Import = 'Import';

export function isImport(item: unknown): item is Import {
    return reflection.isInstance(item, Import);
}

export interface ListExpr extends AstNode {
    readonly $container: ListExpr | Property | TypeCallExpr;
    readonly $type: 'ListExpr';
    elements: Array<Expr>
}

export const ListExpr = 'ListExpr';

export function isListExpr(item: unknown): item is ListExpr {
    return reflection.isInstance(item, ListExpr);
}

export interface Literal extends AstNode {
    readonly $container: ListExpr | Property | TypeCallExpr;
    readonly $type: 'Literal';
    value: boolean | number | string
}

export const Literal = 'Literal';

export function isLiteral(item: unknown): item is Literal {
    return reflection.isInstance(item, Literal);
}

export interface Module extends AstNode {
    readonly $type: 'Module';
    blocks: Array<Block>
    imports: Array<Import>
}

export const Module = 'Module';

export function isModule(item: unknown): item is Module {
    return reflection.isInstance(item, Module);
}

export interface Property extends AstNode {
    readonly $container: BlockExpr | CustomBlock | CustomDeclBlock | StructBlock;
    readonly $type: 'Property';
    name: string
    value: Expr
}

export const Property = 'Property';

export function isProperty(item: unknown): item is Property {
    return reflection.isInstance(item, Property);
}

export interface StructBlock extends AstNode {
    readonly $container: Module;
    readonly $type: 'StructBlock';
    name: string
    props: Array<Property>
}

export const StructBlock = 'StructBlock';

export function isStructBlock(item: unknown): item is StructBlock {
    return reflection.isInstance(item, StructBlock);
}

export interface TypeCallExpr extends AstNode {
    readonly $container: ListExpr | Property | TypeCallExpr;
    readonly $type: 'QualifiedName' | 'TypeCallExpr';
    elements: Array<Expr>
}

export const TypeCallExpr = 'TypeCallExpr';

export function isTypeCallExpr(item: unknown): item is TypeCallExpr {
    return reflection.isInstance(item, TypeCallExpr);
}

export interface QualifiedName extends TypeCallExpr {
    readonly $container: ListExpr | Property | TypeCallExpr;
    readonly $type: 'QualifiedName';
    name: Array<string>
}

export const QualifiedName = 'QualifiedName';

export function isQualifiedName(item: unknown): item is QualifiedName {
    return reflection.isInstance(item, QualifiedName);
}

export type FaasitAstType = {
    Block: Block
    BlockExpr: BlockExpr
    CustomBlock: CustomBlock
    CustomDeclBlock: CustomDeclBlock
    Expr: Expr
    Import: Import
    ListExpr: ListExpr
    Literal: Literal
    Module: Module
    Property: Property
    QualifiedName: QualifiedName
    StructBlock: StructBlock
    TypeCallExpr: TypeCallExpr
}

export class FaasitAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['Block', 'BlockExpr', 'CustomBlock', 'CustomDeclBlock', 'Expr', 'Import', 'ListExpr', 'Literal', 'Module', 'Property', 'QualifiedName', 'StructBlock', 'TypeCallExpr'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case BlockExpr:
            case ListExpr:
            case Literal:
            case TypeCallExpr: {
                return this.isSubtype(Expr, supertype);
            }
            case CustomBlock:
            case CustomDeclBlock:
            case StructBlock: {
                return this.isSubtype(Block, supertype);
            }
            case QualifiedName: {
                return this.isSubtype(Expr, supertype) || this.isSubtype(TypeCallExpr, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'CustomBlock:block_type': {
                return CustomDeclBlock;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'BlockExpr': {
                return {
                    name: 'BlockExpr',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'CustomBlock': {
                return {
                    name: 'CustomBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'CustomDeclBlock': {
                return {
                    name: 'CustomDeclBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'Import': {
                return {
                    name: 'Import',
                    mandatory: [
                        { name: 'url', type: 'array' }
                    ]
                };
            }
            case 'ListExpr': {
                return {
                    name: 'ListExpr',
                    mandatory: [
                        { name: 'elements', type: 'array' }
                    ]
                };
            }
            case 'Literal': {
                return {
                    name: 'Literal',
                    mandatory: [
                        { name: 'value', type: 'boolean' }
                    ]
                };
            }
            case 'Module': {
                return {
                    name: 'Module',
                    mandatory: [
                        { name: 'blocks', type: 'array' },
                        { name: 'imports', type: 'array' }
                    ]
                };
            }
            case 'StructBlock': {
                return {
                    name: 'StructBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'TypeCallExpr': {
                return {
                    name: 'TypeCallExpr',
                    mandatory: [
                        { name: 'elements', type: 'array' }
                    ]
                };
            }
            case 'QualifiedName': {
                return {
                    name: 'QualifiedName',
                    mandatory: [
                        { name: 'name', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new FaasitAstReflection();
