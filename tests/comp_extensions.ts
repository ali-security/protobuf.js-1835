import * as protobuf from "../index";
import * as descriptor from "../ext/descriptor";
import textformat = require("../ext/textformat");

const root = protobuf.Root.fromJSON({
    nested: {
        Message: {
            fields: {
                value: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
});
root.resolveAll();

const descriptorSet = root.toDescriptor("proto3");
const descriptorBytes = descriptor.FileDescriptorSet.encode(descriptorSet).finish();
const fieldDescriptor: descriptor.IFieldDescriptorProto = { name: "value", number: 1, label: 1, type: 5, proto3Optional: true };

protobuf.Root.fromDescriptor(descriptorSet);
protobuf.Root.fromDescriptor(descriptorBytes);
protobuf.Root.fromDescriptor(protobuf.Reader.create(descriptorBytes));
protobuf.Field.fromDescriptor(fieldDescriptor, "proto3");

const type = root.lookupType("Message");
const message = type.fromText("value: 1");
const text: string = type.toText(message, { unknowns: true });

textformat.recursionLimit = protobuf.util.recursionLimit;
textformat.unknownRecursionLimit = 10;
protobuf.textformat.recursionLimit = textformat.recursionLimit;

if (text.length < 0)
    throw Error("unreachable");
