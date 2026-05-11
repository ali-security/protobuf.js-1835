import * as $protobuf from "../../..";
import Long = require("long");

export namespace vector_tile {

    interface ITile extends vector_tile.Tile.$Properties {
    }

    class Tile implements vector_tile.Tile.$Properties {
        constructor(properties?: vector_tile.Tile.$Properties);
        $unknowns?: Uint8Array[];
        layers: vector_tile.Tile.Layer.$Properties[];
        static create(properties?: vector_tile.Tile.$Properties): vector_tile.Tile;
        static encode(message: vector_tile.Tile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
        static encodeDelimited(message: vector_tile.Tile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile;
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile;
        static verify(message: { [k: string]: any }): (string|null);
        static fromObject(object: { [k: string]: any }): vector_tile.Tile;
        static toObject(message: vector_tile.Tile, options?: $protobuf.IConversionOptions): { [k: string]: any };
        toJSON(): { [k: string]: any };
        static getTypeUrl(prefix?: string): string;
    }

    namespace Tile {
        interface $Properties {
            layers?: (vector_tile.Tile.Layer.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = vector_tile.Tile.$Properties;

        enum GeomType {
            UNKNOWN = 0,
            POINT = 1,
            LINESTRING = 2,
            POLYGON = 3
        }

        interface IValue extends vector_tile.Tile.Value.$Properties {
        }

        class Value implements vector_tile.Tile.Value.$Properties {
            constructor(properties?: vector_tile.Tile.Value.$Properties);
            $unknowns?: Uint8Array[];
            stringValue: string;
            floatValue: number;
            doubleValue: number;
            intValue: (number|Long);
            uintValue: (number|Long);
            sintValue: (number|Long);
            boolValue: boolean;
            static create(properties?: vector_tile.Tile.Value.$Properties): vector_tile.Tile.Value;
            static encode(message: vector_tile.Tile.Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            static encodeDelimited(message: vector_tile.Tile.Value.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Value;
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Value;
            static verify(message: { [k: string]: any }): (string|null);
            static fromObject(object: { [k: string]: any }): vector_tile.Tile.Value;
            static toObject(message: vector_tile.Tile.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            toJSON(): { [k: string]: any };
            static getTypeUrl(prefix?: string): string;
        }

        namespace Value {
            interface $Properties {
                stringValue?: (string|null);
                floatValue?: (number|null);
                doubleValue?: (number|null);
                intValue?: (number|Long|null);
                uintValue?: (number|Long|null);
                sintValue?: (number|Long|null);
                boolValue?: (boolean|null);
                $unknowns?: Uint8Array[];
            }
            type $Shape = vector_tile.Tile.Value.$Properties;
        }

        interface IFeature extends vector_tile.Tile.Feature.$Properties {
        }

        class Feature implements vector_tile.Tile.Feature.$Properties {
            constructor(properties?: vector_tile.Tile.Feature.$Properties);
            $unknowns?: Uint8Array[];
            id: (number|Long);
            tags: number[];
            type: vector_tile.Tile.GeomType;
            geometry: number[];
            static create(properties?: vector_tile.Tile.Feature.$Properties): vector_tile.Tile.Feature;
            static encode(message: vector_tile.Tile.Feature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            static encodeDelimited(message: vector_tile.Tile.Feature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Feature;
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Feature;
            static verify(message: { [k: string]: any }): (string|null);
            static fromObject(object: { [k: string]: any }): vector_tile.Tile.Feature;
            static toObject(message: vector_tile.Tile.Feature, options?: $protobuf.IConversionOptions): { [k: string]: any };
            toJSON(): { [k: string]: any };
            static getTypeUrl(prefix?: string): string;
        }

        namespace Feature {
            interface $Properties {
                id?: (number|Long|null);
                tags?: (number[]|null);
                type?: (vector_tile.Tile.GeomType|null);
                geometry?: (number[]|null);
                $unknowns?: Uint8Array[];
            }
            type $Shape = vector_tile.Tile.Feature.$Properties;
        }

        interface ILayer extends vector_tile.Tile.Layer.$Properties {
        }

        class Layer implements vector_tile.Tile.Layer.$Properties {
            constructor(properties?: vector_tile.Tile.Layer.$Properties);
            $unknowns?: Uint8Array[];
            version: number;
            name: string;
            features: vector_tile.Tile.Feature.$Properties[];
            keys: string[];
            values: vector_tile.Tile.Value.$Properties[];
            extent: number;
            static create(properties?: vector_tile.Tile.Layer.$Properties): vector_tile.Tile.Layer;
            static encode(message: vector_tile.Tile.Layer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            static encodeDelimited(message: vector_tile.Tile.Layer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): vector_tile.Tile.Layer;
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): vector_tile.Tile.Layer;
            static verify(message: { [k: string]: any }): (string|null);
            static fromObject(object: { [k: string]: any }): vector_tile.Tile.Layer;
            static toObject(message: vector_tile.Tile.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };
            toJSON(): { [k: string]: any };
            static getTypeUrl(prefix?: string): string;
        }

        namespace Layer {
            interface $Properties {
                version: number;
                name: string;
                features?: (vector_tile.Tile.Feature.$Properties[]|null);
                keys?: (string[]|null);
                values?: (vector_tile.Tile.Value.$Properties[]|null);
                extent?: (number|null);
                $unknowns?: Uint8Array[];
            }
            type $Shape = vector_tile.Tile.Layer.$Properties;
        }
    }
}
