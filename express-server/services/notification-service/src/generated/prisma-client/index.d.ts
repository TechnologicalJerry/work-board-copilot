
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
 * Model NotificationTemplate
 * 
 */
export type NotificationTemplate = $Result.DefaultSelection<Prisma.$NotificationTemplatePayload>
/**
 * Model WebhookEndpoint
 * 
 */
export type WebhookEndpoint = $Result.DefaultSelection<Prisma.$WebhookEndpointPayload>
/**
 * Model WebhookDelivery
 * 
 */
export type WebhookDelivery = $Result.DefaultSelection<Prisma.$WebhookDeliveryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NotificationTemplates
 * const notificationTemplates = await prisma.notificationTemplate.findMany()
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
   * // Fetch zero or more NotificationTemplates
   * const notificationTemplates = await prisma.notificationTemplate.findMany()
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
   * `prisma.notificationTemplate`: Exposes CRUD operations for the **NotificationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTemplates
    * const notificationTemplates = await prisma.notificationTemplate.findMany()
    * ```
    */
  get notificationTemplate(): Prisma.NotificationTemplateDelegate<ExtArgs>;

  /**
   * `prisma.webhookEndpoint`: Exposes CRUD operations for the **WebhookEndpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEndpoints
    * const webhookEndpoints = await prisma.webhookEndpoint.findMany()
    * ```
    */
  get webhookEndpoint(): Prisma.WebhookEndpointDelegate<ExtArgs>;

  /**
   * `prisma.webhookDelivery`: Exposes CRUD operations for the **WebhookDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookDeliveries
    * const webhookDeliveries = await prisma.webhookDelivery.findMany()
    * ```
    */
  get webhookDelivery(): Prisma.WebhookDeliveryDelegate<ExtArgs>;
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
    NotificationTemplate: 'NotificationTemplate',
    WebhookEndpoint: 'WebhookEndpoint',
    WebhookDelivery: 'WebhookDelivery'
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
      modelProps: "notificationTemplate" | "webhookEndpoint" | "webhookDelivery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NotificationTemplate: {
        payload: Prisma.$NotificationTemplatePayload<ExtArgs>
        fields: Prisma.NotificationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findFirst: {
            args: Prisma.NotificationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findMany: {
            args: Prisma.NotificationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          create: {
            args: Prisma.NotificationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          createMany: {
            args: Prisma.NotificationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          delete: {
            args: Prisma.NotificationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          update: {
            args: Prisma.NotificationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.NotificationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          aggregate: {
            args: Prisma.NotificationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationTemplate>
          }
          groupBy: {
            args: Prisma.NotificationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateCountAggregateOutputType> | number
          }
        }
      }
      WebhookEndpoint: {
        payload: Prisma.$WebhookEndpointPayload<ExtArgs>
        fields: Prisma.WebhookEndpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEndpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEndpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          findFirst: {
            args: Prisma.WebhookEndpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEndpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          findMany: {
            args: Prisma.WebhookEndpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[]
          }
          create: {
            args: Prisma.WebhookEndpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          createMany: {
            args: Prisma.WebhookEndpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEndpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[]
          }
          delete: {
            args: Prisma.WebhookEndpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          update: {
            args: Prisma.WebhookEndpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEndpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEndpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookEndpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          aggregate: {
            args: Prisma.WebhookEndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEndpoint>
          }
          groupBy: {
            args: Prisma.WebhookEndpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEndpointCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEndpointCountAggregateOutputType> | number
          }
        }
      }
      WebhookDelivery: {
        payload: Prisma.$WebhookDeliveryPayload<ExtArgs>
        fields: Prisma.WebhookDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findFirst: {
            args: Prisma.WebhookDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findMany: {
            args: Prisma.WebhookDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          create: {
            args: Prisma.WebhookDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          createMany: {
            args: Prisma.WebhookDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          delete: {
            args: Prisma.WebhookDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          update: {
            args: Prisma.WebhookDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.WebhookDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          aggregate: {
            args: Prisma.WebhookDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookDelivery>
          }
          groupBy: {
            args: Prisma.WebhookDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryCountAggregateOutputType> | number
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
   * Count Type WebhookEndpointCountOutputType
   */

  export type WebhookEndpointCountOutputType = {
    deliveries: number
  }

  export type WebhookEndpointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | WebhookEndpointCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * WebhookEndpointCountOutputType without action
   */
  export type WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpointCountOutputType
     */
    select?: WebhookEndpointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebhookEndpointCountOutputType without action
   */
  export type WebhookEndpointCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NotificationTemplate
   */

  export type AggregateNotificationTemplate = {
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  export type NotificationTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    channel: string | null
    subject: string | null
    bodyText: string | null
    bodyHtml: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    channel: string | null
    subject: string | null
    bodyText: string | null
    bodyHtml: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationTemplateCountAggregateOutputType = {
    id: number
    name: number
    type: number
    channel: number
    subject: number
    bodyText: number
    bodyHtml: number
    variables: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationTemplateMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    channel?: true
    subject?: true
    bodyText?: true
    bodyHtml?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    channel?: true
    subject?: true
    bodyText?: true
    bodyHtml?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationTemplateCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    channel?: true
    subject?: true
    bodyText?: true
    bodyHtml?: true
    variables?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplate to aggregate.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTemplates
    **/
    _count?: true | NotificationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type GetNotificationTemplateAggregateType<T extends NotificationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationTemplate[P]>
      : GetScalarType<T[P], AggregateNotificationTemplate[P]>
  }




  export type NotificationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTemplateWhereInput
    orderBy?: NotificationTemplateOrderByWithAggregationInput | NotificationTemplateOrderByWithAggregationInput[]
    by: NotificationTemplateScalarFieldEnum[] | NotificationTemplateScalarFieldEnum
    having?: NotificationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTemplateCountAggregateInputType | true
    _min?: NotificationTemplateMinAggregateInputType
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type NotificationTemplateGroupByOutputType = {
    id: string
    name: string
    type: string
    channel: string
    subject: string | null
    bodyText: string
    bodyHtml: string | null
    variables: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  type GetNotificationTemplateGroupByPayload<T extends NotificationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    subject?: boolean
    bodyText?: boolean
    bodyHtml?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    subject?: boolean
    bodyText?: boolean
    bodyHtml?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    channel?: boolean
    subject?: boolean
    bodyText?: boolean
    bodyHtml?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NotificationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      channel: string
      subject: string | null
      bodyText: string
      bodyHtml: string | null
      variables: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationTemplate"]>
    composites: {}
  }

  type NotificationTemplateGetPayload<S extends boolean | null | undefined | NotificationTemplateDefaultArgs> = $Result.GetResult<Prisma.$NotificationTemplatePayload, S>

  type NotificationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationTemplateCountAggregateInputType | true
    }

  export interface NotificationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationTemplate'], meta: { name: 'NotificationTemplate' } }
    /**
     * Find zero or one NotificationTemplate that matches the filter.
     * @param {NotificationTemplateFindUniqueArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTemplateFindUniqueArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotificationTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationTemplateFindUniqueOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotificationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTemplateFindFirstArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotificationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotificationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany()
     * 
     * // Get first 10 NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTemplateFindManyArgs>(args?: SelectSubset<T, NotificationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotificationTemplate.
     * @param {NotificationTemplateCreateArgs} args - Arguments to create a NotificationTemplate.
     * @example
     * // Create one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.create({
     *   data: {
     *     // ... data to create a NotificationTemplate
     *   }
     * })
     * 
     */
    create<T extends NotificationTemplateCreateArgs>(args: SelectSubset<T, NotificationTemplateCreateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotificationTemplates.
     * @param {NotificationTemplateCreateManyArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTemplateCreateManyArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationTemplates and returns the data saved in the database.
     * @param {NotificationTemplateCreateManyAndReturnArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationTemplates and only return the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotificationTemplate.
     * @param {NotificationTemplateDeleteArgs} args - Arguments to delete one NotificationTemplate.
     * @example
     * // Delete one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.delete({
     *   where: {
     *     // ... filter to delete one NotificationTemplate
     *   }
     * })
     * 
     */
    delete<T extends NotificationTemplateDeleteArgs>(args: SelectSubset<T, NotificationTemplateDeleteArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotificationTemplate.
     * @param {NotificationTemplateUpdateArgs} args - Arguments to update one NotificationTemplate.
     * @example
     * // Update one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTemplateUpdateArgs>(args: SelectSubset<T, NotificationTemplateUpdateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotificationTemplates.
     * @param {NotificationTemplateDeleteManyArgs} args - Arguments to filter NotificationTemplates to delete.
     * @example
     * // Delete a few NotificationTemplates
     * const { count } = await prisma.notificationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTemplateDeleteManyArgs>(args?: SelectSubset<T, NotificationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTemplateUpdateManyArgs>(args: SelectSubset<T, NotificationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationTemplate.
     * @param {NotificationTemplateUpsertArgs} args - Arguments to update or create a NotificationTemplate.
     * @example
     * // Update or create a NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.upsert({
     *   create: {
     *     // ... data to create a NotificationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTemplateUpsertArgs>(args: SelectSubset<T, NotificationTemplateUpsertArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateCountArgs} args - Arguments to filter NotificationTemplates to count.
     * @example
     * // Count the number of NotificationTemplates
     * const count = await prisma.notificationTemplate.count({
     *   where: {
     *     // ... the filter for the NotificationTemplates we want to count
     *   }
     * })
    **/
    count<T extends NotificationTemplateCountArgs>(
      args?: Subset<T, NotificationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationTemplateAggregateArgs>(args: Subset<T, NotificationTemplateAggregateArgs>): Prisma.PrismaPromise<GetNotificationTemplateAggregateType<T>>

    /**
     * Group by NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateGroupByArgs} args - Group by arguments.
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
      T extends NotificationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationTemplate model
   */
  readonly fields: NotificationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NotificationTemplate model
   */ 
  interface NotificationTemplateFieldRefs {
    readonly id: FieldRef<"NotificationTemplate", 'String'>
    readonly name: FieldRef<"NotificationTemplate", 'String'>
    readonly type: FieldRef<"NotificationTemplate", 'String'>
    readonly channel: FieldRef<"NotificationTemplate", 'String'>
    readonly subject: FieldRef<"NotificationTemplate", 'String'>
    readonly bodyText: FieldRef<"NotificationTemplate", 'String'>
    readonly bodyHtml: FieldRef<"NotificationTemplate", 'String'>
    readonly variables: FieldRef<"NotificationTemplate", 'Json'>
    readonly isActive: FieldRef<"NotificationTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"NotificationTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationTemplate findUnique
   */
  export type NotificationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findUniqueOrThrow
   */
  export type NotificationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findFirst
   */
  export type NotificationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findFirstOrThrow
   */
  export type NotificationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findMany
   */
  export type NotificationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter, which NotificationTemplates to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate create
   */
  export type NotificationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * The data needed to create a NotificationTemplate.
     */
    data: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
  }

  /**
   * NotificationTemplate createMany
   */
  export type NotificationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate createManyAndReturn
   */
  export type NotificationTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate update
   */
  export type NotificationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * The data needed to update a NotificationTemplate.
     */
    data: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
    /**
     * Choose, which NotificationTemplate to update.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate updateMany
   */
  export type NotificationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTemplates.
     */
    data: XOR<NotificationTemplateUpdateManyMutationInput, NotificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTemplates to update
     */
    where?: NotificationTemplateWhereInput
  }

  /**
   * NotificationTemplate upsert
   */
  export type NotificationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * The filter to search for the NotificationTemplate to update in case it exists.
     */
    where: NotificationTemplateWhereUniqueInput
    /**
     * In case the NotificationTemplate found by the `where` argument doesn't exist, create a new NotificationTemplate with this data.
     */
    create: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
    /**
     * In case the NotificationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
  }

  /**
   * NotificationTemplate delete
   */
  export type NotificationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Filter which NotificationTemplate to delete.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate deleteMany
   */
  export type NotificationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplates to delete
     */
    where?: NotificationTemplateWhereInput
  }

  /**
   * NotificationTemplate without action
   */
  export type NotificationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
  }


  /**
   * Model WebhookEndpoint
   */

  export type AggregateWebhookEndpoint = {
    _count: WebhookEndpointCountAggregateOutputType | null
    _avg: WebhookEndpointAvgAggregateOutputType | null
    _sum: WebhookEndpointSumAggregateOutputType | null
    _min: WebhookEndpointMinAggregateOutputType | null
    _max: WebhookEndpointMaxAggregateOutputType | null
  }

  export type WebhookEndpointAvgAggregateOutputType = {
    failureCount: number | null
  }

  export type WebhookEndpointSumAggregateOutputType = {
    failureCount: number | null
  }

  export type WebhookEndpointMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    lastCalledAt: Date | null
    failureCount: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WebhookEndpointMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    lastCalledAt: Date | null
    failureCount: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WebhookEndpointCountAggregateOutputType = {
    id: number
    organizationId: number
    url: number
    secret: number
    events: number
    isActive: number
    lastCalledAt: number
    failureCount: number
    createdBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type WebhookEndpointAvgAggregateInputType = {
    failureCount?: true
  }

  export type WebhookEndpointSumAggregateInputType = {
    failureCount?: true
  }

  export type WebhookEndpointMinAggregateInputType = {
    id?: true
    organizationId?: true
    url?: true
    secret?: true
    isActive?: true
    lastCalledAt?: true
    failureCount?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WebhookEndpointMaxAggregateInputType = {
    id?: true
    organizationId?: true
    url?: true
    secret?: true
    isActive?: true
    lastCalledAt?: true
    failureCount?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WebhookEndpointCountAggregateInputType = {
    id?: true
    organizationId?: true
    url?: true
    secret?: true
    events?: true
    isActive?: true
    lastCalledAt?: true
    failureCount?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type WebhookEndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEndpoint to aggregate.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEndpoints
    **/
    _count?: true | WebhookEndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookEndpointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookEndpointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEndpointMaxAggregateInputType
  }

  export type GetWebhookEndpointAggregateType<T extends WebhookEndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEndpoint[P]>
      : GetScalarType<T[P], AggregateWebhookEndpoint[P]>
  }




  export type WebhookEndpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEndpointWhereInput
    orderBy?: WebhookEndpointOrderByWithAggregationInput | WebhookEndpointOrderByWithAggregationInput[]
    by: WebhookEndpointScalarFieldEnum[] | WebhookEndpointScalarFieldEnum
    having?: WebhookEndpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEndpointCountAggregateInputType | true
    _avg?: WebhookEndpointAvgAggregateInputType
    _sum?: WebhookEndpointSumAggregateInputType
    _min?: WebhookEndpointMinAggregateInputType
    _max?: WebhookEndpointMaxAggregateInputType
  }

  export type WebhookEndpointGroupByOutputType = {
    id: string
    organizationId: string
    url: string
    secret: string
    events: string[]
    isActive: boolean
    lastCalledAt: Date | null
    failureCount: number
    createdBy: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: WebhookEndpointCountAggregateOutputType | null
    _avg: WebhookEndpointAvgAggregateOutputType | null
    _sum: WebhookEndpointSumAggregateOutputType | null
    _min: WebhookEndpointMinAggregateOutputType | null
    _max: WebhookEndpointMaxAggregateOutputType | null
  }

  type GetWebhookEndpointGroupByPayload<T extends WebhookEndpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEndpointGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEndpointGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEndpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    lastCalledAt?: boolean
    failureCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deliveries?: boolean | WebhookEndpoint$deliveriesArgs<ExtArgs>
    _count?: boolean | WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookEndpoint"]>

  export type WebhookEndpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    lastCalledAt?: boolean
    failureCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["webhookEndpoint"]>

  export type WebhookEndpointSelectScalar = {
    id?: boolean
    organizationId?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    lastCalledAt?: boolean
    failureCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type WebhookEndpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | WebhookEndpoint$deliveriesArgs<ExtArgs>
    _count?: boolean | WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebhookEndpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WebhookEndpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEndpoint"
    objects: {
      deliveries: Prisma.$WebhookDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      url: string
      secret: string
      events: string[]
      isActive: boolean
      lastCalledAt: Date | null
      failureCount: number
      createdBy: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["webhookEndpoint"]>
    composites: {}
  }

  type WebhookEndpointGetPayload<S extends boolean | null | undefined | WebhookEndpointDefaultArgs> = $Result.GetResult<Prisma.$WebhookEndpointPayload, S>

  type WebhookEndpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookEndpointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookEndpointCountAggregateInputType | true
    }

  export interface WebhookEndpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEndpoint'], meta: { name: 'WebhookEndpoint' } }
    /**
     * Find zero or one WebhookEndpoint that matches the filter.
     * @param {WebhookEndpointFindUniqueArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEndpointFindUniqueArgs>(args: SelectSubset<T, WebhookEndpointFindUniqueArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookEndpoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookEndpointFindUniqueOrThrowArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEndpointFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookEndpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointFindFirstArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEndpointFindFirstArgs>(args?: SelectSubset<T, WebhookEndpointFindFirstArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookEndpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointFindFirstOrThrowArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEndpointFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookEndpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEndpoints
     * const webhookEndpoints = await prisma.webhookEndpoint.findMany()
     * 
     * // Get first 10 WebhookEndpoints
     * const webhookEndpoints = await prisma.webhookEndpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEndpointWithIdOnly = await prisma.webhookEndpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEndpointFindManyArgs>(args?: SelectSubset<T, WebhookEndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookEndpoint.
     * @param {WebhookEndpointCreateArgs} args - Arguments to create a WebhookEndpoint.
     * @example
     * // Create one WebhookEndpoint
     * const WebhookEndpoint = await prisma.webhookEndpoint.create({
     *   data: {
     *     // ... data to create a WebhookEndpoint
     *   }
     * })
     * 
     */
    create<T extends WebhookEndpointCreateArgs>(args: SelectSubset<T, WebhookEndpointCreateArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookEndpoints.
     * @param {WebhookEndpointCreateManyArgs} args - Arguments to create many WebhookEndpoints.
     * @example
     * // Create many WebhookEndpoints
     * const webhookEndpoint = await prisma.webhookEndpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEndpointCreateManyArgs>(args?: SelectSubset<T, WebhookEndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEndpoints and returns the data saved in the database.
     * @param {WebhookEndpointCreateManyAndReturnArgs} args - Arguments to create many WebhookEndpoints.
     * @example
     * // Create many WebhookEndpoints
     * const webhookEndpoint = await prisma.webhookEndpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEndpoints and only return the `id`
     * const webhookEndpointWithIdOnly = await prisma.webhookEndpoint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEndpointCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookEndpoint.
     * @param {WebhookEndpointDeleteArgs} args - Arguments to delete one WebhookEndpoint.
     * @example
     * // Delete one WebhookEndpoint
     * const WebhookEndpoint = await prisma.webhookEndpoint.delete({
     *   where: {
     *     // ... filter to delete one WebhookEndpoint
     *   }
     * })
     * 
     */
    delete<T extends WebhookEndpointDeleteArgs>(args: SelectSubset<T, WebhookEndpointDeleteArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookEndpoint.
     * @param {WebhookEndpointUpdateArgs} args - Arguments to update one WebhookEndpoint.
     * @example
     * // Update one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEndpointUpdateArgs>(args: SelectSubset<T, WebhookEndpointUpdateArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookEndpoints.
     * @param {WebhookEndpointDeleteManyArgs} args - Arguments to filter WebhookEndpoints to delete.
     * @example
     * // Delete a few WebhookEndpoints
     * const { count } = await prisma.webhookEndpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEndpointDeleteManyArgs>(args?: SelectSubset<T, WebhookEndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEndpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEndpoints
     * const webhookEndpoint = await prisma.webhookEndpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEndpointUpdateManyArgs>(args: SelectSubset<T, WebhookEndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookEndpoint.
     * @param {WebhookEndpointUpsertArgs} args - Arguments to update or create a WebhookEndpoint.
     * @example
     * // Update or create a WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.upsert({
     *   create: {
     *     // ... data to create a WebhookEndpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEndpoint we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEndpointUpsertArgs>(args: SelectSubset<T, WebhookEndpointUpsertArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookEndpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointCountArgs} args - Arguments to filter WebhookEndpoints to count.
     * @example
     * // Count the number of WebhookEndpoints
     * const count = await prisma.webhookEndpoint.count({
     *   where: {
     *     // ... the filter for the WebhookEndpoints we want to count
     *   }
     * })
    **/
    count<T extends WebhookEndpointCountArgs>(
      args?: Subset<T, WebhookEndpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEndpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookEndpointAggregateArgs>(args: Subset<T, WebhookEndpointAggregateArgs>): Prisma.PrismaPromise<GetWebhookEndpointAggregateType<T>>

    /**
     * Group by WebhookEndpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointGroupByArgs} args - Group by arguments.
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
      T extends WebhookEndpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEndpointGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEndpointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookEndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEndpoint model
   */
  readonly fields: WebhookEndpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEndpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEndpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends WebhookEndpoint$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, WebhookEndpoint$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the WebhookEndpoint model
   */ 
  interface WebhookEndpointFieldRefs {
    readonly id: FieldRef<"WebhookEndpoint", 'String'>
    readonly organizationId: FieldRef<"WebhookEndpoint", 'String'>
    readonly url: FieldRef<"WebhookEndpoint", 'String'>
    readonly secret: FieldRef<"WebhookEndpoint", 'String'>
    readonly events: FieldRef<"WebhookEndpoint", 'String[]'>
    readonly isActive: FieldRef<"WebhookEndpoint", 'Boolean'>
    readonly lastCalledAt: FieldRef<"WebhookEndpoint", 'DateTime'>
    readonly failureCount: FieldRef<"WebhookEndpoint", 'Int'>
    readonly createdBy: FieldRef<"WebhookEndpoint", 'String'>
    readonly createdAt: FieldRef<"WebhookEndpoint", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookEndpoint", 'DateTime'>
    readonly deletedAt: FieldRef<"WebhookEndpoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEndpoint findUnique
   */
  export type WebhookEndpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint findUniqueOrThrow
   */
  export type WebhookEndpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint findFirst
   */
  export type WebhookEndpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEndpoints.
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEndpoints.
     */
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint findFirstOrThrow
   */
  export type WebhookEndpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEndpoints.
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEndpoints.
     */
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint findMany
   */
  export type WebhookEndpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoints to fetch.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEndpoints.
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint create
   */
  export type WebhookEndpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookEndpoint.
     */
    data: XOR<WebhookEndpointCreateInput, WebhookEndpointUncheckedCreateInput>
  }

  /**
   * WebhookEndpoint createMany
   */
  export type WebhookEndpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEndpoints.
     */
    data: WebhookEndpointCreateManyInput | WebhookEndpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEndpoint createManyAndReturn
   */
  export type WebhookEndpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookEndpoints.
     */
    data: WebhookEndpointCreateManyInput | WebhookEndpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEndpoint update
   */
  export type WebhookEndpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookEndpoint.
     */
    data: XOR<WebhookEndpointUpdateInput, WebhookEndpointUncheckedUpdateInput>
    /**
     * Choose, which WebhookEndpoint to update.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint updateMany
   */
  export type WebhookEndpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEndpoints.
     */
    data: XOR<WebhookEndpointUpdateManyMutationInput, WebhookEndpointUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEndpoints to update
     */
    where?: WebhookEndpointWhereInput
  }

  /**
   * WebhookEndpoint upsert
   */
  export type WebhookEndpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookEndpoint to update in case it exists.
     */
    where: WebhookEndpointWhereUniqueInput
    /**
     * In case the WebhookEndpoint found by the `where` argument doesn't exist, create a new WebhookEndpoint with this data.
     */
    create: XOR<WebhookEndpointCreateInput, WebhookEndpointUncheckedCreateInput>
    /**
     * In case the WebhookEndpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEndpointUpdateInput, WebhookEndpointUncheckedUpdateInput>
  }

  /**
   * WebhookEndpoint delete
   */
  export type WebhookEndpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter which WebhookEndpoint to delete.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint deleteMany
   */
  export type WebhookEndpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEndpoints to delete
     */
    where?: WebhookEndpointWhereInput
  }

  /**
   * WebhookEndpoint.deliveries
   */
  export type WebhookEndpoint$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    cursor?: WebhookDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint without action
   */
  export type WebhookEndpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
  }


  /**
   * Model WebhookDelivery
   */

  export type AggregateWebhookDelivery = {
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  export type WebhookDeliveryAvgAggregateOutputType = {
    statusCode: number | null
    duration: number | null
    retryCount: number | null
  }

  export type WebhookDeliverySumAggregateOutputType = {
    statusCode: number | null
    duration: number | null
    retryCount: number | null
  }

  export type WebhookDeliveryMinAggregateOutputType = {
    id: string | null
    webhookId: string | null
    eventType: string | null
    statusCode: number | null
    response: string | null
    success: boolean | null
    duration: number | null
    retryCount: number | null
    createdAt: Date | null
  }

  export type WebhookDeliveryMaxAggregateOutputType = {
    id: string | null
    webhookId: string | null
    eventType: string | null
    statusCode: number | null
    response: string | null
    success: boolean | null
    duration: number | null
    retryCount: number | null
    createdAt: Date | null
  }

  export type WebhookDeliveryCountAggregateOutputType = {
    id: number
    webhookId: number
    eventType: number
    payload: number
    statusCode: number
    response: number
    success: number
    duration: number
    retryCount: number
    createdAt: number
    _all: number
  }


  export type WebhookDeliveryAvgAggregateInputType = {
    statusCode?: true
    duration?: true
    retryCount?: true
  }

  export type WebhookDeliverySumAggregateInputType = {
    statusCode?: true
    duration?: true
    retryCount?: true
  }

  export type WebhookDeliveryMinAggregateInputType = {
    id?: true
    webhookId?: true
    eventType?: true
    statusCode?: true
    response?: true
    success?: true
    duration?: true
    retryCount?: true
    createdAt?: true
  }

  export type WebhookDeliveryMaxAggregateInputType = {
    id?: true
    webhookId?: true
    eventType?: true
    statusCode?: true
    response?: true
    success?: true
    duration?: true
    retryCount?: true
    createdAt?: true
  }

  export type WebhookDeliveryCountAggregateInputType = {
    id?: true
    webhookId?: true
    eventType?: true
    payload?: true
    statusCode?: true
    response?: true
    success?: true
    duration?: true
    retryCount?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDelivery to aggregate.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookDeliveries
    **/
    _count?: true | WebhookDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type GetWebhookDeliveryAggregateType<T extends WebhookDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookDelivery[P]>
      : GetScalarType<T[P], AggregateWebhookDelivery[P]>
  }




  export type WebhookDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithAggregationInput | WebhookDeliveryOrderByWithAggregationInput[]
    by: WebhookDeliveryScalarFieldEnum[] | WebhookDeliveryScalarFieldEnum
    having?: WebhookDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookDeliveryCountAggregateInputType | true
    _avg?: WebhookDeliveryAvgAggregateInputType
    _sum?: WebhookDeliverySumAggregateInputType
    _min?: WebhookDeliveryMinAggregateInputType
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type WebhookDeliveryGroupByOutputType = {
    id: string
    webhookId: string
    eventType: string
    payload: JsonValue
    statusCode: number | null
    response: string | null
    success: boolean
    duration: number | null
    retryCount: number
    createdAt: Date
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  type GetWebhookDeliveryGroupByPayload<T extends WebhookDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type WebhookDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    eventType?: boolean
    payload?: boolean
    statusCode?: boolean
    response?: boolean
    success?: boolean
    duration?: boolean
    retryCount?: boolean
    createdAt?: boolean
    webhook?: boolean | WebhookEndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    eventType?: boolean
    payload?: boolean
    statusCode?: boolean
    response?: boolean
    success?: boolean
    duration?: boolean
    retryCount?: boolean
    createdAt?: boolean
    webhook?: boolean | WebhookEndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectScalar = {
    id?: boolean
    webhookId?: boolean
    eventType?: boolean
    payload?: boolean
    statusCode?: boolean
    response?: boolean
    success?: boolean
    duration?: boolean
    retryCount?: boolean
    createdAt?: boolean
  }

  export type WebhookDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookEndpointDefaultArgs<ExtArgs>
  }
  export type WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webhook?: boolean | WebhookEndpointDefaultArgs<ExtArgs>
  }

  export type $WebhookDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookDelivery"
    objects: {
      webhook: Prisma.$WebhookEndpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webhookId: string
      eventType: string
      payload: Prisma.JsonValue
      statusCode: number | null
      response: string | null
      success: boolean
      duration: number | null
      retryCount: number
      createdAt: Date
    }, ExtArgs["result"]["webhookDelivery"]>
    composites: {}
  }

  type WebhookDeliveryGetPayload<S extends boolean | null | undefined | WebhookDeliveryDefaultArgs> = $Result.GetResult<Prisma.$WebhookDeliveryPayload, S>

  type WebhookDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookDeliveryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookDeliveryCountAggregateInputType | true
    }

  export interface WebhookDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookDelivery'], meta: { name: 'WebhookDelivery' } }
    /**
     * Find zero or one WebhookDelivery that matches the filter.
     * @param {WebhookDeliveryFindUniqueArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookDeliveryFindUniqueArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookDelivery that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookDeliveryFindUniqueOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookDeliveryFindFirstArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany()
     * 
     * // Get first 10 WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookDeliveryFindManyArgs>(args?: SelectSubset<T, WebhookDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookDelivery.
     * @param {WebhookDeliveryCreateArgs} args - Arguments to create a WebhookDelivery.
     * @example
     * // Create one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.create({
     *   data: {
     *     // ... data to create a WebhookDelivery
     *   }
     * })
     * 
     */
    create<T extends WebhookDeliveryCreateArgs>(args: SelectSubset<T, WebhookDeliveryCreateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookDeliveries.
     * @param {WebhookDeliveryCreateManyArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookDeliveryCreateManyArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookDeliveries and returns the data saved in the database.
     * @param {WebhookDeliveryCreateManyAndReturnArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookDelivery.
     * @param {WebhookDeliveryDeleteArgs} args - Arguments to delete one WebhookDelivery.
     * @example
     * // Delete one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.delete({
     *   where: {
     *     // ... filter to delete one WebhookDelivery
     *   }
     * })
     * 
     */
    delete<T extends WebhookDeliveryDeleteArgs>(args: SelectSubset<T, WebhookDeliveryDeleteArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookDelivery.
     * @param {WebhookDeliveryUpdateArgs} args - Arguments to update one WebhookDelivery.
     * @example
     * // Update one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookDeliveryUpdateArgs>(args: SelectSubset<T, WebhookDeliveryUpdateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookDeliveries.
     * @param {WebhookDeliveryDeleteManyArgs} args - Arguments to filter WebhookDeliveries to delete.
     * @example
     * // Delete a few WebhookDeliveries
     * const { count } = await prisma.webhookDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookDeliveryDeleteManyArgs>(args?: SelectSubset<T, WebhookDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookDeliveryUpdateManyArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookDelivery.
     * @param {WebhookDeliveryUpsertArgs} args - Arguments to update or create a WebhookDelivery.
     * @example
     * // Update or create a WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.upsert({
     *   create: {
     *     // ... data to create a WebhookDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookDelivery we want to update
     *   }
     * })
     */
    upsert<T extends WebhookDeliveryUpsertArgs>(args: SelectSubset<T, WebhookDeliveryUpsertArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryCountArgs} args - Arguments to filter WebhookDeliveries to count.
     * @example
     * // Count the number of WebhookDeliveries
     * const count = await prisma.webhookDelivery.count({
     *   where: {
     *     // ... the filter for the WebhookDeliveries we want to count
     *   }
     * })
    **/
    count<T extends WebhookDeliveryCountArgs>(
      args?: Subset<T, WebhookDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookDeliveryAggregateArgs>(args: Subset<T, WebhookDeliveryAggregateArgs>): Prisma.PrismaPromise<GetWebhookDeliveryAggregateType<T>>

    /**
     * Group by WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryGroupByArgs} args - Group by arguments.
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
      T extends WebhookDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: WebhookDeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookDelivery model
   */
  readonly fields: WebhookDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webhook<T extends WebhookEndpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebhookEndpointDefaultArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WebhookDelivery model
   */ 
  interface WebhookDeliveryFieldRefs {
    readonly id: FieldRef<"WebhookDelivery", 'String'>
    readonly webhookId: FieldRef<"WebhookDelivery", 'String'>
    readonly eventType: FieldRef<"WebhookDelivery", 'String'>
    readonly payload: FieldRef<"WebhookDelivery", 'Json'>
    readonly statusCode: FieldRef<"WebhookDelivery", 'Int'>
    readonly response: FieldRef<"WebhookDelivery", 'String'>
    readonly success: FieldRef<"WebhookDelivery", 'Boolean'>
    readonly duration: FieldRef<"WebhookDelivery", 'Int'>
    readonly retryCount: FieldRef<"WebhookDelivery", 'Int'>
    readonly createdAt: FieldRef<"WebhookDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookDelivery findUnique
   */
  export type WebhookDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findUniqueOrThrow
   */
  export type WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findFirst
   */
  export type WebhookDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findFirstOrThrow
   */
  export type WebhookDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findMany
   */
  export type WebhookDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which WebhookDeliveries to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery create
   */
  export type WebhookDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
  }

  /**
   * WebhookDelivery createMany
   */
  export type WebhookDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookDelivery createManyAndReturn
   */
  export type WebhookDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookDelivery update
   */
  export type WebhookDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
    /**
     * Choose, which WebhookDelivery to update.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery updateMany
   */
  export type WebhookDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
  }

  /**
   * WebhookDelivery upsert
   */
  export type WebhookDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookDelivery to update in case it exists.
     */
    where: WebhookDeliveryWhereUniqueInput
    /**
     * In case the WebhookDelivery found by the `where` argument doesn't exist, create a new WebhookDelivery with this data.
     */
    create: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
    /**
     * In case the WebhookDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
  }

  /**
   * WebhookDelivery delete
   */
  export type WebhookDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
    /**
     * Filter which WebhookDelivery to delete.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery deleteMany
   */
  export type WebhookDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDeliveries to delete
     */
    where?: WebhookDeliveryWhereInput
  }

  /**
   * WebhookDelivery without action
   */
  export type WebhookDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookDeliveryInclude<ExtArgs> | null
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


  export const NotificationTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    channel: 'channel',
    subject: 'subject',
    bodyText: 'bodyText',
    bodyHtml: 'bodyHtml',
    variables: 'variables',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationTemplateScalarFieldEnum = (typeof NotificationTemplateScalarFieldEnum)[keyof typeof NotificationTemplateScalarFieldEnum]


  export const WebhookEndpointScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    url: 'url',
    secret: 'secret',
    events: 'events',
    isActive: 'isActive',
    lastCalledAt: 'lastCalledAt',
    failureCount: 'failureCount',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type WebhookEndpointScalarFieldEnum = (typeof WebhookEndpointScalarFieldEnum)[keyof typeof WebhookEndpointScalarFieldEnum]


  export const WebhookDeliveryScalarFieldEnum: {
    id: 'id',
    webhookId: 'webhookId',
    eventType: 'eventType',
    payload: 'payload',
    statusCode: 'statusCode',
    response: 'response',
    success: 'success',
    duration: 'duration',
    retryCount: 'retryCount',
    createdAt: 'createdAt'
  };

  export type WebhookDeliveryScalarFieldEnum = (typeof WebhookDeliveryScalarFieldEnum)[keyof typeof WebhookDeliveryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type NotificationTemplateWhereInput = {
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    id?: StringFilter<"NotificationTemplate"> | string
    name?: StringFilter<"NotificationTemplate"> | string
    type?: StringFilter<"NotificationTemplate"> | string
    channel?: StringFilter<"NotificationTemplate"> | string
    subject?: StringNullableFilter<"NotificationTemplate"> | string | null
    bodyText?: StringFilter<"NotificationTemplate"> | string
    bodyHtml?: StringNullableFilter<"NotificationTemplate"> | string | null
    variables?: JsonFilter<"NotificationTemplate">
    isActive?: BoolFilter<"NotificationTemplate"> | boolean
    createdAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
  }

  export type NotificationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    subject?: SortOrderInput | SortOrder
    bodyText?: SortOrder
    bodyHtml?: SortOrderInput | SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    type?: StringFilter<"NotificationTemplate"> | string
    channel?: StringFilter<"NotificationTemplate"> | string
    subject?: StringNullableFilter<"NotificationTemplate"> | string | null
    bodyText?: StringFilter<"NotificationTemplate"> | string
    bodyHtml?: StringNullableFilter<"NotificationTemplate"> | string | null
    variables?: JsonFilter<"NotificationTemplate">
    isActive?: BoolFilter<"NotificationTemplate"> | boolean
    createdAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
  }, "id" | "name">

  export type NotificationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    subject?: SortOrderInput | SortOrder
    bodyText?: SortOrder
    bodyHtml?: SortOrderInput | SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationTemplateCountOrderByAggregateInput
    _max?: NotificationTemplateMaxOrderByAggregateInput
    _min?: NotificationTemplateMinOrderByAggregateInput
  }

  export type NotificationTemplateScalarWhereWithAggregatesInput = {
    AND?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    OR?: NotificationTemplateScalarWhereWithAggregatesInput[]
    NOT?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    name?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    type?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    channel?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    subject?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    bodyText?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    bodyHtml?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    variables?: JsonWithAggregatesFilter<"NotificationTemplate">
    isActive?: BoolWithAggregatesFilter<"NotificationTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationTemplate"> | Date | string
  }

  export type WebhookEndpointWhereInput = {
    AND?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    OR?: WebhookEndpointWhereInput[]
    NOT?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    id?: StringFilter<"WebhookEndpoint"> | string
    organizationId?: StringFilter<"WebhookEndpoint"> | string
    url?: StringFilter<"WebhookEndpoint"> | string
    secret?: StringFilter<"WebhookEndpoint"> | string
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolFilter<"WebhookEndpoint"> | boolean
    lastCalledAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    failureCount?: IntFilter<"WebhookEndpoint"> | number
    createdBy?: StringFilter<"WebhookEndpoint"> | string
    createdAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    deletedAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    deliveries?: WebhookDeliveryListRelationFilter
  }

  export type WebhookEndpointOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    lastCalledAt?: SortOrderInput | SortOrder
    failureCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deliveries?: WebhookDeliveryOrderByRelationAggregateInput
  }

  export type WebhookEndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    OR?: WebhookEndpointWhereInput[]
    NOT?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    organizationId?: StringFilter<"WebhookEndpoint"> | string
    url?: StringFilter<"WebhookEndpoint"> | string
    secret?: StringFilter<"WebhookEndpoint"> | string
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolFilter<"WebhookEndpoint"> | boolean
    lastCalledAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    failureCount?: IntFilter<"WebhookEndpoint"> | number
    createdBy?: StringFilter<"WebhookEndpoint"> | string
    createdAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    deletedAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    deliveries?: WebhookDeliveryListRelationFilter
  }, "id">

  export type WebhookEndpointOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    lastCalledAt?: SortOrderInput | SortOrder
    failureCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: WebhookEndpointCountOrderByAggregateInput
    _avg?: WebhookEndpointAvgOrderByAggregateInput
    _max?: WebhookEndpointMaxOrderByAggregateInput
    _min?: WebhookEndpointMinOrderByAggregateInput
    _sum?: WebhookEndpointSumOrderByAggregateInput
  }

  export type WebhookEndpointScalarWhereWithAggregatesInput = {
    AND?: WebhookEndpointScalarWhereWithAggregatesInput | WebhookEndpointScalarWhereWithAggregatesInput[]
    OR?: WebhookEndpointScalarWhereWithAggregatesInput[]
    NOT?: WebhookEndpointScalarWhereWithAggregatesInput | WebhookEndpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    organizationId?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    url?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    secret?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolWithAggregatesFilter<"WebhookEndpoint"> | boolean
    lastCalledAt?: DateTimeNullableWithAggregatesFilter<"WebhookEndpoint"> | Date | string | null
    failureCount?: IntWithAggregatesFilter<"WebhookEndpoint"> | number
    createdBy?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebhookEndpoint"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"WebhookEndpoint"> | Date | string | null
  }

  export type WebhookDeliveryWhereInput = {
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    webhookId?: StringFilter<"WebhookDelivery"> | string
    eventType?: StringFilter<"WebhookDelivery"> | string
    payload?: JsonFilter<"WebhookDelivery">
    statusCode?: IntNullableFilter<"WebhookDelivery"> | number | null
    response?: StringNullableFilter<"WebhookDelivery"> | string | null
    success?: BoolFilter<"WebhookDelivery"> | boolean
    duration?: IntNullableFilter<"WebhookDelivery"> | number | null
    retryCount?: IntFilter<"WebhookDelivery"> | number
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    webhook?: XOR<WebhookEndpointRelationFilter, WebhookEndpointWhereInput>
  }

  export type WebhookDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    success?: SortOrder
    duration?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    webhook?: WebhookEndpointOrderByWithRelationInput
  }

  export type WebhookDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    webhookId?: StringFilter<"WebhookDelivery"> | string
    eventType?: StringFilter<"WebhookDelivery"> | string
    payload?: JsonFilter<"WebhookDelivery">
    statusCode?: IntNullableFilter<"WebhookDelivery"> | number | null
    response?: StringNullableFilter<"WebhookDelivery"> | string | null
    success?: BoolFilter<"WebhookDelivery"> | boolean
    duration?: IntNullableFilter<"WebhookDelivery"> | number | null
    retryCount?: IntFilter<"WebhookDelivery"> | number
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    webhook?: XOR<WebhookEndpointRelationFilter, WebhookEndpointWhereInput>
  }, "id">

  export type WebhookDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    webhookId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    success?: SortOrder
    duration?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    _count?: WebhookDeliveryCountOrderByAggregateInput
    _avg?: WebhookDeliveryAvgOrderByAggregateInput
    _max?: WebhookDeliveryMaxOrderByAggregateInput
    _min?: WebhookDeliveryMinOrderByAggregateInput
    _sum?: WebhookDeliverySumOrderByAggregateInput
  }

  export type WebhookDeliveryScalarWhereWithAggregatesInput = {
    AND?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    OR?: WebhookDeliveryScalarWhereWithAggregatesInput[]
    NOT?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    webhookId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    eventType?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    payload?: JsonWithAggregatesFilter<"WebhookDelivery">
    statusCode?: IntNullableWithAggregatesFilter<"WebhookDelivery"> | number | null
    response?: StringNullableWithAggregatesFilter<"WebhookDelivery"> | string | null
    success?: BoolWithAggregatesFilter<"WebhookDelivery"> | boolean
    duration?: IntNullableWithAggregatesFilter<"WebhookDelivery"> | number | null
    retryCount?: IntWithAggregatesFilter<"WebhookDelivery"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string
  }

  export type NotificationTemplateCreateInput = {
    id?: string
    name: string
    type: string
    channel: string
    subject?: string | null
    bodyText: string
    bodyHtml?: string | null
    variables: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    channel: string
    subject?: string | null
    bodyText: string
    bodyHtml?: string | null
    variables: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateCreateManyInput = {
    id?: string
    name: string
    type: string
    channel: string
    subject?: string | null
    bodyText: string
    bodyHtml?: string | null
    variables: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointCreateInput = {
    id?: string
    organizationId: string
    url: string
    secret: string
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    lastCalledAt?: Date | string | null
    failureCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deliveries?: WebhookDeliveryCreateNestedManyWithoutWebhookInput
  }

  export type WebhookEndpointUncheckedCreateInput = {
    id?: string
    organizationId: string
    url: string
    secret: string
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    lastCalledAt?: Date | string | null
    failureCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deliveries?: WebhookDeliveryUncheckedCreateNestedManyWithoutWebhookInput
  }

  export type WebhookEndpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: WebhookDeliveryUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookEndpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: WebhookDeliveryUncheckedUpdateManyWithoutWebhookNestedInput
  }

  export type WebhookEndpointCreateManyInput = {
    id?: string
    organizationId: string
    url: string
    secret: string
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    lastCalledAt?: Date | string | null
    failureCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WebhookEndpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookEndpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookDeliveryCreateInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    response?: string | null
    success: boolean
    duration?: number | null
    retryCount?: number
    createdAt?: Date | string
    webhook: WebhookEndpointCreateNestedOneWithoutDeliveriesInput
  }

  export type WebhookDeliveryUncheckedCreateInput = {
    id?: string
    webhookId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    response?: string | null
    success: boolean
    duration?: number | null
    retryCount?: number
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webhook?: WebhookEndpointUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type WebhookDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryCreateManyInput = {
    id?: string
    webhookId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    response?: string | null
    success: boolean
    duration?: number | null
    retryCount?: number
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    bodyText?: SortOrder
    bodyHtml?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    bodyText?: SortOrder
    bodyHtml?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    bodyText?: SortOrder
    bodyHtml?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type WebhookDeliveryListRelationFilter = {
    every?: WebhookDeliveryWhereInput
    some?: WebhookDeliveryWhereInput
    none?: WebhookDeliveryWhereInput
  }

  export type WebhookDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookEndpointCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    lastCalledAt?: SortOrder
    failureCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WebhookEndpointAvgOrderByAggregateInput = {
    failureCount?: SortOrder
  }

  export type WebhookEndpointMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    lastCalledAt?: SortOrder
    failureCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WebhookEndpointMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    lastCalledAt?: SortOrder
    failureCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WebhookEndpointSumOrderByAggregateInput = {
    failureCount?: SortOrder
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

  export type WebhookEndpointRelationFilter = {
    is?: WebhookEndpointWhereInput
    isNot?: WebhookEndpointWhereInput
  }

  export type WebhookDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    statusCode?: SortOrder
    response?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliveryAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    duration?: SortOrder
    retryCount?: SortOrder
  }

  export type WebhookDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    eventType?: SortOrder
    statusCode?: SortOrder
    response?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    eventType?: SortOrder
    statusCode?: SortOrder
    response?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookDeliverySumOrderByAggregateInput = {
    statusCode?: SortOrder
    duration?: SortOrder
    retryCount?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WebhookEndpointCreateeventsInput = {
    set: string[]
  }

  export type WebhookDeliveryCreateNestedManyWithoutWebhookInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type WebhookDeliveryUncheckedCreateNestedManyWithoutWebhookInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
  }

  export type WebhookEndpointUpdateeventsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WebhookDeliveryUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput | WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutWebhookNestedInput = {
    create?: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput> | WebhookDeliveryCreateWithoutWebhookInput[] | WebhookDeliveryUncheckedCreateWithoutWebhookInput[]
    connectOrCreate?: WebhookDeliveryCreateOrConnectWithoutWebhookInput | WebhookDeliveryCreateOrConnectWithoutWebhookInput[]
    upsert?: WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput[]
    createMany?: WebhookDeliveryCreateManyWebhookInputEnvelope
    set?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    disconnect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    delete?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    connect?: WebhookDeliveryWhereUniqueInput | WebhookDeliveryWhereUniqueInput[]
    update?: WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput | WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput[]
    updateMany?: WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput | WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput[]
    deleteMany?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
  }

  export type WebhookEndpointCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<WebhookEndpointCreateWithoutDeliveriesInput, WebhookEndpointUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: WebhookEndpointCreateOrConnectWithoutDeliveriesInput
    connect?: WebhookEndpointWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WebhookEndpointUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<WebhookEndpointCreateWithoutDeliveriesInput, WebhookEndpointUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: WebhookEndpointCreateOrConnectWithoutDeliveriesInput
    upsert?: WebhookEndpointUpsertWithoutDeliveriesInput
    connect?: WebhookEndpointWhereUniqueInput
    update?: XOR<XOR<WebhookEndpointUpdateToOneWithWhereWithoutDeliveriesInput, WebhookEndpointUpdateWithoutDeliveriesInput>, WebhookEndpointUncheckedUpdateWithoutDeliveriesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type WebhookDeliveryCreateWithoutWebhookInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    response?: string | null
    success: boolean
    duration?: number | null
    retryCount?: number
    createdAt?: Date | string
  }

  export type WebhookDeliveryUncheckedCreateWithoutWebhookInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    response?: string | null
    success: boolean
    duration?: number | null
    retryCount?: number
    createdAt?: Date | string
  }

  export type WebhookDeliveryCreateOrConnectWithoutWebhookInput = {
    where: WebhookDeliveryWhereUniqueInput
    create: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookDeliveryCreateManyWebhookInputEnvelope = {
    data: WebhookDeliveryCreateManyWebhookInput | WebhookDeliveryCreateManyWebhookInput[]
    skipDuplicates?: boolean
  }

  export type WebhookDeliveryUpsertWithWhereUniqueWithoutWebhookInput = {
    where: WebhookDeliveryWhereUniqueInput
    update: XOR<WebhookDeliveryUpdateWithoutWebhookInput, WebhookDeliveryUncheckedUpdateWithoutWebhookInput>
    create: XOR<WebhookDeliveryCreateWithoutWebhookInput, WebhookDeliveryUncheckedCreateWithoutWebhookInput>
  }

  export type WebhookDeliveryUpdateWithWhereUniqueWithoutWebhookInput = {
    where: WebhookDeliveryWhereUniqueInput
    data: XOR<WebhookDeliveryUpdateWithoutWebhookInput, WebhookDeliveryUncheckedUpdateWithoutWebhookInput>
  }

  export type WebhookDeliveryUpdateManyWithWhereWithoutWebhookInput = {
    where: WebhookDeliveryScalarWhereInput
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyWithoutWebhookInput>
  }

  export type WebhookDeliveryScalarWhereInput = {
    AND?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
    OR?: WebhookDeliveryScalarWhereInput[]
    NOT?: WebhookDeliveryScalarWhereInput | WebhookDeliveryScalarWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    webhookId?: StringFilter<"WebhookDelivery"> | string
    eventType?: StringFilter<"WebhookDelivery"> | string
    payload?: JsonFilter<"WebhookDelivery">
    statusCode?: IntNullableFilter<"WebhookDelivery"> | number | null
    response?: StringNullableFilter<"WebhookDelivery"> | string | null
    success?: BoolFilter<"WebhookDelivery"> | boolean
    duration?: IntNullableFilter<"WebhookDelivery"> | number | null
    retryCount?: IntFilter<"WebhookDelivery"> | number
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
  }

  export type WebhookEndpointCreateWithoutDeliveriesInput = {
    id?: string
    organizationId: string
    url: string
    secret: string
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    lastCalledAt?: Date | string | null
    failureCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WebhookEndpointUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    organizationId: string
    url: string
    secret: string
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    lastCalledAt?: Date | string | null
    failureCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WebhookEndpointCreateOrConnectWithoutDeliveriesInput = {
    where: WebhookEndpointWhereUniqueInput
    create: XOR<WebhookEndpointCreateWithoutDeliveriesInput, WebhookEndpointUncheckedCreateWithoutDeliveriesInput>
  }

  export type WebhookEndpointUpsertWithoutDeliveriesInput = {
    update: XOR<WebhookEndpointUpdateWithoutDeliveriesInput, WebhookEndpointUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<WebhookEndpointCreateWithoutDeliveriesInput, WebhookEndpointUncheckedCreateWithoutDeliveriesInput>
    where?: WebhookEndpointWhereInput
  }

  export type WebhookEndpointUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: WebhookEndpointWhereInput
    data: XOR<WebhookEndpointUpdateWithoutDeliveriesInput, WebhookEndpointUncheckedUpdateWithoutDeliveriesInput>
  }

  export type WebhookEndpointUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookEndpointUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastCalledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookDeliveryCreateManyWebhookInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    statusCode?: number | null
    response?: string | null
    success: boolean
    duration?: number | null
    retryCount?: number
    createdAt?: Date | string
  }

  export type WebhookDeliveryUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateManyWithoutWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WebhookEndpointCountOutputTypeDefaultArgs instead
     */
    export type WebhookEndpointCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationTemplateDefaultArgs instead
     */
    export type NotificationTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookEndpointDefaultArgs instead
     */
    export type WebhookEndpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookEndpointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookDeliveryDefaultArgs instead
     */
    export type WebhookDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookDeliveryDefaultArgs<ExtArgs>

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