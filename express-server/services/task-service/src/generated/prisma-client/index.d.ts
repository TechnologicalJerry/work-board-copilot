
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
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskSequence
 * 
 */
export type TaskSequence = $Result.DefaultSelection<Prisma.$TaskSequencePayload>
/**
 * Model ProjectKeyCounter
 * 
 */
export type ProjectKeyCounter = $Result.DefaultSelection<Prisma.$ProjectKeyCounterPayload>
/**
 * Model TaskDependency
 * 
 */
export type TaskDependency = $Result.DefaultSelection<Prisma.$TaskDependencyPayload>
/**
 * Model TaskActivity
 * 
 */
export type TaskActivity = $Result.DefaultSelection<Prisma.$TaskActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskType: {
  EPIC: 'EPIC',
  STORY: 'STORY',
  TASK: 'TASK',
  SUBTASK: 'SUBTASK',
  BUG: 'BUG',
  FEATURE: 'FEATURE',
  IMPROVEMENT: 'IMPROVEMENT'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const Priority: {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  NONE: 'NONE'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const DependencyType: {
  BLOCKS: 'BLOCKS',
  IS_BLOCKED_BY: 'IS_BLOCKED_BY',
  RELATES_TO: 'RELATES_TO',
  DUPLICATES: 'DUPLICATES',
  IS_DUPLICATED_BY: 'IS_DUPLICATED_BY'
};

export type DependencyType = (typeof DependencyType)[keyof typeof DependencyType]

}

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type DependencyType = $Enums.DependencyType

export const DependencyType: typeof $Enums.DependencyType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tasks
 * const tasks = await prisma.task.findMany()
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
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
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
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.taskSequence`: Exposes CRUD operations for the **TaskSequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskSequences
    * const taskSequences = await prisma.taskSequence.findMany()
    * ```
    */
  get taskSequence(): Prisma.TaskSequenceDelegate<ExtArgs>;

  /**
   * `prisma.projectKeyCounter`: Exposes CRUD operations for the **ProjectKeyCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectKeyCounters
    * const projectKeyCounters = await prisma.projectKeyCounter.findMany()
    * ```
    */
  get projectKeyCounter(): Prisma.ProjectKeyCounterDelegate<ExtArgs>;

  /**
   * `prisma.taskDependency`: Exposes CRUD operations for the **TaskDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskDependencies
    * const taskDependencies = await prisma.taskDependency.findMany()
    * ```
    */
  get taskDependency(): Prisma.TaskDependencyDelegate<ExtArgs>;

  /**
   * `prisma.taskActivity`: Exposes CRUD operations for the **TaskActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskActivities
    * const taskActivities = await prisma.taskActivity.findMany()
    * ```
    */
  get taskActivity(): Prisma.TaskActivityDelegate<ExtArgs>;
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
    Task: 'Task',
    TaskSequence: 'TaskSequence',
    ProjectKeyCounter: 'ProjectKeyCounter',
    TaskDependency: 'TaskDependency',
    TaskActivity: 'TaskActivity'
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
      modelProps: "task" | "taskSequence" | "projectKeyCounter" | "taskDependency" | "taskActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskSequence: {
        payload: Prisma.$TaskSequencePayload<ExtArgs>
        fields: Prisma.TaskSequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskSequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskSequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>
          }
          findFirst: {
            args: Prisma.TaskSequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskSequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>
          }
          findMany: {
            args: Prisma.TaskSequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>[]
          }
          create: {
            args: Prisma.TaskSequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>
          }
          createMany: {
            args: Prisma.TaskSequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskSequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>[]
          }
          delete: {
            args: Prisma.TaskSequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>
          }
          update: {
            args: Prisma.TaskSequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>
          }
          deleteMany: {
            args: Prisma.TaskSequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskSequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskSequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSequencePayload>
          }
          aggregate: {
            args: Prisma.TaskSequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskSequence>
          }
          groupBy: {
            args: Prisma.TaskSequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskSequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskSequenceCountArgs<ExtArgs>
            result: $Utils.Optional<TaskSequenceCountAggregateOutputType> | number
          }
        }
      }
      ProjectKeyCounter: {
        payload: Prisma.$ProjectKeyCounterPayload<ExtArgs>
        fields: Prisma.ProjectKeyCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectKeyCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectKeyCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>
          }
          findFirst: {
            args: Prisma.ProjectKeyCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectKeyCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>
          }
          findMany: {
            args: Prisma.ProjectKeyCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>[]
          }
          create: {
            args: Prisma.ProjectKeyCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>
          }
          createMany: {
            args: Prisma.ProjectKeyCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectKeyCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>[]
          }
          delete: {
            args: Prisma.ProjectKeyCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>
          }
          update: {
            args: Prisma.ProjectKeyCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>
          }
          deleteMany: {
            args: Prisma.ProjectKeyCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectKeyCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectKeyCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectKeyCounterPayload>
          }
          aggregate: {
            args: Prisma.ProjectKeyCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectKeyCounter>
          }
          groupBy: {
            args: Prisma.ProjectKeyCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectKeyCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectKeyCounterCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectKeyCounterCountAggregateOutputType> | number
          }
        }
      }
      TaskDependency: {
        payload: Prisma.$TaskDependencyPayload<ExtArgs>
        fields: Prisma.TaskDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskDependencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskDependencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>
          }
          findFirst: {
            args: Prisma.TaskDependencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskDependencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>
          }
          findMany: {
            args: Prisma.TaskDependencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>[]
          }
          create: {
            args: Prisma.TaskDependencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>
          }
          createMany: {
            args: Prisma.TaskDependencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskDependencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>[]
          }
          delete: {
            args: Prisma.TaskDependencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>
          }
          update: {
            args: Prisma.TaskDependencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>
          }
          deleteMany: {
            args: Prisma.TaskDependencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskDependencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskDependencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>
          }
          aggregate: {
            args: Prisma.TaskDependencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskDependency>
          }
          groupBy: {
            args: Prisma.TaskDependencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskDependencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskDependencyCountArgs<ExtArgs>
            result: $Utils.Optional<TaskDependencyCountAggregateOutputType> | number
          }
        }
      }
      TaskActivity: {
        payload: Prisma.$TaskActivityPayload<ExtArgs>
        fields: Prisma.TaskActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          findFirst: {
            args: Prisma.TaskActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          findMany: {
            args: Prisma.TaskActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>[]
          }
          create: {
            args: Prisma.TaskActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          createMany: {
            args: Prisma.TaskActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>[]
          }
          delete: {
            args: Prisma.TaskActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          update: {
            args: Prisma.TaskActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          deleteMany: {
            args: Prisma.TaskActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          aggregate: {
            args: Prisma.TaskActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskActivity>
          }
          groupBy: {
            args: Prisma.TaskActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskActivityCountArgs<ExtArgs>
            result: $Utils.Optional<TaskActivityCountAggregateOutputType> | number
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
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subtasks: number
    dependencies: number
    dependents: number
    activity: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs
    dependencies?: boolean | TaskCountOutputTypeCountDependenciesArgs
    dependents?: boolean | TaskCountOutputTypeCountDependentsArgs
    activity?: boolean | TaskCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskDependencyWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountDependentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskDependencyWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    storyPoints: number | null
    estimatedHours: number | null
    actualHours: number | null
    position: number | null
    attachmentCount: number | null
    commentCount: number | null
    subtaskCount: number | null
    completedSubtaskCount: number | null
  }

  export type TaskSumAggregateOutputType = {
    storyPoints: number | null
    estimatedHours: number | null
    actualHours: number | null
    position: number | null
    attachmentCount: number | null
    commentCount: number | null
    subtaskCount: number | null
    completedSubtaskCount: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    workspaceId: string | null
    organizationId: string | null
    key: string | null
    title: string | null
    description: string | null
    type: $Enums.TaskType | null
    status: string | null
    priority: $Enums.Priority | null
    storyPoints: number | null
    estimatedHours: number | null
    actualHours: number | null
    assigneeId: string | null
    reporterId: string | null
    parentId: string | null
    epicId: string | null
    milestoneId: string | null
    sprintId: string | null
    boardColumnId: string | null
    position: number | null
    dueDate: Date | null
    startDate: Date | null
    completedAt: Date | null
    attachmentCount: number | null
    commentCount: number | null
    subtaskCount: number | null
    completedSubtaskCount: number | null
    isRecurring: boolean | null
    nextOccurrence: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    workspaceId: string | null
    organizationId: string | null
    key: string | null
    title: string | null
    description: string | null
    type: $Enums.TaskType | null
    status: string | null
    priority: $Enums.Priority | null
    storyPoints: number | null
    estimatedHours: number | null
    actualHours: number | null
    assigneeId: string | null
    reporterId: string | null
    parentId: string | null
    epicId: string | null
    milestoneId: string | null
    sprintId: string | null
    boardColumnId: string | null
    position: number | null
    dueDate: Date | null
    startDate: Date | null
    completedAt: Date | null
    attachmentCount: number | null
    commentCount: number | null
    subtaskCount: number | null
    completedSubtaskCount: number | null
    isRecurring: boolean | null
    nextOccurrence: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    projectId: number
    workspaceId: number
    organizationId: number
    key: number
    title: number
    description: number
    type: number
    status: number
    priority: number
    storyPoints: number
    estimatedHours: number
    actualHours: number
    assigneeId: number
    reporterId: number
    parentId: number
    epicId: number
    milestoneId: number
    sprintId: number
    boardColumnId: number
    position: number
    dueDate: number
    startDate: number
    completedAt: number
    labels: number
    tags: number
    customFields: number
    attachmentCount: number
    commentCount: number
    subtaskCount: number
    completedSubtaskCount: number
    watcherIds: number
    mentionIds: number
    isRecurring: number
    recurringConfig: number
    nextOccurrence: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    storyPoints?: true
    estimatedHours?: true
    actualHours?: true
    position?: true
    attachmentCount?: true
    commentCount?: true
    subtaskCount?: true
    completedSubtaskCount?: true
  }

  export type TaskSumAggregateInputType = {
    storyPoints?: true
    estimatedHours?: true
    actualHours?: true
    position?: true
    attachmentCount?: true
    commentCount?: true
    subtaskCount?: true
    completedSubtaskCount?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    projectId?: true
    workspaceId?: true
    organizationId?: true
    key?: true
    title?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    storyPoints?: true
    estimatedHours?: true
    actualHours?: true
    assigneeId?: true
    reporterId?: true
    parentId?: true
    epicId?: true
    milestoneId?: true
    sprintId?: true
    boardColumnId?: true
    position?: true
    dueDate?: true
    startDate?: true
    completedAt?: true
    attachmentCount?: true
    commentCount?: true
    subtaskCount?: true
    completedSubtaskCount?: true
    isRecurring?: true
    nextOccurrence?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    projectId?: true
    workspaceId?: true
    organizationId?: true
    key?: true
    title?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    storyPoints?: true
    estimatedHours?: true
    actualHours?: true
    assigneeId?: true
    reporterId?: true
    parentId?: true
    epicId?: true
    milestoneId?: true
    sprintId?: true
    boardColumnId?: true
    position?: true
    dueDate?: true
    startDate?: true
    completedAt?: true
    attachmentCount?: true
    commentCount?: true
    subtaskCount?: true
    completedSubtaskCount?: true
    isRecurring?: true
    nextOccurrence?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    projectId?: true
    workspaceId?: true
    organizationId?: true
    key?: true
    title?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    storyPoints?: true
    estimatedHours?: true
    actualHours?: true
    assigneeId?: true
    reporterId?: true
    parentId?: true
    epicId?: true
    milestoneId?: true
    sprintId?: true
    boardColumnId?: true
    position?: true
    dueDate?: true
    startDate?: true
    completedAt?: true
    labels?: true
    tags?: true
    customFields?: true
    attachmentCount?: true
    commentCount?: true
    subtaskCount?: true
    completedSubtaskCount?: true
    watcherIds?: true
    mentionIds?: true
    isRecurring?: true
    recurringConfig?: true
    nextOccurrence?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description: string | null
    type: $Enums.TaskType
    status: string
    priority: $Enums.Priority
    storyPoints: number | null
    estimatedHours: number | null
    actualHours: number | null
    assigneeId: string | null
    reporterId: string
    parentId: string | null
    epicId: string | null
    milestoneId: string | null
    sprintId: string | null
    boardColumnId: string | null
    position: number
    dueDate: Date | null
    startDate: Date | null
    completedAt: Date | null
    labels: string[]
    tags: string[]
    customFields: JsonValue
    attachmentCount: number
    commentCount: number
    subtaskCount: number
    completedSubtaskCount: number
    watcherIds: string[]
    mentionIds: string[]
    isRecurring: boolean
    recurringConfig: JsonValue | null
    nextOccurrence: Date | null
    createdBy: string
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    workspaceId?: boolean
    organizationId?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    storyPoints?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    assigneeId?: boolean
    reporterId?: boolean
    parentId?: boolean
    epicId?: boolean
    milestoneId?: boolean
    sprintId?: boolean
    boardColumnId?: boolean
    position?: boolean
    dueDate?: boolean
    startDate?: boolean
    completedAt?: boolean
    labels?: boolean
    tags?: boolean
    customFields?: boolean
    attachmentCount?: boolean
    commentCount?: boolean
    subtaskCount?: boolean
    completedSubtaskCount?: boolean
    watcherIds?: boolean
    mentionIds?: boolean
    isRecurring?: boolean
    recurringConfig?: boolean
    nextOccurrence?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    dependencies?: boolean | Task$dependenciesArgs<ExtArgs>
    dependents?: boolean | Task$dependentsArgs<ExtArgs>
    activity?: boolean | Task$activityArgs<ExtArgs>
    sequenceTracker?: boolean | Task$sequenceTrackerArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    workspaceId?: boolean
    organizationId?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    storyPoints?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    assigneeId?: boolean
    reporterId?: boolean
    parentId?: boolean
    epicId?: boolean
    milestoneId?: boolean
    sprintId?: boolean
    boardColumnId?: boolean
    position?: boolean
    dueDate?: boolean
    startDate?: boolean
    completedAt?: boolean
    labels?: boolean
    tags?: boolean
    customFields?: boolean
    attachmentCount?: boolean
    commentCount?: boolean
    subtaskCount?: boolean
    completedSubtaskCount?: boolean
    watcherIds?: boolean
    mentionIds?: boolean
    isRecurring?: boolean
    recurringConfig?: boolean
    nextOccurrence?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    parent?: boolean | Task$parentArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    projectId?: boolean
    workspaceId?: boolean
    organizationId?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    storyPoints?: boolean
    estimatedHours?: boolean
    actualHours?: boolean
    assigneeId?: boolean
    reporterId?: boolean
    parentId?: boolean
    epicId?: boolean
    milestoneId?: boolean
    sprintId?: boolean
    boardColumnId?: boolean
    position?: boolean
    dueDate?: boolean
    startDate?: boolean
    completedAt?: boolean
    labels?: boolean
    tags?: boolean
    customFields?: boolean
    attachmentCount?: boolean
    commentCount?: boolean
    subtaskCount?: boolean
    completedSubtaskCount?: boolean
    watcherIds?: boolean
    mentionIds?: boolean
    isRecurring?: boolean
    recurringConfig?: boolean
    nextOccurrence?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    parent?: boolean | Task$parentArgs<ExtArgs>
    dependencies?: boolean | Task$dependenciesArgs<ExtArgs>
    dependents?: boolean | Task$dependentsArgs<ExtArgs>
    activity?: boolean | Task$activityArgs<ExtArgs>
    sequenceTracker?: boolean | Task$sequenceTrackerArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Task$parentArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      subtasks: Prisma.$TaskPayload<ExtArgs>[]
      parent: Prisma.$TaskPayload<ExtArgs> | null
      dependencies: Prisma.$TaskDependencyPayload<ExtArgs>[]
      dependents: Prisma.$TaskDependencyPayload<ExtArgs>[]
      activity: Prisma.$TaskActivityPayload<ExtArgs>[]
      sequenceTracker: Prisma.$TaskSequencePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      workspaceId: string
      organizationId: string
      key: string
      title: string
      description: string | null
      type: $Enums.TaskType
      status: string
      priority: $Enums.Priority
      storyPoints: number | null
      estimatedHours: number | null
      actualHours: number | null
      assigneeId: string | null
      reporterId: string
      parentId: string | null
      epicId: string | null
      milestoneId: string | null
      sprintId: string | null
      boardColumnId: string | null
      position: number
      dueDate: Date | null
      startDate: Date | null
      completedAt: Date | null
      labels: string[]
      tags: string[]
      customFields: Prisma.JsonValue
      attachmentCount: number
      commentCount: number
      subtaskCount: number
      completedSubtaskCount: number
      watcherIds: string[]
      mentionIds: string[]
      isRecurring: boolean
      recurringConfig: Prisma.JsonValue | null
      nextOccurrence: Date | null
      createdBy: string
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    parent<T extends Task$parentArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    dependencies<T extends Task$dependenciesArgs<ExtArgs> = {}>(args?: Subset<T, Task$dependenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findMany"> | Null>
    dependents<T extends Task$dependentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$dependentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findMany"> | Null>
    activity<T extends Task$activityArgs<ExtArgs> = {}>(args?: Subset<T, Task$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany"> | Null>
    sequenceTracker<T extends Task$sequenceTrackerArgs<ExtArgs> = {}>(args?: Subset<T, Task$sequenceTrackerArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly workspaceId: FieldRef<"Task", 'String'>
    readonly organizationId: FieldRef<"Task", 'String'>
    readonly key: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'TaskType'>
    readonly status: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly storyPoints: FieldRef<"Task", 'Int'>
    readonly estimatedHours: FieldRef<"Task", 'Float'>
    readonly actualHours: FieldRef<"Task", 'Float'>
    readonly assigneeId: FieldRef<"Task", 'String'>
    readonly reporterId: FieldRef<"Task", 'String'>
    readonly parentId: FieldRef<"Task", 'String'>
    readonly epicId: FieldRef<"Task", 'String'>
    readonly milestoneId: FieldRef<"Task", 'String'>
    readonly sprintId: FieldRef<"Task", 'String'>
    readonly boardColumnId: FieldRef<"Task", 'String'>
    readonly position: FieldRef<"Task", 'Float'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly labels: FieldRef<"Task", 'String[]'>
    readonly tags: FieldRef<"Task", 'String[]'>
    readonly customFields: FieldRef<"Task", 'Json'>
    readonly attachmentCount: FieldRef<"Task", 'Int'>
    readonly commentCount: FieldRef<"Task", 'Int'>
    readonly subtaskCount: FieldRef<"Task", 'Int'>
    readonly completedSubtaskCount: FieldRef<"Task", 'Int'>
    readonly watcherIds: FieldRef<"Task", 'String[]'>
    readonly mentionIds: FieldRef<"Task", 'String[]'>
    readonly isRecurring: FieldRef<"Task", 'Boolean'>
    readonly recurringConfig: FieldRef<"Task", 'Json'>
    readonly nextOccurrence: FieldRef<"Task", 'DateTime'>
    readonly createdBy: FieldRef<"Task", 'String'>
    readonly updatedBy: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly deletedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.subtasks
   */
  export type Task$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.parent
   */
  export type Task$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.dependencies
   */
  export type Task$dependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    where?: TaskDependencyWhereInput
    orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[]
    cursor?: TaskDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[]
  }

  /**
   * Task.dependents
   */
  export type Task$dependentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    where?: TaskDependencyWhereInput
    orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[]
    cursor?: TaskDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[]
  }

  /**
   * Task.activity
   */
  export type Task$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    cursor?: TaskActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * Task.sequenceTracker
   */
  export type Task$sequenceTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    where?: TaskSequenceWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskSequence
   */

  export type AggregateTaskSequence = {
    _count: TaskSequenceCountAggregateOutputType | null
    _avg: TaskSequenceAvgAggregateOutputType | null
    _sum: TaskSequenceSumAggregateOutputType | null
    _min: TaskSequenceMinAggregateOutputType | null
    _max: TaskSequenceMaxAggregateOutputType | null
  }

  export type TaskSequenceAvgAggregateOutputType = {
    sequence: number | null
  }

  export type TaskSequenceSumAggregateOutputType = {
    sequence: number | null
  }

  export type TaskSequenceMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    taskId: string | null
    sequence: number | null
  }

  export type TaskSequenceMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    taskId: string | null
    sequence: number | null
  }

  export type TaskSequenceCountAggregateOutputType = {
    id: number
    projectId: number
    taskId: number
    sequence: number
    _all: number
  }


  export type TaskSequenceAvgAggregateInputType = {
    sequence?: true
  }

  export type TaskSequenceSumAggregateInputType = {
    sequence?: true
  }

  export type TaskSequenceMinAggregateInputType = {
    id?: true
    projectId?: true
    taskId?: true
    sequence?: true
  }

  export type TaskSequenceMaxAggregateInputType = {
    id?: true
    projectId?: true
    taskId?: true
    sequence?: true
  }

  export type TaskSequenceCountAggregateInputType = {
    id?: true
    projectId?: true
    taskId?: true
    sequence?: true
    _all?: true
  }

  export type TaskSequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSequence to aggregate.
     */
    where?: TaskSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSequences to fetch.
     */
    orderBy?: TaskSequenceOrderByWithRelationInput | TaskSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskSequences
    **/
    _count?: true | TaskSequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskSequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskSequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskSequenceMaxAggregateInputType
  }

  export type GetTaskSequenceAggregateType<T extends TaskSequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskSequence[P]>
      : GetScalarType<T[P], AggregateTaskSequence[P]>
  }




  export type TaskSequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSequenceWhereInput
    orderBy?: TaskSequenceOrderByWithAggregationInput | TaskSequenceOrderByWithAggregationInput[]
    by: TaskSequenceScalarFieldEnum[] | TaskSequenceScalarFieldEnum
    having?: TaskSequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskSequenceCountAggregateInputType | true
    _avg?: TaskSequenceAvgAggregateInputType
    _sum?: TaskSequenceSumAggregateInputType
    _min?: TaskSequenceMinAggregateInputType
    _max?: TaskSequenceMaxAggregateInputType
  }

  export type TaskSequenceGroupByOutputType = {
    id: string
    projectId: string
    taskId: string
    sequence: number
    _count: TaskSequenceCountAggregateOutputType | null
    _avg: TaskSequenceAvgAggregateOutputType | null
    _sum: TaskSequenceSumAggregateOutputType | null
    _min: TaskSequenceMinAggregateOutputType | null
    _max: TaskSequenceMaxAggregateOutputType | null
  }

  type GetTaskSequenceGroupByPayload<T extends TaskSequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskSequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskSequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskSequenceGroupByOutputType[P]>
            : GetScalarType<T[P], TaskSequenceGroupByOutputType[P]>
        }
      >
    >


  export type TaskSequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    taskId?: boolean
    sequence?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSequence"]>

  export type TaskSequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    taskId?: boolean
    sequence?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSequence"]>

  export type TaskSequenceSelectScalar = {
    id?: boolean
    projectId?: boolean
    taskId?: boolean
    sequence?: boolean
  }

  export type TaskSequenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskSequenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskSequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskSequence"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      taskId: string
      sequence: number
    }, ExtArgs["result"]["taskSequence"]>
    composites: {}
  }

  type TaskSequenceGetPayload<S extends boolean | null | undefined | TaskSequenceDefaultArgs> = $Result.GetResult<Prisma.$TaskSequencePayload, S>

  type TaskSequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskSequenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskSequenceCountAggregateInputType | true
    }

  export interface TaskSequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskSequence'], meta: { name: 'TaskSequence' } }
    /**
     * Find zero or one TaskSequence that matches the filter.
     * @param {TaskSequenceFindUniqueArgs} args - Arguments to find a TaskSequence
     * @example
     * // Get one TaskSequence
     * const taskSequence = await prisma.taskSequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskSequenceFindUniqueArgs>(args: SelectSubset<T, TaskSequenceFindUniqueArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskSequence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskSequenceFindUniqueOrThrowArgs} args - Arguments to find a TaskSequence
     * @example
     * // Get one TaskSequence
     * const taskSequence = await prisma.taskSequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskSequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskSequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceFindFirstArgs} args - Arguments to find a TaskSequence
     * @example
     * // Get one TaskSequence
     * const taskSequence = await prisma.taskSequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskSequenceFindFirstArgs>(args?: SelectSubset<T, TaskSequenceFindFirstArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskSequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceFindFirstOrThrowArgs} args - Arguments to find a TaskSequence
     * @example
     * // Get one TaskSequence
     * const taskSequence = await prisma.taskSequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskSequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskSequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskSequences
     * const taskSequences = await prisma.taskSequence.findMany()
     * 
     * // Get first 10 TaskSequences
     * const taskSequences = await prisma.taskSequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskSequenceWithIdOnly = await prisma.taskSequence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskSequenceFindManyArgs>(args?: SelectSubset<T, TaskSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskSequence.
     * @param {TaskSequenceCreateArgs} args - Arguments to create a TaskSequence.
     * @example
     * // Create one TaskSequence
     * const TaskSequence = await prisma.taskSequence.create({
     *   data: {
     *     // ... data to create a TaskSequence
     *   }
     * })
     * 
     */
    create<T extends TaskSequenceCreateArgs>(args: SelectSubset<T, TaskSequenceCreateArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskSequences.
     * @param {TaskSequenceCreateManyArgs} args - Arguments to create many TaskSequences.
     * @example
     * // Create many TaskSequences
     * const taskSequence = await prisma.taskSequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskSequenceCreateManyArgs>(args?: SelectSubset<T, TaskSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskSequences and returns the data saved in the database.
     * @param {TaskSequenceCreateManyAndReturnArgs} args - Arguments to create many TaskSequences.
     * @example
     * // Create many TaskSequences
     * const taskSequence = await prisma.taskSequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskSequences and only return the `id`
     * const taskSequenceWithIdOnly = await prisma.taskSequence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskSequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskSequence.
     * @param {TaskSequenceDeleteArgs} args - Arguments to delete one TaskSequence.
     * @example
     * // Delete one TaskSequence
     * const TaskSequence = await prisma.taskSequence.delete({
     *   where: {
     *     // ... filter to delete one TaskSequence
     *   }
     * })
     * 
     */
    delete<T extends TaskSequenceDeleteArgs>(args: SelectSubset<T, TaskSequenceDeleteArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskSequence.
     * @param {TaskSequenceUpdateArgs} args - Arguments to update one TaskSequence.
     * @example
     * // Update one TaskSequence
     * const taskSequence = await prisma.taskSequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskSequenceUpdateArgs>(args: SelectSubset<T, TaskSequenceUpdateArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskSequences.
     * @param {TaskSequenceDeleteManyArgs} args - Arguments to filter TaskSequences to delete.
     * @example
     * // Delete a few TaskSequences
     * const { count } = await prisma.taskSequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskSequenceDeleteManyArgs>(args?: SelectSubset<T, TaskSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskSequences
     * const taskSequence = await prisma.taskSequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskSequenceUpdateManyArgs>(args: SelectSubset<T, TaskSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskSequence.
     * @param {TaskSequenceUpsertArgs} args - Arguments to update or create a TaskSequence.
     * @example
     * // Update or create a TaskSequence
     * const taskSequence = await prisma.taskSequence.upsert({
     *   create: {
     *     // ... data to create a TaskSequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskSequence we want to update
     *   }
     * })
     */
    upsert<T extends TaskSequenceUpsertArgs>(args: SelectSubset<T, TaskSequenceUpsertArgs<ExtArgs>>): Prisma__TaskSequenceClient<$Result.GetResult<Prisma.$TaskSequencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceCountArgs} args - Arguments to filter TaskSequences to count.
     * @example
     * // Count the number of TaskSequences
     * const count = await prisma.taskSequence.count({
     *   where: {
     *     // ... the filter for the TaskSequences we want to count
     *   }
     * })
    **/
    count<T extends TaskSequenceCountArgs>(
      args?: Subset<T, TaskSequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskSequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskSequenceAggregateArgs>(args: Subset<T, TaskSequenceAggregateArgs>): Prisma.PrismaPromise<GetTaskSequenceAggregateType<T>>

    /**
     * Group by TaskSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSequenceGroupByArgs} args - Group by arguments.
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
      T extends TaskSequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskSequenceGroupByArgs['orderBy'] }
        : { orderBy?: TaskSequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskSequence model
   */
  readonly fields: TaskSequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskSequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskSequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TaskSequence model
   */ 
  interface TaskSequenceFieldRefs {
    readonly id: FieldRef<"TaskSequence", 'String'>
    readonly projectId: FieldRef<"TaskSequence", 'String'>
    readonly taskId: FieldRef<"TaskSequence", 'String'>
    readonly sequence: FieldRef<"TaskSequence", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskSequence findUnique
   */
  export type TaskSequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskSequence to fetch.
     */
    where: TaskSequenceWhereUniqueInput
  }

  /**
   * TaskSequence findUniqueOrThrow
   */
  export type TaskSequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskSequence to fetch.
     */
    where: TaskSequenceWhereUniqueInput
  }

  /**
   * TaskSequence findFirst
   */
  export type TaskSequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskSequence to fetch.
     */
    where?: TaskSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSequences to fetch.
     */
    orderBy?: TaskSequenceOrderByWithRelationInput | TaskSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSequences.
     */
    cursor?: TaskSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSequences.
     */
    distinct?: TaskSequenceScalarFieldEnum | TaskSequenceScalarFieldEnum[]
  }

  /**
   * TaskSequence findFirstOrThrow
   */
  export type TaskSequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskSequence to fetch.
     */
    where?: TaskSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSequences to fetch.
     */
    orderBy?: TaskSequenceOrderByWithRelationInput | TaskSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSequences.
     */
    cursor?: TaskSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSequences.
     */
    distinct?: TaskSequenceScalarFieldEnum | TaskSequenceScalarFieldEnum[]
  }

  /**
   * TaskSequence findMany
   */
  export type TaskSequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * Filter, which TaskSequences to fetch.
     */
    where?: TaskSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSequences to fetch.
     */
    orderBy?: TaskSequenceOrderByWithRelationInput | TaskSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskSequences.
     */
    cursor?: TaskSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSequences.
     */
    skip?: number
    distinct?: TaskSequenceScalarFieldEnum | TaskSequenceScalarFieldEnum[]
  }

  /**
   * TaskSequence create
   */
  export type TaskSequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskSequence.
     */
    data: XOR<TaskSequenceCreateInput, TaskSequenceUncheckedCreateInput>
  }

  /**
   * TaskSequence createMany
   */
  export type TaskSequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskSequences.
     */
    data: TaskSequenceCreateManyInput | TaskSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskSequence createManyAndReturn
   */
  export type TaskSequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskSequences.
     */
    data: TaskSequenceCreateManyInput | TaskSequenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSequence update
   */
  export type TaskSequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskSequence.
     */
    data: XOR<TaskSequenceUpdateInput, TaskSequenceUncheckedUpdateInput>
    /**
     * Choose, which TaskSequence to update.
     */
    where: TaskSequenceWhereUniqueInput
  }

  /**
   * TaskSequence updateMany
   */
  export type TaskSequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskSequences.
     */
    data: XOR<TaskSequenceUpdateManyMutationInput, TaskSequenceUncheckedUpdateManyInput>
    /**
     * Filter which TaskSequences to update
     */
    where?: TaskSequenceWhereInput
  }

  /**
   * TaskSequence upsert
   */
  export type TaskSequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskSequence to update in case it exists.
     */
    where: TaskSequenceWhereUniqueInput
    /**
     * In case the TaskSequence found by the `where` argument doesn't exist, create a new TaskSequence with this data.
     */
    create: XOR<TaskSequenceCreateInput, TaskSequenceUncheckedCreateInput>
    /**
     * In case the TaskSequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskSequenceUpdateInput, TaskSequenceUncheckedUpdateInput>
  }

  /**
   * TaskSequence delete
   */
  export type TaskSequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
    /**
     * Filter which TaskSequence to delete.
     */
    where: TaskSequenceWhereUniqueInput
  }

  /**
   * TaskSequence deleteMany
   */
  export type TaskSequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSequences to delete
     */
    where?: TaskSequenceWhereInput
  }

  /**
   * TaskSequence without action
   */
  export type TaskSequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSequence
     */
    select?: TaskSequenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSequenceInclude<ExtArgs> | null
  }


  /**
   * Model ProjectKeyCounter
   */

  export type AggregateProjectKeyCounter = {
    _count: ProjectKeyCounterCountAggregateOutputType | null
    _avg: ProjectKeyCounterAvgAggregateOutputType | null
    _sum: ProjectKeyCounterSumAggregateOutputType | null
    _min: ProjectKeyCounterMinAggregateOutputType | null
    _max: ProjectKeyCounterMaxAggregateOutputType | null
  }

  export type ProjectKeyCounterAvgAggregateOutputType = {
    lastKey: number | null
  }

  export type ProjectKeyCounterSumAggregateOutputType = {
    lastKey: number | null
  }

  export type ProjectKeyCounterMinAggregateOutputType = {
    projectId: string | null
    lastKey: number | null
    updatedAt: Date | null
  }

  export type ProjectKeyCounterMaxAggregateOutputType = {
    projectId: string | null
    lastKey: number | null
    updatedAt: Date | null
  }

  export type ProjectKeyCounterCountAggregateOutputType = {
    projectId: number
    lastKey: number
    updatedAt: number
    _all: number
  }


  export type ProjectKeyCounterAvgAggregateInputType = {
    lastKey?: true
  }

  export type ProjectKeyCounterSumAggregateInputType = {
    lastKey?: true
  }

  export type ProjectKeyCounterMinAggregateInputType = {
    projectId?: true
    lastKey?: true
    updatedAt?: true
  }

  export type ProjectKeyCounterMaxAggregateInputType = {
    projectId?: true
    lastKey?: true
    updatedAt?: true
  }

  export type ProjectKeyCounterCountAggregateInputType = {
    projectId?: true
    lastKey?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectKeyCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectKeyCounter to aggregate.
     */
    where?: ProjectKeyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKeyCounters to fetch.
     */
    orderBy?: ProjectKeyCounterOrderByWithRelationInput | ProjectKeyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectKeyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKeyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKeyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectKeyCounters
    **/
    _count?: true | ProjectKeyCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectKeyCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectKeyCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectKeyCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectKeyCounterMaxAggregateInputType
  }

  export type GetProjectKeyCounterAggregateType<T extends ProjectKeyCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectKeyCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectKeyCounter[P]>
      : GetScalarType<T[P], AggregateProjectKeyCounter[P]>
  }




  export type ProjectKeyCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectKeyCounterWhereInput
    orderBy?: ProjectKeyCounterOrderByWithAggregationInput | ProjectKeyCounterOrderByWithAggregationInput[]
    by: ProjectKeyCounterScalarFieldEnum[] | ProjectKeyCounterScalarFieldEnum
    having?: ProjectKeyCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectKeyCounterCountAggregateInputType | true
    _avg?: ProjectKeyCounterAvgAggregateInputType
    _sum?: ProjectKeyCounterSumAggregateInputType
    _min?: ProjectKeyCounterMinAggregateInputType
    _max?: ProjectKeyCounterMaxAggregateInputType
  }

  export type ProjectKeyCounterGroupByOutputType = {
    projectId: string
    lastKey: number
    updatedAt: Date
    _count: ProjectKeyCounterCountAggregateOutputType | null
    _avg: ProjectKeyCounterAvgAggregateOutputType | null
    _sum: ProjectKeyCounterSumAggregateOutputType | null
    _min: ProjectKeyCounterMinAggregateOutputType | null
    _max: ProjectKeyCounterMaxAggregateOutputType | null
  }

  type GetProjectKeyCounterGroupByPayload<T extends ProjectKeyCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectKeyCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectKeyCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectKeyCounterGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectKeyCounterGroupByOutputType[P]>
        }
      >
    >


  export type ProjectKeyCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    lastKey?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectKeyCounter"]>

  export type ProjectKeyCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    lastKey?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectKeyCounter"]>

  export type ProjectKeyCounterSelectScalar = {
    projectId?: boolean
    lastKey?: boolean
    updatedAt?: boolean
  }


  export type $ProjectKeyCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectKeyCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      lastKey: number
      updatedAt: Date
    }, ExtArgs["result"]["projectKeyCounter"]>
    composites: {}
  }

  type ProjectKeyCounterGetPayload<S extends boolean | null | undefined | ProjectKeyCounterDefaultArgs> = $Result.GetResult<Prisma.$ProjectKeyCounterPayload, S>

  type ProjectKeyCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectKeyCounterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectKeyCounterCountAggregateInputType | true
    }

  export interface ProjectKeyCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectKeyCounter'], meta: { name: 'ProjectKeyCounter' } }
    /**
     * Find zero or one ProjectKeyCounter that matches the filter.
     * @param {ProjectKeyCounterFindUniqueArgs} args - Arguments to find a ProjectKeyCounter
     * @example
     * // Get one ProjectKeyCounter
     * const projectKeyCounter = await prisma.projectKeyCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectKeyCounterFindUniqueArgs>(args: SelectSubset<T, ProjectKeyCounterFindUniqueArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectKeyCounter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectKeyCounterFindUniqueOrThrowArgs} args - Arguments to find a ProjectKeyCounter
     * @example
     * // Get one ProjectKeyCounter
     * const projectKeyCounter = await prisma.projectKeyCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectKeyCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectKeyCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectKeyCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterFindFirstArgs} args - Arguments to find a ProjectKeyCounter
     * @example
     * // Get one ProjectKeyCounter
     * const projectKeyCounter = await prisma.projectKeyCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectKeyCounterFindFirstArgs>(args?: SelectSubset<T, ProjectKeyCounterFindFirstArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectKeyCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterFindFirstOrThrowArgs} args - Arguments to find a ProjectKeyCounter
     * @example
     * // Get one ProjectKeyCounter
     * const projectKeyCounter = await prisma.projectKeyCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectKeyCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectKeyCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectKeyCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectKeyCounters
     * const projectKeyCounters = await prisma.projectKeyCounter.findMany()
     * 
     * // Get first 10 ProjectKeyCounters
     * const projectKeyCounters = await prisma.projectKeyCounter.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectKeyCounterWithProjectIdOnly = await prisma.projectKeyCounter.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectKeyCounterFindManyArgs>(args?: SelectSubset<T, ProjectKeyCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectKeyCounter.
     * @param {ProjectKeyCounterCreateArgs} args - Arguments to create a ProjectKeyCounter.
     * @example
     * // Create one ProjectKeyCounter
     * const ProjectKeyCounter = await prisma.projectKeyCounter.create({
     *   data: {
     *     // ... data to create a ProjectKeyCounter
     *   }
     * })
     * 
     */
    create<T extends ProjectKeyCounterCreateArgs>(args: SelectSubset<T, ProjectKeyCounterCreateArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectKeyCounters.
     * @param {ProjectKeyCounterCreateManyArgs} args - Arguments to create many ProjectKeyCounters.
     * @example
     * // Create many ProjectKeyCounters
     * const projectKeyCounter = await prisma.projectKeyCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectKeyCounterCreateManyArgs>(args?: SelectSubset<T, ProjectKeyCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectKeyCounters and returns the data saved in the database.
     * @param {ProjectKeyCounterCreateManyAndReturnArgs} args - Arguments to create many ProjectKeyCounters.
     * @example
     * // Create many ProjectKeyCounters
     * const projectKeyCounter = await prisma.projectKeyCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectKeyCounters and only return the `projectId`
     * const projectKeyCounterWithProjectIdOnly = await prisma.projectKeyCounter.createManyAndReturn({ 
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectKeyCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectKeyCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectKeyCounter.
     * @param {ProjectKeyCounterDeleteArgs} args - Arguments to delete one ProjectKeyCounter.
     * @example
     * // Delete one ProjectKeyCounter
     * const ProjectKeyCounter = await prisma.projectKeyCounter.delete({
     *   where: {
     *     // ... filter to delete one ProjectKeyCounter
     *   }
     * })
     * 
     */
    delete<T extends ProjectKeyCounterDeleteArgs>(args: SelectSubset<T, ProjectKeyCounterDeleteArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectKeyCounter.
     * @param {ProjectKeyCounterUpdateArgs} args - Arguments to update one ProjectKeyCounter.
     * @example
     * // Update one ProjectKeyCounter
     * const projectKeyCounter = await prisma.projectKeyCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectKeyCounterUpdateArgs>(args: SelectSubset<T, ProjectKeyCounterUpdateArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectKeyCounters.
     * @param {ProjectKeyCounterDeleteManyArgs} args - Arguments to filter ProjectKeyCounters to delete.
     * @example
     * // Delete a few ProjectKeyCounters
     * const { count } = await prisma.projectKeyCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectKeyCounterDeleteManyArgs>(args?: SelectSubset<T, ProjectKeyCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectKeyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectKeyCounters
     * const projectKeyCounter = await prisma.projectKeyCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectKeyCounterUpdateManyArgs>(args: SelectSubset<T, ProjectKeyCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectKeyCounter.
     * @param {ProjectKeyCounterUpsertArgs} args - Arguments to update or create a ProjectKeyCounter.
     * @example
     * // Update or create a ProjectKeyCounter
     * const projectKeyCounter = await prisma.projectKeyCounter.upsert({
     *   create: {
     *     // ... data to create a ProjectKeyCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectKeyCounter we want to update
     *   }
     * })
     */
    upsert<T extends ProjectKeyCounterUpsertArgs>(args: SelectSubset<T, ProjectKeyCounterUpsertArgs<ExtArgs>>): Prisma__ProjectKeyCounterClient<$Result.GetResult<Prisma.$ProjectKeyCounterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectKeyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterCountArgs} args - Arguments to filter ProjectKeyCounters to count.
     * @example
     * // Count the number of ProjectKeyCounters
     * const count = await prisma.projectKeyCounter.count({
     *   where: {
     *     // ... the filter for the ProjectKeyCounters we want to count
     *   }
     * })
    **/
    count<T extends ProjectKeyCounterCountArgs>(
      args?: Subset<T, ProjectKeyCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectKeyCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectKeyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectKeyCounterAggregateArgs>(args: Subset<T, ProjectKeyCounterAggregateArgs>): Prisma.PrismaPromise<GetProjectKeyCounterAggregateType<T>>

    /**
     * Group by ProjectKeyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectKeyCounterGroupByArgs} args - Group by arguments.
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
      T extends ProjectKeyCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectKeyCounterGroupByArgs['orderBy'] }
        : { orderBy?: ProjectKeyCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectKeyCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectKeyCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectKeyCounter model
   */
  readonly fields: ProjectKeyCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectKeyCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectKeyCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProjectKeyCounter model
   */ 
  interface ProjectKeyCounterFieldRefs {
    readonly projectId: FieldRef<"ProjectKeyCounter", 'String'>
    readonly lastKey: FieldRef<"ProjectKeyCounter", 'Int'>
    readonly updatedAt: FieldRef<"ProjectKeyCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectKeyCounter findUnique
   */
  export type ProjectKeyCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * Filter, which ProjectKeyCounter to fetch.
     */
    where: ProjectKeyCounterWhereUniqueInput
  }

  /**
   * ProjectKeyCounter findUniqueOrThrow
   */
  export type ProjectKeyCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * Filter, which ProjectKeyCounter to fetch.
     */
    where: ProjectKeyCounterWhereUniqueInput
  }

  /**
   * ProjectKeyCounter findFirst
   */
  export type ProjectKeyCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * Filter, which ProjectKeyCounter to fetch.
     */
    where?: ProjectKeyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKeyCounters to fetch.
     */
    orderBy?: ProjectKeyCounterOrderByWithRelationInput | ProjectKeyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectKeyCounters.
     */
    cursor?: ProjectKeyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKeyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKeyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectKeyCounters.
     */
    distinct?: ProjectKeyCounterScalarFieldEnum | ProjectKeyCounterScalarFieldEnum[]
  }

  /**
   * ProjectKeyCounter findFirstOrThrow
   */
  export type ProjectKeyCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * Filter, which ProjectKeyCounter to fetch.
     */
    where?: ProjectKeyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKeyCounters to fetch.
     */
    orderBy?: ProjectKeyCounterOrderByWithRelationInput | ProjectKeyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectKeyCounters.
     */
    cursor?: ProjectKeyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKeyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKeyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectKeyCounters.
     */
    distinct?: ProjectKeyCounterScalarFieldEnum | ProjectKeyCounterScalarFieldEnum[]
  }

  /**
   * ProjectKeyCounter findMany
   */
  export type ProjectKeyCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * Filter, which ProjectKeyCounters to fetch.
     */
    where?: ProjectKeyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectKeyCounters to fetch.
     */
    orderBy?: ProjectKeyCounterOrderByWithRelationInput | ProjectKeyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectKeyCounters.
     */
    cursor?: ProjectKeyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectKeyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectKeyCounters.
     */
    skip?: number
    distinct?: ProjectKeyCounterScalarFieldEnum | ProjectKeyCounterScalarFieldEnum[]
  }

  /**
   * ProjectKeyCounter create
   */
  export type ProjectKeyCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * The data needed to create a ProjectKeyCounter.
     */
    data: XOR<ProjectKeyCounterCreateInput, ProjectKeyCounterUncheckedCreateInput>
  }

  /**
   * ProjectKeyCounter createMany
   */
  export type ProjectKeyCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectKeyCounters.
     */
    data: ProjectKeyCounterCreateManyInput | ProjectKeyCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectKeyCounter createManyAndReturn
   */
  export type ProjectKeyCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectKeyCounters.
     */
    data: ProjectKeyCounterCreateManyInput | ProjectKeyCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectKeyCounter update
   */
  export type ProjectKeyCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * The data needed to update a ProjectKeyCounter.
     */
    data: XOR<ProjectKeyCounterUpdateInput, ProjectKeyCounterUncheckedUpdateInput>
    /**
     * Choose, which ProjectKeyCounter to update.
     */
    where: ProjectKeyCounterWhereUniqueInput
  }

  /**
   * ProjectKeyCounter updateMany
   */
  export type ProjectKeyCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectKeyCounters.
     */
    data: XOR<ProjectKeyCounterUpdateManyMutationInput, ProjectKeyCounterUncheckedUpdateManyInput>
    /**
     * Filter which ProjectKeyCounters to update
     */
    where?: ProjectKeyCounterWhereInput
  }

  /**
   * ProjectKeyCounter upsert
   */
  export type ProjectKeyCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * The filter to search for the ProjectKeyCounter to update in case it exists.
     */
    where: ProjectKeyCounterWhereUniqueInput
    /**
     * In case the ProjectKeyCounter found by the `where` argument doesn't exist, create a new ProjectKeyCounter with this data.
     */
    create: XOR<ProjectKeyCounterCreateInput, ProjectKeyCounterUncheckedCreateInput>
    /**
     * In case the ProjectKeyCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectKeyCounterUpdateInput, ProjectKeyCounterUncheckedUpdateInput>
  }

  /**
   * ProjectKeyCounter delete
   */
  export type ProjectKeyCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
    /**
     * Filter which ProjectKeyCounter to delete.
     */
    where: ProjectKeyCounterWhereUniqueInput
  }

  /**
   * ProjectKeyCounter deleteMany
   */
  export type ProjectKeyCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectKeyCounters to delete
     */
    where?: ProjectKeyCounterWhereInput
  }

  /**
   * ProjectKeyCounter without action
   */
  export type ProjectKeyCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectKeyCounter
     */
    select?: ProjectKeyCounterSelect<ExtArgs> | null
  }


  /**
   * Model TaskDependency
   */

  export type AggregateTaskDependency = {
    _count: TaskDependencyCountAggregateOutputType | null
    _min: TaskDependencyMinAggregateOutputType | null
    _max: TaskDependencyMaxAggregateOutputType | null
  }

  export type TaskDependencyMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    dependsOnId: string | null
    type: $Enums.DependencyType | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type TaskDependencyMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    dependsOnId: string | null
    type: $Enums.DependencyType | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type TaskDependencyCountAggregateOutputType = {
    id: number
    taskId: number
    dependsOnId: number
    type: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type TaskDependencyMinAggregateInputType = {
    id?: true
    taskId?: true
    dependsOnId?: true
    type?: true
    createdBy?: true
    createdAt?: true
  }

  export type TaskDependencyMaxAggregateInputType = {
    id?: true
    taskId?: true
    dependsOnId?: true
    type?: true
    createdBy?: true
    createdAt?: true
  }

  export type TaskDependencyCountAggregateInputType = {
    id?: true
    taskId?: true
    dependsOnId?: true
    type?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type TaskDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskDependency to aggregate.
     */
    where?: TaskDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskDependencies to fetch.
     */
    orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskDependencies
    **/
    _count?: true | TaskDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskDependencyMaxAggregateInputType
  }

  export type GetTaskDependencyAggregateType<T extends TaskDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskDependency[P]>
      : GetScalarType<T[P], AggregateTaskDependency[P]>
  }




  export type TaskDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskDependencyWhereInput
    orderBy?: TaskDependencyOrderByWithAggregationInput | TaskDependencyOrderByWithAggregationInput[]
    by: TaskDependencyScalarFieldEnum[] | TaskDependencyScalarFieldEnum
    having?: TaskDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskDependencyCountAggregateInputType | true
    _min?: TaskDependencyMinAggregateInputType
    _max?: TaskDependencyMaxAggregateInputType
  }

  export type TaskDependencyGroupByOutputType = {
    id: string
    taskId: string
    dependsOnId: string
    type: $Enums.DependencyType
    createdBy: string
    createdAt: Date
    _count: TaskDependencyCountAggregateOutputType | null
    _min: TaskDependencyMinAggregateOutputType | null
    _max: TaskDependencyMaxAggregateOutputType | null
  }

  type GetTaskDependencyGroupByPayload<T extends TaskDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], TaskDependencyGroupByOutputType[P]>
        }
      >
    >


  export type TaskDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    dependsOnId?: boolean
    type?: boolean
    createdBy?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    dependsOn?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskDependency"]>

  export type TaskDependencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    dependsOnId?: boolean
    type?: boolean
    createdBy?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    dependsOn?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskDependency"]>

  export type TaskDependencySelectScalar = {
    id?: boolean
    taskId?: boolean
    dependsOnId?: boolean
    type?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type TaskDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    dependsOn?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskDependencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    dependsOn?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskDependency"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      dependsOn: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      dependsOnId: string
      type: $Enums.DependencyType
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["taskDependency"]>
    composites: {}
  }

  type TaskDependencyGetPayload<S extends boolean | null | undefined | TaskDependencyDefaultArgs> = $Result.GetResult<Prisma.$TaskDependencyPayload, S>

  type TaskDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskDependencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskDependencyCountAggregateInputType | true
    }

  export interface TaskDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskDependency'], meta: { name: 'TaskDependency' } }
    /**
     * Find zero or one TaskDependency that matches the filter.
     * @param {TaskDependencyFindUniqueArgs} args - Arguments to find a TaskDependency
     * @example
     * // Get one TaskDependency
     * const taskDependency = await prisma.taskDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskDependencyFindUniqueArgs>(args: SelectSubset<T, TaskDependencyFindUniqueArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskDependency that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskDependencyFindUniqueOrThrowArgs} args - Arguments to find a TaskDependency
     * @example
     * // Get one TaskDependency
     * const taskDependency = await prisma.taskDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskDependencyFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskDependencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyFindFirstArgs} args - Arguments to find a TaskDependency
     * @example
     * // Get one TaskDependency
     * const taskDependency = await prisma.taskDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskDependencyFindFirstArgs>(args?: SelectSubset<T, TaskDependencyFindFirstArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyFindFirstOrThrowArgs} args - Arguments to find a TaskDependency
     * @example
     * // Get one TaskDependency
     * const taskDependency = await prisma.taskDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskDependencyFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskDependencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskDependencies
     * const taskDependencies = await prisma.taskDependency.findMany()
     * 
     * // Get first 10 TaskDependencies
     * const taskDependencies = await prisma.taskDependency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskDependencyWithIdOnly = await prisma.taskDependency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskDependencyFindManyArgs>(args?: SelectSubset<T, TaskDependencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskDependency.
     * @param {TaskDependencyCreateArgs} args - Arguments to create a TaskDependency.
     * @example
     * // Create one TaskDependency
     * const TaskDependency = await prisma.taskDependency.create({
     *   data: {
     *     // ... data to create a TaskDependency
     *   }
     * })
     * 
     */
    create<T extends TaskDependencyCreateArgs>(args: SelectSubset<T, TaskDependencyCreateArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskDependencies.
     * @param {TaskDependencyCreateManyArgs} args - Arguments to create many TaskDependencies.
     * @example
     * // Create many TaskDependencies
     * const taskDependency = await prisma.taskDependency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskDependencyCreateManyArgs>(args?: SelectSubset<T, TaskDependencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskDependencies and returns the data saved in the database.
     * @param {TaskDependencyCreateManyAndReturnArgs} args - Arguments to create many TaskDependencies.
     * @example
     * // Create many TaskDependencies
     * const taskDependency = await prisma.taskDependency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskDependencies and only return the `id`
     * const taskDependencyWithIdOnly = await prisma.taskDependency.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskDependencyCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskDependencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskDependency.
     * @param {TaskDependencyDeleteArgs} args - Arguments to delete one TaskDependency.
     * @example
     * // Delete one TaskDependency
     * const TaskDependency = await prisma.taskDependency.delete({
     *   where: {
     *     // ... filter to delete one TaskDependency
     *   }
     * })
     * 
     */
    delete<T extends TaskDependencyDeleteArgs>(args: SelectSubset<T, TaskDependencyDeleteArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskDependency.
     * @param {TaskDependencyUpdateArgs} args - Arguments to update one TaskDependency.
     * @example
     * // Update one TaskDependency
     * const taskDependency = await prisma.taskDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskDependencyUpdateArgs>(args: SelectSubset<T, TaskDependencyUpdateArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskDependencies.
     * @param {TaskDependencyDeleteManyArgs} args - Arguments to filter TaskDependencies to delete.
     * @example
     * // Delete a few TaskDependencies
     * const { count } = await prisma.taskDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDependencyDeleteManyArgs>(args?: SelectSubset<T, TaskDependencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskDependencies
     * const taskDependency = await prisma.taskDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskDependencyUpdateManyArgs>(args: SelectSubset<T, TaskDependencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskDependency.
     * @param {TaskDependencyUpsertArgs} args - Arguments to update or create a TaskDependency.
     * @example
     * // Update or create a TaskDependency
     * const taskDependency = await prisma.taskDependency.upsert({
     *   create: {
     *     // ... data to create a TaskDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskDependency we want to update
     *   }
     * })
     */
    upsert<T extends TaskDependencyUpsertArgs>(args: SelectSubset<T, TaskDependencyUpsertArgs<ExtArgs>>): Prisma__TaskDependencyClient<$Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyCountArgs} args - Arguments to filter TaskDependencies to count.
     * @example
     * // Count the number of TaskDependencies
     * const count = await prisma.taskDependency.count({
     *   where: {
     *     // ... the filter for the TaskDependencies we want to count
     *   }
     * })
    **/
    count<T extends TaskDependencyCountArgs>(
      args?: Subset<T, TaskDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskDependencyAggregateArgs>(args: Subset<T, TaskDependencyAggregateArgs>): Prisma.PrismaPromise<GetTaskDependencyAggregateType<T>>

    /**
     * Group by TaskDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskDependencyGroupByArgs} args - Group by arguments.
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
      T extends TaskDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskDependencyGroupByArgs['orderBy'] }
        : { orderBy?: TaskDependencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskDependency model
   */
  readonly fields: TaskDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    dependsOn<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TaskDependency model
   */ 
  interface TaskDependencyFieldRefs {
    readonly id: FieldRef<"TaskDependency", 'String'>
    readonly taskId: FieldRef<"TaskDependency", 'String'>
    readonly dependsOnId: FieldRef<"TaskDependency", 'String'>
    readonly type: FieldRef<"TaskDependency", 'DependencyType'>
    readonly createdBy: FieldRef<"TaskDependency", 'String'>
    readonly createdAt: FieldRef<"TaskDependency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskDependency findUnique
   */
  export type TaskDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * Filter, which TaskDependency to fetch.
     */
    where: TaskDependencyWhereUniqueInput
  }

  /**
   * TaskDependency findUniqueOrThrow
   */
  export type TaskDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * Filter, which TaskDependency to fetch.
     */
    where: TaskDependencyWhereUniqueInput
  }

  /**
   * TaskDependency findFirst
   */
  export type TaskDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * Filter, which TaskDependency to fetch.
     */
    where?: TaskDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskDependencies to fetch.
     */
    orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskDependencies.
     */
    cursor?: TaskDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskDependencies.
     */
    distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[]
  }

  /**
   * TaskDependency findFirstOrThrow
   */
  export type TaskDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * Filter, which TaskDependency to fetch.
     */
    where?: TaskDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskDependencies to fetch.
     */
    orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskDependencies.
     */
    cursor?: TaskDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskDependencies.
     */
    distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[]
  }

  /**
   * TaskDependency findMany
   */
  export type TaskDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * Filter, which TaskDependencies to fetch.
     */
    where?: TaskDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskDependencies to fetch.
     */
    orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskDependencies.
     */
    cursor?: TaskDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskDependencies.
     */
    skip?: number
    distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[]
  }

  /**
   * TaskDependency create
   */
  export type TaskDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskDependency.
     */
    data: XOR<TaskDependencyCreateInput, TaskDependencyUncheckedCreateInput>
  }

  /**
   * TaskDependency createMany
   */
  export type TaskDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskDependencies.
     */
    data: TaskDependencyCreateManyInput | TaskDependencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskDependency createManyAndReturn
   */
  export type TaskDependencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskDependencies.
     */
    data: TaskDependencyCreateManyInput | TaskDependencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskDependency update
   */
  export type TaskDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskDependency.
     */
    data: XOR<TaskDependencyUpdateInput, TaskDependencyUncheckedUpdateInput>
    /**
     * Choose, which TaskDependency to update.
     */
    where: TaskDependencyWhereUniqueInput
  }

  /**
   * TaskDependency updateMany
   */
  export type TaskDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskDependencies.
     */
    data: XOR<TaskDependencyUpdateManyMutationInput, TaskDependencyUncheckedUpdateManyInput>
    /**
     * Filter which TaskDependencies to update
     */
    where?: TaskDependencyWhereInput
  }

  /**
   * TaskDependency upsert
   */
  export type TaskDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskDependency to update in case it exists.
     */
    where: TaskDependencyWhereUniqueInput
    /**
     * In case the TaskDependency found by the `where` argument doesn't exist, create a new TaskDependency with this data.
     */
    create: XOR<TaskDependencyCreateInput, TaskDependencyUncheckedCreateInput>
    /**
     * In case the TaskDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskDependencyUpdateInput, TaskDependencyUncheckedUpdateInput>
  }

  /**
   * TaskDependency delete
   */
  export type TaskDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
    /**
     * Filter which TaskDependency to delete.
     */
    where: TaskDependencyWhereUniqueInput
  }

  /**
   * TaskDependency deleteMany
   */
  export type TaskDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskDependencies to delete
     */
    where?: TaskDependencyWhereInput
  }

  /**
   * TaskDependency without action
   */
  export type TaskDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskDependency
     */
    select?: TaskDependencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskDependencyInclude<ExtArgs> | null
  }


  /**
   * Model TaskActivity
   */

  export type AggregateTaskActivity = {
    _count: TaskActivityCountAggregateOutputType | null
    _min: TaskActivityMinAggregateOutputType | null
    _max: TaskActivityMaxAggregateOutputType | null
  }

  export type TaskActivityMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    action: string | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type TaskActivityMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    action: string | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type TaskActivityCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    action: number
    field: number
    oldValue: number
    newValue: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type TaskActivityMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    action?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type TaskActivityMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    action?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type TaskActivityCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    action?: true
    field?: true
    oldValue?: true
    newValue?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type TaskActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskActivity to aggregate.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskActivities
    **/
    _count?: true | TaskActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskActivityMaxAggregateInputType
  }

  export type GetTaskActivityAggregateType<T extends TaskActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskActivity[P]>
      : GetScalarType<T[P], AggregateTaskActivity[P]>
  }




  export type TaskActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithAggregationInput | TaskActivityOrderByWithAggregationInput[]
    by: TaskActivityScalarFieldEnum[] | TaskActivityScalarFieldEnum
    having?: TaskActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskActivityCountAggregateInputType | true
    _min?: TaskActivityMinAggregateInputType
    _max?: TaskActivityMaxAggregateInputType
  }

  export type TaskActivityGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    action: string
    field: string | null
    oldValue: string | null
    newValue: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: TaskActivityCountAggregateOutputType | null
    _min: TaskActivityMinAggregateOutputType | null
    _max: TaskActivityMaxAggregateOutputType | null
  }

  type GetTaskActivityGroupByPayload<T extends TaskActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskActivityGroupByOutputType[P]>
            : GetScalarType<T[P], TaskActivityGroupByOutputType[P]>
        }
      >
    >


  export type TaskActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    action?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    metadata?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskActivity"]>

  export type TaskActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    action?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    metadata?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskActivity"]>

  export type TaskActivitySelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    action?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type TaskActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskActivity"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      action: string
      field: string | null
      oldValue: string | null
      newValue: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["taskActivity"]>
    composites: {}
  }

  type TaskActivityGetPayload<S extends boolean | null | undefined | TaskActivityDefaultArgs> = $Result.GetResult<Prisma.$TaskActivityPayload, S>

  type TaskActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskActivityCountAggregateInputType | true
    }

  export interface TaskActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskActivity'], meta: { name: 'TaskActivity' } }
    /**
     * Find zero or one TaskActivity that matches the filter.
     * @param {TaskActivityFindUniqueArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskActivityFindUniqueArgs>(args: SelectSubset<T, TaskActivityFindUniqueArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskActivityFindUniqueOrThrowArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindFirstArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskActivityFindFirstArgs>(args?: SelectSubset<T, TaskActivityFindFirstArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindFirstOrThrowArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskActivities
     * const taskActivities = await prisma.taskActivity.findMany()
     * 
     * // Get first 10 TaskActivities
     * const taskActivities = await prisma.taskActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskActivityWithIdOnly = await prisma.taskActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskActivityFindManyArgs>(args?: SelectSubset<T, TaskActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskActivity.
     * @param {TaskActivityCreateArgs} args - Arguments to create a TaskActivity.
     * @example
     * // Create one TaskActivity
     * const TaskActivity = await prisma.taskActivity.create({
     *   data: {
     *     // ... data to create a TaskActivity
     *   }
     * })
     * 
     */
    create<T extends TaskActivityCreateArgs>(args: SelectSubset<T, TaskActivityCreateArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskActivities.
     * @param {TaskActivityCreateManyArgs} args - Arguments to create many TaskActivities.
     * @example
     * // Create many TaskActivities
     * const taskActivity = await prisma.taskActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskActivityCreateManyArgs>(args?: SelectSubset<T, TaskActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskActivities and returns the data saved in the database.
     * @param {TaskActivityCreateManyAndReturnArgs} args - Arguments to create many TaskActivities.
     * @example
     * // Create many TaskActivities
     * const taskActivity = await prisma.taskActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskActivities and only return the `id`
     * const taskActivityWithIdOnly = await prisma.taskActivity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskActivity.
     * @param {TaskActivityDeleteArgs} args - Arguments to delete one TaskActivity.
     * @example
     * // Delete one TaskActivity
     * const TaskActivity = await prisma.taskActivity.delete({
     *   where: {
     *     // ... filter to delete one TaskActivity
     *   }
     * })
     * 
     */
    delete<T extends TaskActivityDeleteArgs>(args: SelectSubset<T, TaskActivityDeleteArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskActivity.
     * @param {TaskActivityUpdateArgs} args - Arguments to update one TaskActivity.
     * @example
     * // Update one TaskActivity
     * const taskActivity = await prisma.taskActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskActivityUpdateArgs>(args: SelectSubset<T, TaskActivityUpdateArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskActivities.
     * @param {TaskActivityDeleteManyArgs} args - Arguments to filter TaskActivities to delete.
     * @example
     * // Delete a few TaskActivities
     * const { count } = await prisma.taskActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskActivityDeleteManyArgs>(args?: SelectSubset<T, TaskActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskActivities
     * const taskActivity = await prisma.taskActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskActivityUpdateManyArgs>(args: SelectSubset<T, TaskActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskActivity.
     * @param {TaskActivityUpsertArgs} args - Arguments to update or create a TaskActivity.
     * @example
     * // Update or create a TaskActivity
     * const taskActivity = await prisma.taskActivity.upsert({
     *   create: {
     *     // ... data to create a TaskActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskActivity we want to update
     *   }
     * })
     */
    upsert<T extends TaskActivityUpsertArgs>(args: SelectSubset<T, TaskActivityUpsertArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityCountArgs} args - Arguments to filter TaskActivities to count.
     * @example
     * // Count the number of TaskActivities
     * const count = await prisma.taskActivity.count({
     *   where: {
     *     // ... the filter for the TaskActivities we want to count
     *   }
     * })
    **/
    count<T extends TaskActivityCountArgs>(
      args?: Subset<T, TaskActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskActivityAggregateArgs>(args: Subset<T, TaskActivityAggregateArgs>): Prisma.PrismaPromise<GetTaskActivityAggregateType<T>>

    /**
     * Group by TaskActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityGroupByArgs} args - Group by arguments.
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
      T extends TaskActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskActivityGroupByArgs['orderBy'] }
        : { orderBy?: TaskActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskActivity model
   */
  readonly fields: TaskActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TaskActivity model
   */ 
  interface TaskActivityFieldRefs {
    readonly id: FieldRef<"TaskActivity", 'String'>
    readonly taskId: FieldRef<"TaskActivity", 'String'>
    readonly userId: FieldRef<"TaskActivity", 'String'>
    readonly action: FieldRef<"TaskActivity", 'String'>
    readonly field: FieldRef<"TaskActivity", 'String'>
    readonly oldValue: FieldRef<"TaskActivity", 'String'>
    readonly newValue: FieldRef<"TaskActivity", 'String'>
    readonly metadata: FieldRef<"TaskActivity", 'Json'>
    readonly createdAt: FieldRef<"TaskActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskActivity findUnique
   */
  export type TaskActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity findUniqueOrThrow
   */
  export type TaskActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity findFirst
   */
  export type TaskActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity findFirstOrThrow
   */
  export type TaskActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity findMany
   */
  export type TaskActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivities to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity create
   */
  export type TaskActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskActivity.
     */
    data: XOR<TaskActivityCreateInput, TaskActivityUncheckedCreateInput>
  }

  /**
   * TaskActivity createMany
   */
  export type TaskActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskActivities.
     */
    data: TaskActivityCreateManyInput | TaskActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskActivity createManyAndReturn
   */
  export type TaskActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskActivities.
     */
    data: TaskActivityCreateManyInput | TaskActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskActivity update
   */
  export type TaskActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskActivity.
     */
    data: XOR<TaskActivityUpdateInput, TaskActivityUncheckedUpdateInput>
    /**
     * Choose, which TaskActivity to update.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity updateMany
   */
  export type TaskActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskActivities.
     */
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyInput>
    /**
     * Filter which TaskActivities to update
     */
    where?: TaskActivityWhereInput
  }

  /**
   * TaskActivity upsert
   */
  export type TaskActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskActivity to update in case it exists.
     */
    where: TaskActivityWhereUniqueInput
    /**
     * In case the TaskActivity found by the `where` argument doesn't exist, create a new TaskActivity with this data.
     */
    create: XOR<TaskActivityCreateInput, TaskActivityUncheckedCreateInput>
    /**
     * In case the TaskActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskActivityUpdateInput, TaskActivityUncheckedUpdateInput>
  }

  /**
   * TaskActivity delete
   */
  export type TaskActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter which TaskActivity to delete.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity deleteMany
   */
  export type TaskActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskActivities to delete
     */
    where?: TaskActivityWhereInput
  }

  /**
   * TaskActivity without action
   */
  export type TaskActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
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


  export const TaskScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    workspaceId: 'workspaceId',
    organizationId: 'organizationId',
    key: 'key',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    priority: 'priority',
    storyPoints: 'storyPoints',
    estimatedHours: 'estimatedHours',
    actualHours: 'actualHours',
    assigneeId: 'assigneeId',
    reporterId: 'reporterId',
    parentId: 'parentId',
    epicId: 'epicId',
    milestoneId: 'milestoneId',
    sprintId: 'sprintId',
    boardColumnId: 'boardColumnId',
    position: 'position',
    dueDate: 'dueDate',
    startDate: 'startDate',
    completedAt: 'completedAt',
    labels: 'labels',
    tags: 'tags',
    customFields: 'customFields',
    attachmentCount: 'attachmentCount',
    commentCount: 'commentCount',
    subtaskCount: 'subtaskCount',
    completedSubtaskCount: 'completedSubtaskCount',
    watcherIds: 'watcherIds',
    mentionIds: 'mentionIds',
    isRecurring: 'isRecurring',
    recurringConfig: 'recurringConfig',
    nextOccurrence: 'nextOccurrence',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskSequenceScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    taskId: 'taskId',
    sequence: 'sequence'
  };

  export type TaskSequenceScalarFieldEnum = (typeof TaskSequenceScalarFieldEnum)[keyof typeof TaskSequenceScalarFieldEnum]


  export const ProjectKeyCounterScalarFieldEnum: {
    projectId: 'projectId',
    lastKey: 'lastKey',
    updatedAt: 'updatedAt'
  };

  export type ProjectKeyCounterScalarFieldEnum = (typeof ProjectKeyCounterScalarFieldEnum)[keyof typeof ProjectKeyCounterScalarFieldEnum]


  export const TaskDependencyScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    dependsOnId: 'dependsOnId',
    type: 'type',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type TaskDependencyScalarFieldEnum = (typeof TaskDependencyScalarFieldEnum)[keyof typeof TaskDependencyScalarFieldEnum]


  export const TaskActivityScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    action: 'action',
    field: 'field',
    oldValue: 'oldValue',
    newValue: 'newValue',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type TaskActivityScalarFieldEnum = (typeof TaskActivityScalarFieldEnum)[keyof typeof TaskActivityScalarFieldEnum]


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
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DependencyType'
   */
  export type EnumDependencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DependencyType'>
    


  /**
   * Reference to a field of type 'DependencyType[]'
   */
  export type ListEnumDependencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DependencyType[]'>
    
  /**
   * Deep Input Types
   */


  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    workspaceId?: StringFilter<"Task"> | string
    organizationId?: StringFilter<"Task"> | string
    key?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    status?: StringFilter<"Task"> | string
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    storyPoints?: IntNullableFilter<"Task"> | number | null
    estimatedHours?: FloatNullableFilter<"Task"> | number | null
    actualHours?: FloatNullableFilter<"Task"> | number | null
    assigneeId?: StringNullableFilter<"Task"> | string | null
    reporterId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    epicId?: StringNullableFilter<"Task"> | string | null
    milestoneId?: StringNullableFilter<"Task"> | string | null
    sprintId?: StringNullableFilter<"Task"> | string | null
    boardColumnId?: StringNullableFilter<"Task"> | string | null
    position?: FloatFilter<"Task"> | number
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    labels?: StringNullableListFilter<"Task">
    tags?: StringNullableListFilter<"Task">
    customFields?: JsonFilter<"Task">
    attachmentCount?: IntFilter<"Task"> | number
    commentCount?: IntFilter<"Task"> | number
    subtaskCount?: IntFilter<"Task"> | number
    completedSubtaskCount?: IntFilter<"Task"> | number
    watcherIds?: StringNullableListFilter<"Task">
    mentionIds?: StringNullableListFilter<"Task">
    isRecurring?: BoolFilter<"Task"> | boolean
    recurringConfig?: JsonNullableFilter<"Task">
    nextOccurrence?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdBy?: StringFilter<"Task"> | string
    updatedBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    subtasks?: TaskListRelationFilter
    parent?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
    dependencies?: TaskDependencyListRelationFilter
    dependents?: TaskDependencyListRelationFilter
    activity?: TaskActivityListRelationFilter
    sequenceTracker?: XOR<TaskSequenceNullableRelationFilter, TaskSequenceWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    workspaceId?: SortOrder
    organizationId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    actualHours?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    reporterId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    epicId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    sprintId?: SortOrderInput | SortOrder
    boardColumnId?: SortOrderInput | SortOrder
    position?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    labels?: SortOrder
    tags?: SortOrder
    customFields?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
    watcherIds?: SortOrder
    mentionIds?: SortOrder
    isRecurring?: SortOrder
    recurringConfig?: SortOrderInput | SortOrder
    nextOccurrence?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subtasks?: TaskOrderByRelationAggregateInput
    parent?: TaskOrderByWithRelationInput
    dependencies?: TaskDependencyOrderByRelationAggregateInput
    dependents?: TaskDependencyOrderByRelationAggregateInput
    activity?: TaskActivityOrderByRelationAggregateInput
    sequenceTracker?: TaskSequenceOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_key?: TaskProjectIdKeyCompoundUniqueInput
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    projectId?: StringFilter<"Task"> | string
    workspaceId?: StringFilter<"Task"> | string
    organizationId?: StringFilter<"Task"> | string
    key?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    status?: StringFilter<"Task"> | string
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    storyPoints?: IntNullableFilter<"Task"> | number | null
    estimatedHours?: FloatNullableFilter<"Task"> | number | null
    actualHours?: FloatNullableFilter<"Task"> | number | null
    assigneeId?: StringNullableFilter<"Task"> | string | null
    reporterId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    epicId?: StringNullableFilter<"Task"> | string | null
    milestoneId?: StringNullableFilter<"Task"> | string | null
    sprintId?: StringNullableFilter<"Task"> | string | null
    boardColumnId?: StringNullableFilter<"Task"> | string | null
    position?: FloatFilter<"Task"> | number
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    labels?: StringNullableListFilter<"Task">
    tags?: StringNullableListFilter<"Task">
    customFields?: JsonFilter<"Task">
    attachmentCount?: IntFilter<"Task"> | number
    commentCount?: IntFilter<"Task"> | number
    subtaskCount?: IntFilter<"Task"> | number
    completedSubtaskCount?: IntFilter<"Task"> | number
    watcherIds?: StringNullableListFilter<"Task">
    mentionIds?: StringNullableListFilter<"Task">
    isRecurring?: BoolFilter<"Task"> | boolean
    recurringConfig?: JsonNullableFilter<"Task">
    nextOccurrence?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdBy?: StringFilter<"Task"> | string
    updatedBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    subtasks?: TaskListRelationFilter
    parent?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
    dependencies?: TaskDependencyListRelationFilter
    dependents?: TaskDependencyListRelationFilter
    activity?: TaskActivityListRelationFilter
    sequenceTracker?: XOR<TaskSequenceNullableRelationFilter, TaskSequenceWhereInput> | null
  }, "id" | "projectId_key">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    workspaceId?: SortOrder
    organizationId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    actualHours?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    reporterId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    epicId?: SortOrderInput | SortOrder
    milestoneId?: SortOrderInput | SortOrder
    sprintId?: SortOrderInput | SortOrder
    boardColumnId?: SortOrderInput | SortOrder
    position?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    labels?: SortOrder
    tags?: SortOrder
    customFields?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
    watcherIds?: SortOrder
    mentionIds?: SortOrder
    isRecurring?: SortOrder
    recurringConfig?: SortOrderInput | SortOrder
    nextOccurrence?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    projectId?: StringWithAggregatesFilter<"Task"> | string
    workspaceId?: StringWithAggregatesFilter<"Task"> | string
    organizationId?: StringWithAggregatesFilter<"Task"> | string
    key?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    type?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
    status?: StringWithAggregatesFilter<"Task"> | string
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    storyPoints?: IntNullableWithAggregatesFilter<"Task"> | number | null
    estimatedHours?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    actualHours?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    assigneeId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reporterId?: StringWithAggregatesFilter<"Task"> | string
    parentId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    epicId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    milestoneId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    sprintId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    boardColumnId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    position?: FloatWithAggregatesFilter<"Task"> | number
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    labels?: StringNullableListFilter<"Task">
    tags?: StringNullableListFilter<"Task">
    customFields?: JsonWithAggregatesFilter<"Task">
    attachmentCount?: IntWithAggregatesFilter<"Task"> | number
    commentCount?: IntWithAggregatesFilter<"Task"> | number
    subtaskCount?: IntWithAggregatesFilter<"Task"> | number
    completedSubtaskCount?: IntWithAggregatesFilter<"Task"> | number
    watcherIds?: StringNullableListFilter<"Task">
    mentionIds?: StringNullableListFilter<"Task">
    isRecurring?: BoolWithAggregatesFilter<"Task"> | boolean
    recurringConfig?: JsonNullableWithAggregatesFilter<"Task">
    nextOccurrence?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"Task"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type TaskSequenceWhereInput = {
    AND?: TaskSequenceWhereInput | TaskSequenceWhereInput[]
    OR?: TaskSequenceWhereInput[]
    NOT?: TaskSequenceWhereInput | TaskSequenceWhereInput[]
    id?: StringFilter<"TaskSequence"> | string
    projectId?: StringFilter<"TaskSequence"> | string
    taskId?: StringFilter<"TaskSequence"> | string
    sequence?: IntFilter<"TaskSequence"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type TaskSequenceOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    sequence?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskSequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    taskId?: string
    AND?: TaskSequenceWhereInput | TaskSequenceWhereInput[]
    OR?: TaskSequenceWhereInput[]
    NOT?: TaskSequenceWhereInput | TaskSequenceWhereInput[]
    sequence?: IntFilter<"TaskSequence"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id" | "projectId" | "taskId">

  export type TaskSequenceOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    sequence?: SortOrder
    _count?: TaskSequenceCountOrderByAggregateInput
    _avg?: TaskSequenceAvgOrderByAggregateInput
    _max?: TaskSequenceMaxOrderByAggregateInput
    _min?: TaskSequenceMinOrderByAggregateInput
    _sum?: TaskSequenceSumOrderByAggregateInput
  }

  export type TaskSequenceScalarWhereWithAggregatesInput = {
    AND?: TaskSequenceScalarWhereWithAggregatesInput | TaskSequenceScalarWhereWithAggregatesInput[]
    OR?: TaskSequenceScalarWhereWithAggregatesInput[]
    NOT?: TaskSequenceScalarWhereWithAggregatesInput | TaskSequenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskSequence"> | string
    projectId?: StringWithAggregatesFilter<"TaskSequence"> | string
    taskId?: StringWithAggregatesFilter<"TaskSequence"> | string
    sequence?: IntWithAggregatesFilter<"TaskSequence"> | number
  }

  export type ProjectKeyCounterWhereInput = {
    AND?: ProjectKeyCounterWhereInput | ProjectKeyCounterWhereInput[]
    OR?: ProjectKeyCounterWhereInput[]
    NOT?: ProjectKeyCounterWhereInput | ProjectKeyCounterWhereInput[]
    projectId?: StringFilter<"ProjectKeyCounter"> | string
    lastKey?: IntFilter<"ProjectKeyCounter"> | number
    updatedAt?: DateTimeFilter<"ProjectKeyCounter"> | Date | string
  }

  export type ProjectKeyCounterOrderByWithRelationInput = {
    projectId?: SortOrder
    lastKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectKeyCounterWhereUniqueInput = Prisma.AtLeast<{
    projectId?: string
    AND?: ProjectKeyCounterWhereInput | ProjectKeyCounterWhereInput[]
    OR?: ProjectKeyCounterWhereInput[]
    NOT?: ProjectKeyCounterWhereInput | ProjectKeyCounterWhereInput[]
    lastKey?: IntFilter<"ProjectKeyCounter"> | number
    updatedAt?: DateTimeFilter<"ProjectKeyCounter"> | Date | string
  }, "projectId">

  export type ProjectKeyCounterOrderByWithAggregationInput = {
    projectId?: SortOrder
    lastKey?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectKeyCounterCountOrderByAggregateInput
    _avg?: ProjectKeyCounterAvgOrderByAggregateInput
    _max?: ProjectKeyCounterMaxOrderByAggregateInput
    _min?: ProjectKeyCounterMinOrderByAggregateInput
    _sum?: ProjectKeyCounterSumOrderByAggregateInput
  }

  export type ProjectKeyCounterScalarWhereWithAggregatesInput = {
    AND?: ProjectKeyCounterScalarWhereWithAggregatesInput | ProjectKeyCounterScalarWhereWithAggregatesInput[]
    OR?: ProjectKeyCounterScalarWhereWithAggregatesInput[]
    NOT?: ProjectKeyCounterScalarWhereWithAggregatesInput | ProjectKeyCounterScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"ProjectKeyCounter"> | string
    lastKey?: IntWithAggregatesFilter<"ProjectKeyCounter"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectKeyCounter"> | Date | string
  }

  export type TaskDependencyWhereInput = {
    AND?: TaskDependencyWhereInput | TaskDependencyWhereInput[]
    OR?: TaskDependencyWhereInput[]
    NOT?: TaskDependencyWhereInput | TaskDependencyWhereInput[]
    id?: StringFilter<"TaskDependency"> | string
    taskId?: StringFilter<"TaskDependency"> | string
    dependsOnId?: StringFilter<"TaskDependency"> | string
    type?: EnumDependencyTypeFilter<"TaskDependency"> | $Enums.DependencyType
    createdBy?: StringFilter<"TaskDependency"> | string
    createdAt?: DateTimeFilter<"TaskDependency"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    dependsOn?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type TaskDependencyOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    dependsOnId?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    dependsOn?: TaskOrderByWithRelationInput
  }

  export type TaskDependencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_dependsOnId?: TaskDependencyTaskIdDependsOnIdCompoundUniqueInput
    AND?: TaskDependencyWhereInput | TaskDependencyWhereInput[]
    OR?: TaskDependencyWhereInput[]
    NOT?: TaskDependencyWhereInput | TaskDependencyWhereInput[]
    taskId?: StringFilter<"TaskDependency"> | string
    dependsOnId?: StringFilter<"TaskDependency"> | string
    type?: EnumDependencyTypeFilter<"TaskDependency"> | $Enums.DependencyType
    createdBy?: StringFilter<"TaskDependency"> | string
    createdAt?: DateTimeFilter<"TaskDependency"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    dependsOn?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id" | "taskId_dependsOnId">

  export type TaskDependencyOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    dependsOnId?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: TaskDependencyCountOrderByAggregateInput
    _max?: TaskDependencyMaxOrderByAggregateInput
    _min?: TaskDependencyMinOrderByAggregateInput
  }

  export type TaskDependencyScalarWhereWithAggregatesInput = {
    AND?: TaskDependencyScalarWhereWithAggregatesInput | TaskDependencyScalarWhereWithAggregatesInput[]
    OR?: TaskDependencyScalarWhereWithAggregatesInput[]
    NOT?: TaskDependencyScalarWhereWithAggregatesInput | TaskDependencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskDependency"> | string
    taskId?: StringWithAggregatesFilter<"TaskDependency"> | string
    dependsOnId?: StringWithAggregatesFilter<"TaskDependency"> | string
    type?: EnumDependencyTypeWithAggregatesFilter<"TaskDependency"> | $Enums.DependencyType
    createdBy?: StringWithAggregatesFilter<"TaskDependency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskDependency"> | Date | string
  }

  export type TaskActivityWhereInput = {
    AND?: TaskActivityWhereInput | TaskActivityWhereInput[]
    OR?: TaskActivityWhereInput[]
    NOT?: TaskActivityWhereInput | TaskActivityWhereInput[]
    id?: StringFilter<"TaskActivity"> | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringFilter<"TaskActivity"> | string
    action?: StringFilter<"TaskActivity"> | string
    field?: StringNullableFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableFilter<"TaskActivity"> | string | null
    newValue?: StringNullableFilter<"TaskActivity"> | string | null
    metadata?: JsonNullableFilter<"TaskActivity">
    createdAt?: DateTimeFilter<"TaskActivity"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type TaskActivityOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    field?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskActivityWhereInput | TaskActivityWhereInput[]
    OR?: TaskActivityWhereInput[]
    NOT?: TaskActivityWhereInput | TaskActivityWhereInput[]
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringFilter<"TaskActivity"> | string
    action?: StringFilter<"TaskActivity"> | string
    field?: StringNullableFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableFilter<"TaskActivity"> | string | null
    newValue?: StringNullableFilter<"TaskActivity"> | string | null
    metadata?: JsonNullableFilter<"TaskActivity">
    createdAt?: DateTimeFilter<"TaskActivity"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskActivityOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    field?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskActivityCountOrderByAggregateInput
    _max?: TaskActivityMaxOrderByAggregateInput
    _min?: TaskActivityMinOrderByAggregateInput
  }

  export type TaskActivityScalarWhereWithAggregatesInput = {
    AND?: TaskActivityScalarWhereWithAggregatesInput | TaskActivityScalarWhereWithAggregatesInput[]
    OR?: TaskActivityScalarWhereWithAggregatesInput[]
    NOT?: TaskActivityScalarWhereWithAggregatesInput | TaskActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskActivity"> | string
    taskId?: StringWithAggregatesFilter<"TaskActivity"> | string
    userId?: StringWithAggregatesFilter<"TaskActivity"> | string
    action?: StringWithAggregatesFilter<"TaskActivity"> | string
    field?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"TaskActivity">
    createdAt?: DateTimeWithAggregatesFilter<"TaskActivity"> | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskSequenceCreateInput = {
    id?: string
    projectId: string
    sequence: number
    task: TaskCreateNestedOneWithoutSequenceTrackerInput
  }

  export type TaskSequenceUncheckedCreateInput = {
    id?: string
    projectId: string
    taskId: string
    sequence: number
  }

  export type TaskSequenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutSequenceTrackerNestedInput
  }

  export type TaskSequenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSequenceCreateManyInput = {
    id?: string
    projectId: string
    taskId: string
    sequence: number
  }

  export type TaskSequenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSequenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectKeyCounterCreateInput = {
    projectId: string
    lastKey?: number
    updatedAt?: Date | string
  }

  export type ProjectKeyCounterUncheckedCreateInput = {
    projectId: string
    lastKey?: number
    updatedAt?: Date | string
  }

  export type ProjectKeyCounterUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    lastKey?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectKeyCounterUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    lastKey?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectKeyCounterCreateManyInput = {
    projectId: string
    lastKey?: number
    updatedAt?: Date | string
  }

  export type ProjectKeyCounterUpdateManyMutationInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    lastKey?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectKeyCounterUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    lastKey?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskDependencyCreateInput = {
    id?: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutDependenciesInput
    dependsOn: TaskCreateNestedOneWithoutDependentsInput
  }

  export type TaskDependencyUncheckedCreateInput = {
    id?: string
    taskId: string
    dependsOnId: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
  }

  export type TaskDependencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput
    dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput
  }

  export type TaskDependencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskDependencyCreateManyInput = {
    id?: string
    taskId: string
    dependsOnId: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
  }

  export type TaskDependencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskDependencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityCreateInput = {
    id?: string
    userId: string
    action: string
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutActivityInput
  }

  export type TaskActivityUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    action: string
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutActivityNestedInput
  }

  export type TaskActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    action: string
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
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

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskNullableRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type TaskDependencyListRelationFilter = {
    every?: TaskDependencyWhereInput
    some?: TaskDependencyWhereInput
    none?: TaskDependencyWhereInput
  }

  export type TaskActivityListRelationFilter = {
    every?: TaskActivityWhereInput
    some?: TaskActivityWhereInput
    none?: TaskActivityWhereInput
  }

  export type TaskSequenceNullableRelationFilter = {
    is?: TaskSequenceWhereInput | null
    isNot?: TaskSequenceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskProjectIdKeyCompoundUniqueInput = {
    projectId: string
    key: string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    workspaceId?: SortOrder
    organizationId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    assigneeId?: SortOrder
    reporterId?: SortOrder
    parentId?: SortOrder
    epicId?: SortOrder
    milestoneId?: SortOrder
    sprintId?: SortOrder
    boardColumnId?: SortOrder
    position?: SortOrder
    dueDate?: SortOrder
    startDate?: SortOrder
    completedAt?: SortOrder
    labels?: SortOrder
    tags?: SortOrder
    customFields?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
    watcherIds?: SortOrder
    mentionIds?: SortOrder
    isRecurring?: SortOrder
    recurringConfig?: SortOrder
    nextOccurrence?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    storyPoints?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    position?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    workspaceId?: SortOrder
    organizationId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    assigneeId?: SortOrder
    reporterId?: SortOrder
    parentId?: SortOrder
    epicId?: SortOrder
    milestoneId?: SortOrder
    sprintId?: SortOrder
    boardColumnId?: SortOrder
    position?: SortOrder
    dueDate?: SortOrder
    startDate?: SortOrder
    completedAt?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
    isRecurring?: SortOrder
    nextOccurrence?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    workspaceId?: SortOrder
    organizationId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    assigneeId?: SortOrder
    reporterId?: SortOrder
    parentId?: SortOrder
    epicId?: SortOrder
    milestoneId?: SortOrder
    sprintId?: SortOrder
    boardColumnId?: SortOrder
    position?: SortOrder
    dueDate?: SortOrder
    startDate?: SortOrder
    completedAt?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
    isRecurring?: SortOrder
    nextOccurrence?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    storyPoints?: SortOrder
    estimatedHours?: SortOrder
    actualHours?: SortOrder
    position?: SortOrder
    attachmentCount?: SortOrder
    commentCount?: SortOrder
    subtaskCount?: SortOrder
    completedSubtaskCount?: SortOrder
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

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskSequenceCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    sequence?: SortOrder
  }

  export type TaskSequenceAvgOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type TaskSequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    sequence?: SortOrder
  }

  export type TaskSequenceMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    sequence?: SortOrder
  }

  export type TaskSequenceSumOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type ProjectKeyCounterCountOrderByAggregateInput = {
    projectId?: SortOrder
    lastKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectKeyCounterAvgOrderByAggregateInput = {
    lastKey?: SortOrder
  }

  export type ProjectKeyCounterMaxOrderByAggregateInput = {
    projectId?: SortOrder
    lastKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectKeyCounterMinOrderByAggregateInput = {
    projectId?: SortOrder
    lastKey?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectKeyCounterSumOrderByAggregateInput = {
    lastKey?: SortOrder
  }

  export type EnumDependencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeFilter<$PrismaModel> | $Enums.DependencyType
  }

  export type TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = {
    taskId: string
    dependsOnId: string
  }

  export type TaskDependencyCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    dependsOnId?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskDependencyMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    dependsOnId?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskDependencyMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    dependsOnId?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDependencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.DependencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDependencyTypeFilter<$PrismaModel>
    _max?: NestedEnumDependencyTypeFilter<$PrismaModel>
  }

  export type TaskActivityCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskActivityMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskCreatelabelsInput = {
    set: string[]
  }

  export type TaskCreatetagsInput = {
    set: string[]
  }

  export type TaskCreatewatcherIdsInput = {
    set: string[]
  }

  export type TaskCreatementionIdsInput = {
    set: string[]
  }

  export type TaskCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskDependencyCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput> | TaskDependencyCreateWithoutTaskInput[] | TaskDependencyUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput | TaskDependencyCreateOrConnectWithoutTaskInput[]
    createMany?: TaskDependencyCreateManyTaskInputEnvelope
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
  }

  export type TaskDependencyCreateNestedManyWithoutDependsOnInput = {
    create?: XOR<TaskDependencyCreateWithoutDependsOnInput, TaskDependencyUncheckedCreateWithoutDependsOnInput> | TaskDependencyCreateWithoutDependsOnInput[] | TaskDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput | TaskDependencyCreateOrConnectWithoutDependsOnInput[]
    createMany?: TaskDependencyCreateManyDependsOnInputEnvelope
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
  }

  export type TaskActivityCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type TaskSequenceCreateNestedOneWithoutTaskInput = {
    create?: XOR<TaskSequenceCreateWithoutTaskInput, TaskSequenceUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TaskSequenceCreateOrConnectWithoutTaskInput
    connect?: TaskSequenceWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskDependencyUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput> | TaskDependencyCreateWithoutTaskInput[] | TaskDependencyUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput | TaskDependencyCreateOrConnectWithoutTaskInput[]
    createMany?: TaskDependencyCreateManyTaskInputEnvelope
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
  }

  export type TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput = {
    create?: XOR<TaskDependencyCreateWithoutDependsOnInput, TaskDependencyUncheckedCreateWithoutDependsOnInput> | TaskDependencyCreateWithoutDependsOnInput[] | TaskDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput | TaskDependencyCreateOrConnectWithoutDependsOnInput[]
    createMany?: TaskDependencyCreateManyDependsOnInputEnvelope
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
  }

  export type TaskActivityUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type TaskSequenceUncheckedCreateNestedOneWithoutTaskInput = {
    create?: XOR<TaskSequenceCreateWithoutTaskInput, TaskSequenceUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TaskSequenceCreateOrConnectWithoutTaskInput
    connect?: TaskSequenceWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdatelabelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdatewatcherIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdatementionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateOneWithoutSubtasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    upsert?: TaskUpsertWithoutSubtasksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubtasksInput, TaskUpdateWithoutSubtasksInput>, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskDependencyUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput> | TaskDependencyCreateWithoutTaskInput[] | TaskDependencyUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput | TaskDependencyCreateOrConnectWithoutTaskInput[]
    upsert?: TaskDependencyUpsertWithWhereUniqueWithoutTaskInput | TaskDependencyUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskDependencyCreateManyTaskInputEnvelope
    set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    update?: TaskDependencyUpdateWithWhereUniqueWithoutTaskInput | TaskDependencyUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskDependencyUpdateManyWithWhereWithoutTaskInput | TaskDependencyUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[]
  }

  export type TaskDependencyUpdateManyWithoutDependsOnNestedInput = {
    create?: XOR<TaskDependencyCreateWithoutDependsOnInput, TaskDependencyUncheckedCreateWithoutDependsOnInput> | TaskDependencyCreateWithoutDependsOnInput[] | TaskDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput | TaskDependencyCreateOrConnectWithoutDependsOnInput[]
    upsert?: TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput | TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput[]
    createMany?: TaskDependencyCreateManyDependsOnInputEnvelope
    set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    update?: TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput | TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput[]
    updateMany?: TaskDependencyUpdateManyWithWhereWithoutDependsOnInput | TaskDependencyUpdateManyWithWhereWithoutDependsOnInput[]
    deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[]
  }

  export type TaskActivityUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutTaskInput | TaskActivityUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutTaskInput | TaskActivityUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutTaskInput | TaskActivityUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type TaskSequenceUpdateOneWithoutTaskNestedInput = {
    create?: XOR<TaskSequenceCreateWithoutTaskInput, TaskSequenceUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TaskSequenceCreateOrConnectWithoutTaskInput
    upsert?: TaskSequenceUpsertWithoutTaskInput
    disconnect?: TaskSequenceWhereInput | boolean
    delete?: TaskSequenceWhereInput | boolean
    connect?: TaskSequenceWhereUniqueInput
    update?: XOR<XOR<TaskSequenceUpdateToOneWithWhereWithoutTaskInput, TaskSequenceUpdateWithoutTaskInput>, TaskSequenceUncheckedUpdateWithoutTaskInput>
  }

  export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput> | TaskDependencyCreateWithoutTaskInput[] | TaskDependencyUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput | TaskDependencyCreateOrConnectWithoutTaskInput[]
    upsert?: TaskDependencyUpsertWithWhereUniqueWithoutTaskInput | TaskDependencyUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskDependencyCreateManyTaskInputEnvelope
    set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    update?: TaskDependencyUpdateWithWhereUniqueWithoutTaskInput | TaskDependencyUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskDependencyUpdateManyWithWhereWithoutTaskInput | TaskDependencyUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[]
  }

  export type TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput = {
    create?: XOR<TaskDependencyCreateWithoutDependsOnInput, TaskDependencyUncheckedCreateWithoutDependsOnInput> | TaskDependencyCreateWithoutDependsOnInput[] | TaskDependencyUncheckedCreateWithoutDependsOnInput[]
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput | TaskDependencyCreateOrConnectWithoutDependsOnInput[]
    upsert?: TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput | TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput[]
    createMany?: TaskDependencyCreateManyDependsOnInputEnvelope
    set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[]
    update?: TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput | TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput[]
    updateMany?: TaskDependencyUpdateManyWithWhereWithoutDependsOnInput | TaskDependencyUpdateManyWithWhereWithoutDependsOnInput[]
    deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[]
  }

  export type TaskActivityUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutTaskInput | TaskActivityUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutTaskInput | TaskActivityUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutTaskInput | TaskActivityUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput = {
    create?: XOR<TaskSequenceCreateWithoutTaskInput, TaskSequenceUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TaskSequenceCreateOrConnectWithoutTaskInput
    upsert?: TaskSequenceUpsertWithoutTaskInput
    disconnect?: TaskSequenceWhereInput | boolean
    delete?: TaskSequenceWhereInput | boolean
    connect?: TaskSequenceWhereUniqueInput
    update?: XOR<XOR<TaskSequenceUpdateToOneWithWhereWithoutTaskInput, TaskSequenceUpdateWithoutTaskInput>, TaskSequenceUncheckedUpdateWithoutTaskInput>
  }

  export type TaskCreateNestedOneWithoutSequenceTrackerInput = {
    create?: XOR<TaskCreateWithoutSequenceTrackerInput, TaskUncheckedCreateWithoutSequenceTrackerInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSequenceTrackerInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutSequenceTrackerNestedInput = {
    create?: XOR<TaskCreateWithoutSequenceTrackerInput, TaskUncheckedCreateWithoutSequenceTrackerInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSequenceTrackerInput
    upsert?: TaskUpsertWithoutSequenceTrackerInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSequenceTrackerInput, TaskUpdateWithoutSequenceTrackerInput>, TaskUncheckedUpdateWithoutSequenceTrackerInput>
  }

  export type TaskCreateNestedOneWithoutDependenciesInput = {
    create?: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutDependentsInput = {
    create?: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumDependencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.DependencyType
  }

  export type TaskUpdateOneRequiredWithoutDependenciesNestedInput = {
    create?: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput
    upsert?: TaskUpsertWithoutDependenciesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutDependenciesInput, TaskUpdateWithoutDependenciesInput>, TaskUncheckedUpdateWithoutDependenciesInput>
  }

  export type TaskUpdateOneRequiredWithoutDependentsNestedInput = {
    create?: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput
    upsert?: TaskUpsertWithoutDependentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutDependentsInput, TaskUpdateWithoutDependentsInput>, TaskUncheckedUpdateWithoutDependentsInput>
  }

  export type TaskCreateNestedOneWithoutActivityInput = {
    create?: XOR<TaskCreateWithoutActivityInput, TaskUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TaskCreateOrConnectWithoutActivityInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<TaskCreateWithoutActivityInput, TaskUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TaskCreateOrConnectWithoutActivityInput
    upsert?: TaskUpsertWithoutActivityInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutActivityInput, TaskUpdateWithoutActivityInput>, TaskUncheckedUpdateWithoutActivityInput>
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

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumDependencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeFilter<$PrismaModel> | $Enums.DependencyType
  }

  export type NestedEnumDependencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DependencyType | EnumDependencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DependencyType[] | ListEnumDependencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDependencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.DependencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDependencyTypeFilter<$PrismaModel>
    _max?: NestedEnumDependencyTypeFilter<$PrismaModel>
  }

  export type TaskCreateWithoutParentInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutParentInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutParentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskCreateManyParentInputEnvelope = {
    data: TaskCreateManyParentInput | TaskCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutSubtasksInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubtasksInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubtasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskDependencyCreateWithoutTaskInput = {
    id?: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
    dependsOn: TaskCreateNestedOneWithoutDependentsInput
  }

  export type TaskDependencyUncheckedCreateWithoutTaskInput = {
    id?: string
    dependsOnId: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
  }

  export type TaskDependencyCreateOrConnectWithoutTaskInput = {
    where: TaskDependencyWhereUniqueInput
    create: XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput>
  }

  export type TaskDependencyCreateManyTaskInputEnvelope = {
    data: TaskDependencyCreateManyTaskInput | TaskDependencyCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskDependencyCreateWithoutDependsOnInput = {
    id?: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutDependenciesInput
  }

  export type TaskDependencyUncheckedCreateWithoutDependsOnInput = {
    id?: string
    taskId: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
  }

  export type TaskDependencyCreateOrConnectWithoutDependsOnInput = {
    where: TaskDependencyWhereUniqueInput
    create: XOR<TaskDependencyCreateWithoutDependsOnInput, TaskDependencyUncheckedCreateWithoutDependsOnInput>
  }

  export type TaskDependencyCreateManyDependsOnInputEnvelope = {
    data: TaskDependencyCreateManyDependsOnInput | TaskDependencyCreateManyDependsOnInput[]
    skipDuplicates?: boolean
  }

  export type TaskActivityCreateWithoutTaskInput = {
    id?: string
    userId: string
    action: string
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskActivityUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    action: string
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskActivityCreateOrConnectWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    create: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput>
  }

  export type TaskActivityCreateManyTaskInputEnvelope = {
    data: TaskActivityCreateManyTaskInput | TaskActivityCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskSequenceCreateWithoutTaskInput = {
    id?: string
    projectId: string
    sequence: number
  }

  export type TaskSequenceUncheckedCreateWithoutTaskInput = {
    id?: string
    projectId: string
    sequence: number
  }

  export type TaskSequenceCreateOrConnectWithoutTaskInput = {
    where: TaskSequenceWhereUniqueInput
    create: XOR<TaskSequenceCreateWithoutTaskInput, TaskSequenceUncheckedCreateWithoutTaskInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    workspaceId?: StringFilter<"Task"> | string
    organizationId?: StringFilter<"Task"> | string
    key?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    status?: StringFilter<"Task"> | string
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    storyPoints?: IntNullableFilter<"Task"> | number | null
    estimatedHours?: FloatNullableFilter<"Task"> | number | null
    actualHours?: FloatNullableFilter<"Task"> | number | null
    assigneeId?: StringNullableFilter<"Task"> | string | null
    reporterId?: StringFilter<"Task"> | string
    parentId?: StringNullableFilter<"Task"> | string | null
    epicId?: StringNullableFilter<"Task"> | string | null
    milestoneId?: StringNullableFilter<"Task"> | string | null
    sprintId?: StringNullableFilter<"Task"> | string | null
    boardColumnId?: StringNullableFilter<"Task"> | string | null
    position?: FloatFilter<"Task"> | number
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    labels?: StringNullableListFilter<"Task">
    tags?: StringNullableListFilter<"Task">
    customFields?: JsonFilter<"Task">
    attachmentCount?: IntFilter<"Task"> | number
    commentCount?: IntFilter<"Task"> | number
    subtaskCount?: IntFilter<"Task"> | number
    completedSubtaskCount?: IntFilter<"Task"> | number
    watcherIds?: StringNullableListFilter<"Task">
    mentionIds?: StringNullableListFilter<"Task">
    isRecurring?: BoolFilter<"Task"> | boolean
    recurringConfig?: JsonNullableFilter<"Task">
    nextOccurrence?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdBy?: StringFilter<"Task"> | string
    updatedBy?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type TaskUpsertWithoutSubtasksInput = {
    update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskDependencyWhereUniqueInput
    update: XOR<TaskDependencyUpdateWithoutTaskInput, TaskDependencyUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput>
  }

  export type TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskDependencyWhereUniqueInput
    data: XOR<TaskDependencyUpdateWithoutTaskInput, TaskDependencyUncheckedUpdateWithoutTaskInput>
  }

  export type TaskDependencyUpdateManyWithWhereWithoutTaskInput = {
    where: TaskDependencyScalarWhereInput
    data: XOR<TaskDependencyUpdateManyMutationInput, TaskDependencyUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskDependencyScalarWhereInput = {
    AND?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[]
    OR?: TaskDependencyScalarWhereInput[]
    NOT?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[]
    id?: StringFilter<"TaskDependency"> | string
    taskId?: StringFilter<"TaskDependency"> | string
    dependsOnId?: StringFilter<"TaskDependency"> | string
    type?: EnumDependencyTypeFilter<"TaskDependency"> | $Enums.DependencyType
    createdBy?: StringFilter<"TaskDependency"> | string
    createdAt?: DateTimeFilter<"TaskDependency"> | Date | string
  }

  export type TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = {
    where: TaskDependencyWhereUniqueInput
    update: XOR<TaskDependencyUpdateWithoutDependsOnInput, TaskDependencyUncheckedUpdateWithoutDependsOnInput>
    create: XOR<TaskDependencyCreateWithoutDependsOnInput, TaskDependencyUncheckedCreateWithoutDependsOnInput>
  }

  export type TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = {
    where: TaskDependencyWhereUniqueInput
    data: XOR<TaskDependencyUpdateWithoutDependsOnInput, TaskDependencyUncheckedUpdateWithoutDependsOnInput>
  }

  export type TaskDependencyUpdateManyWithWhereWithoutDependsOnInput = {
    where: TaskDependencyScalarWhereInput
    data: XOR<TaskDependencyUpdateManyMutationInput, TaskDependencyUncheckedUpdateManyWithoutDependsOnInput>
  }

  export type TaskActivityUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    update: XOR<TaskActivityUpdateWithoutTaskInput, TaskActivityUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput>
  }

  export type TaskActivityUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    data: XOR<TaskActivityUpdateWithoutTaskInput, TaskActivityUncheckedUpdateWithoutTaskInput>
  }

  export type TaskActivityUpdateManyWithWhereWithoutTaskInput = {
    where: TaskActivityScalarWhereInput
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskActivityScalarWhereInput = {
    AND?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
    OR?: TaskActivityScalarWhereInput[]
    NOT?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
    id?: StringFilter<"TaskActivity"> | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringFilter<"TaskActivity"> | string
    action?: StringFilter<"TaskActivity"> | string
    field?: StringNullableFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableFilter<"TaskActivity"> | string | null
    newValue?: StringNullableFilter<"TaskActivity"> | string | null
    metadata?: JsonNullableFilter<"TaskActivity">
    createdAt?: DateTimeFilter<"TaskActivity"> | Date | string
  }

  export type TaskSequenceUpsertWithoutTaskInput = {
    update: XOR<TaskSequenceUpdateWithoutTaskInput, TaskSequenceUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskSequenceCreateWithoutTaskInput, TaskSequenceUncheckedCreateWithoutTaskInput>
    where?: TaskSequenceWhereInput
  }

  export type TaskSequenceUpdateToOneWithWhereWithoutTaskInput = {
    where?: TaskSequenceWhereInput
    data: XOR<TaskSequenceUpdateWithoutTaskInput, TaskSequenceUncheckedUpdateWithoutTaskInput>
  }

  export type TaskSequenceUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSequenceUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateWithoutSequenceTrackerInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSequenceTrackerInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSequenceTrackerInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSequenceTrackerInput, TaskUncheckedCreateWithoutSequenceTrackerInput>
  }

  export type TaskUpsertWithoutSequenceTrackerInput = {
    update: XOR<TaskUpdateWithoutSequenceTrackerInput, TaskUncheckedUpdateWithoutSequenceTrackerInput>
    create: XOR<TaskCreateWithoutSequenceTrackerInput, TaskUncheckedCreateWithoutSequenceTrackerInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSequenceTrackerInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSequenceTrackerInput, TaskUncheckedUpdateWithoutSequenceTrackerInput>
  }

  export type TaskUpdateWithoutSequenceTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSequenceTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutDependenciesInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutDependenciesInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    activity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutDependenciesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>
  }

  export type TaskCreateWithoutDependentsInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput
    activity?: TaskActivityCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutDependentsInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput
    activity?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
    sequenceTracker?: TaskSequenceUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutDependentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>
  }

  export type TaskUpsertWithoutDependenciesInput = {
    update: XOR<TaskUpdateWithoutDependenciesInput, TaskUncheckedUpdateWithoutDependenciesInput>
    create: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutDependenciesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutDependenciesInput, TaskUncheckedUpdateWithoutDependenciesInput>
  }

  export type TaskUpdateWithoutDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutDependenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskUpsertWithoutDependentsInput = {
    update: XOR<TaskUpdateWithoutDependentsInput, TaskUncheckedUpdateWithoutDependentsInput>
    create: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutDependentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutDependentsInput, TaskUncheckedUpdateWithoutDependentsInput>
  }

  export type TaskUpdateWithoutDependentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput
    activity?: TaskActivityUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutDependentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput
    activity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskCreateWithoutActivityInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput
    sequenceTracker?: TaskSequenceCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutActivityInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    parentId?: string | null
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput
    dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput
    sequenceTracker?: TaskSequenceUncheckedCreateNestedOneWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutActivityInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutActivityInput, TaskUncheckedCreateWithoutActivityInput>
  }

  export type TaskUpsertWithoutActivityInput = {
    update: XOR<TaskUpdateWithoutActivityInput, TaskUncheckedUpdateWithoutActivityInput>
    create: XOR<TaskCreateWithoutActivityInput, TaskUncheckedCreateWithoutActivityInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutActivityInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutActivityInput, TaskUncheckedUpdateWithoutActivityInput>
  }

  export type TaskUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput
    sequenceTracker?: TaskSequenceUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    sequenceTracker?: TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskCreateManyParentInput = {
    id?: string
    projectId: string
    workspaceId: string
    organizationId: string
    key: string
    title: string
    description?: string | null
    type?: $Enums.TaskType
    status?: string
    priority?: $Enums.Priority
    storyPoints?: number | null
    estimatedHours?: number | null
    actualHours?: number | null
    assigneeId?: string | null
    reporterId: string
    epicId?: string | null
    milestoneId?: string | null
    sprintId?: string | null
    boardColumnId?: string | null
    position?: number
    dueDate?: Date | string | null
    startDate?: Date | string | null
    completedAt?: Date | string | null
    labels?: TaskCreatelabelsInput | string[]
    tags?: TaskCreatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: number
    commentCount?: number
    subtaskCount?: number
    completedSubtaskCount?: number
    watcherIds?: TaskCreatewatcherIdsInput | string[]
    mentionIds?: TaskCreatementionIdsInput | string[]
    isRecurring?: boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: Date | string | null
    createdBy: string
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TaskDependencyCreateManyTaskInput = {
    id?: string
    dependsOnId: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
  }

  export type TaskDependencyCreateManyDependsOnInput = {
    id?: string
    taskId: string
    type?: $Enums.DependencyType
    createdBy: string
    createdAt?: Date | string
  }

  export type TaskActivityCreateManyTaskInput = {
    id?: string
    userId: string
    action: string
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput
    dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput
    activity?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
    sequenceTracker?: TaskSequenceUncheckedUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    status?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    actualHours?: NullableFloatFieldUpdateOperationsInput | number | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    epicId?: NullableStringFieldUpdateOperationsInput | string | null
    milestoneId?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: NullableStringFieldUpdateOperationsInput | string | null
    boardColumnId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: TaskUpdatelabelsInput | string[]
    tags?: TaskUpdatetagsInput | string[]
    customFields?: JsonNullValueInput | InputJsonValue
    attachmentCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    subtaskCount?: IntFieldUpdateOperationsInput | number
    completedSubtaskCount?: IntFieldUpdateOperationsInput | number
    watcherIds?: TaskUpdatewatcherIdsInput | string[]
    mentionIds?: TaskUpdatementionIdsInput | string[]
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringConfig?: NullableJsonNullValueInput | InputJsonValue
    nextOccurrence?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskDependencyUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput
  }

  export type TaskDependencyUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskDependencyUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    dependsOnId?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskDependencyUpdateWithoutDependsOnInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput
  }

  export type TaskDependencyUncheckedUpdateWithoutDependsOnInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskDependencyUncheckedUpdateManyWithoutDependsOnInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    type?: EnumDependencyTypeFieldUpdateOperationsInput | $Enums.DependencyType
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskSequenceDefaultArgs instead
     */
    export type TaskSequenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskSequenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectKeyCounterDefaultArgs instead
     */
    export type ProjectKeyCounterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectKeyCounterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDependencyDefaultArgs instead
     */
    export type TaskDependencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDependencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskActivityDefaultArgs instead
     */
    export type TaskActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskActivityDefaultArgs<ExtArgs>

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