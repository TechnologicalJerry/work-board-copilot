
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
 * Model TimeEntry
 * 
 */
export type TimeEntry = $Result.DefaultSelection<Prisma.$TimeEntryPayload>
/**
 * Model Timesheet
 * 
 */
export type Timesheet = $Result.DefaultSelection<Prisma.$TimesheetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TimeEntryStatus: {
  RUNNING: 'RUNNING',
  STOPPED: 'STOPPED',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type TimeEntryStatus = (typeof TimeEntryStatus)[keyof typeof TimeEntryStatus]


export const TimesheetStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type TimesheetStatus = (typeof TimesheetStatus)[keyof typeof TimesheetStatus]

}

export type TimeEntryStatus = $Enums.TimeEntryStatus

export const TimeEntryStatus: typeof $Enums.TimeEntryStatus

export type TimesheetStatus = $Enums.TimesheetStatus

export const TimesheetStatus: typeof $Enums.TimesheetStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TimeEntries
 * const timeEntries = await prisma.timeEntry.findMany()
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
   * // Fetch zero or more TimeEntries
   * const timeEntries = await prisma.timeEntry.findMany()
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
   * `prisma.timeEntry`: Exposes CRUD operations for the **TimeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeEntries
    * const timeEntries = await prisma.timeEntry.findMany()
    * ```
    */
  get timeEntry(): Prisma.TimeEntryDelegate<ExtArgs>;

  /**
   * `prisma.timesheet`: Exposes CRUD operations for the **Timesheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timesheets
    * const timesheets = await prisma.timesheet.findMany()
    * ```
    */
  get timesheet(): Prisma.TimesheetDelegate<ExtArgs>;
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
    TimeEntry: 'TimeEntry',
    Timesheet: 'Timesheet'
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
      modelProps: "timeEntry" | "timesheet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TimeEntry: {
        payload: Prisma.$TimeEntryPayload<ExtArgs>
        fields: Prisma.TimeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findFirst: {
            args: Prisma.TimeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findMany: {
            args: Prisma.TimeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          create: {
            args: Prisma.TimeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          createMany: {
            args: Prisma.TimeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          delete: {
            args: Prisma.TimeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          update: {
            args: Prisma.TimeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          aggregate: {
            args: Prisma.TimeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeEntry>
          }
          groupBy: {
            args: Prisma.TimeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryCountAggregateOutputType> | number
          }
        }
      }
      Timesheet: {
        payload: Prisma.$TimesheetPayload<ExtArgs>
        fields: Prisma.TimesheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimesheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimesheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          findFirst: {
            args: Prisma.TimesheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimesheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          findMany: {
            args: Prisma.TimesheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>[]
          }
          create: {
            args: Prisma.TimesheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          createMany: {
            args: Prisma.TimesheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimesheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>[]
          }
          delete: {
            args: Prisma.TimesheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          update: {
            args: Prisma.TimesheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          deleteMany: {
            args: Prisma.TimesheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimesheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimesheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimesheetPayload>
          }
          aggregate: {
            args: Prisma.TimesheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimesheet>
          }
          groupBy: {
            args: Prisma.TimesheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimesheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimesheetCountArgs<ExtArgs>
            result: $Utils.Optional<TimesheetCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model TimeEntry
   */

  export type AggregateTimeEntry = {
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  export type TimeEntryAvgAggregateOutputType = {
    duration: number | null
    hourlyRate: number | null
  }

  export type TimeEntrySumAggregateOutputType = {
    duration: number | null
    hourlyRate: number | null
  }

  export type TimeEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    projectId: string | null
    organizationId: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    isBillable: boolean | null
    hourlyRate: number | null
    status: $Enums.TimeEntryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TimeEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    projectId: string | null
    organizationId: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    isBillable: boolean | null
    hourlyRate: number | null
    status: $Enums.TimeEntryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TimeEntryCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    projectId: number
    organizationId: number
    description: number
    startTime: number
    endTime: number
    duration: number
    isBillable: number
    hourlyRate: number
    tags: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TimeEntryAvgAggregateInputType = {
    duration?: true
    hourlyRate?: true
  }

  export type TimeEntrySumAggregateInputType = {
    duration?: true
    hourlyRate?: true
  }

  export type TimeEntryMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    projectId?: true
    organizationId?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    isBillable?: true
    hourlyRate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TimeEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    projectId?: true
    organizationId?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    isBillable?: true
    hourlyRate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TimeEntryCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    projectId?: true
    organizationId?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    isBillable?: true
    hourlyRate?: true
    tags?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TimeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntry to aggregate.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeEntries
    **/
    _count?: true | TimeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeEntryMaxAggregateInputType
  }

  export type GetTimeEntryAggregateType<T extends TimeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeEntry[P]>
      : GetScalarType<T[P], AggregateTimeEntry[P]>
  }




  export type TimeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithAggregationInput | TimeEntryOrderByWithAggregationInput[]
    by: TimeEntryScalarFieldEnum[] | TimeEntryScalarFieldEnum
    having?: TimeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeEntryCountAggregateInputType | true
    _avg?: TimeEntryAvgAggregateInputType
    _sum?: TimeEntrySumAggregateInputType
    _min?: TimeEntryMinAggregateInputType
    _max?: TimeEntryMaxAggregateInputType
  }

  export type TimeEntryGroupByOutputType = {
    id: string
    userId: string
    taskId: string | null
    projectId: string
    organizationId: string
    description: string | null
    startTime: Date
    endTime: Date | null
    duration: number | null
    isBillable: boolean
    hourlyRate: number | null
    tags: string[]
    status: $Enums.TimeEntryStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  type GetTimeEntryGroupByPayload<T extends TimeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    projectId?: boolean
    organizationId?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    isBillable?: boolean
    hourlyRate?: boolean
    tags?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    projectId?: boolean
    organizationId?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    isBillable?: boolean
    hourlyRate?: boolean
    tags?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
    projectId?: boolean
    organizationId?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    isBillable?: boolean
    hourlyRate?: boolean
    tags?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type $TimeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      taskId: string | null
      projectId: string
      organizationId: string
      description: string | null
      startTime: Date
      endTime: Date | null
      duration: number | null
      isBillable: boolean
      hourlyRate: number | null
      tags: string[]
      status: $Enums.TimeEntryStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["timeEntry"]>
    composites: {}
  }

  type TimeEntryGetPayload<S extends boolean | null | undefined | TimeEntryDefaultArgs> = $Result.GetResult<Prisma.$TimeEntryPayload, S>

  type TimeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeEntryCountAggregateInputType | true
    }

  export interface TimeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeEntry'], meta: { name: 'TimeEntry' } }
    /**
     * Find zero or one TimeEntry that matches the filter.
     * @param {TimeEntryFindUniqueArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeEntryFindUniqueArgs>(args: SelectSubset<T, TimeEntryFindUniqueArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimeEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimeEntryFindUniqueOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeEntryFindFirstArgs>(args?: SelectSubset<T, TimeEntryFindFirstArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany()
     * 
     * // Get first 10 TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeEntryFindManyArgs>(args?: SelectSubset<T, TimeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimeEntry.
     * @param {TimeEntryCreateArgs} args - Arguments to create a TimeEntry.
     * @example
     * // Create one TimeEntry
     * const TimeEntry = await prisma.timeEntry.create({
     *   data: {
     *     // ... data to create a TimeEntry
     *   }
     * })
     * 
     */
    create<T extends TimeEntryCreateArgs>(args: SelectSubset<T, TimeEntryCreateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimeEntries.
     * @param {TimeEntryCreateManyArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeEntryCreateManyArgs>(args?: SelectSubset<T, TimeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeEntries and returns the data saved in the database.
     * @param {TimeEntryCreateManyAndReturnArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimeEntry.
     * @param {TimeEntryDeleteArgs} args - Arguments to delete one TimeEntry.
     * @example
     * // Delete one TimeEntry
     * const TimeEntry = await prisma.timeEntry.delete({
     *   where: {
     *     // ... filter to delete one TimeEntry
     *   }
     * })
     * 
     */
    delete<T extends TimeEntryDeleteArgs>(args: SelectSubset<T, TimeEntryDeleteArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimeEntry.
     * @param {TimeEntryUpdateArgs} args - Arguments to update one TimeEntry.
     * @example
     * // Update one TimeEntry
     * const timeEntry = await prisma.timeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeEntryUpdateArgs>(args: SelectSubset<T, TimeEntryUpdateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimeEntries.
     * @param {TimeEntryDeleteManyArgs} args - Arguments to filter TimeEntries to delete.
     * @example
     * // Delete a few TimeEntries
     * const { count } = await prisma.timeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeEntryDeleteManyArgs>(args?: SelectSubset<T, TimeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeEntryUpdateManyArgs>(args: SelectSubset<T, TimeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeEntry.
     * @param {TimeEntryUpsertArgs} args - Arguments to update or create a TimeEntry.
     * @example
     * // Update or create a TimeEntry
     * const timeEntry = await prisma.timeEntry.upsert({
     *   create: {
     *     // ... data to create a TimeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimeEntryUpsertArgs>(args: SelectSubset<T, TimeEntryUpsertArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryCountArgs} args - Arguments to filter TimeEntries to count.
     * @example
     * // Count the number of TimeEntries
     * const count = await prisma.timeEntry.count({
     *   where: {
     *     // ... the filter for the TimeEntries we want to count
     *   }
     * })
    **/
    count<T extends TimeEntryCountArgs>(
      args?: Subset<T, TimeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeEntryAggregateArgs>(args: Subset<T, TimeEntryAggregateArgs>): Prisma.PrismaPromise<GetTimeEntryAggregateType<T>>

    /**
     * Group by TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryGroupByArgs} args - Group by arguments.
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
      T extends TimeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimeEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeEntry model
   */
  readonly fields: TimeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TimeEntry model
   */ 
  interface TimeEntryFieldRefs {
    readonly id: FieldRef<"TimeEntry", 'String'>
    readonly userId: FieldRef<"TimeEntry", 'String'>
    readonly taskId: FieldRef<"TimeEntry", 'String'>
    readonly projectId: FieldRef<"TimeEntry", 'String'>
    readonly organizationId: FieldRef<"TimeEntry", 'String'>
    readonly description: FieldRef<"TimeEntry", 'String'>
    readonly startTime: FieldRef<"TimeEntry", 'DateTime'>
    readonly endTime: FieldRef<"TimeEntry", 'DateTime'>
    readonly duration: FieldRef<"TimeEntry", 'Int'>
    readonly isBillable: FieldRef<"TimeEntry", 'Boolean'>
    readonly hourlyRate: FieldRef<"TimeEntry", 'Float'>
    readonly tags: FieldRef<"TimeEntry", 'String[]'>
    readonly status: FieldRef<"TimeEntry", 'TimeEntryStatus'>
    readonly createdAt: FieldRef<"TimeEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeEntry", 'DateTime'>
    readonly deletedAt: FieldRef<"TimeEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeEntry findUnique
   */
  export type TimeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findUniqueOrThrow
   */
  export type TimeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findFirst
   */
  export type TimeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findFirstOrThrow
   */
  export type TimeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findMany
   */
  export type TimeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Filter, which TimeEntries to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry create
   */
  export type TimeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * The data needed to create a TimeEntry.
     */
    data: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
  }

  /**
   * TimeEntry createMany
   */
  export type TimeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeEntry createManyAndReturn
   */
  export type TimeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeEntry update
   */
  export type TimeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * The data needed to update a TimeEntry.
     */
    data: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
    /**
     * Choose, which TimeEntry to update.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry updateMany
   */
  export type TimeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
  }

  /**
   * TimeEntry upsert
   */
  export type TimeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * The filter to search for the TimeEntry to update in case it exists.
     */
    where: TimeEntryWhereUniqueInput
    /**
     * In case the TimeEntry found by the `where` argument doesn't exist, create a new TimeEntry with this data.
     */
    create: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
    /**
     * In case the TimeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
  }

  /**
   * TimeEntry delete
   */
  export type TimeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Filter which TimeEntry to delete.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry deleteMany
   */
  export type TimeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntries to delete
     */
    where?: TimeEntryWhereInput
  }

  /**
   * TimeEntry without action
   */
  export type TimeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
  }


  /**
   * Model Timesheet
   */

  export type AggregateTimesheet = {
    _count: TimesheetCountAggregateOutputType | null
    _avg: TimesheetAvgAggregateOutputType | null
    _sum: TimesheetSumAggregateOutputType | null
    _min: TimesheetMinAggregateOutputType | null
    _max: TimesheetMaxAggregateOutputType | null
  }

  export type TimesheetAvgAggregateOutputType = {
    totalHours: number | null
    billableHours: number | null
  }

  export type TimesheetSumAggregateOutputType = {
    totalHours: number | null
    billableHours: number | null
  }

  export type TimesheetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    projectId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    totalHours: number | null
    billableHours: number | null
    status: $Enums.TimesheetStatus | null
    notes: string | null
    submittedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimesheetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    projectId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    totalHours: number | null
    billableHours: number | null
    status: $Enums.TimesheetStatus | null
    notes: string | null
    submittedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimesheetCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    projectId: number
    periodStart: number
    periodEnd: number
    totalHours: number
    billableHours: number
    status: number
    notes: number
    submittedAt: number
    approvedAt: number
    approvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimesheetAvgAggregateInputType = {
    totalHours?: true
    billableHours?: true
  }

  export type TimesheetSumAggregateInputType = {
    totalHours?: true
    billableHours?: true
  }

  export type TimesheetMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    projectId?: true
    periodStart?: true
    periodEnd?: true
    totalHours?: true
    billableHours?: true
    status?: true
    notes?: true
    submittedAt?: true
    approvedAt?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimesheetMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    projectId?: true
    periodStart?: true
    periodEnd?: true
    totalHours?: true
    billableHours?: true
    status?: true
    notes?: true
    submittedAt?: true
    approvedAt?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimesheetCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    projectId?: true
    periodStart?: true
    periodEnd?: true
    totalHours?: true
    billableHours?: true
    status?: true
    notes?: true
    submittedAt?: true
    approvedAt?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimesheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timesheet to aggregate.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timesheets
    **/
    _count?: true | TimesheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimesheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimesheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesheetMaxAggregateInputType
  }

  export type GetTimesheetAggregateType<T extends TimesheetAggregateArgs> = {
        [P in keyof T & keyof AggregateTimesheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimesheet[P]>
      : GetScalarType<T[P], AggregateTimesheet[P]>
  }




  export type TimesheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimesheetWhereInput
    orderBy?: TimesheetOrderByWithAggregationInput | TimesheetOrderByWithAggregationInput[]
    by: TimesheetScalarFieldEnum[] | TimesheetScalarFieldEnum
    having?: TimesheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesheetCountAggregateInputType | true
    _avg?: TimesheetAvgAggregateInputType
    _sum?: TimesheetSumAggregateInputType
    _min?: TimesheetMinAggregateInputType
    _max?: TimesheetMaxAggregateInputType
  }

  export type TimesheetGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    projectId: string | null
    periodStart: Date
    periodEnd: Date
    totalHours: number
    billableHours: number
    status: $Enums.TimesheetStatus
    notes: string | null
    submittedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TimesheetCountAggregateOutputType | null
    _avg: TimesheetAvgAggregateOutputType | null
    _sum: TimesheetSumAggregateOutputType | null
    _min: TimesheetMinAggregateOutputType | null
    _max: TimesheetMaxAggregateOutputType | null
  }

  type GetTimesheetGroupByPayload<T extends TimesheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimesheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesheetGroupByOutputType[P]>
            : GetScalarType<T[P], TimesheetGroupByOutputType[P]>
        }
      >
    >


  export type TimesheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    projectId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalHours?: boolean
    billableHours?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["timesheet"]>

  export type TimesheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    projectId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalHours?: boolean
    billableHours?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["timesheet"]>

  export type TimesheetSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    projectId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalHours?: boolean
    billableHours?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TimesheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timesheet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      projectId: string | null
      periodStart: Date
      periodEnd: Date
      totalHours: number
      billableHours: number
      status: $Enums.TimesheetStatus
      notes: string | null
      submittedAt: Date | null
      approvedAt: Date | null
      approvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timesheet"]>
    composites: {}
  }

  type TimesheetGetPayload<S extends boolean | null | undefined | TimesheetDefaultArgs> = $Result.GetResult<Prisma.$TimesheetPayload, S>

  type TimesheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimesheetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimesheetCountAggregateInputType | true
    }

  export interface TimesheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timesheet'], meta: { name: 'Timesheet' } }
    /**
     * Find zero or one Timesheet that matches the filter.
     * @param {TimesheetFindUniqueArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimesheetFindUniqueArgs>(args: SelectSubset<T, TimesheetFindUniqueArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timesheet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimesheetFindUniqueOrThrowArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimesheetFindUniqueOrThrowArgs>(args: SelectSubset<T, TimesheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timesheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindFirstArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimesheetFindFirstArgs>(args?: SelectSubset<T, TimesheetFindFirstArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timesheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindFirstOrThrowArgs} args - Arguments to find a Timesheet
     * @example
     * // Get one Timesheet
     * const timesheet = await prisma.timesheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimesheetFindFirstOrThrowArgs>(args?: SelectSubset<T, TimesheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timesheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timesheets
     * const timesheets = await prisma.timesheet.findMany()
     * 
     * // Get first 10 Timesheets
     * const timesheets = await prisma.timesheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timesheetWithIdOnly = await prisma.timesheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimesheetFindManyArgs>(args?: SelectSubset<T, TimesheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timesheet.
     * @param {TimesheetCreateArgs} args - Arguments to create a Timesheet.
     * @example
     * // Create one Timesheet
     * const Timesheet = await prisma.timesheet.create({
     *   data: {
     *     // ... data to create a Timesheet
     *   }
     * })
     * 
     */
    create<T extends TimesheetCreateArgs>(args: SelectSubset<T, TimesheetCreateArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timesheets.
     * @param {TimesheetCreateManyArgs} args - Arguments to create many Timesheets.
     * @example
     * // Create many Timesheets
     * const timesheet = await prisma.timesheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimesheetCreateManyArgs>(args?: SelectSubset<T, TimesheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timesheets and returns the data saved in the database.
     * @param {TimesheetCreateManyAndReturnArgs} args - Arguments to create many Timesheets.
     * @example
     * // Create many Timesheets
     * const timesheet = await prisma.timesheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timesheets and only return the `id`
     * const timesheetWithIdOnly = await prisma.timesheet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimesheetCreateManyAndReturnArgs>(args?: SelectSubset<T, TimesheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timesheet.
     * @param {TimesheetDeleteArgs} args - Arguments to delete one Timesheet.
     * @example
     * // Delete one Timesheet
     * const Timesheet = await prisma.timesheet.delete({
     *   where: {
     *     // ... filter to delete one Timesheet
     *   }
     * })
     * 
     */
    delete<T extends TimesheetDeleteArgs>(args: SelectSubset<T, TimesheetDeleteArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timesheet.
     * @param {TimesheetUpdateArgs} args - Arguments to update one Timesheet.
     * @example
     * // Update one Timesheet
     * const timesheet = await prisma.timesheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimesheetUpdateArgs>(args: SelectSubset<T, TimesheetUpdateArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timesheets.
     * @param {TimesheetDeleteManyArgs} args - Arguments to filter Timesheets to delete.
     * @example
     * // Delete a few Timesheets
     * const { count } = await prisma.timesheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimesheetDeleteManyArgs>(args?: SelectSubset<T, TimesheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timesheets
     * const timesheet = await prisma.timesheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimesheetUpdateManyArgs>(args: SelectSubset<T, TimesheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timesheet.
     * @param {TimesheetUpsertArgs} args - Arguments to update or create a Timesheet.
     * @example
     * // Update or create a Timesheet
     * const timesheet = await prisma.timesheet.upsert({
     *   create: {
     *     // ... data to create a Timesheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timesheet we want to update
     *   }
     * })
     */
    upsert<T extends TimesheetUpsertArgs>(args: SelectSubset<T, TimesheetUpsertArgs<ExtArgs>>): Prisma__TimesheetClient<$Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetCountArgs} args - Arguments to filter Timesheets to count.
     * @example
     * // Count the number of Timesheets
     * const count = await prisma.timesheet.count({
     *   where: {
     *     // ... the filter for the Timesheets we want to count
     *   }
     * })
    **/
    count<T extends TimesheetCountArgs>(
      args?: Subset<T, TimesheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timesheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimesheetAggregateArgs>(args: Subset<T, TimesheetAggregateArgs>): Prisma.PrismaPromise<GetTimesheetAggregateType<T>>

    /**
     * Group by Timesheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetGroupByArgs} args - Group by arguments.
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
      T extends TimesheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesheetGroupByArgs['orderBy'] }
        : { orderBy?: TimesheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimesheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timesheet model
   */
  readonly fields: TimesheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timesheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimesheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Timesheet model
   */ 
  interface TimesheetFieldRefs {
    readonly id: FieldRef<"Timesheet", 'String'>
    readonly userId: FieldRef<"Timesheet", 'String'>
    readonly organizationId: FieldRef<"Timesheet", 'String'>
    readonly projectId: FieldRef<"Timesheet", 'String'>
    readonly periodStart: FieldRef<"Timesheet", 'DateTime'>
    readonly periodEnd: FieldRef<"Timesheet", 'DateTime'>
    readonly totalHours: FieldRef<"Timesheet", 'Float'>
    readonly billableHours: FieldRef<"Timesheet", 'Float'>
    readonly status: FieldRef<"Timesheet", 'TimesheetStatus'>
    readonly notes: FieldRef<"Timesheet", 'String'>
    readonly submittedAt: FieldRef<"Timesheet", 'DateTime'>
    readonly approvedAt: FieldRef<"Timesheet", 'DateTime'>
    readonly approvedBy: FieldRef<"Timesheet", 'String'>
    readonly createdAt: FieldRef<"Timesheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Timesheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timesheet findUnique
   */
  export type TimesheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet findUniqueOrThrow
   */
  export type TimesheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet findFirst
   */
  export type TimesheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     */
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet findFirstOrThrow
   */
  export type TimesheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Filter, which Timesheet to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     */
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet findMany
   */
  export type TimesheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Filter, which Timesheets to fetch.
     */
    where?: TimesheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     */
    orderBy?: TimesheetOrderByWithRelationInput | TimesheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timesheets.
     */
    cursor?: TimesheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     */
    skip?: number
    distinct?: TimesheetScalarFieldEnum | TimesheetScalarFieldEnum[]
  }

  /**
   * Timesheet create
   */
  export type TimesheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * The data needed to create a Timesheet.
     */
    data: XOR<TimesheetCreateInput, TimesheetUncheckedCreateInput>
  }

  /**
   * Timesheet createMany
   */
  export type TimesheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timesheets.
     */
    data: TimesheetCreateManyInput | TimesheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timesheet createManyAndReturn
   */
  export type TimesheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timesheets.
     */
    data: TimesheetCreateManyInput | TimesheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timesheet update
   */
  export type TimesheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * The data needed to update a Timesheet.
     */
    data: XOR<TimesheetUpdateInput, TimesheetUncheckedUpdateInput>
    /**
     * Choose, which Timesheet to update.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet updateMany
   */
  export type TimesheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timesheets.
     */
    data: XOR<TimesheetUpdateManyMutationInput, TimesheetUncheckedUpdateManyInput>
    /**
     * Filter which Timesheets to update
     */
    where?: TimesheetWhereInput
  }

  /**
   * Timesheet upsert
   */
  export type TimesheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * The filter to search for the Timesheet to update in case it exists.
     */
    where: TimesheetWhereUniqueInput
    /**
     * In case the Timesheet found by the `where` argument doesn't exist, create a new Timesheet with this data.
     */
    create: XOR<TimesheetCreateInput, TimesheetUncheckedCreateInput>
    /**
     * In case the Timesheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimesheetUpdateInput, TimesheetUncheckedUpdateInput>
  }

  /**
   * Timesheet delete
   */
  export type TimesheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
    /**
     * Filter which Timesheet to delete.
     */
    where: TimesheetWhereUniqueInput
  }

  /**
   * Timesheet deleteMany
   */
  export type TimesheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timesheets to delete
     */
    where?: TimesheetWhereInput
  }

  /**
   * Timesheet without action
   */
  export type TimesheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timesheet
     */
    select?: TimesheetSelect<ExtArgs> | null
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


  export const TimeEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId',
    projectId: 'projectId',
    organizationId: 'organizationId',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    isBillable: 'isBillable',
    hourlyRate: 'hourlyRate',
    tags: 'tags',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TimeEntryScalarFieldEnum = (typeof TimeEntryScalarFieldEnum)[keyof typeof TimeEntryScalarFieldEnum]


  export const TimesheetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    projectId: 'projectId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    totalHours: 'totalHours',
    billableHours: 'billableHours',
    status: 'status',
    notes: 'notes',
    submittedAt: 'submittedAt',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimesheetScalarFieldEnum = (typeof TimesheetScalarFieldEnum)[keyof typeof TimesheetScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TimeEntryStatus'
   */
  export type EnumTimeEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeEntryStatus'>
    


  /**
   * Reference to a field of type 'TimeEntryStatus[]'
   */
  export type ListEnumTimeEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeEntryStatus[]'>
    


  /**
   * Reference to a field of type 'TimesheetStatus'
   */
  export type EnumTimesheetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimesheetStatus'>
    


  /**
   * Reference to a field of type 'TimesheetStatus[]'
   */
  export type ListEnumTimesheetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimesheetStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type TimeEntryWhereInput = {
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    id?: StringFilter<"TimeEntry"> | string
    userId?: StringFilter<"TimeEntry"> | string
    taskId?: StringNullableFilter<"TimeEntry"> | string | null
    projectId?: StringFilter<"TimeEntry"> | string
    organizationId?: StringFilter<"TimeEntry"> | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    startTime?: DateTimeFilter<"TimeEntry"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableFilter<"TimeEntry"> | number | null
    isBillable?: BoolFilter<"TimeEntry"> | boolean
    hourlyRate?: FloatNullableFilter<"TimeEntry"> | number | null
    tags?: StringNullableListFilter<"TimeEntry">
    status?: EnumTimeEntryStatusFilter<"TimeEntry"> | $Enums.TimeEntryStatus
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    updatedAt?: DateTimeFilter<"TimeEntry"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
  }

  export type TimeEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    organizationId?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    isBillable?: SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    tags?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type TimeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    userId?: StringFilter<"TimeEntry"> | string
    taskId?: StringNullableFilter<"TimeEntry"> | string | null
    projectId?: StringFilter<"TimeEntry"> | string
    organizationId?: StringFilter<"TimeEntry"> | string
    description?: StringNullableFilter<"TimeEntry"> | string | null
    startTime?: DateTimeFilter<"TimeEntry"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableFilter<"TimeEntry"> | number | null
    isBillable?: BoolFilter<"TimeEntry"> | boolean
    hourlyRate?: FloatNullableFilter<"TimeEntry"> | number | null
    tags?: StringNullableListFilter<"TimeEntry">
    status?: EnumTimeEntryStatusFilter<"TimeEntry"> | $Enums.TimeEntryStatus
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    updatedAt?: DateTimeFilter<"TimeEntry"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
  }, "id">

  export type TimeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    organizationId?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    isBillable?: SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    tags?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TimeEntryCountOrderByAggregateInput
    _avg?: TimeEntryAvgOrderByAggregateInput
    _max?: TimeEntryMaxOrderByAggregateInput
    _min?: TimeEntryMinOrderByAggregateInput
    _sum?: TimeEntrySumOrderByAggregateInput
  }

  export type TimeEntryScalarWhereWithAggregatesInput = {
    AND?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    OR?: TimeEntryScalarWhereWithAggregatesInput[]
    NOT?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeEntry"> | string
    userId?: StringWithAggregatesFilter<"TimeEntry"> | string
    taskId?: StringNullableWithAggregatesFilter<"TimeEntry"> | string | null
    projectId?: StringWithAggregatesFilter<"TimeEntry"> | string
    organizationId?: StringWithAggregatesFilter<"TimeEntry"> | string
    description?: StringNullableWithAggregatesFilter<"TimeEntry"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"TimeEntry"> | number | null
    isBillable?: BoolWithAggregatesFilter<"TimeEntry"> | boolean
    hourlyRate?: FloatNullableWithAggregatesFilter<"TimeEntry"> | number | null
    tags?: StringNullableListFilter<"TimeEntry">
    status?: EnumTimeEntryStatusWithAggregatesFilter<"TimeEntry"> | $Enums.TimeEntryStatus
    createdAt?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TimeEntry"> | Date | string | null
  }

  export type TimesheetWhereInput = {
    AND?: TimesheetWhereInput | TimesheetWhereInput[]
    OR?: TimesheetWhereInput[]
    NOT?: TimesheetWhereInput | TimesheetWhereInput[]
    id?: StringFilter<"Timesheet"> | string
    userId?: StringFilter<"Timesheet"> | string
    organizationId?: StringFilter<"Timesheet"> | string
    projectId?: StringNullableFilter<"Timesheet"> | string | null
    periodStart?: DateTimeFilter<"Timesheet"> | Date | string
    periodEnd?: DateTimeFilter<"Timesheet"> | Date | string
    totalHours?: FloatFilter<"Timesheet"> | number
    billableHours?: FloatFilter<"Timesheet"> | number
    status?: EnumTimesheetStatusFilter<"Timesheet"> | $Enums.TimesheetStatus
    notes?: StringNullableFilter<"Timesheet"> | string | null
    submittedAt?: DateTimeNullableFilter<"Timesheet"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Timesheet"> | Date | string | null
    approvedBy?: StringNullableFilter<"Timesheet"> | string | null
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
  }

  export type TimesheetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalHours?: SortOrder
    billableHours?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_periodStart_periodEnd?: TimesheetUserIdPeriodStartPeriodEndCompoundUniqueInput
    AND?: TimesheetWhereInput | TimesheetWhereInput[]
    OR?: TimesheetWhereInput[]
    NOT?: TimesheetWhereInput | TimesheetWhereInput[]
    userId?: StringFilter<"Timesheet"> | string
    organizationId?: StringFilter<"Timesheet"> | string
    projectId?: StringNullableFilter<"Timesheet"> | string | null
    periodStart?: DateTimeFilter<"Timesheet"> | Date | string
    periodEnd?: DateTimeFilter<"Timesheet"> | Date | string
    totalHours?: FloatFilter<"Timesheet"> | number
    billableHours?: FloatFilter<"Timesheet"> | number
    status?: EnumTimesheetStatusFilter<"Timesheet"> | $Enums.TimesheetStatus
    notes?: StringNullableFilter<"Timesheet"> | string | null
    submittedAt?: DateTimeNullableFilter<"Timesheet"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Timesheet"> | Date | string | null
    approvedBy?: StringNullableFilter<"Timesheet"> | string | null
    createdAt?: DateTimeFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeFilter<"Timesheet"> | Date | string
  }, "id" | "userId_periodStart_periodEnd">

  export type TimesheetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalHours?: SortOrder
    billableHours?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimesheetCountOrderByAggregateInput
    _avg?: TimesheetAvgOrderByAggregateInput
    _max?: TimesheetMaxOrderByAggregateInput
    _min?: TimesheetMinOrderByAggregateInput
    _sum?: TimesheetSumOrderByAggregateInput
  }

  export type TimesheetScalarWhereWithAggregatesInput = {
    AND?: TimesheetScalarWhereWithAggregatesInput | TimesheetScalarWhereWithAggregatesInput[]
    OR?: TimesheetScalarWhereWithAggregatesInput[]
    NOT?: TimesheetScalarWhereWithAggregatesInput | TimesheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timesheet"> | string
    userId?: StringWithAggregatesFilter<"Timesheet"> | string
    organizationId?: StringWithAggregatesFilter<"Timesheet"> | string
    projectId?: StringNullableWithAggregatesFilter<"Timesheet"> | string | null
    periodStart?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
    totalHours?: FloatWithAggregatesFilter<"Timesheet"> | number
    billableHours?: FloatWithAggregatesFilter<"Timesheet"> | number
    status?: EnumTimesheetStatusWithAggregatesFilter<"Timesheet"> | $Enums.TimesheetStatus
    notes?: StringNullableWithAggregatesFilter<"Timesheet"> | string | null
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Timesheet"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Timesheet"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Timesheet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Timesheet"> | Date | string
  }

  export type TimeEntryCreateInput = {
    id?: string
    userId: string
    taskId?: string | null
    projectId: string
    organizationId: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    isBillable?: boolean
    hourlyRate?: number | null
    tags?: TimeEntryCreatetagsInput | string[]
    status?: $Enums.TimeEntryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TimeEntryUncheckedCreateInput = {
    id?: string
    userId: string
    taskId?: string | null
    projectId: string
    organizationId: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    isBillable?: boolean
    hourlyRate?: number | null
    tags?: TimeEntryCreatetagsInput | string[]
    status?: $Enums.TimeEntryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TimeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isBillable?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: TimeEntryUpdatetagsInput | string[]
    status?: EnumTimeEntryStatusFieldUpdateOperationsInput | $Enums.TimeEntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isBillable?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: TimeEntryUpdatetagsInput | string[]
    status?: EnumTimeEntryStatusFieldUpdateOperationsInput | $Enums.TimeEntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimeEntryCreateManyInput = {
    id?: string
    userId: string
    taskId?: string | null
    projectId: string
    organizationId: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    isBillable?: boolean
    hourlyRate?: number | null
    tags?: TimeEntryCreatetagsInput | string[]
    status?: $Enums.TimeEntryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TimeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isBillable?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: TimeEntryUpdatetagsInput | string[]
    status?: EnumTimeEntryStatusFieldUpdateOperationsInput | $Enums.TimeEntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isBillable?: BoolFieldUpdateOperationsInput | boolean
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: TimeEntryUpdatetagsInput | string[]
    status?: EnumTimeEntryStatusFieldUpdateOperationsInput | $Enums.TimeEntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimesheetCreateInput = {
    id?: string
    userId: string
    organizationId: string
    projectId?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    totalHours?: number
    billableHours?: number
    status?: $Enums.TimesheetStatus
    notes?: string | null
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId: string
    projectId?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    totalHours?: number
    billableHours?: number
    status?: $Enums.TimesheetStatus
    notes?: string | null
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    billableHours?: FloatFieldUpdateOperationsInput | number
    status?: EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    billableHours?: FloatFieldUpdateOperationsInput | number
    status?: EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetCreateManyInput = {
    id?: string
    userId: string
    organizationId: string
    projectId?: string | null
    periodStart: Date | string
    periodEnd: Date | string
    totalHours?: number
    billableHours?: number
    status?: $Enums.TimesheetStatus
    notes?: string | null
    submittedAt?: Date | string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimesheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    billableHours?: FloatFieldUpdateOperationsInput | number
    status?: EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimesheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHours?: FloatFieldUpdateOperationsInput | number
    billableHours?: FloatFieldUpdateOperationsInput | number
    status?: EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTimeEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeEntryStatus | EnumTimeEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeEntryStatusFilter<$PrismaModel> | $Enums.TimeEntryStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TimeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    isBillable?: SortOrder
    hourlyRate?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TimeEntryAvgOrderByAggregateInput = {
    duration?: SortOrder
    hourlyRate?: SortOrder
  }

  export type TimeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    isBillable?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TimeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    isBillable?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TimeEntrySumOrderByAggregateInput = {
    duration?: SortOrder
    hourlyRate?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTimeEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeEntryStatus | EnumTimeEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimeEntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumTimeEntryStatusFilter<$PrismaModel>
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

  export type EnumTimesheetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | EnumTimesheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimesheetStatusFilter<$PrismaModel> | $Enums.TimesheetStatus
  }

  export type TimesheetUserIdPeriodStartPeriodEndCompoundUniqueInput = {
    userId: string
    periodStart: Date | string
    periodEnd: Date | string
  }

  export type TimesheetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalHours?: SortOrder
    billableHours?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetAvgOrderByAggregateInput = {
    totalHours?: SortOrder
    billableHours?: SortOrder
  }

  export type TimesheetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalHours?: SortOrder
    billableHours?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    projectId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalHours?: SortOrder
    billableHours?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimesheetSumOrderByAggregateInput = {
    totalHours?: SortOrder
    billableHours?: SortOrder
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

  export type EnumTimesheetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | EnumTimesheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimesheetStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimesheetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimesheetStatusFilter<$PrismaModel>
    _max?: NestedEnumTimesheetStatusFilter<$PrismaModel>
  }

  export type TimeEntryCreatetagsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimeEntryUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTimeEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.TimeEntryStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTimesheetStatusFieldUpdateOperationsInput = {
    set?: $Enums.TimesheetStatus
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

  export type NestedEnumTimeEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeEntryStatus | EnumTimeEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeEntryStatusFilter<$PrismaModel> | $Enums.TimeEntryStatus
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTimeEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeEntryStatus | EnumTimeEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeEntryStatus[] | ListEnumTimeEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimeEntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumTimeEntryStatusFilter<$PrismaModel>
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

  export type NestedEnumTimesheetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | EnumTimesheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimesheetStatusFilter<$PrismaModel> | $Enums.TimesheetStatus
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

  export type NestedEnumTimesheetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | EnumTimesheetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimesheetStatus[] | ListEnumTimesheetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimesheetStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimesheetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimesheetStatusFilter<$PrismaModel>
    _max?: NestedEnumTimesheetStatusFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TimeEntryDefaultArgs instead
     */
    export type TimeEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimesheetDefaultArgs instead
     */
    export type TimesheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimesheetDefaultArgs<ExtArgs>

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