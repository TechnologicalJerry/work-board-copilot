
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
 * Model BillingCustomer
 * 
 */
export type BillingCustomer = $Result.DefaultSelection<Prisma.$BillingCustomerPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model PlanLimit
 * 
 */
export type PlanLimit = $Result.DefaultSelection<Prisma.$PlanLimitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanType: {
  FREE: 'FREE',
  STARTER: 'STARTER',
  PROFESSIONAL: 'PROFESSIONAL',
  ENTERPRISE: 'ENTERPRISE'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  TRIALING: 'TRIALING',
  PAST_DUE: 'PAST_DUE',
  CANCELLED: 'CANCELLED',
  INCOMPLETE: 'INCOMPLETE',
  INCOMPLETE_EXPIRED: 'INCOMPLETE_EXPIRED',
  PAUSED: 'PAUSED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const InvoiceStatus: {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  PAID: 'PAID',
  VOID: 'VOID',
  UNCOLLECTIBLE: 'UNCOLLECTIBLE'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]

}

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BillingCustomers
 * const billingCustomers = await prisma.billingCustomer.findMany()
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
   * // Fetch zero or more BillingCustomers
   * const billingCustomers = await prisma.billingCustomer.findMany()
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
   * `prisma.billingCustomer`: Exposes CRUD operations for the **BillingCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingCustomers
    * const billingCustomers = await prisma.billingCustomer.findMany()
    * ```
    */
  get billingCustomer(): Prisma.BillingCustomerDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs>;

  /**
   * `prisma.planLimit`: Exposes CRUD operations for the **PlanLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanLimits
    * const planLimits = await prisma.planLimit.findMany()
    * ```
    */
  get planLimit(): Prisma.PlanLimitDelegate<ExtArgs>;
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
    BillingCustomer: 'BillingCustomer',
    Subscription: 'Subscription',
    Invoice: 'Invoice',
    PaymentMethod: 'PaymentMethod',
    PlanLimit: 'PlanLimit'
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
      modelProps: "billingCustomer" | "subscription" | "invoice" | "paymentMethod" | "planLimit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BillingCustomer: {
        payload: Prisma.$BillingCustomerPayload<ExtArgs>
        fields: Prisma.BillingCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>
          }
          findFirst: {
            args: Prisma.BillingCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>
          }
          findMany: {
            args: Prisma.BillingCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>[]
          }
          create: {
            args: Prisma.BillingCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>
          }
          createMany: {
            args: Prisma.BillingCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>[]
          }
          delete: {
            args: Prisma.BillingCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>
          }
          update: {
            args: Prisma.BillingCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>
          }
          deleteMany: {
            args: Prisma.BillingCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillingCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingCustomerPayload>
          }
          aggregate: {
            args: Prisma.BillingCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingCustomer>
          }
          groupBy: {
            args: Prisma.BillingCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<BillingCustomerCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      PlanLimit: {
        payload: Prisma.$PlanLimitPayload<ExtArgs>
        fields: Prisma.PlanLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>
          }
          findFirst: {
            args: Prisma.PlanLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>
          }
          findMany: {
            args: Prisma.PlanLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>[]
          }
          create: {
            args: Prisma.PlanLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>
          }
          createMany: {
            args: Prisma.PlanLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>[]
          }
          delete: {
            args: Prisma.PlanLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>
          }
          update: {
            args: Prisma.PlanLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>
          }
          deleteMany: {
            args: Prisma.PlanLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanLimitPayload>
          }
          aggregate: {
            args: Prisma.PlanLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanLimit>
          }
          groupBy: {
            args: Prisma.PlanLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanLimitCountArgs<ExtArgs>
            result: $Utils.Optional<PlanLimitCountAggregateOutputType> | number
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
   * Count Type BillingCustomerCountOutputType
   */

  export type BillingCustomerCountOutputType = {
    subscriptions: number
    invoices: number
    paymentMethods: number
  }

  export type BillingCustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | BillingCustomerCountOutputTypeCountSubscriptionsArgs
    invoices?: boolean | BillingCustomerCountOutputTypeCountInvoicesArgs
    paymentMethods?: boolean | BillingCustomerCountOutputTypeCountPaymentMethodsArgs
  }

  // Custom InputTypes
  /**
   * BillingCustomerCountOutputType without action
   */
  export type BillingCustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomerCountOutputType
     */
    select?: BillingCustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillingCustomerCountOutputType without action
   */
  export type BillingCustomerCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * BillingCustomerCountOutputType without action
   */
  export type BillingCustomerCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * BillingCustomerCountOutputType without action
   */
  export type BillingCustomerCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BillingCustomer
   */

  export type AggregateBillingCustomer = {
    _count: BillingCustomerCountAggregateOutputType | null
    _min: BillingCustomerMinAggregateOutputType | null
    _max: BillingCustomerMaxAggregateOutputType | null
  }

  export type BillingCustomerMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    stripeCustomerId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingCustomerMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    stripeCustomerId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingCustomerCountAggregateOutputType = {
    id: number
    organizationId: number
    stripeCustomerId: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillingCustomerMinAggregateInputType = {
    id?: true
    organizationId?: true
    stripeCustomerId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingCustomerMaxAggregateInputType = {
    id?: true
    organizationId?: true
    stripeCustomerId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingCustomerCountAggregateInputType = {
    id?: true
    organizationId?: true
    stripeCustomerId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillingCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingCustomer to aggregate.
     */
    where?: BillingCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingCustomers to fetch.
     */
    orderBy?: BillingCustomerOrderByWithRelationInput | BillingCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingCustomers
    **/
    _count?: true | BillingCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingCustomerMaxAggregateInputType
  }

  export type GetBillingCustomerAggregateType<T extends BillingCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingCustomer[P]>
      : GetScalarType<T[P], AggregateBillingCustomer[P]>
  }




  export type BillingCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingCustomerWhereInput
    orderBy?: BillingCustomerOrderByWithAggregationInput | BillingCustomerOrderByWithAggregationInput[]
    by: BillingCustomerScalarFieldEnum[] | BillingCustomerScalarFieldEnum
    having?: BillingCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingCustomerCountAggregateInputType | true
    _min?: BillingCustomerMinAggregateInputType
    _max?: BillingCustomerMaxAggregateInputType
  }

  export type BillingCustomerGroupByOutputType = {
    id: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BillingCustomerCountAggregateOutputType | null
    _min: BillingCustomerMinAggregateOutputType | null
    _max: BillingCustomerMaxAggregateOutputType | null
  }

  type GetBillingCustomerGroupByPayload<T extends BillingCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], BillingCustomerGroupByOutputType[P]>
        }
      >
    >


  export type BillingCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    stripeCustomerId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | BillingCustomer$subscriptionsArgs<ExtArgs>
    invoices?: boolean | BillingCustomer$invoicesArgs<ExtArgs>
    paymentMethods?: boolean | BillingCustomer$paymentMethodsArgs<ExtArgs>
    _count?: boolean | BillingCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingCustomer"]>

  export type BillingCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    stripeCustomerId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["billingCustomer"]>

  export type BillingCustomerSelectScalar = {
    id?: boolean
    organizationId?: boolean
    stripeCustomerId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillingCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | BillingCustomer$subscriptionsArgs<ExtArgs>
    invoices?: boolean | BillingCustomer$invoicesArgs<ExtArgs>
    paymentMethods?: boolean | BillingCustomer$paymentMethodsArgs<ExtArgs>
    _count?: boolean | BillingCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillingCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BillingCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingCustomer"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      stripeCustomerId: string
      email: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billingCustomer"]>
    composites: {}
  }

  type BillingCustomerGetPayload<S extends boolean | null | undefined | BillingCustomerDefaultArgs> = $Result.GetResult<Prisma.$BillingCustomerPayload, S>

  type BillingCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillingCustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillingCustomerCountAggregateInputType | true
    }

  export interface BillingCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingCustomer'], meta: { name: 'BillingCustomer' } }
    /**
     * Find zero or one BillingCustomer that matches the filter.
     * @param {BillingCustomerFindUniqueArgs} args - Arguments to find a BillingCustomer
     * @example
     * // Get one BillingCustomer
     * const billingCustomer = await prisma.billingCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingCustomerFindUniqueArgs>(args: SelectSubset<T, BillingCustomerFindUniqueArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BillingCustomer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BillingCustomerFindUniqueOrThrowArgs} args - Arguments to find a BillingCustomer
     * @example
     * // Get one BillingCustomer
     * const billingCustomer = await prisma.billingCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BillingCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerFindFirstArgs} args - Arguments to find a BillingCustomer
     * @example
     * // Get one BillingCustomer
     * const billingCustomer = await prisma.billingCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingCustomerFindFirstArgs>(args?: SelectSubset<T, BillingCustomerFindFirstArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BillingCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerFindFirstOrThrowArgs} args - Arguments to find a BillingCustomer
     * @example
     * // Get one BillingCustomer
     * const billingCustomer = await prisma.billingCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BillingCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingCustomers
     * const billingCustomers = await prisma.billingCustomer.findMany()
     * 
     * // Get first 10 BillingCustomers
     * const billingCustomers = await prisma.billingCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingCustomerWithIdOnly = await prisma.billingCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingCustomerFindManyArgs>(args?: SelectSubset<T, BillingCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BillingCustomer.
     * @param {BillingCustomerCreateArgs} args - Arguments to create a BillingCustomer.
     * @example
     * // Create one BillingCustomer
     * const BillingCustomer = await prisma.billingCustomer.create({
     *   data: {
     *     // ... data to create a BillingCustomer
     *   }
     * })
     * 
     */
    create<T extends BillingCustomerCreateArgs>(args: SelectSubset<T, BillingCustomerCreateArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BillingCustomers.
     * @param {BillingCustomerCreateManyArgs} args - Arguments to create many BillingCustomers.
     * @example
     * // Create many BillingCustomers
     * const billingCustomer = await prisma.billingCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingCustomerCreateManyArgs>(args?: SelectSubset<T, BillingCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingCustomers and returns the data saved in the database.
     * @param {BillingCustomerCreateManyAndReturnArgs} args - Arguments to create many BillingCustomers.
     * @example
     * // Create many BillingCustomers
     * const billingCustomer = await prisma.billingCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingCustomers and only return the `id`
     * const billingCustomerWithIdOnly = await prisma.billingCustomer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BillingCustomer.
     * @param {BillingCustomerDeleteArgs} args - Arguments to delete one BillingCustomer.
     * @example
     * // Delete one BillingCustomer
     * const BillingCustomer = await prisma.billingCustomer.delete({
     *   where: {
     *     // ... filter to delete one BillingCustomer
     *   }
     * })
     * 
     */
    delete<T extends BillingCustomerDeleteArgs>(args: SelectSubset<T, BillingCustomerDeleteArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BillingCustomer.
     * @param {BillingCustomerUpdateArgs} args - Arguments to update one BillingCustomer.
     * @example
     * // Update one BillingCustomer
     * const billingCustomer = await prisma.billingCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingCustomerUpdateArgs>(args: SelectSubset<T, BillingCustomerUpdateArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BillingCustomers.
     * @param {BillingCustomerDeleteManyArgs} args - Arguments to filter BillingCustomers to delete.
     * @example
     * // Delete a few BillingCustomers
     * const { count } = await prisma.billingCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingCustomerDeleteManyArgs>(args?: SelectSubset<T, BillingCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingCustomers
     * const billingCustomer = await prisma.billingCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingCustomerUpdateManyArgs>(args: SelectSubset<T, BillingCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BillingCustomer.
     * @param {BillingCustomerUpsertArgs} args - Arguments to update or create a BillingCustomer.
     * @example
     * // Update or create a BillingCustomer
     * const billingCustomer = await prisma.billingCustomer.upsert({
     *   create: {
     *     // ... data to create a BillingCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingCustomer we want to update
     *   }
     * })
     */
    upsert<T extends BillingCustomerUpsertArgs>(args: SelectSubset<T, BillingCustomerUpsertArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BillingCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerCountArgs} args - Arguments to filter BillingCustomers to count.
     * @example
     * // Count the number of BillingCustomers
     * const count = await prisma.billingCustomer.count({
     *   where: {
     *     // ... the filter for the BillingCustomers we want to count
     *   }
     * })
    **/
    count<T extends BillingCustomerCountArgs>(
      args?: Subset<T, BillingCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingCustomerAggregateArgs>(args: Subset<T, BillingCustomerAggregateArgs>): Prisma.PrismaPromise<GetBillingCustomerAggregateType<T>>

    /**
     * Group by BillingCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCustomerGroupByArgs} args - Group by arguments.
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
      T extends BillingCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingCustomerGroupByArgs['orderBy'] }
        : { orderBy?: BillingCustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingCustomer model
   */
  readonly fields: BillingCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends BillingCustomer$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, BillingCustomer$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends BillingCustomer$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, BillingCustomer$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    paymentMethods<T extends BillingCustomer$paymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, BillingCustomer$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the BillingCustomer model
   */ 
  interface BillingCustomerFieldRefs {
    readonly id: FieldRef<"BillingCustomer", 'String'>
    readonly organizationId: FieldRef<"BillingCustomer", 'String'>
    readonly stripeCustomerId: FieldRef<"BillingCustomer", 'String'>
    readonly email: FieldRef<"BillingCustomer", 'String'>
    readonly name: FieldRef<"BillingCustomer", 'String'>
    readonly createdAt: FieldRef<"BillingCustomer", 'DateTime'>
    readonly updatedAt: FieldRef<"BillingCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillingCustomer findUnique
   */
  export type BillingCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BillingCustomer to fetch.
     */
    where: BillingCustomerWhereUniqueInput
  }

  /**
   * BillingCustomer findUniqueOrThrow
   */
  export type BillingCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BillingCustomer to fetch.
     */
    where: BillingCustomerWhereUniqueInput
  }

  /**
   * BillingCustomer findFirst
   */
  export type BillingCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BillingCustomer to fetch.
     */
    where?: BillingCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingCustomers to fetch.
     */
    orderBy?: BillingCustomerOrderByWithRelationInput | BillingCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingCustomers.
     */
    cursor?: BillingCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingCustomers.
     */
    distinct?: BillingCustomerScalarFieldEnum | BillingCustomerScalarFieldEnum[]
  }

  /**
   * BillingCustomer findFirstOrThrow
   */
  export type BillingCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BillingCustomer to fetch.
     */
    where?: BillingCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingCustomers to fetch.
     */
    orderBy?: BillingCustomerOrderByWithRelationInput | BillingCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingCustomers.
     */
    cursor?: BillingCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingCustomers.
     */
    distinct?: BillingCustomerScalarFieldEnum | BillingCustomerScalarFieldEnum[]
  }

  /**
   * BillingCustomer findMany
   */
  export type BillingCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BillingCustomers to fetch.
     */
    where?: BillingCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingCustomers to fetch.
     */
    orderBy?: BillingCustomerOrderByWithRelationInput | BillingCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingCustomers.
     */
    cursor?: BillingCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingCustomers.
     */
    skip?: number
    distinct?: BillingCustomerScalarFieldEnum | BillingCustomerScalarFieldEnum[]
  }

  /**
   * BillingCustomer create
   */
  export type BillingCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingCustomer.
     */
    data: XOR<BillingCustomerCreateInput, BillingCustomerUncheckedCreateInput>
  }

  /**
   * BillingCustomer createMany
   */
  export type BillingCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingCustomers.
     */
    data: BillingCustomerCreateManyInput | BillingCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingCustomer createManyAndReturn
   */
  export type BillingCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BillingCustomers.
     */
    data: BillingCustomerCreateManyInput | BillingCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingCustomer update
   */
  export type BillingCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingCustomer.
     */
    data: XOR<BillingCustomerUpdateInput, BillingCustomerUncheckedUpdateInput>
    /**
     * Choose, which BillingCustomer to update.
     */
    where: BillingCustomerWhereUniqueInput
  }

  /**
   * BillingCustomer updateMany
   */
  export type BillingCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingCustomers.
     */
    data: XOR<BillingCustomerUpdateManyMutationInput, BillingCustomerUncheckedUpdateManyInput>
    /**
     * Filter which BillingCustomers to update
     */
    where?: BillingCustomerWhereInput
  }

  /**
   * BillingCustomer upsert
   */
  export type BillingCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingCustomer to update in case it exists.
     */
    where: BillingCustomerWhereUniqueInput
    /**
     * In case the BillingCustomer found by the `where` argument doesn't exist, create a new BillingCustomer with this data.
     */
    create: XOR<BillingCustomerCreateInput, BillingCustomerUncheckedCreateInput>
    /**
     * In case the BillingCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingCustomerUpdateInput, BillingCustomerUncheckedUpdateInput>
  }

  /**
   * BillingCustomer delete
   */
  export type BillingCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
    /**
     * Filter which BillingCustomer to delete.
     */
    where: BillingCustomerWhereUniqueInput
  }

  /**
   * BillingCustomer deleteMany
   */
  export type BillingCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingCustomers to delete
     */
    where?: BillingCustomerWhereInput
  }

  /**
   * BillingCustomer.subscriptions
   */
  export type BillingCustomer$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * BillingCustomer.invoices
   */
  export type BillingCustomer$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * BillingCustomer.paymentMethods
   */
  export type BillingCustomer$paymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    cursor?: PaymentMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * BillingCustomer without action
   */
  export type BillingCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingCustomer
     */
    select?: BillingCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingCustomerInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    plan: $Enums.PlanType | null
    status: $Enums.SubscriptionStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    cancelledAt: Date | null
    trialStart: Date | null
    trialEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    plan: $Enums.PlanType | null
    status: $Enums.SubscriptionStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    cancelledAt: Date | null
    trialStart: Date | null
    trialEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    customerId: number
    stripeSubscriptionId: number
    stripePriceId: number
    plan: number
    status: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    cancelledAt: number
    trialStart: number
    trialEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    plan?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    cancelledAt?: true
    trialStart?: true
    trialEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    plan?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    cancelledAt?: true
    trialStart?: true
    trialEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    plan?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    cancelledAt?: true
    trialStart?: true
    trialEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    customerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date
    currentPeriodEnd: Date
    cancelAtPeriodEnd: boolean
    cancelledAt: Date | null
    trialStart: Date | null
    trialEnd: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    cancelledAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    cancelledAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    cancelledAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      customer: Prisma.$BillingCustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      stripeSubscriptionId: string
      stripePriceId: string
      plan: $Enums.PlanType
      status: $Enums.SubscriptionStatus
      currentPeriodStart: Date
      currentPeriodEnd: Date
      cancelAtPeriodEnd: boolean
      cancelledAt: Date | null
      trialStart: Date | null
      trialEnd: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends BillingCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillingCustomerDefaultArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly customerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly stripePriceId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'PlanType'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly cancelledAt: FieldRef<"Subscription", 'DateTime'>
    readonly trialStart: FieldRef<"Subscription", 'DateTime'>
    readonly trialEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripeInvoiceId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.InvoiceStatus | null
    description: string | null
    pdfUrl: string | null
    hostedUrl: string | null
    periodStart: Date | null
    periodEnd: Date | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripeInvoiceId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.InvoiceStatus | null
    description: string | null
    pdfUrl: string | null
    hostedUrl: string | null
    periodStart: Date | null
    periodEnd: Date | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    customerId: number
    stripeInvoiceId: number
    amount: number
    currency: number
    status: number
    description: number
    pdfUrl: number
    hostedUrl: number
    periodStart: number
    periodEnd: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    customerId?: true
    stripeInvoiceId?: true
    amount?: true
    currency?: true
    status?: true
    description?: true
    pdfUrl?: true
    hostedUrl?: true
    periodStart?: true
    periodEnd?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    customerId?: true
    stripeInvoiceId?: true
    amount?: true
    currency?: true
    status?: true
    description?: true
    pdfUrl?: true
    hostedUrl?: true
    periodStart?: true
    periodEnd?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    customerId?: true
    stripeInvoiceId?: true
    amount?: true
    currency?: true
    status?: true
    description?: true
    pdfUrl?: true
    hostedUrl?: true
    periodStart?: true
    periodEnd?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    customerId: string
    stripeInvoiceId: string
    amount: number
    currency: string
    status: $Enums.InvoiceStatus
    description: string | null
    pdfUrl: string | null
    hostedUrl: string | null
    periodStart: Date | null
    periodEnd: Date | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    pdfUrl?: boolean
    hostedUrl?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    pdfUrl?: boolean
    hostedUrl?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    customerId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    pdfUrl?: boolean
    hostedUrl?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      customer: Prisma.$BillingCustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      stripeInvoiceId: string
      amount: number
      currency: string
      status: $Enums.InvoiceStatus
      description: string | null
      pdfUrl: string | null
      hostedUrl: string | null
      periodStart: Date | null
      periodEnd: Date | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends BillingCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillingCustomerDefaultArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly customerId: FieldRef<"Invoice", 'String'>
    readonly stripeInvoiceId: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Int'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly description: FieldRef<"Invoice", 'String'>
    readonly pdfUrl: FieldRef<"Invoice", 'String'>
    readonly hostedUrl: FieldRef<"Invoice", 'String'>
    readonly periodStart: FieldRef<"Invoice", 'DateTime'>
    readonly periodEnd: FieldRef<"Invoice", 'DateTime'>
    readonly paidAt: FieldRef<"Invoice", 'DateTime'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    expiryMonth: number | null
    expiryYear: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    expiryMonth: number | null
    expiryYear: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripePaymentMethodId: string | null
    type: string | null
    last4: string | null
    brand: string | null
    expiryMonth: number | null
    expiryYear: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripePaymentMethodId: string | null
    type: string | null
    last4: string | null
    brand: string | null
    expiryMonth: number | null
    expiryYear: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    customerId: number
    stripePaymentMethodId: number
    type: number
    last4: number
    brand: number
    expiryMonth: number
    expiryYear: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    expiryMonth?: true
    expiryYear?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    expiryMonth?: true
    expiryYear?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentMethodId?: true
    type?: true
    last4?: true
    brand?: true
    expiryMonth?: true
    expiryYear?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentMethodId?: true
    type?: true
    last4?: true
    brand?: true
    expiryMonth?: true
    expiryYear?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentMethodId?: true
    type?: true
    last4?: true
    brand?: true
    expiryMonth?: true
    expiryYear?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    customerId: string
    stripePaymentMethodId: string
    type: string
    last4: string | null
    brand: string | null
    expiryMonth: number | null
    expiryYear: number | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    last4?: boolean
    brand?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    last4?: boolean
    brand?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    customerId?: boolean
    stripePaymentMethodId?: boolean
    type?: boolean
    last4?: boolean
    brand?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BillingCustomerDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      customer: Prisma.$BillingCustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      stripePaymentMethodId: string
      type: string
      last4: string | null
      brand: string | null
      expiryMonth: number | null
      expiryYear: number | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends BillingCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillingCustomerDefaultArgs<ExtArgs>>): Prisma__BillingCustomerClient<$Result.GetResult<Prisma.$BillingCustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PaymentMethod model
   */ 
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly customerId: FieldRef<"PaymentMethod", 'String'>
    readonly stripePaymentMethodId: FieldRef<"PaymentMethod", 'String'>
    readonly type: FieldRef<"PaymentMethod", 'String'>
    readonly last4: FieldRef<"PaymentMethod", 'String'>
    readonly brand: FieldRef<"PaymentMethod", 'String'>
    readonly expiryMonth: FieldRef<"PaymentMethod", 'Int'>
    readonly expiryYear: FieldRef<"PaymentMethod", 'Int'>
    readonly isDefault: FieldRef<"PaymentMethod", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model PlanLimit
   */

  export type AggregatePlanLimit = {
    _count: PlanLimitCountAggregateOutputType | null
    _avg: PlanLimitAvgAggregateOutputType | null
    _sum: PlanLimitSumAggregateOutputType | null
    _min: PlanLimitMinAggregateOutputType | null
    _max: PlanLimitMaxAggregateOutputType | null
  }

  export type PlanLimitAvgAggregateOutputType = {
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: number | null
    maxBoards: number | null
    priceMonthly: number | null
    priceYearly: number | null
  }

  export type PlanLimitSumAggregateOutputType = {
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: bigint | null
    maxBoards: number | null
    priceMonthly: number | null
    priceYearly: number | null
  }

  export type PlanLimitMinAggregateOutputType = {
    id: string | null
    plan: $Enums.PlanType | null
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: bigint | null
    maxBoards: number | null
    hasAi: boolean | null
    hasReports: boolean | null
    hasSso: boolean | null
    hasApi: boolean | null
    priceMonthly: number | null
    priceYearly: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanLimitMaxAggregateOutputType = {
    id: string | null
    plan: $Enums.PlanType | null
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: bigint | null
    maxBoards: number | null
    hasAi: boolean | null
    hasReports: boolean | null
    hasSso: boolean | null
    hasApi: boolean | null
    priceMonthly: number | null
    priceYearly: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanLimitCountAggregateOutputType = {
    id: number
    plan: number
    maxMembers: number
    maxProjects: number
    maxStorage: number
    maxBoards: number
    hasAi: number
    hasReports: number
    hasSso: number
    hasApi: number
    priceMonthly: number
    priceYearly: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanLimitAvgAggregateInputType = {
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    maxBoards?: true
    priceMonthly?: true
    priceYearly?: true
  }

  export type PlanLimitSumAggregateInputType = {
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    maxBoards?: true
    priceMonthly?: true
    priceYearly?: true
  }

  export type PlanLimitMinAggregateInputType = {
    id?: true
    plan?: true
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    maxBoards?: true
    hasAi?: true
    hasReports?: true
    hasSso?: true
    hasApi?: true
    priceMonthly?: true
    priceYearly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanLimitMaxAggregateInputType = {
    id?: true
    plan?: true
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    maxBoards?: true
    hasAi?: true
    hasReports?: true
    hasSso?: true
    hasApi?: true
    priceMonthly?: true
    priceYearly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanLimitCountAggregateInputType = {
    id?: true
    plan?: true
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    maxBoards?: true
    hasAi?: true
    hasReports?: true
    hasSso?: true
    hasApi?: true
    priceMonthly?: true
    priceYearly?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanLimit to aggregate.
     */
    where?: PlanLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanLimits to fetch.
     */
    orderBy?: PlanLimitOrderByWithRelationInput | PlanLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanLimits
    **/
    _count?: true | PlanLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanLimitMaxAggregateInputType
  }

  export type GetPlanLimitAggregateType<T extends PlanLimitAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanLimit[P]>
      : GetScalarType<T[P], AggregatePlanLimit[P]>
  }




  export type PlanLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanLimitWhereInput
    orderBy?: PlanLimitOrderByWithAggregationInput | PlanLimitOrderByWithAggregationInput[]
    by: PlanLimitScalarFieldEnum[] | PlanLimitScalarFieldEnum
    having?: PlanLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanLimitCountAggregateInputType | true
    _avg?: PlanLimitAvgAggregateInputType
    _sum?: PlanLimitSumAggregateInputType
    _min?: PlanLimitMinAggregateInputType
    _max?: PlanLimitMaxAggregateInputType
  }

  export type PlanLimitGroupByOutputType = {
    id: string
    plan: $Enums.PlanType
    maxMembers: number
    maxProjects: number
    maxStorage: bigint
    maxBoards: number
    hasAi: boolean
    hasReports: boolean
    hasSso: boolean
    hasApi: boolean
    priceMonthly: number
    priceYearly: number
    features: string[]
    createdAt: Date
    updatedAt: Date
    _count: PlanLimitCountAggregateOutputType | null
    _avg: PlanLimitAvgAggregateOutputType | null
    _sum: PlanLimitSumAggregateOutputType | null
    _min: PlanLimitMinAggregateOutputType | null
    _max: PlanLimitMaxAggregateOutputType | null
  }

  type GetPlanLimitGroupByPayload<T extends PlanLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanLimitGroupByOutputType[P]>
            : GetScalarType<T[P], PlanLimitGroupByOutputType[P]>
        }
      >
    >


  export type PlanLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    maxMembers?: boolean
    maxProjects?: boolean
    maxStorage?: boolean
    maxBoards?: boolean
    hasAi?: boolean
    hasReports?: boolean
    hasSso?: boolean
    hasApi?: boolean
    priceMonthly?: boolean
    priceYearly?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planLimit"]>

  export type PlanLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    maxMembers?: boolean
    maxProjects?: boolean
    maxStorage?: boolean
    maxBoards?: boolean
    hasAi?: boolean
    hasReports?: boolean
    hasSso?: boolean
    hasApi?: boolean
    priceMonthly?: boolean
    priceYearly?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planLimit"]>

  export type PlanLimitSelectScalar = {
    id?: boolean
    plan?: boolean
    maxMembers?: boolean
    maxProjects?: boolean
    maxStorage?: boolean
    maxBoards?: boolean
    hasAi?: boolean
    hasReports?: boolean
    hasSso?: boolean
    hasApi?: boolean
    priceMonthly?: boolean
    priceYearly?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PlanLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanLimit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: $Enums.PlanType
      maxMembers: number
      maxProjects: number
      maxStorage: bigint
      maxBoards: number
      hasAi: boolean
      hasReports: boolean
      hasSso: boolean
      hasApi: boolean
      priceMonthly: number
      priceYearly: number
      features: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planLimit"]>
    composites: {}
  }

  type PlanLimitGetPayload<S extends boolean | null | undefined | PlanLimitDefaultArgs> = $Result.GetResult<Prisma.$PlanLimitPayload, S>

  type PlanLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanLimitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanLimitCountAggregateInputType | true
    }

  export interface PlanLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanLimit'], meta: { name: 'PlanLimit' } }
    /**
     * Find zero or one PlanLimit that matches the filter.
     * @param {PlanLimitFindUniqueArgs} args - Arguments to find a PlanLimit
     * @example
     * // Get one PlanLimit
     * const planLimit = await prisma.planLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanLimitFindUniqueArgs>(args: SelectSubset<T, PlanLimitFindUniqueArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlanLimit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanLimitFindUniqueOrThrowArgs} args - Arguments to find a PlanLimit
     * @example
     * // Get one PlanLimit
     * const planLimit = await prisma.planLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlanLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitFindFirstArgs} args - Arguments to find a PlanLimit
     * @example
     * // Get one PlanLimit
     * const planLimit = await prisma.planLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanLimitFindFirstArgs>(args?: SelectSubset<T, PlanLimitFindFirstArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlanLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitFindFirstOrThrowArgs} args - Arguments to find a PlanLimit
     * @example
     * // Get one PlanLimit
     * const planLimit = await prisma.planLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlanLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanLimits
     * const planLimits = await prisma.planLimit.findMany()
     * 
     * // Get first 10 PlanLimits
     * const planLimits = await prisma.planLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planLimitWithIdOnly = await prisma.planLimit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanLimitFindManyArgs>(args?: SelectSubset<T, PlanLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlanLimit.
     * @param {PlanLimitCreateArgs} args - Arguments to create a PlanLimit.
     * @example
     * // Create one PlanLimit
     * const PlanLimit = await prisma.planLimit.create({
     *   data: {
     *     // ... data to create a PlanLimit
     *   }
     * })
     * 
     */
    create<T extends PlanLimitCreateArgs>(args: SelectSubset<T, PlanLimitCreateArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlanLimits.
     * @param {PlanLimitCreateManyArgs} args - Arguments to create many PlanLimits.
     * @example
     * // Create many PlanLimits
     * const planLimit = await prisma.planLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanLimitCreateManyArgs>(args?: SelectSubset<T, PlanLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanLimits and returns the data saved in the database.
     * @param {PlanLimitCreateManyAndReturnArgs} args - Arguments to create many PlanLimits.
     * @example
     * // Create many PlanLimits
     * const planLimit = await prisma.planLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanLimits and only return the `id`
     * const planLimitWithIdOnly = await prisma.planLimit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlanLimit.
     * @param {PlanLimitDeleteArgs} args - Arguments to delete one PlanLimit.
     * @example
     * // Delete one PlanLimit
     * const PlanLimit = await prisma.planLimit.delete({
     *   where: {
     *     // ... filter to delete one PlanLimit
     *   }
     * })
     * 
     */
    delete<T extends PlanLimitDeleteArgs>(args: SelectSubset<T, PlanLimitDeleteArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlanLimit.
     * @param {PlanLimitUpdateArgs} args - Arguments to update one PlanLimit.
     * @example
     * // Update one PlanLimit
     * const planLimit = await prisma.planLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanLimitUpdateArgs>(args: SelectSubset<T, PlanLimitUpdateArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlanLimits.
     * @param {PlanLimitDeleteManyArgs} args - Arguments to filter PlanLimits to delete.
     * @example
     * // Delete a few PlanLimits
     * const { count } = await prisma.planLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanLimitDeleteManyArgs>(args?: SelectSubset<T, PlanLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanLimits
     * const planLimit = await prisma.planLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanLimitUpdateManyArgs>(args: SelectSubset<T, PlanLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlanLimit.
     * @param {PlanLimitUpsertArgs} args - Arguments to update or create a PlanLimit.
     * @example
     * // Update or create a PlanLimit
     * const planLimit = await prisma.planLimit.upsert({
     *   create: {
     *     // ... data to create a PlanLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanLimit we want to update
     *   }
     * })
     */
    upsert<T extends PlanLimitUpsertArgs>(args: SelectSubset<T, PlanLimitUpsertArgs<ExtArgs>>): Prisma__PlanLimitClient<$Result.GetResult<Prisma.$PlanLimitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlanLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitCountArgs} args - Arguments to filter PlanLimits to count.
     * @example
     * // Count the number of PlanLimits
     * const count = await prisma.planLimit.count({
     *   where: {
     *     // ... the filter for the PlanLimits we want to count
     *   }
     * })
    **/
    count<T extends PlanLimitCountArgs>(
      args?: Subset<T, PlanLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanLimitAggregateArgs>(args: Subset<T, PlanLimitAggregateArgs>): Prisma.PrismaPromise<GetPlanLimitAggregateType<T>>

    /**
     * Group by PlanLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanLimitGroupByArgs} args - Group by arguments.
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
      T extends PlanLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanLimitGroupByArgs['orderBy'] }
        : { orderBy?: PlanLimitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanLimit model
   */
  readonly fields: PlanLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PlanLimit model
   */ 
  interface PlanLimitFieldRefs {
    readonly id: FieldRef<"PlanLimit", 'String'>
    readonly plan: FieldRef<"PlanLimit", 'PlanType'>
    readonly maxMembers: FieldRef<"PlanLimit", 'Int'>
    readonly maxProjects: FieldRef<"PlanLimit", 'Int'>
    readonly maxStorage: FieldRef<"PlanLimit", 'BigInt'>
    readonly maxBoards: FieldRef<"PlanLimit", 'Int'>
    readonly hasAi: FieldRef<"PlanLimit", 'Boolean'>
    readonly hasReports: FieldRef<"PlanLimit", 'Boolean'>
    readonly hasSso: FieldRef<"PlanLimit", 'Boolean'>
    readonly hasApi: FieldRef<"PlanLimit", 'Boolean'>
    readonly priceMonthly: FieldRef<"PlanLimit", 'Int'>
    readonly priceYearly: FieldRef<"PlanLimit", 'Int'>
    readonly features: FieldRef<"PlanLimit", 'String[]'>
    readonly createdAt: FieldRef<"PlanLimit", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanLimit findUnique
   */
  export type PlanLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * Filter, which PlanLimit to fetch.
     */
    where: PlanLimitWhereUniqueInput
  }

  /**
   * PlanLimit findUniqueOrThrow
   */
  export type PlanLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * Filter, which PlanLimit to fetch.
     */
    where: PlanLimitWhereUniqueInput
  }

  /**
   * PlanLimit findFirst
   */
  export type PlanLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * Filter, which PlanLimit to fetch.
     */
    where?: PlanLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanLimits to fetch.
     */
    orderBy?: PlanLimitOrderByWithRelationInput | PlanLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanLimits.
     */
    cursor?: PlanLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanLimits.
     */
    distinct?: PlanLimitScalarFieldEnum | PlanLimitScalarFieldEnum[]
  }

  /**
   * PlanLimit findFirstOrThrow
   */
  export type PlanLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * Filter, which PlanLimit to fetch.
     */
    where?: PlanLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanLimits to fetch.
     */
    orderBy?: PlanLimitOrderByWithRelationInput | PlanLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanLimits.
     */
    cursor?: PlanLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanLimits.
     */
    distinct?: PlanLimitScalarFieldEnum | PlanLimitScalarFieldEnum[]
  }

  /**
   * PlanLimit findMany
   */
  export type PlanLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * Filter, which PlanLimits to fetch.
     */
    where?: PlanLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanLimits to fetch.
     */
    orderBy?: PlanLimitOrderByWithRelationInput | PlanLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanLimits.
     */
    cursor?: PlanLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanLimits.
     */
    skip?: number
    distinct?: PlanLimitScalarFieldEnum | PlanLimitScalarFieldEnum[]
  }

  /**
   * PlanLimit create
   */
  export type PlanLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * The data needed to create a PlanLimit.
     */
    data: XOR<PlanLimitCreateInput, PlanLimitUncheckedCreateInput>
  }

  /**
   * PlanLimit createMany
   */
  export type PlanLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanLimits.
     */
    data: PlanLimitCreateManyInput | PlanLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanLimit createManyAndReturn
   */
  export type PlanLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlanLimits.
     */
    data: PlanLimitCreateManyInput | PlanLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanLimit update
   */
  export type PlanLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * The data needed to update a PlanLimit.
     */
    data: XOR<PlanLimitUpdateInput, PlanLimitUncheckedUpdateInput>
    /**
     * Choose, which PlanLimit to update.
     */
    where: PlanLimitWhereUniqueInput
  }

  /**
   * PlanLimit updateMany
   */
  export type PlanLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanLimits.
     */
    data: XOR<PlanLimitUpdateManyMutationInput, PlanLimitUncheckedUpdateManyInput>
    /**
     * Filter which PlanLimits to update
     */
    where?: PlanLimitWhereInput
  }

  /**
   * PlanLimit upsert
   */
  export type PlanLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * The filter to search for the PlanLimit to update in case it exists.
     */
    where: PlanLimitWhereUniqueInput
    /**
     * In case the PlanLimit found by the `where` argument doesn't exist, create a new PlanLimit with this data.
     */
    create: XOR<PlanLimitCreateInput, PlanLimitUncheckedCreateInput>
    /**
     * In case the PlanLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanLimitUpdateInput, PlanLimitUncheckedUpdateInput>
  }

  /**
   * PlanLimit delete
   */
  export type PlanLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
    /**
     * Filter which PlanLimit to delete.
     */
    where: PlanLimitWhereUniqueInput
  }

  /**
   * PlanLimit deleteMany
   */
  export type PlanLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanLimits to delete
     */
    where?: PlanLimitWhereInput
  }

  /**
   * PlanLimit without action
   */
  export type PlanLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanLimit
     */
    select?: PlanLimitSelect<ExtArgs> | null
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


  export const BillingCustomerScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    stripeCustomerId: 'stripeCustomerId',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillingCustomerScalarFieldEnum = (typeof BillingCustomerScalarFieldEnum)[keyof typeof BillingCustomerScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    stripePriceId: 'stripePriceId',
    plan: 'plan',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    cancelledAt: 'cancelledAt',
    trialStart: 'trialStart',
    trialEnd: 'trialEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    stripeInvoiceId: 'stripeInvoiceId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    description: 'description',
    pdfUrl: 'pdfUrl',
    hostedUrl: 'hostedUrl',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    stripePaymentMethodId: 'stripePaymentMethodId',
    type: 'type',
    last4: 'last4',
    brand: 'brand',
    expiryMonth: 'expiryMonth',
    expiryYear: 'expiryYear',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const PlanLimitScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    maxMembers: 'maxMembers',
    maxProjects: 'maxProjects',
    maxStorage: 'maxStorage',
    maxBoards: 'maxBoards',
    hasAi: 'hasAi',
    hasReports: 'hasReports',
    hasSso: 'hasSso',
    hasApi: 'hasApi',
    priceMonthly: 'priceMonthly',
    priceYearly: 'priceYearly',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanLimitScalarFieldEnum = (typeof PlanLimitScalarFieldEnum)[keyof typeof PlanLimitScalarFieldEnum]


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
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type BillingCustomerWhereInput = {
    AND?: BillingCustomerWhereInput | BillingCustomerWhereInput[]
    OR?: BillingCustomerWhereInput[]
    NOT?: BillingCustomerWhereInput | BillingCustomerWhereInput[]
    id?: StringFilter<"BillingCustomer"> | string
    organizationId?: StringFilter<"BillingCustomer"> | string
    stripeCustomerId?: StringFilter<"BillingCustomer"> | string
    email?: StringFilter<"BillingCustomer"> | string
    name?: StringFilter<"BillingCustomer"> | string
    createdAt?: DateTimeFilter<"BillingCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"BillingCustomer"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    invoices?: InvoiceListRelationFilter
    paymentMethods?: PaymentMethodListRelationFilter
  }

  export type BillingCustomerOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    stripeCustomerId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
  }

  export type BillingCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId?: string
    stripeCustomerId?: string
    AND?: BillingCustomerWhereInput | BillingCustomerWhereInput[]
    OR?: BillingCustomerWhereInput[]
    NOT?: BillingCustomerWhereInput | BillingCustomerWhereInput[]
    email?: StringFilter<"BillingCustomer"> | string
    name?: StringFilter<"BillingCustomer"> | string
    createdAt?: DateTimeFilter<"BillingCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"BillingCustomer"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    invoices?: InvoiceListRelationFilter
    paymentMethods?: PaymentMethodListRelationFilter
  }, "id" | "organizationId" | "stripeCustomerId">

  export type BillingCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    stripeCustomerId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillingCustomerCountOrderByAggregateInput
    _max?: BillingCustomerMaxOrderByAggregateInput
    _min?: BillingCustomerMinOrderByAggregateInput
  }

  export type BillingCustomerScalarWhereWithAggregatesInput = {
    AND?: BillingCustomerScalarWhereWithAggregatesInput | BillingCustomerScalarWhereWithAggregatesInput[]
    OR?: BillingCustomerScalarWhereWithAggregatesInput[]
    NOT?: BillingCustomerScalarWhereWithAggregatesInput | BillingCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingCustomer"> | string
    organizationId?: StringWithAggregatesFilter<"BillingCustomer"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"BillingCustomer"> | string
    email?: StringWithAggregatesFilter<"BillingCustomer"> | string
    name?: StringWithAggregatesFilter<"BillingCustomer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BillingCustomer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillingCustomer"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    customerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customer?: XOR<BillingCustomerRelationFilter, BillingCustomerWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    trialStart?: SortOrderInput | SortOrder
    trialEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: BillingCustomerOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    customerId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customer?: XOR<BillingCustomerRelationFilter, BillingCustomerWhereInput>
  }, "id" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    trialStart?: SortOrderInput | SortOrder
    trialEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    customerId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    stripePriceId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumPlanTypeWithAggregatesFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    stripeInvoiceId?: StringFilter<"Invoice"> | string
    amount?: IntFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    description?: StringNullableFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    hostedUrl?: StringNullableFilter<"Invoice"> | string | null
    periodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<BillingCustomerRelationFilter, BillingCustomerWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    hostedUrl?: SortOrderInput | SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: BillingCustomerOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeInvoiceId?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    customerId?: StringFilter<"Invoice"> | string
    amount?: IntFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    description?: StringNullableFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    hostedUrl?: StringNullableFilter<"Invoice"> | string | null
    periodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<BillingCustomerRelationFilter, BillingCustomerWhereInput>
  }, "id" | "stripeInvoiceId">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    hostedUrl?: SortOrderInput | SortOrder
    periodStart?: SortOrderInput | SortOrder
    periodEnd?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    customerId?: StringWithAggregatesFilter<"Invoice"> | string
    stripeInvoiceId?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: IntWithAggregatesFilter<"Invoice"> | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    description?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    hostedUrl?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    periodStart?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    customerId?: StringFilter<"PaymentMethod"> | string
    stripePaymentMethodId?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    last4?: StringNullableFilter<"PaymentMethod"> | string | null
    brand?: StringNullableFilter<"PaymentMethod"> | string | null
    expiryMonth?: IntNullableFilter<"PaymentMethod"> | number | null
    expiryYear?: IntNullableFilter<"PaymentMethod"> | number | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    customer?: XOR<BillingCustomerRelationFilter, BillingCustomerWhereInput>
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    last4?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    expiryMonth?: SortOrderInput | SortOrder
    expiryYear?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: BillingCustomerOrderByWithRelationInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentMethodId?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    customerId?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    last4?: StringNullableFilter<"PaymentMethod"> | string | null
    brand?: StringNullableFilter<"PaymentMethod"> | string | null
    expiryMonth?: IntNullableFilter<"PaymentMethod"> | number | null
    expiryYear?: IntNullableFilter<"PaymentMethod"> | number | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    customer?: XOR<BillingCustomerRelationFilter, BillingCustomerWhereInput>
  }, "id" | "stripePaymentMethodId">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    last4?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    expiryMonth?: SortOrderInput | SortOrder
    expiryYear?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    customerId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    stripePaymentMethodId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    type?: StringWithAggregatesFilter<"PaymentMethod"> | string
    last4?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    brand?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    expiryMonth?: IntNullableWithAggregatesFilter<"PaymentMethod"> | number | null
    expiryYear?: IntNullableWithAggregatesFilter<"PaymentMethod"> | number | null
    isDefault?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type PlanLimitWhereInput = {
    AND?: PlanLimitWhereInput | PlanLimitWhereInput[]
    OR?: PlanLimitWhereInput[]
    NOT?: PlanLimitWhereInput | PlanLimitWhereInput[]
    id?: StringFilter<"PlanLimit"> | string
    plan?: EnumPlanTypeFilter<"PlanLimit"> | $Enums.PlanType
    maxMembers?: IntFilter<"PlanLimit"> | number
    maxProjects?: IntFilter<"PlanLimit"> | number
    maxStorage?: BigIntFilter<"PlanLimit"> | bigint | number
    maxBoards?: IntFilter<"PlanLimit"> | number
    hasAi?: BoolFilter<"PlanLimit"> | boolean
    hasReports?: BoolFilter<"PlanLimit"> | boolean
    hasSso?: BoolFilter<"PlanLimit"> | boolean
    hasApi?: BoolFilter<"PlanLimit"> | boolean
    priceMonthly?: IntFilter<"PlanLimit"> | number
    priceYearly?: IntFilter<"PlanLimit"> | number
    features?: StringNullableListFilter<"PlanLimit">
    createdAt?: DateTimeFilter<"PlanLimit"> | Date | string
    updatedAt?: DateTimeFilter<"PlanLimit"> | Date | string
  }

  export type PlanLimitOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    hasAi?: SortOrder
    hasReports?: SortOrder
    hasSso?: SortOrder
    hasApi?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plan?: $Enums.PlanType
    AND?: PlanLimitWhereInput | PlanLimitWhereInput[]
    OR?: PlanLimitWhereInput[]
    NOT?: PlanLimitWhereInput | PlanLimitWhereInput[]
    maxMembers?: IntFilter<"PlanLimit"> | number
    maxProjects?: IntFilter<"PlanLimit"> | number
    maxStorage?: BigIntFilter<"PlanLimit"> | bigint | number
    maxBoards?: IntFilter<"PlanLimit"> | number
    hasAi?: BoolFilter<"PlanLimit"> | boolean
    hasReports?: BoolFilter<"PlanLimit"> | boolean
    hasSso?: BoolFilter<"PlanLimit"> | boolean
    hasApi?: BoolFilter<"PlanLimit"> | boolean
    priceMonthly?: IntFilter<"PlanLimit"> | number
    priceYearly?: IntFilter<"PlanLimit"> | number
    features?: StringNullableListFilter<"PlanLimit">
    createdAt?: DateTimeFilter<"PlanLimit"> | Date | string
    updatedAt?: DateTimeFilter<"PlanLimit"> | Date | string
  }, "id" | "plan">

  export type PlanLimitOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    hasAi?: SortOrder
    hasReports?: SortOrder
    hasSso?: SortOrder
    hasApi?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanLimitCountOrderByAggregateInput
    _avg?: PlanLimitAvgOrderByAggregateInput
    _max?: PlanLimitMaxOrderByAggregateInput
    _min?: PlanLimitMinOrderByAggregateInput
    _sum?: PlanLimitSumOrderByAggregateInput
  }

  export type PlanLimitScalarWhereWithAggregatesInput = {
    AND?: PlanLimitScalarWhereWithAggregatesInput | PlanLimitScalarWhereWithAggregatesInput[]
    OR?: PlanLimitScalarWhereWithAggregatesInput[]
    NOT?: PlanLimitScalarWhereWithAggregatesInput | PlanLimitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanLimit"> | string
    plan?: EnumPlanTypeWithAggregatesFilter<"PlanLimit"> | $Enums.PlanType
    maxMembers?: IntWithAggregatesFilter<"PlanLimit"> | number
    maxProjects?: IntWithAggregatesFilter<"PlanLimit"> | number
    maxStorage?: BigIntWithAggregatesFilter<"PlanLimit"> | bigint | number
    maxBoards?: IntWithAggregatesFilter<"PlanLimit"> | number
    hasAi?: BoolWithAggregatesFilter<"PlanLimit"> | boolean
    hasReports?: BoolWithAggregatesFilter<"PlanLimit"> | boolean
    hasSso?: BoolWithAggregatesFilter<"PlanLimit"> | boolean
    hasApi?: BoolWithAggregatesFilter<"PlanLimit"> | boolean
    priceMonthly?: IntWithAggregatesFilter<"PlanLimit"> | number
    priceYearly?: IntWithAggregatesFilter<"PlanLimit"> | number
    features?: StringNullableListFilter<"PlanLimit">
    createdAt?: DateTimeWithAggregatesFilter<"PlanLimit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanLimit"> | Date | string
  }

  export type BillingCustomerCreateInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerUncheckedCreateInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerCreateManyInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    cancelledAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: BillingCustomerCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    customerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    cancelledAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: BillingCustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    customerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    cancelledAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    stripeInvoiceId: string
    amount: number
    currency?: string
    status: $Enums.InvoiceStatus
    description?: string | null
    pdfUrl?: string | null
    hostedUrl?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: BillingCustomerCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    customerId: string
    stripeInvoiceId: string
    amount: number
    currency?: string
    status: $Enums.InvoiceStatus
    description?: string | null
    pdfUrl?: string | null
    hostedUrl?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: BillingCustomerUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    customerId: string
    stripeInvoiceId: string
    amount: number
    currency?: string
    status: $Enums.InvoiceStatus
    description?: string | null
    pdfUrl?: string | null
    hostedUrl?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    last4?: string | null
    brand?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: BillingCustomerCreateNestedOneWithoutPaymentMethodsInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    customerId: string
    stripePaymentMethodId: string
    type: string
    last4?: string | null
    brand?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: BillingCustomerUpdateOneRequiredWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    customerId: string
    stripePaymentMethodId: string
    type: string
    last4?: string | null
    brand?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanLimitCreateInput = {
    id?: string
    plan: $Enums.PlanType
    maxMembers: number
    maxProjects: number
    maxStorage: bigint | number
    maxBoards: number
    hasAi?: boolean
    hasReports?: boolean
    hasSso?: boolean
    hasApi?: boolean
    priceMonthly: number
    priceYearly: number
    features?: PlanLimitCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanLimitUncheckedCreateInput = {
    id?: string
    plan: $Enums.PlanType
    maxMembers: number
    maxProjects: number
    maxStorage: bigint | number
    maxBoards: number
    hasAi?: boolean
    hasReports?: boolean
    hasSso?: boolean
    hasApi?: boolean
    priceMonthly: number
    priceYearly: number
    features?: PlanLimitCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanLimitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    maxBoards?: IntFieldUpdateOperationsInput | number
    hasAi?: BoolFieldUpdateOperationsInput | boolean
    hasReports?: BoolFieldUpdateOperationsInput | boolean
    hasSso?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    priceMonthly?: IntFieldUpdateOperationsInput | number
    priceYearly?: IntFieldUpdateOperationsInput | number
    features?: PlanLimitUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanLimitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    maxBoards?: IntFieldUpdateOperationsInput | number
    hasAi?: BoolFieldUpdateOperationsInput | boolean
    hasReports?: BoolFieldUpdateOperationsInput | boolean
    hasSso?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    priceMonthly?: IntFieldUpdateOperationsInput | number
    priceYearly?: IntFieldUpdateOperationsInput | number
    features?: PlanLimitUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanLimitCreateManyInput = {
    id?: string
    plan: $Enums.PlanType
    maxMembers: number
    maxProjects: number
    maxStorage: bigint | number
    maxBoards: number
    hasAi?: boolean
    hasReports?: boolean
    hasSso?: boolean
    hasApi?: boolean
    priceMonthly: number
    priceYearly: number
    features?: PlanLimitCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanLimitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    maxBoards?: IntFieldUpdateOperationsInput | number
    hasAi?: BoolFieldUpdateOperationsInput | boolean
    hasReports?: BoolFieldUpdateOperationsInput | boolean
    hasSso?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    priceMonthly?: IntFieldUpdateOperationsInput | number
    priceYearly?: IntFieldUpdateOperationsInput | number
    features?: PlanLimitUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanLimitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    maxBoards?: IntFieldUpdateOperationsInput | number
    hasAi?: BoolFieldUpdateOperationsInput | boolean
    hasReports?: BoolFieldUpdateOperationsInput | boolean
    hasSso?: BoolFieldUpdateOperationsInput | boolean
    hasApi?: BoolFieldUpdateOperationsInput | boolean
    priceMonthly?: IntFieldUpdateOperationsInput | number
    priceYearly?: IntFieldUpdateOperationsInput | number
    features?: PlanLimitUpdatefeaturesInput | string[]
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

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    stripeCustomerId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    stripeCustomerId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    stripeCustomerId?: SortOrder
    email?: SortOrder
    name?: SortOrder
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

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BillingCustomerRelationFilter = {
    is?: BillingCustomerWhereInput
    isNot?: BillingCustomerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    trialStart?: SortOrder
    trialEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    trialStart?: SortOrder
    trialEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    trialStart?: SortOrder
    trialEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
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

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrder
    pdfUrl?: SortOrder
    hostedUrl?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrder
    pdfUrl?: SortOrder
    hostedUrl?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrder
    pdfUrl?: SortOrder
    hostedUrl?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
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

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    last4?: SortOrder
    brand?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    last4?: SortOrder
    brand?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentMethodId?: SortOrder
    type?: SortOrder
    last4?: SortOrder
    brand?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PlanLimitCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    hasAi?: SortOrder
    hasReports?: SortOrder
    hasSso?: SortOrder
    hasApi?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanLimitAvgOrderByAggregateInput = {
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
  }

  export type PlanLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    hasAi?: SortOrder
    hasReports?: SortOrder
    hasSso?: SortOrder
    hasApi?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanLimitMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    hasAi?: SortOrder
    hasReports?: SortOrder
    hasSso?: SortOrder
    hasApi?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanLimitSumOrderByAggregateInput = {
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    maxBoards?: SortOrder
    priceMonthly?: SortOrder
    priceYearly?: SortOrder
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

  export type SubscriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentMethodCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentMethodCreateWithoutCustomerInput, PaymentMethodUncheckedCreateWithoutCustomerInput> | PaymentMethodCreateWithoutCustomerInput[] | PaymentMethodUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutCustomerInput | PaymentMethodCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentMethodCreateManyCustomerInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentMethodCreateWithoutCustomerInput, PaymentMethodUncheckedCreateWithoutCustomerInput> | PaymentMethodCreateWithoutCustomerInput[] | PaymentMethodUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutCustomerInput | PaymentMethodCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentMethodCreateManyCustomerInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput | SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput | SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput | SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentMethodUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutCustomerInput, PaymentMethodUncheckedCreateWithoutCustomerInput> | PaymentMethodCreateWithoutCustomerInput[] | PaymentMethodUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutCustomerInput | PaymentMethodCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutCustomerInput | PaymentMethodUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentMethodCreateManyCustomerInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutCustomerInput | PaymentMethodUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutCustomerInput | PaymentMethodUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput | SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput | SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput | SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentMethodUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutCustomerInput, PaymentMethodUncheckedCreateWithoutCustomerInput> | PaymentMethodCreateWithoutCustomerInput[] | PaymentMethodUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutCustomerInput | PaymentMethodCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutCustomerInput | PaymentMethodUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentMethodCreateManyCustomerInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutCustomerInput | PaymentMethodUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutCustomerInput | PaymentMethodUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type BillingCustomerCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<BillingCustomerCreateWithoutSubscriptionsInput, BillingCustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: BillingCustomerCreateOrConnectWithoutSubscriptionsInput
    connect?: BillingCustomerWhereUniqueInput
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BillingCustomerUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<BillingCustomerCreateWithoutSubscriptionsInput, BillingCustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: BillingCustomerCreateOrConnectWithoutSubscriptionsInput
    upsert?: BillingCustomerUpsertWithoutSubscriptionsInput
    connect?: BillingCustomerWhereUniqueInput
    update?: XOR<XOR<BillingCustomerUpdateToOneWithWhereWithoutSubscriptionsInput, BillingCustomerUpdateWithoutSubscriptionsInput>, BillingCustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type BillingCustomerCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<BillingCustomerCreateWithoutInvoicesInput, BillingCustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: BillingCustomerCreateOrConnectWithoutInvoicesInput
    connect?: BillingCustomerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BillingCustomerUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<BillingCustomerCreateWithoutInvoicesInput, BillingCustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: BillingCustomerCreateOrConnectWithoutInvoicesInput
    upsert?: BillingCustomerUpsertWithoutInvoicesInput
    connect?: BillingCustomerWhereUniqueInput
    update?: XOR<XOR<BillingCustomerUpdateToOneWithWhereWithoutInvoicesInput, BillingCustomerUpdateWithoutInvoicesInput>, BillingCustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type BillingCustomerCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<BillingCustomerCreateWithoutPaymentMethodsInput, BillingCustomerUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: BillingCustomerCreateOrConnectWithoutPaymentMethodsInput
    connect?: BillingCustomerWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BillingCustomerUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<BillingCustomerCreateWithoutPaymentMethodsInput, BillingCustomerUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: BillingCustomerCreateOrConnectWithoutPaymentMethodsInput
    upsert?: BillingCustomerUpsertWithoutPaymentMethodsInput
    connect?: BillingCustomerWhereUniqueInput
    update?: XOR<XOR<BillingCustomerUpdateToOneWithWhereWithoutPaymentMethodsInput, BillingCustomerUpdateWithoutPaymentMethodsInput>, BillingCustomerUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type PlanLimitCreatefeaturesInput = {
    set: string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PlanLimitUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
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

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
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

  export type SubscriptionCreateWithoutCustomerInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    cancelledAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    cancelledAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionCreateManyCustomerInputEnvelope = {
    data: SubscriptionCreateManyCustomerInput | SubscriptionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    stripeInvoiceId: string
    amount: number
    currency?: string
    status: $Enums.InvoiceStatus
    description?: string | null
    pdfUrl?: string | null
    hostedUrl?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    stripeInvoiceId: string
    amount: number
    currency?: string
    status: $Enums.InvoiceStatus
    description?: string | null
    pdfUrl?: string | null
    hostedUrl?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentMethodCreateWithoutCustomerInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    last4?: string | null
    brand?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutCustomerInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    last4?: string | null
    brand?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutCustomerInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutCustomerInput, PaymentMethodUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentMethodCreateManyCustomerInputEnvelope = {
    data: PaymentMethodCreateManyCustomerInput | PaymentMethodCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutCustomerInput, SubscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutCustomerInput, SubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    customerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    stripeInvoiceId?: StringFilter<"Invoice"> | string
    amount?: IntFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    description?: StringNullableFilter<"Invoice"> | string | null
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    hostedUrl?: StringNullableFilter<"Invoice"> | string | null
    periodStart?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    periodEnd?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutCustomerInput, PaymentMethodUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentMethodCreateWithoutCustomerInput, PaymentMethodUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutCustomerInput, PaymentMethodUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutCustomerInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    OR?: PaymentMethodScalarWhereInput[]
    NOT?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    customerId?: StringFilter<"PaymentMethod"> | string
    stripePaymentMethodId?: StringFilter<"PaymentMethod"> | string
    type?: StringFilter<"PaymentMethod"> | string
    last4?: StringNullableFilter<"PaymentMethod"> | string | null
    brand?: StringNullableFilter<"PaymentMethod"> | string | null
    expiryMonth?: IntNullableFilter<"PaymentMethod"> | number | null
    expiryYear?: IntNullableFilter<"PaymentMethod"> | number | null
    isDefault?: BoolFilter<"PaymentMethod"> | boolean
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
  }

  export type BillingCustomerCreateWithoutSubscriptionsInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerCreateOrConnectWithoutSubscriptionsInput = {
    where: BillingCustomerWhereUniqueInput
    create: XOR<BillingCustomerCreateWithoutSubscriptionsInput, BillingCustomerUncheckedCreateWithoutSubscriptionsInput>
  }

  export type BillingCustomerUpsertWithoutSubscriptionsInput = {
    update: XOR<BillingCustomerUpdateWithoutSubscriptionsInput, BillingCustomerUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<BillingCustomerCreateWithoutSubscriptionsInput, BillingCustomerUncheckedCreateWithoutSubscriptionsInput>
    where?: BillingCustomerWhereInput
  }

  export type BillingCustomerUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: BillingCustomerWhereInput
    data: XOR<BillingCustomerUpdateWithoutSubscriptionsInput, BillingCustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type BillingCustomerUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerCreateWithoutInvoicesInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerUncheckedCreateWithoutInvoicesInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerCreateOrConnectWithoutInvoicesInput = {
    where: BillingCustomerWhereUniqueInput
    create: XOR<BillingCustomerCreateWithoutInvoicesInput, BillingCustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type BillingCustomerUpsertWithoutInvoicesInput = {
    update: XOR<BillingCustomerUpdateWithoutInvoicesInput, BillingCustomerUncheckedUpdateWithoutInvoicesInput>
    create: XOR<BillingCustomerCreateWithoutInvoicesInput, BillingCustomerUncheckedCreateWithoutInvoicesInput>
    where?: BillingCustomerWhereInput
  }

  export type BillingCustomerUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: BillingCustomerWhereInput
    data: XOR<BillingCustomerUpdateWithoutInvoicesInput, BillingCustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type BillingCustomerUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerCreateWithoutPaymentMethodsInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string
    organizationId: string
    stripeCustomerId: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type BillingCustomerCreateOrConnectWithoutPaymentMethodsInput = {
    where: BillingCustomerWhereUniqueInput
    create: XOR<BillingCustomerCreateWithoutPaymentMethodsInput, BillingCustomerUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type BillingCustomerUpsertWithoutPaymentMethodsInput = {
    update: XOR<BillingCustomerUpdateWithoutPaymentMethodsInput, BillingCustomerUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<BillingCustomerCreateWithoutPaymentMethodsInput, BillingCustomerUncheckedCreateWithoutPaymentMethodsInput>
    where?: BillingCustomerWhereInput
  }

  export type BillingCustomerUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: BillingCustomerWhereInput
    data: XOR<BillingCustomerUpdateWithoutPaymentMethodsInput, BillingCustomerUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type BillingCustomerUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type BillingCustomerUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SubscriptionCreateManyCustomerInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    plan: $Enums.PlanType
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    cancelledAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    stripeInvoiceId: string
    amount: number
    currency?: string
    status: $Enums.InvoiceStatus
    description?: string | null
    pdfUrl?: string | null
    hostedUrl?: string | null
    periodStart?: Date | string | null
    periodEnd?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateManyCustomerInput = {
    id?: string
    stripePaymentMethodId: string
    type: string
    last4?: string | null
    brand?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeInvoiceId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hostedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    periodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentMethodId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BillingCustomerCountOutputTypeDefaultArgs instead
     */
    export type BillingCustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillingCustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillingCustomerDefaultArgs instead
     */
    export type BillingCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillingCustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentMethodDefaultArgs instead
     */
    export type PaymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentMethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanLimitDefaultArgs instead
     */
    export type PlanLimitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanLimitDefaultArgs<ExtArgs>

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