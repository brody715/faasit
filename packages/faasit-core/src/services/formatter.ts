import { AbstractFormatter, AstNode, Formatting } from 'langium'
import { ast } from '../parser'

export class FaasitFormatter extends AbstractFormatter {
  protected format(node: AstNode): void {
    if (ast.isModule(node)) {
      const formatter = this.getNodeFormatter(node)
      formatter.nodes(...node.imports).prepend(Formatting.noIndent())
      formatter.nodes(...node.blocks).prepend(Formatting.noIndent())
      return
    }

    // import
    if (ast.isImport(node)) {
      const formatter = this.getNodeFormatter(node)
      const lparen = formatter.keyword('(')
      const rparen = formatter.keyword(')')
      formatter.interior(lparen, rparen).prepend(Formatting.indent())
      rparen.prepend(Formatting.newLine())
      return
    }

    // block
    if (ast.isBlock(node)) {
      this.formatBlock(node)
      return
    }

    if (ast.isExpr(node)) {
      this.formatExpr(node)
      return
    }
  }

  private formatBlock(node: AstNode) {
    const formatter = this.getNodeFormatter(node)
    const lbrace = formatter.keyword('{')
    const rbrace = formatter.keyword('}')
    formatter.interior(lbrace, rbrace).prepend(Formatting.indent())
    rbrace.prepend(Formatting.newLine())
    return
  }

  private formatExpr(node: ast.Expr) {
    if (ast.isListExpr(node)) {
      const formatter = this.getNodeFormatter(node)
      const lbracket = formatter.keyword('[')
      const rbracket = formatter.keyword(']')
      const comma = formatter.keywords(',')

      const shouldMultiLine =
        node.elements.some((e) => ast.isBlockExpr(e)) ||
        (node.$cstNode?.length || 0) >= 80
      if (shouldMultiLine) {
        formatter.nodes(...node.elements).prepend(Formatting.indent())
        rbracket.prepend(Formatting.newLine())
        comma.prepend(Formatting.noSpace())
      } else {
        // in one line
        formatter.nodes(...node.elements).append(Formatting.noSpace())
        lbracket.append(Formatting.noSpace())
        rbracket.prepend(Formatting.noSpace())
        comma.prepend(Formatting.noSpace())
        comma.append(Formatting.oneSpace())
      }
      return
    }

    if (ast.isBlockExpr(node)) {
      this.formatBlock(node)
      return
    }
  }
}
