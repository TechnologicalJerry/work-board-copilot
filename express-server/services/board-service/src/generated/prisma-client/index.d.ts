
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
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model BoardColumn
 * 
 */
export type BoardColumn = $Result.DefaultSelection<Prisma.$BoardColumnPayload>
/**
 * Model Swimlane
 * 
 */
export type Swimlane = $Result.DefaultSelection<Prisma.$SwimlanePayload>
/**
 * Model BoardFilter
 * 
 */
export type BoardFilter = $Result.DefaultSelection<Prisma.$BoardFilterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BoardType: {
  KANBAN: 'KANBAN',
  SCRUM: 'SCRUM',
  TIMELINE: 'TIMELINE',
  CALENDAR: 'CALENDAR',
  TABLE: 'TABLE'
};

export type BoardType = (typeof BoardType)[keyof typeof BoardType]

}

export type BoardType = $Enums.BoardType

export const BoardType: typeof $Enums.BoardType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boards
 * const boards = await prisma.board.findMany()
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
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
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
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs>;

  /**
   * `prisma.boardColumn`: Exposes CRUD operations for the **BoardColumn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardColumns
    * const boardColumns = await prisma.boardColumn.findMany()
    * ```
    */
  get boardColumn(): Prisma.BoardColumnDelegate<ExtArgs>;

  /**
   * `prisma.swimlane`: Exposes CRUD operations for the **Swimlane** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Swimlanes
    * const swimlanes = await prisma.swimlane.findMany()
    * ```
    */
  get swimlane(): Prisma.SwimlaneDelegate<ExtArgs>;

  /**
   * `prisma.boardFilter`: Exposes CRUD operations for the **BoardFilter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardFilters
    * const boardFilters = await prisma.boardFilter.findMany()
    * ```
    */
  get boardFilter(): Prisma.BoardFilterDelegate<ExtArgs>;
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
    Board: 'Board',
    BoardColumn: 'BoardColumn',
    Swimlane: 'Swimlane',
    BoardFilter: 'BoardFilter'
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
      modelProps: "board" | "boardColumn" | "swimlane" | "boardFilter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      BoardColumn: {
        payload: Prisma.$BoardColumnPayload<ExtArgs>
        fields: Prisma.BoardColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>
          }
          findFirst: {
            args: Prisma.BoardColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>
          }
          findMany: {
            args: Prisma.BoardColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>[]
          }
          create: {
            args: Prisma.BoardColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>
          }
          createMany: {
            args: Prisma.BoardColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>[]
          }
          delete: {
            args: Prisma.BoardColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>
          }
          update: {
            args: Prisma.BoardColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>
          }
          deleteMany: {
            args: Prisma.BoardColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardColumnPayload>
          }
          aggregate: {
            args: Prisma.BoardColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoardColumn>
          }
          groupBy: {
            args: Prisma.BoardColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardColumnCountArgs<ExtArgs>
            result: $Utils.Optional<BoardColumnCountAggregateOutputType> | number
          }
        }
      }
      Swimlane: {
        payload: Prisma.$SwimlanePayload<ExtArgs>
        fields: Prisma.SwimlaneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwimlaneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwimlaneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>
          }
          findFirst: {
            args: Prisma.SwimlaneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwimlaneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>
          }
          findMany: {
            args: Prisma.SwimlaneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>[]
          }
          create: {
            args: Prisma.SwimlaneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>
          }
          createMany: {
            args: Prisma.SwimlaneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwimlaneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>[]
          }
          delete: {
            args: Prisma.SwimlaneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>
          }
          update: {
            args: Prisma.SwimlaneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>
          }
          deleteMany: {
            args: Prisma.SwimlaneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwimlaneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SwimlaneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwimlanePayload>
          }
          aggregate: {
            args: Prisma.SwimlaneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwimlane>
          }
          groupBy: {
            args: Prisma.SwimlaneGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwimlaneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwimlaneCountArgs<ExtArgs>
            result: $Utils.Optional<SwimlaneCountAggregateOutputType> | number
          }
        }
      }
      BoardFilter: {
        payload: Prisma.$BoardFilterPayload<ExtArgs>
        fields: Prisma.BoardFilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>
          }
          findFirst: {
            args: Prisma.BoardFilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>
          }
          findMany: {
            args: Prisma.BoardFilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>[]
          }
          create: {
            args: Prisma.BoardFilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>
          }
          createMany: {
            args: Prisma.BoardFilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardFilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>[]
          }
          delete: {
            args: Prisma.BoardFilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>
          }
          update: {
            args: Prisma.BoardFilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>
          }
          deleteMany: {
            args: Prisma.BoardFilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardFilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardFilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardFilterPayload>
          }
          aggregate: {
            args: Prisma.BoardFilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoardFilter>
          }
          groupBy: {
            args: Prisma.BoardFilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardFilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardFilterCountArgs<ExtArgs>
            result: $Utils.Optional<BoardFilterCountAggregateOutputType> | number
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
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    columns: number
    swimlanes: number
    filters: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | BoardCountOutputTypeCountColumnsArgs
    swimlanes?: boolean | BoardCountOutputTypeCountSwimlanesArgs
    filters?: boolean | BoardCountOutputTypeCountFiltersArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardColumnWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountSwimlanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwimlaneWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardFilterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: $Enums.BoardType | null
    description: string | null
    isDefault: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: $Enums.BoardType | null
    description: string | null
    isDefault: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    type: number
    description: number
    isDefault: number
    settings: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BoardMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    description?: true
    isDefault?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    description?: true
    isDefault?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    description?: true
    isDefault?: true
    settings?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: string
    projectId: string
    name: string
    type: $Enums.BoardType
    description: string | null
    isDefault: boolean
    settings: JsonValue
    createdBy: string
    updatedBy: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    isDefault?: boolean
    settings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    columns?: boolean | Board$columnsArgs<ExtArgs>
    swimlanes?: boolean | Board$swimlanesArgs<ExtArgs>
    filters?: boolean | Board$filtersArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    isDefault?: boolean
    settings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    isDefault?: boolean
    settings?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | Board$columnsArgs<ExtArgs>
    swimlanes?: boolean | Board$swimlanesArgs<ExtArgs>
    filters?: boolean | Board$filtersArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      columns: Prisma.$BoardColumnPayload<ExtArgs>[]
      swimlanes: Prisma.$SwimlanePayload<ExtArgs>[]
      filters: Prisma.$BoardFilterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      type: $Enums.BoardType
      description: string | null
      isDefault: boolean
      settings: Prisma.JsonValue
      createdBy: string
      updatedBy: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    columns<T extends Board$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Board$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "findMany"> | Null>
    swimlanes<T extends Board$swimlanesArgs<ExtArgs> = {}>(args?: Subset<T, Board$swimlanesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "findMany"> | Null>
    filters<T extends Board$filtersArgs<ExtArgs> = {}>(args?: Subset<T, Board$filtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Board model
   */ 
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'String'>
    readonly projectId: FieldRef<"Board", 'String'>
    readonly name: FieldRef<"Board", 'String'>
    readonly type: FieldRef<"Board", 'BoardType'>
    readonly description: FieldRef<"Board", 'String'>
    readonly isDefault: FieldRef<"Board", 'Boolean'>
    readonly settings: FieldRef<"Board", 'Json'>
    readonly createdBy: FieldRef<"Board", 'String'>
    readonly updatedBy: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
    readonly deletedAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }

  /**
   * Board.columns
   */
  export type Board$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    where?: BoardColumnWhereInput
    orderBy?: BoardColumnOrderByWithRelationInput | BoardColumnOrderByWithRelationInput[]
    cursor?: BoardColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardColumnScalarFieldEnum | BoardColumnScalarFieldEnum[]
  }

  /**
   * Board.swimlanes
   */
  export type Board$swimlanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    where?: SwimlaneWhereInput
    orderBy?: SwimlaneOrderByWithRelationInput | SwimlaneOrderByWithRelationInput[]
    cursor?: SwimlaneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwimlaneScalarFieldEnum | SwimlaneScalarFieldEnum[]
  }

  /**
   * Board.filters
   */
  export type Board$filtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    where?: BoardFilterWhereInput
    orderBy?: BoardFilterOrderByWithRelationInput | BoardFilterOrderByWithRelationInput[]
    cursor?: BoardFilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardFilterScalarFieldEnum | BoardFilterScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model BoardColumn
   */

  export type AggregateBoardColumn = {
    _count: BoardColumnCountAggregateOutputType | null
    _avg: BoardColumnAvgAggregateOutputType | null
    _sum: BoardColumnSumAggregateOutputType | null
    _min: BoardColumnMinAggregateOutputType | null
    _max: BoardColumnMaxAggregateOutputType | null
  }

  export type BoardColumnAvgAggregateOutputType = {
    wip: number | null
    position: number | null
  }

  export type BoardColumnSumAggregateOutputType = {
    wip: number | null
    position: number | null
  }

  export type BoardColumnMinAggregateOutputType = {
    id: string | null
    boardId: string | null
    name: string | null
    color: string | null
    wip: number | null
    position: number | null
    taskStatus: string | null
    isDone: boolean | null
    isCollapsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardColumnMaxAggregateOutputType = {
    id: string | null
    boardId: string | null
    name: string | null
    color: string | null
    wip: number | null
    position: number | null
    taskStatus: string | null
    isDone: boolean | null
    isCollapsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardColumnCountAggregateOutputType = {
    id: number
    boardId: number
    name: number
    color: number
    wip: number
    position: number
    taskStatus: number
    isDone: number
    isCollapsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardColumnAvgAggregateInputType = {
    wip?: true
    position?: true
  }

  export type BoardColumnSumAggregateInputType = {
    wip?: true
    position?: true
  }

  export type BoardColumnMinAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    wip?: true
    position?: true
    taskStatus?: true
    isDone?: true
    isCollapsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardColumnMaxAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    wip?: true
    position?: true
    taskStatus?: true
    isDone?: true
    isCollapsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardColumnCountAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    wip?: true
    position?: true
    taskStatus?: true
    isDone?: true
    isCollapsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardColumn to aggregate.
     */
    where?: BoardColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardColumns to fetch.
     */
    orderBy?: BoardColumnOrderByWithRelationInput | BoardColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardColumns
    **/
    _count?: true | BoardColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardColumnMaxAggregateInputType
  }

  export type GetBoardColumnAggregateType<T extends BoardColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardColumn[P]>
      : GetScalarType<T[P], AggregateBoardColumn[P]>
  }




  export type BoardColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardColumnWhereInput
    orderBy?: BoardColumnOrderByWithAggregationInput | BoardColumnOrderByWithAggregationInput[]
    by: BoardColumnScalarFieldEnum[] | BoardColumnScalarFieldEnum
    having?: BoardColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardColumnCountAggregateInputType | true
    _avg?: BoardColumnAvgAggregateInputType
    _sum?: BoardColumnSumAggregateInputType
    _min?: BoardColumnMinAggregateInputType
    _max?: BoardColumnMaxAggregateInputType
  }

  export type BoardColumnGroupByOutputType = {
    id: string
    boardId: string
    name: string
    color: string | null
    wip: number | null
    position: number
    taskStatus: string
    isDone: boolean
    isCollapsed: boolean
    createdAt: Date
    updatedAt: Date
    _count: BoardColumnCountAggregateOutputType | null
    _avg: BoardColumnAvgAggregateOutputType | null
    _sum: BoardColumnSumAggregateOutputType | null
    _min: BoardColumnMinAggregateOutputType | null
    _max: BoardColumnMaxAggregateOutputType | null
  }

  type GetBoardColumnGroupByPayload<T extends BoardColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardColumnGroupByOutputType[P]>
            : GetScalarType<T[P], BoardColumnGroupByOutputType[P]>
        }
      >
    >


  export type BoardColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    wip?: boolean
    position?: boolean
    taskStatus?: boolean
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardColumn"]>

  export type BoardColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    wip?: boolean
    position?: boolean
    taskStatus?: boolean
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardColumn"]>

  export type BoardColumnSelectScalar = {
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    wip?: boolean
    position?: boolean
    taskStatus?: boolean
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoardColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type BoardColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $BoardColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoardColumn"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      boardId: string
      name: string
      color: string | null
      wip: number | null
      position: number
      taskStatus: string
      isDone: boolean
      isCollapsed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boardColumn"]>
    composites: {}
  }

  type BoardColumnGetPayload<S extends boolean | null | undefined | BoardColumnDefaultArgs> = $Result.GetResult<Prisma.$BoardColumnPayload, S>

  type BoardColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardColumnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardColumnCountAggregateInputType | true
    }

  export interface BoardColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoardColumn'], meta: { name: 'BoardColumn' } }
    /**
     * Find zero or one BoardColumn that matches the filter.
     * @param {BoardColumnFindUniqueArgs} args - Arguments to find a BoardColumn
     * @example
     * // Get one BoardColumn
     * const boardColumn = await prisma.boardColumn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardColumnFindUniqueArgs>(args: SelectSubset<T, BoardColumnFindUniqueArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BoardColumn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardColumnFindUniqueOrThrowArgs} args - Arguments to find a BoardColumn
     * @example
     * // Get one BoardColumn
     * const boardColumn = await prisma.boardColumn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BoardColumn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnFindFirstArgs} args - Arguments to find a BoardColumn
     * @example
     * // Get one BoardColumn
     * const boardColumn = await prisma.boardColumn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardColumnFindFirstArgs>(args?: SelectSubset<T, BoardColumnFindFirstArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BoardColumn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnFindFirstOrThrowArgs} args - Arguments to find a BoardColumn
     * @example
     * // Get one BoardColumn
     * const boardColumn = await prisma.boardColumn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BoardColumns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardColumns
     * const boardColumns = await prisma.boardColumn.findMany()
     * 
     * // Get first 10 BoardColumns
     * const boardColumns = await prisma.boardColumn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardColumnWithIdOnly = await prisma.boardColumn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardColumnFindManyArgs>(args?: SelectSubset<T, BoardColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BoardColumn.
     * @param {BoardColumnCreateArgs} args - Arguments to create a BoardColumn.
     * @example
     * // Create one BoardColumn
     * const BoardColumn = await prisma.boardColumn.create({
     *   data: {
     *     // ... data to create a BoardColumn
     *   }
     * })
     * 
     */
    create<T extends BoardColumnCreateArgs>(args: SelectSubset<T, BoardColumnCreateArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BoardColumns.
     * @param {BoardColumnCreateManyArgs} args - Arguments to create many BoardColumns.
     * @example
     * // Create many BoardColumns
     * const boardColumn = await prisma.boardColumn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardColumnCreateManyArgs>(args?: SelectSubset<T, BoardColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoardColumns and returns the data saved in the database.
     * @param {BoardColumnCreateManyAndReturnArgs} args - Arguments to create many BoardColumns.
     * @example
     * // Create many BoardColumns
     * const boardColumn = await prisma.boardColumn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoardColumns and only return the `id`
     * const boardColumnWithIdOnly = await prisma.boardColumn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BoardColumn.
     * @param {BoardColumnDeleteArgs} args - Arguments to delete one BoardColumn.
     * @example
     * // Delete one BoardColumn
     * const BoardColumn = await prisma.boardColumn.delete({
     *   where: {
     *     // ... filter to delete one BoardColumn
     *   }
     * })
     * 
     */
    delete<T extends BoardColumnDeleteArgs>(args: SelectSubset<T, BoardColumnDeleteArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BoardColumn.
     * @param {BoardColumnUpdateArgs} args - Arguments to update one BoardColumn.
     * @example
     * // Update one BoardColumn
     * const boardColumn = await prisma.boardColumn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardColumnUpdateArgs>(args: SelectSubset<T, BoardColumnUpdateArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BoardColumns.
     * @param {BoardColumnDeleteManyArgs} args - Arguments to filter BoardColumns to delete.
     * @example
     * // Delete a few BoardColumns
     * const { count } = await prisma.boardColumn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardColumnDeleteManyArgs>(args?: SelectSubset<T, BoardColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardColumns
     * const boardColumn = await prisma.boardColumn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardColumnUpdateManyArgs>(args: SelectSubset<T, BoardColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardColumn.
     * @param {BoardColumnUpsertArgs} args - Arguments to update or create a BoardColumn.
     * @example
     * // Update or create a BoardColumn
     * const boardColumn = await prisma.boardColumn.upsert({
     *   create: {
     *     // ... data to create a BoardColumn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardColumn we want to update
     *   }
     * })
     */
    upsert<T extends BoardColumnUpsertArgs>(args: SelectSubset<T, BoardColumnUpsertArgs<ExtArgs>>): Prisma__BoardColumnClient<$Result.GetResult<Prisma.$BoardColumnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BoardColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnCountArgs} args - Arguments to filter BoardColumns to count.
     * @example
     * // Count the number of BoardColumns
     * const count = await prisma.boardColumn.count({
     *   where: {
     *     // ... the filter for the BoardColumns we want to count
     *   }
     * })
    **/
    count<T extends BoardColumnCountArgs>(
      args?: Subset<T, BoardColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardColumnAggregateArgs>(args: Subset<T, BoardColumnAggregateArgs>): Prisma.PrismaPromise<GetBoardColumnAggregateType<T>>

    /**
     * Group by BoardColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardColumnGroupByArgs} args - Group by arguments.
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
      T extends BoardColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardColumnGroupByArgs['orderBy'] }
        : { orderBy?: BoardColumnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoardColumn model
   */
  readonly fields: BoardColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardColumn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BoardColumn model
   */ 
  interface BoardColumnFieldRefs {
    readonly id: FieldRef<"BoardColumn", 'String'>
    readonly boardId: FieldRef<"BoardColumn", 'String'>
    readonly name: FieldRef<"BoardColumn", 'String'>
    readonly color: FieldRef<"BoardColumn", 'String'>
    readonly wip: FieldRef<"BoardColumn", 'Int'>
    readonly position: FieldRef<"BoardColumn", 'Int'>
    readonly taskStatus: FieldRef<"BoardColumn", 'String'>
    readonly isDone: FieldRef<"BoardColumn", 'Boolean'>
    readonly isCollapsed: FieldRef<"BoardColumn", 'Boolean'>
    readonly createdAt: FieldRef<"BoardColumn", 'DateTime'>
    readonly updatedAt: FieldRef<"BoardColumn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoardColumn findUnique
   */
  export type BoardColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * Filter, which BoardColumn to fetch.
     */
    where: BoardColumnWhereUniqueInput
  }

  /**
   * BoardColumn findUniqueOrThrow
   */
  export type BoardColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * Filter, which BoardColumn to fetch.
     */
    where: BoardColumnWhereUniqueInput
  }

  /**
   * BoardColumn findFirst
   */
  export type BoardColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * Filter, which BoardColumn to fetch.
     */
    where?: BoardColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardColumns to fetch.
     */
    orderBy?: BoardColumnOrderByWithRelationInput | BoardColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardColumns.
     */
    cursor?: BoardColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardColumns.
     */
    distinct?: BoardColumnScalarFieldEnum | BoardColumnScalarFieldEnum[]
  }

  /**
   * BoardColumn findFirstOrThrow
   */
  export type BoardColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * Filter, which BoardColumn to fetch.
     */
    where?: BoardColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardColumns to fetch.
     */
    orderBy?: BoardColumnOrderByWithRelationInput | BoardColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardColumns.
     */
    cursor?: BoardColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardColumns.
     */
    distinct?: BoardColumnScalarFieldEnum | BoardColumnScalarFieldEnum[]
  }

  /**
   * BoardColumn findMany
   */
  export type BoardColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * Filter, which BoardColumns to fetch.
     */
    where?: BoardColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardColumns to fetch.
     */
    orderBy?: BoardColumnOrderByWithRelationInput | BoardColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardColumns.
     */
    cursor?: BoardColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardColumns.
     */
    skip?: number
    distinct?: BoardColumnScalarFieldEnum | BoardColumnScalarFieldEnum[]
  }

  /**
   * BoardColumn create
   */
  export type BoardColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a BoardColumn.
     */
    data: XOR<BoardColumnCreateInput, BoardColumnUncheckedCreateInput>
  }

  /**
   * BoardColumn createMany
   */
  export type BoardColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardColumns.
     */
    data: BoardColumnCreateManyInput | BoardColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoardColumn createManyAndReturn
   */
  export type BoardColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BoardColumns.
     */
    data: BoardColumnCreateManyInput | BoardColumnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoardColumn update
   */
  export type BoardColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a BoardColumn.
     */
    data: XOR<BoardColumnUpdateInput, BoardColumnUncheckedUpdateInput>
    /**
     * Choose, which BoardColumn to update.
     */
    where: BoardColumnWhereUniqueInput
  }

  /**
   * BoardColumn updateMany
   */
  export type BoardColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoardColumns.
     */
    data: XOR<BoardColumnUpdateManyMutationInput, BoardColumnUncheckedUpdateManyInput>
    /**
     * Filter which BoardColumns to update
     */
    where?: BoardColumnWhereInput
  }

  /**
   * BoardColumn upsert
   */
  export type BoardColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the BoardColumn to update in case it exists.
     */
    where: BoardColumnWhereUniqueInput
    /**
     * In case the BoardColumn found by the `where` argument doesn't exist, create a new BoardColumn with this data.
     */
    create: XOR<BoardColumnCreateInput, BoardColumnUncheckedCreateInput>
    /**
     * In case the BoardColumn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardColumnUpdateInput, BoardColumnUncheckedUpdateInput>
  }

  /**
   * BoardColumn delete
   */
  export type BoardColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
    /**
     * Filter which BoardColumn to delete.
     */
    where: BoardColumnWhereUniqueInput
  }

  /**
   * BoardColumn deleteMany
   */
  export type BoardColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardColumns to delete
     */
    where?: BoardColumnWhereInput
  }

  /**
   * BoardColumn without action
   */
  export type BoardColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardColumn
     */
    select?: BoardColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardColumnInclude<ExtArgs> | null
  }


  /**
   * Model Swimlane
   */

  export type AggregateSwimlane = {
    _count: SwimlaneCountAggregateOutputType | null
    _avg: SwimlaneAvgAggregateOutputType | null
    _sum: SwimlaneSumAggregateOutputType | null
    _min: SwimlaneMinAggregateOutputType | null
    _max: SwimlaneMaxAggregateOutputType | null
  }

  export type SwimlaneAvgAggregateOutputType = {
    position: number | null
  }

  export type SwimlaneSumAggregateOutputType = {
    position: number | null
  }

  export type SwimlaneMinAggregateOutputType = {
    id: string | null
    boardId: string | null
    name: string | null
    color: string | null
    position: number | null
    isCollapsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SwimlaneMaxAggregateOutputType = {
    id: string | null
    boardId: string | null
    name: string | null
    color: string | null
    position: number | null
    isCollapsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SwimlaneCountAggregateOutputType = {
    id: number
    boardId: number
    name: number
    color: number
    position: number
    query: number
    isCollapsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SwimlaneAvgAggregateInputType = {
    position?: true
  }

  export type SwimlaneSumAggregateInputType = {
    position?: true
  }

  export type SwimlaneMinAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    position?: true
    isCollapsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SwimlaneMaxAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    position?: true
    isCollapsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SwimlaneCountAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    position?: true
    query?: true
    isCollapsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SwimlaneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swimlane to aggregate.
     */
    where?: SwimlaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swimlanes to fetch.
     */
    orderBy?: SwimlaneOrderByWithRelationInput | SwimlaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwimlaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swimlanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swimlanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Swimlanes
    **/
    _count?: true | SwimlaneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwimlaneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwimlaneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwimlaneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwimlaneMaxAggregateInputType
  }

  export type GetSwimlaneAggregateType<T extends SwimlaneAggregateArgs> = {
        [P in keyof T & keyof AggregateSwimlane]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwimlane[P]>
      : GetScalarType<T[P], AggregateSwimlane[P]>
  }




  export type SwimlaneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwimlaneWhereInput
    orderBy?: SwimlaneOrderByWithAggregationInput | SwimlaneOrderByWithAggregationInput[]
    by: SwimlaneScalarFieldEnum[] | SwimlaneScalarFieldEnum
    having?: SwimlaneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwimlaneCountAggregateInputType | true
    _avg?: SwimlaneAvgAggregateInputType
    _sum?: SwimlaneSumAggregateInputType
    _min?: SwimlaneMinAggregateInputType
    _max?: SwimlaneMaxAggregateInputType
  }

  export type SwimlaneGroupByOutputType = {
    id: string
    boardId: string
    name: string
    color: string | null
    position: number
    query: JsonValue | null
    isCollapsed: boolean
    createdAt: Date
    updatedAt: Date
    _count: SwimlaneCountAggregateOutputType | null
    _avg: SwimlaneAvgAggregateOutputType | null
    _sum: SwimlaneSumAggregateOutputType | null
    _min: SwimlaneMinAggregateOutputType | null
    _max: SwimlaneMaxAggregateOutputType | null
  }

  type GetSwimlaneGroupByPayload<T extends SwimlaneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwimlaneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwimlaneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwimlaneGroupByOutputType[P]>
            : GetScalarType<T[P], SwimlaneGroupByOutputType[P]>
        }
      >
    >


  export type SwimlaneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    position?: boolean
    query?: boolean
    isCollapsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swimlane"]>

  export type SwimlaneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    position?: boolean
    query?: boolean
    isCollapsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swimlane"]>

  export type SwimlaneSelectScalar = {
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    position?: boolean
    query?: boolean
    isCollapsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SwimlaneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type SwimlaneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $SwimlanePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Swimlane"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      boardId: string
      name: string
      color: string | null
      position: number
      query: Prisma.JsonValue | null
      isCollapsed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["swimlane"]>
    composites: {}
  }

  type SwimlaneGetPayload<S extends boolean | null | undefined | SwimlaneDefaultArgs> = $Result.GetResult<Prisma.$SwimlanePayload, S>

  type SwimlaneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SwimlaneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SwimlaneCountAggregateInputType | true
    }

  export interface SwimlaneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Swimlane'], meta: { name: 'Swimlane' } }
    /**
     * Find zero or one Swimlane that matches the filter.
     * @param {SwimlaneFindUniqueArgs} args - Arguments to find a Swimlane
     * @example
     * // Get one Swimlane
     * const swimlane = await prisma.swimlane.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwimlaneFindUniqueArgs>(args: SelectSubset<T, SwimlaneFindUniqueArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Swimlane that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SwimlaneFindUniqueOrThrowArgs} args - Arguments to find a Swimlane
     * @example
     * // Get one Swimlane
     * const swimlane = await prisma.swimlane.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwimlaneFindUniqueOrThrowArgs>(args: SelectSubset<T, SwimlaneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Swimlane that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneFindFirstArgs} args - Arguments to find a Swimlane
     * @example
     * // Get one Swimlane
     * const swimlane = await prisma.swimlane.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwimlaneFindFirstArgs>(args?: SelectSubset<T, SwimlaneFindFirstArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Swimlane that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneFindFirstOrThrowArgs} args - Arguments to find a Swimlane
     * @example
     * // Get one Swimlane
     * const swimlane = await prisma.swimlane.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwimlaneFindFirstOrThrowArgs>(args?: SelectSubset<T, SwimlaneFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Swimlanes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Swimlanes
     * const swimlanes = await prisma.swimlane.findMany()
     * 
     * // Get first 10 Swimlanes
     * const swimlanes = await prisma.swimlane.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swimlaneWithIdOnly = await prisma.swimlane.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwimlaneFindManyArgs>(args?: SelectSubset<T, SwimlaneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Swimlane.
     * @param {SwimlaneCreateArgs} args - Arguments to create a Swimlane.
     * @example
     * // Create one Swimlane
     * const Swimlane = await prisma.swimlane.create({
     *   data: {
     *     // ... data to create a Swimlane
     *   }
     * })
     * 
     */
    create<T extends SwimlaneCreateArgs>(args: SelectSubset<T, SwimlaneCreateArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Swimlanes.
     * @param {SwimlaneCreateManyArgs} args - Arguments to create many Swimlanes.
     * @example
     * // Create many Swimlanes
     * const swimlane = await prisma.swimlane.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwimlaneCreateManyArgs>(args?: SelectSubset<T, SwimlaneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Swimlanes and returns the data saved in the database.
     * @param {SwimlaneCreateManyAndReturnArgs} args - Arguments to create many Swimlanes.
     * @example
     * // Create many Swimlanes
     * const swimlane = await prisma.swimlane.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Swimlanes and only return the `id`
     * const swimlaneWithIdOnly = await prisma.swimlane.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwimlaneCreateManyAndReturnArgs>(args?: SelectSubset<T, SwimlaneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Swimlane.
     * @param {SwimlaneDeleteArgs} args - Arguments to delete one Swimlane.
     * @example
     * // Delete one Swimlane
     * const Swimlane = await prisma.swimlane.delete({
     *   where: {
     *     // ... filter to delete one Swimlane
     *   }
     * })
     * 
     */
    delete<T extends SwimlaneDeleteArgs>(args: SelectSubset<T, SwimlaneDeleteArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Swimlane.
     * @param {SwimlaneUpdateArgs} args - Arguments to update one Swimlane.
     * @example
     * // Update one Swimlane
     * const swimlane = await prisma.swimlane.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwimlaneUpdateArgs>(args: SelectSubset<T, SwimlaneUpdateArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Swimlanes.
     * @param {SwimlaneDeleteManyArgs} args - Arguments to filter Swimlanes to delete.
     * @example
     * // Delete a few Swimlanes
     * const { count } = await prisma.swimlane.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwimlaneDeleteManyArgs>(args?: SelectSubset<T, SwimlaneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swimlanes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Swimlanes
     * const swimlane = await prisma.swimlane.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwimlaneUpdateManyArgs>(args: SelectSubset<T, SwimlaneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Swimlane.
     * @param {SwimlaneUpsertArgs} args - Arguments to update or create a Swimlane.
     * @example
     * // Update or create a Swimlane
     * const swimlane = await prisma.swimlane.upsert({
     *   create: {
     *     // ... data to create a Swimlane
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Swimlane we want to update
     *   }
     * })
     */
    upsert<T extends SwimlaneUpsertArgs>(args: SelectSubset<T, SwimlaneUpsertArgs<ExtArgs>>): Prisma__SwimlaneClient<$Result.GetResult<Prisma.$SwimlanePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Swimlanes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneCountArgs} args - Arguments to filter Swimlanes to count.
     * @example
     * // Count the number of Swimlanes
     * const count = await prisma.swimlane.count({
     *   where: {
     *     // ... the filter for the Swimlanes we want to count
     *   }
     * })
    **/
    count<T extends SwimlaneCountArgs>(
      args?: Subset<T, SwimlaneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwimlaneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Swimlane.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SwimlaneAggregateArgs>(args: Subset<T, SwimlaneAggregateArgs>): Prisma.PrismaPromise<GetSwimlaneAggregateType<T>>

    /**
     * Group by Swimlane.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwimlaneGroupByArgs} args - Group by arguments.
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
      T extends SwimlaneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwimlaneGroupByArgs['orderBy'] }
        : { orderBy?: SwimlaneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SwimlaneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwimlaneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Swimlane model
   */
  readonly fields: SwimlaneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Swimlane.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwimlaneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Swimlane model
   */ 
  interface SwimlaneFieldRefs {
    readonly id: FieldRef<"Swimlane", 'String'>
    readonly boardId: FieldRef<"Swimlane", 'String'>
    readonly name: FieldRef<"Swimlane", 'String'>
    readonly color: FieldRef<"Swimlane", 'String'>
    readonly position: FieldRef<"Swimlane", 'Int'>
    readonly query: FieldRef<"Swimlane", 'Json'>
    readonly isCollapsed: FieldRef<"Swimlane", 'Boolean'>
    readonly createdAt: FieldRef<"Swimlane", 'DateTime'>
    readonly updatedAt: FieldRef<"Swimlane", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Swimlane findUnique
   */
  export type SwimlaneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * Filter, which Swimlane to fetch.
     */
    where: SwimlaneWhereUniqueInput
  }

  /**
   * Swimlane findUniqueOrThrow
   */
  export type SwimlaneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * Filter, which Swimlane to fetch.
     */
    where: SwimlaneWhereUniqueInput
  }

  /**
   * Swimlane findFirst
   */
  export type SwimlaneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * Filter, which Swimlane to fetch.
     */
    where?: SwimlaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swimlanes to fetch.
     */
    orderBy?: SwimlaneOrderByWithRelationInput | SwimlaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swimlanes.
     */
    cursor?: SwimlaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swimlanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swimlanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swimlanes.
     */
    distinct?: SwimlaneScalarFieldEnum | SwimlaneScalarFieldEnum[]
  }

  /**
   * Swimlane findFirstOrThrow
   */
  export type SwimlaneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * Filter, which Swimlane to fetch.
     */
    where?: SwimlaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swimlanes to fetch.
     */
    orderBy?: SwimlaneOrderByWithRelationInput | SwimlaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swimlanes.
     */
    cursor?: SwimlaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swimlanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swimlanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swimlanes.
     */
    distinct?: SwimlaneScalarFieldEnum | SwimlaneScalarFieldEnum[]
  }

  /**
   * Swimlane findMany
   */
  export type SwimlaneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * Filter, which Swimlanes to fetch.
     */
    where?: SwimlaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swimlanes to fetch.
     */
    orderBy?: SwimlaneOrderByWithRelationInput | SwimlaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Swimlanes.
     */
    cursor?: SwimlaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swimlanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swimlanes.
     */
    skip?: number
    distinct?: SwimlaneScalarFieldEnum | SwimlaneScalarFieldEnum[]
  }

  /**
   * Swimlane create
   */
  export type SwimlaneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * The data needed to create a Swimlane.
     */
    data: XOR<SwimlaneCreateInput, SwimlaneUncheckedCreateInput>
  }

  /**
   * Swimlane createMany
   */
  export type SwimlaneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Swimlanes.
     */
    data: SwimlaneCreateManyInput | SwimlaneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Swimlane createManyAndReturn
   */
  export type SwimlaneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Swimlanes.
     */
    data: SwimlaneCreateManyInput | SwimlaneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swimlane update
   */
  export type SwimlaneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * The data needed to update a Swimlane.
     */
    data: XOR<SwimlaneUpdateInput, SwimlaneUncheckedUpdateInput>
    /**
     * Choose, which Swimlane to update.
     */
    where: SwimlaneWhereUniqueInput
  }

  /**
   * Swimlane updateMany
   */
  export type SwimlaneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Swimlanes.
     */
    data: XOR<SwimlaneUpdateManyMutationInput, SwimlaneUncheckedUpdateManyInput>
    /**
     * Filter which Swimlanes to update
     */
    where?: SwimlaneWhereInput
  }

  /**
   * Swimlane upsert
   */
  export type SwimlaneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * The filter to search for the Swimlane to update in case it exists.
     */
    where: SwimlaneWhereUniqueInput
    /**
     * In case the Swimlane found by the `where` argument doesn't exist, create a new Swimlane with this data.
     */
    create: XOR<SwimlaneCreateInput, SwimlaneUncheckedCreateInput>
    /**
     * In case the Swimlane was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwimlaneUpdateInput, SwimlaneUncheckedUpdateInput>
  }

  /**
   * Swimlane delete
   */
  export type SwimlaneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
    /**
     * Filter which Swimlane to delete.
     */
    where: SwimlaneWhereUniqueInput
  }

  /**
   * Swimlane deleteMany
   */
  export type SwimlaneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swimlanes to delete
     */
    where?: SwimlaneWhereInput
  }

  /**
   * Swimlane without action
   */
  export type SwimlaneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swimlane
     */
    select?: SwimlaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwimlaneInclude<ExtArgs> | null
  }


  /**
   * Model BoardFilter
   */

  export type AggregateBoardFilter = {
    _count: BoardFilterCountAggregateOutputType | null
    _min: BoardFilterMinAggregateOutputType | null
    _max: BoardFilterMaxAggregateOutputType | null
  }

  export type BoardFilterMinAggregateOutputType = {
    id: string | null
    boardId: string | null
    userId: string | null
    name: string | null
    isDefault: boolean | null
    isShared: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardFilterMaxAggregateOutputType = {
    id: string | null
    boardId: string | null
    userId: string | null
    name: string | null
    isDefault: boolean | null
    isShared: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardFilterCountAggregateOutputType = {
    id: number
    boardId: number
    userId: number
    name: number
    filters: number
    isDefault: number
    isShared: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardFilterMinAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
    name?: true
    isDefault?: true
    isShared?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardFilterMaxAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
    name?: true
    isDefault?: true
    isShared?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardFilterCountAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
    name?: true
    filters?: true
    isDefault?: true
    isShared?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardFilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardFilter to aggregate.
     */
    where?: BoardFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardFilters to fetch.
     */
    orderBy?: BoardFilterOrderByWithRelationInput | BoardFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardFilters
    **/
    _count?: true | BoardFilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardFilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardFilterMaxAggregateInputType
  }

  export type GetBoardFilterAggregateType<T extends BoardFilterAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardFilter[P]>
      : GetScalarType<T[P], AggregateBoardFilter[P]>
  }




  export type BoardFilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardFilterWhereInput
    orderBy?: BoardFilterOrderByWithAggregationInput | BoardFilterOrderByWithAggregationInput[]
    by: BoardFilterScalarFieldEnum[] | BoardFilterScalarFieldEnum
    having?: BoardFilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardFilterCountAggregateInputType | true
    _min?: BoardFilterMinAggregateInputType
    _max?: BoardFilterMaxAggregateInputType
  }

  export type BoardFilterGroupByOutputType = {
    id: string
    boardId: string
    userId: string
    name: string
    filters: JsonValue
    isDefault: boolean
    isShared: boolean
    createdAt: Date
    updatedAt: Date
    _count: BoardFilterCountAggregateOutputType | null
    _min: BoardFilterMinAggregateOutputType | null
    _max: BoardFilterMaxAggregateOutputType | null
  }

  type GetBoardFilterGroupByPayload<T extends BoardFilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardFilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardFilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardFilterGroupByOutputType[P]>
            : GetScalarType<T[P], BoardFilterGroupByOutputType[P]>
        }
      >
    >


  export type BoardFilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    userId?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
    isShared?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardFilter"]>

  export type BoardFilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    userId?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
    isShared?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardFilter"]>

  export type BoardFilterSelectScalar = {
    id?: boolean
    boardId?: boolean
    userId?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
    isShared?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoardFilterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type BoardFilterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $BoardFilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoardFilter"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      boardId: string
      userId: string
      name: string
      filters: Prisma.JsonValue
      isDefault: boolean
      isShared: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["boardFilter"]>
    composites: {}
  }

  type BoardFilterGetPayload<S extends boolean | null | undefined | BoardFilterDefaultArgs> = $Result.GetResult<Prisma.$BoardFilterPayload, S>

  type BoardFilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardFilterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardFilterCountAggregateInputType | true
    }

  export interface BoardFilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoardFilter'], meta: { name: 'BoardFilter' } }
    /**
     * Find zero or one BoardFilter that matches the filter.
     * @param {BoardFilterFindUniqueArgs} args - Arguments to find a BoardFilter
     * @example
     * // Get one BoardFilter
     * const boardFilter = await prisma.boardFilter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFilterFindUniqueArgs>(args: SelectSubset<T, BoardFilterFindUniqueArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BoardFilter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardFilterFindUniqueOrThrowArgs} args - Arguments to find a BoardFilter
     * @example
     * // Get one BoardFilter
     * const boardFilter = await prisma.boardFilter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFilterFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BoardFilter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterFindFirstArgs} args - Arguments to find a BoardFilter
     * @example
     * // Get one BoardFilter
     * const boardFilter = await prisma.boardFilter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFilterFindFirstArgs>(args?: SelectSubset<T, BoardFilterFindFirstArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BoardFilter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterFindFirstOrThrowArgs} args - Arguments to find a BoardFilter
     * @example
     * // Get one BoardFilter
     * const boardFilter = await prisma.boardFilter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFilterFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BoardFilters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardFilters
     * const boardFilters = await prisma.boardFilter.findMany()
     * 
     * // Get first 10 BoardFilters
     * const boardFilters = await prisma.boardFilter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardFilterWithIdOnly = await prisma.boardFilter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFilterFindManyArgs>(args?: SelectSubset<T, BoardFilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BoardFilter.
     * @param {BoardFilterCreateArgs} args - Arguments to create a BoardFilter.
     * @example
     * // Create one BoardFilter
     * const BoardFilter = await prisma.boardFilter.create({
     *   data: {
     *     // ... data to create a BoardFilter
     *   }
     * })
     * 
     */
    create<T extends BoardFilterCreateArgs>(args: SelectSubset<T, BoardFilterCreateArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BoardFilters.
     * @param {BoardFilterCreateManyArgs} args - Arguments to create many BoardFilters.
     * @example
     * // Create many BoardFilters
     * const boardFilter = await prisma.boardFilter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardFilterCreateManyArgs>(args?: SelectSubset<T, BoardFilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoardFilters and returns the data saved in the database.
     * @param {BoardFilterCreateManyAndReturnArgs} args - Arguments to create many BoardFilters.
     * @example
     * // Create many BoardFilters
     * const boardFilter = await prisma.boardFilter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoardFilters and only return the `id`
     * const boardFilterWithIdOnly = await prisma.boardFilter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardFilterCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardFilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BoardFilter.
     * @param {BoardFilterDeleteArgs} args - Arguments to delete one BoardFilter.
     * @example
     * // Delete one BoardFilter
     * const BoardFilter = await prisma.boardFilter.delete({
     *   where: {
     *     // ... filter to delete one BoardFilter
     *   }
     * })
     * 
     */
    delete<T extends BoardFilterDeleteArgs>(args: SelectSubset<T, BoardFilterDeleteArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BoardFilter.
     * @param {BoardFilterUpdateArgs} args - Arguments to update one BoardFilter.
     * @example
     * // Update one BoardFilter
     * const boardFilter = await prisma.boardFilter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardFilterUpdateArgs>(args: SelectSubset<T, BoardFilterUpdateArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BoardFilters.
     * @param {BoardFilterDeleteManyArgs} args - Arguments to filter BoardFilters to delete.
     * @example
     * // Delete a few BoardFilters
     * const { count } = await prisma.boardFilter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardFilterDeleteManyArgs>(args?: SelectSubset<T, BoardFilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardFilters
     * const boardFilter = await prisma.boardFilter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardFilterUpdateManyArgs>(args: SelectSubset<T, BoardFilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardFilter.
     * @param {BoardFilterUpsertArgs} args - Arguments to update or create a BoardFilter.
     * @example
     * // Update or create a BoardFilter
     * const boardFilter = await prisma.boardFilter.upsert({
     *   create: {
     *     // ... data to create a BoardFilter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardFilter we want to update
     *   }
     * })
     */
    upsert<T extends BoardFilterUpsertArgs>(args: SelectSubset<T, BoardFilterUpsertArgs<ExtArgs>>): Prisma__BoardFilterClient<$Result.GetResult<Prisma.$BoardFilterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BoardFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterCountArgs} args - Arguments to filter BoardFilters to count.
     * @example
     * // Count the number of BoardFilters
     * const count = await prisma.boardFilter.count({
     *   where: {
     *     // ... the filter for the BoardFilters we want to count
     *   }
     * })
    **/
    count<T extends BoardFilterCountArgs>(
      args?: Subset<T, BoardFilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardFilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardFilterAggregateArgs>(args: Subset<T, BoardFilterAggregateArgs>): Prisma.PrismaPromise<GetBoardFilterAggregateType<T>>

    /**
     * Group by BoardFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFilterGroupByArgs} args - Group by arguments.
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
      T extends BoardFilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardFilterGroupByArgs['orderBy'] }
        : { orderBy?: BoardFilterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardFilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoardFilter model
   */
  readonly fields: BoardFilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardFilter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardFilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BoardFilter model
   */ 
  interface BoardFilterFieldRefs {
    readonly id: FieldRef<"BoardFilter", 'String'>
    readonly boardId: FieldRef<"BoardFilter", 'String'>
    readonly userId: FieldRef<"BoardFilter", 'String'>
    readonly name: FieldRef<"BoardFilter", 'String'>
    readonly filters: FieldRef<"BoardFilter", 'Json'>
    readonly isDefault: FieldRef<"BoardFilter", 'Boolean'>
    readonly isShared: FieldRef<"BoardFilter", 'Boolean'>
    readonly createdAt: FieldRef<"BoardFilter", 'DateTime'>
    readonly updatedAt: FieldRef<"BoardFilter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoardFilter findUnique
   */
  export type BoardFilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * Filter, which BoardFilter to fetch.
     */
    where: BoardFilterWhereUniqueInput
  }

  /**
   * BoardFilter findUniqueOrThrow
   */
  export type BoardFilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * Filter, which BoardFilter to fetch.
     */
    where: BoardFilterWhereUniqueInput
  }

  /**
   * BoardFilter findFirst
   */
  export type BoardFilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * Filter, which BoardFilter to fetch.
     */
    where?: BoardFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardFilters to fetch.
     */
    orderBy?: BoardFilterOrderByWithRelationInput | BoardFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardFilters.
     */
    cursor?: BoardFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardFilters.
     */
    distinct?: BoardFilterScalarFieldEnum | BoardFilterScalarFieldEnum[]
  }

  /**
   * BoardFilter findFirstOrThrow
   */
  export type BoardFilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * Filter, which BoardFilter to fetch.
     */
    where?: BoardFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardFilters to fetch.
     */
    orderBy?: BoardFilterOrderByWithRelationInput | BoardFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardFilters.
     */
    cursor?: BoardFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardFilters.
     */
    distinct?: BoardFilterScalarFieldEnum | BoardFilterScalarFieldEnum[]
  }

  /**
   * BoardFilter findMany
   */
  export type BoardFilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * Filter, which BoardFilters to fetch.
     */
    where?: BoardFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardFilters to fetch.
     */
    orderBy?: BoardFilterOrderByWithRelationInput | BoardFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardFilters.
     */
    cursor?: BoardFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardFilters.
     */
    skip?: number
    distinct?: BoardFilterScalarFieldEnum | BoardFilterScalarFieldEnum[]
  }

  /**
   * BoardFilter create
   */
  export type BoardFilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * The data needed to create a BoardFilter.
     */
    data: XOR<BoardFilterCreateInput, BoardFilterUncheckedCreateInput>
  }

  /**
   * BoardFilter createMany
   */
  export type BoardFilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardFilters.
     */
    data: BoardFilterCreateManyInput | BoardFilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoardFilter createManyAndReturn
   */
  export type BoardFilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BoardFilters.
     */
    data: BoardFilterCreateManyInput | BoardFilterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoardFilter update
   */
  export type BoardFilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * The data needed to update a BoardFilter.
     */
    data: XOR<BoardFilterUpdateInput, BoardFilterUncheckedUpdateInput>
    /**
     * Choose, which BoardFilter to update.
     */
    where: BoardFilterWhereUniqueInput
  }

  /**
   * BoardFilter updateMany
   */
  export type BoardFilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoardFilters.
     */
    data: XOR<BoardFilterUpdateManyMutationInput, BoardFilterUncheckedUpdateManyInput>
    /**
     * Filter which BoardFilters to update
     */
    where?: BoardFilterWhereInput
  }

  /**
   * BoardFilter upsert
   */
  export type BoardFilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * The filter to search for the BoardFilter to update in case it exists.
     */
    where: BoardFilterWhereUniqueInput
    /**
     * In case the BoardFilter found by the `where` argument doesn't exist, create a new BoardFilter with this data.
     */
    create: XOR<BoardFilterCreateInput, BoardFilterUncheckedCreateInput>
    /**
     * In case the BoardFilter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardFilterUpdateInput, BoardFilterUncheckedUpdateInput>
  }

  /**
   * BoardFilter delete
   */
  export type BoardFilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
    /**
     * Filter which BoardFilter to delete.
     */
    where: BoardFilterWhereUniqueInput
  }

  /**
   * BoardFilter deleteMany
   */
  export type BoardFilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardFilters to delete
     */
    where?: BoardFilterWhereInput
  }

  /**
   * BoardFilter without action
   */
  export type BoardFilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardFilter
     */
    select?: BoardFilterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardFilterInclude<ExtArgs> | null
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


  export const BoardScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    type: 'type',
    description: 'description',
    isDefault: 'isDefault',
    settings: 'settings',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BoardColumnScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    name: 'name',
    color: 'color',
    wip: 'wip',
    position: 'position',
    taskStatus: 'taskStatus',
    isDone: 'isDone',
    isCollapsed: 'isCollapsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardColumnScalarFieldEnum = (typeof BoardColumnScalarFieldEnum)[keyof typeof BoardColumnScalarFieldEnum]


  export const SwimlaneScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    name: 'name',
    color: 'color',
    position: 'position',
    query: 'query',
    isCollapsed: 'isCollapsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SwimlaneScalarFieldEnum = (typeof SwimlaneScalarFieldEnum)[keyof typeof SwimlaneScalarFieldEnum]


  export const BoardFilterScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    userId: 'userId',
    name: 'name',
    filters: 'filters',
    isDefault: 'isDefault',
    isShared: 'isShared',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardFilterScalarFieldEnum = (typeof BoardFilterScalarFieldEnum)[keyof typeof BoardFilterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'BoardType'
   */
  export type EnumBoardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoardType'>
    


  /**
   * Reference to a field of type 'BoardType[]'
   */
  export type ListEnumBoardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoardType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: StringFilter<"Board"> | string
    projectId?: StringFilter<"Board"> | string
    name?: StringFilter<"Board"> | string
    type?: EnumBoardTypeFilter<"Board"> | $Enums.BoardType
    description?: StringNullableFilter<"Board"> | string | null
    isDefault?: BoolFilter<"Board"> | boolean
    settings?: JsonFilter<"Board">
    createdBy?: StringFilter<"Board"> | string
    updatedBy?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    columns?: BoardColumnListRelationFilter
    swimlanes?: SwimlaneListRelationFilter
    filters?: BoardFilterListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    settings?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    columns?: BoardColumnOrderByRelationAggregateInput
    swimlanes?: SwimlaneOrderByRelationAggregateInput
    filters?: BoardFilterOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    projectId?: StringFilter<"Board"> | string
    name?: StringFilter<"Board"> | string
    type?: EnumBoardTypeFilter<"Board"> | $Enums.BoardType
    description?: StringNullableFilter<"Board"> | string | null
    isDefault?: BoolFilter<"Board"> | boolean
    settings?: JsonFilter<"Board">
    createdBy?: StringFilter<"Board"> | string
    updatedBy?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Board"> | Date | string | null
    columns?: BoardColumnListRelationFilter
    swimlanes?: SwimlaneListRelationFilter
    filters?: BoardFilterListRelationFilter
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    settings?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BoardCountOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Board"> | string
    projectId?: StringWithAggregatesFilter<"Board"> | string
    name?: StringWithAggregatesFilter<"Board"> | string
    type?: EnumBoardTypeWithAggregatesFilter<"Board"> | $Enums.BoardType
    description?: StringNullableWithAggregatesFilter<"Board"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Board"> | boolean
    settings?: JsonWithAggregatesFilter<"Board">
    createdBy?: StringWithAggregatesFilter<"Board"> | string
    updatedBy?: StringWithAggregatesFilter<"Board"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Board"> | Date | string | null
  }

  export type BoardColumnWhereInput = {
    AND?: BoardColumnWhereInput | BoardColumnWhereInput[]
    OR?: BoardColumnWhereInput[]
    NOT?: BoardColumnWhereInput | BoardColumnWhereInput[]
    id?: StringFilter<"BoardColumn"> | string
    boardId?: StringFilter<"BoardColumn"> | string
    name?: StringFilter<"BoardColumn"> | string
    color?: StringNullableFilter<"BoardColumn"> | string | null
    wip?: IntNullableFilter<"BoardColumn"> | number | null
    position?: IntFilter<"BoardColumn"> | number
    taskStatus?: StringFilter<"BoardColumn"> | string
    isDone?: BoolFilter<"BoardColumn"> | boolean
    isCollapsed?: BoolFilter<"BoardColumn"> | boolean
    createdAt?: DateTimeFilter<"BoardColumn"> | Date | string
    updatedAt?: DateTimeFilter<"BoardColumn"> | Date | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type BoardColumnOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    wip?: SortOrderInput | SortOrder
    position?: SortOrder
    taskStatus?: SortOrder
    isDone?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    board?: BoardOrderByWithRelationInput
  }

  export type BoardColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoardColumnWhereInput | BoardColumnWhereInput[]
    OR?: BoardColumnWhereInput[]
    NOT?: BoardColumnWhereInput | BoardColumnWhereInput[]
    boardId?: StringFilter<"BoardColumn"> | string
    name?: StringFilter<"BoardColumn"> | string
    color?: StringNullableFilter<"BoardColumn"> | string | null
    wip?: IntNullableFilter<"BoardColumn"> | number | null
    position?: IntFilter<"BoardColumn"> | number
    taskStatus?: StringFilter<"BoardColumn"> | string
    isDone?: BoolFilter<"BoardColumn"> | boolean
    isCollapsed?: BoolFilter<"BoardColumn"> | boolean
    createdAt?: DateTimeFilter<"BoardColumn"> | Date | string
    updatedAt?: DateTimeFilter<"BoardColumn"> | Date | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }, "id">

  export type BoardColumnOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    wip?: SortOrderInput | SortOrder
    position?: SortOrder
    taskStatus?: SortOrder
    isDone?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardColumnCountOrderByAggregateInput
    _avg?: BoardColumnAvgOrderByAggregateInput
    _max?: BoardColumnMaxOrderByAggregateInput
    _min?: BoardColumnMinOrderByAggregateInput
    _sum?: BoardColumnSumOrderByAggregateInput
  }

  export type BoardColumnScalarWhereWithAggregatesInput = {
    AND?: BoardColumnScalarWhereWithAggregatesInput | BoardColumnScalarWhereWithAggregatesInput[]
    OR?: BoardColumnScalarWhereWithAggregatesInput[]
    NOT?: BoardColumnScalarWhereWithAggregatesInput | BoardColumnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoardColumn"> | string
    boardId?: StringWithAggregatesFilter<"BoardColumn"> | string
    name?: StringWithAggregatesFilter<"BoardColumn"> | string
    color?: StringNullableWithAggregatesFilter<"BoardColumn"> | string | null
    wip?: IntNullableWithAggregatesFilter<"BoardColumn"> | number | null
    position?: IntWithAggregatesFilter<"BoardColumn"> | number
    taskStatus?: StringWithAggregatesFilter<"BoardColumn"> | string
    isDone?: BoolWithAggregatesFilter<"BoardColumn"> | boolean
    isCollapsed?: BoolWithAggregatesFilter<"BoardColumn"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BoardColumn"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoardColumn"> | Date | string
  }

  export type SwimlaneWhereInput = {
    AND?: SwimlaneWhereInput | SwimlaneWhereInput[]
    OR?: SwimlaneWhereInput[]
    NOT?: SwimlaneWhereInput | SwimlaneWhereInput[]
    id?: StringFilter<"Swimlane"> | string
    boardId?: StringFilter<"Swimlane"> | string
    name?: StringFilter<"Swimlane"> | string
    color?: StringNullableFilter<"Swimlane"> | string | null
    position?: IntFilter<"Swimlane"> | number
    query?: JsonNullableFilter<"Swimlane">
    isCollapsed?: BoolFilter<"Swimlane"> | boolean
    createdAt?: DateTimeFilter<"Swimlane"> | Date | string
    updatedAt?: DateTimeFilter<"Swimlane"> | Date | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type SwimlaneOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    position?: SortOrder
    query?: SortOrderInput | SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    board?: BoardOrderByWithRelationInput
  }

  export type SwimlaneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwimlaneWhereInput | SwimlaneWhereInput[]
    OR?: SwimlaneWhereInput[]
    NOT?: SwimlaneWhereInput | SwimlaneWhereInput[]
    boardId?: StringFilter<"Swimlane"> | string
    name?: StringFilter<"Swimlane"> | string
    color?: StringNullableFilter<"Swimlane"> | string | null
    position?: IntFilter<"Swimlane"> | number
    query?: JsonNullableFilter<"Swimlane">
    isCollapsed?: BoolFilter<"Swimlane"> | boolean
    createdAt?: DateTimeFilter<"Swimlane"> | Date | string
    updatedAt?: DateTimeFilter<"Swimlane"> | Date | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }, "id">

  export type SwimlaneOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    position?: SortOrder
    query?: SortOrderInput | SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SwimlaneCountOrderByAggregateInput
    _avg?: SwimlaneAvgOrderByAggregateInput
    _max?: SwimlaneMaxOrderByAggregateInput
    _min?: SwimlaneMinOrderByAggregateInput
    _sum?: SwimlaneSumOrderByAggregateInput
  }

  export type SwimlaneScalarWhereWithAggregatesInput = {
    AND?: SwimlaneScalarWhereWithAggregatesInput | SwimlaneScalarWhereWithAggregatesInput[]
    OR?: SwimlaneScalarWhereWithAggregatesInput[]
    NOT?: SwimlaneScalarWhereWithAggregatesInput | SwimlaneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Swimlane"> | string
    boardId?: StringWithAggregatesFilter<"Swimlane"> | string
    name?: StringWithAggregatesFilter<"Swimlane"> | string
    color?: StringNullableWithAggregatesFilter<"Swimlane"> | string | null
    position?: IntWithAggregatesFilter<"Swimlane"> | number
    query?: JsonNullableWithAggregatesFilter<"Swimlane">
    isCollapsed?: BoolWithAggregatesFilter<"Swimlane"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Swimlane"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Swimlane"> | Date | string
  }

  export type BoardFilterWhereInput = {
    AND?: BoardFilterWhereInput | BoardFilterWhereInput[]
    OR?: BoardFilterWhereInput[]
    NOT?: BoardFilterWhereInput | BoardFilterWhereInput[]
    id?: StringFilter<"BoardFilter"> | string
    boardId?: StringFilter<"BoardFilter"> | string
    userId?: StringFilter<"BoardFilter"> | string
    name?: StringFilter<"BoardFilter"> | string
    filters?: JsonFilter<"BoardFilter">
    isDefault?: BoolFilter<"BoardFilter"> | boolean
    isShared?: BoolFilter<"BoardFilter"> | boolean
    createdAt?: DateTimeFilter<"BoardFilter"> | Date | string
    updatedAt?: DateTimeFilter<"BoardFilter"> | Date | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type BoardFilterOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    filters?: SortOrder
    isDefault?: SortOrder
    isShared?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    board?: BoardOrderByWithRelationInput
  }

  export type BoardFilterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoardFilterWhereInput | BoardFilterWhereInput[]
    OR?: BoardFilterWhereInput[]
    NOT?: BoardFilterWhereInput | BoardFilterWhereInput[]
    boardId?: StringFilter<"BoardFilter"> | string
    userId?: StringFilter<"BoardFilter"> | string
    name?: StringFilter<"BoardFilter"> | string
    filters?: JsonFilter<"BoardFilter">
    isDefault?: BoolFilter<"BoardFilter"> | boolean
    isShared?: BoolFilter<"BoardFilter"> | boolean
    createdAt?: DateTimeFilter<"BoardFilter"> | Date | string
    updatedAt?: DateTimeFilter<"BoardFilter"> | Date | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
  }, "id">

  export type BoardFilterOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    filters?: SortOrder
    isDefault?: SortOrder
    isShared?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardFilterCountOrderByAggregateInput
    _max?: BoardFilterMaxOrderByAggregateInput
    _min?: BoardFilterMinOrderByAggregateInput
  }

  export type BoardFilterScalarWhereWithAggregatesInput = {
    AND?: BoardFilterScalarWhereWithAggregatesInput | BoardFilterScalarWhereWithAggregatesInput[]
    OR?: BoardFilterScalarWhereWithAggregatesInput[]
    NOT?: BoardFilterScalarWhereWithAggregatesInput | BoardFilterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoardFilter"> | string
    boardId?: StringWithAggregatesFilter<"BoardFilter"> | string
    userId?: StringWithAggregatesFilter<"BoardFilter"> | string
    name?: StringWithAggregatesFilter<"BoardFilter"> | string
    filters?: JsonWithAggregatesFilter<"BoardFilter">
    isDefault?: BoolWithAggregatesFilter<"BoardFilter"> | boolean
    isShared?: BoolWithAggregatesFilter<"BoardFilter"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BoardFilter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoardFilter"> | Date | string
  }

  export type BoardCreateInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    columns?: BoardColumnCreateNestedManyWithoutBoardInput
    swimlanes?: SwimlaneCreateNestedManyWithoutBoardInput
    filters?: BoardFilterCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    columns?: BoardColumnUncheckedCreateNestedManyWithoutBoardInput
    swimlanes?: SwimlaneUncheckedCreateNestedManyWithoutBoardInput
    filters?: BoardFilterUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    columns?: BoardColumnUpdateManyWithoutBoardNestedInput
    swimlanes?: SwimlaneUpdateManyWithoutBoardNestedInput
    filters?: BoardFilterUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    columns?: BoardColumnUncheckedUpdateManyWithoutBoardNestedInput
    swimlanes?: SwimlaneUncheckedUpdateManyWithoutBoardNestedInput
    filters?: BoardFilterUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoardColumnCreateInput = {
    id?: string
    name: string
    color?: string | null
    wip?: number | null
    position: number
    taskStatus: string
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    board: BoardCreateNestedOneWithoutColumnsInput
  }

  export type BoardColumnUncheckedCreateInput = {
    id?: string
    boardId: string
    name: string
    color?: string | null
    wip?: number | null
    position: number
    taskStatus: string
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type BoardColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardColumnCreateManyInput = {
    id?: string
    boardId: string
    name: string
    color?: string | null
    wip?: number | null
    position: number
    taskStatus: string
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwimlaneCreateInput = {
    id?: string
    name: string
    color?: string | null
    position: number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    board: BoardCreateNestedOneWithoutSwimlanesInput
  }

  export type SwimlaneUncheckedCreateInput = {
    id?: string
    boardId: string
    name: string
    color?: string | null
    position: number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwimlaneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutSwimlanesNestedInput
  }

  export type SwimlaneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwimlaneCreateManyInput = {
    id?: string
    boardId: string
    name: string
    color?: string | null
    position: number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwimlaneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwimlaneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardFilterCreateInput = {
    id?: string
    userId: string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    board: BoardCreateNestedOneWithoutFiltersInput
  }

  export type BoardFilterUncheckedCreateInput = {
    id?: string
    boardId: string
    userId: string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardFilterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutFiltersNestedInput
  }

  export type BoardFilterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardFilterCreateManyInput = {
    id?: string
    boardId: string
    userId: string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardFilterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardFilterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumBoardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardType | EnumBoardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBoardTypeFilter<$PrismaModel> | $Enums.BoardType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoardColumnListRelationFilter = {
    every?: BoardColumnWhereInput
    some?: BoardColumnWhereInput
    none?: BoardColumnWhereInput
  }

  export type SwimlaneListRelationFilter = {
    every?: SwimlaneWhereInput
    some?: SwimlaneWhereInput
    none?: SwimlaneWhereInput
  }

  export type BoardFilterListRelationFilter = {
    every?: BoardFilterWhereInput
    some?: BoardFilterWhereInput
    none?: BoardFilterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoardColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwimlaneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardFilterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    settings?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type EnumBoardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardType | EnumBoardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBoardTypeWithAggregatesFilter<$PrismaModel> | $Enums.BoardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoardTypeFilter<$PrismaModel>
    _max?: NestedEnumBoardTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type BoardColumnCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    wip?: SortOrder
    position?: SortOrder
    taskStatus?: SortOrder
    isDone?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardColumnAvgOrderByAggregateInput = {
    wip?: SortOrder
    position?: SortOrder
  }

  export type BoardColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    wip?: SortOrder
    position?: SortOrder
    taskStatus?: SortOrder
    isDone?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardColumnMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    wip?: SortOrder
    position?: SortOrder
    taskStatus?: SortOrder
    isDone?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardColumnSumOrderByAggregateInput = {
    wip?: SortOrder
    position?: SortOrder
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

  export type SwimlaneCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    position?: SortOrder
    query?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwimlaneAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type SwimlaneMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    position?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwimlaneMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    position?: SortOrder
    isCollapsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SwimlaneSumOrderByAggregateInput = {
    position?: SortOrder
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

  export type BoardFilterCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    filters?: SortOrder
    isDefault?: SortOrder
    isShared?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardFilterMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    isShared?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardFilterMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    isShared?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardColumnCreateNestedManyWithoutBoardInput = {
    create?: XOR<BoardColumnCreateWithoutBoardInput, BoardColumnUncheckedCreateWithoutBoardInput> | BoardColumnCreateWithoutBoardInput[] | BoardColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardColumnCreateOrConnectWithoutBoardInput | BoardColumnCreateOrConnectWithoutBoardInput[]
    createMany?: BoardColumnCreateManyBoardInputEnvelope
    connect?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
  }

  export type SwimlaneCreateNestedManyWithoutBoardInput = {
    create?: XOR<SwimlaneCreateWithoutBoardInput, SwimlaneUncheckedCreateWithoutBoardInput> | SwimlaneCreateWithoutBoardInput[] | SwimlaneUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: SwimlaneCreateOrConnectWithoutBoardInput | SwimlaneCreateOrConnectWithoutBoardInput[]
    createMany?: SwimlaneCreateManyBoardInputEnvelope
    connect?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
  }

  export type BoardFilterCreateNestedManyWithoutBoardInput = {
    create?: XOR<BoardFilterCreateWithoutBoardInput, BoardFilterUncheckedCreateWithoutBoardInput> | BoardFilterCreateWithoutBoardInput[] | BoardFilterUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardFilterCreateOrConnectWithoutBoardInput | BoardFilterCreateOrConnectWithoutBoardInput[]
    createMany?: BoardFilterCreateManyBoardInputEnvelope
    connect?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
  }

  export type BoardColumnUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<BoardColumnCreateWithoutBoardInput, BoardColumnUncheckedCreateWithoutBoardInput> | BoardColumnCreateWithoutBoardInput[] | BoardColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardColumnCreateOrConnectWithoutBoardInput | BoardColumnCreateOrConnectWithoutBoardInput[]
    createMany?: BoardColumnCreateManyBoardInputEnvelope
    connect?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
  }

  export type SwimlaneUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<SwimlaneCreateWithoutBoardInput, SwimlaneUncheckedCreateWithoutBoardInput> | SwimlaneCreateWithoutBoardInput[] | SwimlaneUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: SwimlaneCreateOrConnectWithoutBoardInput | SwimlaneCreateOrConnectWithoutBoardInput[]
    createMany?: SwimlaneCreateManyBoardInputEnvelope
    connect?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
  }

  export type BoardFilterUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<BoardFilterCreateWithoutBoardInput, BoardFilterUncheckedCreateWithoutBoardInput> | BoardFilterCreateWithoutBoardInput[] | BoardFilterUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardFilterCreateOrConnectWithoutBoardInput | BoardFilterCreateOrConnectWithoutBoardInput[]
    createMany?: BoardFilterCreateManyBoardInputEnvelope
    connect?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumBoardTypeFieldUpdateOperationsInput = {
    set?: $Enums.BoardType
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoardColumnUpdateManyWithoutBoardNestedInput = {
    create?: XOR<BoardColumnCreateWithoutBoardInput, BoardColumnUncheckedCreateWithoutBoardInput> | BoardColumnCreateWithoutBoardInput[] | BoardColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardColumnCreateOrConnectWithoutBoardInput | BoardColumnCreateOrConnectWithoutBoardInput[]
    upsert?: BoardColumnUpsertWithWhereUniqueWithoutBoardInput | BoardColumnUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: BoardColumnCreateManyBoardInputEnvelope
    set?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    disconnect?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    delete?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    connect?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    update?: BoardColumnUpdateWithWhereUniqueWithoutBoardInput | BoardColumnUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: BoardColumnUpdateManyWithWhereWithoutBoardInput | BoardColumnUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: BoardColumnScalarWhereInput | BoardColumnScalarWhereInput[]
  }

  export type SwimlaneUpdateManyWithoutBoardNestedInput = {
    create?: XOR<SwimlaneCreateWithoutBoardInput, SwimlaneUncheckedCreateWithoutBoardInput> | SwimlaneCreateWithoutBoardInput[] | SwimlaneUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: SwimlaneCreateOrConnectWithoutBoardInput | SwimlaneCreateOrConnectWithoutBoardInput[]
    upsert?: SwimlaneUpsertWithWhereUniqueWithoutBoardInput | SwimlaneUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: SwimlaneCreateManyBoardInputEnvelope
    set?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    disconnect?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    delete?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    connect?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    update?: SwimlaneUpdateWithWhereUniqueWithoutBoardInput | SwimlaneUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: SwimlaneUpdateManyWithWhereWithoutBoardInput | SwimlaneUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: SwimlaneScalarWhereInput | SwimlaneScalarWhereInput[]
  }

  export type BoardFilterUpdateManyWithoutBoardNestedInput = {
    create?: XOR<BoardFilterCreateWithoutBoardInput, BoardFilterUncheckedCreateWithoutBoardInput> | BoardFilterCreateWithoutBoardInput[] | BoardFilterUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardFilterCreateOrConnectWithoutBoardInput | BoardFilterCreateOrConnectWithoutBoardInput[]
    upsert?: BoardFilterUpsertWithWhereUniqueWithoutBoardInput | BoardFilterUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: BoardFilterCreateManyBoardInputEnvelope
    set?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    disconnect?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    delete?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    connect?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    update?: BoardFilterUpdateWithWhereUniqueWithoutBoardInput | BoardFilterUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: BoardFilterUpdateManyWithWhereWithoutBoardInput | BoardFilterUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: BoardFilterScalarWhereInput | BoardFilterScalarWhereInput[]
  }

  export type BoardColumnUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<BoardColumnCreateWithoutBoardInput, BoardColumnUncheckedCreateWithoutBoardInput> | BoardColumnCreateWithoutBoardInput[] | BoardColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardColumnCreateOrConnectWithoutBoardInput | BoardColumnCreateOrConnectWithoutBoardInput[]
    upsert?: BoardColumnUpsertWithWhereUniqueWithoutBoardInput | BoardColumnUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: BoardColumnCreateManyBoardInputEnvelope
    set?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    disconnect?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    delete?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    connect?: BoardColumnWhereUniqueInput | BoardColumnWhereUniqueInput[]
    update?: BoardColumnUpdateWithWhereUniqueWithoutBoardInput | BoardColumnUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: BoardColumnUpdateManyWithWhereWithoutBoardInput | BoardColumnUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: BoardColumnScalarWhereInput | BoardColumnScalarWhereInput[]
  }

  export type SwimlaneUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<SwimlaneCreateWithoutBoardInput, SwimlaneUncheckedCreateWithoutBoardInput> | SwimlaneCreateWithoutBoardInput[] | SwimlaneUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: SwimlaneCreateOrConnectWithoutBoardInput | SwimlaneCreateOrConnectWithoutBoardInput[]
    upsert?: SwimlaneUpsertWithWhereUniqueWithoutBoardInput | SwimlaneUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: SwimlaneCreateManyBoardInputEnvelope
    set?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    disconnect?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    delete?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    connect?: SwimlaneWhereUniqueInput | SwimlaneWhereUniqueInput[]
    update?: SwimlaneUpdateWithWhereUniqueWithoutBoardInput | SwimlaneUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: SwimlaneUpdateManyWithWhereWithoutBoardInput | SwimlaneUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: SwimlaneScalarWhereInput | SwimlaneScalarWhereInput[]
  }

  export type BoardFilterUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<BoardFilterCreateWithoutBoardInput, BoardFilterUncheckedCreateWithoutBoardInput> | BoardFilterCreateWithoutBoardInput[] | BoardFilterUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: BoardFilterCreateOrConnectWithoutBoardInput | BoardFilterCreateOrConnectWithoutBoardInput[]
    upsert?: BoardFilterUpsertWithWhereUniqueWithoutBoardInput | BoardFilterUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: BoardFilterCreateManyBoardInputEnvelope
    set?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    disconnect?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    delete?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    connect?: BoardFilterWhereUniqueInput | BoardFilterWhereUniqueInput[]
    update?: BoardFilterUpdateWithWhereUniqueWithoutBoardInput | BoardFilterUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: BoardFilterUpdateManyWithWhereWithoutBoardInput | BoardFilterUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: BoardFilterScalarWhereInput | BoardFilterScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutColumnsInput = {
    create?: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput
    connect?: BoardWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput
    upsert?: BoardUpsertWithoutColumnsInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutColumnsInput, BoardUpdateWithoutColumnsInput>, BoardUncheckedUpdateWithoutColumnsInput>
  }

  export type BoardCreateNestedOneWithoutSwimlanesInput = {
    create?: XOR<BoardCreateWithoutSwimlanesInput, BoardUncheckedCreateWithoutSwimlanesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutSwimlanesInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutSwimlanesNestedInput = {
    create?: XOR<BoardCreateWithoutSwimlanesInput, BoardUncheckedCreateWithoutSwimlanesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutSwimlanesInput
    upsert?: BoardUpsertWithoutSwimlanesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutSwimlanesInput, BoardUpdateWithoutSwimlanesInput>, BoardUncheckedUpdateWithoutSwimlanesInput>
  }

  export type BoardCreateNestedOneWithoutFiltersInput = {
    create?: XOR<BoardCreateWithoutFiltersInput, BoardUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: BoardCreateOrConnectWithoutFiltersInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutFiltersNestedInput = {
    create?: XOR<BoardCreateWithoutFiltersInput, BoardUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: BoardCreateOrConnectWithoutFiltersInput
    upsert?: BoardUpsertWithoutFiltersInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutFiltersInput, BoardUpdateWithoutFiltersInput>, BoardUncheckedUpdateWithoutFiltersInput>
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

  export type NestedEnumBoardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardType | EnumBoardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBoardTypeFilter<$PrismaModel> | $Enums.BoardType
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

  export type NestedEnumBoardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardType | EnumBoardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoardType[] | ListEnumBoardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBoardTypeWithAggregatesFilter<$PrismaModel> | $Enums.BoardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoardTypeFilter<$PrismaModel>
    _max?: NestedEnumBoardTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoardColumnCreateWithoutBoardInput = {
    id?: string
    name: string
    color?: string | null
    wip?: number | null
    position: number
    taskStatus: string
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardColumnUncheckedCreateWithoutBoardInput = {
    id?: string
    name: string
    color?: string | null
    wip?: number | null
    position: number
    taskStatus: string
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardColumnCreateOrConnectWithoutBoardInput = {
    where: BoardColumnWhereUniqueInput
    create: XOR<BoardColumnCreateWithoutBoardInput, BoardColumnUncheckedCreateWithoutBoardInput>
  }

  export type BoardColumnCreateManyBoardInputEnvelope = {
    data: BoardColumnCreateManyBoardInput | BoardColumnCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type SwimlaneCreateWithoutBoardInput = {
    id?: string
    name: string
    color?: string | null
    position: number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwimlaneUncheckedCreateWithoutBoardInput = {
    id?: string
    name: string
    color?: string | null
    position: number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwimlaneCreateOrConnectWithoutBoardInput = {
    where: SwimlaneWhereUniqueInput
    create: XOR<SwimlaneCreateWithoutBoardInput, SwimlaneUncheckedCreateWithoutBoardInput>
  }

  export type SwimlaneCreateManyBoardInputEnvelope = {
    data: SwimlaneCreateManyBoardInput | SwimlaneCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type BoardFilterCreateWithoutBoardInput = {
    id?: string
    userId: string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardFilterUncheckedCreateWithoutBoardInput = {
    id?: string
    userId: string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardFilterCreateOrConnectWithoutBoardInput = {
    where: BoardFilterWhereUniqueInput
    create: XOR<BoardFilterCreateWithoutBoardInput, BoardFilterUncheckedCreateWithoutBoardInput>
  }

  export type BoardFilterCreateManyBoardInputEnvelope = {
    data: BoardFilterCreateManyBoardInput | BoardFilterCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type BoardColumnUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardColumnWhereUniqueInput
    update: XOR<BoardColumnUpdateWithoutBoardInput, BoardColumnUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardColumnCreateWithoutBoardInput, BoardColumnUncheckedCreateWithoutBoardInput>
  }

  export type BoardColumnUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardColumnWhereUniqueInput
    data: XOR<BoardColumnUpdateWithoutBoardInput, BoardColumnUncheckedUpdateWithoutBoardInput>
  }

  export type BoardColumnUpdateManyWithWhereWithoutBoardInput = {
    where: BoardColumnScalarWhereInput
    data: XOR<BoardColumnUpdateManyMutationInput, BoardColumnUncheckedUpdateManyWithoutBoardInput>
  }

  export type BoardColumnScalarWhereInput = {
    AND?: BoardColumnScalarWhereInput | BoardColumnScalarWhereInput[]
    OR?: BoardColumnScalarWhereInput[]
    NOT?: BoardColumnScalarWhereInput | BoardColumnScalarWhereInput[]
    id?: StringFilter<"BoardColumn"> | string
    boardId?: StringFilter<"BoardColumn"> | string
    name?: StringFilter<"BoardColumn"> | string
    color?: StringNullableFilter<"BoardColumn"> | string | null
    wip?: IntNullableFilter<"BoardColumn"> | number | null
    position?: IntFilter<"BoardColumn"> | number
    taskStatus?: StringFilter<"BoardColumn"> | string
    isDone?: BoolFilter<"BoardColumn"> | boolean
    isCollapsed?: BoolFilter<"BoardColumn"> | boolean
    createdAt?: DateTimeFilter<"BoardColumn"> | Date | string
    updatedAt?: DateTimeFilter<"BoardColumn"> | Date | string
  }

  export type SwimlaneUpsertWithWhereUniqueWithoutBoardInput = {
    where: SwimlaneWhereUniqueInput
    update: XOR<SwimlaneUpdateWithoutBoardInput, SwimlaneUncheckedUpdateWithoutBoardInput>
    create: XOR<SwimlaneCreateWithoutBoardInput, SwimlaneUncheckedCreateWithoutBoardInput>
  }

  export type SwimlaneUpdateWithWhereUniqueWithoutBoardInput = {
    where: SwimlaneWhereUniqueInput
    data: XOR<SwimlaneUpdateWithoutBoardInput, SwimlaneUncheckedUpdateWithoutBoardInput>
  }

  export type SwimlaneUpdateManyWithWhereWithoutBoardInput = {
    where: SwimlaneScalarWhereInput
    data: XOR<SwimlaneUpdateManyMutationInput, SwimlaneUncheckedUpdateManyWithoutBoardInput>
  }

  export type SwimlaneScalarWhereInput = {
    AND?: SwimlaneScalarWhereInput | SwimlaneScalarWhereInput[]
    OR?: SwimlaneScalarWhereInput[]
    NOT?: SwimlaneScalarWhereInput | SwimlaneScalarWhereInput[]
    id?: StringFilter<"Swimlane"> | string
    boardId?: StringFilter<"Swimlane"> | string
    name?: StringFilter<"Swimlane"> | string
    color?: StringNullableFilter<"Swimlane"> | string | null
    position?: IntFilter<"Swimlane"> | number
    query?: JsonNullableFilter<"Swimlane">
    isCollapsed?: BoolFilter<"Swimlane"> | boolean
    createdAt?: DateTimeFilter<"Swimlane"> | Date | string
    updatedAt?: DateTimeFilter<"Swimlane"> | Date | string
  }

  export type BoardFilterUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardFilterWhereUniqueInput
    update: XOR<BoardFilterUpdateWithoutBoardInput, BoardFilterUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardFilterCreateWithoutBoardInput, BoardFilterUncheckedCreateWithoutBoardInput>
  }

  export type BoardFilterUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardFilterWhereUniqueInput
    data: XOR<BoardFilterUpdateWithoutBoardInput, BoardFilterUncheckedUpdateWithoutBoardInput>
  }

  export type BoardFilterUpdateManyWithWhereWithoutBoardInput = {
    where: BoardFilterScalarWhereInput
    data: XOR<BoardFilterUpdateManyMutationInput, BoardFilterUncheckedUpdateManyWithoutBoardInput>
  }

  export type BoardFilterScalarWhereInput = {
    AND?: BoardFilterScalarWhereInput | BoardFilterScalarWhereInput[]
    OR?: BoardFilterScalarWhereInput[]
    NOT?: BoardFilterScalarWhereInput | BoardFilterScalarWhereInput[]
    id?: StringFilter<"BoardFilter"> | string
    boardId?: StringFilter<"BoardFilter"> | string
    userId?: StringFilter<"BoardFilter"> | string
    name?: StringFilter<"BoardFilter"> | string
    filters?: JsonFilter<"BoardFilter">
    isDefault?: BoolFilter<"BoardFilter"> | boolean
    isShared?: BoolFilter<"BoardFilter"> | boolean
    createdAt?: DateTimeFilter<"BoardFilter"> | Date | string
    updatedAt?: DateTimeFilter<"BoardFilter"> | Date | string
  }

  export type BoardCreateWithoutColumnsInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    swimlanes?: SwimlaneCreateNestedManyWithoutBoardInput
    filters?: BoardFilterCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutColumnsInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    swimlanes?: SwimlaneUncheckedCreateNestedManyWithoutBoardInput
    filters?: BoardFilterUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutColumnsInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
  }

  export type BoardUpsertWithoutColumnsInput = {
    update: XOR<BoardUpdateWithoutColumnsInput, BoardUncheckedUpdateWithoutColumnsInput>
    create: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutColumnsInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutColumnsInput, BoardUncheckedUpdateWithoutColumnsInput>
  }

  export type BoardUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swimlanes?: SwimlaneUpdateManyWithoutBoardNestedInput
    filters?: BoardFilterUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swimlanes?: SwimlaneUncheckedUpdateManyWithoutBoardNestedInput
    filters?: BoardFilterUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateWithoutSwimlanesInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    columns?: BoardColumnCreateNestedManyWithoutBoardInput
    filters?: BoardFilterCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutSwimlanesInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    columns?: BoardColumnUncheckedCreateNestedManyWithoutBoardInput
    filters?: BoardFilterUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutSwimlanesInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutSwimlanesInput, BoardUncheckedCreateWithoutSwimlanesInput>
  }

  export type BoardUpsertWithoutSwimlanesInput = {
    update: XOR<BoardUpdateWithoutSwimlanesInput, BoardUncheckedUpdateWithoutSwimlanesInput>
    create: XOR<BoardCreateWithoutSwimlanesInput, BoardUncheckedCreateWithoutSwimlanesInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutSwimlanesInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutSwimlanesInput, BoardUncheckedUpdateWithoutSwimlanesInput>
  }

  export type BoardUpdateWithoutSwimlanesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    columns?: BoardColumnUpdateManyWithoutBoardNestedInput
    filters?: BoardFilterUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutSwimlanesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    columns?: BoardColumnUncheckedUpdateManyWithoutBoardNestedInput
    filters?: BoardFilterUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateWithoutFiltersInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    columns?: BoardColumnCreateNestedManyWithoutBoardInput
    swimlanes?: SwimlaneCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutFiltersInput = {
    id?: string
    projectId: string
    name: string
    type?: $Enums.BoardType
    description?: string | null
    isDefault?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy: string
    updatedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    columns?: BoardColumnUncheckedCreateNestedManyWithoutBoardInput
    swimlanes?: SwimlaneUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutFiltersInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutFiltersInput, BoardUncheckedCreateWithoutFiltersInput>
  }

  export type BoardUpsertWithoutFiltersInput = {
    update: XOR<BoardUpdateWithoutFiltersInput, BoardUncheckedUpdateWithoutFiltersInput>
    create: XOR<BoardCreateWithoutFiltersInput, BoardUncheckedCreateWithoutFiltersInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutFiltersInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutFiltersInput, BoardUncheckedUpdateWithoutFiltersInput>
  }

  export type BoardUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    columns?: BoardColumnUpdateManyWithoutBoardNestedInput
    swimlanes?: SwimlaneUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumBoardTypeFieldUpdateOperationsInput | $Enums.BoardType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    columns?: BoardColumnUncheckedUpdateManyWithoutBoardNestedInput
    swimlanes?: SwimlaneUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardColumnCreateManyBoardInput = {
    id?: string
    name: string
    color?: string | null
    wip?: number | null
    position: number
    taskStatus: string
    isDone?: boolean
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SwimlaneCreateManyBoardInput = {
    id?: string
    name: string
    color?: string | null
    position: number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardFilterCreateManyBoardInput = {
    id?: string
    userId: string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
    isShared?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardColumnUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardColumnUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardColumnUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    wip?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    taskStatus?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwimlaneUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwimlaneUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwimlaneUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    query?: NullableJsonNullValueInput | InputJsonValue
    isCollapsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardFilterUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardFilterUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardFilterUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BoardCountOutputTypeDefaultArgs instead
     */
    export type BoardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardDefaultArgs instead
     */
    export type BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardColumnDefaultArgs instead
     */
    export type BoardColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardColumnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SwimlaneDefaultArgs instead
     */
    export type SwimlaneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SwimlaneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardFilterDefaultArgs instead
     */
    export type BoardFilterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardFilterDefaultArgs<ExtArgs>

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