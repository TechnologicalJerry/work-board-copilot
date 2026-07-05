
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model FileVersion
 * 
 */
export type FileVersion = $Result.DefaultSelection<Prisma.$FileVersionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FileStatus: {
  UPLOADING: 'UPLOADING',
  UPLOADED: 'UPLOADED',
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  FAILED: 'FAILED',
  DELETED: 'DELETED'
};

export type FileStatus = (typeof FileStatus)[keyof typeof FileStatus]

}

export type FileStatus = $Enums.FileStatus

export const FileStatus: typeof $Enums.FileStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Files
 * const files = await prisma.file.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Files
   * const files = await prisma.file.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

  /**
   * `prisma.fileVersion`: Exposes CRUD operations for the **FileVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileVersions
    * const fileVersions = await prisma.fileVersion.findMany()
    * ```
    */
  get fileVersion(): Prisma.FileVersionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    File: 'File',
    FileVersion: 'FileVersion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "file" | "fileVersion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      FileVersion: {
        payload: Prisma.$FileVersionPayload<ExtArgs>
        fields: Prisma.FileVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          findFirst: {
            args: Prisma.FileVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          findMany: {
            args: Prisma.FileVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          create: {
            args: Prisma.FileVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          createMany: {
            args: Prisma.FileVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          delete: {
            args: Prisma.FileVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          update: {
            args: Prisma.FileVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          deleteMany: {
            args: Prisma.FileVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          aggregate: {
            args: Prisma.FileVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileVersion>
          }
          groupBy: {
            args: Prisma.FileVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileVersionCountArgs<ExtArgs>
            result: $Utils.Optional<FileVersionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    versions: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | FileCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
    version: number | null
  }

  export type FileSumAggregateOutputType = {
    size: bigint | null
    width: number | null
    height: number | null
    version: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    workspaceId: string | null
    uploaderId: string | null
    entityId: string | null
    entityType: string | null
    originalName: string | null
    storedName: string | null
    key: string | null
    bucket: string | null
    mimeType: string | null
    size: bigint | null
    width: number | null
    height: number | null
    url: string | null
    thumbnailUrl: string | null
    thumbnailKey: string | null
    isPublic: boolean | null
    status: $Enums.FileStatus | null
    checksum: string | null
    version: number | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    workspaceId: string | null
    uploaderId: string | null
    entityId: string | null
    entityType: string | null
    originalName: string | null
    storedName: string | null
    key: string | null
    bucket: string | null
    mimeType: string | null
    size: bigint | null
    width: number | null
    height: number | null
    url: string | null
    thumbnailUrl: string | null
    thumbnailKey: string | null
    isPublic: boolean | null
    status: $Enums.FileStatus | null
    checksum: string | null
    version: number | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    organizationId: number
    workspaceId: number
    uploaderId: number
    entityId: number
    entityType: number
    originalName: number
    storedName: number
    key: number
    bucket: number
    mimeType: number
    size: number
    width: number
    height: number
    url: number
    thumbnailUrl: number
    thumbnailKey: number
    isPublic: number
    status: number
    metadata: number
    checksum: number
    version: number
    parentId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    size?: true
    width?: true
    height?: true
    version?: true
  }

  export type FileSumAggregateInputType = {
    size?: true
    width?: true
    height?: true
    version?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    organizationId?: true
    workspaceId?: true
    uploaderId?: true
    entityId?: true
    entityType?: true
    originalName?: true
    storedName?: true
    key?: true
    bucket?: true
    mimeType?: true
    size?: true
    width?: true
    height?: true
    url?: true
    thumbnailUrl?: true
    thumbnailKey?: true
    isPublic?: true
    status?: true
    checksum?: true
    version?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    organizationId?: true
    workspaceId?: true
    uploaderId?: true
    entityId?: true
    entityType?: true
    originalName?: true
    storedName?: true
    key?: true
    bucket?: true
    mimeType?: true
    size?: true
    width?: true
    height?: true
    url?: true
    thumbnailUrl?: true
    thumbnailKey?: true
    isPublic?: true
    status?: true
    checksum?: true
    version?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    organizationId?: true
    workspaceId?: true
    uploaderId?: true
    entityId?: true
    entityType?: true
    originalName?: true
    storedName?: true
    key?: true
    bucket?: true
    mimeType?: true
    size?: true
    width?: true
    height?: true
    url?: true
    thumbnailUrl?: true
    thumbnailKey?: true
    isPublic?: true
    status?: true
    metadata?: true
    checksum?: true
    version?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    organizationId: string
    workspaceId: string | null
    uploaderId: string
    entityId: string | null
    entityType: string | null
    originalName: string
    storedName: string
    key: string
    bucket: string
    mimeType: string
    size: bigint
    width: number | null
    height: number | null
    url: string
    thumbnailUrl: string | null
    thumbnailKey: string | null
    isPublic: boolean
    status: $Enums.FileStatus
    metadata: JsonValue | null
    checksum: string | null
    version: number
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    workspaceId?: boolean
    uploaderId?: boolean
    entityId?: boolean
    entityType?: boolean
    originalName?: boolean
    storedName?: boolean
    key?: boolean
    bucket?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    isPublic?: boolean
    status?: boolean
    metadata?: boolean
    checksum?: boolean
    version?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    versions?: boolean | File$versionsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    workspaceId?: boolean
    uploaderId?: boolean
    entityId?: boolean
    entityType?: boolean
    originalName?: boolean
    storedName?: boolean
    key?: boolean
    bucket?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    isPublic?: boolean
    status?: boolean
    metadata?: boolean
    checksum?: boolean
    version?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    organizationId?: boolean
    workspaceId?: boolean
    uploaderId?: boolean
    entityId?: boolean
    entityType?: boolean
    originalName?: boolean
    storedName?: boolean
    key?: boolean
    bucket?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    url?: boolean
    thumbnailUrl?: boolean
    thumbnailKey?: boolean
    isPublic?: boolean
    status?: boolean
    metadata?: boolean
    checksum?: boolean
    version?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | File$versionsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      versions: Prisma.$FileVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      workspaceId: string | null
      uploaderId: string
      entityId: string | null
      entityType: string | null
      originalName: string
      storedName: string
      key: string
      bucket: string
      mimeType: string
      size: bigint
      width: number | null
      height: number | null
      url: string
      thumbnailUrl: string | null
      thumbnailKey: string | null
      isPublic: boolean
      status: $Enums.FileStatus
      metadata: Prisma.JsonValue | null
      checksum: string | null
      version: number
      parentId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    versions<T extends File$versionsArgs<ExtArgs> = {}>(args?: Subset<T, File$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly organizationId: FieldRef<"File", 'String'>
    readonly workspaceId: FieldRef<"File", 'String'>
    readonly uploaderId: FieldRef<"File", 'String'>
    readonly entityId: FieldRef<"File", 'String'>
    readonly entityType: FieldRef<"File", 'String'>
    readonly originalName: FieldRef<"File", 'String'>
    readonly storedName: FieldRef<"File", 'String'>
    readonly key: FieldRef<"File", 'String'>
    readonly bucket: FieldRef<"File", 'String'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'BigInt'>
    readonly width: FieldRef<"File", 'Int'>
    readonly height: FieldRef<"File", 'Int'>
    readonly url: FieldRef<"File", 'String'>
    readonly thumbnailUrl: FieldRef<"File", 'String'>
    readonly thumbnailKey: FieldRef<"File", 'String'>
    readonly isPublic: FieldRef<"File", 'Boolean'>
    readonly status: FieldRef<"File", 'FileStatus'>
    readonly metadata: FieldRef<"File", 'Json'>
    readonly checksum: FieldRef<"File", 'String'>
    readonly version: FieldRef<"File", 'Int'>
    readonly parentId: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
    readonly deletedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }

  /**
   * File.versions
   */
  export type File$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    cursor?: FileVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model FileVersion
   */

  export type AggregateFileVersion = {
    _count: FileVersionCountAggregateOutputType | null
    _avg: FileVersionAvgAggregateOutputType | null
    _sum: FileVersionSumAggregateOutputType | null
    _min: FileVersionMinAggregateOutputType | null
    _max: FileVersionMaxAggregateOutputType | null
  }

  export type FileVersionAvgAggregateOutputType = {
    version: number | null
    size: number | null
  }

  export type FileVersionSumAggregateOutputType = {
    version: number | null
    size: bigint | null
  }

  export type FileVersionMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    version: number | null
    key: string | null
    size: bigint | null
    url: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type FileVersionMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    version: number | null
    key: string | null
    size: bigint | null
    url: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type FileVersionCountAggregateOutputType = {
    id: number
    fileId: number
    version: number
    key: number
    size: number
    url: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type FileVersionAvgAggregateInputType = {
    version?: true
    size?: true
  }

  export type FileVersionSumAggregateInputType = {
    version?: true
    size?: true
  }

  export type FileVersionMinAggregateInputType = {
    id?: true
    fileId?: true
    version?: true
    key?: true
    size?: true
    url?: true
    createdBy?: true
    createdAt?: true
  }

  export type FileVersionMaxAggregateInputType = {
    id?: true
    fileId?: true
    version?: true
    key?: true
    size?: true
    url?: true
    createdBy?: true
    createdAt?: true
  }

  export type FileVersionCountAggregateInputType = {
    id?: true
    fileId?: true
    version?: true
    key?: true
    size?: true
    url?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type FileVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileVersion to aggregate.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileVersions
    **/
    _count?: true | FileVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileVersionMaxAggregateInputType
  }

  export type GetFileVersionAggregateType<T extends FileVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateFileVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileVersion[P]>
      : GetScalarType<T[P], AggregateFileVersion[P]>
  }




  export type FileVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithAggregationInput | FileVersionOrderByWithAggregationInput[]
    by: FileVersionScalarFieldEnum[] | FileVersionScalarFieldEnum
    having?: FileVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileVersionCountAggregateInputType | true
    _avg?: FileVersionAvgAggregateInputType
    _sum?: FileVersionSumAggregateInputType
    _min?: FileVersionMinAggregateInputType
    _max?: FileVersionMaxAggregateInputType
  }

  export type FileVersionGroupByOutputType = {
    id: string
    fileId: string
    version: number
    key: string
    size: bigint
    url: string
    createdBy: string
    createdAt: Date
    _count: FileVersionCountAggregateOutputType | null
    _avg: FileVersionAvgAggregateOutputType | null
    _sum: FileVersionSumAggregateOutputType | null
    _min: FileVersionMinAggregateOutputType | null
    _max: FileVersionMaxAggregateOutputType | null
  }

  type GetFileVersionGroupByPayload<T extends FileVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileVersionGroupByOutputType[P]>
            : GetScalarType<T[P], FileVersionGroupByOutputType[P]>
        }
      >
    >


  export type FileVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    version?: boolean
    key?: boolean
    size?: boolean
    url?: boolean
    createdBy?: boolean
    createdAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    version?: boolean
    key?: boolean
    size?: boolean
    url?: boolean
    createdBy?: boolean
    createdAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectScalar = {
    id?: boolean
    fileId?: boolean
    version?: boolean
    key?: boolean
    size?: boolean
    url?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type FileVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type FileVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $FileVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileVersion"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      version: number
      key: string
      size: bigint
      url: string
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["fileVersion"]>
    composites: {}
  }

  type FileVersionGetPayload<S extends boolean | null | undefined | FileVersionDefaultArgs> = $Result.GetResult<Prisma.$FileVersionPayload, S>

  type FileVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileVersionCountAggregateInputType | true
    }

  export interface FileVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileVersion'], meta: { name: 'FileVersion' } }
    /**
     * Find zero or one FileVersion that matches the filter.
     * @param {FileVersionFindUniqueArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileVersionFindUniqueArgs>(args: SelectSubset<T, FileVersionFindUniqueArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FileVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileVersionFindUniqueOrThrowArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, FileVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FileVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindFirstArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileVersionFindFirstArgs>(args?: SelectSubset<T, FileVersionFindFirstArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FileVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindFirstOrThrowArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, FileVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FileVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileVersions
     * const fileVersions = await prisma.fileVersion.findMany()
     * 
     * // Get first 10 FileVersions
     * const fileVersions = await prisma.fileVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileVersionFindManyArgs>(args?: SelectSubset<T, FileVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FileVersion.
     * @param {FileVersionCreateArgs} args - Arguments to create a FileVersion.
     * @example
     * // Create one FileVersion
     * const FileVersion = await prisma.fileVersion.create({
     *   data: {
     *     // ... data to create a FileVersion
     *   }
     * })
     * 
     */
    create<T extends FileVersionCreateArgs>(args: SelectSubset<T, FileVersionCreateArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FileVersions.
     * @param {FileVersionCreateManyArgs} args - Arguments to create many FileVersions.
     * @example
     * // Create many FileVersions
     * const fileVersion = await prisma.fileVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileVersionCreateManyArgs>(args?: SelectSubset<T, FileVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileVersions and returns the data saved in the database.
     * @param {FileVersionCreateManyAndReturnArgs} args - Arguments to create many FileVersions.
     * @example
     * // Create many FileVersions
     * const fileVersion = await prisma.fileVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileVersions and only return the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, FileVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FileVersion.
     * @param {FileVersionDeleteArgs} args - Arguments to delete one FileVersion.
     * @example
     * // Delete one FileVersion
     * const FileVersion = await prisma.fileVersion.delete({
     *   where: {
     *     // ... filter to delete one FileVersion
     *   }
     * })
     * 
     */
    delete<T extends FileVersionDeleteArgs>(args: SelectSubset<T, FileVersionDeleteArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FileVersion.
     * @param {FileVersionUpdateArgs} args - Arguments to update one FileVersion.
     * @example
     * // Update one FileVersion
     * const fileVersion = await prisma.fileVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileVersionUpdateArgs>(args: SelectSubset<T, FileVersionUpdateArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FileVersions.
     * @param {FileVersionDeleteManyArgs} args - Arguments to filter FileVersions to delete.
     * @example
     * // Delete a few FileVersions
     * const { count } = await prisma.fileVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileVersionDeleteManyArgs>(args?: SelectSubset<T, FileVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileVersions
     * const fileVersion = await prisma.fileVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileVersionUpdateManyArgs>(args: SelectSubset<T, FileVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileVersion.
     * @param {FileVersionUpsertArgs} args - Arguments to update or create a FileVersion.
     * @example
     * // Update or create a FileVersion
     * const fileVersion = await prisma.fileVersion.upsert({
     *   create: {
     *     // ... data to create a FileVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileVersion we want to update
     *   }
     * })
     */
    upsert<T extends FileVersionUpsertArgs>(args: SelectSubset<T, FileVersionUpsertArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FileVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionCountArgs} args - Arguments to filter FileVersions to count.
     * @example
     * // Count the number of FileVersions
     * const count = await prisma.fileVersion.count({
     *   where: {
     *     // ... the filter for the FileVersions we want to count
     *   }
     * })
    **/
    count<T extends FileVersionCountArgs>(
      args?: Subset<T, FileVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileVersionAggregateArgs>(args: Subset<T, FileVersionAggregateArgs>): Prisma.PrismaPromise<GetFileVersionAggregateType<T>>

    /**
     * Group by FileVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileVersionGroupByArgs['orderBy'] }
        : { orderBy?: FileVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileVersion model
   */
  readonly fields: FileVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileVersion model
   */ 
  interface FileVersionFieldRefs {
    readonly id: FieldRef<"FileVersion", 'String'>
    readonly fileId: FieldRef<"FileVersion", 'String'>
    readonly version: FieldRef<"FileVersion", 'Int'>
    readonly key: FieldRef<"FileVersion", 'String'>
    readonly size: FieldRef<"FileVersion", 'BigInt'>
    readonly url: FieldRef<"FileVersion", 'String'>
    readonly createdBy: FieldRef<"FileVersion", 'String'>
    readonly createdAt: FieldRef<"FileVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileVersion findUnique
   */
  export type FileVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion findUniqueOrThrow
   */
  export type FileVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion findFirst
   */
  export type FileVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileVersions.
     */
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion findFirstOrThrow
   */
  export type FileVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileVersions.
     */
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion findMany
   */
  export type FileVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersions to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion create
   */
  export type FileVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a FileVersion.
     */
    data: XOR<FileVersionCreateInput, FileVersionUncheckedCreateInput>
  }

  /**
   * FileVersion createMany
   */
  export type FileVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileVersions.
     */
    data: FileVersionCreateManyInput | FileVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileVersion createManyAndReturn
   */
  export type FileVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FileVersions.
     */
    data: FileVersionCreateManyInput | FileVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileVersion update
   */
  export type FileVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a FileVersion.
     */
    data: XOR<FileVersionUpdateInput, FileVersionUncheckedUpdateInput>
    /**
     * Choose, which FileVersion to update.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion updateMany
   */
  export type FileVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileVersions.
     */
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyInput>
    /**
     * Filter which FileVersions to update
     */
    where?: FileVersionWhereInput
  }

  /**
   * FileVersion upsert
   */
  export type FileVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the FileVersion to update in case it exists.
     */
    where: FileVersionWhereUniqueInput
    /**
     * In case the FileVersion found by the `where` argument doesn't exist, create a new FileVersion with this data.
     */
    create: XOR<FileVersionCreateInput, FileVersionUncheckedCreateInput>
    /**
     * In case the FileVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileVersionUpdateInput, FileVersionUncheckedUpdateInput>
  }

  /**
   * FileVersion delete
   */
  export type FileVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter which FileVersion to delete.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion deleteMany
   */
  export type FileVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileVersions to delete
     */
    where?: FileVersionWhereInput
  }

  /**
   * FileVersion without action
   */
  export type FileVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FileScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    workspaceId: 'workspaceId',
    uploaderId: 'uploaderId',
    entityId: 'entityId',
    entityType: 'entityType',
    originalName: 'originalName',
    storedName: 'storedName',
    key: 'key',
    bucket: 'bucket',
    mimeType: 'mimeType',
    size: 'size',
    width: 'width',
    height: 'height',
    url: 'url',
    thumbnailUrl: 'thumbnailUrl',
    thumbnailKey: 'thumbnailKey',
    isPublic: 'isPublic',
    status: 'status',
    metadata: 'metadata',
    checksum: 'checksum',
    version: 'version',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const FileVersionScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    version: 'version',
    key: 'key',
    size: 'size',
    url: 'url',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type FileVersionScalarFieldEnum = (typeof FileVersionScalarFieldEnum)[keyof typeof FileVersionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FileStatus'
   */
  export type EnumFileStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileStatus'>
    


  /**
   * Reference to a field of type 'FileStatus[]'
   */
  export type ListEnumFileStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    organizationId?: StringFilter<"File"> | string
    workspaceId?: StringNullableFilter<"File"> | string | null
    uploaderId?: StringFilter<"File"> | string
    entityId?: StringNullableFilter<"File"> | string | null
    entityType?: StringNullableFilter<"File"> | string | null
    originalName?: StringFilter<"File"> | string
    storedName?: StringFilter<"File"> | string
    key?: StringFilter<"File"> | string
    bucket?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: BigIntFilter<"File"> | bigint | number
    width?: IntNullableFilter<"File"> | number | null
    height?: IntNullableFilter<"File"> | number | null
    url?: StringFilter<"File"> | string
    thumbnailUrl?: StringNullableFilter<"File"> | string | null
    thumbnailKey?: StringNullableFilter<"File"> | string | null
    isPublic?: BoolFilter<"File"> | boolean
    status?: EnumFileStatusFilter<"File"> | $Enums.FileStatus
    metadata?: JsonNullableFilter<"File">
    checksum?: StringNullableFilter<"File"> | string | null
    version?: IntFilter<"File"> | number
    parentId?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    versions?: FileVersionListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrderInput | SortOrder
    uploaderId?: SortOrder
    entityId?: SortOrderInput | SortOrder
    entityType?: SortOrderInput | SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    thumbnailKey?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    version?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    versions?: FileVersionOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    organizationId?: StringFilter<"File"> | string
    workspaceId?: StringNullableFilter<"File"> | string | null
    uploaderId?: StringFilter<"File"> | string
    entityId?: StringNullableFilter<"File"> | string | null
    entityType?: StringNullableFilter<"File"> | string | null
    originalName?: StringFilter<"File"> | string
    storedName?: StringFilter<"File"> | string
    bucket?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: BigIntFilter<"File"> | bigint | number
    width?: IntNullableFilter<"File"> | number | null
    height?: IntNullableFilter<"File"> | number | null
    url?: StringFilter<"File"> | string
    thumbnailUrl?: StringNullableFilter<"File"> | string | null
    thumbnailKey?: StringNullableFilter<"File"> | string | null
    isPublic?: BoolFilter<"File"> | boolean
    status?: EnumFileStatusFilter<"File"> | $Enums.FileStatus
    metadata?: JsonNullableFilter<"File">
    checksum?: StringNullableFilter<"File"> | string | null
    version?: IntFilter<"File"> | number
    parentId?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    versions?: FileVersionListRelationFilter
  }, "id" | "key">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrderInput | SortOrder
    uploaderId?: SortOrder
    entityId?: SortOrderInput | SortOrder
    entityType?: SortOrderInput | SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    thumbnailKey?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    version?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    organizationId?: StringWithAggregatesFilter<"File"> | string
    workspaceId?: StringNullableWithAggregatesFilter<"File"> | string | null
    uploaderId?: StringWithAggregatesFilter<"File"> | string
    entityId?: StringNullableWithAggregatesFilter<"File"> | string | null
    entityType?: StringNullableWithAggregatesFilter<"File"> | string | null
    originalName?: StringWithAggregatesFilter<"File"> | string
    storedName?: StringWithAggregatesFilter<"File"> | string
    key?: StringWithAggregatesFilter<"File"> | string
    bucket?: StringWithAggregatesFilter<"File"> | string
    mimeType?: StringWithAggregatesFilter<"File"> | string
    size?: BigIntWithAggregatesFilter<"File"> | bigint | number
    width?: IntNullableWithAggregatesFilter<"File"> | number | null
    height?: IntNullableWithAggregatesFilter<"File"> | number | null
    url?: StringWithAggregatesFilter<"File"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"File"> | string | null
    thumbnailKey?: StringNullableWithAggregatesFilter<"File"> | string | null
    isPublic?: BoolWithAggregatesFilter<"File"> | boolean
    status?: EnumFileStatusWithAggregatesFilter<"File"> | $Enums.FileStatus
    metadata?: JsonNullableWithAggregatesFilter<"File">
    checksum?: StringNullableWithAggregatesFilter<"File"> | string | null
    version?: IntWithAggregatesFilter<"File"> | number
    parentId?: StringNullableWithAggregatesFilter<"File"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
  }

  export type FileVersionWhereInput = {
    AND?: FileVersionWhereInput | FileVersionWhereInput[]
    OR?: FileVersionWhereInput[]
    NOT?: FileVersionWhereInput | FileVersionWhereInput[]
    id?: StringFilter<"FileVersion"> | string
    fileId?: StringFilter<"FileVersion"> | string
    version?: IntFilter<"FileVersion"> | number
    key?: StringFilter<"FileVersion"> | string
    size?: BigIntFilter<"FileVersion"> | bigint | number
    url?: StringFilter<"FileVersion"> | string
    createdBy?: StringFilter<"FileVersion"> | string
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    file?: XOR<FileRelationFilter, FileWhereInput>
  }

  export type FileVersionOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    version?: SortOrder
    key?: SortOrder
    size?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    file?: FileOrderByWithRelationInput
  }

  export type FileVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: FileVersionWhereInput | FileVersionWhereInput[]
    OR?: FileVersionWhereInput[]
    NOT?: FileVersionWhereInput | FileVersionWhereInput[]
    fileId?: StringFilter<"FileVersion"> | string
    version?: IntFilter<"FileVersion"> | number
    size?: BigIntFilter<"FileVersion"> | bigint | number
    url?: StringFilter<"FileVersion"> | string
    createdBy?: StringFilter<"FileVersion"> | string
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    file?: XOR<FileRelationFilter, FileWhereInput>
  }, "id" | "key">

  export type FileVersionOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    version?: SortOrder
    key?: SortOrder
    size?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: FileVersionCountOrderByAggregateInput
    _avg?: FileVersionAvgOrderByAggregateInput
    _max?: FileVersionMaxOrderByAggregateInput
    _min?: FileVersionMinOrderByAggregateInput
    _sum?: FileVersionSumOrderByAggregateInput
  }

  export type FileVersionScalarWhereWithAggregatesInput = {
    AND?: FileVersionScalarWhereWithAggregatesInput | FileVersionScalarWhereWithAggregatesInput[]
    OR?: FileVersionScalarWhereWithAggregatesInput[]
    NOT?: FileVersionScalarWhereWithAggregatesInput | FileVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileVersion"> | string
    fileId?: StringWithAggregatesFilter<"FileVersion"> | string
    version?: IntWithAggregatesFilter<"FileVersion"> | number
    key?: StringWithAggregatesFilter<"FileVersion"> | string
    size?: BigIntWithAggregatesFilter<"FileVersion"> | bigint | number
    url?: StringWithAggregatesFilter<"FileVersion"> | string
    createdBy?: StringWithAggregatesFilter<"FileVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileVersion"> | Date | string
  }

  export type FileCreateInput = {
    id?: string
    organizationId: string
    workspaceId?: string | null
    uploaderId: string
    entityId?: string | null
    entityType?: string | null
    originalName: string
    storedName: string
    key: string
    bucket: string
    mimeType: string
    size: bigint | number
    width?: number | null
    height?: number | null
    url: string
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    isPublic?: boolean
    status?: $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    version?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    versions?: FileVersionCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    organizationId: string
    workspaceId?: string | null
    uploaderId: string
    entityId?: string | null
    entityType?: string | null
    originalName: string
    storedName: string
    key: string
    bucket: string
    mimeType: string
    size: bigint | number
    width?: number | null
    height?: number | null
    url: string
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    isPublic?: boolean
    status?: $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    version?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    versions?: FileVersionUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    versions?: FileVersionUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    versions?: FileVersionUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileCreateManyInput = {
    id?: string
    organizationId: string
    workspaceId?: string | null
    uploaderId: string
    entityId?: string | null
    entityType?: string | null
    originalName: string
    storedName: string
    key: string
    bucket: string
    mimeType: string
    size: bigint | number
    width?: number | null
    height?: number | null
    url: string
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    isPublic?: boolean
    status?: $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    version?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileVersionCreateInput = {
    id?: string
    version: number
    key: string
    size: bigint | number
    url: string
    createdBy: string
    createdAt?: Date | string
    file: FileCreateNestedOneWithoutVersionsInput
  }

  export type FileVersionUncheckedCreateInput = {
    id?: string
    fileId: string
    version: number
    key: string
    size: bigint | number
    url: string
    createdBy: string
    createdAt?: Date | string
  }

  export type FileVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: FileUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type FileVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionCreateManyInput = {
    id?: string
    fileId: string
    version: number
    key: string
    size: bigint | number
    url: string
    createdBy: string
    createdAt?: Date | string
  }

  export type FileVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumFileStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusFilter<$PrismaModel> | $Enums.FileStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FileVersionListRelationFilter = {
    every?: FileVersionWhereInput
    some?: FileVersionWhereInput
    none?: FileVersionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FileVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrder
    uploaderId?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailKey?: SortOrder
    isPublic?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    checksum?: SortOrder
    version?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    version?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrder
    uploaderId?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailKey?: SortOrder
    isPublic?: SortOrder
    status?: SortOrder
    checksum?: SortOrder
    version?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrder
    uploaderId?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    url?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailKey?: SortOrder
    isPublic?: SortOrder
    status?: SortOrder
    checksum?: SortOrder
    version?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    version?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFileStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusWithAggregatesFilter<$PrismaModel> | $Enums.FileStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileStatusFilter<$PrismaModel>
    _max?: NestedEnumFileStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FileRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type FileVersionCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    version?: SortOrder
    key?: SortOrder
    size?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type FileVersionAvgOrderByAggregateInput = {
    version?: SortOrder
    size?: SortOrder
  }

  export type FileVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    version?: SortOrder
    key?: SortOrder
    size?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type FileVersionMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    version?: SortOrder
    key?: SortOrder
    size?: SortOrder
    url?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type FileVersionSumOrderByAggregateInput = {
    version?: SortOrder
    size?: SortOrder
  }

  export type FileVersionCreateNestedManyWithoutFileInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type FileVersionUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumFileStatusFieldUpdateOperationsInput = {
    set?: $Enums.FileStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FileVersionUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutFileInput | FileVersionUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutFileInput | FileVersionUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutFileInput | FileVersionUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type FileVersionUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput> | FileVersionCreateWithoutFileInput[] | FileVersionUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutFileInput | FileVersionCreateOrConnectWithoutFileInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutFileInput | FileVersionUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileVersionCreateManyFileInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutFileInput | FileVersionUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutFileInput | FileVersionUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutVersionsInput = {
    create?: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: FileCreateOrConnectWithoutVersionsInput
    connect?: FileWhereUniqueInput
  }

  export type FileUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: FileCreateOrConnectWithoutVersionsInput
    upsert?: FileUpsertWithoutVersionsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutVersionsInput, FileUpdateWithoutVersionsInput>, FileUncheckedUpdateWithoutVersionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFileStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusFilter<$PrismaModel> | $Enums.FileStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFileStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileStatus | EnumFileStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileStatus[] | ListEnumFileStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFileStatusWithAggregatesFilter<$PrismaModel> | $Enums.FileStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileStatusFilter<$PrismaModel>
    _max?: NestedEnumFileStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FileVersionCreateWithoutFileInput = {
    id?: string
    version: number
    key: string
    size: bigint | number
    url: string
    createdBy: string
    createdAt?: Date | string
  }

  export type FileVersionUncheckedCreateWithoutFileInput = {
    id?: string
    version: number
    key: string
    size: bigint | number
    url: string
    createdBy: string
    createdAt?: Date | string
  }

  export type FileVersionCreateOrConnectWithoutFileInput = {
    where: FileVersionWhereUniqueInput
    create: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput>
  }

  export type FileVersionCreateManyFileInputEnvelope = {
    data: FileVersionCreateManyFileInput | FileVersionCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type FileVersionUpsertWithWhereUniqueWithoutFileInput = {
    where: FileVersionWhereUniqueInput
    update: XOR<FileVersionUpdateWithoutFileInput, FileVersionUncheckedUpdateWithoutFileInput>
    create: XOR<FileVersionCreateWithoutFileInput, FileVersionUncheckedCreateWithoutFileInput>
  }

  export type FileVersionUpdateWithWhereUniqueWithoutFileInput = {
    where: FileVersionWhereUniqueInput
    data: XOR<FileVersionUpdateWithoutFileInput, FileVersionUncheckedUpdateWithoutFileInput>
  }

  export type FileVersionUpdateManyWithWhereWithoutFileInput = {
    where: FileVersionScalarWhereInput
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyWithoutFileInput>
  }

  export type FileVersionScalarWhereInput = {
    AND?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
    OR?: FileVersionScalarWhereInput[]
    NOT?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
    id?: StringFilter<"FileVersion"> | string
    fileId?: StringFilter<"FileVersion"> | string
    version?: IntFilter<"FileVersion"> | number
    key?: StringFilter<"FileVersion"> | string
    size?: BigIntFilter<"FileVersion"> | bigint | number
    url?: StringFilter<"FileVersion"> | string
    createdBy?: StringFilter<"FileVersion"> | string
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
  }

  export type FileCreateWithoutVersionsInput = {
    id?: string
    organizationId: string
    workspaceId?: string | null
    uploaderId: string
    entityId?: string | null
    entityType?: string | null
    originalName: string
    storedName: string
    key: string
    bucket: string
    mimeType: string
    size: bigint | number
    width?: number | null
    height?: number | null
    url: string
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    isPublic?: boolean
    status?: $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    version?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FileUncheckedCreateWithoutVersionsInput = {
    id?: string
    organizationId: string
    workspaceId?: string | null
    uploaderId: string
    entityId?: string | null
    entityType?: string | null
    originalName: string
    storedName: string
    key: string
    bucket: string
    mimeType: string
    size: bigint | number
    width?: number | null
    height?: number | null
    url: string
    thumbnailUrl?: string | null
    thumbnailKey?: string | null
    isPublic?: boolean
    status?: $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: string | null
    version?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FileCreateOrConnectWithoutVersionsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
  }

  export type FileUpsertWithoutVersionsInput = {
    update: XOR<FileUpdateWithoutVersionsInput, FileUncheckedUpdateWithoutVersionsInput>
    create: XOR<FileCreateWithoutVersionsInput, FileUncheckedCreateWithoutVersionsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutVersionsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutVersionsInput, FileUncheckedUpdateWithoutVersionsInput>
  }

  export type FileUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    uploaderId?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailKey?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFileStatusFieldUpdateOperationsInput | $Enums.FileStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileVersionCreateManyFileInput = {
    id?: string
    version: number
    key: string
    size: bigint | number
    url: string
    createdBy: string
    createdAt?: Date | string
  }

  export type FileVersionUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    url?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FileCountOutputTypeDefaultArgs instead
     */
    export type FileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileVersionDefaultArgs instead
     */
    export type FileVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileVersionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}