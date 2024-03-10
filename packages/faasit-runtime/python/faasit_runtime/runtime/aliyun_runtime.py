from faasit_runtime.runtime import FaasitRuntime
import json

class AliyunRuntime(FaasitRuntime):
    name: str = 'aliyun'
    def __init__(self, arg0, arg1, arg2) -> None:
        super().__init__()
        self.event = arg0
        self.context = arg1
        self.callback = arg2

    def input(self):
        return json.load(str(self.event))

    def output(self, data):
        self.callback(None, data)
        return data

    def call(self):
        pass

    def tell(self):
        pass