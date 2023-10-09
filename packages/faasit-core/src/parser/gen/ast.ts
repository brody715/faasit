/******************************************************************************
 * This file was generated by langium-cli 1.2.1.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export type Block = BlockBlock | CustomBlock | LibBlock | ScalarBlock | ShapeBlock | StructBlock | UseBlock;

export const Block = 'Block';

export function isBlock(item: unknown): item is Block {
    return reflection.isInstance(item, Block);
}

export type Expr = BlockExpr | ListExpr | Literal | QualifiedName | TypeCallExpr;

export const Expr = 'Expr';

export function isExpr(item: unknown): item is Expr {
    return reflection.isInstance(item, Expr);
}

export type Literal = LiteralBool | LiteralFloat | LiteralInt | LiteralString;

export const Literal = 'Literal';

export function isLiteral(item: unknown): item is Literal {
    return reflection.isInstance(item, Literal);
}

export type NamedElement = BlockBlock | CustomBlock | Expr | ScalarBlock | SemaPackage | StructBlock;

export const NamedElement = 'NamedElement';

export function isNamedElement(item: unknown): item is NamedElement {
    return reflection.isInstance(item, NamedElement);
}

export interface BlockBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'BlockBlock';
    name: string
    props: Array<Property>
}

export const BlockBlock = 'BlockBlock';

export function isBlockBlock(item: unknown): item is BlockBlock {
    return reflection.isInstance(item, BlockBlock);
}

export interface BlockExpr extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'BlockExpr';
    props: Array<Property>
}

export const BlockExpr = 'BlockExpr';

export function isBlockExpr(item: unknown): item is BlockExpr {
    return reflection.isInstance(item, BlockExpr);
}

export interface CustomBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'CustomBlock';
    block_type: QualifiedName
    for_target?: Reference<CustomBlock>
    name?: string
    props: Array<Property>
}

export const CustomBlock = 'CustomBlock';

export function isCustomBlock(item: unknown): item is CustomBlock {
    return reflection.isInstance(item, CustomBlock);
}

export interface Import extends AstNode {
    readonly $container: Instance;
    readonly $type: 'Import';
    url: Array<string>
}

export const Import = 'Import';

export function isImport(item: unknown): item is Import {
    return reflection.isInstance(item, Import);
}

export interface Instance extends AstNode {
    readonly $type: 'Instance';
    blocks: Array<Block>
    imports: Array<Import>
}

export const Instance = 'Instance';

export function isInstance(item: unknown): item is Instance {
    return reflection.isInstance(item, Instance);
}

export interface LibBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'LibBlock';
    props: Array<Property>
}

export const LibBlock = 'LibBlock';

export function isLibBlock(item: unknown): item is LibBlock {
    return reflection.isInstance(item, LibBlock);
}

export interface ListExpr extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'ListExpr';
    items: Array<Expr>
}

export const ListExpr = 'ListExpr';

export function isListExpr(item: unknown): item is ListExpr {
    return reflection.isInstance(item, ListExpr);
}

export interface LiteralBool extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'LiteralBool';
    value: boolean
}

export const LiteralBool = 'LiteralBool';

export function isLiteralBool(item: unknown): item is LiteralBool {
    return reflection.isInstance(item, LiteralBool);
}

export interface LiteralFloat extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'LiteralFloat';
    value: number
}

export const LiteralFloat = 'LiteralFloat';

export function isLiteralFloat(item: unknown): item is LiteralFloat {
    return reflection.isInstance(item, LiteralFloat);
}

export interface LiteralInt extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'LiteralInt';
    value: number
}

export const LiteralInt = 'LiteralInt';

export function isLiteralInt(item: unknown): item is LiteralInt {
    return reflection.isInstance(item, LiteralInt);
}

export interface LiteralString extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'LiteralString';
    value: string
}

export const LiteralString = 'LiteralString';

export function isLiteralString(item: unknown): item is LiteralString {
    return reflection.isInstance(item, LiteralString);
}

export interface Property extends AstNode {
    readonly $container: BlockBlock | BlockExpr | CustomBlock | LibBlock | ShapeBlock | StructBlock | UseBlock;
    readonly $type: 'Property';
    name: string
    value: Expr
}

export const Property = 'Property';

export function isProperty(item: unknown): item is Property {
    return reflection.isInstance(item, Property);
}

export interface QualifiedName extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'QualifiedName';
    element: Reference<NamedElement>
    previous?: QualifiedName
}

export const QualifiedName = 'QualifiedName';

export function isQualifiedName(item: unknown): item is QualifiedName {
    return reflection.isInstance(item, QualifiedName);
}

export interface ScalarBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'ScalarBlock';
    name: string
}

export const ScalarBlock = 'ScalarBlock';

export function isScalarBlock(item: unknown): item is ScalarBlock {
    return reflection.isInstance(item, ScalarBlock);
}

export interface SemaAtomicType extends AstNode {
    readonly $type: 'SemaAtomicType';
}

export const SemaAtomicType = 'SemaAtomicType';

export function isSemaAtomicType(item: unknown): item is SemaAtomicType {
    return reflection.isInstance(item, SemaAtomicType);
}

export interface SemaPackage extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'SemaPackage';
    id: string
    symbols: Array<NamedElement>
}

export const SemaPackage = 'SemaPackage';

export function isSemaPackage(item: unknown): item is SemaPackage {
    return reflection.isInstance(item, SemaPackage);
}

export interface ShapeBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'ShapeBlock';
    name: string
    props: Array<Property>
}

export const ShapeBlock = 'ShapeBlock';

export function isShapeBlock(item: unknown): item is ShapeBlock {
    return reflection.isInstance(item, ShapeBlock);
}

export interface StructBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'StructBlock';
    name: string
    props: Array<Property>
}

export const StructBlock = 'StructBlock';

export function isStructBlock(item: unknown): item is StructBlock {
    return reflection.isInstance(item, StructBlock);
}

export interface TypeCallExpr extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'TypeCallExpr';
    callee: QualifiedName
    elements: Array<Expr>
}

export const TypeCallExpr = 'TypeCallExpr';

export function isTypeCallExpr(item: unknown): item is TypeCallExpr {
    return reflection.isInstance(item, TypeCallExpr);
}

export interface UseBlock extends AstNode {
    readonly $container: CustomBlock | Instance | ListExpr | Property | QualifiedName | SemaPackage | TypeCallExpr;
    readonly $type: 'UseBlock';
    props: Array<Property>
}

export const UseBlock = 'UseBlock';

export function isUseBlock(item: unknown): item is UseBlock {
    return reflection.isInstance(item, UseBlock);
}

export type FaasitAstType = {
    Block: Block
    BlockBlock: BlockBlock
    BlockExpr: BlockExpr
    CustomBlock: CustomBlock
    Expr: Expr
    Import: Import
    Instance: Instance
    LibBlock: LibBlock
    ListExpr: ListExpr
    Literal: Literal
    LiteralBool: LiteralBool
    LiteralFloat: LiteralFloat
    LiteralInt: LiteralInt
    LiteralString: LiteralString
    NamedElement: NamedElement
    Property: Property
    QualifiedName: QualifiedName
    ScalarBlock: ScalarBlock
    SemaAtomicType: SemaAtomicType
    SemaPackage: SemaPackage
    ShapeBlock: ShapeBlock
    StructBlock: StructBlock
    TypeCallExpr: TypeCallExpr
    UseBlock: UseBlock
}

export class FaasitAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['Block', 'BlockBlock', 'BlockExpr', 'CustomBlock', 'Expr', 'Import', 'Instance', 'LibBlock', 'ListExpr', 'Literal', 'LiteralBool', 'LiteralFloat', 'LiteralInt', 'LiteralString', 'NamedElement', 'Property', 'QualifiedName', 'ScalarBlock', 'SemaAtomicType', 'SemaPackage', 'ShapeBlock', 'StructBlock', 'TypeCallExpr', 'UseBlock'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case BlockBlock:
            case CustomBlock:
            case ScalarBlock:
            case StructBlock: {
                return this.isSubtype(Block, supertype) || this.isSubtype(NamedElement, supertype);
            }
            case BlockExpr:
            case ListExpr:
            case Literal:
            case QualifiedName:
            case TypeCallExpr: {
                return this.isSubtype(Expr, supertype);
            }
            case Expr:
            case SemaPackage: {
                return this.isSubtype(NamedElement, supertype);
            }
            case LibBlock:
            case ShapeBlock:
            case UseBlock: {
                return this.isSubtype(Block, supertype);
            }
            case LiteralBool:
            case LiteralFloat:
            case LiteralInt:
            case LiteralString: {
                return this.isSubtype(Literal, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'CustomBlock:for_target': {
                return CustomBlock;
            }
            case 'QualifiedName:element': {
                return NamedElement;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'BlockBlock': {
                return {
                    name: 'BlockBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
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
            case 'Import': {
                return {
                    name: 'Import',
                    mandatory: [
                        { name: 'url', type: 'array' }
                    ]
                };
            }
            case 'Instance': {
                return {
                    name: 'Instance',
                    mandatory: [
                        { name: 'blocks', type: 'array' },
                        { name: 'imports', type: 'array' }
                    ]
                };
            }
            case 'LibBlock': {
                return {
                    name: 'LibBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
                    ]
                };
            }
            case 'ListExpr': {
                return {
                    name: 'ListExpr',
                    mandatory: [
                        { name: 'items', type: 'array' }
                    ]
                };
            }
            case 'LiteralBool': {
                return {
                    name: 'LiteralBool',
                    mandatory: [
                        { name: 'value', type: 'boolean' }
                    ]
                };
            }
            case 'SemaPackage': {
                return {
                    name: 'SemaPackage',
                    mandatory: [
                        { name: 'symbols', type: 'array' }
                    ]
                };
            }
            case 'ShapeBlock': {
                return {
                    name: 'ShapeBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
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
            case 'UseBlock': {
                return {
                    name: 'UseBlock',
                    mandatory: [
                        { name: 'props', type: 'array' }
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
