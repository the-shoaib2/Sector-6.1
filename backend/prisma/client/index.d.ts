
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model WhitelistIP
 * 
 */
export type WhitelistIP = $Result.DefaultSelection<Prisma.$WhitelistIPPayload>
/**
 * Model LoginSession
 * 
 */
export type LoginSession = $Result.DefaultSelection<Prisma.$LoginSessionPayload>
/**
 * Model LoginAttempt
 * 
 */
export type LoginAttempt = $Result.DefaultSelection<Prisma.$LoginAttemptPayload>
/**
 * Model Passkey
 * 
 */
export type Passkey = $Result.DefaultSelection<Prisma.$PasskeyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;

  /**
   * `prisma.whitelistIP`: Exposes CRUD operations for the **WhitelistIP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhitelistIPS
    * const whitelistIPS = await prisma.whitelistIP.findMany()
    * ```
    */
  get whitelistIP(): Prisma.WhitelistIPDelegate<ExtArgs>;

  /**
   * `prisma.loginSession`: Exposes CRUD operations for the **LoginSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginSessions
    * const loginSessions = await prisma.loginSession.findMany()
    * ```
    */
  get loginSession(): Prisma.LoginSessionDelegate<ExtArgs>;

  /**
   * `prisma.loginAttempt`: Exposes CRUD operations for the **LoginAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginAttempts
    * const loginAttempts = await prisma.loginAttempt.findMany()
    * ```
    */
  get loginAttempt(): Prisma.LoginAttemptDelegate<ExtArgs>;

  /**
   * `prisma.passkey`: Exposes CRUD operations for the **Passkey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passkeys
    * const passkeys = await prisma.passkey.findMany()
    * ```
    */
  get passkey(): Prisma.PasskeyDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
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
    User: 'User',
    Device: 'Device',
    WhitelistIP: 'WhitelistIP',
    LoginSession: 'LoginSession',
    LoginAttempt: 'LoginAttempt',
    Passkey: 'Passkey'
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
      modelProps: "user" | "device" | "whitelistIP" | "loginSession" | "loginAttempt" | "passkey"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      WhitelistIP: {
        payload: Prisma.$WhitelistIPPayload<ExtArgs>
        fields: Prisma.WhitelistIPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhitelistIPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhitelistIPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>
          }
          findFirst: {
            args: Prisma.WhitelistIPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhitelistIPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>
          }
          findMany: {
            args: Prisma.WhitelistIPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>[]
          }
          create: {
            args: Prisma.WhitelistIPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>
          }
          createMany: {
            args: Prisma.WhitelistIPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhitelistIPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>[]
          }
          delete: {
            args: Prisma.WhitelistIPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>
          }
          update: {
            args: Prisma.WhitelistIPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>
          }
          deleteMany: {
            args: Prisma.WhitelistIPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhitelistIPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhitelistIPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistIPPayload>
          }
          aggregate: {
            args: Prisma.WhitelistIPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhitelistIP>
          }
          groupBy: {
            args: Prisma.WhitelistIPGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhitelistIPGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhitelistIPCountArgs<ExtArgs>
            result: $Utils.Optional<WhitelistIPCountAggregateOutputType> | number
          }
        }
      }
      LoginSession: {
        payload: Prisma.$LoginSessionPayload<ExtArgs>
        fields: Prisma.LoginSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>
          }
          findFirst: {
            args: Prisma.LoginSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>
          }
          findMany: {
            args: Prisma.LoginSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>[]
          }
          create: {
            args: Prisma.LoginSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>
          }
          createMany: {
            args: Prisma.LoginSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>[]
          }
          delete: {
            args: Prisma.LoginSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>
          }
          update: {
            args: Prisma.LoginSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>
          }
          deleteMany: {
            args: Prisma.LoginSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSessionPayload>
          }
          aggregate: {
            args: Prisma.LoginSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginSession>
          }
          groupBy: {
            args: Prisma.LoginSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginSessionCountArgs<ExtArgs>
            result: $Utils.Optional<LoginSessionCountAggregateOutputType> | number
          }
        }
      }
      LoginAttempt: {
        payload: Prisma.$LoginAttemptPayload<ExtArgs>
        fields: Prisma.LoginAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>
          }
          findFirst: {
            args: Prisma.LoginAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>
          }
          findMany: {
            args: Prisma.LoginAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>[]
          }
          create: {
            args: Prisma.LoginAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>
          }
          createMany: {
            args: Prisma.LoginAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>[]
          }
          delete: {
            args: Prisma.LoginAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>
          }
          update: {
            args: Prisma.LoginAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>
          }
          deleteMany: {
            args: Prisma.LoginAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAttemptPayload>
          }
          aggregate: {
            args: Prisma.LoginAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginAttempt>
          }
          groupBy: {
            args: Prisma.LoginAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<LoginAttemptCountAggregateOutputType> | number
          }
        }
      }
      Passkey: {
        payload: Prisma.$PasskeyPayload<ExtArgs>
        fields: Prisma.PasskeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasskeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasskeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          findFirst: {
            args: Prisma.PasskeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasskeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          findMany: {
            args: Prisma.PasskeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>[]
          }
          create: {
            args: Prisma.PasskeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          createMany: {
            args: Prisma.PasskeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasskeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>[]
          }
          delete: {
            args: Prisma.PasskeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          update: {
            args: Prisma.PasskeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          deleteMany: {
            args: Prisma.PasskeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasskeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasskeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasskeyPayload>
          }
          aggregate: {
            args: Prisma.PasskeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasskey>
          }
          groupBy: {
            args: Prisma.PasskeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasskeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasskeyCountArgs<ExtArgs>
            result: $Utils.Optional<PasskeyCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    devices: number
    whitelistIPs: number
    loginSessions: number
    loginAttempts: number
    passkeys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    whitelistIPs?: boolean | UserCountOutputTypeCountWhitelistIPsArgs
    loginSessions?: boolean | UserCountOutputTypeCountLoginSessionsArgs
    loginAttempts?: boolean | UserCountOutputTypeCountLoginAttemptsArgs
    passkeys?: boolean | UserCountOutputTypeCountPasskeysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhitelistIPsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhitelistIPWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoginAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasskeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasskeyWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    loginAttempts: number
    loginSessions: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginAttempts?: boolean | DeviceCountOutputTypeCountLoginAttemptsArgs
    loginSessions?: boolean | DeviceCountOutputTypeCountLoginSessionsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountLoginAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginAttemptWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountLoginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    token: string | null
    refreshToken: string | null
    refreshTokenExpiry: Date | null
    twoFactorVerified: boolean | null
    twoFactorSecret: string | null
    isVerified: boolean | null
    providerId: string | null
    providerType: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    token: string | null
    refreshToken: string | null
    refreshTokenExpiry: Date | null
    twoFactorVerified: boolean | null
    twoFactorSecret: string | null
    isVerified: boolean | null
    providerId: string | null
    providerType: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    token: number
    refreshToken: number
    refreshTokenExpiry: number
    twoFactorVerified: number
    twoFactorSecret: number
    isVerified: number
    providerId: number
    providerType: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    token?: true
    refreshToken?: true
    refreshTokenExpiry?: true
    twoFactorVerified?: true
    twoFactorSecret?: true
    isVerified?: true
    providerId?: true
    providerType?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    token?: true
    refreshToken?: true
    refreshTokenExpiry?: true
    twoFactorVerified?: true
    twoFactorSecret?: true
    isVerified?: true
    providerId?: true
    providerType?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    token?: true
    refreshToken?: true
    refreshTokenExpiry?: true
    twoFactorVerified?: true
    twoFactorSecret?: true
    isVerified?: true
    providerId?: true
    providerType?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    token: string | null
    refreshToken: string | null
    refreshTokenExpiry: Date | null
    twoFactorVerified: boolean
    twoFactorSecret: string | null
    isVerified: boolean
    providerId: string | null
    providerType: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    refreshToken?: boolean
    refreshTokenExpiry?: boolean
    twoFactorVerified?: boolean
    twoFactorSecret?: boolean
    isVerified?: boolean
    providerId?: boolean
    providerType?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    devices?: boolean | User$devicesArgs<ExtArgs>
    whitelistIPs?: boolean | User$whitelistIPsArgs<ExtArgs>
    loginSessions?: boolean | User$loginSessionsArgs<ExtArgs>
    loginAttempts?: boolean | User$loginAttemptsArgs<ExtArgs>
    passkeys?: boolean | User$passkeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    refreshToken?: boolean
    refreshTokenExpiry?: boolean
    twoFactorVerified?: boolean
    twoFactorSecret?: boolean
    isVerified?: boolean
    providerId?: boolean
    providerType?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    refreshToken?: boolean
    refreshTokenExpiry?: boolean
    twoFactorVerified?: boolean
    twoFactorSecret?: boolean
    isVerified?: boolean
    providerId?: boolean
    providerType?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | User$devicesArgs<ExtArgs>
    whitelistIPs?: boolean | User$whitelistIPsArgs<ExtArgs>
    loginSessions?: boolean | User$loginSessionsArgs<ExtArgs>
    loginAttempts?: boolean | User$loginAttemptsArgs<ExtArgs>
    passkeys?: boolean | User$passkeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
      whitelistIPs: Prisma.$WhitelistIPPayload<ExtArgs>[]
      loginSessions: Prisma.$LoginSessionPayload<ExtArgs>[]
      loginAttempts: Prisma.$LoginAttemptPayload<ExtArgs>[]
      passkeys: Prisma.$PasskeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      token: string | null
      refreshToken: string | null
      refreshTokenExpiry: Date | null
      twoFactorVerified: boolean
      twoFactorSecret: string | null
      isVerified: boolean
      providerId: string | null
      providerType: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany"> | Null>
    whitelistIPs<T extends User$whitelistIPsArgs<ExtArgs> = {}>(args?: Subset<T, User$whitelistIPsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "findMany"> | Null>
    loginSessions<T extends User$loginSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$loginSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findMany"> | Null>
    loginAttempts<T extends User$loginAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$loginAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findMany"> | Null>
    passkeys<T extends User$passkeysArgs<ExtArgs> = {}>(args?: Subset<T, User$passkeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly refreshTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly twoFactorVerified: FieldRef<"User", 'Boolean'>
    readonly twoFactorSecret: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly providerType: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.whitelistIPs
   */
  export type User$whitelistIPsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    where?: WhitelistIPWhereInput
    orderBy?: WhitelistIPOrderByWithRelationInput | WhitelistIPOrderByWithRelationInput[]
    cursor?: WhitelistIPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhitelistIPScalarFieldEnum | WhitelistIPScalarFieldEnum[]
  }

  /**
   * User.loginSessions
   */
  export type User$loginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    where?: LoginSessionWhereInput
    orderBy?: LoginSessionOrderByWithRelationInput | LoginSessionOrderByWithRelationInput[]
    cursor?: LoginSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginSessionScalarFieldEnum | LoginSessionScalarFieldEnum[]
  }

  /**
   * User.loginAttempts
   */
  export type User$loginAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    where?: LoginAttemptWhereInput
    orderBy?: LoginAttemptOrderByWithRelationInput | LoginAttemptOrderByWithRelationInput[]
    cursor?: LoginAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginAttemptScalarFieldEnum | LoginAttemptScalarFieldEnum[]
  }

  /**
   * User.passkeys
   */
  export type User$passkeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    where?: PasskeyWhereInput
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    cursor?: PasskeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    mac: string | null
    location: string | null
    isWhitelisted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    mac: string | null
    location: string | null
    isWhitelisted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    userId: number
    ip: number
    mac: number
    location: number
    isWhitelisted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    mac?: true
    location?: true
    isWhitelisted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    mac?: true
    location?: true
    isWhitelisted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    mac?: true
    location?: true
    isWhitelisted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    userId: string
    ip: string
    mac: string
    location: string
    isWhitelisted: boolean
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    mac?: boolean
    location?: boolean
    isWhitelisted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loginAttempts?: boolean | Device$loginAttemptsArgs<ExtArgs>
    loginSessions?: boolean | Device$loginSessionsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    mac?: boolean
    location?: boolean
    isWhitelisted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    userId?: boolean
    ip?: boolean
    mac?: boolean
    location?: boolean
    isWhitelisted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loginAttempts?: boolean | Device$loginAttemptsArgs<ExtArgs>
    loginSessions?: boolean | Device$loginSessionsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      loginAttempts: Prisma.$LoginAttemptPayload<ExtArgs>[]
      loginSessions: Prisma.$LoginSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ip: string
      mac: string
      location: string
      isWhitelisted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    loginAttempts<T extends Device$loginAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, Device$loginAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findMany"> | Null>
    loginSessions<T extends Device$loginSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Device$loginSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly userId: FieldRef<"Device", 'String'>
    readonly ip: FieldRef<"Device", 'String'>
    readonly mac: FieldRef<"Device", 'String'>
    readonly location: FieldRef<"Device", 'String'>
    readonly isWhitelisted: FieldRef<"Device", 'Boolean'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }

  /**
   * Device.loginAttempts
   */
  export type Device$loginAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    where?: LoginAttemptWhereInput
    orderBy?: LoginAttemptOrderByWithRelationInput | LoginAttemptOrderByWithRelationInput[]
    cursor?: LoginAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginAttemptScalarFieldEnum | LoginAttemptScalarFieldEnum[]
  }

  /**
   * Device.loginSessions
   */
  export type Device$loginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    where?: LoginSessionWhereInput
    orderBy?: LoginSessionOrderByWithRelationInput | LoginSessionOrderByWithRelationInput[]
    cursor?: LoginSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginSessionScalarFieldEnum | LoginSessionScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model WhitelistIP
   */

  export type AggregateWhitelistIP = {
    _count: WhitelistIPCountAggregateOutputType | null
    _min: WhitelistIPMinAggregateOutputType | null
    _max: WhitelistIPMaxAggregateOutputType | null
  }

  export type WhitelistIPMinAggregateOutputType = {
    id: string | null
    ip: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type WhitelistIPMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type WhitelistIPCountAggregateOutputType = {
    id: number
    ip: number
    userId: number
    createdAt: number
    _all: number
  }


  export type WhitelistIPMinAggregateInputType = {
    id?: true
    ip?: true
    userId?: true
    createdAt?: true
  }

  export type WhitelistIPMaxAggregateInputType = {
    id?: true
    ip?: true
    userId?: true
    createdAt?: true
  }

  export type WhitelistIPCountAggregateInputType = {
    id?: true
    ip?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type WhitelistIPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhitelistIP to aggregate.
     */
    where?: WhitelistIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistIPS to fetch.
     */
    orderBy?: WhitelistIPOrderByWithRelationInput | WhitelistIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhitelistIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhitelistIPS
    **/
    _count?: true | WhitelistIPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhitelistIPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhitelistIPMaxAggregateInputType
  }

  export type GetWhitelistIPAggregateType<T extends WhitelistIPAggregateArgs> = {
        [P in keyof T & keyof AggregateWhitelistIP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhitelistIP[P]>
      : GetScalarType<T[P], AggregateWhitelistIP[P]>
  }




  export type WhitelistIPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhitelistIPWhereInput
    orderBy?: WhitelistIPOrderByWithAggregationInput | WhitelistIPOrderByWithAggregationInput[]
    by: WhitelistIPScalarFieldEnum[] | WhitelistIPScalarFieldEnum
    having?: WhitelistIPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhitelistIPCountAggregateInputType | true
    _min?: WhitelistIPMinAggregateInputType
    _max?: WhitelistIPMaxAggregateInputType
  }

  export type WhitelistIPGroupByOutputType = {
    id: string
    ip: string
    userId: string
    createdAt: Date
    _count: WhitelistIPCountAggregateOutputType | null
    _min: WhitelistIPMinAggregateOutputType | null
    _max: WhitelistIPMaxAggregateOutputType | null
  }

  type GetWhitelistIPGroupByPayload<T extends WhitelistIPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhitelistIPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhitelistIPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhitelistIPGroupByOutputType[P]>
            : GetScalarType<T[P], WhitelistIPGroupByOutputType[P]>
        }
      >
    >


  export type WhitelistIPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whitelistIP"]>

  export type WhitelistIPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whitelistIP"]>

  export type WhitelistIPSelectScalar = {
    id?: boolean
    ip?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type WhitelistIPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WhitelistIPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WhitelistIPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhitelistIP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["whitelistIP"]>
    composites: {}
  }

  type WhitelistIPGetPayload<S extends boolean | null | undefined | WhitelistIPDefaultArgs> = $Result.GetResult<Prisma.$WhitelistIPPayload, S>

  type WhitelistIPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WhitelistIPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WhitelistIPCountAggregateInputType | true
    }

  export interface WhitelistIPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhitelistIP'], meta: { name: 'WhitelistIP' } }
    /**
     * Find zero or one WhitelistIP that matches the filter.
     * @param {WhitelistIPFindUniqueArgs} args - Arguments to find a WhitelistIP
     * @example
     * // Get one WhitelistIP
     * const whitelistIP = await prisma.whitelistIP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhitelistIPFindUniqueArgs>(args: SelectSubset<T, WhitelistIPFindUniqueArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WhitelistIP that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WhitelistIPFindUniqueOrThrowArgs} args - Arguments to find a WhitelistIP
     * @example
     * // Get one WhitelistIP
     * const whitelistIP = await prisma.whitelistIP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhitelistIPFindUniqueOrThrowArgs>(args: SelectSubset<T, WhitelistIPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WhitelistIP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPFindFirstArgs} args - Arguments to find a WhitelistIP
     * @example
     * // Get one WhitelistIP
     * const whitelistIP = await prisma.whitelistIP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhitelistIPFindFirstArgs>(args?: SelectSubset<T, WhitelistIPFindFirstArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WhitelistIP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPFindFirstOrThrowArgs} args - Arguments to find a WhitelistIP
     * @example
     * // Get one WhitelistIP
     * const whitelistIP = await prisma.whitelistIP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhitelistIPFindFirstOrThrowArgs>(args?: SelectSubset<T, WhitelistIPFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WhitelistIPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhitelistIPS
     * const whitelistIPS = await prisma.whitelistIP.findMany()
     * 
     * // Get first 10 WhitelistIPS
     * const whitelistIPS = await prisma.whitelistIP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whitelistIPWithIdOnly = await prisma.whitelistIP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhitelistIPFindManyArgs>(args?: SelectSubset<T, WhitelistIPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WhitelistIP.
     * @param {WhitelistIPCreateArgs} args - Arguments to create a WhitelistIP.
     * @example
     * // Create one WhitelistIP
     * const WhitelistIP = await prisma.whitelistIP.create({
     *   data: {
     *     // ... data to create a WhitelistIP
     *   }
     * })
     * 
     */
    create<T extends WhitelistIPCreateArgs>(args: SelectSubset<T, WhitelistIPCreateArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WhitelistIPS.
     * @param {WhitelistIPCreateManyArgs} args - Arguments to create many WhitelistIPS.
     * @example
     * // Create many WhitelistIPS
     * const whitelistIP = await prisma.whitelistIP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhitelistIPCreateManyArgs>(args?: SelectSubset<T, WhitelistIPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhitelistIPS and returns the data saved in the database.
     * @param {WhitelistIPCreateManyAndReturnArgs} args - Arguments to create many WhitelistIPS.
     * @example
     * // Create many WhitelistIPS
     * const whitelistIP = await prisma.whitelistIP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhitelistIPS and only return the `id`
     * const whitelistIPWithIdOnly = await prisma.whitelistIP.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhitelistIPCreateManyAndReturnArgs>(args?: SelectSubset<T, WhitelistIPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WhitelistIP.
     * @param {WhitelistIPDeleteArgs} args - Arguments to delete one WhitelistIP.
     * @example
     * // Delete one WhitelistIP
     * const WhitelistIP = await prisma.whitelistIP.delete({
     *   where: {
     *     // ... filter to delete one WhitelistIP
     *   }
     * })
     * 
     */
    delete<T extends WhitelistIPDeleteArgs>(args: SelectSubset<T, WhitelistIPDeleteArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WhitelistIP.
     * @param {WhitelistIPUpdateArgs} args - Arguments to update one WhitelistIP.
     * @example
     * // Update one WhitelistIP
     * const whitelistIP = await prisma.whitelistIP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhitelistIPUpdateArgs>(args: SelectSubset<T, WhitelistIPUpdateArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WhitelistIPS.
     * @param {WhitelistIPDeleteManyArgs} args - Arguments to filter WhitelistIPS to delete.
     * @example
     * // Delete a few WhitelistIPS
     * const { count } = await prisma.whitelistIP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhitelistIPDeleteManyArgs>(args?: SelectSubset<T, WhitelistIPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhitelistIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhitelistIPS
     * const whitelistIP = await prisma.whitelistIP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhitelistIPUpdateManyArgs>(args: SelectSubset<T, WhitelistIPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhitelistIP.
     * @param {WhitelistIPUpsertArgs} args - Arguments to update or create a WhitelistIP.
     * @example
     * // Update or create a WhitelistIP
     * const whitelistIP = await prisma.whitelistIP.upsert({
     *   create: {
     *     // ... data to create a WhitelistIP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhitelistIP we want to update
     *   }
     * })
     */
    upsert<T extends WhitelistIPUpsertArgs>(args: SelectSubset<T, WhitelistIPUpsertArgs<ExtArgs>>): Prisma__WhitelistIPClient<$Result.GetResult<Prisma.$WhitelistIPPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WhitelistIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPCountArgs} args - Arguments to filter WhitelistIPS to count.
     * @example
     * // Count the number of WhitelistIPS
     * const count = await prisma.whitelistIP.count({
     *   where: {
     *     // ... the filter for the WhitelistIPS we want to count
     *   }
     * })
    **/
    count<T extends WhitelistIPCountArgs>(
      args?: Subset<T, WhitelistIPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhitelistIPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhitelistIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhitelistIPAggregateArgs>(args: Subset<T, WhitelistIPAggregateArgs>): Prisma.PrismaPromise<GetWhitelistIPAggregateType<T>>

    /**
     * Group by WhitelistIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistIPGroupByArgs} args - Group by arguments.
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
      T extends WhitelistIPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhitelistIPGroupByArgs['orderBy'] }
        : { orderBy?: WhitelistIPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhitelistIPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhitelistIPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhitelistIP model
   */
  readonly fields: WhitelistIPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhitelistIP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhitelistIPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WhitelistIP model
   */ 
  interface WhitelistIPFieldRefs {
    readonly id: FieldRef<"WhitelistIP", 'String'>
    readonly ip: FieldRef<"WhitelistIP", 'String'>
    readonly userId: FieldRef<"WhitelistIP", 'String'>
    readonly createdAt: FieldRef<"WhitelistIP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhitelistIP findUnique
   */
  export type WhitelistIPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistIP to fetch.
     */
    where: WhitelistIPWhereUniqueInput
  }

  /**
   * WhitelistIP findUniqueOrThrow
   */
  export type WhitelistIPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistIP to fetch.
     */
    where: WhitelistIPWhereUniqueInput
  }

  /**
   * WhitelistIP findFirst
   */
  export type WhitelistIPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistIP to fetch.
     */
    where?: WhitelistIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistIPS to fetch.
     */
    orderBy?: WhitelistIPOrderByWithRelationInput | WhitelistIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhitelistIPS.
     */
    cursor?: WhitelistIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhitelistIPS.
     */
    distinct?: WhitelistIPScalarFieldEnum | WhitelistIPScalarFieldEnum[]
  }

  /**
   * WhitelistIP findFirstOrThrow
   */
  export type WhitelistIPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistIP to fetch.
     */
    where?: WhitelistIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistIPS to fetch.
     */
    orderBy?: WhitelistIPOrderByWithRelationInput | WhitelistIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhitelistIPS.
     */
    cursor?: WhitelistIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhitelistIPS.
     */
    distinct?: WhitelistIPScalarFieldEnum | WhitelistIPScalarFieldEnum[]
  }

  /**
   * WhitelistIP findMany
   */
  export type WhitelistIPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistIPS to fetch.
     */
    where?: WhitelistIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistIPS to fetch.
     */
    orderBy?: WhitelistIPOrderByWithRelationInput | WhitelistIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhitelistIPS.
     */
    cursor?: WhitelistIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistIPS.
     */
    skip?: number
    distinct?: WhitelistIPScalarFieldEnum | WhitelistIPScalarFieldEnum[]
  }

  /**
   * WhitelistIP create
   */
  export type WhitelistIPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * The data needed to create a WhitelistIP.
     */
    data: XOR<WhitelistIPCreateInput, WhitelistIPUncheckedCreateInput>
  }

  /**
   * WhitelistIP createMany
   */
  export type WhitelistIPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhitelistIPS.
     */
    data: WhitelistIPCreateManyInput | WhitelistIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhitelistIP createManyAndReturn
   */
  export type WhitelistIPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WhitelistIPS.
     */
    data: WhitelistIPCreateManyInput | WhitelistIPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhitelistIP update
   */
  export type WhitelistIPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * The data needed to update a WhitelistIP.
     */
    data: XOR<WhitelistIPUpdateInput, WhitelistIPUncheckedUpdateInput>
    /**
     * Choose, which WhitelistIP to update.
     */
    where: WhitelistIPWhereUniqueInput
  }

  /**
   * WhitelistIP updateMany
   */
  export type WhitelistIPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhitelistIPS.
     */
    data: XOR<WhitelistIPUpdateManyMutationInput, WhitelistIPUncheckedUpdateManyInput>
    /**
     * Filter which WhitelistIPS to update
     */
    where?: WhitelistIPWhereInput
  }

  /**
   * WhitelistIP upsert
   */
  export type WhitelistIPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * The filter to search for the WhitelistIP to update in case it exists.
     */
    where: WhitelistIPWhereUniqueInput
    /**
     * In case the WhitelistIP found by the `where` argument doesn't exist, create a new WhitelistIP with this data.
     */
    create: XOR<WhitelistIPCreateInput, WhitelistIPUncheckedCreateInput>
    /**
     * In case the WhitelistIP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhitelistIPUpdateInput, WhitelistIPUncheckedUpdateInput>
  }

  /**
   * WhitelistIP delete
   */
  export type WhitelistIPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
    /**
     * Filter which WhitelistIP to delete.
     */
    where: WhitelistIPWhereUniqueInput
  }

  /**
   * WhitelistIP deleteMany
   */
  export type WhitelistIPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhitelistIPS to delete
     */
    where?: WhitelistIPWhereInput
  }

  /**
   * WhitelistIP without action
   */
  export type WhitelistIPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistIP
     */
    select?: WhitelistIPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistIPInclude<ExtArgs> | null
  }


  /**
   * Model LoginSession
   */

  export type AggregateLoginSession = {
    _count: LoginSessionCountAggregateOutputType | null
    _min: LoginSessionMinAggregateOutputType | null
    _max: LoginSessionMaxAggregateOutputType | null
  }

  export type LoginSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    deviceId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LoginSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    deviceId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LoginSessionCountAggregateOutputType = {
    id: number
    userId: number
    ip: number
    deviceId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type LoginSessionMinAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    deviceId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LoginSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    deviceId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LoginSessionCountAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    deviceId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type LoginSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginSession to aggregate.
     */
    where?: LoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSessions to fetch.
     */
    orderBy?: LoginSessionOrderByWithRelationInput | LoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginSessions
    **/
    _count?: true | LoginSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginSessionMaxAggregateInputType
  }

  export type GetLoginSessionAggregateType<T extends LoginSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginSession[P]>
      : GetScalarType<T[P], AggregateLoginSession[P]>
  }




  export type LoginSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginSessionWhereInput
    orderBy?: LoginSessionOrderByWithAggregationInput | LoginSessionOrderByWithAggregationInput[]
    by: LoginSessionScalarFieldEnum[] | LoginSessionScalarFieldEnum
    having?: LoginSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginSessionCountAggregateInputType | true
    _min?: LoginSessionMinAggregateInputType
    _max?: LoginSessionMaxAggregateInputType
  }

  export type LoginSessionGroupByOutputType = {
    id: string
    userId: string
    ip: string
    deviceId: string | null
    token: string | null
    expiresAt: Date
    createdAt: Date
    _count: LoginSessionCountAggregateOutputType | null
    _min: LoginSessionMinAggregateOutputType | null
    _max: LoginSessionMaxAggregateOutputType | null
  }

  type GetLoginSessionGroupByPayload<T extends LoginSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginSessionGroupByOutputType[P]>
            : GetScalarType<T[P], LoginSessionGroupByOutputType[P]>
        }
      >
    >


  export type LoginSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    deviceId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | LoginSession$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["loginSession"]>

  export type LoginSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    deviceId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | LoginSession$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["loginSession"]>

  export type LoginSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    ip?: boolean
    deviceId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type LoginSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | LoginSession$deviceArgs<ExtArgs>
  }
  export type LoginSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | LoginSession$deviceArgs<ExtArgs>
  }

  export type $LoginSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ip: string
      deviceId: string | null
      token: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["loginSession"]>
    composites: {}
  }

  type LoginSessionGetPayload<S extends boolean | null | undefined | LoginSessionDefaultArgs> = $Result.GetResult<Prisma.$LoginSessionPayload, S>

  type LoginSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoginSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoginSessionCountAggregateInputType | true
    }

  export interface LoginSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginSession'], meta: { name: 'LoginSession' } }
    /**
     * Find zero or one LoginSession that matches the filter.
     * @param {LoginSessionFindUniqueArgs} args - Arguments to find a LoginSession
     * @example
     * // Get one LoginSession
     * const loginSession = await prisma.loginSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginSessionFindUniqueArgs>(args: SelectSubset<T, LoginSessionFindUniqueArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoginSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoginSessionFindUniqueOrThrowArgs} args - Arguments to find a LoginSession
     * @example
     * // Get one LoginSession
     * const loginSession = await prisma.loginSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoginSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionFindFirstArgs} args - Arguments to find a LoginSession
     * @example
     * // Get one LoginSession
     * const loginSession = await prisma.loginSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginSessionFindFirstArgs>(args?: SelectSubset<T, LoginSessionFindFirstArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoginSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionFindFirstOrThrowArgs} args - Arguments to find a LoginSession
     * @example
     * // Get one LoginSession
     * const loginSession = await prisma.loginSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoginSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginSessions
     * const loginSessions = await prisma.loginSession.findMany()
     * 
     * // Get first 10 LoginSessions
     * const loginSessions = await prisma.loginSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginSessionWithIdOnly = await prisma.loginSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginSessionFindManyArgs>(args?: SelectSubset<T, LoginSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoginSession.
     * @param {LoginSessionCreateArgs} args - Arguments to create a LoginSession.
     * @example
     * // Create one LoginSession
     * const LoginSession = await prisma.loginSession.create({
     *   data: {
     *     // ... data to create a LoginSession
     *   }
     * })
     * 
     */
    create<T extends LoginSessionCreateArgs>(args: SelectSubset<T, LoginSessionCreateArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoginSessions.
     * @param {LoginSessionCreateManyArgs} args - Arguments to create many LoginSessions.
     * @example
     * // Create many LoginSessions
     * const loginSession = await prisma.loginSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginSessionCreateManyArgs>(args?: SelectSubset<T, LoginSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginSessions and returns the data saved in the database.
     * @param {LoginSessionCreateManyAndReturnArgs} args - Arguments to create many LoginSessions.
     * @example
     * // Create many LoginSessions
     * const loginSession = await prisma.loginSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginSessions and only return the `id`
     * const loginSessionWithIdOnly = await prisma.loginSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LoginSession.
     * @param {LoginSessionDeleteArgs} args - Arguments to delete one LoginSession.
     * @example
     * // Delete one LoginSession
     * const LoginSession = await prisma.loginSession.delete({
     *   where: {
     *     // ... filter to delete one LoginSession
     *   }
     * })
     * 
     */
    delete<T extends LoginSessionDeleteArgs>(args: SelectSubset<T, LoginSessionDeleteArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoginSession.
     * @param {LoginSessionUpdateArgs} args - Arguments to update one LoginSession.
     * @example
     * // Update one LoginSession
     * const loginSession = await prisma.loginSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginSessionUpdateArgs>(args: SelectSubset<T, LoginSessionUpdateArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoginSessions.
     * @param {LoginSessionDeleteManyArgs} args - Arguments to filter LoginSessions to delete.
     * @example
     * // Delete a few LoginSessions
     * const { count } = await prisma.loginSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginSessionDeleteManyArgs>(args?: SelectSubset<T, LoginSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginSessions
     * const loginSession = await prisma.loginSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginSessionUpdateManyArgs>(args: SelectSubset<T, LoginSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoginSession.
     * @param {LoginSessionUpsertArgs} args - Arguments to update or create a LoginSession.
     * @example
     * // Update or create a LoginSession
     * const loginSession = await prisma.loginSession.upsert({
     *   create: {
     *     // ... data to create a LoginSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginSession we want to update
     *   }
     * })
     */
    upsert<T extends LoginSessionUpsertArgs>(args: SelectSubset<T, LoginSessionUpsertArgs<ExtArgs>>): Prisma__LoginSessionClient<$Result.GetResult<Prisma.$LoginSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoginSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionCountArgs} args - Arguments to filter LoginSessions to count.
     * @example
     * // Count the number of LoginSessions
     * const count = await prisma.loginSession.count({
     *   where: {
     *     // ... the filter for the LoginSessions we want to count
     *   }
     * })
    **/
    count<T extends LoginSessionCountArgs>(
      args?: Subset<T, LoginSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginSessionAggregateArgs>(args: Subset<T, LoginSessionAggregateArgs>): Prisma.PrismaPromise<GetLoginSessionAggregateType<T>>

    /**
     * Group by LoginSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSessionGroupByArgs} args - Group by arguments.
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
      T extends LoginSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginSessionGroupByArgs['orderBy'] }
        : { orderBy?: LoginSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoginSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginSession model
   */
  readonly fields: LoginSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    device<T extends LoginSession$deviceArgs<ExtArgs> = {}>(args?: Subset<T, LoginSession$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the LoginSession model
   */ 
  interface LoginSessionFieldRefs {
    readonly id: FieldRef<"LoginSession", 'String'>
    readonly userId: FieldRef<"LoginSession", 'String'>
    readonly ip: FieldRef<"LoginSession", 'String'>
    readonly deviceId: FieldRef<"LoginSession", 'String'>
    readonly token: FieldRef<"LoginSession", 'String'>
    readonly expiresAt: FieldRef<"LoginSession", 'DateTime'>
    readonly createdAt: FieldRef<"LoginSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginSession findUnique
   */
  export type LoginSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which LoginSession to fetch.
     */
    where: LoginSessionWhereUniqueInput
  }

  /**
   * LoginSession findUniqueOrThrow
   */
  export type LoginSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which LoginSession to fetch.
     */
    where: LoginSessionWhereUniqueInput
  }

  /**
   * LoginSession findFirst
   */
  export type LoginSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which LoginSession to fetch.
     */
    where?: LoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSessions to fetch.
     */
    orderBy?: LoginSessionOrderByWithRelationInput | LoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginSessions.
     */
    cursor?: LoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginSessions.
     */
    distinct?: LoginSessionScalarFieldEnum | LoginSessionScalarFieldEnum[]
  }

  /**
   * LoginSession findFirstOrThrow
   */
  export type LoginSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which LoginSession to fetch.
     */
    where?: LoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSessions to fetch.
     */
    orderBy?: LoginSessionOrderByWithRelationInput | LoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginSessions.
     */
    cursor?: LoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginSessions.
     */
    distinct?: LoginSessionScalarFieldEnum | LoginSessionScalarFieldEnum[]
  }

  /**
   * LoginSession findMany
   */
  export type LoginSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which LoginSessions to fetch.
     */
    where?: LoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSessions to fetch.
     */
    orderBy?: LoginSessionOrderByWithRelationInput | LoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginSessions.
     */
    cursor?: LoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSessions.
     */
    skip?: number
    distinct?: LoginSessionScalarFieldEnum | LoginSessionScalarFieldEnum[]
  }

  /**
   * LoginSession create
   */
  export type LoginSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginSession.
     */
    data: XOR<LoginSessionCreateInput, LoginSessionUncheckedCreateInput>
  }

  /**
   * LoginSession createMany
   */
  export type LoginSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginSessions.
     */
    data: LoginSessionCreateManyInput | LoginSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginSession createManyAndReturn
   */
  export type LoginSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LoginSessions.
     */
    data: LoginSessionCreateManyInput | LoginSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginSession update
   */
  export type LoginSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginSession.
     */
    data: XOR<LoginSessionUpdateInput, LoginSessionUncheckedUpdateInput>
    /**
     * Choose, which LoginSession to update.
     */
    where: LoginSessionWhereUniqueInput
  }

  /**
   * LoginSession updateMany
   */
  export type LoginSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginSessions.
     */
    data: XOR<LoginSessionUpdateManyMutationInput, LoginSessionUncheckedUpdateManyInput>
    /**
     * Filter which LoginSessions to update
     */
    where?: LoginSessionWhereInput
  }

  /**
   * LoginSession upsert
   */
  export type LoginSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginSession to update in case it exists.
     */
    where: LoginSessionWhereUniqueInput
    /**
     * In case the LoginSession found by the `where` argument doesn't exist, create a new LoginSession with this data.
     */
    create: XOR<LoginSessionCreateInput, LoginSessionUncheckedCreateInput>
    /**
     * In case the LoginSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginSessionUpdateInput, LoginSessionUncheckedUpdateInput>
  }

  /**
   * LoginSession delete
   */
  export type LoginSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
    /**
     * Filter which LoginSession to delete.
     */
    where: LoginSessionWhereUniqueInput
  }

  /**
   * LoginSession deleteMany
   */
  export type LoginSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginSessions to delete
     */
    where?: LoginSessionWhereInput
  }

  /**
   * LoginSession.device
   */
  export type LoginSession$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * LoginSession without action
   */
  export type LoginSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSession
     */
    select?: LoginSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginSessionInclude<ExtArgs> | null
  }


  /**
   * Model LoginAttempt
   */

  export type AggregateLoginAttempt = {
    _count: LoginAttemptCountAggregateOutputType | null
    _min: LoginAttemptMinAggregateOutputType | null
    _max: LoginAttemptMaxAggregateOutputType | null
  }

  export type LoginAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    deviceId: string | null
    isSuccess: boolean | null
    createdAt: Date | null
  }

  export type LoginAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    deviceId: string | null
    isSuccess: boolean | null
    createdAt: Date | null
  }

  export type LoginAttemptCountAggregateOutputType = {
    id: number
    userId: number
    ip: number
    deviceId: number
    isSuccess: number
    createdAt: number
    _all: number
  }


  export type LoginAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    deviceId?: true
    isSuccess?: true
    createdAt?: true
  }

  export type LoginAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    deviceId?: true
    isSuccess?: true
    createdAt?: true
  }

  export type LoginAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    deviceId?: true
    isSuccess?: true
    createdAt?: true
    _all?: true
  }

  export type LoginAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginAttempt to aggregate.
     */
    where?: LoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAttempts to fetch.
     */
    orderBy?: LoginAttemptOrderByWithRelationInput | LoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginAttempts
    **/
    _count?: true | LoginAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginAttemptMaxAggregateInputType
  }

  export type GetLoginAttemptAggregateType<T extends LoginAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginAttempt[P]>
      : GetScalarType<T[P], AggregateLoginAttempt[P]>
  }




  export type LoginAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginAttemptWhereInput
    orderBy?: LoginAttemptOrderByWithAggregationInput | LoginAttemptOrderByWithAggregationInput[]
    by: LoginAttemptScalarFieldEnum[] | LoginAttemptScalarFieldEnum
    having?: LoginAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginAttemptCountAggregateInputType | true
    _min?: LoginAttemptMinAggregateInputType
    _max?: LoginAttemptMaxAggregateInputType
  }

  export type LoginAttemptGroupByOutputType = {
    id: string
    userId: string | null
    ip: string
    deviceId: string | null
    isSuccess: boolean
    createdAt: Date
    _count: LoginAttemptCountAggregateOutputType | null
    _min: LoginAttemptMinAggregateOutputType | null
    _max: LoginAttemptMaxAggregateOutputType | null
  }

  type GetLoginAttemptGroupByPayload<T extends LoginAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], LoginAttemptGroupByOutputType[P]>
        }
      >
    >


  export type LoginAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    deviceId?: boolean
    isSuccess?: boolean
    createdAt?: boolean
    user?: boolean | LoginAttempt$userArgs<ExtArgs>
    device?: boolean | LoginAttempt$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["loginAttempt"]>

  export type LoginAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    deviceId?: boolean
    isSuccess?: boolean
    createdAt?: boolean
    user?: boolean | LoginAttempt$userArgs<ExtArgs>
    device?: boolean | LoginAttempt$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["loginAttempt"]>

  export type LoginAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    ip?: boolean
    deviceId?: boolean
    isSuccess?: boolean
    createdAt?: boolean
  }

  export type LoginAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LoginAttempt$userArgs<ExtArgs>
    device?: boolean | LoginAttempt$deviceArgs<ExtArgs>
  }
  export type LoginAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LoginAttempt$userArgs<ExtArgs>
    device?: boolean | LoginAttempt$deviceArgs<ExtArgs>
  }

  export type $LoginAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      ip: string
      deviceId: string | null
      isSuccess: boolean
      createdAt: Date
    }, ExtArgs["result"]["loginAttempt"]>
    composites: {}
  }

  type LoginAttemptGetPayload<S extends boolean | null | undefined | LoginAttemptDefaultArgs> = $Result.GetResult<Prisma.$LoginAttemptPayload, S>

  type LoginAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoginAttemptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoginAttemptCountAggregateInputType | true
    }

  export interface LoginAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginAttempt'], meta: { name: 'LoginAttempt' } }
    /**
     * Find zero or one LoginAttempt that matches the filter.
     * @param {LoginAttemptFindUniqueArgs} args - Arguments to find a LoginAttempt
     * @example
     * // Get one LoginAttempt
     * const loginAttempt = await prisma.loginAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginAttemptFindUniqueArgs>(args: SelectSubset<T, LoginAttemptFindUniqueArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoginAttempt that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoginAttemptFindUniqueOrThrowArgs} args - Arguments to find a LoginAttempt
     * @example
     * // Get one LoginAttempt
     * const loginAttempt = await prisma.loginAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoginAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptFindFirstArgs} args - Arguments to find a LoginAttempt
     * @example
     * // Get one LoginAttempt
     * const loginAttempt = await prisma.loginAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginAttemptFindFirstArgs>(args?: SelectSubset<T, LoginAttemptFindFirstArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoginAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptFindFirstOrThrowArgs} args - Arguments to find a LoginAttempt
     * @example
     * // Get one LoginAttempt
     * const loginAttempt = await prisma.loginAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoginAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginAttempts
     * const loginAttempts = await prisma.loginAttempt.findMany()
     * 
     * // Get first 10 LoginAttempts
     * const loginAttempts = await prisma.loginAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginAttemptWithIdOnly = await prisma.loginAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginAttemptFindManyArgs>(args?: SelectSubset<T, LoginAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoginAttempt.
     * @param {LoginAttemptCreateArgs} args - Arguments to create a LoginAttempt.
     * @example
     * // Create one LoginAttempt
     * const LoginAttempt = await prisma.loginAttempt.create({
     *   data: {
     *     // ... data to create a LoginAttempt
     *   }
     * })
     * 
     */
    create<T extends LoginAttemptCreateArgs>(args: SelectSubset<T, LoginAttemptCreateArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoginAttempts.
     * @param {LoginAttemptCreateManyArgs} args - Arguments to create many LoginAttempts.
     * @example
     * // Create many LoginAttempts
     * const loginAttempt = await prisma.loginAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginAttemptCreateManyArgs>(args?: SelectSubset<T, LoginAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginAttempts and returns the data saved in the database.
     * @param {LoginAttemptCreateManyAndReturnArgs} args - Arguments to create many LoginAttempts.
     * @example
     * // Create many LoginAttempts
     * const loginAttempt = await prisma.loginAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginAttempts and only return the `id`
     * const loginAttemptWithIdOnly = await prisma.loginAttempt.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LoginAttempt.
     * @param {LoginAttemptDeleteArgs} args - Arguments to delete one LoginAttempt.
     * @example
     * // Delete one LoginAttempt
     * const LoginAttempt = await prisma.loginAttempt.delete({
     *   where: {
     *     // ... filter to delete one LoginAttempt
     *   }
     * })
     * 
     */
    delete<T extends LoginAttemptDeleteArgs>(args: SelectSubset<T, LoginAttemptDeleteArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoginAttempt.
     * @param {LoginAttemptUpdateArgs} args - Arguments to update one LoginAttempt.
     * @example
     * // Update one LoginAttempt
     * const loginAttempt = await prisma.loginAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginAttemptUpdateArgs>(args: SelectSubset<T, LoginAttemptUpdateArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoginAttempts.
     * @param {LoginAttemptDeleteManyArgs} args - Arguments to filter LoginAttempts to delete.
     * @example
     * // Delete a few LoginAttempts
     * const { count } = await prisma.loginAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginAttemptDeleteManyArgs>(args?: SelectSubset<T, LoginAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginAttempts
     * const loginAttempt = await prisma.loginAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginAttemptUpdateManyArgs>(args: SelectSubset<T, LoginAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoginAttempt.
     * @param {LoginAttemptUpsertArgs} args - Arguments to update or create a LoginAttempt.
     * @example
     * // Update or create a LoginAttempt
     * const loginAttempt = await prisma.loginAttempt.upsert({
     *   create: {
     *     // ... data to create a LoginAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginAttempt we want to update
     *   }
     * })
     */
    upsert<T extends LoginAttemptUpsertArgs>(args: SelectSubset<T, LoginAttemptUpsertArgs<ExtArgs>>): Prisma__LoginAttemptClient<$Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoginAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptCountArgs} args - Arguments to filter LoginAttempts to count.
     * @example
     * // Count the number of LoginAttempts
     * const count = await prisma.loginAttempt.count({
     *   where: {
     *     // ... the filter for the LoginAttempts we want to count
     *   }
     * })
    **/
    count<T extends LoginAttemptCountArgs>(
      args?: Subset<T, LoginAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginAttemptAggregateArgs>(args: Subset<T, LoginAttemptAggregateArgs>): Prisma.PrismaPromise<GetLoginAttemptAggregateType<T>>

    /**
     * Group by LoginAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAttemptGroupByArgs} args - Group by arguments.
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
      T extends LoginAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginAttemptGroupByArgs['orderBy'] }
        : { orderBy?: LoginAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoginAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginAttempt model
   */
  readonly fields: LoginAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LoginAttempt$userArgs<ExtArgs> = {}>(args?: Subset<T, LoginAttempt$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    device<T extends LoginAttempt$deviceArgs<ExtArgs> = {}>(args?: Subset<T, LoginAttempt$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the LoginAttempt model
   */ 
  interface LoginAttemptFieldRefs {
    readonly id: FieldRef<"LoginAttempt", 'String'>
    readonly userId: FieldRef<"LoginAttempt", 'String'>
    readonly ip: FieldRef<"LoginAttempt", 'String'>
    readonly deviceId: FieldRef<"LoginAttempt", 'String'>
    readonly isSuccess: FieldRef<"LoginAttempt", 'Boolean'>
    readonly createdAt: FieldRef<"LoginAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginAttempt findUnique
   */
  export type LoginAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which LoginAttempt to fetch.
     */
    where: LoginAttemptWhereUniqueInput
  }

  /**
   * LoginAttempt findUniqueOrThrow
   */
  export type LoginAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which LoginAttempt to fetch.
     */
    where: LoginAttemptWhereUniqueInput
  }

  /**
   * LoginAttempt findFirst
   */
  export type LoginAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which LoginAttempt to fetch.
     */
    where?: LoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAttempts to fetch.
     */
    orderBy?: LoginAttemptOrderByWithRelationInput | LoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginAttempts.
     */
    cursor?: LoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginAttempts.
     */
    distinct?: LoginAttemptScalarFieldEnum | LoginAttemptScalarFieldEnum[]
  }

  /**
   * LoginAttempt findFirstOrThrow
   */
  export type LoginAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which LoginAttempt to fetch.
     */
    where?: LoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAttempts to fetch.
     */
    orderBy?: LoginAttemptOrderByWithRelationInput | LoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginAttempts.
     */
    cursor?: LoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginAttempts.
     */
    distinct?: LoginAttemptScalarFieldEnum | LoginAttemptScalarFieldEnum[]
  }

  /**
   * LoginAttempt findMany
   */
  export type LoginAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which LoginAttempts to fetch.
     */
    where?: LoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAttempts to fetch.
     */
    orderBy?: LoginAttemptOrderByWithRelationInput | LoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginAttempts.
     */
    cursor?: LoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAttempts.
     */
    skip?: number
    distinct?: LoginAttemptScalarFieldEnum | LoginAttemptScalarFieldEnum[]
  }

  /**
   * LoginAttempt create
   */
  export type LoginAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginAttempt.
     */
    data: XOR<LoginAttemptCreateInput, LoginAttemptUncheckedCreateInput>
  }

  /**
   * LoginAttempt createMany
   */
  export type LoginAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginAttempts.
     */
    data: LoginAttemptCreateManyInput | LoginAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginAttempt createManyAndReturn
   */
  export type LoginAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LoginAttempts.
     */
    data: LoginAttemptCreateManyInput | LoginAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginAttempt update
   */
  export type LoginAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginAttempt.
     */
    data: XOR<LoginAttemptUpdateInput, LoginAttemptUncheckedUpdateInput>
    /**
     * Choose, which LoginAttempt to update.
     */
    where: LoginAttemptWhereUniqueInput
  }

  /**
   * LoginAttempt updateMany
   */
  export type LoginAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginAttempts.
     */
    data: XOR<LoginAttemptUpdateManyMutationInput, LoginAttemptUncheckedUpdateManyInput>
    /**
     * Filter which LoginAttempts to update
     */
    where?: LoginAttemptWhereInput
  }

  /**
   * LoginAttempt upsert
   */
  export type LoginAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginAttempt to update in case it exists.
     */
    where: LoginAttemptWhereUniqueInput
    /**
     * In case the LoginAttempt found by the `where` argument doesn't exist, create a new LoginAttempt with this data.
     */
    create: XOR<LoginAttemptCreateInput, LoginAttemptUncheckedCreateInput>
    /**
     * In case the LoginAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginAttemptUpdateInput, LoginAttemptUncheckedUpdateInput>
  }

  /**
   * LoginAttempt delete
   */
  export type LoginAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
    /**
     * Filter which LoginAttempt to delete.
     */
    where: LoginAttemptWhereUniqueInput
  }

  /**
   * LoginAttempt deleteMany
   */
  export type LoginAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginAttempts to delete
     */
    where?: LoginAttemptWhereInput
  }

  /**
   * LoginAttempt.user
   */
  export type LoginAttempt$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LoginAttempt.device
   */
  export type LoginAttempt$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * LoginAttempt without action
   */
  export type LoginAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAttempt
     */
    select?: LoginAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAttemptInclude<ExtArgs> | null
  }


  /**
   * Model Passkey
   */

  export type AggregatePasskey = {
    _count: PasskeyCountAggregateOutputType | null
    _min: PasskeyMinAggregateOutputType | null
    _max: PasskeyMaxAggregateOutputType | null
  }

  export type PasskeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    passkeyId: string | null
    publicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasskeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    passkeyId: string | null
    publicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasskeyCountAggregateOutputType = {
    id: number
    userId: number
    passkeyId: number
    publicKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PasskeyMinAggregateInputType = {
    id?: true
    userId?: true
    passkeyId?: true
    publicKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasskeyMaxAggregateInputType = {
    id?: true
    userId?: true
    passkeyId?: true
    publicKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasskeyCountAggregateInputType = {
    id?: true
    userId?: true
    passkeyId?: true
    publicKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PasskeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passkey to aggregate.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passkeys
    **/
    _count?: true | PasskeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasskeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasskeyMaxAggregateInputType
  }

  export type GetPasskeyAggregateType<T extends PasskeyAggregateArgs> = {
        [P in keyof T & keyof AggregatePasskey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasskey[P]>
      : GetScalarType<T[P], AggregatePasskey[P]>
  }




  export type PasskeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasskeyWhereInput
    orderBy?: PasskeyOrderByWithAggregationInput | PasskeyOrderByWithAggregationInput[]
    by: PasskeyScalarFieldEnum[] | PasskeyScalarFieldEnum
    having?: PasskeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasskeyCountAggregateInputType | true
    _min?: PasskeyMinAggregateInputType
    _max?: PasskeyMaxAggregateInputType
  }

  export type PasskeyGroupByOutputType = {
    id: string
    userId: string
    passkeyId: string
    publicKey: string
    createdAt: Date
    updatedAt: Date
    _count: PasskeyCountAggregateOutputType | null
    _min: PasskeyMinAggregateOutputType | null
    _max: PasskeyMaxAggregateOutputType | null
  }

  type GetPasskeyGroupByPayload<T extends PasskeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasskeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasskeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasskeyGroupByOutputType[P]>
            : GetScalarType<T[P], PasskeyGroupByOutputType[P]>
        }
      >
    >


  export type PasskeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passkeyId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passkey"]>

  export type PasskeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passkeyId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passkey"]>

  export type PasskeySelectScalar = {
    id?: boolean
    userId?: boolean
    passkeyId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PasskeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasskeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasskeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passkey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      passkeyId: string
      publicKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passkey"]>
    composites: {}
  }

  type PasskeyGetPayload<S extends boolean | null | undefined | PasskeyDefaultArgs> = $Result.GetResult<Prisma.$PasskeyPayload, S>

  type PasskeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasskeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PasskeyCountAggregateInputType | true
    }

  export interface PasskeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passkey'], meta: { name: 'Passkey' } }
    /**
     * Find zero or one Passkey that matches the filter.
     * @param {PasskeyFindUniqueArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasskeyFindUniqueArgs>(args: SelectSubset<T, PasskeyFindUniqueArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Passkey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PasskeyFindUniqueOrThrowArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasskeyFindUniqueOrThrowArgs>(args: SelectSubset<T, PasskeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Passkey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindFirstArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasskeyFindFirstArgs>(args?: SelectSubset<T, PasskeyFindFirstArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Passkey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindFirstOrThrowArgs} args - Arguments to find a Passkey
     * @example
     * // Get one Passkey
     * const passkey = await prisma.passkey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasskeyFindFirstOrThrowArgs>(args?: SelectSubset<T, PasskeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Passkeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passkeys
     * const passkeys = await prisma.passkey.findMany()
     * 
     * // Get first 10 Passkeys
     * const passkeys = await prisma.passkey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passkeyWithIdOnly = await prisma.passkey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasskeyFindManyArgs>(args?: SelectSubset<T, PasskeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Passkey.
     * @param {PasskeyCreateArgs} args - Arguments to create a Passkey.
     * @example
     * // Create one Passkey
     * const Passkey = await prisma.passkey.create({
     *   data: {
     *     // ... data to create a Passkey
     *   }
     * })
     * 
     */
    create<T extends PasskeyCreateArgs>(args: SelectSubset<T, PasskeyCreateArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Passkeys.
     * @param {PasskeyCreateManyArgs} args - Arguments to create many Passkeys.
     * @example
     * // Create many Passkeys
     * const passkey = await prisma.passkey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasskeyCreateManyArgs>(args?: SelectSubset<T, PasskeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passkeys and returns the data saved in the database.
     * @param {PasskeyCreateManyAndReturnArgs} args - Arguments to create many Passkeys.
     * @example
     * // Create many Passkeys
     * const passkey = await prisma.passkey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passkeys and only return the `id`
     * const passkeyWithIdOnly = await prisma.passkey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasskeyCreateManyAndReturnArgs>(args?: SelectSubset<T, PasskeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Passkey.
     * @param {PasskeyDeleteArgs} args - Arguments to delete one Passkey.
     * @example
     * // Delete one Passkey
     * const Passkey = await prisma.passkey.delete({
     *   where: {
     *     // ... filter to delete one Passkey
     *   }
     * })
     * 
     */
    delete<T extends PasskeyDeleteArgs>(args: SelectSubset<T, PasskeyDeleteArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Passkey.
     * @param {PasskeyUpdateArgs} args - Arguments to update one Passkey.
     * @example
     * // Update one Passkey
     * const passkey = await prisma.passkey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasskeyUpdateArgs>(args: SelectSubset<T, PasskeyUpdateArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Passkeys.
     * @param {PasskeyDeleteManyArgs} args - Arguments to filter Passkeys to delete.
     * @example
     * // Delete a few Passkeys
     * const { count } = await prisma.passkey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasskeyDeleteManyArgs>(args?: SelectSubset<T, PasskeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passkeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passkeys
     * const passkey = await prisma.passkey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasskeyUpdateManyArgs>(args: SelectSubset<T, PasskeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Passkey.
     * @param {PasskeyUpsertArgs} args - Arguments to update or create a Passkey.
     * @example
     * // Update or create a Passkey
     * const passkey = await prisma.passkey.upsert({
     *   create: {
     *     // ... data to create a Passkey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passkey we want to update
     *   }
     * })
     */
    upsert<T extends PasskeyUpsertArgs>(args: SelectSubset<T, PasskeyUpsertArgs<ExtArgs>>): Prisma__PasskeyClient<$Result.GetResult<Prisma.$PasskeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Passkeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyCountArgs} args - Arguments to filter Passkeys to count.
     * @example
     * // Count the number of Passkeys
     * const count = await prisma.passkey.count({
     *   where: {
     *     // ... the filter for the Passkeys we want to count
     *   }
     * })
    **/
    count<T extends PasskeyCountArgs>(
      args?: Subset<T, PasskeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasskeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passkey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasskeyAggregateArgs>(args: Subset<T, PasskeyAggregateArgs>): Prisma.PrismaPromise<GetPasskeyAggregateType<T>>

    /**
     * Group by Passkey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasskeyGroupByArgs} args - Group by arguments.
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
      T extends PasskeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasskeyGroupByArgs['orderBy'] }
        : { orderBy?: PasskeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasskeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasskeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passkey model
   */
  readonly fields: PasskeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passkey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasskeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Passkey model
   */ 
  interface PasskeyFieldRefs {
    readonly id: FieldRef<"Passkey", 'String'>
    readonly userId: FieldRef<"Passkey", 'String'>
    readonly passkeyId: FieldRef<"Passkey", 'String'>
    readonly publicKey: FieldRef<"Passkey", 'String'>
    readonly createdAt: FieldRef<"Passkey", 'DateTime'>
    readonly updatedAt: FieldRef<"Passkey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passkey findUnique
   */
  export type PasskeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey findUniqueOrThrow
   */
  export type PasskeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey findFirst
   */
  export type PasskeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passkeys.
     */
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey findFirstOrThrow
   */
  export type PasskeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkey to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passkeys.
     */
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey findMany
   */
  export type PasskeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter, which Passkeys to fetch.
     */
    where?: PasskeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passkeys to fetch.
     */
    orderBy?: PasskeyOrderByWithRelationInput | PasskeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passkeys.
     */
    cursor?: PasskeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passkeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passkeys.
     */
    skip?: number
    distinct?: PasskeyScalarFieldEnum | PasskeyScalarFieldEnum[]
  }

  /**
   * Passkey create
   */
  export type PasskeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The data needed to create a Passkey.
     */
    data: XOR<PasskeyCreateInput, PasskeyUncheckedCreateInput>
  }

  /**
   * Passkey createMany
   */
  export type PasskeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passkeys.
     */
    data: PasskeyCreateManyInput | PasskeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passkey createManyAndReturn
   */
  export type PasskeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Passkeys.
     */
    data: PasskeyCreateManyInput | PasskeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passkey update
   */
  export type PasskeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The data needed to update a Passkey.
     */
    data: XOR<PasskeyUpdateInput, PasskeyUncheckedUpdateInput>
    /**
     * Choose, which Passkey to update.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey updateMany
   */
  export type PasskeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passkeys.
     */
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyInput>
    /**
     * Filter which Passkeys to update
     */
    where?: PasskeyWhereInput
  }

  /**
   * Passkey upsert
   */
  export type PasskeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * The filter to search for the Passkey to update in case it exists.
     */
    where: PasskeyWhereUniqueInput
    /**
     * In case the Passkey found by the `where` argument doesn't exist, create a new Passkey with this data.
     */
    create: XOR<PasskeyCreateInput, PasskeyUncheckedCreateInput>
    /**
     * In case the Passkey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasskeyUpdateInput, PasskeyUncheckedUpdateInput>
  }

  /**
   * Passkey delete
   */
  export type PasskeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
    /**
     * Filter which Passkey to delete.
     */
    where: PasskeyWhereUniqueInput
  }

  /**
   * Passkey deleteMany
   */
  export type PasskeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passkeys to delete
     */
    where?: PasskeyWhereInput
  }

  /**
   * Passkey without action
   */
  export type PasskeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passkey
     */
    select?: PasskeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasskeyInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    token: 'token',
    refreshToken: 'refreshToken',
    refreshTokenExpiry: 'refreshTokenExpiry',
    twoFactorVerified: 'twoFactorVerified',
    twoFactorSecret: 'twoFactorSecret',
    isVerified: 'isVerified',
    providerId: 'providerId',
    providerType: 'providerType',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ip: 'ip',
    mac: 'mac',
    location: 'location',
    isWhitelisted: 'isWhitelisted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const WhitelistIPScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type WhitelistIPScalarFieldEnum = (typeof WhitelistIPScalarFieldEnum)[keyof typeof WhitelistIPScalarFieldEnum]


  export const LoginSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ip: 'ip',
    deviceId: 'deviceId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type LoginSessionScalarFieldEnum = (typeof LoginSessionScalarFieldEnum)[keyof typeof LoginSessionScalarFieldEnum]


  export const LoginAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ip: 'ip',
    deviceId: 'deviceId',
    isSuccess: 'isSuccess',
    createdAt: 'createdAt'
  };

  export type LoginAttemptScalarFieldEnum = (typeof LoginAttemptScalarFieldEnum)[keyof typeof LoginAttemptScalarFieldEnum]


  export const PasskeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    passkeyId: 'passkeyId',
    publicKey: 'publicKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PasskeyScalarFieldEnum = (typeof PasskeyScalarFieldEnum)[keyof typeof PasskeyScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    refreshTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorVerified?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    providerId?: StringNullableFilter<"User"> | string | null
    providerType?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    devices?: DeviceListRelationFilter
    whitelistIPs?: WhitelistIPListRelationFilter
    loginSessions?: LoginSessionListRelationFilter
    loginAttempts?: LoginAttemptListRelationFilter
    passkeys?: PasskeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    refreshTokenExpiry?: SortOrderInput | SortOrder
    twoFactorVerified?: SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    providerId?: SortOrderInput | SortOrder
    providerType?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
    whitelistIPs?: WhitelistIPOrderByRelationAggregateInput
    loginSessions?: LoginSessionOrderByRelationAggregateInput
    loginAttempts?: LoginAttemptOrderByRelationAggregateInput
    passkeys?: PasskeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    refreshTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorVerified?: BoolFilter<"User"> | boolean
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    providerId?: StringNullableFilter<"User"> | string | null
    providerType?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    devices?: DeviceListRelationFilter
    whitelistIPs?: WhitelistIPListRelationFilter
    loginSessions?: LoginSessionListRelationFilter
    loginAttempts?: LoginAttemptListRelationFilter
    passkeys?: PasskeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    refreshTokenExpiry?: SortOrderInput | SortOrder
    twoFactorVerified?: SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    providerId?: SortOrderInput | SortOrder
    providerType?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    twoFactorVerified?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerType?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    userId?: StringFilter<"Device"> | string
    ip?: StringFilter<"Device"> | string
    mac?: StringFilter<"Device"> | string
    location?: StringFilter<"Device"> | string
    isWhitelisted?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    loginAttempts?: LoginAttemptListRelationFilter
    loginSessions?: LoginSessionListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    mac?: SortOrder
    location?: SortOrder
    isWhitelisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    loginAttempts?: LoginAttemptOrderByRelationAggregateInput
    loginSessions?: LoginSessionOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    userId?: StringFilter<"Device"> | string
    ip?: StringFilter<"Device"> | string
    mac?: StringFilter<"Device"> | string
    location?: StringFilter<"Device"> | string
    isWhitelisted?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    loginAttempts?: LoginAttemptListRelationFilter
    loginSessions?: LoginSessionListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    mac?: SortOrder
    location?: SortOrder
    isWhitelisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    userId?: StringWithAggregatesFilter<"Device"> | string
    ip?: StringWithAggregatesFilter<"Device"> | string
    mac?: StringWithAggregatesFilter<"Device"> | string
    location?: StringWithAggregatesFilter<"Device"> | string
    isWhitelisted?: BoolWithAggregatesFilter<"Device"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type WhitelistIPWhereInput = {
    AND?: WhitelistIPWhereInput | WhitelistIPWhereInput[]
    OR?: WhitelistIPWhereInput[]
    NOT?: WhitelistIPWhereInput | WhitelistIPWhereInput[]
    id?: StringFilter<"WhitelistIP"> | string
    ip?: StringFilter<"WhitelistIP"> | string
    userId?: StringFilter<"WhitelistIP"> | string
    createdAt?: DateTimeFilter<"WhitelistIP"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WhitelistIPOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WhitelistIPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhitelistIPWhereInput | WhitelistIPWhereInput[]
    OR?: WhitelistIPWhereInput[]
    NOT?: WhitelistIPWhereInput | WhitelistIPWhereInput[]
    ip?: StringFilter<"WhitelistIP"> | string
    userId?: StringFilter<"WhitelistIP"> | string
    createdAt?: DateTimeFilter<"WhitelistIP"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WhitelistIPOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: WhitelistIPCountOrderByAggregateInput
    _max?: WhitelistIPMaxOrderByAggregateInput
    _min?: WhitelistIPMinOrderByAggregateInput
  }

  export type WhitelistIPScalarWhereWithAggregatesInput = {
    AND?: WhitelistIPScalarWhereWithAggregatesInput | WhitelistIPScalarWhereWithAggregatesInput[]
    OR?: WhitelistIPScalarWhereWithAggregatesInput[]
    NOT?: WhitelistIPScalarWhereWithAggregatesInput | WhitelistIPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhitelistIP"> | string
    ip?: StringWithAggregatesFilter<"WhitelistIP"> | string
    userId?: StringWithAggregatesFilter<"WhitelistIP"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WhitelistIP"> | Date | string
  }

  export type LoginSessionWhereInput = {
    AND?: LoginSessionWhereInput | LoginSessionWhereInput[]
    OR?: LoginSessionWhereInput[]
    NOT?: LoginSessionWhereInput | LoginSessionWhereInput[]
    id?: StringFilter<"LoginSession"> | string
    userId?: StringFilter<"LoginSession"> | string
    ip?: StringFilter<"LoginSession"> | string
    deviceId?: StringNullableFilter<"LoginSession"> | string | null
    token?: StringNullableFilter<"LoginSession"> | string | null
    expiresAt?: DateTimeFilter<"LoginSession"> | Date | string
    createdAt?: DateTimeFilter<"LoginSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }

  export type LoginSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type LoginSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoginSessionWhereInput | LoginSessionWhereInput[]
    OR?: LoginSessionWhereInput[]
    NOT?: LoginSessionWhereInput | LoginSessionWhereInput[]
    userId?: StringFilter<"LoginSession"> | string
    ip?: StringFilter<"LoginSession"> | string
    deviceId?: StringNullableFilter<"LoginSession"> | string | null
    token?: StringNullableFilter<"LoginSession"> | string | null
    expiresAt?: DateTimeFilter<"LoginSession"> | Date | string
    createdAt?: DateTimeFilter<"LoginSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type LoginSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: LoginSessionCountOrderByAggregateInput
    _max?: LoginSessionMaxOrderByAggregateInput
    _min?: LoginSessionMinOrderByAggregateInput
  }

  export type LoginSessionScalarWhereWithAggregatesInput = {
    AND?: LoginSessionScalarWhereWithAggregatesInput | LoginSessionScalarWhereWithAggregatesInput[]
    OR?: LoginSessionScalarWhereWithAggregatesInput[]
    NOT?: LoginSessionScalarWhereWithAggregatesInput | LoginSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoginSession"> | string
    userId?: StringWithAggregatesFilter<"LoginSession"> | string
    ip?: StringWithAggregatesFilter<"LoginSession"> | string
    deviceId?: StringNullableWithAggregatesFilter<"LoginSession"> | string | null
    token?: StringNullableWithAggregatesFilter<"LoginSession"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"LoginSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LoginSession"> | Date | string
  }

  export type LoginAttemptWhereInput = {
    AND?: LoginAttemptWhereInput | LoginAttemptWhereInput[]
    OR?: LoginAttemptWhereInput[]
    NOT?: LoginAttemptWhereInput | LoginAttemptWhereInput[]
    id?: StringFilter<"LoginAttempt"> | string
    userId?: StringNullableFilter<"LoginAttempt"> | string | null
    ip?: StringFilter<"LoginAttempt"> | string
    deviceId?: StringNullableFilter<"LoginAttempt"> | string | null
    isSuccess?: BoolFilter<"LoginAttempt"> | boolean
    createdAt?: DateTimeFilter<"LoginAttempt"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }

  export type LoginAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    ip?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type LoginAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoginAttemptWhereInput | LoginAttemptWhereInput[]
    OR?: LoginAttemptWhereInput[]
    NOT?: LoginAttemptWhereInput | LoginAttemptWhereInput[]
    userId?: StringNullableFilter<"LoginAttempt"> | string | null
    ip?: StringFilter<"LoginAttempt"> | string
    deviceId?: StringNullableFilter<"LoginAttempt"> | string | null
    isSuccess?: BoolFilter<"LoginAttempt"> | boolean
    createdAt?: DateTimeFilter<"LoginAttempt"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type LoginAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    ip?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    _count?: LoginAttemptCountOrderByAggregateInput
    _max?: LoginAttemptMaxOrderByAggregateInput
    _min?: LoginAttemptMinOrderByAggregateInput
  }

  export type LoginAttemptScalarWhereWithAggregatesInput = {
    AND?: LoginAttemptScalarWhereWithAggregatesInput | LoginAttemptScalarWhereWithAggregatesInput[]
    OR?: LoginAttemptScalarWhereWithAggregatesInput[]
    NOT?: LoginAttemptScalarWhereWithAggregatesInput | LoginAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoginAttempt"> | string
    userId?: StringNullableWithAggregatesFilter<"LoginAttempt"> | string | null
    ip?: StringWithAggregatesFilter<"LoginAttempt"> | string
    deviceId?: StringNullableWithAggregatesFilter<"LoginAttempt"> | string | null
    isSuccess?: BoolWithAggregatesFilter<"LoginAttempt"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LoginAttempt"> | Date | string
  }

  export type PasskeyWhereInput = {
    AND?: PasskeyWhereInput | PasskeyWhereInput[]
    OR?: PasskeyWhereInput[]
    NOT?: PasskeyWhereInput | PasskeyWhereInput[]
    id?: StringFilter<"Passkey"> | string
    userId?: StringFilter<"Passkey"> | string
    passkeyId?: StringFilter<"Passkey"> | string
    publicKey?: StringFilter<"Passkey"> | string
    createdAt?: DateTimeFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeFilter<"Passkey"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PasskeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    passkeyId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasskeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    passkeyId?: string
    AND?: PasskeyWhereInput | PasskeyWhereInput[]
    OR?: PasskeyWhereInput[]
    NOT?: PasskeyWhereInput | PasskeyWhereInput[]
    userId?: StringFilter<"Passkey"> | string
    publicKey?: StringFilter<"Passkey"> | string
    createdAt?: DateTimeFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeFilter<"Passkey"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "passkeyId">

  export type PasskeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    passkeyId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PasskeyCountOrderByAggregateInput
    _max?: PasskeyMaxOrderByAggregateInput
    _min?: PasskeyMinOrderByAggregateInput
  }

  export type PasskeyScalarWhereWithAggregatesInput = {
    AND?: PasskeyScalarWhereWithAggregatesInput | PasskeyScalarWhereWithAggregatesInput[]
    OR?: PasskeyScalarWhereWithAggregatesInput[]
    NOT?: PasskeyScalarWhereWithAggregatesInput | PasskeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passkey"> | string
    userId?: StringWithAggregatesFilter<"Passkey"> | string
    passkeyId?: StringWithAggregatesFilter<"Passkey"> | string
    publicKey?: StringWithAggregatesFilter<"Passkey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passkey"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPUncheckedCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUncheckedUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutDeviceInput
    loginSessions?: LoginSessionCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    userId: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutDeviceInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutDeviceNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutDeviceNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    userId: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistIPCreateInput = {
    id?: string
    ip: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWhitelistIPsInput
  }

  export type WhitelistIPUncheckedCreateInput = {
    id?: string
    ip: string
    userId: string
    createdAt?: Date | string
  }

  export type WhitelistIPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWhitelistIPsNestedInput
  }

  export type WhitelistIPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistIPCreateManyInput = {
    id?: string
    ip: string
    userId: string
    createdAt?: Date | string
  }

  export type WhitelistIPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistIPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionCreateInput = {
    id?: string
    ip: string
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLoginSessionsInput
    device?: DeviceCreateNestedOneWithoutLoginSessionsInput
  }

  export type LoginSessionUncheckedCreateInput = {
    id?: string
    userId: string
    ip: string
    deviceId?: string | null
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoginSessionsNestedInput
    device?: DeviceUpdateOneWithoutLoginSessionsNestedInput
  }

  export type LoginSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionCreateManyInput = {
    id?: string
    userId: string
    ip: string
    deviceId?: string | null
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptCreateInput = {
    id?: string
    ip: string
    isSuccess: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLoginAttemptsInput
    device?: DeviceCreateNestedOneWithoutLoginAttemptsInput
  }

  export type LoginAttemptUncheckedCreateInput = {
    id?: string
    userId?: string | null
    ip: string
    deviceId?: string | null
    isSuccess: boolean
    createdAt?: Date | string
  }

  export type LoginAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLoginAttemptsNestedInput
    device?: DeviceUpdateOneWithoutLoginAttemptsNestedInput
  }

  export type LoginAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptCreateManyInput = {
    id?: string
    userId?: string | null
    ip: string
    deviceId?: string | null
    isSuccess: boolean
    createdAt?: Date | string
  }

  export type LoginAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyCreateInput = {
    id?: string
    passkeyId: string
    publicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPasskeysInput
  }

  export type PasskeyUncheckedCreateInput = {
    id?: string
    userId: string
    passkeyId: string
    publicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasskeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasskeysNestedInput
  }

  export type PasskeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyCreateManyInput = {
    id?: string
    userId: string
    passkeyId: string
    publicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasskeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
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

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type WhitelistIPListRelationFilter = {
    every?: WhitelistIPWhereInput
    some?: WhitelistIPWhereInput
    none?: WhitelistIPWhereInput
  }

  export type LoginSessionListRelationFilter = {
    every?: LoginSessionWhereInput
    some?: LoginSessionWhereInput
    none?: LoginSessionWhereInput
  }

  export type LoginAttemptListRelationFilter = {
    every?: LoginAttemptWhereInput
    some?: LoginAttemptWhereInput
    none?: LoginAttemptWhereInput
  }

  export type PasskeyListRelationFilter = {
    every?: PasskeyWhereInput
    some?: PasskeyWhereInput
    none?: PasskeyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhitelistIPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasskeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiry?: SortOrder
    twoFactorVerified?: SortOrder
    twoFactorSecret?: SortOrder
    isVerified?: SortOrder
    providerId?: SortOrder
    providerType?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiry?: SortOrder
    twoFactorVerified?: SortOrder
    twoFactorSecret?: SortOrder
    isVerified?: SortOrder
    providerId?: SortOrder
    providerType?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiry?: SortOrder
    twoFactorVerified?: SortOrder
    twoFactorSecret?: SortOrder
    isVerified?: SortOrder
    providerId?: SortOrder
    providerType?: SortOrder
    role?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    mac?: SortOrder
    location?: SortOrder
    isWhitelisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    mac?: SortOrder
    location?: SortOrder
    isWhitelisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    mac?: SortOrder
    location?: SortOrder
    isWhitelisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhitelistIPCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WhitelistIPMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WhitelistIPMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceNullableRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type LoginSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LoginAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    deviceId?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
  }

  export type PasskeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passkeyId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasskeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passkeyId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasskeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passkeyId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type WhitelistIPCreateNestedManyWithoutUserInput = {
    create?: XOR<WhitelistIPCreateWithoutUserInput, WhitelistIPUncheckedCreateWithoutUserInput> | WhitelistIPCreateWithoutUserInput[] | WhitelistIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhitelistIPCreateOrConnectWithoutUserInput | WhitelistIPCreateOrConnectWithoutUserInput[]
    createMany?: WhitelistIPCreateManyUserInputEnvelope
    connect?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
  }

  export type LoginSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginSessionCreateWithoutUserInput, LoginSessionUncheckedCreateWithoutUserInput> | LoginSessionCreateWithoutUserInput[] | LoginSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutUserInput | LoginSessionCreateOrConnectWithoutUserInput[]
    createMany?: LoginSessionCreateManyUserInputEnvelope
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
  }

  export type LoginAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginAttemptCreateWithoutUserInput, LoginAttemptUncheckedCreateWithoutUserInput> | LoginAttemptCreateWithoutUserInput[] | LoginAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutUserInput | LoginAttemptCreateOrConnectWithoutUserInput[]
    createMany?: LoginAttemptCreateManyUserInputEnvelope
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
  }

  export type PasskeyCreateNestedManyWithoutUserInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type WhitelistIPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WhitelistIPCreateWithoutUserInput, WhitelistIPUncheckedCreateWithoutUserInput> | WhitelistIPCreateWithoutUserInput[] | WhitelistIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhitelistIPCreateOrConnectWithoutUserInput | WhitelistIPCreateOrConnectWithoutUserInput[]
    createMany?: WhitelistIPCreateManyUserInputEnvelope
    connect?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
  }

  export type LoginSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginSessionCreateWithoutUserInput, LoginSessionUncheckedCreateWithoutUserInput> | LoginSessionCreateWithoutUserInput[] | LoginSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutUserInput | LoginSessionCreateOrConnectWithoutUserInput[]
    createMany?: LoginSessionCreateManyUserInputEnvelope
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
  }

  export type LoginAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginAttemptCreateWithoutUserInput, LoginAttemptUncheckedCreateWithoutUserInput> | LoginAttemptCreateWithoutUserInput[] | LoginAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutUserInput | LoginAttemptCreateOrConnectWithoutUserInput[]
    createMany?: LoginAttemptCreateManyUserInputEnvelope
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
  }

  export type PasskeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type WhitelistIPUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhitelistIPCreateWithoutUserInput, WhitelistIPUncheckedCreateWithoutUserInput> | WhitelistIPCreateWithoutUserInput[] | WhitelistIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhitelistIPCreateOrConnectWithoutUserInput | WhitelistIPCreateOrConnectWithoutUserInput[]
    upsert?: WhitelistIPUpsertWithWhereUniqueWithoutUserInput | WhitelistIPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhitelistIPCreateManyUserInputEnvelope
    set?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    disconnect?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    delete?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    connect?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    update?: WhitelistIPUpdateWithWhereUniqueWithoutUserInput | WhitelistIPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhitelistIPUpdateManyWithWhereWithoutUserInput | WhitelistIPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhitelistIPScalarWhereInput | WhitelistIPScalarWhereInput[]
  }

  export type LoginSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginSessionCreateWithoutUserInput, LoginSessionUncheckedCreateWithoutUserInput> | LoginSessionCreateWithoutUserInput[] | LoginSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutUserInput | LoginSessionCreateOrConnectWithoutUserInput[]
    upsert?: LoginSessionUpsertWithWhereUniqueWithoutUserInput | LoginSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginSessionCreateManyUserInputEnvelope
    set?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    disconnect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    delete?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    update?: LoginSessionUpdateWithWhereUniqueWithoutUserInput | LoginSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginSessionUpdateManyWithWhereWithoutUserInput | LoginSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginSessionScalarWhereInput | LoginSessionScalarWhereInput[]
  }

  export type LoginAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginAttemptCreateWithoutUserInput, LoginAttemptUncheckedCreateWithoutUserInput> | LoginAttemptCreateWithoutUserInput[] | LoginAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutUserInput | LoginAttemptCreateOrConnectWithoutUserInput[]
    upsert?: LoginAttemptUpsertWithWhereUniqueWithoutUserInput | LoginAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginAttemptCreateManyUserInputEnvelope
    set?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    disconnect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    delete?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    update?: LoginAttemptUpdateWithWhereUniqueWithoutUserInput | LoginAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginAttemptUpdateManyWithWhereWithoutUserInput | LoginAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginAttemptScalarWhereInput | LoginAttemptScalarWhereInput[]
  }

  export type PasskeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    upsert?: PasskeyUpsertWithWhereUniqueWithoutUserInput | PasskeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    set?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    disconnect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    delete?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    update?: PasskeyUpdateWithWhereUniqueWithoutUserInput | PasskeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasskeyUpdateManyWithWhereWithoutUserInput | PasskeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type WhitelistIPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WhitelistIPCreateWithoutUserInput, WhitelistIPUncheckedCreateWithoutUserInput> | WhitelistIPCreateWithoutUserInput[] | WhitelistIPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WhitelistIPCreateOrConnectWithoutUserInput | WhitelistIPCreateOrConnectWithoutUserInput[]
    upsert?: WhitelistIPUpsertWithWhereUniqueWithoutUserInput | WhitelistIPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WhitelistIPCreateManyUserInputEnvelope
    set?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    disconnect?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    delete?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    connect?: WhitelistIPWhereUniqueInput | WhitelistIPWhereUniqueInput[]
    update?: WhitelistIPUpdateWithWhereUniqueWithoutUserInput | WhitelistIPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WhitelistIPUpdateManyWithWhereWithoutUserInput | WhitelistIPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WhitelistIPScalarWhereInput | WhitelistIPScalarWhereInput[]
  }

  export type LoginSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginSessionCreateWithoutUserInput, LoginSessionUncheckedCreateWithoutUserInput> | LoginSessionCreateWithoutUserInput[] | LoginSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutUserInput | LoginSessionCreateOrConnectWithoutUserInput[]
    upsert?: LoginSessionUpsertWithWhereUniqueWithoutUserInput | LoginSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginSessionCreateManyUserInputEnvelope
    set?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    disconnect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    delete?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    update?: LoginSessionUpdateWithWhereUniqueWithoutUserInput | LoginSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginSessionUpdateManyWithWhereWithoutUserInput | LoginSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginSessionScalarWhereInput | LoginSessionScalarWhereInput[]
  }

  export type LoginAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginAttemptCreateWithoutUserInput, LoginAttemptUncheckedCreateWithoutUserInput> | LoginAttemptCreateWithoutUserInput[] | LoginAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutUserInput | LoginAttemptCreateOrConnectWithoutUserInput[]
    upsert?: LoginAttemptUpsertWithWhereUniqueWithoutUserInput | LoginAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginAttemptCreateManyUserInputEnvelope
    set?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    disconnect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    delete?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    update?: LoginAttemptUpdateWithWhereUniqueWithoutUserInput | LoginAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginAttemptUpdateManyWithWhereWithoutUserInput | LoginAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginAttemptScalarWhereInput | LoginAttemptScalarWhereInput[]
  }

  export type PasskeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput> | PasskeyCreateWithoutUserInput[] | PasskeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasskeyCreateOrConnectWithoutUserInput | PasskeyCreateOrConnectWithoutUserInput[]
    upsert?: PasskeyUpsertWithWhereUniqueWithoutUserInput | PasskeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasskeyCreateManyUserInputEnvelope
    set?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    disconnect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    delete?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    connect?: PasskeyWhereUniqueInput | PasskeyWhereUniqueInput[]
    update?: PasskeyUpdateWithWhereUniqueWithoutUserInput | PasskeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasskeyUpdateManyWithWhereWithoutUserInput | PasskeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type LoginAttemptCreateNestedManyWithoutDeviceInput = {
    create?: XOR<LoginAttemptCreateWithoutDeviceInput, LoginAttemptUncheckedCreateWithoutDeviceInput> | LoginAttemptCreateWithoutDeviceInput[] | LoginAttemptUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutDeviceInput | LoginAttemptCreateOrConnectWithoutDeviceInput[]
    createMany?: LoginAttemptCreateManyDeviceInputEnvelope
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
  }

  export type LoginSessionCreateNestedManyWithoutDeviceInput = {
    create?: XOR<LoginSessionCreateWithoutDeviceInput, LoginSessionUncheckedCreateWithoutDeviceInput> | LoginSessionCreateWithoutDeviceInput[] | LoginSessionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutDeviceInput | LoginSessionCreateOrConnectWithoutDeviceInput[]
    createMany?: LoginSessionCreateManyDeviceInputEnvelope
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
  }

  export type LoginAttemptUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<LoginAttemptCreateWithoutDeviceInput, LoginAttemptUncheckedCreateWithoutDeviceInput> | LoginAttemptCreateWithoutDeviceInput[] | LoginAttemptUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutDeviceInput | LoginAttemptCreateOrConnectWithoutDeviceInput[]
    createMany?: LoginAttemptCreateManyDeviceInputEnvelope
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
  }

  export type LoginSessionUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<LoginSessionCreateWithoutDeviceInput, LoginSessionUncheckedCreateWithoutDeviceInput> | LoginSessionCreateWithoutDeviceInput[] | LoginSessionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutDeviceInput | LoginSessionCreateOrConnectWithoutDeviceInput[]
    createMany?: LoginSessionCreateManyDeviceInputEnvelope
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type LoginAttemptUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<LoginAttemptCreateWithoutDeviceInput, LoginAttemptUncheckedCreateWithoutDeviceInput> | LoginAttemptCreateWithoutDeviceInput[] | LoginAttemptUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutDeviceInput | LoginAttemptCreateOrConnectWithoutDeviceInput[]
    upsert?: LoginAttemptUpsertWithWhereUniqueWithoutDeviceInput | LoginAttemptUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: LoginAttemptCreateManyDeviceInputEnvelope
    set?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    disconnect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    delete?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    update?: LoginAttemptUpdateWithWhereUniqueWithoutDeviceInput | LoginAttemptUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: LoginAttemptUpdateManyWithWhereWithoutDeviceInput | LoginAttemptUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: LoginAttemptScalarWhereInput | LoginAttemptScalarWhereInput[]
  }

  export type LoginSessionUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<LoginSessionCreateWithoutDeviceInput, LoginSessionUncheckedCreateWithoutDeviceInput> | LoginSessionCreateWithoutDeviceInput[] | LoginSessionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutDeviceInput | LoginSessionCreateOrConnectWithoutDeviceInput[]
    upsert?: LoginSessionUpsertWithWhereUniqueWithoutDeviceInput | LoginSessionUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: LoginSessionCreateManyDeviceInputEnvelope
    set?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    disconnect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    delete?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    update?: LoginSessionUpdateWithWhereUniqueWithoutDeviceInput | LoginSessionUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: LoginSessionUpdateManyWithWhereWithoutDeviceInput | LoginSessionUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: LoginSessionScalarWhereInput | LoginSessionScalarWhereInput[]
  }

  export type LoginAttemptUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<LoginAttemptCreateWithoutDeviceInput, LoginAttemptUncheckedCreateWithoutDeviceInput> | LoginAttemptCreateWithoutDeviceInput[] | LoginAttemptUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginAttemptCreateOrConnectWithoutDeviceInput | LoginAttemptCreateOrConnectWithoutDeviceInput[]
    upsert?: LoginAttemptUpsertWithWhereUniqueWithoutDeviceInput | LoginAttemptUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: LoginAttemptCreateManyDeviceInputEnvelope
    set?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    disconnect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    delete?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    connect?: LoginAttemptWhereUniqueInput | LoginAttemptWhereUniqueInput[]
    update?: LoginAttemptUpdateWithWhereUniqueWithoutDeviceInput | LoginAttemptUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: LoginAttemptUpdateManyWithWhereWithoutDeviceInput | LoginAttemptUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: LoginAttemptScalarWhereInput | LoginAttemptScalarWhereInput[]
  }

  export type LoginSessionUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<LoginSessionCreateWithoutDeviceInput, LoginSessionUncheckedCreateWithoutDeviceInput> | LoginSessionCreateWithoutDeviceInput[] | LoginSessionUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: LoginSessionCreateOrConnectWithoutDeviceInput | LoginSessionCreateOrConnectWithoutDeviceInput[]
    upsert?: LoginSessionUpsertWithWhereUniqueWithoutDeviceInput | LoginSessionUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: LoginSessionCreateManyDeviceInputEnvelope
    set?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    disconnect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    delete?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    connect?: LoginSessionWhereUniqueInput | LoginSessionWhereUniqueInput[]
    update?: LoginSessionUpdateWithWhereUniqueWithoutDeviceInput | LoginSessionUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: LoginSessionUpdateManyWithWhereWithoutDeviceInput | LoginSessionUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: LoginSessionScalarWhereInput | LoginSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWhitelistIPsInput = {
    create?: XOR<UserCreateWithoutWhitelistIPsInput, UserUncheckedCreateWithoutWhitelistIPsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhitelistIPsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWhitelistIPsNestedInput = {
    create?: XOR<UserCreateWithoutWhitelistIPsInput, UserUncheckedCreateWithoutWhitelistIPsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhitelistIPsInput
    upsert?: UserUpsertWithoutWhitelistIPsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhitelistIPsInput, UserUpdateWithoutWhitelistIPsInput>, UserUncheckedUpdateWithoutWhitelistIPsInput>
  }

  export type UserCreateNestedOneWithoutLoginSessionsInput = {
    create?: XOR<UserCreateWithoutLoginSessionsInput, UserUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutLoginSessionsInput = {
    create?: XOR<DeviceCreateWithoutLoginSessionsInput, DeviceUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutLoginSessionsInput
    connect?: DeviceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLoginSessionsNestedInput = {
    create?: XOR<UserCreateWithoutLoginSessionsInput, UserUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginSessionsInput
    upsert?: UserUpsertWithoutLoginSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoginSessionsInput, UserUpdateWithoutLoginSessionsInput>, UserUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type DeviceUpdateOneWithoutLoginSessionsNestedInput = {
    create?: XOR<DeviceCreateWithoutLoginSessionsInput, DeviceUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutLoginSessionsInput
    upsert?: DeviceUpsertWithoutLoginSessionsInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutLoginSessionsInput, DeviceUpdateWithoutLoginSessionsInput>, DeviceUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type UserCreateNestedOneWithoutLoginAttemptsInput = {
    create?: XOR<UserCreateWithoutLoginAttemptsInput, UserUncheckedCreateWithoutLoginAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutLoginAttemptsInput = {
    create?: XOR<DeviceCreateWithoutLoginAttemptsInput, DeviceUncheckedCreateWithoutLoginAttemptsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutLoginAttemptsInput
    connect?: DeviceWhereUniqueInput
  }

  export type UserUpdateOneWithoutLoginAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutLoginAttemptsInput, UserUncheckedCreateWithoutLoginAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginAttemptsInput
    upsert?: UserUpsertWithoutLoginAttemptsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoginAttemptsInput, UserUpdateWithoutLoginAttemptsInput>, UserUncheckedUpdateWithoutLoginAttemptsInput>
  }

  export type DeviceUpdateOneWithoutLoginAttemptsNestedInput = {
    create?: XOR<DeviceCreateWithoutLoginAttemptsInput, DeviceUncheckedCreateWithoutLoginAttemptsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutLoginAttemptsInput
    upsert?: DeviceUpsertWithoutLoginAttemptsInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutLoginAttemptsInput, DeviceUpdateWithoutLoginAttemptsInput>, DeviceUncheckedUpdateWithoutLoginAttemptsInput>
  }

  export type UserCreateNestedOneWithoutPasskeysInput = {
    create?: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasskeysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasskeysNestedInput = {
    create?: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasskeysInput
    upsert?: UserUpsertWithoutPasskeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasskeysInput, UserUpdateWithoutPasskeysInput>, UserUncheckedUpdateWithoutPasskeysInput>
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

  export type DeviceCreateWithoutUserInput = {
    id?: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginAttempts?: LoginAttemptCreateNestedManyWithoutDeviceInput
    loginSessions?: LoginSessionCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutDeviceInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WhitelistIPCreateWithoutUserInput = {
    id?: string
    ip: string
    createdAt?: Date | string
  }

  export type WhitelistIPUncheckedCreateWithoutUserInput = {
    id?: string
    ip: string
    createdAt?: Date | string
  }

  export type WhitelistIPCreateOrConnectWithoutUserInput = {
    where: WhitelistIPWhereUniqueInput
    create: XOR<WhitelistIPCreateWithoutUserInput, WhitelistIPUncheckedCreateWithoutUserInput>
  }

  export type WhitelistIPCreateManyUserInputEnvelope = {
    data: WhitelistIPCreateManyUserInput | WhitelistIPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoginSessionCreateWithoutUserInput = {
    id?: string
    ip: string
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    device?: DeviceCreateNestedOneWithoutLoginSessionsInput
  }

  export type LoginSessionUncheckedCreateWithoutUserInput = {
    id?: string
    ip: string
    deviceId?: string | null
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginSessionCreateOrConnectWithoutUserInput = {
    where: LoginSessionWhereUniqueInput
    create: XOR<LoginSessionCreateWithoutUserInput, LoginSessionUncheckedCreateWithoutUserInput>
  }

  export type LoginSessionCreateManyUserInputEnvelope = {
    data: LoginSessionCreateManyUserInput | LoginSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoginAttemptCreateWithoutUserInput = {
    id?: string
    ip: string
    isSuccess: boolean
    createdAt?: Date | string
    device?: DeviceCreateNestedOneWithoutLoginAttemptsInput
  }

  export type LoginAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    ip: string
    deviceId?: string | null
    isSuccess: boolean
    createdAt?: Date | string
  }

  export type LoginAttemptCreateOrConnectWithoutUserInput = {
    where: LoginAttemptWhereUniqueInput
    create: XOR<LoginAttemptCreateWithoutUserInput, LoginAttemptUncheckedCreateWithoutUserInput>
  }

  export type LoginAttemptCreateManyUserInputEnvelope = {
    data: LoginAttemptCreateManyUserInput | LoginAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasskeyCreateWithoutUserInput = {
    id?: string
    passkeyId: string
    publicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasskeyUncheckedCreateWithoutUserInput = {
    id?: string
    passkeyId: string
    publicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasskeyCreateOrConnectWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    create: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput>
  }

  export type PasskeyCreateManyUserInputEnvelope = {
    data: PasskeyCreateManyUserInput | PasskeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    userId?: StringFilter<"Device"> | string
    ip?: StringFilter<"Device"> | string
    mac?: StringFilter<"Device"> | string
    location?: StringFilter<"Device"> | string
    isWhitelisted?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type WhitelistIPUpsertWithWhereUniqueWithoutUserInput = {
    where: WhitelistIPWhereUniqueInput
    update: XOR<WhitelistIPUpdateWithoutUserInput, WhitelistIPUncheckedUpdateWithoutUserInput>
    create: XOR<WhitelistIPCreateWithoutUserInput, WhitelistIPUncheckedCreateWithoutUserInput>
  }

  export type WhitelistIPUpdateWithWhereUniqueWithoutUserInput = {
    where: WhitelistIPWhereUniqueInput
    data: XOR<WhitelistIPUpdateWithoutUserInput, WhitelistIPUncheckedUpdateWithoutUserInput>
  }

  export type WhitelistIPUpdateManyWithWhereWithoutUserInput = {
    where: WhitelistIPScalarWhereInput
    data: XOR<WhitelistIPUpdateManyMutationInput, WhitelistIPUncheckedUpdateManyWithoutUserInput>
  }

  export type WhitelistIPScalarWhereInput = {
    AND?: WhitelistIPScalarWhereInput | WhitelistIPScalarWhereInput[]
    OR?: WhitelistIPScalarWhereInput[]
    NOT?: WhitelistIPScalarWhereInput | WhitelistIPScalarWhereInput[]
    id?: StringFilter<"WhitelistIP"> | string
    ip?: StringFilter<"WhitelistIP"> | string
    userId?: StringFilter<"WhitelistIP"> | string
    createdAt?: DateTimeFilter<"WhitelistIP"> | Date | string
  }

  export type LoginSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginSessionWhereUniqueInput
    update: XOR<LoginSessionUpdateWithoutUserInput, LoginSessionUncheckedUpdateWithoutUserInput>
    create: XOR<LoginSessionCreateWithoutUserInput, LoginSessionUncheckedCreateWithoutUserInput>
  }

  export type LoginSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginSessionWhereUniqueInput
    data: XOR<LoginSessionUpdateWithoutUserInput, LoginSessionUncheckedUpdateWithoutUserInput>
  }

  export type LoginSessionUpdateManyWithWhereWithoutUserInput = {
    where: LoginSessionScalarWhereInput
    data: XOR<LoginSessionUpdateManyMutationInput, LoginSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type LoginSessionScalarWhereInput = {
    AND?: LoginSessionScalarWhereInput | LoginSessionScalarWhereInput[]
    OR?: LoginSessionScalarWhereInput[]
    NOT?: LoginSessionScalarWhereInput | LoginSessionScalarWhereInput[]
    id?: StringFilter<"LoginSession"> | string
    userId?: StringFilter<"LoginSession"> | string
    ip?: StringFilter<"LoginSession"> | string
    deviceId?: StringNullableFilter<"LoginSession"> | string | null
    token?: StringNullableFilter<"LoginSession"> | string | null
    expiresAt?: DateTimeFilter<"LoginSession"> | Date | string
    createdAt?: DateTimeFilter<"LoginSession"> | Date | string
  }

  export type LoginAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginAttemptWhereUniqueInput
    update: XOR<LoginAttemptUpdateWithoutUserInput, LoginAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<LoginAttemptCreateWithoutUserInput, LoginAttemptUncheckedCreateWithoutUserInput>
  }

  export type LoginAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginAttemptWhereUniqueInput
    data: XOR<LoginAttemptUpdateWithoutUserInput, LoginAttemptUncheckedUpdateWithoutUserInput>
  }

  export type LoginAttemptUpdateManyWithWhereWithoutUserInput = {
    where: LoginAttemptScalarWhereInput
    data: XOR<LoginAttemptUpdateManyMutationInput, LoginAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type LoginAttemptScalarWhereInput = {
    AND?: LoginAttemptScalarWhereInput | LoginAttemptScalarWhereInput[]
    OR?: LoginAttemptScalarWhereInput[]
    NOT?: LoginAttemptScalarWhereInput | LoginAttemptScalarWhereInput[]
    id?: StringFilter<"LoginAttempt"> | string
    userId?: StringNullableFilter<"LoginAttempt"> | string | null
    ip?: StringFilter<"LoginAttempt"> | string
    deviceId?: StringNullableFilter<"LoginAttempt"> | string | null
    isSuccess?: BoolFilter<"LoginAttempt"> | boolean
    createdAt?: DateTimeFilter<"LoginAttempt"> | Date | string
  }

  export type PasskeyUpsertWithWhereUniqueWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    update: XOR<PasskeyUpdateWithoutUserInput, PasskeyUncheckedUpdateWithoutUserInput>
    create: XOR<PasskeyCreateWithoutUserInput, PasskeyUncheckedCreateWithoutUserInput>
  }

  export type PasskeyUpdateWithWhereUniqueWithoutUserInput = {
    where: PasskeyWhereUniqueInput
    data: XOR<PasskeyUpdateWithoutUserInput, PasskeyUncheckedUpdateWithoutUserInput>
  }

  export type PasskeyUpdateManyWithWhereWithoutUserInput = {
    where: PasskeyScalarWhereInput
    data: XOR<PasskeyUpdateManyMutationInput, PasskeyUncheckedUpdateManyWithoutUserInput>
  }

  export type PasskeyScalarWhereInput = {
    AND?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
    OR?: PasskeyScalarWhereInput[]
    NOT?: PasskeyScalarWhereInput | PasskeyScalarWhereInput[]
    id?: StringFilter<"Passkey"> | string
    userId?: StringFilter<"Passkey"> | string
    passkeyId?: StringFilter<"Passkey"> | string
    publicKey?: StringFilter<"Passkey"> | string
    createdAt?: DateTimeFilter<"Passkey"> | Date | string
    updatedAt?: DateTimeFilter<"Passkey"> | Date | string
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whitelistIPs?: WhitelistIPCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whitelistIPs?: WhitelistIPUncheckedCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type LoginAttemptCreateWithoutDeviceInput = {
    id?: string
    ip: string
    isSuccess: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLoginAttemptsInput
  }

  export type LoginAttemptUncheckedCreateWithoutDeviceInput = {
    id?: string
    userId?: string | null
    ip: string
    isSuccess: boolean
    createdAt?: Date | string
  }

  export type LoginAttemptCreateOrConnectWithoutDeviceInput = {
    where: LoginAttemptWhereUniqueInput
    create: XOR<LoginAttemptCreateWithoutDeviceInput, LoginAttemptUncheckedCreateWithoutDeviceInput>
  }

  export type LoginAttemptCreateManyDeviceInputEnvelope = {
    data: LoginAttemptCreateManyDeviceInput | LoginAttemptCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type LoginSessionCreateWithoutDeviceInput = {
    id?: string
    ip: string
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLoginSessionsInput
  }

  export type LoginSessionUncheckedCreateWithoutDeviceInput = {
    id?: string
    userId: string
    ip: string
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginSessionCreateOrConnectWithoutDeviceInput = {
    where: LoginSessionWhereUniqueInput
    create: XOR<LoginSessionCreateWithoutDeviceInput, LoginSessionUncheckedCreateWithoutDeviceInput>
  }

  export type LoginSessionCreateManyDeviceInputEnvelope = {
    data: LoginSessionCreateManyDeviceInput | LoginSessionCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whitelistIPs?: WhitelistIPUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whitelistIPs?: WhitelistIPUncheckedUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoginAttemptUpsertWithWhereUniqueWithoutDeviceInput = {
    where: LoginAttemptWhereUniqueInput
    update: XOR<LoginAttemptUpdateWithoutDeviceInput, LoginAttemptUncheckedUpdateWithoutDeviceInput>
    create: XOR<LoginAttemptCreateWithoutDeviceInput, LoginAttemptUncheckedCreateWithoutDeviceInput>
  }

  export type LoginAttemptUpdateWithWhereUniqueWithoutDeviceInput = {
    where: LoginAttemptWhereUniqueInput
    data: XOR<LoginAttemptUpdateWithoutDeviceInput, LoginAttemptUncheckedUpdateWithoutDeviceInput>
  }

  export type LoginAttemptUpdateManyWithWhereWithoutDeviceInput = {
    where: LoginAttemptScalarWhereInput
    data: XOR<LoginAttemptUpdateManyMutationInput, LoginAttemptUncheckedUpdateManyWithoutDeviceInput>
  }

  export type LoginSessionUpsertWithWhereUniqueWithoutDeviceInput = {
    where: LoginSessionWhereUniqueInput
    update: XOR<LoginSessionUpdateWithoutDeviceInput, LoginSessionUncheckedUpdateWithoutDeviceInput>
    create: XOR<LoginSessionCreateWithoutDeviceInput, LoginSessionUncheckedCreateWithoutDeviceInput>
  }

  export type LoginSessionUpdateWithWhereUniqueWithoutDeviceInput = {
    where: LoginSessionWhereUniqueInput
    data: XOR<LoginSessionUpdateWithoutDeviceInput, LoginSessionUncheckedUpdateWithoutDeviceInput>
  }

  export type LoginSessionUpdateManyWithWhereWithoutDeviceInput = {
    where: LoginSessionScalarWhereInput
    data: XOR<LoginSessionUpdateManyMutationInput, LoginSessionUncheckedUpdateManyWithoutDeviceInput>
  }

  export type UserCreateWithoutWhitelistIPsInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWhitelistIPsInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWhitelistIPsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhitelistIPsInput, UserUncheckedCreateWithoutWhitelistIPsInput>
  }

  export type UserUpsertWithoutWhitelistIPsInput = {
    update: XOR<UserUpdateWithoutWhitelistIPsInput, UserUncheckedUpdateWithoutWhitelistIPsInput>
    create: XOR<UserCreateWithoutWhitelistIPsInput, UserUncheckedCreateWithoutWhitelistIPsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhitelistIPsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhitelistIPsInput, UserUncheckedUpdateWithoutWhitelistIPsInput>
  }

  export type UserUpdateWithoutWhitelistIPsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWhitelistIPsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLoginSessionsInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoginSessionsInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPUncheckedCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoginSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoginSessionsInput, UserUncheckedCreateWithoutLoginSessionsInput>
  }

  export type DeviceCreateWithoutLoginSessionsInput = {
    id?: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutLoginSessionsInput = {
    id?: string
    userId: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutLoginSessionsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutLoginSessionsInput, DeviceUncheckedCreateWithoutLoginSessionsInput>
  }

  export type UserUpsertWithoutLoginSessionsInput = {
    update: XOR<UserUpdateWithoutLoginSessionsInput, UserUncheckedUpdateWithoutLoginSessionsInput>
    create: XOR<UserCreateWithoutLoginSessionsInput, UserUncheckedCreateWithoutLoginSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoginSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoginSessionsInput, UserUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type UserUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUncheckedUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithoutLoginSessionsInput = {
    update: XOR<DeviceUpdateWithoutLoginSessionsInput, DeviceUncheckedUpdateWithoutLoginSessionsInput>
    create: XOR<DeviceCreateWithoutLoginSessionsInput, DeviceUncheckedCreateWithoutLoginSessionsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutLoginSessionsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutLoginSessionsInput, DeviceUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type DeviceUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type UserCreateWithoutLoginAttemptsInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionCreateNestedManyWithoutUserInput
    passkeys?: PasskeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoginAttemptsInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPUncheckedCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutUserInput
    passkeys?: PasskeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoginAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoginAttemptsInput, UserUncheckedCreateWithoutLoginAttemptsInput>
  }

  export type DeviceCreateWithoutLoginAttemptsInput = {
    id?: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
    loginSessions?: LoginSessionCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutLoginAttemptsInput = {
    id?: string
    userId: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutLoginAttemptsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutLoginAttemptsInput, DeviceUncheckedCreateWithoutLoginAttemptsInput>
  }

  export type UserUpsertWithoutLoginAttemptsInput = {
    update: XOR<UserUpdateWithoutLoginAttemptsInput, UserUncheckedUpdateWithoutLoginAttemptsInput>
    create: XOR<UserCreateWithoutLoginAttemptsInput, UserUncheckedCreateWithoutLoginAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoginAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoginAttemptsInput, UserUncheckedUpdateWithoutLoginAttemptsInput>
  }

  export type UserUpdateWithoutLoginAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoginAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUncheckedUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutUserNestedInput
    passkeys?: PasskeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithoutLoginAttemptsInput = {
    update: XOR<DeviceUpdateWithoutLoginAttemptsInput, DeviceUncheckedUpdateWithoutLoginAttemptsInput>
    create: XOR<DeviceCreateWithoutLoginAttemptsInput, DeviceUncheckedCreateWithoutLoginAttemptsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutLoginAttemptsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutLoginAttemptsInput, DeviceUncheckedUpdateWithoutLoginAttemptsInput>
  }

  export type DeviceUpdateWithoutLoginAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutLoginAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type UserCreateWithoutPasskeysInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasskeysInput = {
    id?: string
    email: string
    password?: string | null
    token?: string | null
    refreshToken?: string | null
    refreshTokenExpiry?: Date | string | null
    twoFactorVerified?: boolean
    twoFactorSecret?: string | null
    isVerified?: boolean
    providerId?: string | null
    providerType?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    whitelistIPs?: WhitelistIPUncheckedCreateNestedManyWithoutUserInput
    loginSessions?: LoginSessionUncheckedCreateNestedManyWithoutUserInput
    loginAttempts?: LoginAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasskeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
  }

  export type UserUpsertWithoutPasskeysInput = {
    update: XOR<UserUpdateWithoutPasskeysInput, UserUncheckedUpdateWithoutPasskeysInput>
    create: XOR<UserCreateWithoutPasskeysInput, UserUncheckedCreateWithoutPasskeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasskeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasskeysInput, UserUncheckedUpdateWithoutPasskeysInput>
  }

  export type UserUpdateWithoutPasskeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasskeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    whitelistIPs?: WhitelistIPUncheckedUpdateManyWithoutUserNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutUserNestedInput
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceCreateManyUserInput = {
    id?: string
    ip: string
    mac: string
    location: string
    isWhitelisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhitelistIPCreateManyUserInput = {
    id?: string
    ip: string
    createdAt?: Date | string
  }

  export type LoginSessionCreateManyUserInput = {
    id?: string
    ip: string
    deviceId?: string | null
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginAttemptCreateManyUserInput = {
    id?: string
    ip: string
    deviceId?: string | null
    isSuccess: boolean
    createdAt?: Date | string
  }

  export type PasskeyCreateManyUserInput = {
    id?: string
    passkeyId: string
    publicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempts?: LoginAttemptUpdateManyWithoutDeviceNestedInput
    loginSessions?: LoginSessionUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempts?: LoginAttemptUncheckedUpdateManyWithoutDeviceNestedInput
    loginSessions?: LoginSessionUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    mac?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isWhitelisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistIPUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistIPUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhitelistIPUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutLoginSessionsNestedInput
  }

  export type LoginSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutLoginAttemptsNestedInput
  }

  export type LoginAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasskeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passkeyId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptCreateManyDeviceInput = {
    id?: string
    userId?: string | null
    ip: string
    isSuccess: boolean
    createdAt?: Date | string
  }

  export type LoginSessionCreateManyDeviceInput = {
    id?: string
    userId: string
    ip: string
    token?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginAttemptUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLoginAttemptsNestedInput
  }

  export type LoginAttemptUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: StringFieldUpdateOperationsInput | string
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAttemptUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: StringFieldUpdateOperationsInput | string
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoginSessionsNestedInput
  }

  export type LoginSessionUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSessionUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
     */
    export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhitelistIPDefaultArgs instead
     */
    export type WhitelistIPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhitelistIPDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LoginSessionDefaultArgs instead
     */
    export type LoginSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LoginSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LoginAttemptDefaultArgs instead
     */
    export type LoginAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LoginAttemptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasskeyDefaultArgs instead
     */
    export type PasskeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasskeyDefaultArgs<ExtArgs>

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