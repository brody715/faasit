import { FaasitRuntime } from "./FaasitRuntime";
import axios from "axios";

// TODO: KnativeRuntime
export class KnativeRuntime implements FaasitRuntime {
    private context: any
    private event: any

    constructor(context: any, event: any) {
        this.context = context
        this.event = event
    }
    async call(fnName: string, fnParams?: {
        sequence?: number;
        input: object;
    }): Promise<object> {
        const res = await this.invokeKnativeFunction(fnName, fnParams?.input);
        const result = res.data;
        return { output: result };
    }

    input() {
        return this.event
    }

    output(returnObject: any) {
        return {
            body: returnObject
        }
    }

    private async invokeKnativeFunction(fnName: string, event: any) {
        const svcName = `${process.env.FAASIT_APP_NAME}-${fnName}`
        const url = `http://${svcName}.faasit.192.168.1.240.sslip.io`
        return await axios.post(url, event)
    }
}