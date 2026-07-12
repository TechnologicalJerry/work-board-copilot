
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrgMember
 * 
 */
export type OrgMember = $Result.DefaultSelection<Prisma.$OrgMemberPayload>
/**
 * Model OrgInvitation
 * 
 */
export type OrgInvitation = $Result.DefaultSelection<Prisma.$OrgInvitationPayload>

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


export const OrgStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type OrgStatus = (typeof OrgStatus)[keyof typeof OrgStatus]


export const OrgRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  BILLING_ADMIN: 'BILLING_ADMIN',
  VIEWER: 'VIEWER'
};

export type OrgRole = (typeof OrgRole)[keyof typeof OrgRole]


export const MemberStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  LEFT: 'LEFT'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]

}

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type OrgStatus = $Enums.OrgStatus

export const OrgStatus: typeof $Enums.OrgStatus

export type OrgRole = $Enums.OrgRole

export const OrgRole: typeof $Enums.OrgRole

export type MemberStatus = $Enums.MemberStatus

export const MemberStatus: typeof $Enums.MemberStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.orgMember`: Exposes CRUD operations for the **OrgMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrgMembers
    * const orgMembers = await prisma.orgMember.findMany()
    * ```
    */
  get orgMember(): Prisma.OrgMemberDelegate<ExtArgs>;

  /**
   * `prisma.orgInvitation`: Exposes CRUD operations for the **OrgInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrgInvitations
    * const orgInvitations = await prisma.orgInvitation.findMany()
    * ```
    */
  get orgInvitation(): Prisma.OrgInvitationDelegate<ExtArgs>;
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
    Organization: 'Organization',
    OrgMember: 'OrgMember',
    OrgInvitation: 'OrgInvitation'
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
      modelProps: "organization" | "orgMember" | "orgInvitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrgMember: {
        payload: Prisma.$OrgMemberPayload<ExtArgs>
        fields: Prisma.OrgMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          findFirst: {
            args: Prisma.OrgMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          findMany: {
            args: Prisma.OrgMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>[]
          }
          create: {
            args: Prisma.OrgMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          createMany: {
            args: Prisma.OrgMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>[]
          }
          delete: {
            args: Prisma.OrgMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          update: {
            args: Prisma.OrgMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrgMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrgMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgMemberPayload>
          }
          aggregate: {
            args: Prisma.OrgMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgMember>
          }
          groupBy: {
            args: Prisma.OrgMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrgMemberCountAggregateOutputType> | number
          }
        }
      }
      OrgInvitation: {
        payload: Prisma.$OrgInvitationPayload<ExtArgs>
        fields: Prisma.OrgInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>
          }
          findFirst: {
            args: Prisma.OrgInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>
          }
          findMany: {
            args: Prisma.OrgInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>[]
          }
          create: {
            args: Prisma.OrgInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>
          }
          createMany: {
            args: Prisma.OrgInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>[]
          }
          delete: {
            args: Prisma.OrgInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>
          }
          update: {
            args: Prisma.OrgInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>
          }
          deleteMany: {
            args: Prisma.OrgInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrgInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgInvitationPayload>
          }
          aggregate: {
            args: Prisma.OrgInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgInvitation>
          }
          groupBy: {
            args: Prisma.OrgInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<OrgInvitationCountAggregateOutputType> | number
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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    invitations: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    invitations?: boolean | OrganizationCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgInvitationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: bigint | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    domain: string | null
    logoUrl: string | null
    website: string | null
    description: string | null
    industry: string | null
    size: string | null
    country: string | null
    timezone: string | null
    plan: $Enums.PlanType | null
    planExpiresAt: Date | null
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: bigint | null
    ownerId: string | null
    status: $Enums.OrgStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    domain: string | null
    logoUrl: string | null
    website: string | null
    description: string | null
    industry: string | null
    size: string | null
    country: string | null
    timezone: string | null
    plan: $Enums.PlanType | null
    planExpiresAt: Date | null
    maxMembers: number | null
    maxProjects: number | null
    maxStorage: bigint | null
    ownerId: string | null
    status: $Enums.OrgStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    domain: number
    logoUrl: number
    website: number
    description: number
    industry: number
    size: number
    country: number
    timezone: number
    plan: number
    planExpiresAt: number
    maxMembers: number
    maxProjects: number
    maxStorage: number
    settings: number
    ownerId: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
  }

  export type OrganizationSumAggregateInputType = {
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    logoUrl?: true
    website?: true
    description?: true
    industry?: true
    size?: true
    country?: true
    timezone?: true
    plan?: true
    planExpiresAt?: true
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    ownerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    logoUrl?: true
    website?: true
    description?: true
    industry?: true
    size?: true
    country?: true
    timezone?: true
    plan?: true
    planExpiresAt?: true
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    ownerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    domain?: true
    logoUrl?: true
    website?: true
    description?: true
    industry?: true
    size?: true
    country?: true
    timezone?: true
    plan?: true
    planExpiresAt?: true
    maxMembers?: true
    maxProjects?: true
    maxStorage?: true
    settings?: true
    ownerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string
    domain: string | null
    logoUrl: string | null
    website: string | null
    description: string | null
    industry: string | null
    size: string | null
    country: string | null
    timezone: string
    plan: $Enums.PlanType
    planExpiresAt: Date | null
    maxMembers: number
    maxProjects: number
    maxStorage: bigint
    settings: JsonValue
    ownerId: string
    status: $Enums.OrgStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    logoUrl?: boolean
    website?: boolean
    description?: boolean
    industry?: boolean
    size?: boolean
    country?: boolean
    timezone?: boolean
    plan?: boolean
    planExpiresAt?: boolean
    maxMembers?: boolean
    maxProjects?: boolean
    maxStorage?: boolean
    settings?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    members?: boolean | Organization$membersArgs<ExtArgs>
    invitations?: boolean | Organization$invitationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    logoUrl?: boolean
    website?: boolean
    description?: boolean
    industry?: boolean
    size?: boolean
    country?: boolean
    timezone?: boolean
    plan?: boolean
    planExpiresAt?: boolean
    maxMembers?: boolean
    maxProjects?: boolean
    maxStorage?: boolean
    settings?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    domain?: boolean
    logoUrl?: boolean
    website?: boolean
    description?: boolean
    industry?: boolean
    size?: boolean
    country?: boolean
    timezone?: boolean
    plan?: boolean
    planExpiresAt?: boolean
    maxMembers?: boolean
    maxProjects?: boolean
    maxStorage?: boolean
    settings?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Organization$membersArgs<ExtArgs>
    invitations?: boolean | Organization$invitationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      members: Prisma.$OrgMemberPayload<ExtArgs>[]
      invitations: Prisma.$OrgInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      domain: string | null
      logoUrl: string | null
      website: string | null
      description: string | null
      industry: string | null
      size: string | null
      country: string | null
      timezone: string
      plan: $Enums.PlanType
      planExpiresAt: Date | null
      maxMembers: number
      maxProjects: number
      maxStorage: bigint
      settings: Prisma.JsonValue
      ownerId: string
      status: $Enums.OrgStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findMany"> | Null>
    invitations<T extends Organization$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly domain: FieldRef<"Organization", 'String'>
    readonly logoUrl: FieldRef<"Organization", 'String'>
    readonly website: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly industry: FieldRef<"Organization", 'String'>
    readonly size: FieldRef<"Organization", 'String'>
    readonly country: FieldRef<"Organization", 'String'>
    readonly timezone: FieldRef<"Organization", 'String'>
    readonly plan: FieldRef<"Organization", 'PlanType'>
    readonly planExpiresAt: FieldRef<"Organization", 'DateTime'>
    readonly maxMembers: FieldRef<"Organization", 'Int'>
    readonly maxProjects: FieldRef<"Organization", 'Int'>
    readonly maxStorage: FieldRef<"Organization", 'BigInt'>
    readonly settings: FieldRef<"Organization", 'Json'>
    readonly ownerId: FieldRef<"Organization", 'String'>
    readonly status: FieldRef<"Organization", 'OrgStatus'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly deletedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    where?: OrgMemberWhereInput
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    cursor?: OrgMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * Organization.invitations
   */
  export type Organization$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    where?: OrgInvitationWhereInput
    orderBy?: OrgInvitationOrderByWithRelationInput | OrgInvitationOrderByWithRelationInput[]
    cursor?: OrgInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgInvitationScalarFieldEnum | OrgInvitationScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrgMember
   */

  export type AggregateOrgMember = {
    _count: OrgMemberCountAggregateOutputType | null
    _min: OrgMemberMinAggregateOutputType | null
    _max: OrgMemberMaxAggregateOutputType | null
  }

  export type OrgMemberMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    role: $Enums.OrgRole | null
    status: $Enums.MemberStatus | null
    invitedBy: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrgMemberMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    role: $Enums.OrgRole | null
    status: $Enums.MemberStatus | null
    invitedBy: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrgMemberCountAggregateOutputType = {
    id: number
    organizationId: number
    userId: number
    role: number
    status: number
    invitedBy: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrgMemberMinAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    role?: true
    status?: true
    invitedBy?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrgMemberMaxAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    role?: true
    status?: true
    invitedBy?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrgMemberCountAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    role?: true
    status?: true
    invitedBy?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrgMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgMember to aggregate.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrgMembers
    **/
    _count?: true | OrgMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgMemberMaxAggregateInputType
  }

  export type GetOrgMemberAggregateType<T extends OrgMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgMember[P]>
      : GetScalarType<T[P], AggregateOrgMember[P]>
  }




  export type OrgMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgMemberWhereInput
    orderBy?: OrgMemberOrderByWithAggregationInput | OrgMemberOrderByWithAggregationInput[]
    by: OrgMemberScalarFieldEnum[] | OrgMemberScalarFieldEnum
    having?: OrgMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgMemberCountAggregateInputType | true
    _min?: OrgMemberMinAggregateInputType
    _max?: OrgMemberMaxAggregateInputType
  }

  export type OrgMemberGroupByOutputType = {
    id: string
    organizationId: string
    userId: string
    role: $Enums.OrgRole
    status: $Enums.MemberStatus
    invitedBy: string | null
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OrgMemberCountAggregateOutputType | null
    _min: OrgMemberMinAggregateOutputType | null
    _max: OrgMemberMaxAggregateOutputType | null
  }

  type GetOrgMemberGroupByPayload<T extends OrgMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrgMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrgMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    invitedBy?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgMember"]>

  export type OrgMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    invitedBy?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgMember"]>

  export type OrgMemberSelectScalar = {
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    invitedBy?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrgMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrgMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrgMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrgMember"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      userId: string
      role: $Enums.OrgRole
      status: $Enums.MemberStatus
      invitedBy: string | null
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orgMember"]>
    composites: {}
  }

  type OrgMemberGetPayload<S extends boolean | null | undefined | OrgMemberDefaultArgs> = $Result.GetResult<Prisma.$OrgMemberPayload, S>

  type OrgMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrgMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrgMemberCountAggregateInputType | true
    }

  export interface OrgMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrgMember'], meta: { name: 'OrgMember' } }
    /**
     * Find zero or one OrgMember that matches the filter.
     * @param {OrgMemberFindUniqueArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgMemberFindUniqueArgs>(args: SelectSubset<T, OrgMemberFindUniqueArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrgMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrgMemberFindUniqueOrThrowArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrgMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberFindFirstArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgMemberFindFirstArgs>(args?: SelectSubset<T, OrgMemberFindFirstArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrgMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberFindFirstOrThrowArgs} args - Arguments to find a OrgMember
     * @example
     * // Get one OrgMember
     * const orgMember = await prisma.orgMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrgMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrgMembers
     * const orgMembers = await prisma.orgMember.findMany()
     * 
     * // Get first 10 OrgMembers
     * const orgMembers = await prisma.orgMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgMemberWithIdOnly = await prisma.orgMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgMemberFindManyArgs>(args?: SelectSubset<T, OrgMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrgMember.
     * @param {OrgMemberCreateArgs} args - Arguments to create a OrgMember.
     * @example
     * // Create one OrgMember
     * const OrgMember = await prisma.orgMember.create({
     *   data: {
     *     // ... data to create a OrgMember
     *   }
     * })
     * 
     */
    create<T extends OrgMemberCreateArgs>(args: SelectSubset<T, OrgMemberCreateArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrgMembers.
     * @param {OrgMemberCreateManyArgs} args - Arguments to create many OrgMembers.
     * @example
     * // Create many OrgMembers
     * const orgMember = await prisma.orgMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgMemberCreateManyArgs>(args?: SelectSubset<T, OrgMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrgMembers and returns the data saved in the database.
     * @param {OrgMemberCreateManyAndReturnArgs} args - Arguments to create many OrgMembers.
     * @example
     * // Create many OrgMembers
     * const orgMember = await prisma.orgMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrgMembers and only return the `id`
     * const orgMemberWithIdOnly = await prisma.orgMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrgMember.
     * @param {OrgMemberDeleteArgs} args - Arguments to delete one OrgMember.
     * @example
     * // Delete one OrgMember
     * const OrgMember = await prisma.orgMember.delete({
     *   where: {
     *     // ... filter to delete one OrgMember
     *   }
     * })
     * 
     */
    delete<T extends OrgMemberDeleteArgs>(args: SelectSubset<T, OrgMemberDeleteArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrgMember.
     * @param {OrgMemberUpdateArgs} args - Arguments to update one OrgMember.
     * @example
     * // Update one OrgMember
     * const orgMember = await prisma.orgMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgMemberUpdateArgs>(args: SelectSubset<T, OrgMemberUpdateArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrgMembers.
     * @param {OrgMemberDeleteManyArgs} args - Arguments to filter OrgMembers to delete.
     * @example
     * // Delete a few OrgMembers
     * const { count } = await prisma.orgMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgMemberDeleteManyArgs>(args?: SelectSubset<T, OrgMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrgMembers
     * const orgMember = await prisma.orgMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgMemberUpdateManyArgs>(args: SelectSubset<T, OrgMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrgMember.
     * @param {OrgMemberUpsertArgs} args - Arguments to update or create a OrgMember.
     * @example
     * // Update or create a OrgMember
     * const orgMember = await prisma.orgMember.upsert({
     *   create: {
     *     // ... data to create a OrgMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrgMember we want to update
     *   }
     * })
     */
    upsert<T extends OrgMemberUpsertArgs>(args: SelectSubset<T, OrgMemberUpsertArgs<ExtArgs>>): Prisma__OrgMemberClient<$Result.GetResult<Prisma.$OrgMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrgMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberCountArgs} args - Arguments to filter OrgMembers to count.
     * @example
     * // Count the number of OrgMembers
     * const count = await prisma.orgMember.count({
     *   where: {
     *     // ... the filter for the OrgMembers we want to count
     *   }
     * })
    **/
    count<T extends OrgMemberCountArgs>(
      args?: Subset<T, OrgMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrgMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrgMemberAggregateArgs>(args: Subset<T, OrgMemberAggregateArgs>): Prisma.PrismaPromise<GetOrgMemberAggregateType<T>>

    /**
     * Group by OrgMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgMemberGroupByArgs} args - Group by arguments.
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
      T extends OrgMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrgMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrgMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrgMember model
   */
  readonly fields: OrgMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrgMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OrgMember model
   */ 
  interface OrgMemberFieldRefs {
    readonly id: FieldRef<"OrgMember", 'String'>
    readonly organizationId: FieldRef<"OrgMember", 'String'>
    readonly userId: FieldRef<"OrgMember", 'String'>
    readonly role: FieldRef<"OrgMember", 'OrgRole'>
    readonly status: FieldRef<"OrgMember", 'MemberStatus'>
    readonly invitedBy: FieldRef<"OrgMember", 'String'>
    readonly joinedAt: FieldRef<"OrgMember", 'DateTime'>
    readonly createdAt: FieldRef<"OrgMember", 'DateTime'>
    readonly updatedAt: FieldRef<"OrgMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrgMember findUnique
   */
  export type OrgMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember findUniqueOrThrow
   */
  export type OrgMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember findFirst
   */
  export type OrgMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgMembers.
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgMembers.
     */
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * OrgMember findFirstOrThrow
   */
  export type OrgMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMember to fetch.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgMembers.
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgMembers.
     */
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * OrgMember findMany
   */
  export type OrgMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrgMembers to fetch.
     */
    where?: OrgMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgMembers to fetch.
     */
    orderBy?: OrgMemberOrderByWithRelationInput | OrgMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrgMembers.
     */
    cursor?: OrgMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgMembers.
     */
    skip?: number
    distinct?: OrgMemberScalarFieldEnum | OrgMemberScalarFieldEnum[]
  }

  /**
   * OrgMember create
   */
  export type OrgMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrgMember.
     */
    data: XOR<OrgMemberCreateInput, OrgMemberUncheckedCreateInput>
  }

  /**
   * OrgMember createMany
   */
  export type OrgMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrgMembers.
     */
    data: OrgMemberCreateManyInput | OrgMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrgMember createManyAndReturn
   */
  export type OrgMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrgMembers.
     */
    data: OrgMemberCreateManyInput | OrgMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgMember update
   */
  export type OrgMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrgMember.
     */
    data: XOR<OrgMemberUpdateInput, OrgMemberUncheckedUpdateInput>
    /**
     * Choose, which OrgMember to update.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember updateMany
   */
  export type OrgMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrgMembers.
     */
    data: XOR<OrgMemberUpdateManyMutationInput, OrgMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrgMembers to update
     */
    where?: OrgMemberWhereInput
  }

  /**
   * OrgMember upsert
   */
  export type OrgMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrgMember to update in case it exists.
     */
    where: OrgMemberWhereUniqueInput
    /**
     * In case the OrgMember found by the `where` argument doesn't exist, create a new OrgMember with this data.
     */
    create: XOR<OrgMemberCreateInput, OrgMemberUncheckedCreateInput>
    /**
     * In case the OrgMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgMemberUpdateInput, OrgMemberUncheckedUpdateInput>
  }

  /**
   * OrgMember delete
   */
  export type OrgMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
    /**
     * Filter which OrgMember to delete.
     */
    where: OrgMemberWhereUniqueInput
  }

  /**
   * OrgMember deleteMany
   */
  export type OrgMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgMembers to delete
     */
    where?: OrgMemberWhereInput
  }

  /**
   * OrgMember without action
   */
  export type OrgMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgMember
     */
    select?: OrgMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgMemberInclude<ExtArgs> | null
  }


  /**
   * Model OrgInvitation
   */

  export type AggregateOrgInvitation = {
    _count: OrgInvitationCountAggregateOutputType | null
    _min: OrgInvitationMinAggregateOutputType | null
    _max: OrgInvitationMaxAggregateOutputType | null
  }

  export type OrgInvitationMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    email: string | null
    role: $Enums.OrgRole | null
    token: string | null
    invitedBy: string | null
    expiresAt: Date | null
    acceptedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type OrgInvitationMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    email: string | null
    role: $Enums.OrgRole | null
    token: string | null
    invitedBy: string | null
    expiresAt: Date | null
    acceptedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type OrgInvitationCountAggregateOutputType = {
    id: number
    organizationId: number
    email: number
    role: number
    token: number
    invitedBy: number
    expiresAt: number
    acceptedAt: number
    revokedAt: number
    createdAt: number
    _all: number
  }


  export type OrgInvitationMinAggregateInputType = {
    id?: true
    organizationId?: true
    email?: true
    role?: true
    token?: true
    invitedBy?: true
    expiresAt?: true
    acceptedAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type OrgInvitationMaxAggregateInputType = {
    id?: true
    organizationId?: true
    email?: true
    role?: true
    token?: true
    invitedBy?: true
    expiresAt?: true
    acceptedAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type OrgInvitationCountAggregateInputType = {
    id?: true
    organizationId?: true
    email?: true
    role?: true
    token?: true
    invitedBy?: true
    expiresAt?: true
    acceptedAt?: true
    revokedAt?: true
    createdAt?: true
    _all?: true
  }

  export type OrgInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgInvitation to aggregate.
     */
    where?: OrgInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgInvitations to fetch.
     */
    orderBy?: OrgInvitationOrderByWithRelationInput | OrgInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrgInvitations
    **/
    _count?: true | OrgInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgInvitationMaxAggregateInputType
  }

  export type GetOrgInvitationAggregateType<T extends OrgInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgInvitation[P]>
      : GetScalarType<T[P], AggregateOrgInvitation[P]>
  }




  export type OrgInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgInvitationWhereInput
    orderBy?: OrgInvitationOrderByWithAggregationInput | OrgInvitationOrderByWithAggregationInput[]
    by: OrgInvitationScalarFieldEnum[] | OrgInvitationScalarFieldEnum
    having?: OrgInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgInvitationCountAggregateInputType | true
    _min?: OrgInvitationMinAggregateInputType
    _max?: OrgInvitationMaxAggregateInputType
  }

  export type OrgInvitationGroupByOutputType = {
    id: string
    organizationId: string
    email: string
    role: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date
    acceptedAt: Date | null
    revokedAt: Date | null
    createdAt: Date
    _count: OrgInvitationCountAggregateOutputType | null
    _min: OrgInvitationMinAggregateOutputType | null
    _max: OrgInvitationMaxAggregateOutputType | null
  }

  type GetOrgInvitationGroupByPayload<T extends OrgInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], OrgInvitationGroupByOutputType[P]>
        }
      >
    >


  export type OrgInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgInvitation"]>

  export type OrgInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgInvitation"]>

  export type OrgInvitationSelectScalar = {
    id?: boolean
    organizationId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    invitedBy?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }

  export type OrgInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrgInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrgInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrgInvitation"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      email: string
      role: $Enums.OrgRole
      token: string
      invitedBy: string
      expiresAt: Date
      acceptedAt: Date | null
      revokedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["orgInvitation"]>
    composites: {}
  }

  type OrgInvitationGetPayload<S extends boolean | null | undefined | OrgInvitationDefaultArgs> = $Result.GetResult<Prisma.$OrgInvitationPayload, S>

  type OrgInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrgInvitationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrgInvitationCountAggregateInputType | true
    }

  export interface OrgInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrgInvitation'], meta: { name: 'OrgInvitation' } }
    /**
     * Find zero or one OrgInvitation that matches the filter.
     * @param {OrgInvitationFindUniqueArgs} args - Arguments to find a OrgInvitation
     * @example
     * // Get one OrgInvitation
     * const orgInvitation = await prisma.orgInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgInvitationFindUniqueArgs>(args: SelectSubset<T, OrgInvitationFindUniqueArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrgInvitation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrgInvitationFindUniqueOrThrowArgs} args - Arguments to find a OrgInvitation
     * @example
     * // Get one OrgInvitation
     * const orgInvitation = await prisma.orgInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrgInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationFindFirstArgs} args - Arguments to find a OrgInvitation
     * @example
     * // Get one OrgInvitation
     * const orgInvitation = await prisma.orgInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgInvitationFindFirstArgs>(args?: SelectSubset<T, OrgInvitationFindFirstArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrgInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationFindFirstOrThrowArgs} args - Arguments to find a OrgInvitation
     * @example
     * // Get one OrgInvitation
     * const orgInvitation = await prisma.orgInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrgInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrgInvitations
     * const orgInvitations = await prisma.orgInvitation.findMany()
     * 
     * // Get first 10 OrgInvitations
     * const orgInvitations = await prisma.orgInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgInvitationWithIdOnly = await prisma.orgInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgInvitationFindManyArgs>(args?: SelectSubset<T, OrgInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrgInvitation.
     * @param {OrgInvitationCreateArgs} args - Arguments to create a OrgInvitation.
     * @example
     * // Create one OrgInvitation
     * const OrgInvitation = await prisma.orgInvitation.create({
     *   data: {
     *     // ... data to create a OrgInvitation
     *   }
     * })
     * 
     */
    create<T extends OrgInvitationCreateArgs>(args: SelectSubset<T, OrgInvitationCreateArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrgInvitations.
     * @param {OrgInvitationCreateManyArgs} args - Arguments to create many OrgInvitations.
     * @example
     * // Create many OrgInvitations
     * const orgInvitation = await prisma.orgInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgInvitationCreateManyArgs>(args?: SelectSubset<T, OrgInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrgInvitations and returns the data saved in the database.
     * @param {OrgInvitationCreateManyAndReturnArgs} args - Arguments to create many OrgInvitations.
     * @example
     * // Create many OrgInvitations
     * const orgInvitation = await prisma.orgInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrgInvitations and only return the `id`
     * const orgInvitationWithIdOnly = await prisma.orgInvitation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrgInvitation.
     * @param {OrgInvitationDeleteArgs} args - Arguments to delete one OrgInvitation.
     * @example
     * // Delete one OrgInvitation
     * const OrgInvitation = await prisma.orgInvitation.delete({
     *   where: {
     *     // ... filter to delete one OrgInvitation
     *   }
     * })
     * 
     */
    delete<T extends OrgInvitationDeleteArgs>(args: SelectSubset<T, OrgInvitationDeleteArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrgInvitation.
     * @param {OrgInvitationUpdateArgs} args - Arguments to update one OrgInvitation.
     * @example
     * // Update one OrgInvitation
     * const orgInvitation = await prisma.orgInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgInvitationUpdateArgs>(args: SelectSubset<T, OrgInvitationUpdateArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrgInvitations.
     * @param {OrgInvitationDeleteManyArgs} args - Arguments to filter OrgInvitations to delete.
     * @example
     * // Delete a few OrgInvitations
     * const { count } = await prisma.orgInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgInvitationDeleteManyArgs>(args?: SelectSubset<T, OrgInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrgInvitations
     * const orgInvitation = await prisma.orgInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgInvitationUpdateManyArgs>(args: SelectSubset<T, OrgInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrgInvitation.
     * @param {OrgInvitationUpsertArgs} args - Arguments to update or create a OrgInvitation.
     * @example
     * // Update or create a OrgInvitation
     * const orgInvitation = await prisma.orgInvitation.upsert({
     *   create: {
     *     // ... data to create a OrgInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrgInvitation we want to update
     *   }
     * })
     */
    upsert<T extends OrgInvitationUpsertArgs>(args: SelectSubset<T, OrgInvitationUpsertArgs<ExtArgs>>): Prisma__OrgInvitationClient<$Result.GetResult<Prisma.$OrgInvitationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrgInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationCountArgs} args - Arguments to filter OrgInvitations to count.
     * @example
     * // Count the number of OrgInvitations
     * const count = await prisma.orgInvitation.count({
     *   where: {
     *     // ... the filter for the OrgInvitations we want to count
     *   }
     * })
    **/
    count<T extends OrgInvitationCountArgs>(
      args?: Subset<T, OrgInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrgInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrgInvitationAggregateArgs>(args: Subset<T, OrgInvitationAggregateArgs>): Prisma.PrismaPromise<GetOrgInvitationAggregateType<T>>

    /**
     * Group by OrgInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgInvitationGroupByArgs} args - Group by arguments.
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
      T extends OrgInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgInvitationGroupByArgs['orderBy'] }
        : { orderBy?: OrgInvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrgInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrgInvitation model
   */
  readonly fields: OrgInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrgInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OrgInvitation model
   */ 
  interface OrgInvitationFieldRefs {
    readonly id: FieldRef<"OrgInvitation", 'String'>
    readonly organizationId: FieldRef<"OrgInvitation", 'String'>
    readonly email: FieldRef<"OrgInvitation", 'String'>
    readonly role: FieldRef<"OrgInvitation", 'OrgRole'>
    readonly token: FieldRef<"OrgInvitation", 'String'>
    readonly invitedBy: FieldRef<"OrgInvitation", 'String'>
    readonly expiresAt: FieldRef<"OrgInvitation", 'DateTime'>
    readonly acceptedAt: FieldRef<"OrgInvitation", 'DateTime'>
    readonly revokedAt: FieldRef<"OrgInvitation", 'DateTime'>
    readonly createdAt: FieldRef<"OrgInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrgInvitation findUnique
   */
  export type OrgInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrgInvitation to fetch.
     */
    where: OrgInvitationWhereUniqueInput
  }

  /**
   * OrgInvitation findUniqueOrThrow
   */
  export type OrgInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrgInvitation to fetch.
     */
    where: OrgInvitationWhereUniqueInput
  }

  /**
   * OrgInvitation findFirst
   */
  export type OrgInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrgInvitation to fetch.
     */
    where?: OrgInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgInvitations to fetch.
     */
    orderBy?: OrgInvitationOrderByWithRelationInput | OrgInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgInvitations.
     */
    cursor?: OrgInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgInvitations.
     */
    distinct?: OrgInvitationScalarFieldEnum | OrgInvitationScalarFieldEnum[]
  }

  /**
   * OrgInvitation findFirstOrThrow
   */
  export type OrgInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrgInvitation to fetch.
     */
    where?: OrgInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgInvitations to fetch.
     */
    orderBy?: OrgInvitationOrderByWithRelationInput | OrgInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgInvitations.
     */
    cursor?: OrgInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgInvitations.
     */
    distinct?: OrgInvitationScalarFieldEnum | OrgInvitationScalarFieldEnum[]
  }

  /**
   * OrgInvitation findMany
   */
  export type OrgInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * Filter, which OrgInvitations to fetch.
     */
    where?: OrgInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgInvitations to fetch.
     */
    orderBy?: OrgInvitationOrderByWithRelationInput | OrgInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrgInvitations.
     */
    cursor?: OrgInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgInvitations.
     */
    skip?: number
    distinct?: OrgInvitationScalarFieldEnum | OrgInvitationScalarFieldEnum[]
  }

  /**
   * OrgInvitation create
   */
  export type OrgInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a OrgInvitation.
     */
    data: XOR<OrgInvitationCreateInput, OrgInvitationUncheckedCreateInput>
  }

  /**
   * OrgInvitation createMany
   */
  export type OrgInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrgInvitations.
     */
    data: OrgInvitationCreateManyInput | OrgInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrgInvitation createManyAndReturn
   */
  export type OrgInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrgInvitations.
     */
    data: OrgInvitationCreateManyInput | OrgInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgInvitation update
   */
  export type OrgInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a OrgInvitation.
     */
    data: XOR<OrgInvitationUpdateInput, OrgInvitationUncheckedUpdateInput>
    /**
     * Choose, which OrgInvitation to update.
     */
    where: OrgInvitationWhereUniqueInput
  }

  /**
   * OrgInvitation updateMany
   */
  export type OrgInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrgInvitations.
     */
    data: XOR<OrgInvitationUpdateManyMutationInput, OrgInvitationUncheckedUpdateManyInput>
    /**
     * Filter which OrgInvitations to update
     */
    where?: OrgInvitationWhereInput
  }

  /**
   * OrgInvitation upsert
   */
  export type OrgInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the OrgInvitation to update in case it exists.
     */
    where: OrgInvitationWhereUniqueInput
    /**
     * In case the OrgInvitation found by the `where` argument doesn't exist, create a new OrgInvitation with this data.
     */
    create: XOR<OrgInvitationCreateInput, OrgInvitationUncheckedCreateInput>
    /**
     * In case the OrgInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgInvitationUpdateInput, OrgInvitationUncheckedUpdateInput>
  }

  /**
   * OrgInvitation delete
   */
  export type OrgInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
    /**
     * Filter which OrgInvitation to delete.
     */
    where: OrgInvitationWhereUniqueInput
  }

  /**
   * OrgInvitation deleteMany
   */
  export type OrgInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgInvitations to delete
     */
    where?: OrgInvitationWhereInput
  }

  /**
   * OrgInvitation without action
   */
  export type OrgInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgInvitation
     */
    select?: OrgInvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInvitationInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    domain: 'domain',
    logoUrl: 'logoUrl',
    website: 'website',
    description: 'description',
    industry: 'industry',
    size: 'size',
    country: 'country',
    timezone: 'timezone',
    plan: 'plan',
    planExpiresAt: 'planExpiresAt',
    maxMembers: 'maxMembers',
    maxProjects: 'maxProjects',
    maxStorage: 'maxStorage',
    settings: 'settings',
    ownerId: 'ownerId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrgMemberScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    role: 'role',
    status: 'status',
    invitedBy: 'invitedBy',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrgMemberScalarFieldEnum = (typeof OrgMemberScalarFieldEnum)[keyof typeof OrgMemberScalarFieldEnum]


  export const OrgInvitationScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    email: 'email',
    role: 'role',
    token: 'token',
    invitedBy: 'invitedBy',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
  };

  export type OrgInvitationScalarFieldEnum = (typeof OrgInvitationScalarFieldEnum)[keyof typeof OrgInvitationScalarFieldEnum]


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
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'OrgStatus'
   */
  export type EnumOrgStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgStatus'>
    


  /**
   * Reference to a field of type 'OrgStatus[]'
   */
  export type ListEnumOrgStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgStatus[]'>
    


  /**
   * Reference to a field of type 'OrgRole'
   */
  export type EnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole'>
    


  /**
   * Reference to a field of type 'OrgRole[]'
   */
  export type ListEnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole[]'>
    


  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus'>
    


  /**
   * Reference to a field of type 'MemberStatus[]'
   */
  export type ListEnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus[]'>
    


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


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    domain?: StringNullableFilter<"Organization"> | string | null
    logoUrl?: StringNullableFilter<"Organization"> | string | null
    website?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    industry?: StringNullableFilter<"Organization"> | string | null
    size?: StringNullableFilter<"Organization"> | string | null
    country?: StringNullableFilter<"Organization"> | string | null
    timezone?: StringFilter<"Organization"> | string
    plan?: EnumPlanTypeFilter<"Organization"> | $Enums.PlanType
    planExpiresAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    maxMembers?: IntFilter<"Organization"> | number
    maxProjects?: IntFilter<"Organization"> | number
    maxStorage?: BigIntFilter<"Organization"> | bigint | number
    settings?: JsonFilter<"Organization">
    ownerId?: StringFilter<"Organization"> | string
    status?: EnumOrgStatusFilter<"Organization"> | $Enums.OrgStatus
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    members?: OrgMemberListRelationFilter
    invitations?: OrgInvitationListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    timezone?: SortOrder
    plan?: SortOrder
    planExpiresAt?: SortOrderInput | SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    settings?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    members?: OrgMemberOrderByRelationAggregateInput
    invitations?: OrgInvitationOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    domain?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    logoUrl?: StringNullableFilter<"Organization"> | string | null
    website?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    industry?: StringNullableFilter<"Organization"> | string | null
    size?: StringNullableFilter<"Organization"> | string | null
    country?: StringNullableFilter<"Organization"> | string | null
    timezone?: StringFilter<"Organization"> | string
    plan?: EnumPlanTypeFilter<"Organization"> | $Enums.PlanType
    planExpiresAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    maxMembers?: IntFilter<"Organization"> | number
    maxProjects?: IntFilter<"Organization"> | number
    maxStorage?: BigIntFilter<"Organization"> | bigint | number
    settings?: JsonFilter<"Organization">
    ownerId?: StringFilter<"Organization"> | string
    status?: EnumOrgStatusFilter<"Organization"> | $Enums.OrgStatus
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    members?: OrgMemberListRelationFilter
    invitations?: OrgInvitationListRelationFilter
  }, "id" | "slug" | "domain">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    timezone?: SortOrder
    plan?: SortOrder
    planExpiresAt?: SortOrderInput | SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    settings?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    domain?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    website?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    size?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    country?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    timezone?: StringWithAggregatesFilter<"Organization"> | string
    plan?: EnumPlanTypeWithAggregatesFilter<"Organization"> | $Enums.PlanType
    planExpiresAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    maxMembers?: IntWithAggregatesFilter<"Organization"> | number
    maxProjects?: IntWithAggregatesFilter<"Organization"> | number
    maxStorage?: BigIntWithAggregatesFilter<"Organization"> | bigint | number
    settings?: JsonWithAggregatesFilter<"Organization">
    ownerId?: StringWithAggregatesFilter<"Organization"> | string
    status?: EnumOrgStatusWithAggregatesFilter<"Organization"> | $Enums.OrgStatus
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
  }

  export type OrgMemberWhereInput = {
    AND?: OrgMemberWhereInput | OrgMemberWhereInput[]
    OR?: OrgMemberWhereInput[]
    NOT?: OrgMemberWhereInput | OrgMemberWhereInput[]
    id?: StringFilter<"OrgMember"> | string
    organizationId?: StringFilter<"OrgMember"> | string
    userId?: StringFilter<"OrgMember"> | string
    role?: EnumOrgRoleFilter<"OrgMember"> | $Enums.OrgRole
    status?: EnumMemberStatusFilter<"OrgMember"> | $Enums.MemberStatus
    invitedBy?: StringNullableFilter<"OrgMember"> | string | null
    joinedAt?: DateTimeFilter<"OrgMember"> | Date | string
    createdAt?: DateTimeFilter<"OrgMember"> | Date | string
    updatedAt?: DateTimeFilter<"OrgMember"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type OrgMemberOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitedBy?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrgMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId_userId?: OrgMemberOrganizationIdUserIdCompoundUniqueInput
    AND?: OrgMemberWhereInput | OrgMemberWhereInput[]
    OR?: OrgMemberWhereInput[]
    NOT?: OrgMemberWhereInput | OrgMemberWhereInput[]
    organizationId?: StringFilter<"OrgMember"> | string
    userId?: StringFilter<"OrgMember"> | string
    role?: EnumOrgRoleFilter<"OrgMember"> | $Enums.OrgRole
    status?: EnumMemberStatusFilter<"OrgMember"> | $Enums.MemberStatus
    invitedBy?: StringNullableFilter<"OrgMember"> | string | null
    joinedAt?: DateTimeFilter<"OrgMember"> | Date | string
    createdAt?: DateTimeFilter<"OrgMember"> | Date | string
    updatedAt?: DateTimeFilter<"OrgMember"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id" | "organizationId_userId">

  export type OrgMemberOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitedBy?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrgMemberCountOrderByAggregateInput
    _max?: OrgMemberMaxOrderByAggregateInput
    _min?: OrgMemberMinOrderByAggregateInput
  }

  export type OrgMemberScalarWhereWithAggregatesInput = {
    AND?: OrgMemberScalarWhereWithAggregatesInput | OrgMemberScalarWhereWithAggregatesInput[]
    OR?: OrgMemberScalarWhereWithAggregatesInput[]
    NOT?: OrgMemberScalarWhereWithAggregatesInput | OrgMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrgMember"> | string
    organizationId?: StringWithAggregatesFilter<"OrgMember"> | string
    userId?: StringWithAggregatesFilter<"OrgMember"> | string
    role?: EnumOrgRoleWithAggregatesFilter<"OrgMember"> | $Enums.OrgRole
    status?: EnumMemberStatusWithAggregatesFilter<"OrgMember"> | $Enums.MemberStatus
    invitedBy?: StringNullableWithAggregatesFilter<"OrgMember"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"OrgMember"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OrgMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrgMember"> | Date | string
  }

  export type OrgInvitationWhereInput = {
    AND?: OrgInvitationWhereInput | OrgInvitationWhereInput[]
    OR?: OrgInvitationWhereInput[]
    NOT?: OrgInvitationWhereInput | OrgInvitationWhereInput[]
    id?: StringFilter<"OrgInvitation"> | string
    organizationId?: StringFilter<"OrgInvitation"> | string
    email?: StringFilter<"OrgInvitation"> | string
    role?: EnumOrgRoleFilter<"OrgInvitation"> | $Enums.OrgRole
    token?: StringFilter<"OrgInvitation"> | string
    invitedBy?: StringFilter<"OrgInvitation"> | string
    expiresAt?: DateTimeFilter<"OrgInvitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"OrgInvitation"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"OrgInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"OrgInvitation"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }

  export type OrgInvitationOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrgInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: OrgInvitationWhereInput | OrgInvitationWhereInput[]
    OR?: OrgInvitationWhereInput[]
    NOT?: OrgInvitationWhereInput | OrgInvitationWhereInput[]
    organizationId?: StringFilter<"OrgInvitation"> | string
    email?: StringFilter<"OrgInvitation"> | string
    role?: EnumOrgRoleFilter<"OrgInvitation"> | $Enums.OrgRole
    invitedBy?: StringFilter<"OrgInvitation"> | string
    expiresAt?: DateTimeFilter<"OrgInvitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"OrgInvitation"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"OrgInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"OrgInvitation"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
  }, "id" | "token">

  export type OrgInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrgInvitationCountOrderByAggregateInput
    _max?: OrgInvitationMaxOrderByAggregateInput
    _min?: OrgInvitationMinOrderByAggregateInput
  }

  export type OrgInvitationScalarWhereWithAggregatesInput = {
    AND?: OrgInvitationScalarWhereWithAggregatesInput | OrgInvitationScalarWhereWithAggregatesInput[]
    OR?: OrgInvitationScalarWhereWithAggregatesInput[]
    NOT?: OrgInvitationScalarWhereWithAggregatesInput | OrgInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrgInvitation"> | string
    organizationId?: StringWithAggregatesFilter<"OrgInvitation"> | string
    email?: StringWithAggregatesFilter<"OrgInvitation"> | string
    role?: EnumOrgRoleWithAggregatesFilter<"OrgInvitation"> | $Enums.OrgRole
    token?: StringWithAggregatesFilter<"OrgInvitation"> | string
    invitedBy?: StringWithAggregatesFilter<"OrgInvitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OrgInvitation"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"OrgInvitation"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"OrgInvitation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrgInvitation"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrgMemberCreateNestedManyWithoutOrganizationInput
    invitations?: OrgInvitationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrganizationInput
    invitations?: OrgInvitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrgMemberUpdateManyWithoutOrganizationNestedInput
    invitations?: OrgInvitationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrgMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    invitations?: OrgInvitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrgMemberCreateInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    status?: $Enums.MemberStatus
    invitedBy?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrgMemberUncheckedCreateInput = {
    id?: string
    organizationId: string
    userId: string
    role?: $Enums.OrgRole
    status?: $Enums.MemberStatus
    invitedBy?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrgMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgMemberCreateManyInput = {
    id?: string
    organizationId: string
    userId: string
    role?: $Enums.OrgRole
    status?: $Enums.MemberStatus
    invitedBy?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgInvitationCreateInput = {
    id?: string
    email: string
    role?: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutInvitationsInput
  }

  export type OrgInvitationUncheckedCreateInput = {
    id?: string
    organizationId: string
    email: string
    role?: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrgInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type OrgInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgInvitationCreateManyInput = {
    id?: string
    organizationId: string
    email: string
    role?: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrgInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
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

  export type EnumOrgStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgStatusFilter<$PrismaModel> | $Enums.OrgStatus
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

  export type OrgMemberListRelationFilter = {
    every?: OrgMemberWhereInput
    some?: OrgMemberWhereInput
    none?: OrgMemberWhereInput
  }

  export type OrgInvitationListRelationFilter = {
    every?: OrgInvitationWhereInput
    some?: OrgInvitationWhereInput
    none?: OrgInvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrgMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrgInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    logoUrl?: SortOrder
    website?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    plan?: SortOrder
    planExpiresAt?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    settings?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    logoUrl?: SortOrder
    website?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    plan?: SortOrder
    planExpiresAt?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    logoUrl?: SortOrder
    website?: SortOrder
    description?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    plan?: SortOrder
    planExpiresAt?: SortOrder
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    maxMembers?: SortOrder
    maxProjects?: SortOrder
    maxStorage?: SortOrder
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

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
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

  export type EnumOrgStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrgStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgStatusFilter<$PrismaModel>
    _max?: NestedEnumOrgStatusFilter<$PrismaModel>
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

  export type EnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrgMemberOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: string
    userId: string
  }

  export type OrgMemberCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitedBy?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrgMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitedBy?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrgMemberMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    invitedBy?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type OrgInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    invitedBy?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrgMemberCreateWithoutOrganizationInput, OrgMemberUncheckedCreateWithoutOrganizationInput> | OrgMemberCreateWithoutOrganizationInput[] | OrgMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrganizationInput | OrgMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrgMemberCreateManyOrganizationInputEnvelope
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
  }

  export type OrgInvitationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrgInvitationCreateWithoutOrganizationInput, OrgInvitationUncheckedCreateWithoutOrganizationInput> | OrgInvitationCreateWithoutOrganizationInput[] | OrgInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgInvitationCreateOrConnectWithoutOrganizationInput | OrgInvitationCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrgInvitationCreateManyOrganizationInputEnvelope
    connect?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
  }

  export type OrgMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrgMemberCreateWithoutOrganizationInput, OrgMemberUncheckedCreateWithoutOrganizationInput> | OrgMemberCreateWithoutOrganizationInput[] | OrgMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrganizationInput | OrgMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrgMemberCreateManyOrganizationInputEnvelope
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
  }

  export type OrgInvitationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrgInvitationCreateWithoutOrganizationInput, OrgInvitationUncheckedCreateWithoutOrganizationInput> | OrgInvitationCreateWithoutOrganizationInput[] | OrgInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgInvitationCreateOrConnectWithoutOrganizationInput | OrgInvitationCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrgInvitationCreateManyOrganizationInputEnvelope
    connect?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
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

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumOrgStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrgStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrgMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrgMemberCreateWithoutOrganizationInput, OrgMemberUncheckedCreateWithoutOrganizationInput> | OrgMemberCreateWithoutOrganizationInput[] | OrgMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrganizationInput | OrgMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrgMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrgMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrgMemberCreateManyOrganizationInputEnvelope
    set?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    disconnect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    delete?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    update?: OrgMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrgMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrgMemberUpdateManyWithWhereWithoutOrganizationInput | OrgMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
  }

  export type OrgInvitationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrgInvitationCreateWithoutOrganizationInput, OrgInvitationUncheckedCreateWithoutOrganizationInput> | OrgInvitationCreateWithoutOrganizationInput[] | OrgInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgInvitationCreateOrConnectWithoutOrganizationInput | OrgInvitationCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrgInvitationUpsertWithWhereUniqueWithoutOrganizationInput | OrgInvitationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrgInvitationCreateManyOrganizationInputEnvelope
    set?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    disconnect?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    delete?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    connect?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    update?: OrgInvitationUpdateWithWhereUniqueWithoutOrganizationInput | OrgInvitationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrgInvitationUpdateManyWithWhereWithoutOrganizationInput | OrgInvitationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrgInvitationScalarWhereInput | OrgInvitationScalarWhereInput[]
  }

  export type OrgMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrgMemberCreateWithoutOrganizationInput, OrgMemberUncheckedCreateWithoutOrganizationInput> | OrgMemberCreateWithoutOrganizationInput[] | OrgMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgMemberCreateOrConnectWithoutOrganizationInput | OrgMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrgMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrgMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrgMemberCreateManyOrganizationInputEnvelope
    set?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    disconnect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    delete?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    connect?: OrgMemberWhereUniqueInput | OrgMemberWhereUniqueInput[]
    update?: OrgMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrgMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrgMemberUpdateManyWithWhereWithoutOrganizationInput | OrgMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
  }

  export type OrgInvitationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrgInvitationCreateWithoutOrganizationInput, OrgInvitationUncheckedCreateWithoutOrganizationInput> | OrgInvitationCreateWithoutOrganizationInput[] | OrgInvitationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrgInvitationCreateOrConnectWithoutOrganizationInput | OrgInvitationCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrgInvitationUpsertWithWhereUniqueWithoutOrganizationInput | OrgInvitationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrgInvitationCreateManyOrganizationInputEnvelope
    set?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    disconnect?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    delete?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    connect?: OrgInvitationWhereUniqueInput | OrgInvitationWhereUniqueInput[]
    update?: OrgInvitationUpdateWithWhereUniqueWithoutOrganizationInput | OrgInvitationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrgInvitationUpdateManyWithWhereWithoutOrganizationInput | OrgInvitationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrgInvitationScalarWhereInput | OrgInvitationScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumOrgRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrgRole
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitationsInput
    upsert?: OrganizationUpsertWithoutInvitationsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutInvitationsInput, OrganizationUpdateWithoutInvitationsInput>, OrganizationUncheckedUpdateWithoutInvitationsInput>
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

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
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

  export type NestedEnumOrgStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgStatusFilter<$PrismaModel> | $Enums.OrgStatus
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

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
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

  export type NestedEnumOrgStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgStatus[] | ListEnumOrgStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrgStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgStatusFilter<$PrismaModel>
    _max?: NestedEnumOrgStatusFilter<$PrismaModel>
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

  export type NestedEnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type OrgMemberCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    status?: $Enums.MemberStatus
    invitedBy?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    status?: $Enums.MemberStatus
    invitedBy?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrgMemberWhereUniqueInput
    create: XOR<OrgMemberCreateWithoutOrganizationInput, OrgMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrgMemberCreateManyOrganizationInputEnvelope = {
    data: OrgMemberCreateManyOrganizationInput | OrgMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrgInvitationCreateWithoutOrganizationInput = {
    id?: string
    email: string
    role?: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrgInvitationUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    role?: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrgInvitationCreateOrConnectWithoutOrganizationInput = {
    where: OrgInvitationWhereUniqueInput
    create: XOR<OrgInvitationCreateWithoutOrganizationInput, OrgInvitationUncheckedCreateWithoutOrganizationInput>
  }

  export type OrgInvitationCreateManyOrganizationInputEnvelope = {
    data: OrgInvitationCreateManyOrganizationInput | OrgInvitationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrgMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrgMemberWhereUniqueInput
    update: XOR<OrgMemberUpdateWithoutOrganizationInput, OrgMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrgMemberCreateWithoutOrganizationInput, OrgMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrgMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrgMemberWhereUniqueInput
    data: XOR<OrgMemberUpdateWithoutOrganizationInput, OrgMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrgMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrgMemberScalarWhereInput
    data: XOR<OrgMemberUpdateManyMutationInput, OrgMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrgMemberScalarWhereInput = {
    AND?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
    OR?: OrgMemberScalarWhereInput[]
    NOT?: OrgMemberScalarWhereInput | OrgMemberScalarWhereInput[]
    id?: StringFilter<"OrgMember"> | string
    organizationId?: StringFilter<"OrgMember"> | string
    userId?: StringFilter<"OrgMember"> | string
    role?: EnumOrgRoleFilter<"OrgMember"> | $Enums.OrgRole
    status?: EnumMemberStatusFilter<"OrgMember"> | $Enums.MemberStatus
    invitedBy?: StringNullableFilter<"OrgMember"> | string | null
    joinedAt?: DateTimeFilter<"OrgMember"> | Date | string
    createdAt?: DateTimeFilter<"OrgMember"> | Date | string
    updatedAt?: DateTimeFilter<"OrgMember"> | Date | string
  }

  export type OrgInvitationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrgInvitationWhereUniqueInput
    update: XOR<OrgInvitationUpdateWithoutOrganizationInput, OrgInvitationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrgInvitationCreateWithoutOrganizationInput, OrgInvitationUncheckedCreateWithoutOrganizationInput>
  }

  export type OrgInvitationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrgInvitationWhereUniqueInput
    data: XOR<OrgInvitationUpdateWithoutOrganizationInput, OrgInvitationUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrgInvitationUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrgInvitationScalarWhereInput
    data: XOR<OrgInvitationUpdateManyMutationInput, OrgInvitationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrgInvitationScalarWhereInput = {
    AND?: OrgInvitationScalarWhereInput | OrgInvitationScalarWhereInput[]
    OR?: OrgInvitationScalarWhereInput[]
    NOT?: OrgInvitationScalarWhereInput | OrgInvitationScalarWhereInput[]
    id?: StringFilter<"OrgInvitation"> | string
    organizationId?: StringFilter<"OrgInvitation"> | string
    email?: StringFilter<"OrgInvitation"> | string
    role?: EnumOrgRoleFilter<"OrgInvitation"> | $Enums.OrgRole
    token?: StringFilter<"OrgInvitation"> | string
    invitedBy?: StringFilter<"OrgInvitation"> | string
    expiresAt?: DateTimeFilter<"OrgInvitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"OrgInvitation"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"OrgInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"OrgInvitation"> | Date | string
  }

  export type OrganizationCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invitations?: OrgInvitationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    invitations?: OrgInvitationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: OrgInvitationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: OrgInvitationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutInvitationsInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrgMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    slug: string
    domain?: string | null
    logoUrl?: string | null
    website?: string | null
    description?: string | null
    industry?: string | null
    size?: string | null
    country?: string | null
    timezone?: string
    plan?: $Enums.PlanType
    planExpiresAt?: Date | string | null
    maxMembers?: number
    maxProjects?: number
    maxStorage?: bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: OrgMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutInvitationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
  }

  export type OrganizationUpsertWithoutInvitationsInput = {
    update: XOR<OrganizationUpdateWithoutInvitationsInput, OrganizationUncheckedUpdateWithoutInvitationsInput>
    create: XOR<OrganizationCreateWithoutInvitationsInput, OrganizationUncheckedCreateWithoutInvitationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutInvitationsInput, OrganizationUncheckedUpdateWithoutInvitationsInput>
  }

  export type OrganizationUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrgMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxMembers?: IntFieldUpdateOperationsInput | number
    maxProjects?: IntFieldUpdateOperationsInput | number
    maxStorage?: BigIntFieldUpdateOperationsInput | bigint | number
    settings?: JsonNullValueInput | InputJsonValue
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: OrgMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrgMemberCreateManyOrganizationInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    status?: $Enums.MemberStatus
    invitedBy?: string | null
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrgInvitationCreateManyOrganizationInput = {
    id?: string
    email: string
    role?: $Enums.OrgRole
    token: string
    invitedBy: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrgMemberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgInvitationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgInvitationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgInvitationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    token?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrgMemberDefaultArgs instead
     */
    export type OrgMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrgMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrgInvitationDefaultArgs instead
     */
    export type OrgInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrgInvitationDefaultArgs<ExtArgs>

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