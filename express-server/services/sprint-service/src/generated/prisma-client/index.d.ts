
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
 * Model Sprint
 * 
 */
export type Sprint = $Result.DefaultSelection<Prisma.$SprintPayload>
/**
 * Model SprintItem
 * 
 */
export type SprintItem = $Result.DefaultSelection<Prisma.$SprintItemPayload>
/**
 * Model SprintVelocity
 * 
 */
export type SprintVelocity = $Result.DefaultSelection<Prisma.$SprintVelocityPayload>
/**
 * Model BurndownSnapshot
 * 
 */
export type BurndownSnapshot = $Result.DefaultSelection<Prisma.$BurndownSnapshotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SprintStatus: {
  PLANNED: 'PLANNED',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type SprintStatus = (typeof SprintStatus)[keyof typeof SprintStatus]

}

export type SprintStatus = $Enums.SprintStatus

export const SprintStatus: typeof $Enums.SprintStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sprints
 * const sprints = await prisma.sprint.findMany()
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
   * // Fetch zero or more Sprints
   * const sprints = await prisma.sprint.findMany()
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
   * `prisma.sprint`: Exposes CRUD operations for the **Sprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sprints
    * const sprints = await prisma.sprint.findMany()
    * ```
    */
  get sprint(): Prisma.SprintDelegate<ExtArgs>;

  /**
   * `prisma.sprintItem`: Exposes CRUD operations for the **SprintItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SprintItems
    * const sprintItems = await prisma.sprintItem.findMany()
    * ```
    */
  get sprintItem(): Prisma.SprintItemDelegate<ExtArgs>;

  /**
   * `prisma.sprintVelocity`: Exposes CRUD operations for the **SprintVelocity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SprintVelocities
    * const sprintVelocities = await prisma.sprintVelocity.findMany()
    * ```
    */
  get sprintVelocity(): Prisma.SprintVelocityDelegate<ExtArgs>;

  /**
   * `prisma.burndownSnapshot`: Exposes CRUD operations for the **BurndownSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BurndownSnapshots
    * const burndownSnapshots = await prisma.burndownSnapshot.findMany()
    * ```
    */
  get burndownSnapshot(): Prisma.BurndownSnapshotDelegate<ExtArgs>;
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
    Sprint: 'Sprint',
    SprintItem: 'SprintItem',
    SprintVelocity: 'SprintVelocity',
    BurndownSnapshot: 'BurndownSnapshot'
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
      modelProps: "sprint" | "sprintItem" | "sprintVelocity" | "burndownSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sprint: {
        payload: Prisma.$SprintPayload<ExtArgs>
        fields: Prisma.SprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findFirst: {
            args: Prisma.SprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findMany: {
            args: Prisma.SprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          create: {
            args: Prisma.SprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          createMany: {
            args: Prisma.SprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SprintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          delete: {
            args: Prisma.SprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          update: {
            args: Prisma.SprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          deleteMany: {
            args: Prisma.SprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          aggregate: {
            args: Prisma.SprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprint>
          }
          groupBy: {
            args: Prisma.SprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<SprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.SprintCountArgs<ExtArgs>
            result: $Utils.Optional<SprintCountAggregateOutputType> | number
          }
        }
      }
      SprintItem: {
        payload: Prisma.$SprintItemPayload<ExtArgs>
        fields: Prisma.SprintItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SprintItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SprintItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>
          }
          findFirst: {
            args: Prisma.SprintItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SprintItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>
          }
          findMany: {
            args: Prisma.SprintItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>[]
          }
          create: {
            args: Prisma.SprintItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>
          }
          createMany: {
            args: Prisma.SprintItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SprintItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>[]
          }
          delete: {
            args: Prisma.SprintItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>
          }
          update: {
            args: Prisma.SprintItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>
          }
          deleteMany: {
            args: Prisma.SprintItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SprintItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SprintItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintItemPayload>
          }
          aggregate: {
            args: Prisma.SprintItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprintItem>
          }
          groupBy: {
            args: Prisma.SprintItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SprintItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SprintItemCountArgs<ExtArgs>
            result: $Utils.Optional<SprintItemCountAggregateOutputType> | number
          }
        }
      }
      SprintVelocity: {
        payload: Prisma.$SprintVelocityPayload<ExtArgs>
        fields: Prisma.SprintVelocityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SprintVelocityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SprintVelocityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>
          }
          findFirst: {
            args: Prisma.SprintVelocityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SprintVelocityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>
          }
          findMany: {
            args: Prisma.SprintVelocityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>[]
          }
          create: {
            args: Prisma.SprintVelocityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>
          }
          createMany: {
            args: Prisma.SprintVelocityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SprintVelocityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>[]
          }
          delete: {
            args: Prisma.SprintVelocityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>
          }
          update: {
            args: Prisma.SprintVelocityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>
          }
          deleteMany: {
            args: Prisma.SprintVelocityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SprintVelocityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SprintVelocityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintVelocityPayload>
          }
          aggregate: {
            args: Prisma.SprintVelocityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprintVelocity>
          }
          groupBy: {
            args: Prisma.SprintVelocityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SprintVelocityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SprintVelocityCountArgs<ExtArgs>
            result: $Utils.Optional<SprintVelocityCountAggregateOutputType> | number
          }
        }
      }
      BurndownSnapshot: {
        payload: Prisma.$BurndownSnapshotPayload<ExtArgs>
        fields: Prisma.BurndownSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BurndownSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BurndownSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>
          }
          findFirst: {
            args: Prisma.BurndownSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BurndownSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>
          }
          findMany: {
            args: Prisma.BurndownSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>[]
          }
          create: {
            args: Prisma.BurndownSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>
          }
          createMany: {
            args: Prisma.BurndownSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BurndownSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>[]
          }
          delete: {
            args: Prisma.BurndownSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>
          }
          update: {
            args: Prisma.BurndownSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.BurndownSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BurndownSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BurndownSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BurndownSnapshotPayload>
          }
          aggregate: {
            args: Prisma.BurndownSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBurndownSnapshot>
          }
          groupBy: {
            args: Prisma.BurndownSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BurndownSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BurndownSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<BurndownSnapshotCountAggregateOutputType> | number
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
   * Count Type SprintCountOutputType
   */

  export type SprintCountOutputType = {
    items: number
    burndowns: number
  }

  export type SprintCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SprintCountOutputTypeCountItemsArgs
    burndowns?: boolean | SprintCountOutputTypeCountBurndownsArgs
  }

  // Custom InputTypes
  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintCountOutputType
     */
    select?: SprintCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintItemWhereInput
  }

  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeCountBurndownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BurndownSnapshotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sprint
   */

  export type AggregateSprint = {
    _count: SprintCountAggregateOutputType | null
    _avg: SprintAvgAggregateOutputType | null
    _sum: SprintSumAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  export type SprintAvgAggregateOutputType = {
    capacity: number | null
    velocityPoints: number | null
  }

  export type SprintSumAggregateOutputType = {
    capacity: number | null
    velocityPoints: number | null
  }

  export type SprintMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    goal: string | null
    status: $Enums.SprintStatus | null
    startDate: Date | null
    endDate: Date | null
    startedAt: Date | null
    completedAt: Date | null
    capacity: number | null
    velocityPoints: number | null
    notes: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SprintMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    goal: string | null
    status: $Enums.SprintStatus | null
    startDate: Date | null
    endDate: Date | null
    startedAt: Date | null
    completedAt: Date | null
    capacity: number | null
    velocityPoints: number | null
    notes: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SprintCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    goal: number
    status: number
    startDate: number
    endDate: number
    startedAt: number
    completedAt: number
    capacity: number
    velocityPoints: number
    notes: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SprintAvgAggregateInputType = {
    capacity?: true
    velocityPoints?: true
  }

  export type SprintSumAggregateInputType = {
    capacity?: true
    velocityPoints?: true
  }

  export type SprintMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    goal?: true
    status?: true
    startDate?: true
    endDate?: true
    startedAt?: true
    completedAt?: true
    capacity?: true
    velocityPoints?: true
    notes?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SprintMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    goal?: true
    status?: true
    startDate?: true
    endDate?: true
    startedAt?: true
    completedAt?: true
    capacity?: true
    velocityPoints?: true
    notes?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SprintCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    goal?: true
    status?: true
    startDate?: true
    endDate?: true
    startedAt?: true
    completedAt?: true
    capacity?: true
    velocityPoints?: true
    notes?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprint to aggregate.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sprints
    **/
    _count?: true | SprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SprintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SprintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SprintMaxAggregateInputType
  }

  export type GetSprintAggregateType<T extends SprintAggregateArgs> = {
        [P in keyof T & keyof AggregateSprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprint[P]>
      : GetScalarType<T[P], AggregateSprint[P]>
  }




  export type SprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithAggregationInput | SprintOrderByWithAggregationInput[]
    by: SprintScalarFieldEnum[] | SprintScalarFieldEnum
    having?: SprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SprintCountAggregateInputType | true
    _avg?: SprintAvgAggregateInputType
    _sum?: SprintSumAggregateInputType
    _min?: SprintMinAggregateInputType
    _max?: SprintMaxAggregateInputType
  }

  export type SprintGroupByOutputType = {
    id: string
    projectId: string
    name: string
    goal: string | null
    status: $Enums.SprintStatus
    startDate: Date | null
    endDate: Date | null
    startedAt: Date | null
    completedAt: Date | null
    capacity: number | null
    velocityPoints: number | null
    notes: string | null
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
    _count: SprintCountAggregateOutputType | null
    _avg: SprintAvgAggregateOutputType | null
    _sum: SprintSumAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  type GetSprintGroupByPayload<T extends SprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SprintGroupByOutputType[P]>
            : GetScalarType<T[P], SprintGroupByOutputType[P]>
        }
      >
    >


  export type SprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    startedAt?: boolean
    completedAt?: boolean
    capacity?: boolean
    velocityPoints?: boolean
    notes?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Sprint$itemsArgs<ExtArgs>
    velocityData?: boolean | Sprint$velocityDataArgs<ExtArgs>
    burndowns?: boolean | Sprint$burndownsArgs<ExtArgs>
    _count?: boolean | SprintCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    startedAt?: boolean
    completedAt?: boolean
    capacity?: boolean
    velocityPoints?: boolean
    notes?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sprint"]>

  export type SprintSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    goal?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    startedAt?: boolean
    completedAt?: boolean
    capacity?: boolean
    velocityPoints?: boolean
    notes?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SprintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Sprint$itemsArgs<ExtArgs>
    velocityData?: boolean | Sprint$velocityDataArgs<ExtArgs>
    burndowns?: boolean | Sprint$burndownsArgs<ExtArgs>
    _count?: boolean | SprintCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SprintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sprint"
    objects: {
      items: Prisma.$SprintItemPayload<ExtArgs>[]
      velocityData: Prisma.$SprintVelocityPayload<ExtArgs> | null
      burndowns: Prisma.$BurndownSnapshotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      goal: string | null
      status: $Enums.SprintStatus
      startDate: Date | null
      endDate: Date | null
      startedAt: Date | null
      completedAt: Date | null
      capacity: number | null
      velocityPoints: number | null
      notes: string | null
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sprint"]>
    composites: {}
  }

  type SprintGetPayload<S extends boolean | null | undefined | SprintDefaultArgs> = $Result.GetResult<Prisma.$SprintPayload, S>

  type SprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SprintFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SprintCountAggregateInputType | true
    }

  export interface SprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sprint'], meta: { name: 'Sprint' } }
    /**
     * Find zero or one Sprint that matches the filter.
     * @param {SprintFindUniqueArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SprintFindUniqueArgs>(args: SelectSubset<T, SprintFindUniqueArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sprint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SprintFindUniqueOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SprintFindUniqueOrThrowArgs>(args: SelectSubset<T, SprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SprintFindFirstArgs>(args?: SelectSubset<T, SprintFindFirstArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SprintFindFirstOrThrowArgs>(args?: SelectSubset<T, SprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sprints
     * const sprints = await prisma.sprint.findMany()
     * 
     * // Get first 10 Sprints
     * const sprints = await prisma.sprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sprintWithIdOnly = await prisma.sprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SprintFindManyArgs>(args?: SelectSubset<T, SprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sprint.
     * @param {SprintCreateArgs} args - Arguments to create a Sprint.
     * @example
     * // Create one Sprint
     * const Sprint = await prisma.sprint.create({
     *   data: {
     *     // ... data to create a Sprint
     *   }
     * })
     * 
     */
    create<T extends SprintCreateArgs>(args: SelectSubset<T, SprintCreateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sprints.
     * @param {SprintCreateManyArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SprintCreateManyArgs>(args?: SelectSubset<T, SprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sprints and returns the data saved in the database.
     * @param {SprintCreateManyAndReturnArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sprints and only return the `id`
     * const sprintWithIdOnly = await prisma.sprint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SprintCreateManyAndReturnArgs>(args?: SelectSubset<T, SprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sprint.
     * @param {SprintDeleteArgs} args - Arguments to delete one Sprint.
     * @example
     * // Delete one Sprint
     * const Sprint = await prisma.sprint.delete({
     *   where: {
     *     // ... filter to delete one Sprint
     *   }
     * })
     * 
     */
    delete<T extends SprintDeleteArgs>(args: SelectSubset<T, SprintDeleteArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sprint.
     * @param {SprintUpdateArgs} args - Arguments to update one Sprint.
     * @example
     * // Update one Sprint
     * const sprint = await prisma.sprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SprintUpdateArgs>(args: SelectSubset<T, SprintUpdateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sprints.
     * @param {SprintDeleteManyArgs} args - Arguments to filter Sprints to delete.
     * @example
     * // Delete a few Sprints
     * const { count } = await prisma.sprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SprintDeleteManyArgs>(args?: SelectSubset<T, SprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sprints
     * const sprint = await prisma.sprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SprintUpdateManyArgs>(args: SelectSubset<T, SprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sprint.
     * @param {SprintUpsertArgs} args - Arguments to update or create a Sprint.
     * @example
     * // Update or create a Sprint
     * const sprint = await prisma.sprint.upsert({
     *   create: {
     *     // ... data to create a Sprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sprint we want to update
     *   }
     * })
     */
    upsert<T extends SprintUpsertArgs>(args: SelectSubset<T, SprintUpsertArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintCountArgs} args - Arguments to filter Sprints to count.
     * @example
     * // Count the number of Sprints
     * const count = await prisma.sprint.count({
     *   where: {
     *     // ... the filter for the Sprints we want to count
     *   }
     * })
    **/
    count<T extends SprintCountArgs>(
      args?: Subset<T, SprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SprintAggregateArgs>(args: Subset<T, SprintAggregateArgs>): Prisma.PrismaPromise<GetSprintAggregateType<T>>

    /**
     * Group by Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintGroupByArgs} args - Group by arguments.
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
      T extends SprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SprintGroupByArgs['orderBy'] }
        : { orderBy?: SprintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sprint model
   */
  readonly fields: SprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Sprint$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sprint$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "findMany"> | Null>
    velocityData<T extends Sprint$velocityDataArgs<ExtArgs> = {}>(args?: Subset<T, Sprint$velocityDataArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    burndowns<T extends Sprint$burndownsArgs<ExtArgs> = {}>(args?: Subset<T, Sprint$burndownsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Sprint model
   */ 
  interface SprintFieldRefs {
    readonly id: FieldRef<"Sprint", 'String'>
    readonly projectId: FieldRef<"Sprint", 'String'>
    readonly name: FieldRef<"Sprint", 'String'>
    readonly goal: FieldRef<"Sprint", 'String'>
    readonly status: FieldRef<"Sprint", 'SprintStatus'>
    readonly startDate: FieldRef<"Sprint", 'DateTime'>
    readonly endDate: FieldRef<"Sprint", 'DateTime'>
    readonly startedAt: FieldRef<"Sprint", 'DateTime'>
    readonly completedAt: FieldRef<"Sprint", 'DateTime'>
    readonly capacity: FieldRef<"Sprint", 'Int'>
    readonly velocityPoints: FieldRef<"Sprint", 'Int'>
    readonly notes: FieldRef<"Sprint", 'String'>
    readonly createdBy: FieldRef<"Sprint", 'String'>
    readonly updatedBy: FieldRef<"Sprint", 'String'>
    readonly createdAt: FieldRef<"Sprint", 'DateTime'>
    readonly updatedAt: FieldRef<"Sprint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sprint findUnique
   */
  export type SprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findUniqueOrThrow
   */
  export type SprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findFirst
   */
  export type SprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findFirstOrThrow
   */
  export type SprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findMany
   */
  export type SprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprints to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint create
   */
  export type SprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to create a Sprint.
     */
    data: XOR<SprintCreateInput, SprintUncheckedCreateInput>
  }

  /**
   * Sprint createMany
   */
  export type SprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sprint createManyAndReturn
   */
  export type SprintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sprint update
   */
  export type SprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to update a Sprint.
     */
    data: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
    /**
     * Choose, which Sprint to update.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint updateMany
   */
  export type SprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sprints.
     */
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyInput>
    /**
     * Filter which Sprints to update
     */
    where?: SprintWhereInput
  }

  /**
   * Sprint upsert
   */
  export type SprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The filter to search for the Sprint to update in case it exists.
     */
    where: SprintWhereUniqueInput
    /**
     * In case the Sprint found by the `where` argument doesn't exist, create a new Sprint with this data.
     */
    create: XOR<SprintCreateInput, SprintUncheckedCreateInput>
    /**
     * In case the Sprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
  }

  /**
   * Sprint delete
   */
  export type SprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter which Sprint to delete.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint deleteMany
   */
  export type SprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprints to delete
     */
    where?: SprintWhereInput
  }

  /**
   * Sprint.items
   */
  export type Sprint$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    where?: SprintItemWhereInput
    orderBy?: SprintItemOrderByWithRelationInput | SprintItemOrderByWithRelationInput[]
    cursor?: SprintItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SprintItemScalarFieldEnum | SprintItemScalarFieldEnum[]
  }

  /**
   * Sprint.velocityData
   */
  export type Sprint$velocityDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    where?: SprintVelocityWhereInput
  }

  /**
   * Sprint.burndowns
   */
  export type Sprint$burndownsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    where?: BurndownSnapshotWhereInput
    orderBy?: BurndownSnapshotOrderByWithRelationInput | BurndownSnapshotOrderByWithRelationInput[]
    cursor?: BurndownSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BurndownSnapshotScalarFieldEnum | BurndownSnapshotScalarFieldEnum[]
  }

  /**
   * Sprint without action
   */
  export type SprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
  }


  /**
   * Model SprintItem
   */

  export type AggregateSprintItem = {
    _count: SprintItemCountAggregateOutputType | null
    _avg: SprintItemAvgAggregateOutputType | null
    _sum: SprintItemSumAggregateOutputType | null
    _min: SprintItemMinAggregateOutputType | null
    _max: SprintItemMaxAggregateOutputType | null
  }

  export type SprintItemAvgAggregateOutputType = {
    storyPoints: number | null
  }

  export type SprintItemSumAggregateOutputType = {
    storyPoints: number | null
  }

  export type SprintItemMinAggregateOutputType = {
    id: string | null
    sprintId: string | null
    taskId: string | null
    storyPoints: number | null
    addedBy: string | null
    addedAt: Date | null
    removedAt: Date | null
    completedAt: Date | null
  }

  export type SprintItemMaxAggregateOutputType = {
    id: string | null
    sprintId: string | null
    taskId: string | null
    storyPoints: number | null
    addedBy: string | null
    addedAt: Date | null
    removedAt: Date | null
    completedAt: Date | null
  }

  export type SprintItemCountAggregateOutputType = {
    id: number
    sprintId: number
    taskId: number
    storyPoints: number
    addedBy: number
    addedAt: number
    removedAt: number
    completedAt: number
    _all: number
  }


  export type SprintItemAvgAggregateInputType = {
    storyPoints?: true
  }

  export type SprintItemSumAggregateInputType = {
    storyPoints?: true
  }

  export type SprintItemMinAggregateInputType = {
    id?: true
    sprintId?: true
    taskId?: true
    storyPoints?: true
    addedBy?: true
    addedAt?: true
    removedAt?: true
    completedAt?: true
  }

  export type SprintItemMaxAggregateInputType = {
    id?: true
    sprintId?: true
    taskId?: true
    storyPoints?: true
    addedBy?: true
    addedAt?: true
    removedAt?: true
    completedAt?: true
  }

  export type SprintItemCountAggregateInputType = {
    id?: true
    sprintId?: true
    taskId?: true
    storyPoints?: true
    addedBy?: true
    addedAt?: true
    removedAt?: true
    completedAt?: true
    _all?: true
  }

  export type SprintItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SprintItem to aggregate.
     */
    where?: SprintItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintItems to fetch.
     */
    orderBy?: SprintItemOrderByWithRelationInput | SprintItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SprintItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SprintItems
    **/
    _count?: true | SprintItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SprintItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SprintItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SprintItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SprintItemMaxAggregateInputType
  }

  export type GetSprintItemAggregateType<T extends SprintItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSprintItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprintItem[P]>
      : GetScalarType<T[P], AggregateSprintItem[P]>
  }




  export type SprintItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintItemWhereInput
    orderBy?: SprintItemOrderByWithAggregationInput | SprintItemOrderByWithAggregationInput[]
    by: SprintItemScalarFieldEnum[] | SprintItemScalarFieldEnum
    having?: SprintItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SprintItemCountAggregateInputType | true
    _avg?: SprintItemAvgAggregateInputType
    _sum?: SprintItemSumAggregateInputType
    _min?: SprintItemMinAggregateInputType
    _max?: SprintItemMaxAggregateInputType
  }

  export type SprintItemGroupByOutputType = {
    id: string
    sprintId: string
    taskId: string
    storyPoints: number | null
    addedBy: string
    addedAt: Date
    removedAt: Date | null
    completedAt: Date | null
    _count: SprintItemCountAggregateOutputType | null
    _avg: SprintItemAvgAggregateOutputType | null
    _sum: SprintItemSumAggregateOutputType | null
    _min: SprintItemMinAggregateOutputType | null
    _max: SprintItemMaxAggregateOutputType | null
  }

  type GetSprintItemGroupByPayload<T extends SprintItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SprintItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SprintItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SprintItemGroupByOutputType[P]>
            : GetScalarType<T[P], SprintItemGroupByOutputType[P]>
        }
      >
    >


  export type SprintItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    taskId?: boolean
    storyPoints?: boolean
    addedBy?: boolean
    addedAt?: boolean
    removedAt?: boolean
    completedAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprintItem"]>

  export type SprintItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    taskId?: boolean
    storyPoints?: boolean
    addedBy?: boolean
    addedAt?: boolean
    removedAt?: boolean
    completedAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprintItem"]>

  export type SprintItemSelectScalar = {
    id?: boolean
    sprintId?: boolean
    taskId?: boolean
    storyPoints?: boolean
    addedBy?: boolean
    addedAt?: boolean
    removedAt?: boolean
    completedAt?: boolean
  }

  export type SprintItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }
  export type SprintItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }

  export type $SprintItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SprintItem"
    objects: {
      sprint: Prisma.$SprintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sprintId: string
      taskId: string
      storyPoints: number | null
      addedBy: string
      addedAt: Date
      removedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["sprintItem"]>
    composites: {}
  }

  type SprintItemGetPayload<S extends boolean | null | undefined | SprintItemDefaultArgs> = $Result.GetResult<Prisma.$SprintItemPayload, S>

  type SprintItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SprintItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SprintItemCountAggregateInputType | true
    }

  export interface SprintItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SprintItem'], meta: { name: 'SprintItem' } }
    /**
     * Find zero or one SprintItem that matches the filter.
     * @param {SprintItemFindUniqueArgs} args - Arguments to find a SprintItem
     * @example
     * // Get one SprintItem
     * const sprintItem = await prisma.sprintItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SprintItemFindUniqueArgs>(args: SelectSubset<T, SprintItemFindUniqueArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SprintItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SprintItemFindUniqueOrThrowArgs} args - Arguments to find a SprintItem
     * @example
     * // Get one SprintItem
     * const sprintItem = await prisma.sprintItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SprintItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SprintItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SprintItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemFindFirstArgs} args - Arguments to find a SprintItem
     * @example
     * // Get one SprintItem
     * const sprintItem = await prisma.sprintItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SprintItemFindFirstArgs>(args?: SelectSubset<T, SprintItemFindFirstArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SprintItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemFindFirstOrThrowArgs} args - Arguments to find a SprintItem
     * @example
     * // Get one SprintItem
     * const sprintItem = await prisma.sprintItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SprintItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SprintItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SprintItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SprintItems
     * const sprintItems = await prisma.sprintItem.findMany()
     * 
     * // Get first 10 SprintItems
     * const sprintItems = await prisma.sprintItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sprintItemWithIdOnly = await prisma.sprintItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SprintItemFindManyArgs>(args?: SelectSubset<T, SprintItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SprintItem.
     * @param {SprintItemCreateArgs} args - Arguments to create a SprintItem.
     * @example
     * // Create one SprintItem
     * const SprintItem = await prisma.sprintItem.create({
     *   data: {
     *     // ... data to create a SprintItem
     *   }
     * })
     * 
     */
    create<T extends SprintItemCreateArgs>(args: SelectSubset<T, SprintItemCreateArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SprintItems.
     * @param {SprintItemCreateManyArgs} args - Arguments to create many SprintItems.
     * @example
     * // Create many SprintItems
     * const sprintItem = await prisma.sprintItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SprintItemCreateManyArgs>(args?: SelectSubset<T, SprintItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SprintItems and returns the data saved in the database.
     * @param {SprintItemCreateManyAndReturnArgs} args - Arguments to create many SprintItems.
     * @example
     * // Create many SprintItems
     * const sprintItem = await prisma.sprintItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SprintItems and only return the `id`
     * const sprintItemWithIdOnly = await prisma.sprintItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SprintItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SprintItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SprintItem.
     * @param {SprintItemDeleteArgs} args - Arguments to delete one SprintItem.
     * @example
     * // Delete one SprintItem
     * const SprintItem = await prisma.sprintItem.delete({
     *   where: {
     *     // ... filter to delete one SprintItem
     *   }
     * })
     * 
     */
    delete<T extends SprintItemDeleteArgs>(args: SelectSubset<T, SprintItemDeleteArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SprintItem.
     * @param {SprintItemUpdateArgs} args - Arguments to update one SprintItem.
     * @example
     * // Update one SprintItem
     * const sprintItem = await prisma.sprintItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SprintItemUpdateArgs>(args: SelectSubset<T, SprintItemUpdateArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SprintItems.
     * @param {SprintItemDeleteManyArgs} args - Arguments to filter SprintItems to delete.
     * @example
     * // Delete a few SprintItems
     * const { count } = await prisma.sprintItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SprintItemDeleteManyArgs>(args?: SelectSubset<T, SprintItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SprintItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SprintItems
     * const sprintItem = await prisma.sprintItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SprintItemUpdateManyArgs>(args: SelectSubset<T, SprintItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SprintItem.
     * @param {SprintItemUpsertArgs} args - Arguments to update or create a SprintItem.
     * @example
     * // Update or create a SprintItem
     * const sprintItem = await prisma.sprintItem.upsert({
     *   create: {
     *     // ... data to create a SprintItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SprintItem we want to update
     *   }
     * })
     */
    upsert<T extends SprintItemUpsertArgs>(args: SelectSubset<T, SprintItemUpsertArgs<ExtArgs>>): Prisma__SprintItemClient<$Result.GetResult<Prisma.$SprintItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SprintItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemCountArgs} args - Arguments to filter SprintItems to count.
     * @example
     * // Count the number of SprintItems
     * const count = await prisma.sprintItem.count({
     *   where: {
     *     // ... the filter for the SprintItems we want to count
     *   }
     * })
    **/
    count<T extends SprintItemCountArgs>(
      args?: Subset<T, SprintItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SprintItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SprintItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SprintItemAggregateArgs>(args: Subset<T, SprintItemAggregateArgs>): Prisma.PrismaPromise<GetSprintItemAggregateType<T>>

    /**
     * Group by SprintItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintItemGroupByArgs} args - Group by arguments.
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
      T extends SprintItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SprintItemGroupByArgs['orderBy'] }
        : { orderBy?: SprintItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SprintItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSprintItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SprintItem model
   */
  readonly fields: SprintItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SprintItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SprintItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprint<T extends SprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SprintDefaultArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SprintItem model
   */ 
  interface SprintItemFieldRefs {
    readonly id: FieldRef<"SprintItem", 'String'>
    readonly sprintId: FieldRef<"SprintItem", 'String'>
    readonly taskId: FieldRef<"SprintItem", 'String'>
    readonly storyPoints: FieldRef<"SprintItem", 'Int'>
    readonly addedBy: FieldRef<"SprintItem", 'String'>
    readonly addedAt: FieldRef<"SprintItem", 'DateTime'>
    readonly removedAt: FieldRef<"SprintItem", 'DateTime'>
    readonly completedAt: FieldRef<"SprintItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SprintItem findUnique
   */
  export type SprintItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * Filter, which SprintItem to fetch.
     */
    where: SprintItemWhereUniqueInput
  }

  /**
   * SprintItem findUniqueOrThrow
   */
  export type SprintItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * Filter, which SprintItem to fetch.
     */
    where: SprintItemWhereUniqueInput
  }

  /**
   * SprintItem findFirst
   */
  export type SprintItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * Filter, which SprintItem to fetch.
     */
    where?: SprintItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintItems to fetch.
     */
    orderBy?: SprintItemOrderByWithRelationInput | SprintItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SprintItems.
     */
    cursor?: SprintItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SprintItems.
     */
    distinct?: SprintItemScalarFieldEnum | SprintItemScalarFieldEnum[]
  }

  /**
   * SprintItem findFirstOrThrow
   */
  export type SprintItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * Filter, which SprintItem to fetch.
     */
    where?: SprintItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintItems to fetch.
     */
    orderBy?: SprintItemOrderByWithRelationInput | SprintItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SprintItems.
     */
    cursor?: SprintItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SprintItems.
     */
    distinct?: SprintItemScalarFieldEnum | SprintItemScalarFieldEnum[]
  }

  /**
   * SprintItem findMany
   */
  export type SprintItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * Filter, which SprintItems to fetch.
     */
    where?: SprintItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintItems to fetch.
     */
    orderBy?: SprintItemOrderByWithRelationInput | SprintItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SprintItems.
     */
    cursor?: SprintItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintItems.
     */
    skip?: number
    distinct?: SprintItemScalarFieldEnum | SprintItemScalarFieldEnum[]
  }

  /**
   * SprintItem create
   */
  export type SprintItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SprintItem.
     */
    data: XOR<SprintItemCreateInput, SprintItemUncheckedCreateInput>
  }

  /**
   * SprintItem createMany
   */
  export type SprintItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SprintItems.
     */
    data: SprintItemCreateManyInput | SprintItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SprintItem createManyAndReturn
   */
  export type SprintItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SprintItems.
     */
    data: SprintItemCreateManyInput | SprintItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SprintItem update
   */
  export type SprintItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SprintItem.
     */
    data: XOR<SprintItemUpdateInput, SprintItemUncheckedUpdateInput>
    /**
     * Choose, which SprintItem to update.
     */
    where: SprintItemWhereUniqueInput
  }

  /**
   * SprintItem updateMany
   */
  export type SprintItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SprintItems.
     */
    data: XOR<SprintItemUpdateManyMutationInput, SprintItemUncheckedUpdateManyInput>
    /**
     * Filter which SprintItems to update
     */
    where?: SprintItemWhereInput
  }

  /**
   * SprintItem upsert
   */
  export type SprintItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SprintItem to update in case it exists.
     */
    where: SprintItemWhereUniqueInput
    /**
     * In case the SprintItem found by the `where` argument doesn't exist, create a new SprintItem with this data.
     */
    create: XOR<SprintItemCreateInput, SprintItemUncheckedCreateInput>
    /**
     * In case the SprintItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SprintItemUpdateInput, SprintItemUncheckedUpdateInput>
  }

  /**
   * SprintItem delete
   */
  export type SprintItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
    /**
     * Filter which SprintItem to delete.
     */
    where: SprintItemWhereUniqueInput
  }

  /**
   * SprintItem deleteMany
   */
  export type SprintItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SprintItems to delete
     */
    where?: SprintItemWhereInput
  }

  /**
   * SprintItem without action
   */
  export type SprintItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintItem
     */
    select?: SprintItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintItemInclude<ExtArgs> | null
  }


  /**
   * Model SprintVelocity
   */

  export type AggregateSprintVelocity = {
    _count: SprintVelocityCountAggregateOutputType | null
    _avg: SprintVelocityAvgAggregateOutputType | null
    _sum: SprintVelocitySumAggregateOutputType | null
    _min: SprintVelocityMinAggregateOutputType | null
    _max: SprintVelocityMaxAggregateOutputType | null
  }

  export type SprintVelocityAvgAggregateOutputType = {
    plannedPoints: number | null
    completedPoints: number | null
    addedPoints: number | null
    removedPoints: number | null
    carryOverPoints: number | null
    completionRate: number | null
  }

  export type SprintVelocitySumAggregateOutputType = {
    plannedPoints: number | null
    completedPoints: number | null
    addedPoints: number | null
    removedPoints: number | null
    carryOverPoints: number | null
    completionRate: number | null
  }

  export type SprintVelocityMinAggregateOutputType = {
    id: string | null
    sprintId: string | null
    plannedPoints: number | null
    completedPoints: number | null
    addedPoints: number | null
    removedPoints: number | null
    carryOverPoints: number | null
    completionRate: number | null
    calculatedAt: Date | null
  }

  export type SprintVelocityMaxAggregateOutputType = {
    id: string | null
    sprintId: string | null
    plannedPoints: number | null
    completedPoints: number | null
    addedPoints: number | null
    removedPoints: number | null
    carryOverPoints: number | null
    completionRate: number | null
    calculatedAt: Date | null
  }

  export type SprintVelocityCountAggregateOutputType = {
    id: number
    sprintId: number
    plannedPoints: number
    completedPoints: number
    addedPoints: number
    removedPoints: number
    carryOverPoints: number
    completionRate: number
    calculatedAt: number
    _all: number
  }


  export type SprintVelocityAvgAggregateInputType = {
    plannedPoints?: true
    completedPoints?: true
    addedPoints?: true
    removedPoints?: true
    carryOverPoints?: true
    completionRate?: true
  }

  export type SprintVelocitySumAggregateInputType = {
    plannedPoints?: true
    completedPoints?: true
    addedPoints?: true
    removedPoints?: true
    carryOverPoints?: true
    completionRate?: true
  }

  export type SprintVelocityMinAggregateInputType = {
    id?: true
    sprintId?: true
    plannedPoints?: true
    completedPoints?: true
    addedPoints?: true
    removedPoints?: true
    carryOverPoints?: true
    completionRate?: true
    calculatedAt?: true
  }

  export type SprintVelocityMaxAggregateInputType = {
    id?: true
    sprintId?: true
    plannedPoints?: true
    completedPoints?: true
    addedPoints?: true
    removedPoints?: true
    carryOverPoints?: true
    completionRate?: true
    calculatedAt?: true
  }

  export type SprintVelocityCountAggregateInputType = {
    id?: true
    sprintId?: true
    plannedPoints?: true
    completedPoints?: true
    addedPoints?: true
    removedPoints?: true
    carryOverPoints?: true
    completionRate?: true
    calculatedAt?: true
    _all?: true
  }

  export type SprintVelocityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SprintVelocity to aggregate.
     */
    where?: SprintVelocityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintVelocities to fetch.
     */
    orderBy?: SprintVelocityOrderByWithRelationInput | SprintVelocityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SprintVelocityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintVelocities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintVelocities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SprintVelocities
    **/
    _count?: true | SprintVelocityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SprintVelocityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SprintVelocitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SprintVelocityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SprintVelocityMaxAggregateInputType
  }

  export type GetSprintVelocityAggregateType<T extends SprintVelocityAggregateArgs> = {
        [P in keyof T & keyof AggregateSprintVelocity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprintVelocity[P]>
      : GetScalarType<T[P], AggregateSprintVelocity[P]>
  }




  export type SprintVelocityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintVelocityWhereInput
    orderBy?: SprintVelocityOrderByWithAggregationInput | SprintVelocityOrderByWithAggregationInput[]
    by: SprintVelocityScalarFieldEnum[] | SprintVelocityScalarFieldEnum
    having?: SprintVelocityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SprintVelocityCountAggregateInputType | true
    _avg?: SprintVelocityAvgAggregateInputType
    _sum?: SprintVelocitySumAggregateInputType
    _min?: SprintVelocityMinAggregateInputType
    _max?: SprintVelocityMaxAggregateInputType
  }

  export type SprintVelocityGroupByOutputType = {
    id: string
    sprintId: string
    plannedPoints: number
    completedPoints: number
    addedPoints: number
    removedPoints: number
    carryOverPoints: number
    completionRate: number
    calculatedAt: Date
    _count: SprintVelocityCountAggregateOutputType | null
    _avg: SprintVelocityAvgAggregateOutputType | null
    _sum: SprintVelocitySumAggregateOutputType | null
    _min: SprintVelocityMinAggregateOutputType | null
    _max: SprintVelocityMaxAggregateOutputType | null
  }

  type GetSprintVelocityGroupByPayload<T extends SprintVelocityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SprintVelocityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SprintVelocityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SprintVelocityGroupByOutputType[P]>
            : GetScalarType<T[P], SprintVelocityGroupByOutputType[P]>
        }
      >
    >


  export type SprintVelocitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    plannedPoints?: boolean
    completedPoints?: boolean
    addedPoints?: boolean
    removedPoints?: boolean
    carryOverPoints?: boolean
    completionRate?: boolean
    calculatedAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprintVelocity"]>

  export type SprintVelocitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    plannedPoints?: boolean
    completedPoints?: boolean
    addedPoints?: boolean
    removedPoints?: boolean
    carryOverPoints?: boolean
    completionRate?: boolean
    calculatedAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprintVelocity"]>

  export type SprintVelocitySelectScalar = {
    id?: boolean
    sprintId?: boolean
    plannedPoints?: boolean
    completedPoints?: boolean
    addedPoints?: boolean
    removedPoints?: boolean
    carryOverPoints?: boolean
    completionRate?: boolean
    calculatedAt?: boolean
  }

  export type SprintVelocityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }
  export type SprintVelocityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }

  export type $SprintVelocityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SprintVelocity"
    objects: {
      sprint: Prisma.$SprintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sprintId: string
      plannedPoints: number
      completedPoints: number
      addedPoints: number
      removedPoints: number
      carryOverPoints: number
      completionRate: number
      calculatedAt: Date
    }, ExtArgs["result"]["sprintVelocity"]>
    composites: {}
  }

  type SprintVelocityGetPayload<S extends boolean | null | undefined | SprintVelocityDefaultArgs> = $Result.GetResult<Prisma.$SprintVelocityPayload, S>

  type SprintVelocityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SprintVelocityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SprintVelocityCountAggregateInputType | true
    }

  export interface SprintVelocityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SprintVelocity'], meta: { name: 'SprintVelocity' } }
    /**
     * Find zero or one SprintVelocity that matches the filter.
     * @param {SprintVelocityFindUniqueArgs} args - Arguments to find a SprintVelocity
     * @example
     * // Get one SprintVelocity
     * const sprintVelocity = await prisma.sprintVelocity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SprintVelocityFindUniqueArgs>(args: SelectSubset<T, SprintVelocityFindUniqueArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SprintVelocity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SprintVelocityFindUniqueOrThrowArgs} args - Arguments to find a SprintVelocity
     * @example
     * // Get one SprintVelocity
     * const sprintVelocity = await prisma.sprintVelocity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SprintVelocityFindUniqueOrThrowArgs>(args: SelectSubset<T, SprintVelocityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SprintVelocity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityFindFirstArgs} args - Arguments to find a SprintVelocity
     * @example
     * // Get one SprintVelocity
     * const sprintVelocity = await prisma.sprintVelocity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SprintVelocityFindFirstArgs>(args?: SelectSubset<T, SprintVelocityFindFirstArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SprintVelocity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityFindFirstOrThrowArgs} args - Arguments to find a SprintVelocity
     * @example
     * // Get one SprintVelocity
     * const sprintVelocity = await prisma.sprintVelocity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SprintVelocityFindFirstOrThrowArgs>(args?: SelectSubset<T, SprintVelocityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SprintVelocities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SprintVelocities
     * const sprintVelocities = await prisma.sprintVelocity.findMany()
     * 
     * // Get first 10 SprintVelocities
     * const sprintVelocities = await prisma.sprintVelocity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sprintVelocityWithIdOnly = await prisma.sprintVelocity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SprintVelocityFindManyArgs>(args?: SelectSubset<T, SprintVelocityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SprintVelocity.
     * @param {SprintVelocityCreateArgs} args - Arguments to create a SprintVelocity.
     * @example
     * // Create one SprintVelocity
     * const SprintVelocity = await prisma.sprintVelocity.create({
     *   data: {
     *     // ... data to create a SprintVelocity
     *   }
     * })
     * 
     */
    create<T extends SprintVelocityCreateArgs>(args: SelectSubset<T, SprintVelocityCreateArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SprintVelocities.
     * @param {SprintVelocityCreateManyArgs} args - Arguments to create many SprintVelocities.
     * @example
     * // Create many SprintVelocities
     * const sprintVelocity = await prisma.sprintVelocity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SprintVelocityCreateManyArgs>(args?: SelectSubset<T, SprintVelocityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SprintVelocities and returns the data saved in the database.
     * @param {SprintVelocityCreateManyAndReturnArgs} args - Arguments to create many SprintVelocities.
     * @example
     * // Create many SprintVelocities
     * const sprintVelocity = await prisma.sprintVelocity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SprintVelocities and only return the `id`
     * const sprintVelocityWithIdOnly = await prisma.sprintVelocity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SprintVelocityCreateManyAndReturnArgs>(args?: SelectSubset<T, SprintVelocityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SprintVelocity.
     * @param {SprintVelocityDeleteArgs} args - Arguments to delete one SprintVelocity.
     * @example
     * // Delete one SprintVelocity
     * const SprintVelocity = await prisma.sprintVelocity.delete({
     *   where: {
     *     // ... filter to delete one SprintVelocity
     *   }
     * })
     * 
     */
    delete<T extends SprintVelocityDeleteArgs>(args: SelectSubset<T, SprintVelocityDeleteArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SprintVelocity.
     * @param {SprintVelocityUpdateArgs} args - Arguments to update one SprintVelocity.
     * @example
     * // Update one SprintVelocity
     * const sprintVelocity = await prisma.sprintVelocity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SprintVelocityUpdateArgs>(args: SelectSubset<T, SprintVelocityUpdateArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SprintVelocities.
     * @param {SprintVelocityDeleteManyArgs} args - Arguments to filter SprintVelocities to delete.
     * @example
     * // Delete a few SprintVelocities
     * const { count } = await prisma.sprintVelocity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SprintVelocityDeleteManyArgs>(args?: SelectSubset<T, SprintVelocityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SprintVelocities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SprintVelocities
     * const sprintVelocity = await prisma.sprintVelocity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SprintVelocityUpdateManyArgs>(args: SelectSubset<T, SprintVelocityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SprintVelocity.
     * @param {SprintVelocityUpsertArgs} args - Arguments to update or create a SprintVelocity.
     * @example
     * // Update or create a SprintVelocity
     * const sprintVelocity = await prisma.sprintVelocity.upsert({
     *   create: {
     *     // ... data to create a SprintVelocity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SprintVelocity we want to update
     *   }
     * })
     */
    upsert<T extends SprintVelocityUpsertArgs>(args: SelectSubset<T, SprintVelocityUpsertArgs<ExtArgs>>): Prisma__SprintVelocityClient<$Result.GetResult<Prisma.$SprintVelocityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SprintVelocities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityCountArgs} args - Arguments to filter SprintVelocities to count.
     * @example
     * // Count the number of SprintVelocities
     * const count = await prisma.sprintVelocity.count({
     *   where: {
     *     // ... the filter for the SprintVelocities we want to count
     *   }
     * })
    **/
    count<T extends SprintVelocityCountArgs>(
      args?: Subset<T, SprintVelocityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SprintVelocityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SprintVelocity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SprintVelocityAggregateArgs>(args: Subset<T, SprintVelocityAggregateArgs>): Prisma.PrismaPromise<GetSprintVelocityAggregateType<T>>

    /**
     * Group by SprintVelocity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintVelocityGroupByArgs} args - Group by arguments.
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
      T extends SprintVelocityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SprintVelocityGroupByArgs['orderBy'] }
        : { orderBy?: SprintVelocityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SprintVelocityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSprintVelocityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SprintVelocity model
   */
  readonly fields: SprintVelocityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SprintVelocity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SprintVelocityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprint<T extends SprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SprintDefaultArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SprintVelocity model
   */ 
  interface SprintVelocityFieldRefs {
    readonly id: FieldRef<"SprintVelocity", 'String'>
    readonly sprintId: FieldRef<"SprintVelocity", 'String'>
    readonly plannedPoints: FieldRef<"SprintVelocity", 'Int'>
    readonly completedPoints: FieldRef<"SprintVelocity", 'Int'>
    readonly addedPoints: FieldRef<"SprintVelocity", 'Int'>
    readonly removedPoints: FieldRef<"SprintVelocity", 'Int'>
    readonly carryOverPoints: FieldRef<"SprintVelocity", 'Int'>
    readonly completionRate: FieldRef<"SprintVelocity", 'Float'>
    readonly calculatedAt: FieldRef<"SprintVelocity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SprintVelocity findUnique
   */
  export type SprintVelocityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * Filter, which SprintVelocity to fetch.
     */
    where: SprintVelocityWhereUniqueInput
  }

  /**
   * SprintVelocity findUniqueOrThrow
   */
  export type SprintVelocityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * Filter, which SprintVelocity to fetch.
     */
    where: SprintVelocityWhereUniqueInput
  }

  /**
   * SprintVelocity findFirst
   */
  export type SprintVelocityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * Filter, which SprintVelocity to fetch.
     */
    where?: SprintVelocityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintVelocities to fetch.
     */
    orderBy?: SprintVelocityOrderByWithRelationInput | SprintVelocityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SprintVelocities.
     */
    cursor?: SprintVelocityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintVelocities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintVelocities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SprintVelocities.
     */
    distinct?: SprintVelocityScalarFieldEnum | SprintVelocityScalarFieldEnum[]
  }

  /**
   * SprintVelocity findFirstOrThrow
   */
  export type SprintVelocityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * Filter, which SprintVelocity to fetch.
     */
    where?: SprintVelocityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintVelocities to fetch.
     */
    orderBy?: SprintVelocityOrderByWithRelationInput | SprintVelocityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SprintVelocities.
     */
    cursor?: SprintVelocityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintVelocities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintVelocities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SprintVelocities.
     */
    distinct?: SprintVelocityScalarFieldEnum | SprintVelocityScalarFieldEnum[]
  }

  /**
   * SprintVelocity findMany
   */
  export type SprintVelocityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * Filter, which SprintVelocities to fetch.
     */
    where?: SprintVelocityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SprintVelocities to fetch.
     */
    orderBy?: SprintVelocityOrderByWithRelationInput | SprintVelocityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SprintVelocities.
     */
    cursor?: SprintVelocityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SprintVelocities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SprintVelocities.
     */
    skip?: number
    distinct?: SprintVelocityScalarFieldEnum | SprintVelocityScalarFieldEnum[]
  }

  /**
   * SprintVelocity create
   */
  export type SprintVelocityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * The data needed to create a SprintVelocity.
     */
    data: XOR<SprintVelocityCreateInput, SprintVelocityUncheckedCreateInput>
  }

  /**
   * SprintVelocity createMany
   */
  export type SprintVelocityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SprintVelocities.
     */
    data: SprintVelocityCreateManyInput | SprintVelocityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SprintVelocity createManyAndReturn
   */
  export type SprintVelocityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SprintVelocities.
     */
    data: SprintVelocityCreateManyInput | SprintVelocityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SprintVelocity update
   */
  export type SprintVelocityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * The data needed to update a SprintVelocity.
     */
    data: XOR<SprintVelocityUpdateInput, SprintVelocityUncheckedUpdateInput>
    /**
     * Choose, which SprintVelocity to update.
     */
    where: SprintVelocityWhereUniqueInput
  }

  /**
   * SprintVelocity updateMany
   */
  export type SprintVelocityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SprintVelocities.
     */
    data: XOR<SprintVelocityUpdateManyMutationInput, SprintVelocityUncheckedUpdateManyInput>
    /**
     * Filter which SprintVelocities to update
     */
    where?: SprintVelocityWhereInput
  }

  /**
   * SprintVelocity upsert
   */
  export type SprintVelocityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * The filter to search for the SprintVelocity to update in case it exists.
     */
    where: SprintVelocityWhereUniqueInput
    /**
     * In case the SprintVelocity found by the `where` argument doesn't exist, create a new SprintVelocity with this data.
     */
    create: XOR<SprintVelocityCreateInput, SprintVelocityUncheckedCreateInput>
    /**
     * In case the SprintVelocity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SprintVelocityUpdateInput, SprintVelocityUncheckedUpdateInput>
  }

  /**
   * SprintVelocity delete
   */
  export type SprintVelocityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
    /**
     * Filter which SprintVelocity to delete.
     */
    where: SprintVelocityWhereUniqueInput
  }

  /**
   * SprintVelocity deleteMany
   */
  export type SprintVelocityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SprintVelocities to delete
     */
    where?: SprintVelocityWhereInput
  }

  /**
   * SprintVelocity without action
   */
  export type SprintVelocityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintVelocity
     */
    select?: SprintVelocitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintVelocityInclude<ExtArgs> | null
  }


  /**
   * Model BurndownSnapshot
   */

  export type AggregateBurndownSnapshot = {
    _count: BurndownSnapshotCountAggregateOutputType | null
    _avg: BurndownSnapshotAvgAggregateOutputType | null
    _sum: BurndownSnapshotSumAggregateOutputType | null
    _min: BurndownSnapshotMinAggregateOutputType | null
    _max: BurndownSnapshotMaxAggregateOutputType | null
  }

  export type BurndownSnapshotAvgAggregateOutputType = {
    remainingPoints: number | null
    completedPoints: number | null
    idealPoints: number | null
  }

  export type BurndownSnapshotSumAggregateOutputType = {
    remainingPoints: number | null
    completedPoints: number | null
    idealPoints: number | null
  }

  export type BurndownSnapshotMinAggregateOutputType = {
    id: string | null
    sprintId: string | null
    date: Date | null
    remainingPoints: number | null
    completedPoints: number | null
    idealPoints: number | null
    createdAt: Date | null
  }

  export type BurndownSnapshotMaxAggregateOutputType = {
    id: string | null
    sprintId: string | null
    date: Date | null
    remainingPoints: number | null
    completedPoints: number | null
    idealPoints: number | null
    createdAt: Date | null
  }

  export type BurndownSnapshotCountAggregateOutputType = {
    id: number
    sprintId: number
    date: number
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt: number
    _all: number
  }


  export type BurndownSnapshotAvgAggregateInputType = {
    remainingPoints?: true
    completedPoints?: true
    idealPoints?: true
  }

  export type BurndownSnapshotSumAggregateInputType = {
    remainingPoints?: true
    completedPoints?: true
    idealPoints?: true
  }

  export type BurndownSnapshotMinAggregateInputType = {
    id?: true
    sprintId?: true
    date?: true
    remainingPoints?: true
    completedPoints?: true
    idealPoints?: true
    createdAt?: true
  }

  export type BurndownSnapshotMaxAggregateInputType = {
    id?: true
    sprintId?: true
    date?: true
    remainingPoints?: true
    completedPoints?: true
    idealPoints?: true
    createdAt?: true
  }

  export type BurndownSnapshotCountAggregateInputType = {
    id?: true
    sprintId?: true
    date?: true
    remainingPoints?: true
    completedPoints?: true
    idealPoints?: true
    createdAt?: true
    _all?: true
  }

  export type BurndownSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BurndownSnapshot to aggregate.
     */
    where?: BurndownSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurndownSnapshots to fetch.
     */
    orderBy?: BurndownSnapshotOrderByWithRelationInput | BurndownSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BurndownSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurndownSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurndownSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BurndownSnapshots
    **/
    _count?: true | BurndownSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BurndownSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BurndownSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BurndownSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BurndownSnapshotMaxAggregateInputType
  }

  export type GetBurndownSnapshotAggregateType<T extends BurndownSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateBurndownSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBurndownSnapshot[P]>
      : GetScalarType<T[P], AggregateBurndownSnapshot[P]>
  }




  export type BurndownSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BurndownSnapshotWhereInput
    orderBy?: BurndownSnapshotOrderByWithAggregationInput | BurndownSnapshotOrderByWithAggregationInput[]
    by: BurndownSnapshotScalarFieldEnum[] | BurndownSnapshotScalarFieldEnum
    having?: BurndownSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BurndownSnapshotCountAggregateInputType | true
    _avg?: BurndownSnapshotAvgAggregateInputType
    _sum?: BurndownSnapshotSumAggregateInputType
    _min?: BurndownSnapshotMinAggregateInputType
    _max?: BurndownSnapshotMaxAggregateInputType
  }

  export type BurndownSnapshotGroupByOutputType = {
    id: string
    sprintId: string
    date: Date
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt: Date
    _count: BurndownSnapshotCountAggregateOutputType | null
    _avg: BurndownSnapshotAvgAggregateOutputType | null
    _sum: BurndownSnapshotSumAggregateOutputType | null
    _min: BurndownSnapshotMinAggregateOutputType | null
    _max: BurndownSnapshotMaxAggregateOutputType | null
  }

  type GetBurndownSnapshotGroupByPayload<T extends BurndownSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BurndownSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BurndownSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BurndownSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], BurndownSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type BurndownSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    date?: boolean
    remainingPoints?: boolean
    completedPoints?: boolean
    idealPoints?: boolean
    createdAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["burndownSnapshot"]>

  export type BurndownSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    date?: boolean
    remainingPoints?: boolean
    completedPoints?: boolean
    idealPoints?: boolean
    createdAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["burndownSnapshot"]>

  export type BurndownSnapshotSelectScalar = {
    id?: boolean
    sprintId?: boolean
    date?: boolean
    remainingPoints?: boolean
    completedPoints?: boolean
    idealPoints?: boolean
    createdAt?: boolean
  }

  export type BurndownSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }
  export type BurndownSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
  }

  export type $BurndownSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BurndownSnapshot"
    objects: {
      sprint: Prisma.$SprintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sprintId: string
      date: Date
      remainingPoints: number
      completedPoints: number
      idealPoints: number
      createdAt: Date
    }, ExtArgs["result"]["burndownSnapshot"]>
    composites: {}
  }

  type BurndownSnapshotGetPayload<S extends boolean | null | undefined | BurndownSnapshotDefaultArgs> = $Result.GetResult<Prisma.$BurndownSnapshotPayload, S>

  type BurndownSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BurndownSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BurndownSnapshotCountAggregateInputType | true
    }

  export interface BurndownSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BurndownSnapshot'], meta: { name: 'BurndownSnapshot' } }
    /**
     * Find zero or one BurndownSnapshot that matches the filter.
     * @param {BurndownSnapshotFindUniqueArgs} args - Arguments to find a BurndownSnapshot
     * @example
     * // Get one BurndownSnapshot
     * const burndownSnapshot = await prisma.burndownSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BurndownSnapshotFindUniqueArgs>(args: SelectSubset<T, BurndownSnapshotFindUniqueArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BurndownSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BurndownSnapshotFindUniqueOrThrowArgs} args - Arguments to find a BurndownSnapshot
     * @example
     * // Get one BurndownSnapshot
     * const burndownSnapshot = await prisma.burndownSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BurndownSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, BurndownSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BurndownSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotFindFirstArgs} args - Arguments to find a BurndownSnapshot
     * @example
     * // Get one BurndownSnapshot
     * const burndownSnapshot = await prisma.burndownSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BurndownSnapshotFindFirstArgs>(args?: SelectSubset<T, BurndownSnapshotFindFirstArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BurndownSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotFindFirstOrThrowArgs} args - Arguments to find a BurndownSnapshot
     * @example
     * // Get one BurndownSnapshot
     * const burndownSnapshot = await prisma.burndownSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BurndownSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, BurndownSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BurndownSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BurndownSnapshots
     * const burndownSnapshots = await prisma.burndownSnapshot.findMany()
     * 
     * // Get first 10 BurndownSnapshots
     * const burndownSnapshots = await prisma.burndownSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const burndownSnapshotWithIdOnly = await prisma.burndownSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BurndownSnapshotFindManyArgs>(args?: SelectSubset<T, BurndownSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BurndownSnapshot.
     * @param {BurndownSnapshotCreateArgs} args - Arguments to create a BurndownSnapshot.
     * @example
     * // Create one BurndownSnapshot
     * const BurndownSnapshot = await prisma.burndownSnapshot.create({
     *   data: {
     *     // ... data to create a BurndownSnapshot
     *   }
     * })
     * 
     */
    create<T extends BurndownSnapshotCreateArgs>(args: SelectSubset<T, BurndownSnapshotCreateArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BurndownSnapshots.
     * @param {BurndownSnapshotCreateManyArgs} args - Arguments to create many BurndownSnapshots.
     * @example
     * // Create many BurndownSnapshots
     * const burndownSnapshot = await prisma.burndownSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BurndownSnapshotCreateManyArgs>(args?: SelectSubset<T, BurndownSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BurndownSnapshots and returns the data saved in the database.
     * @param {BurndownSnapshotCreateManyAndReturnArgs} args - Arguments to create many BurndownSnapshots.
     * @example
     * // Create many BurndownSnapshots
     * const burndownSnapshot = await prisma.burndownSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BurndownSnapshots and only return the `id`
     * const burndownSnapshotWithIdOnly = await prisma.burndownSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BurndownSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, BurndownSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BurndownSnapshot.
     * @param {BurndownSnapshotDeleteArgs} args - Arguments to delete one BurndownSnapshot.
     * @example
     * // Delete one BurndownSnapshot
     * const BurndownSnapshot = await prisma.burndownSnapshot.delete({
     *   where: {
     *     // ... filter to delete one BurndownSnapshot
     *   }
     * })
     * 
     */
    delete<T extends BurndownSnapshotDeleteArgs>(args: SelectSubset<T, BurndownSnapshotDeleteArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BurndownSnapshot.
     * @param {BurndownSnapshotUpdateArgs} args - Arguments to update one BurndownSnapshot.
     * @example
     * // Update one BurndownSnapshot
     * const burndownSnapshot = await prisma.burndownSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BurndownSnapshotUpdateArgs>(args: SelectSubset<T, BurndownSnapshotUpdateArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BurndownSnapshots.
     * @param {BurndownSnapshotDeleteManyArgs} args - Arguments to filter BurndownSnapshots to delete.
     * @example
     * // Delete a few BurndownSnapshots
     * const { count } = await prisma.burndownSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BurndownSnapshotDeleteManyArgs>(args?: SelectSubset<T, BurndownSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BurndownSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BurndownSnapshots
     * const burndownSnapshot = await prisma.burndownSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BurndownSnapshotUpdateManyArgs>(args: SelectSubset<T, BurndownSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BurndownSnapshot.
     * @param {BurndownSnapshotUpsertArgs} args - Arguments to update or create a BurndownSnapshot.
     * @example
     * // Update or create a BurndownSnapshot
     * const burndownSnapshot = await prisma.burndownSnapshot.upsert({
     *   create: {
     *     // ... data to create a BurndownSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BurndownSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends BurndownSnapshotUpsertArgs>(args: SelectSubset<T, BurndownSnapshotUpsertArgs<ExtArgs>>): Prisma__BurndownSnapshotClient<$Result.GetResult<Prisma.$BurndownSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BurndownSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotCountArgs} args - Arguments to filter BurndownSnapshots to count.
     * @example
     * // Count the number of BurndownSnapshots
     * const count = await prisma.burndownSnapshot.count({
     *   where: {
     *     // ... the filter for the BurndownSnapshots we want to count
     *   }
     * })
    **/
    count<T extends BurndownSnapshotCountArgs>(
      args?: Subset<T, BurndownSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BurndownSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BurndownSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BurndownSnapshotAggregateArgs>(args: Subset<T, BurndownSnapshotAggregateArgs>): Prisma.PrismaPromise<GetBurndownSnapshotAggregateType<T>>

    /**
     * Group by BurndownSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurndownSnapshotGroupByArgs} args - Group by arguments.
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
      T extends BurndownSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BurndownSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: BurndownSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BurndownSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBurndownSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BurndownSnapshot model
   */
  readonly fields: BurndownSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BurndownSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BurndownSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprint<T extends SprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SprintDefaultArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BurndownSnapshot model
   */ 
  interface BurndownSnapshotFieldRefs {
    readonly id: FieldRef<"BurndownSnapshot", 'String'>
    readonly sprintId: FieldRef<"BurndownSnapshot", 'String'>
    readonly date: FieldRef<"BurndownSnapshot", 'DateTime'>
    readonly remainingPoints: FieldRef<"BurndownSnapshot", 'Int'>
    readonly completedPoints: FieldRef<"BurndownSnapshot", 'Int'>
    readonly idealPoints: FieldRef<"BurndownSnapshot", 'Int'>
    readonly createdAt: FieldRef<"BurndownSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BurndownSnapshot findUnique
   */
  export type BurndownSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BurndownSnapshot to fetch.
     */
    where: BurndownSnapshotWhereUniqueInput
  }

  /**
   * BurndownSnapshot findUniqueOrThrow
   */
  export type BurndownSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BurndownSnapshot to fetch.
     */
    where: BurndownSnapshotWhereUniqueInput
  }

  /**
   * BurndownSnapshot findFirst
   */
  export type BurndownSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BurndownSnapshot to fetch.
     */
    where?: BurndownSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurndownSnapshots to fetch.
     */
    orderBy?: BurndownSnapshotOrderByWithRelationInput | BurndownSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BurndownSnapshots.
     */
    cursor?: BurndownSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurndownSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurndownSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BurndownSnapshots.
     */
    distinct?: BurndownSnapshotScalarFieldEnum | BurndownSnapshotScalarFieldEnum[]
  }

  /**
   * BurndownSnapshot findFirstOrThrow
   */
  export type BurndownSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BurndownSnapshot to fetch.
     */
    where?: BurndownSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurndownSnapshots to fetch.
     */
    orderBy?: BurndownSnapshotOrderByWithRelationInput | BurndownSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BurndownSnapshots.
     */
    cursor?: BurndownSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurndownSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurndownSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BurndownSnapshots.
     */
    distinct?: BurndownSnapshotScalarFieldEnum | BurndownSnapshotScalarFieldEnum[]
  }

  /**
   * BurndownSnapshot findMany
   */
  export type BurndownSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BurndownSnapshots to fetch.
     */
    where?: BurndownSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BurndownSnapshots to fetch.
     */
    orderBy?: BurndownSnapshotOrderByWithRelationInput | BurndownSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BurndownSnapshots.
     */
    cursor?: BurndownSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BurndownSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BurndownSnapshots.
     */
    skip?: number
    distinct?: BurndownSnapshotScalarFieldEnum | BurndownSnapshotScalarFieldEnum[]
  }

  /**
   * BurndownSnapshot create
   */
  export type BurndownSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a BurndownSnapshot.
     */
    data: XOR<BurndownSnapshotCreateInput, BurndownSnapshotUncheckedCreateInput>
  }

  /**
   * BurndownSnapshot createMany
   */
  export type BurndownSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BurndownSnapshots.
     */
    data: BurndownSnapshotCreateManyInput | BurndownSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BurndownSnapshot createManyAndReturn
   */
  export type BurndownSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BurndownSnapshots.
     */
    data: BurndownSnapshotCreateManyInput | BurndownSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BurndownSnapshot update
   */
  export type BurndownSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a BurndownSnapshot.
     */
    data: XOR<BurndownSnapshotUpdateInput, BurndownSnapshotUncheckedUpdateInput>
    /**
     * Choose, which BurndownSnapshot to update.
     */
    where: BurndownSnapshotWhereUniqueInput
  }

  /**
   * BurndownSnapshot updateMany
   */
  export type BurndownSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BurndownSnapshots.
     */
    data: XOR<BurndownSnapshotUpdateManyMutationInput, BurndownSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which BurndownSnapshots to update
     */
    where?: BurndownSnapshotWhereInput
  }

  /**
   * BurndownSnapshot upsert
   */
  export type BurndownSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the BurndownSnapshot to update in case it exists.
     */
    where: BurndownSnapshotWhereUniqueInput
    /**
     * In case the BurndownSnapshot found by the `where` argument doesn't exist, create a new BurndownSnapshot with this data.
     */
    create: XOR<BurndownSnapshotCreateInput, BurndownSnapshotUncheckedCreateInput>
    /**
     * In case the BurndownSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BurndownSnapshotUpdateInput, BurndownSnapshotUncheckedUpdateInput>
  }

  /**
   * BurndownSnapshot delete
   */
  export type BurndownSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
    /**
     * Filter which BurndownSnapshot to delete.
     */
    where: BurndownSnapshotWhereUniqueInput
  }

  /**
   * BurndownSnapshot deleteMany
   */
  export type BurndownSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BurndownSnapshots to delete
     */
    where?: BurndownSnapshotWhereInput
  }

  /**
   * BurndownSnapshot without action
   */
  export type BurndownSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BurndownSnapshot
     */
    select?: BurndownSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BurndownSnapshotInclude<ExtArgs> | null
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


  export const SprintScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    goal: 'goal',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    capacity: 'capacity',
    velocityPoints: 'velocityPoints',
    notes: 'notes',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SprintScalarFieldEnum = (typeof SprintScalarFieldEnum)[keyof typeof SprintScalarFieldEnum]


  export const SprintItemScalarFieldEnum: {
    id: 'id',
    sprintId: 'sprintId',
    taskId: 'taskId',
    storyPoints: 'storyPoints',
    addedBy: 'addedBy',
    addedAt: 'addedAt',
    removedAt: 'removedAt',
    completedAt: 'completedAt'
  };

  export type SprintItemScalarFieldEnum = (typeof SprintItemScalarFieldEnum)[keyof typeof SprintItemScalarFieldEnum]


  export const SprintVelocityScalarFieldEnum: {
    id: 'id',
    sprintId: 'sprintId',
    plannedPoints: 'plannedPoints',
    completedPoints: 'completedPoints',
    addedPoints: 'addedPoints',
    removedPoints: 'removedPoints',
    carryOverPoints: 'carryOverPoints',
    completionRate: 'completionRate',
    calculatedAt: 'calculatedAt'
  };

  export type SprintVelocityScalarFieldEnum = (typeof SprintVelocityScalarFieldEnum)[keyof typeof SprintVelocityScalarFieldEnum]


  export const BurndownSnapshotScalarFieldEnum: {
    id: 'id',
    sprintId: 'sprintId',
    date: 'date',
    remainingPoints: 'remainingPoints',
    completedPoints: 'completedPoints',
    idealPoints: 'idealPoints',
    createdAt: 'createdAt'
  };

  export type BurndownSnapshotScalarFieldEnum = (typeof BurndownSnapshotScalarFieldEnum)[keyof typeof BurndownSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'SprintStatus'
   */
  export type EnumSprintStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SprintStatus'>
    


  /**
   * Reference to a field of type 'SprintStatus[]'
   */
  export type ListEnumSprintStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SprintStatus[]'>
    


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


  export type SprintWhereInput = {
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    id?: StringFilter<"Sprint"> | string
    projectId?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    goal?: StringNullableFilter<"Sprint"> | string | null
    status?: EnumSprintStatusFilter<"Sprint"> | $Enums.SprintStatus
    startDate?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    capacity?: IntNullableFilter<"Sprint"> | number | null
    velocityPoints?: IntNullableFilter<"Sprint"> | number | null
    notes?: StringNullableFilter<"Sprint"> | string | null
    createdBy?: StringFilter<"Sprint"> | string
    updatedBy?: StringFilter<"Sprint"> | string
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    items?: SprintItemListRelationFilter
    velocityData?: XOR<SprintVelocityNullableRelationFilter, SprintVelocityWhereInput> | null
    burndowns?: BurndownSnapshotListRelationFilter
  }

  export type SprintOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    goal?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    velocityPoints?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: SprintItemOrderByRelationAggregateInput
    velocityData?: SprintVelocityOrderByWithRelationInput
    burndowns?: BurndownSnapshotOrderByRelationAggregateInput
  }

  export type SprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    projectId?: StringFilter<"Sprint"> | string
    name?: StringFilter<"Sprint"> | string
    goal?: StringNullableFilter<"Sprint"> | string | null
    status?: EnumSprintStatusFilter<"Sprint"> | $Enums.SprintStatus
    startDate?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Sprint"> | Date | string | null
    capacity?: IntNullableFilter<"Sprint"> | number | null
    velocityPoints?: IntNullableFilter<"Sprint"> | number | null
    notes?: StringNullableFilter<"Sprint"> | string | null
    createdBy?: StringFilter<"Sprint"> | string
    updatedBy?: StringFilter<"Sprint"> | string
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    items?: SprintItemListRelationFilter
    velocityData?: XOR<SprintVelocityNullableRelationFilter, SprintVelocityWhereInput> | null
    burndowns?: BurndownSnapshotListRelationFilter
  }, "id">

  export type SprintOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    goal?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    velocityPoints?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SprintCountOrderByAggregateInput
    _avg?: SprintAvgOrderByAggregateInput
    _max?: SprintMaxOrderByAggregateInput
    _min?: SprintMinOrderByAggregateInput
    _sum?: SprintSumOrderByAggregateInput
  }

  export type SprintScalarWhereWithAggregatesInput = {
    AND?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    OR?: SprintScalarWhereWithAggregatesInput[]
    NOT?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sprint"> | string
    projectId?: StringWithAggregatesFilter<"Sprint"> | string
    name?: StringWithAggregatesFilter<"Sprint"> | string
    goal?: StringNullableWithAggregatesFilter<"Sprint"> | string | null
    status?: EnumSprintStatusWithAggregatesFilter<"Sprint"> | $Enums.SprintStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Sprint"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Sprint"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Sprint"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Sprint"> | Date | string | null
    capacity?: IntNullableWithAggregatesFilter<"Sprint"> | number | null
    velocityPoints?: IntNullableWithAggregatesFilter<"Sprint"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Sprint"> | string | null
    createdBy?: StringWithAggregatesFilter<"Sprint"> | string
    updatedBy?: StringWithAggregatesFilter<"Sprint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
  }

  export type SprintItemWhereInput = {
    AND?: SprintItemWhereInput | SprintItemWhereInput[]
    OR?: SprintItemWhereInput[]
    NOT?: SprintItemWhereInput | SprintItemWhereInput[]
    id?: StringFilter<"SprintItem"> | string
    sprintId?: StringFilter<"SprintItem"> | string
    taskId?: StringFilter<"SprintItem"> | string
    storyPoints?: IntNullableFilter<"SprintItem"> | number | null
    addedBy?: StringFilter<"SprintItem"> | string
    addedAt?: DateTimeFilter<"SprintItem"> | Date | string
    removedAt?: DateTimeNullableFilter<"SprintItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"SprintItem"> | Date | string | null
    sprint?: XOR<SprintRelationFilter, SprintWhereInput>
  }

  export type SprintItemOrderByWithRelationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    taskId?: SortOrder
    storyPoints?: SortOrderInput | SortOrder
    addedBy?: SortOrder
    addedAt?: SortOrder
    removedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    sprint?: SprintOrderByWithRelationInput
  }

  export type SprintItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sprintId_taskId?: SprintItemSprintIdTaskIdCompoundUniqueInput
    AND?: SprintItemWhereInput | SprintItemWhereInput[]
    OR?: SprintItemWhereInput[]
    NOT?: SprintItemWhereInput | SprintItemWhereInput[]
    sprintId?: StringFilter<"SprintItem"> | string
    taskId?: StringFilter<"SprintItem"> | string
    storyPoints?: IntNullableFilter<"SprintItem"> | number | null
    addedBy?: StringFilter<"SprintItem"> | string
    addedAt?: DateTimeFilter<"SprintItem"> | Date | string
    removedAt?: DateTimeNullableFilter<"SprintItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"SprintItem"> | Date | string | null
    sprint?: XOR<SprintRelationFilter, SprintWhereInput>
  }, "id" | "sprintId_taskId">

  export type SprintItemOrderByWithAggregationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    taskId?: SortOrder
    storyPoints?: SortOrderInput | SortOrder
    addedBy?: SortOrder
    addedAt?: SortOrder
    removedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: SprintItemCountOrderByAggregateInput
    _avg?: SprintItemAvgOrderByAggregateInput
    _max?: SprintItemMaxOrderByAggregateInput
    _min?: SprintItemMinOrderByAggregateInput
    _sum?: SprintItemSumOrderByAggregateInput
  }

  export type SprintItemScalarWhereWithAggregatesInput = {
    AND?: SprintItemScalarWhereWithAggregatesInput | SprintItemScalarWhereWithAggregatesInput[]
    OR?: SprintItemScalarWhereWithAggregatesInput[]
    NOT?: SprintItemScalarWhereWithAggregatesInput | SprintItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SprintItem"> | string
    sprintId?: StringWithAggregatesFilter<"SprintItem"> | string
    taskId?: StringWithAggregatesFilter<"SprintItem"> | string
    storyPoints?: IntNullableWithAggregatesFilter<"SprintItem"> | number | null
    addedBy?: StringWithAggregatesFilter<"SprintItem"> | string
    addedAt?: DateTimeWithAggregatesFilter<"SprintItem"> | Date | string
    removedAt?: DateTimeNullableWithAggregatesFilter<"SprintItem"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"SprintItem"> | Date | string | null
  }

  export type SprintVelocityWhereInput = {
    AND?: SprintVelocityWhereInput | SprintVelocityWhereInput[]
    OR?: SprintVelocityWhereInput[]
    NOT?: SprintVelocityWhereInput | SprintVelocityWhereInput[]
    id?: StringFilter<"SprintVelocity"> | string
    sprintId?: StringFilter<"SprintVelocity"> | string
    plannedPoints?: IntFilter<"SprintVelocity"> | number
    completedPoints?: IntFilter<"SprintVelocity"> | number
    addedPoints?: IntFilter<"SprintVelocity"> | number
    removedPoints?: IntFilter<"SprintVelocity"> | number
    carryOverPoints?: IntFilter<"SprintVelocity"> | number
    completionRate?: FloatFilter<"SprintVelocity"> | number
    calculatedAt?: DateTimeFilter<"SprintVelocity"> | Date | string
    sprint?: XOR<SprintRelationFilter, SprintWhereInput>
  }

  export type SprintVelocityOrderByWithRelationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
    calculatedAt?: SortOrder
    sprint?: SprintOrderByWithRelationInput
  }

  export type SprintVelocityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sprintId?: string
    AND?: SprintVelocityWhereInput | SprintVelocityWhereInput[]
    OR?: SprintVelocityWhereInput[]
    NOT?: SprintVelocityWhereInput | SprintVelocityWhereInput[]
    plannedPoints?: IntFilter<"SprintVelocity"> | number
    completedPoints?: IntFilter<"SprintVelocity"> | number
    addedPoints?: IntFilter<"SprintVelocity"> | number
    removedPoints?: IntFilter<"SprintVelocity"> | number
    carryOverPoints?: IntFilter<"SprintVelocity"> | number
    completionRate?: FloatFilter<"SprintVelocity"> | number
    calculatedAt?: DateTimeFilter<"SprintVelocity"> | Date | string
    sprint?: XOR<SprintRelationFilter, SprintWhereInput>
  }, "id" | "sprintId">

  export type SprintVelocityOrderByWithAggregationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
    calculatedAt?: SortOrder
    _count?: SprintVelocityCountOrderByAggregateInput
    _avg?: SprintVelocityAvgOrderByAggregateInput
    _max?: SprintVelocityMaxOrderByAggregateInput
    _min?: SprintVelocityMinOrderByAggregateInput
    _sum?: SprintVelocitySumOrderByAggregateInput
  }

  export type SprintVelocityScalarWhereWithAggregatesInput = {
    AND?: SprintVelocityScalarWhereWithAggregatesInput | SprintVelocityScalarWhereWithAggregatesInput[]
    OR?: SprintVelocityScalarWhereWithAggregatesInput[]
    NOT?: SprintVelocityScalarWhereWithAggregatesInput | SprintVelocityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SprintVelocity"> | string
    sprintId?: StringWithAggregatesFilter<"SprintVelocity"> | string
    plannedPoints?: IntWithAggregatesFilter<"SprintVelocity"> | number
    completedPoints?: IntWithAggregatesFilter<"SprintVelocity"> | number
    addedPoints?: IntWithAggregatesFilter<"SprintVelocity"> | number
    removedPoints?: IntWithAggregatesFilter<"SprintVelocity"> | number
    carryOverPoints?: IntWithAggregatesFilter<"SprintVelocity"> | number
    completionRate?: FloatWithAggregatesFilter<"SprintVelocity"> | number
    calculatedAt?: DateTimeWithAggregatesFilter<"SprintVelocity"> | Date | string
  }

  export type BurndownSnapshotWhereInput = {
    AND?: BurndownSnapshotWhereInput | BurndownSnapshotWhereInput[]
    OR?: BurndownSnapshotWhereInput[]
    NOT?: BurndownSnapshotWhereInput | BurndownSnapshotWhereInput[]
    id?: StringFilter<"BurndownSnapshot"> | string
    sprintId?: StringFilter<"BurndownSnapshot"> | string
    date?: DateTimeFilter<"BurndownSnapshot"> | Date | string
    remainingPoints?: IntFilter<"BurndownSnapshot"> | number
    completedPoints?: IntFilter<"BurndownSnapshot"> | number
    idealPoints?: IntFilter<"BurndownSnapshot"> | number
    createdAt?: DateTimeFilter<"BurndownSnapshot"> | Date | string
    sprint?: XOR<SprintRelationFilter, SprintWhereInput>
  }

  export type BurndownSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    date?: SortOrder
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
    createdAt?: SortOrder
    sprint?: SprintOrderByWithRelationInput
  }

  export type BurndownSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sprintId_date?: BurndownSnapshotSprintIdDateCompoundUniqueInput
    AND?: BurndownSnapshotWhereInput | BurndownSnapshotWhereInput[]
    OR?: BurndownSnapshotWhereInput[]
    NOT?: BurndownSnapshotWhereInput | BurndownSnapshotWhereInput[]
    sprintId?: StringFilter<"BurndownSnapshot"> | string
    date?: DateTimeFilter<"BurndownSnapshot"> | Date | string
    remainingPoints?: IntFilter<"BurndownSnapshot"> | number
    completedPoints?: IntFilter<"BurndownSnapshot"> | number
    idealPoints?: IntFilter<"BurndownSnapshot"> | number
    createdAt?: DateTimeFilter<"BurndownSnapshot"> | Date | string
    sprint?: XOR<SprintRelationFilter, SprintWhereInput>
  }, "id" | "sprintId_date">

  export type BurndownSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    date?: SortOrder
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
    createdAt?: SortOrder
    _count?: BurndownSnapshotCountOrderByAggregateInput
    _avg?: BurndownSnapshotAvgOrderByAggregateInput
    _max?: BurndownSnapshotMaxOrderByAggregateInput
    _min?: BurndownSnapshotMinOrderByAggregateInput
    _sum?: BurndownSnapshotSumOrderByAggregateInput
  }

  export type BurndownSnapshotScalarWhereWithAggregatesInput = {
    AND?: BurndownSnapshotScalarWhereWithAggregatesInput | BurndownSnapshotScalarWhereWithAggregatesInput[]
    OR?: BurndownSnapshotScalarWhereWithAggregatesInput[]
    NOT?: BurndownSnapshotScalarWhereWithAggregatesInput | BurndownSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BurndownSnapshot"> | string
    sprintId?: StringWithAggregatesFilter<"BurndownSnapshot"> | string
    date?: DateTimeWithAggregatesFilter<"BurndownSnapshot"> | Date | string
    remainingPoints?: IntWithAggregatesFilter<"BurndownSnapshot"> | number
    completedPoints?: IntWithAggregatesFilter<"BurndownSnapshot"> | number
    idealPoints?: IntWithAggregatesFilter<"BurndownSnapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BurndownSnapshot"> | Date | string
  }

  export type SprintCreateInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SprintItemCreateNestedManyWithoutSprintInput
    velocityData?: SprintVelocityCreateNestedOneWithoutSprintInput
    burndowns?: BurndownSnapshotCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SprintItemUncheckedCreateNestedManyWithoutSprintInput
    velocityData?: SprintVelocityUncheckedCreateNestedOneWithoutSprintInput
    burndowns?: BurndownSnapshotUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SprintItemUpdateManyWithoutSprintNestedInput
    velocityData?: SprintVelocityUpdateOneWithoutSprintNestedInput
    burndowns?: BurndownSnapshotUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SprintItemUncheckedUpdateManyWithoutSprintNestedInput
    velocityData?: SprintVelocityUncheckedUpdateOneWithoutSprintNestedInput
    burndowns?: BurndownSnapshotUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintCreateManyInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintItemCreateInput = {
    id?: string
    taskId: string
    storyPoints?: number | null
    addedBy: string
    addedAt?: Date | string
    removedAt?: Date | string | null
    completedAt?: Date | string | null
    sprint: SprintCreateNestedOneWithoutItemsInput
  }

  export type SprintItemUncheckedCreateInput = {
    id?: string
    sprintId: string
    taskId: string
    storyPoints?: number | null
    addedBy: string
    addedAt?: Date | string
    removedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type SprintItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sprint?: SprintUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SprintItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SprintItemCreateManyInput = {
    id?: string
    sprintId: string
    taskId: string
    storyPoints?: number | null
    addedBy: string
    addedAt?: Date | string
    removedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type SprintItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SprintItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SprintVelocityCreateInput = {
    id?: string
    plannedPoints?: number
    completedPoints?: number
    addedPoints?: number
    removedPoints?: number
    carryOverPoints?: number
    completionRate?: number
    calculatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutVelocityDataInput
  }

  export type SprintVelocityUncheckedCreateInput = {
    id?: string
    sprintId: string
    plannedPoints?: number
    completedPoints?: number
    addedPoints?: number
    removedPoints?: number
    carryOverPoints?: number
    completionRate?: number
    calculatedAt?: Date | string
  }

  export type SprintVelocityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    addedPoints?: IntFieldUpdateOperationsInput | number
    removedPoints?: IntFieldUpdateOperationsInput | number
    carryOverPoints?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutVelocityDataNestedInput
  }

  export type SprintVelocityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    plannedPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    addedPoints?: IntFieldUpdateOperationsInput | number
    removedPoints?: IntFieldUpdateOperationsInput | number
    carryOverPoints?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintVelocityCreateManyInput = {
    id?: string
    sprintId: string
    plannedPoints?: number
    completedPoints?: number
    addedPoints?: number
    removedPoints?: number
    carryOverPoints?: number
    completionRate?: number
    calculatedAt?: Date | string
  }

  export type SprintVelocityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    addedPoints?: IntFieldUpdateOperationsInput | number
    removedPoints?: IntFieldUpdateOperationsInput | number
    carryOverPoints?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintVelocityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    plannedPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    addedPoints?: IntFieldUpdateOperationsInput | number
    removedPoints?: IntFieldUpdateOperationsInput | number
    carryOverPoints?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurndownSnapshotCreateInput = {
    id?: string
    date: Date | string
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt?: Date | string
    sprint: SprintCreateNestedOneWithoutBurndownsInput
  }

  export type BurndownSnapshotUncheckedCreateInput = {
    id?: string
    sprintId: string
    date: Date | string
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt?: Date | string
  }

  export type BurndownSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutBurndownsNestedInput
  }

  export type BurndownSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurndownSnapshotCreateManyInput = {
    id?: string
    sprintId: string
    date: Date | string
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt?: Date | string
  }

  export type BurndownSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurndownSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
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

  export type EnumSprintStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SprintStatus | EnumSprintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSprintStatusFilter<$PrismaModel> | $Enums.SprintStatus
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

  export type SprintItemListRelationFilter = {
    every?: SprintItemWhereInput
    some?: SprintItemWhereInput
    none?: SprintItemWhereInput
  }

  export type SprintVelocityNullableRelationFilter = {
    is?: SprintVelocityWhereInput | null
    isNot?: SprintVelocityWhereInput | null
  }

  export type BurndownSnapshotListRelationFilter = {
    every?: BurndownSnapshotWhereInput
    some?: BurndownSnapshotWhereInput
    none?: BurndownSnapshotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SprintItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BurndownSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SprintCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    capacity?: SortOrder
    velocityPoints?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintAvgOrderByAggregateInput = {
    capacity?: SortOrder
    velocityPoints?: SortOrder
  }

  export type SprintMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    capacity?: SortOrder
    velocityPoints?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    capacity?: SortOrder
    velocityPoints?: SortOrder
    notes?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintSumOrderByAggregateInput = {
    capacity?: SortOrder
    velocityPoints?: SortOrder
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

  export type EnumSprintStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SprintStatus | EnumSprintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSprintStatusWithAggregatesFilter<$PrismaModel> | $Enums.SprintStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSprintStatusFilter<$PrismaModel>
    _max?: NestedEnumSprintStatusFilter<$PrismaModel>
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

  export type SprintRelationFilter = {
    is?: SprintWhereInput
    isNot?: SprintWhereInput
  }

  export type SprintItemSprintIdTaskIdCompoundUniqueInput = {
    sprintId: string
    taskId: string
  }

  export type SprintItemCountOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    taskId?: SortOrder
    storyPoints?: SortOrder
    addedBy?: SortOrder
    addedAt?: SortOrder
    removedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SprintItemAvgOrderByAggregateInput = {
    storyPoints?: SortOrder
  }

  export type SprintItemMaxOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    taskId?: SortOrder
    storyPoints?: SortOrder
    addedBy?: SortOrder
    addedAt?: SortOrder
    removedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SprintItemMinOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    taskId?: SortOrder
    storyPoints?: SortOrder
    addedBy?: SortOrder
    addedAt?: SortOrder
    removedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SprintItemSumOrderByAggregateInput = {
    storyPoints?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SprintVelocityCountOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
    calculatedAt?: SortOrder
  }

  export type SprintVelocityAvgOrderByAggregateInput = {
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
  }

  export type SprintVelocityMaxOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
    calculatedAt?: SortOrder
  }

  export type SprintVelocityMinOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
    calculatedAt?: SortOrder
  }

  export type SprintVelocitySumOrderByAggregateInput = {
    plannedPoints?: SortOrder
    completedPoints?: SortOrder
    addedPoints?: SortOrder
    removedPoints?: SortOrder
    carryOverPoints?: SortOrder
    completionRate?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BurndownSnapshotSprintIdDateCompoundUniqueInput = {
    sprintId: string
    date: Date | string
  }

  export type BurndownSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    date?: SortOrder
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type BurndownSnapshotAvgOrderByAggregateInput = {
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
  }

  export type BurndownSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    date?: SortOrder
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type BurndownSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    date?: SortOrder
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type BurndownSnapshotSumOrderByAggregateInput = {
    remainingPoints?: SortOrder
    completedPoints?: SortOrder
    idealPoints?: SortOrder
  }

  export type SprintItemCreateNestedManyWithoutSprintInput = {
    create?: XOR<SprintItemCreateWithoutSprintInput, SprintItemUncheckedCreateWithoutSprintInput> | SprintItemCreateWithoutSprintInput[] | SprintItemUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: SprintItemCreateOrConnectWithoutSprintInput | SprintItemCreateOrConnectWithoutSprintInput[]
    createMany?: SprintItemCreateManySprintInputEnvelope
    connect?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
  }

  export type SprintVelocityCreateNestedOneWithoutSprintInput = {
    create?: XOR<SprintVelocityCreateWithoutSprintInput, SprintVelocityUncheckedCreateWithoutSprintInput>
    connectOrCreate?: SprintVelocityCreateOrConnectWithoutSprintInput
    connect?: SprintVelocityWhereUniqueInput
  }

  export type BurndownSnapshotCreateNestedManyWithoutSprintInput = {
    create?: XOR<BurndownSnapshotCreateWithoutSprintInput, BurndownSnapshotUncheckedCreateWithoutSprintInput> | BurndownSnapshotCreateWithoutSprintInput[] | BurndownSnapshotUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: BurndownSnapshotCreateOrConnectWithoutSprintInput | BurndownSnapshotCreateOrConnectWithoutSprintInput[]
    createMany?: BurndownSnapshotCreateManySprintInputEnvelope
    connect?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
  }

  export type SprintItemUncheckedCreateNestedManyWithoutSprintInput = {
    create?: XOR<SprintItemCreateWithoutSprintInput, SprintItemUncheckedCreateWithoutSprintInput> | SprintItemCreateWithoutSprintInput[] | SprintItemUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: SprintItemCreateOrConnectWithoutSprintInput | SprintItemCreateOrConnectWithoutSprintInput[]
    createMany?: SprintItemCreateManySprintInputEnvelope
    connect?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
  }

  export type SprintVelocityUncheckedCreateNestedOneWithoutSprintInput = {
    create?: XOR<SprintVelocityCreateWithoutSprintInput, SprintVelocityUncheckedCreateWithoutSprintInput>
    connectOrCreate?: SprintVelocityCreateOrConnectWithoutSprintInput
    connect?: SprintVelocityWhereUniqueInput
  }

  export type BurndownSnapshotUncheckedCreateNestedManyWithoutSprintInput = {
    create?: XOR<BurndownSnapshotCreateWithoutSprintInput, BurndownSnapshotUncheckedCreateWithoutSprintInput> | BurndownSnapshotCreateWithoutSprintInput[] | BurndownSnapshotUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: BurndownSnapshotCreateOrConnectWithoutSprintInput | BurndownSnapshotCreateOrConnectWithoutSprintInput[]
    createMany?: BurndownSnapshotCreateManySprintInputEnvelope
    connect?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSprintStatusFieldUpdateOperationsInput = {
    set?: $Enums.SprintStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SprintItemUpdateManyWithoutSprintNestedInput = {
    create?: XOR<SprintItemCreateWithoutSprintInput, SprintItemUncheckedCreateWithoutSprintInput> | SprintItemCreateWithoutSprintInput[] | SprintItemUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: SprintItemCreateOrConnectWithoutSprintInput | SprintItemCreateOrConnectWithoutSprintInput[]
    upsert?: SprintItemUpsertWithWhereUniqueWithoutSprintInput | SprintItemUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: SprintItemCreateManySprintInputEnvelope
    set?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    disconnect?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    delete?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    connect?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    update?: SprintItemUpdateWithWhereUniqueWithoutSprintInput | SprintItemUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: SprintItemUpdateManyWithWhereWithoutSprintInput | SprintItemUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: SprintItemScalarWhereInput | SprintItemScalarWhereInput[]
  }

  export type SprintVelocityUpdateOneWithoutSprintNestedInput = {
    create?: XOR<SprintVelocityCreateWithoutSprintInput, SprintVelocityUncheckedCreateWithoutSprintInput>
    connectOrCreate?: SprintVelocityCreateOrConnectWithoutSprintInput
    upsert?: SprintVelocityUpsertWithoutSprintInput
    disconnect?: SprintVelocityWhereInput | boolean
    delete?: SprintVelocityWhereInput | boolean
    connect?: SprintVelocityWhereUniqueInput
    update?: XOR<XOR<SprintVelocityUpdateToOneWithWhereWithoutSprintInput, SprintVelocityUpdateWithoutSprintInput>, SprintVelocityUncheckedUpdateWithoutSprintInput>
  }

  export type BurndownSnapshotUpdateManyWithoutSprintNestedInput = {
    create?: XOR<BurndownSnapshotCreateWithoutSprintInput, BurndownSnapshotUncheckedCreateWithoutSprintInput> | BurndownSnapshotCreateWithoutSprintInput[] | BurndownSnapshotUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: BurndownSnapshotCreateOrConnectWithoutSprintInput | BurndownSnapshotCreateOrConnectWithoutSprintInput[]
    upsert?: BurndownSnapshotUpsertWithWhereUniqueWithoutSprintInput | BurndownSnapshotUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: BurndownSnapshotCreateManySprintInputEnvelope
    set?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    disconnect?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    delete?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    connect?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    update?: BurndownSnapshotUpdateWithWhereUniqueWithoutSprintInput | BurndownSnapshotUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: BurndownSnapshotUpdateManyWithWhereWithoutSprintInput | BurndownSnapshotUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: BurndownSnapshotScalarWhereInput | BurndownSnapshotScalarWhereInput[]
  }

  export type SprintItemUncheckedUpdateManyWithoutSprintNestedInput = {
    create?: XOR<SprintItemCreateWithoutSprintInput, SprintItemUncheckedCreateWithoutSprintInput> | SprintItemCreateWithoutSprintInput[] | SprintItemUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: SprintItemCreateOrConnectWithoutSprintInput | SprintItemCreateOrConnectWithoutSprintInput[]
    upsert?: SprintItemUpsertWithWhereUniqueWithoutSprintInput | SprintItemUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: SprintItemCreateManySprintInputEnvelope
    set?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    disconnect?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    delete?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    connect?: SprintItemWhereUniqueInput | SprintItemWhereUniqueInput[]
    update?: SprintItemUpdateWithWhereUniqueWithoutSprintInput | SprintItemUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: SprintItemUpdateManyWithWhereWithoutSprintInput | SprintItemUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: SprintItemScalarWhereInput | SprintItemScalarWhereInput[]
  }

  export type SprintVelocityUncheckedUpdateOneWithoutSprintNestedInput = {
    create?: XOR<SprintVelocityCreateWithoutSprintInput, SprintVelocityUncheckedCreateWithoutSprintInput>
    connectOrCreate?: SprintVelocityCreateOrConnectWithoutSprintInput
    upsert?: SprintVelocityUpsertWithoutSprintInput
    disconnect?: SprintVelocityWhereInput | boolean
    delete?: SprintVelocityWhereInput | boolean
    connect?: SprintVelocityWhereUniqueInput
    update?: XOR<XOR<SprintVelocityUpdateToOneWithWhereWithoutSprintInput, SprintVelocityUpdateWithoutSprintInput>, SprintVelocityUncheckedUpdateWithoutSprintInput>
  }

  export type BurndownSnapshotUncheckedUpdateManyWithoutSprintNestedInput = {
    create?: XOR<BurndownSnapshotCreateWithoutSprintInput, BurndownSnapshotUncheckedCreateWithoutSprintInput> | BurndownSnapshotCreateWithoutSprintInput[] | BurndownSnapshotUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: BurndownSnapshotCreateOrConnectWithoutSprintInput | BurndownSnapshotCreateOrConnectWithoutSprintInput[]
    upsert?: BurndownSnapshotUpsertWithWhereUniqueWithoutSprintInput | BurndownSnapshotUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: BurndownSnapshotCreateManySprintInputEnvelope
    set?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    disconnect?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    delete?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    connect?: BurndownSnapshotWhereUniqueInput | BurndownSnapshotWhereUniqueInput[]
    update?: BurndownSnapshotUpdateWithWhereUniqueWithoutSprintInput | BurndownSnapshotUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: BurndownSnapshotUpdateManyWithWhereWithoutSprintInput | BurndownSnapshotUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: BurndownSnapshotScalarWhereInput | BurndownSnapshotScalarWhereInput[]
  }

  export type SprintCreateNestedOneWithoutItemsInput = {
    create?: XOR<SprintCreateWithoutItemsInput, SprintUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SprintCreateOrConnectWithoutItemsInput
    connect?: SprintWhereUniqueInput
  }

  export type SprintUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SprintCreateWithoutItemsInput, SprintUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SprintCreateOrConnectWithoutItemsInput
    upsert?: SprintUpsertWithoutItemsInput
    connect?: SprintWhereUniqueInput
    update?: XOR<XOR<SprintUpdateToOneWithWhereWithoutItemsInput, SprintUpdateWithoutItemsInput>, SprintUncheckedUpdateWithoutItemsInput>
  }

  export type SprintCreateNestedOneWithoutVelocityDataInput = {
    create?: XOR<SprintCreateWithoutVelocityDataInput, SprintUncheckedCreateWithoutVelocityDataInput>
    connectOrCreate?: SprintCreateOrConnectWithoutVelocityDataInput
    connect?: SprintWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SprintUpdateOneRequiredWithoutVelocityDataNestedInput = {
    create?: XOR<SprintCreateWithoutVelocityDataInput, SprintUncheckedCreateWithoutVelocityDataInput>
    connectOrCreate?: SprintCreateOrConnectWithoutVelocityDataInput
    upsert?: SprintUpsertWithoutVelocityDataInput
    connect?: SprintWhereUniqueInput
    update?: XOR<XOR<SprintUpdateToOneWithWhereWithoutVelocityDataInput, SprintUpdateWithoutVelocityDataInput>, SprintUncheckedUpdateWithoutVelocityDataInput>
  }

  export type SprintCreateNestedOneWithoutBurndownsInput = {
    create?: XOR<SprintCreateWithoutBurndownsInput, SprintUncheckedCreateWithoutBurndownsInput>
    connectOrCreate?: SprintCreateOrConnectWithoutBurndownsInput
    connect?: SprintWhereUniqueInput
  }

  export type SprintUpdateOneRequiredWithoutBurndownsNestedInput = {
    create?: XOR<SprintCreateWithoutBurndownsInput, SprintUncheckedCreateWithoutBurndownsInput>
    connectOrCreate?: SprintCreateOrConnectWithoutBurndownsInput
    upsert?: SprintUpsertWithoutBurndownsInput
    connect?: SprintWhereUniqueInput
    update?: XOR<XOR<SprintUpdateToOneWithWhereWithoutBurndownsInput, SprintUpdateWithoutBurndownsInput>, SprintUncheckedUpdateWithoutBurndownsInput>
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

  export type NestedEnumSprintStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SprintStatus | EnumSprintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSprintStatusFilter<$PrismaModel> | $Enums.SprintStatus
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

  export type NestedEnumSprintStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SprintStatus | EnumSprintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SprintStatus[] | ListEnumSprintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSprintStatusWithAggregatesFilter<$PrismaModel> | $Enums.SprintStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSprintStatusFilter<$PrismaModel>
    _max?: NestedEnumSprintStatusFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SprintItemCreateWithoutSprintInput = {
    id?: string
    taskId: string
    storyPoints?: number | null
    addedBy: string
    addedAt?: Date | string
    removedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type SprintItemUncheckedCreateWithoutSprintInput = {
    id?: string
    taskId: string
    storyPoints?: number | null
    addedBy: string
    addedAt?: Date | string
    removedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type SprintItemCreateOrConnectWithoutSprintInput = {
    where: SprintItemWhereUniqueInput
    create: XOR<SprintItemCreateWithoutSprintInput, SprintItemUncheckedCreateWithoutSprintInput>
  }

  export type SprintItemCreateManySprintInputEnvelope = {
    data: SprintItemCreateManySprintInput | SprintItemCreateManySprintInput[]
    skipDuplicates?: boolean
  }

  export type SprintVelocityCreateWithoutSprintInput = {
    id?: string
    plannedPoints?: number
    completedPoints?: number
    addedPoints?: number
    removedPoints?: number
    carryOverPoints?: number
    completionRate?: number
    calculatedAt?: Date | string
  }

  export type SprintVelocityUncheckedCreateWithoutSprintInput = {
    id?: string
    plannedPoints?: number
    completedPoints?: number
    addedPoints?: number
    removedPoints?: number
    carryOverPoints?: number
    completionRate?: number
    calculatedAt?: Date | string
  }

  export type SprintVelocityCreateOrConnectWithoutSprintInput = {
    where: SprintVelocityWhereUniqueInput
    create: XOR<SprintVelocityCreateWithoutSprintInput, SprintVelocityUncheckedCreateWithoutSprintInput>
  }

  export type BurndownSnapshotCreateWithoutSprintInput = {
    id?: string
    date: Date | string
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt?: Date | string
  }

  export type BurndownSnapshotUncheckedCreateWithoutSprintInput = {
    id?: string
    date: Date | string
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt?: Date | string
  }

  export type BurndownSnapshotCreateOrConnectWithoutSprintInput = {
    where: BurndownSnapshotWhereUniqueInput
    create: XOR<BurndownSnapshotCreateWithoutSprintInput, BurndownSnapshotUncheckedCreateWithoutSprintInput>
  }

  export type BurndownSnapshotCreateManySprintInputEnvelope = {
    data: BurndownSnapshotCreateManySprintInput | BurndownSnapshotCreateManySprintInput[]
    skipDuplicates?: boolean
  }

  export type SprintItemUpsertWithWhereUniqueWithoutSprintInput = {
    where: SprintItemWhereUniqueInput
    update: XOR<SprintItemUpdateWithoutSprintInput, SprintItemUncheckedUpdateWithoutSprintInput>
    create: XOR<SprintItemCreateWithoutSprintInput, SprintItemUncheckedCreateWithoutSprintInput>
  }

  export type SprintItemUpdateWithWhereUniqueWithoutSprintInput = {
    where: SprintItemWhereUniqueInput
    data: XOR<SprintItemUpdateWithoutSprintInput, SprintItemUncheckedUpdateWithoutSprintInput>
  }

  export type SprintItemUpdateManyWithWhereWithoutSprintInput = {
    where: SprintItemScalarWhereInput
    data: XOR<SprintItemUpdateManyMutationInput, SprintItemUncheckedUpdateManyWithoutSprintInput>
  }

  export type SprintItemScalarWhereInput = {
    AND?: SprintItemScalarWhereInput | SprintItemScalarWhereInput[]
    OR?: SprintItemScalarWhereInput[]
    NOT?: SprintItemScalarWhereInput | SprintItemScalarWhereInput[]
    id?: StringFilter<"SprintItem"> | string
    sprintId?: StringFilter<"SprintItem"> | string
    taskId?: StringFilter<"SprintItem"> | string
    storyPoints?: IntNullableFilter<"SprintItem"> | number | null
    addedBy?: StringFilter<"SprintItem"> | string
    addedAt?: DateTimeFilter<"SprintItem"> | Date | string
    removedAt?: DateTimeNullableFilter<"SprintItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"SprintItem"> | Date | string | null
  }

  export type SprintVelocityUpsertWithoutSprintInput = {
    update: XOR<SprintVelocityUpdateWithoutSprintInput, SprintVelocityUncheckedUpdateWithoutSprintInput>
    create: XOR<SprintVelocityCreateWithoutSprintInput, SprintVelocityUncheckedCreateWithoutSprintInput>
    where?: SprintVelocityWhereInput
  }

  export type SprintVelocityUpdateToOneWithWhereWithoutSprintInput = {
    where?: SprintVelocityWhereInput
    data: XOR<SprintVelocityUpdateWithoutSprintInput, SprintVelocityUncheckedUpdateWithoutSprintInput>
  }

  export type SprintVelocityUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    addedPoints?: IntFieldUpdateOperationsInput | number
    removedPoints?: IntFieldUpdateOperationsInput | number
    carryOverPoints?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintVelocityUncheckedUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    addedPoints?: IntFieldUpdateOperationsInput | number
    removedPoints?: IntFieldUpdateOperationsInput | number
    carryOverPoints?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurndownSnapshotUpsertWithWhereUniqueWithoutSprintInput = {
    where: BurndownSnapshotWhereUniqueInput
    update: XOR<BurndownSnapshotUpdateWithoutSprintInput, BurndownSnapshotUncheckedUpdateWithoutSprintInput>
    create: XOR<BurndownSnapshotCreateWithoutSprintInput, BurndownSnapshotUncheckedCreateWithoutSprintInput>
  }

  export type BurndownSnapshotUpdateWithWhereUniqueWithoutSprintInput = {
    where: BurndownSnapshotWhereUniqueInput
    data: XOR<BurndownSnapshotUpdateWithoutSprintInput, BurndownSnapshotUncheckedUpdateWithoutSprintInput>
  }

  export type BurndownSnapshotUpdateManyWithWhereWithoutSprintInput = {
    where: BurndownSnapshotScalarWhereInput
    data: XOR<BurndownSnapshotUpdateManyMutationInput, BurndownSnapshotUncheckedUpdateManyWithoutSprintInput>
  }

  export type BurndownSnapshotScalarWhereInput = {
    AND?: BurndownSnapshotScalarWhereInput | BurndownSnapshotScalarWhereInput[]
    OR?: BurndownSnapshotScalarWhereInput[]
    NOT?: BurndownSnapshotScalarWhereInput | BurndownSnapshotScalarWhereInput[]
    id?: StringFilter<"BurndownSnapshot"> | string
    sprintId?: StringFilter<"BurndownSnapshot"> | string
    date?: DateTimeFilter<"BurndownSnapshot"> | Date | string
    remainingPoints?: IntFilter<"BurndownSnapshot"> | number
    completedPoints?: IntFilter<"BurndownSnapshot"> | number
    idealPoints?: IntFilter<"BurndownSnapshot"> | number
    createdAt?: DateTimeFilter<"BurndownSnapshot"> | Date | string
  }

  export type SprintCreateWithoutItemsInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    velocityData?: SprintVelocityCreateNestedOneWithoutSprintInput
    burndowns?: BurndownSnapshotCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutItemsInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    velocityData?: SprintVelocityUncheckedCreateNestedOneWithoutSprintInput
    burndowns?: BurndownSnapshotUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutItemsInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutItemsInput, SprintUncheckedCreateWithoutItemsInput>
  }

  export type SprintUpsertWithoutItemsInput = {
    update: XOR<SprintUpdateWithoutItemsInput, SprintUncheckedUpdateWithoutItemsInput>
    create: XOR<SprintCreateWithoutItemsInput, SprintUncheckedCreateWithoutItemsInput>
    where?: SprintWhereInput
  }

  export type SprintUpdateToOneWithWhereWithoutItemsInput = {
    where?: SprintWhereInput
    data: XOR<SprintUpdateWithoutItemsInput, SprintUncheckedUpdateWithoutItemsInput>
  }

  export type SprintUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    velocityData?: SprintVelocityUpdateOneWithoutSprintNestedInput
    burndowns?: BurndownSnapshotUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    velocityData?: SprintVelocityUncheckedUpdateOneWithoutSprintNestedInput
    burndowns?: BurndownSnapshotUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintCreateWithoutVelocityDataInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SprintItemCreateNestedManyWithoutSprintInput
    burndowns?: BurndownSnapshotCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutVelocityDataInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SprintItemUncheckedCreateNestedManyWithoutSprintInput
    burndowns?: BurndownSnapshotUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutVelocityDataInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutVelocityDataInput, SprintUncheckedCreateWithoutVelocityDataInput>
  }

  export type SprintUpsertWithoutVelocityDataInput = {
    update: XOR<SprintUpdateWithoutVelocityDataInput, SprintUncheckedUpdateWithoutVelocityDataInput>
    create: XOR<SprintCreateWithoutVelocityDataInput, SprintUncheckedCreateWithoutVelocityDataInput>
    where?: SprintWhereInput
  }

  export type SprintUpdateToOneWithWhereWithoutVelocityDataInput = {
    where?: SprintWhereInput
    data: XOR<SprintUpdateWithoutVelocityDataInput, SprintUncheckedUpdateWithoutVelocityDataInput>
  }

  export type SprintUpdateWithoutVelocityDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SprintItemUpdateManyWithoutSprintNestedInput
    burndowns?: BurndownSnapshotUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutVelocityDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SprintItemUncheckedUpdateManyWithoutSprintNestedInput
    burndowns?: BurndownSnapshotUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintCreateWithoutBurndownsInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SprintItemCreateNestedManyWithoutSprintInput
    velocityData?: SprintVelocityCreateNestedOneWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutBurndownsInput = {
    id?: string
    projectId: string
    name: string
    goal?: string | null
    status?: $Enums.SprintStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    capacity?: number | null
    velocityPoints?: number | null
    notes?: string | null
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SprintItemUncheckedCreateNestedManyWithoutSprintInput
    velocityData?: SprintVelocityUncheckedCreateNestedOneWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutBurndownsInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutBurndownsInput, SprintUncheckedCreateWithoutBurndownsInput>
  }

  export type SprintUpsertWithoutBurndownsInput = {
    update: XOR<SprintUpdateWithoutBurndownsInput, SprintUncheckedUpdateWithoutBurndownsInput>
    create: XOR<SprintCreateWithoutBurndownsInput, SprintUncheckedCreateWithoutBurndownsInput>
    where?: SprintWhereInput
  }

  export type SprintUpdateToOneWithWhereWithoutBurndownsInput = {
    where?: SprintWhereInput
    data: XOR<SprintUpdateWithoutBurndownsInput, SprintUncheckedUpdateWithoutBurndownsInput>
  }

  export type SprintUpdateWithoutBurndownsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SprintItemUpdateManyWithoutSprintNestedInput
    velocityData?: SprintVelocityUpdateOneWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutBurndownsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSprintStatusFieldUpdateOperationsInput | $Enums.SprintStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    velocityPoints?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SprintItemUncheckedUpdateManyWithoutSprintNestedInput
    velocityData?: SprintVelocityUncheckedUpdateOneWithoutSprintNestedInput
  }

  export type SprintItemCreateManySprintInput = {
    id?: string
    taskId: string
    storyPoints?: number | null
    addedBy: string
    addedAt?: Date | string
    removedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type BurndownSnapshotCreateManySprintInput = {
    id?: string
    date: Date | string
    remainingPoints: number
    completedPoints: number
    idealPoints: number
    createdAt?: Date | string
  }

  export type SprintItemUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SprintItemUncheckedUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SprintItemUncheckedUpdateManyWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    removedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BurndownSnapshotUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurndownSnapshotUncheckedUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BurndownSnapshotUncheckedUpdateManyWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remainingPoints?: IntFieldUpdateOperationsInput | number
    completedPoints?: IntFieldUpdateOperationsInput | number
    idealPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SprintCountOutputTypeDefaultArgs instead
     */
    export type SprintCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SprintCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SprintDefaultArgs instead
     */
    export type SprintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SprintDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SprintItemDefaultArgs instead
     */
    export type SprintItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SprintItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SprintVelocityDefaultArgs instead
     */
    export type SprintVelocityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SprintVelocityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BurndownSnapshotDefaultArgs instead
     */
    export type BurndownSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BurndownSnapshotDefaultArgs<ExtArgs>

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