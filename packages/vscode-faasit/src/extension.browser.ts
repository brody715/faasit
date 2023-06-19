import {
  LanguageClientOptions,
  LanguageClient,
} from 'vscode-languageclient/browser'
import * as vscode from 'vscode'

// This function is called when the extension is activated.
export function activate(context: vscode.ExtensionContext): void {
  // only enable in browser
  console.log(`starting faasit browser extension`)

  const client = startLanguageClient(context)

  context.subscriptions.push(client)
}

function startLanguageClient(context: vscode.ExtensionContext): LanguageClient {
  console.log(`start lsp worker, extension uri: ${context.extensionUri}`)

  const serverModule = vscode.Uri.joinPath(
    context.extensionUri,
    'out/language-server/server.browser.js'
  )

  const worker = new Worker(serverModule.toString(true))

  const fileSystemWatcher = vscode.workspace.createFileSystemWatcher('**/*.ft')
  context.subscriptions.push(fileSystemWatcher)

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'faasit' }],
    synchronize: {
      // Notify the server about file changes to files contained in the workspace
      fileEvents: fileSystemWatcher,
    },
  }

  // Create the language client and start the client.
  const client = new LanguageClient('faasit', 'Faasit', clientOptions, worker)

  // Start the client. This will also launch the server
  client.start()
  return client
}
