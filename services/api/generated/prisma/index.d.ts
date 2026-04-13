
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UploadTicket
 * 
 */
export type UploadTicket = $Result.DefaultSelection<Prisma.$UploadTicketPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectConstraint
 * 
 */
export type ProjectConstraint = $Result.DefaultSelection<Prisma.$ProjectConstraintPayload>
/**
 * Model ProjectAsset
 * 
 */
export type ProjectAsset = $Result.DefaultSelection<Prisma.$ProjectAssetPayload>
/**
 * Model RenderTask
 * 
 */
export type RenderTask = $Result.DefaultSelection<Prisma.$RenderTaskPayload>
/**
 * Model RenderResult
 * 
 */
export type RenderResult = $Result.DefaultSelection<Prisma.$RenderResultPayload>
/**
 * Model ShareLink
 * 
 */
export type ShareLink = $Result.DefaultSelection<Prisma.$ShareLinkPayload>
/**
 * Model AiProvider
 * 
 */
export type AiProvider = $Result.DefaultSelection<Prisma.$AiProviderPayload>
/**
 * Model AiModel
 * 
 */
export type AiModel = $Result.DefaultSelection<Prisma.$AiModelPayload>
/**
 * Model PromptTemplate
 * 
 */
export type PromptTemplate = $Result.DefaultSelection<Prisma.$PromptTemplatePayload>
/**
 * Model StylePreset
 * 
 */
export type StylePreset = $Result.DefaultSelection<Prisma.$StylePresetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  draft: 'draft',
  rendered: 'rendered',
  archived: 'archived'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const RenderTaskStatus: {
  queued: 'queued',
  processing: 'processing',
  completed: 'completed',
  failed: 'failed'
};

export type RenderTaskStatus = (typeof RenderTaskStatus)[keyof typeof RenderTaskStatus]


export const ShareStatus: {
  active: 'active',
  disabled: 'disabled'
};

export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus]


export const AssetKind: {
  original: 'original',
  render: 'render',
  cover: 'cover',
  thumbnail: 'thumbnail'
};

export type AssetKind = (typeof AssetKind)[keyof typeof AssetKind]


export const ModelType: {
  text: 'text',
  image: 'image'
};

export type ModelType = (typeof ModelType)[keyof typeof ModelType]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type RenderTaskStatus = $Enums.RenderTaskStatus

export const RenderTaskStatus: typeof $Enums.RenderTaskStatus

export type ShareStatus = $Enums.ShareStatus

export const ShareStatus: typeof $Enums.ShareStatus

export type AssetKind = $Enums.AssetKind

export const AssetKind: typeof $Enums.AssetKind

export type ModelType = $Enums.ModelType

export const ModelType: typeof $Enums.ModelType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more UploadTickets
 * const uploadTickets = await prisma.uploadTicket.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more UploadTickets
   * const uploadTickets = await prisma.uploadTicket.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.uploadTicket`: Exposes CRUD operations for the **UploadTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadTickets
    * const uploadTickets = await prisma.uploadTicket.findMany()
    * ```
    */
  get uploadTicket(): Prisma.UploadTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectConstraint`: Exposes CRUD operations for the **ProjectConstraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectConstraints
    * const projectConstraints = await prisma.projectConstraint.findMany()
    * ```
    */
  get projectConstraint(): Prisma.ProjectConstraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectAsset`: Exposes CRUD operations for the **ProjectAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectAssets
    * const projectAssets = await prisma.projectAsset.findMany()
    * ```
    */
  get projectAsset(): Prisma.ProjectAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renderTask`: Exposes CRUD operations for the **RenderTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RenderTasks
    * const renderTasks = await prisma.renderTask.findMany()
    * ```
    */
  get renderTask(): Prisma.RenderTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renderResult`: Exposes CRUD operations for the **RenderResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RenderResults
    * const renderResults = await prisma.renderResult.findMany()
    * ```
    */
  get renderResult(): Prisma.RenderResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareLink`: Exposes CRUD operations for the **ShareLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareLinks
    * const shareLinks = await prisma.shareLink.findMany()
    * ```
    */
  get shareLink(): Prisma.ShareLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiProvider`: Exposes CRUD operations for the **AiProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiProviders
    * const aiProviders = await prisma.aiProvider.findMany()
    * ```
    */
  get aiProvider(): Prisma.AiProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiModel`: Exposes CRUD operations for the **AiModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiModels
    * const aiModels = await prisma.aiModel.findMany()
    * ```
    */
  get aiModel(): Prisma.AiModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptTemplate`: Exposes CRUD operations for the **PromptTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptTemplates
    * const promptTemplates = await prisma.promptTemplate.findMany()
    * ```
    */
  get promptTemplate(): Prisma.PromptTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stylePreset`: Exposes CRUD operations for the **StylePreset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StylePresets
    * const stylePresets = await prisma.stylePreset.findMany()
    * ```
    */
  get stylePreset(): Prisma.StylePresetDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UploadTicket: 'UploadTicket',
    User: 'User',
    AdminUser: 'AdminUser',
    Project: 'Project',
    ProjectConstraint: 'ProjectConstraint',
    ProjectAsset: 'ProjectAsset',
    RenderTask: 'RenderTask',
    RenderResult: 'RenderResult',
    ShareLink: 'ShareLink',
    AiProvider: 'AiProvider',
    AiModel: 'AiModel',
    PromptTemplate: 'PromptTemplate',
    StylePreset: 'StylePreset'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "uploadTicket" | "user" | "adminUser" | "project" | "projectConstraint" | "projectAsset" | "renderTask" | "renderResult" | "shareLink" | "aiProvider" | "aiModel" | "promptTemplate" | "stylePreset"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UploadTicket: {
        payload: Prisma.$UploadTicketPayload<ExtArgs>
        fields: Prisma.UploadTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>
          }
          findFirst: {
            args: Prisma.UploadTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>
          }
          findMany: {
            args: Prisma.UploadTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>[]
          }
          create: {
            args: Prisma.UploadTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>
          }
          createMany: {
            args: Prisma.UploadTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>[]
          }
          delete: {
            args: Prisma.UploadTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>
          }
          update: {
            args: Prisma.UploadTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>
          }
          deleteMany: {
            args: Prisma.UploadTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>[]
          }
          upsert: {
            args: Prisma.UploadTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadTicketPayload>
          }
          aggregate: {
            args: Prisma.UploadTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadTicket>
          }
          groupBy: {
            args: Prisma.UploadTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadTicketCountArgs<ExtArgs>
            result: $Utils.Optional<UploadTicketCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectConstraint: {
        payload: Prisma.$ProjectConstraintPayload<ExtArgs>
        fields: Prisma.ProjectConstraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectConstraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectConstraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>
          }
          findFirst: {
            args: Prisma.ProjectConstraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectConstraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>
          }
          findMany: {
            args: Prisma.ProjectConstraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>[]
          }
          create: {
            args: Prisma.ProjectConstraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>
          }
          createMany: {
            args: Prisma.ProjectConstraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectConstraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>[]
          }
          delete: {
            args: Prisma.ProjectConstraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>
          }
          update: {
            args: Prisma.ProjectConstraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>
          }
          deleteMany: {
            args: Prisma.ProjectConstraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectConstraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectConstraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>[]
          }
          upsert: {
            args: Prisma.ProjectConstraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectConstraintPayload>
          }
          aggregate: {
            args: Prisma.ProjectConstraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectConstraint>
          }
          groupBy: {
            args: Prisma.ProjectConstraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectConstraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectConstraintCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectConstraintCountAggregateOutputType> | number
          }
        }
      }
      ProjectAsset: {
        payload: Prisma.$ProjectAssetPayload<ExtArgs>
        fields: Prisma.ProjectAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          findFirst: {
            args: Prisma.ProjectAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          findMany: {
            args: Prisma.ProjectAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[]
          }
          create: {
            args: Prisma.ProjectAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          createMany: {
            args: Prisma.ProjectAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[]
          }
          delete: {
            args: Prisma.ProjectAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          update: {
            args: Prisma.ProjectAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          deleteMany: {
            args: Prisma.ProjectAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[]
          }
          upsert: {
            args: Prisma.ProjectAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAssetPayload>
          }
          aggregate: {
            args: Prisma.ProjectAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectAsset>
          }
          groupBy: {
            args: Prisma.ProjectAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectAssetCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectAssetCountAggregateOutputType> | number
          }
        }
      }
      RenderTask: {
        payload: Prisma.$RenderTaskPayload<ExtArgs>
        fields: Prisma.RenderTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenderTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenderTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>
          }
          findFirst: {
            args: Prisma.RenderTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenderTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>
          }
          findMany: {
            args: Prisma.RenderTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>[]
          }
          create: {
            args: Prisma.RenderTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>
          }
          createMany: {
            args: Prisma.RenderTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenderTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>[]
          }
          delete: {
            args: Prisma.RenderTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>
          }
          update: {
            args: Prisma.RenderTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>
          }
          deleteMany: {
            args: Prisma.RenderTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenderTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenderTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>[]
          }
          upsert: {
            args: Prisma.RenderTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderTaskPayload>
          }
          aggregate: {
            args: Prisma.RenderTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenderTask>
          }
          groupBy: {
            args: Prisma.RenderTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenderTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenderTaskCountArgs<ExtArgs>
            result: $Utils.Optional<RenderTaskCountAggregateOutputType> | number
          }
        }
      }
      RenderResult: {
        payload: Prisma.$RenderResultPayload<ExtArgs>
        fields: Prisma.RenderResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenderResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenderResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>
          }
          findFirst: {
            args: Prisma.RenderResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenderResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>
          }
          findMany: {
            args: Prisma.RenderResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>[]
          }
          create: {
            args: Prisma.RenderResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>
          }
          createMany: {
            args: Prisma.RenderResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenderResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>[]
          }
          delete: {
            args: Prisma.RenderResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>
          }
          update: {
            args: Prisma.RenderResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>
          }
          deleteMany: {
            args: Prisma.RenderResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenderResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenderResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>[]
          }
          upsert: {
            args: Prisma.RenderResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderResultPayload>
          }
          aggregate: {
            args: Prisma.RenderResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenderResult>
          }
          groupBy: {
            args: Prisma.RenderResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenderResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenderResultCountArgs<ExtArgs>
            result: $Utils.Optional<RenderResultCountAggregateOutputType> | number
          }
        }
      }
      ShareLink: {
        payload: Prisma.$ShareLinkPayload<ExtArgs>
        fields: Prisma.ShareLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findFirst: {
            args: Prisma.ShareLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findMany: {
            args: Prisma.ShareLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          create: {
            args: Prisma.ShareLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          createMany: {
            args: Prisma.ShareLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          delete: {
            args: Prisma.ShareLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          update: {
            args: Prisma.ShareLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          deleteMany: {
            args: Prisma.ShareLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          upsert: {
            args: Prisma.ShareLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          aggregate: {
            args: Prisma.ShareLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareLink>
          }
          groupBy: {
            args: Prisma.ShareLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkCountAggregateOutputType> | number
          }
        }
      }
      AiProvider: {
        payload: Prisma.$AiProviderPayload<ExtArgs>
        fields: Prisma.AiProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          findFirst: {
            args: Prisma.AiProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          findMany: {
            args: Prisma.AiProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>[]
          }
          create: {
            args: Prisma.AiProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          createMany: {
            args: Prisma.AiProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>[]
          }
          delete: {
            args: Prisma.AiProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          update: {
            args: Prisma.AiProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          deleteMany: {
            args: Prisma.AiProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>[]
          }
          upsert: {
            args: Prisma.AiProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          aggregate: {
            args: Prisma.AiProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiProvider>
          }
          groupBy: {
            args: Prisma.AiProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiProviderCountArgs<ExtArgs>
            result: $Utils.Optional<AiProviderCountAggregateOutputType> | number
          }
        }
      }
      AiModel: {
        payload: Prisma.$AiModelPayload<ExtArgs>
        fields: Prisma.AiModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          findFirst: {
            args: Prisma.AiModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          findMany: {
            args: Prisma.AiModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>[]
          }
          create: {
            args: Prisma.AiModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          createMany: {
            args: Prisma.AiModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>[]
          }
          delete: {
            args: Prisma.AiModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          update: {
            args: Prisma.AiModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          deleteMany: {
            args: Prisma.AiModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>[]
          }
          upsert: {
            args: Prisma.AiModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiModelPayload>
          }
          aggregate: {
            args: Prisma.AiModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiModel>
          }
          groupBy: {
            args: Prisma.AiModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiModelCountArgs<ExtArgs>
            result: $Utils.Optional<AiModelCountAggregateOutputType> | number
          }
        }
      }
      PromptTemplate: {
        payload: Prisma.$PromptTemplatePayload<ExtArgs>
        fields: Prisma.PromptTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findFirst: {
            args: Prisma.PromptTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findMany: {
            args: Prisma.PromptTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          create: {
            args: Prisma.PromptTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          createMany: {
            args: Prisma.PromptTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          delete: {
            args: Prisma.PromptTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          update: {
            args: Prisma.PromptTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PromptTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          upsert: {
            args: Prisma.PromptTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          aggregate: {
            args: Prisma.PromptTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptTemplate>
          }
          groupBy: {
            args: Prisma.PromptTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateCountAggregateOutputType> | number
          }
        }
      }
      StylePreset: {
        payload: Prisma.$StylePresetPayload<ExtArgs>
        fields: Prisma.StylePresetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StylePresetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StylePresetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>
          }
          findFirst: {
            args: Prisma.StylePresetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StylePresetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>
          }
          findMany: {
            args: Prisma.StylePresetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>[]
          }
          create: {
            args: Prisma.StylePresetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>
          }
          createMany: {
            args: Prisma.StylePresetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StylePresetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>[]
          }
          delete: {
            args: Prisma.StylePresetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>
          }
          update: {
            args: Prisma.StylePresetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>
          }
          deleteMany: {
            args: Prisma.StylePresetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StylePresetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StylePresetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>[]
          }
          upsert: {
            args: Prisma.StylePresetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylePresetPayload>
          }
          aggregate: {
            args: Prisma.StylePresetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStylePreset>
          }
          groupBy: {
            args: Prisma.StylePresetGroupByArgs<ExtArgs>
            result: $Utils.Optional<StylePresetGroupByOutputType>[]
          }
          count: {
            args: Prisma.StylePresetCountArgs<ExtArgs>
            result: $Utils.Optional<StylePresetCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    uploadTicket?: UploadTicketOmit
    user?: UserOmit
    adminUser?: AdminUserOmit
    project?: ProjectOmit
    projectConstraint?: ProjectConstraintOmit
    projectAsset?: ProjectAssetOmit
    renderTask?: RenderTaskOmit
    renderResult?: RenderResultOmit
    shareLink?: ShareLinkOmit
    aiProvider?: AiProviderOmit
    aiModel?: AiModelOmit
    promptTemplate?: PromptTemplateOmit
    stylePreset?: StylePresetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
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
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    assets: number
    renderTasks: number
    renderResults: number
    shareLinks: number
    constraints: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | ProjectCountOutputTypeCountAssetsArgs
    renderTasks?: boolean | ProjectCountOutputTypeCountRenderTasksArgs
    renderResults?: boolean | ProjectCountOutputTypeCountRenderResultsArgs
    shareLinks?: boolean | ProjectCountOutputTypeCountShareLinksArgs
    constraints?: boolean | ProjectCountOutputTypeCountConstraintsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRenderTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderTaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRenderResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderResultWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountShareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountConstraintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectConstraintWhereInput
  }


  /**
   * Count Type RenderTaskCountOutputType
   */

  export type RenderTaskCountOutputType = {
    results: number
  }

  export type RenderTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | RenderTaskCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * RenderTaskCountOutputType without action
   */
  export type RenderTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTaskCountOutputType
     */
    select?: RenderTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RenderTaskCountOutputType without action
   */
  export type RenderTaskCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderResultWhereInput
  }


  /**
   * Count Type AiProviderCountOutputType
   */

  export type AiProviderCountOutputType = {
    models: number
  }

  export type AiProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | AiProviderCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes
  /**
   * AiProviderCountOutputType without action
   */
  export type AiProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProviderCountOutputType
     */
    select?: AiProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiProviderCountOutputType without action
   */
  export type AiProviderCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiModelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UploadTicket
   */

  export type AggregateUploadTicket = {
    _count: UploadTicketCountAggregateOutputType | null
    _avg: UploadTicketAvgAggregateOutputType | null
    _sum: UploadTicketSumAggregateOutputType | null
    _min: UploadTicketMinAggregateOutputType | null
    _max: UploadTicketMaxAggregateOutputType | null
  }

  export type UploadTicketAvgAggregateOutputType = {
    fileSize: number | null
    expiresIn: number | null
  }

  export type UploadTicketSumAggregateOutputType = {
    fileSize: number | null
    expiresIn: number | null
  }

  export type UploadTicketMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    contentType: string | null
    fileSize: number | null
    objectKey: string | null
    publicUrl: string | null
    expiresIn: number | null
    status: string | null
    createdAt: Date | null
  }

  export type UploadTicketMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    contentType: string | null
    fileSize: number | null
    objectKey: string | null
    publicUrl: string | null
    expiresIn: number | null
    status: string | null
    createdAt: Date | null
  }

  export type UploadTicketCountAggregateOutputType = {
    id: number
    fileName: number
    contentType: number
    fileSize: number
    objectKey: number
    publicUrl: number
    expiresIn: number
    status: number
    createdAt: number
    _all: number
  }


  export type UploadTicketAvgAggregateInputType = {
    fileSize?: true
    expiresIn?: true
  }

  export type UploadTicketSumAggregateInputType = {
    fileSize?: true
    expiresIn?: true
  }

  export type UploadTicketMinAggregateInputType = {
    id?: true
    fileName?: true
    contentType?: true
    fileSize?: true
    objectKey?: true
    publicUrl?: true
    expiresIn?: true
    status?: true
    createdAt?: true
  }

  export type UploadTicketMaxAggregateInputType = {
    id?: true
    fileName?: true
    contentType?: true
    fileSize?: true
    objectKey?: true
    publicUrl?: true
    expiresIn?: true
    status?: true
    createdAt?: true
  }

  export type UploadTicketCountAggregateInputType = {
    id?: true
    fileName?: true
    contentType?: true
    fileSize?: true
    objectKey?: true
    publicUrl?: true
    expiresIn?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UploadTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadTicket to aggregate.
     */
    where?: UploadTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTickets to fetch.
     */
    orderBy?: UploadTicketOrderByWithRelationInput | UploadTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadTickets
    **/
    _count?: true | UploadTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadTicketMaxAggregateInputType
  }

  export type GetUploadTicketAggregateType<T extends UploadTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadTicket[P]>
      : GetScalarType<T[P], AggregateUploadTicket[P]>
  }




  export type UploadTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadTicketWhereInput
    orderBy?: UploadTicketOrderByWithAggregationInput | UploadTicketOrderByWithAggregationInput[]
    by: UploadTicketScalarFieldEnum[] | UploadTicketScalarFieldEnum
    having?: UploadTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadTicketCountAggregateInputType | true
    _avg?: UploadTicketAvgAggregateInputType
    _sum?: UploadTicketSumAggregateInputType
    _min?: UploadTicketMinAggregateInputType
    _max?: UploadTicketMaxAggregateInputType
  }

  export type UploadTicketGroupByOutputType = {
    id: string
    fileName: string
    contentType: string
    fileSize: number
    objectKey: string
    publicUrl: string
    expiresIn: number
    status: string
    createdAt: Date
    _count: UploadTicketCountAggregateOutputType | null
    _avg: UploadTicketAvgAggregateOutputType | null
    _sum: UploadTicketSumAggregateOutputType | null
    _min: UploadTicketMinAggregateOutputType | null
    _max: UploadTicketMaxAggregateOutputType | null
  }

  type GetUploadTicketGroupByPayload<T extends UploadTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadTicketGroupByOutputType[P]>
            : GetScalarType<T[P], UploadTicketGroupByOutputType[P]>
        }
      >
    >


  export type UploadTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    contentType?: boolean
    fileSize?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    expiresIn?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uploadTicket"]>

  export type UploadTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    contentType?: boolean
    fileSize?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    expiresIn?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uploadTicket"]>

  export type UploadTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    contentType?: boolean
    fileSize?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    expiresIn?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uploadTicket"]>

  export type UploadTicketSelectScalar = {
    id?: boolean
    fileName?: boolean
    contentType?: boolean
    fileSize?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    expiresIn?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UploadTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "contentType" | "fileSize" | "objectKey" | "publicUrl" | "expiresIn" | "status" | "createdAt", ExtArgs["result"]["uploadTicket"]>

  export type $UploadTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      contentType: string
      fileSize: number
      objectKey: string
      publicUrl: string
      expiresIn: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["uploadTicket"]>
    composites: {}
  }

  type UploadTicketGetPayload<S extends boolean | null | undefined | UploadTicketDefaultArgs> = $Result.GetResult<Prisma.$UploadTicketPayload, S>

  type UploadTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadTicketCountAggregateInputType | true
    }

  export interface UploadTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadTicket'], meta: { name: 'UploadTicket' } }
    /**
     * Find zero or one UploadTicket that matches the filter.
     * @param {UploadTicketFindUniqueArgs} args - Arguments to find a UploadTicket
     * @example
     * // Get one UploadTicket
     * const uploadTicket = await prisma.uploadTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadTicketFindUniqueArgs>(args: SelectSubset<T, UploadTicketFindUniqueArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadTicketFindUniqueOrThrowArgs} args - Arguments to find a UploadTicket
     * @example
     * // Get one UploadTicket
     * const uploadTicket = await prisma.uploadTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketFindFirstArgs} args - Arguments to find a UploadTicket
     * @example
     * // Get one UploadTicket
     * const uploadTicket = await prisma.uploadTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadTicketFindFirstArgs>(args?: SelectSubset<T, UploadTicketFindFirstArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketFindFirstOrThrowArgs} args - Arguments to find a UploadTicket
     * @example
     * // Get one UploadTicket
     * const uploadTicket = await prisma.uploadTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadTickets
     * const uploadTickets = await prisma.uploadTicket.findMany()
     * 
     * // Get first 10 UploadTickets
     * const uploadTickets = await prisma.uploadTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadTicketWithIdOnly = await prisma.uploadTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadTicketFindManyArgs>(args?: SelectSubset<T, UploadTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadTicket.
     * @param {UploadTicketCreateArgs} args - Arguments to create a UploadTicket.
     * @example
     * // Create one UploadTicket
     * const UploadTicket = await prisma.uploadTicket.create({
     *   data: {
     *     // ... data to create a UploadTicket
     *   }
     * })
     * 
     */
    create<T extends UploadTicketCreateArgs>(args: SelectSubset<T, UploadTicketCreateArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadTickets.
     * @param {UploadTicketCreateManyArgs} args - Arguments to create many UploadTickets.
     * @example
     * // Create many UploadTickets
     * const uploadTicket = await prisma.uploadTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadTicketCreateManyArgs>(args?: SelectSubset<T, UploadTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadTickets and returns the data saved in the database.
     * @param {UploadTicketCreateManyAndReturnArgs} args - Arguments to create many UploadTickets.
     * @example
     * // Create many UploadTickets
     * const uploadTicket = await prisma.uploadTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadTickets and only return the `id`
     * const uploadTicketWithIdOnly = await prisma.uploadTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadTicket.
     * @param {UploadTicketDeleteArgs} args - Arguments to delete one UploadTicket.
     * @example
     * // Delete one UploadTicket
     * const UploadTicket = await prisma.uploadTicket.delete({
     *   where: {
     *     // ... filter to delete one UploadTicket
     *   }
     * })
     * 
     */
    delete<T extends UploadTicketDeleteArgs>(args: SelectSubset<T, UploadTicketDeleteArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadTicket.
     * @param {UploadTicketUpdateArgs} args - Arguments to update one UploadTicket.
     * @example
     * // Update one UploadTicket
     * const uploadTicket = await prisma.uploadTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadTicketUpdateArgs>(args: SelectSubset<T, UploadTicketUpdateArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadTickets.
     * @param {UploadTicketDeleteManyArgs} args - Arguments to filter UploadTickets to delete.
     * @example
     * // Delete a few UploadTickets
     * const { count } = await prisma.uploadTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadTicketDeleteManyArgs>(args?: SelectSubset<T, UploadTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadTickets
     * const uploadTicket = await prisma.uploadTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadTicketUpdateManyArgs>(args: SelectSubset<T, UploadTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadTickets and returns the data updated in the database.
     * @param {UploadTicketUpdateManyAndReturnArgs} args - Arguments to update many UploadTickets.
     * @example
     * // Update many UploadTickets
     * const uploadTicket = await prisma.uploadTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadTickets and only return the `id`
     * const uploadTicketWithIdOnly = await prisma.uploadTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadTicket.
     * @param {UploadTicketUpsertArgs} args - Arguments to update or create a UploadTicket.
     * @example
     * // Update or create a UploadTicket
     * const uploadTicket = await prisma.uploadTicket.upsert({
     *   create: {
     *     // ... data to create a UploadTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadTicket we want to update
     *   }
     * })
     */
    upsert<T extends UploadTicketUpsertArgs>(args: SelectSubset<T, UploadTicketUpsertArgs<ExtArgs>>): Prisma__UploadTicketClient<$Result.GetResult<Prisma.$UploadTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketCountArgs} args - Arguments to filter UploadTickets to count.
     * @example
     * // Count the number of UploadTickets
     * const count = await prisma.uploadTicket.count({
     *   where: {
     *     // ... the filter for the UploadTickets we want to count
     *   }
     * })
    **/
    count<T extends UploadTicketCountArgs>(
      args?: Subset<T, UploadTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UploadTicketAggregateArgs>(args: Subset<T, UploadTicketAggregateArgs>): Prisma.PrismaPromise<GetUploadTicketAggregateType<T>>

    /**
     * Group by UploadTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadTicketGroupByArgs} args - Group by arguments.
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
      T extends UploadTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadTicketGroupByArgs['orderBy'] }
        : { orderBy?: UploadTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UploadTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadTicket model
   */
  readonly fields: UploadTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UploadTicket model
   */
  interface UploadTicketFieldRefs {
    readonly id: FieldRef<"UploadTicket", 'String'>
    readonly fileName: FieldRef<"UploadTicket", 'String'>
    readonly contentType: FieldRef<"UploadTicket", 'String'>
    readonly fileSize: FieldRef<"UploadTicket", 'Int'>
    readonly objectKey: FieldRef<"UploadTicket", 'String'>
    readonly publicUrl: FieldRef<"UploadTicket", 'String'>
    readonly expiresIn: FieldRef<"UploadTicket", 'Int'>
    readonly status: FieldRef<"UploadTicket", 'String'>
    readonly createdAt: FieldRef<"UploadTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadTicket findUnique
   */
  export type UploadTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * Filter, which UploadTicket to fetch.
     */
    where: UploadTicketWhereUniqueInput
  }

  /**
   * UploadTicket findUniqueOrThrow
   */
  export type UploadTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * Filter, which UploadTicket to fetch.
     */
    where: UploadTicketWhereUniqueInput
  }

  /**
   * UploadTicket findFirst
   */
  export type UploadTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * Filter, which UploadTicket to fetch.
     */
    where?: UploadTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTickets to fetch.
     */
    orderBy?: UploadTicketOrderByWithRelationInput | UploadTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadTickets.
     */
    cursor?: UploadTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadTickets.
     */
    distinct?: UploadTicketScalarFieldEnum | UploadTicketScalarFieldEnum[]
  }

  /**
   * UploadTicket findFirstOrThrow
   */
  export type UploadTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * Filter, which UploadTicket to fetch.
     */
    where?: UploadTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTickets to fetch.
     */
    orderBy?: UploadTicketOrderByWithRelationInput | UploadTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadTickets.
     */
    cursor?: UploadTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadTickets.
     */
    distinct?: UploadTicketScalarFieldEnum | UploadTicketScalarFieldEnum[]
  }

  /**
   * UploadTicket findMany
   */
  export type UploadTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * Filter, which UploadTickets to fetch.
     */
    where?: UploadTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadTickets to fetch.
     */
    orderBy?: UploadTicketOrderByWithRelationInput | UploadTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadTickets.
     */
    cursor?: UploadTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadTickets.
     */
    distinct?: UploadTicketScalarFieldEnum | UploadTicketScalarFieldEnum[]
  }

  /**
   * UploadTicket create
   */
  export type UploadTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * The data needed to create a UploadTicket.
     */
    data: XOR<UploadTicketCreateInput, UploadTicketUncheckedCreateInput>
  }

  /**
   * UploadTicket createMany
   */
  export type UploadTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadTickets.
     */
    data: UploadTicketCreateManyInput | UploadTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadTicket createManyAndReturn
   */
  export type UploadTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * The data used to create many UploadTickets.
     */
    data: UploadTicketCreateManyInput | UploadTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadTicket update
   */
  export type UploadTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * The data needed to update a UploadTicket.
     */
    data: XOR<UploadTicketUpdateInput, UploadTicketUncheckedUpdateInput>
    /**
     * Choose, which UploadTicket to update.
     */
    where: UploadTicketWhereUniqueInput
  }

  /**
   * UploadTicket updateMany
   */
  export type UploadTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadTickets.
     */
    data: XOR<UploadTicketUpdateManyMutationInput, UploadTicketUncheckedUpdateManyInput>
    /**
     * Filter which UploadTickets to update
     */
    where?: UploadTicketWhereInput
    /**
     * Limit how many UploadTickets to update.
     */
    limit?: number
  }

  /**
   * UploadTicket updateManyAndReturn
   */
  export type UploadTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * The data used to update UploadTickets.
     */
    data: XOR<UploadTicketUpdateManyMutationInput, UploadTicketUncheckedUpdateManyInput>
    /**
     * Filter which UploadTickets to update
     */
    where?: UploadTicketWhereInput
    /**
     * Limit how many UploadTickets to update.
     */
    limit?: number
  }

  /**
   * UploadTicket upsert
   */
  export type UploadTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * The filter to search for the UploadTicket to update in case it exists.
     */
    where: UploadTicketWhereUniqueInput
    /**
     * In case the UploadTicket found by the `where` argument doesn't exist, create a new UploadTicket with this data.
     */
    create: XOR<UploadTicketCreateInput, UploadTicketUncheckedCreateInput>
    /**
     * In case the UploadTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadTicketUpdateInput, UploadTicketUncheckedUpdateInput>
  }

  /**
   * UploadTicket delete
   */
  export type UploadTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
    /**
     * Filter which UploadTicket to delete.
     */
    where: UploadTicketWhereUniqueInput
  }

  /**
   * UploadTicket deleteMany
   */
  export type UploadTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadTickets to delete
     */
    where?: UploadTicketWhereInput
    /**
     * Limit how many UploadTickets to delete.
     */
    limit?: number
  }

  /**
   * UploadTicket without action
   */
  export type UploadTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadTicket
     */
    select?: UploadTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadTicket
     */
    omit?: UploadTicketOmit<ExtArgs> | null
  }


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
    phone: string | null
    nickname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    nickname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    nickname: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    nickname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    nickname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    nickname?: true
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
    phone: string | null
    nickname: string | null
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
    phone?: boolean
    nickname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    nickname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    nickname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    nickname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "nickname" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string | null
      nickname: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly phone: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    roomType: string | null
    styleCode: string | null
    budgetLevel: string | null
    status: $Enums.ProjectStatus | null
    originalImageUrl: string | null
    latestRenderTaskId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    roomType: string | null
    styleCode: string | null
    budgetLevel: string | null
    status: $Enums.ProjectStatus | null
    originalImageUrl: string | null
    latestRenderTaskId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    roomType: number
    styleCode: number
    budgetLevel: number
    status: number
    originalImageUrl: number
    latestRenderTaskId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    roomType?: true
    styleCode?: true
    budgetLevel?: true
    status?: true
    originalImageUrl?: true
    latestRenderTaskId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    roomType?: true
    styleCode?: true
    budgetLevel?: true
    status?: true
    originalImageUrl?: true
    latestRenderTaskId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    roomType?: true
    styleCode?: true
    budgetLevel?: true
    status?: true
    originalImageUrl?: true
    latestRenderTaskId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    roomType?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    status?: boolean
    originalImageUrl?: boolean
    latestRenderTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
    assets?: boolean | Project$assetsArgs<ExtArgs>
    renderTasks?: boolean | Project$renderTasksArgs<ExtArgs>
    renderResults?: boolean | Project$renderResultsArgs<ExtArgs>
    shareLinks?: boolean | Project$shareLinksArgs<ExtArgs>
    constraints?: boolean | Project$constraintsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    roomType?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    status?: boolean
    originalImageUrl?: boolean
    latestRenderTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    roomType?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    status?: boolean
    originalImageUrl?: boolean
    latestRenderTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Project$userArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    roomType?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    status?: boolean
    originalImageUrl?: boolean
    latestRenderTaskId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "roomType" | "styleCode" | "budgetLevel" | "status" | "originalImageUrl" | "latestRenderTaskId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
    assets?: boolean | Project$assetsArgs<ExtArgs>
    renderTasks?: boolean | Project$renderTasksArgs<ExtArgs>
    renderResults?: boolean | Project$renderResultsArgs<ExtArgs>
    shareLinks?: boolean | Project$shareLinksArgs<ExtArgs>
    constraints?: boolean | Project$constraintsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Project$userArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      assets: Prisma.$ProjectAssetPayload<ExtArgs>[]
      renderTasks: Prisma.$RenderTaskPayload<ExtArgs>[]
      renderResults: Prisma.$RenderResultPayload<ExtArgs>[]
      shareLinks: Prisma.$ShareLinkPayload<ExtArgs>[]
      constraints: Prisma.$ProjectConstraintPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      roomType: string
      styleCode: string
      budgetLevel: string
      status: $Enums.ProjectStatus
      originalImageUrl: string
      latestRenderTaskId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Project$userArgs<ExtArgs> = {}>(args?: Subset<T, Project$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assets<T extends Project$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Project$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    renderTasks<T extends Project$renderTasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$renderTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    renderResults<T extends Project$renderResultsArgs<ExtArgs> = {}>(args?: Subset<T, Project$renderResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shareLinks<T extends Project$shareLinksArgs<ExtArgs> = {}>(args?: Subset<T, Project$shareLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    constraints<T extends Project$constraintsArgs<ExtArgs> = {}>(args?: Subset<T, Project$constraintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly roomType: FieldRef<"Project", 'String'>
    readonly styleCode: FieldRef<"Project", 'String'>
    readonly budgetLevel: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly originalImageUrl: FieldRef<"Project", 'String'>
    readonly latestRenderTaskId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.user
   */
  export type Project$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Project.assets
   */
  export type Project$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    where?: ProjectAssetWhereInput
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    cursor?: ProjectAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
  }

  /**
   * Project.renderTasks
   */
  export type Project$renderTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    where?: RenderTaskWhereInput
    orderBy?: RenderTaskOrderByWithRelationInput | RenderTaskOrderByWithRelationInput[]
    cursor?: RenderTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenderTaskScalarFieldEnum | RenderTaskScalarFieldEnum[]
  }

  /**
   * Project.renderResults
   */
  export type Project$renderResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    where?: RenderResultWhereInput
    orderBy?: RenderResultOrderByWithRelationInput | RenderResultOrderByWithRelationInput[]
    cursor?: RenderResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenderResultScalarFieldEnum | RenderResultScalarFieldEnum[]
  }

  /**
   * Project.shareLinks
   */
  export type Project$shareLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    cursor?: ShareLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * Project.constraints
   */
  export type Project$constraintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    where?: ProjectConstraintWhereInput
    orderBy?: ProjectConstraintOrderByWithRelationInput | ProjectConstraintOrderByWithRelationInput[]
    cursor?: ProjectConstraintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectConstraintScalarFieldEnum | ProjectConstraintScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectConstraint
   */

  export type AggregateProjectConstraint = {
    _count: ProjectConstraintCountAggregateOutputType | null
    _min: ProjectConstraintMinAggregateOutputType | null
    _max: ProjectConstraintMaxAggregateOutputType | null
  }

  export type ProjectConstraintMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    value: string | null
    createdAt: Date | null
  }

  export type ProjectConstraintMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    value: string | null
    createdAt: Date | null
  }

  export type ProjectConstraintCountAggregateOutputType = {
    id: number
    projectId: number
    value: number
    createdAt: number
    _all: number
  }


  export type ProjectConstraintMinAggregateInputType = {
    id?: true
    projectId?: true
    value?: true
    createdAt?: true
  }

  export type ProjectConstraintMaxAggregateInputType = {
    id?: true
    projectId?: true
    value?: true
    createdAt?: true
  }

  export type ProjectConstraintCountAggregateInputType = {
    id?: true
    projectId?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectConstraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectConstraint to aggregate.
     */
    where?: ProjectConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectConstraints to fetch.
     */
    orderBy?: ProjectConstraintOrderByWithRelationInput | ProjectConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectConstraints
    **/
    _count?: true | ProjectConstraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectConstraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectConstraintMaxAggregateInputType
  }

  export type GetProjectConstraintAggregateType<T extends ProjectConstraintAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectConstraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectConstraint[P]>
      : GetScalarType<T[P], AggregateProjectConstraint[P]>
  }




  export type ProjectConstraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectConstraintWhereInput
    orderBy?: ProjectConstraintOrderByWithAggregationInput | ProjectConstraintOrderByWithAggregationInput[]
    by: ProjectConstraintScalarFieldEnum[] | ProjectConstraintScalarFieldEnum
    having?: ProjectConstraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectConstraintCountAggregateInputType | true
    _min?: ProjectConstraintMinAggregateInputType
    _max?: ProjectConstraintMaxAggregateInputType
  }

  export type ProjectConstraintGroupByOutputType = {
    id: string
    projectId: string
    value: string
    createdAt: Date
    _count: ProjectConstraintCountAggregateOutputType | null
    _min: ProjectConstraintMinAggregateOutputType | null
    _max: ProjectConstraintMaxAggregateOutputType | null
  }

  type GetProjectConstraintGroupByPayload<T extends ProjectConstraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectConstraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectConstraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectConstraintGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectConstraintGroupByOutputType[P]>
        }
      >
    >


  export type ProjectConstraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    value?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectConstraint"]>

  export type ProjectConstraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    value?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectConstraint"]>

  export type ProjectConstraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    value?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectConstraint"]>

  export type ProjectConstraintSelectScalar = {
    id?: boolean
    projectId?: boolean
    value?: boolean
    createdAt?: boolean
  }

  export type ProjectConstraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "value" | "createdAt", ExtArgs["result"]["projectConstraint"]>
  export type ProjectConstraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectConstraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectConstraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectConstraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectConstraint"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      value: string
      createdAt: Date
    }, ExtArgs["result"]["projectConstraint"]>
    composites: {}
  }

  type ProjectConstraintGetPayload<S extends boolean | null | undefined | ProjectConstraintDefaultArgs> = $Result.GetResult<Prisma.$ProjectConstraintPayload, S>

  type ProjectConstraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectConstraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectConstraintCountAggregateInputType | true
    }

  export interface ProjectConstraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectConstraint'], meta: { name: 'ProjectConstraint' } }
    /**
     * Find zero or one ProjectConstraint that matches the filter.
     * @param {ProjectConstraintFindUniqueArgs} args - Arguments to find a ProjectConstraint
     * @example
     * // Get one ProjectConstraint
     * const projectConstraint = await prisma.projectConstraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectConstraintFindUniqueArgs>(args: SelectSubset<T, ProjectConstraintFindUniqueArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectConstraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectConstraintFindUniqueOrThrowArgs} args - Arguments to find a ProjectConstraint
     * @example
     * // Get one ProjectConstraint
     * const projectConstraint = await prisma.projectConstraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectConstraintFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectConstraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectConstraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintFindFirstArgs} args - Arguments to find a ProjectConstraint
     * @example
     * // Get one ProjectConstraint
     * const projectConstraint = await prisma.projectConstraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectConstraintFindFirstArgs>(args?: SelectSubset<T, ProjectConstraintFindFirstArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectConstraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintFindFirstOrThrowArgs} args - Arguments to find a ProjectConstraint
     * @example
     * // Get one ProjectConstraint
     * const projectConstraint = await prisma.projectConstraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectConstraintFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectConstraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectConstraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectConstraints
     * const projectConstraints = await prisma.projectConstraint.findMany()
     * 
     * // Get first 10 ProjectConstraints
     * const projectConstraints = await prisma.projectConstraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectConstraintWithIdOnly = await prisma.projectConstraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectConstraintFindManyArgs>(args?: SelectSubset<T, ProjectConstraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectConstraint.
     * @param {ProjectConstraintCreateArgs} args - Arguments to create a ProjectConstraint.
     * @example
     * // Create one ProjectConstraint
     * const ProjectConstraint = await prisma.projectConstraint.create({
     *   data: {
     *     // ... data to create a ProjectConstraint
     *   }
     * })
     * 
     */
    create<T extends ProjectConstraintCreateArgs>(args: SelectSubset<T, ProjectConstraintCreateArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectConstraints.
     * @param {ProjectConstraintCreateManyArgs} args - Arguments to create many ProjectConstraints.
     * @example
     * // Create many ProjectConstraints
     * const projectConstraint = await prisma.projectConstraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectConstraintCreateManyArgs>(args?: SelectSubset<T, ProjectConstraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectConstraints and returns the data saved in the database.
     * @param {ProjectConstraintCreateManyAndReturnArgs} args - Arguments to create many ProjectConstraints.
     * @example
     * // Create many ProjectConstraints
     * const projectConstraint = await prisma.projectConstraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectConstraints and only return the `id`
     * const projectConstraintWithIdOnly = await prisma.projectConstraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectConstraintCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectConstraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectConstraint.
     * @param {ProjectConstraintDeleteArgs} args - Arguments to delete one ProjectConstraint.
     * @example
     * // Delete one ProjectConstraint
     * const ProjectConstraint = await prisma.projectConstraint.delete({
     *   where: {
     *     // ... filter to delete one ProjectConstraint
     *   }
     * })
     * 
     */
    delete<T extends ProjectConstraintDeleteArgs>(args: SelectSubset<T, ProjectConstraintDeleteArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectConstraint.
     * @param {ProjectConstraintUpdateArgs} args - Arguments to update one ProjectConstraint.
     * @example
     * // Update one ProjectConstraint
     * const projectConstraint = await prisma.projectConstraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectConstraintUpdateArgs>(args: SelectSubset<T, ProjectConstraintUpdateArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectConstraints.
     * @param {ProjectConstraintDeleteManyArgs} args - Arguments to filter ProjectConstraints to delete.
     * @example
     * // Delete a few ProjectConstraints
     * const { count } = await prisma.projectConstraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectConstraintDeleteManyArgs>(args?: SelectSubset<T, ProjectConstraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectConstraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectConstraints
     * const projectConstraint = await prisma.projectConstraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectConstraintUpdateManyArgs>(args: SelectSubset<T, ProjectConstraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectConstraints and returns the data updated in the database.
     * @param {ProjectConstraintUpdateManyAndReturnArgs} args - Arguments to update many ProjectConstraints.
     * @example
     * // Update many ProjectConstraints
     * const projectConstraint = await prisma.projectConstraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectConstraints and only return the `id`
     * const projectConstraintWithIdOnly = await prisma.projectConstraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectConstraintUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectConstraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectConstraint.
     * @param {ProjectConstraintUpsertArgs} args - Arguments to update or create a ProjectConstraint.
     * @example
     * // Update or create a ProjectConstraint
     * const projectConstraint = await prisma.projectConstraint.upsert({
     *   create: {
     *     // ... data to create a ProjectConstraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectConstraint we want to update
     *   }
     * })
     */
    upsert<T extends ProjectConstraintUpsertArgs>(args: SelectSubset<T, ProjectConstraintUpsertArgs<ExtArgs>>): Prisma__ProjectConstraintClient<$Result.GetResult<Prisma.$ProjectConstraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectConstraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintCountArgs} args - Arguments to filter ProjectConstraints to count.
     * @example
     * // Count the number of ProjectConstraints
     * const count = await prisma.projectConstraint.count({
     *   where: {
     *     // ... the filter for the ProjectConstraints we want to count
     *   }
     * })
    **/
    count<T extends ProjectConstraintCountArgs>(
      args?: Subset<T, ProjectConstraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectConstraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectConstraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectConstraintAggregateArgs>(args: Subset<T, ProjectConstraintAggregateArgs>): Prisma.PrismaPromise<GetProjectConstraintAggregateType<T>>

    /**
     * Group by ProjectConstraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectConstraintGroupByArgs} args - Group by arguments.
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
      T extends ProjectConstraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectConstraintGroupByArgs['orderBy'] }
        : { orderBy?: ProjectConstraintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectConstraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectConstraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectConstraint model
   */
  readonly fields: ProjectConstraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectConstraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectConstraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectConstraint model
   */
  interface ProjectConstraintFieldRefs {
    readonly id: FieldRef<"ProjectConstraint", 'String'>
    readonly projectId: FieldRef<"ProjectConstraint", 'String'>
    readonly value: FieldRef<"ProjectConstraint", 'String'>
    readonly createdAt: FieldRef<"ProjectConstraint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectConstraint findUnique
   */
  export type ProjectConstraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * Filter, which ProjectConstraint to fetch.
     */
    where: ProjectConstraintWhereUniqueInput
  }

  /**
   * ProjectConstraint findUniqueOrThrow
   */
  export type ProjectConstraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * Filter, which ProjectConstraint to fetch.
     */
    where: ProjectConstraintWhereUniqueInput
  }

  /**
   * ProjectConstraint findFirst
   */
  export type ProjectConstraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * Filter, which ProjectConstraint to fetch.
     */
    where?: ProjectConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectConstraints to fetch.
     */
    orderBy?: ProjectConstraintOrderByWithRelationInput | ProjectConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectConstraints.
     */
    cursor?: ProjectConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectConstraints.
     */
    distinct?: ProjectConstraintScalarFieldEnum | ProjectConstraintScalarFieldEnum[]
  }

  /**
   * ProjectConstraint findFirstOrThrow
   */
  export type ProjectConstraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * Filter, which ProjectConstraint to fetch.
     */
    where?: ProjectConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectConstraints to fetch.
     */
    orderBy?: ProjectConstraintOrderByWithRelationInput | ProjectConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectConstraints.
     */
    cursor?: ProjectConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectConstraints.
     */
    distinct?: ProjectConstraintScalarFieldEnum | ProjectConstraintScalarFieldEnum[]
  }

  /**
   * ProjectConstraint findMany
   */
  export type ProjectConstraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * Filter, which ProjectConstraints to fetch.
     */
    where?: ProjectConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectConstraints to fetch.
     */
    orderBy?: ProjectConstraintOrderByWithRelationInput | ProjectConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectConstraints.
     */
    cursor?: ProjectConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectConstraints.
     */
    distinct?: ProjectConstraintScalarFieldEnum | ProjectConstraintScalarFieldEnum[]
  }

  /**
   * ProjectConstraint create
   */
  export type ProjectConstraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectConstraint.
     */
    data: XOR<ProjectConstraintCreateInput, ProjectConstraintUncheckedCreateInput>
  }

  /**
   * ProjectConstraint createMany
   */
  export type ProjectConstraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectConstraints.
     */
    data: ProjectConstraintCreateManyInput | ProjectConstraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectConstraint createManyAndReturn
   */
  export type ProjectConstraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectConstraints.
     */
    data: ProjectConstraintCreateManyInput | ProjectConstraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectConstraint update
   */
  export type ProjectConstraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectConstraint.
     */
    data: XOR<ProjectConstraintUpdateInput, ProjectConstraintUncheckedUpdateInput>
    /**
     * Choose, which ProjectConstraint to update.
     */
    where: ProjectConstraintWhereUniqueInput
  }

  /**
   * ProjectConstraint updateMany
   */
  export type ProjectConstraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectConstraints.
     */
    data: XOR<ProjectConstraintUpdateManyMutationInput, ProjectConstraintUncheckedUpdateManyInput>
    /**
     * Filter which ProjectConstraints to update
     */
    where?: ProjectConstraintWhereInput
    /**
     * Limit how many ProjectConstraints to update.
     */
    limit?: number
  }

  /**
   * ProjectConstraint updateManyAndReturn
   */
  export type ProjectConstraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * The data used to update ProjectConstraints.
     */
    data: XOR<ProjectConstraintUpdateManyMutationInput, ProjectConstraintUncheckedUpdateManyInput>
    /**
     * Filter which ProjectConstraints to update
     */
    where?: ProjectConstraintWhereInput
    /**
     * Limit how many ProjectConstraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectConstraint upsert
   */
  export type ProjectConstraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectConstraint to update in case it exists.
     */
    where: ProjectConstraintWhereUniqueInput
    /**
     * In case the ProjectConstraint found by the `where` argument doesn't exist, create a new ProjectConstraint with this data.
     */
    create: XOR<ProjectConstraintCreateInput, ProjectConstraintUncheckedCreateInput>
    /**
     * In case the ProjectConstraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectConstraintUpdateInput, ProjectConstraintUncheckedUpdateInput>
  }

  /**
   * ProjectConstraint delete
   */
  export type ProjectConstraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
    /**
     * Filter which ProjectConstraint to delete.
     */
    where: ProjectConstraintWhereUniqueInput
  }

  /**
   * ProjectConstraint deleteMany
   */
  export type ProjectConstraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectConstraints to delete
     */
    where?: ProjectConstraintWhereInput
    /**
     * Limit how many ProjectConstraints to delete.
     */
    limit?: number
  }

  /**
   * ProjectConstraint without action
   */
  export type ProjectConstraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectConstraint
     */
    select?: ProjectConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectConstraint
     */
    omit?: ProjectConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectConstraintInclude<ExtArgs> | null
  }


  /**
   * Model ProjectAsset
   */

  export type AggregateProjectAsset = {
    _count: ProjectAssetCountAggregateOutputType | null
    _avg: ProjectAssetAvgAggregateOutputType | null
    _sum: ProjectAssetSumAggregateOutputType | null
    _min: ProjectAssetMinAggregateOutputType | null
    _max: ProjectAssetMaxAggregateOutputType | null
  }

  export type ProjectAssetAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type ProjectAssetSumAggregateOutputType = {
    fileSize: number | null
  }

  export type ProjectAssetMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    kind: $Enums.AssetKind | null
    fileName: string | null
    objectKey: string | null
    publicUrl: string | null
    contentType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type ProjectAssetMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    kind: $Enums.AssetKind | null
    fileName: string | null
    objectKey: string | null
    publicUrl: string | null
    contentType: string | null
    fileSize: number | null
    createdAt: Date | null
  }

  export type ProjectAssetCountAggregateOutputType = {
    id: number
    projectId: number
    kind: number
    fileName: number
    objectKey: number
    publicUrl: number
    contentType: number
    fileSize: number
    createdAt: number
    _all: number
  }


  export type ProjectAssetAvgAggregateInputType = {
    fileSize?: true
  }

  export type ProjectAssetSumAggregateInputType = {
    fileSize?: true
  }

  export type ProjectAssetMinAggregateInputType = {
    id?: true
    projectId?: true
    kind?: true
    fileName?: true
    objectKey?: true
    publicUrl?: true
    contentType?: true
    fileSize?: true
    createdAt?: true
  }

  export type ProjectAssetMaxAggregateInputType = {
    id?: true
    projectId?: true
    kind?: true
    fileName?: true
    objectKey?: true
    publicUrl?: true
    contentType?: true
    fileSize?: true
    createdAt?: true
  }

  export type ProjectAssetCountAggregateInputType = {
    id?: true
    projectId?: true
    kind?: true
    fileName?: true
    objectKey?: true
    publicUrl?: true
    contentType?: true
    fileSize?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAsset to aggregate.
     */
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectAssets
    **/
    _count?: true | ProjectAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectAssetMaxAggregateInputType
  }

  export type GetProjectAssetAggregateType<T extends ProjectAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectAsset[P]>
      : GetScalarType<T[P], AggregateProjectAsset[P]>
  }




  export type ProjectAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAssetWhereInput
    orderBy?: ProjectAssetOrderByWithAggregationInput | ProjectAssetOrderByWithAggregationInput[]
    by: ProjectAssetScalarFieldEnum[] | ProjectAssetScalarFieldEnum
    having?: ProjectAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectAssetCountAggregateInputType | true
    _avg?: ProjectAssetAvgAggregateInputType
    _sum?: ProjectAssetSumAggregateInputType
    _min?: ProjectAssetMinAggregateInputType
    _max?: ProjectAssetMaxAggregateInputType
  }

  export type ProjectAssetGroupByOutputType = {
    id: string
    projectId: string
    kind: $Enums.AssetKind
    fileName: string | null
    objectKey: string
    publicUrl: string
    contentType: string | null
    fileSize: number | null
    createdAt: Date
    _count: ProjectAssetCountAggregateOutputType | null
    _avg: ProjectAssetAvgAggregateOutputType | null
    _sum: ProjectAssetSumAggregateOutputType | null
    _min: ProjectAssetMinAggregateOutputType | null
    _max: ProjectAssetMaxAggregateOutputType | null
  }

  type GetProjectAssetGroupByPayload<T extends ProjectAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectAssetGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectAssetGroupByOutputType[P]>
        }
      >
    >


  export type ProjectAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    kind?: boolean
    fileName?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    contentType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    kind?: boolean
    fileName?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    contentType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    kind?: boolean
    fileName?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    contentType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAsset"]>

  export type ProjectAssetSelectScalar = {
    id?: boolean
    projectId?: boolean
    kind?: boolean
    fileName?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    contentType?: boolean
    fileSize?: boolean
    createdAt?: boolean
  }

  export type ProjectAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "kind" | "fileName" | "objectKey" | "publicUrl" | "contentType" | "fileSize" | "createdAt", ExtArgs["result"]["projectAsset"]>
  export type ProjectAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAsset"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      kind: $Enums.AssetKind
      fileName: string | null
      objectKey: string
      publicUrl: string
      contentType: string | null
      fileSize: number | null
      createdAt: Date
    }, ExtArgs["result"]["projectAsset"]>
    composites: {}
  }

  type ProjectAssetGetPayload<S extends boolean | null | undefined | ProjectAssetDefaultArgs> = $Result.GetResult<Prisma.$ProjectAssetPayload, S>

  type ProjectAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectAssetCountAggregateInputType | true
    }

  export interface ProjectAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectAsset'], meta: { name: 'ProjectAsset' } }
    /**
     * Find zero or one ProjectAsset that matches the filter.
     * @param {ProjectAssetFindUniqueArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectAssetFindUniqueArgs>(args: SelectSubset<T, ProjectAssetFindUniqueArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectAssetFindUniqueOrThrowArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetFindFirstArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectAssetFindFirstArgs>(args?: SelectSubset<T, ProjectAssetFindFirstArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetFindFirstOrThrowArgs} args - Arguments to find a ProjectAsset
     * @example
     * // Get one ProjectAsset
     * const projectAsset = await prisma.projectAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectAssets
     * const projectAssets = await prisma.projectAsset.findMany()
     * 
     * // Get first 10 ProjectAssets
     * const projectAssets = await prisma.projectAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectAssetWithIdOnly = await prisma.projectAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectAssetFindManyArgs>(args?: SelectSubset<T, ProjectAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectAsset.
     * @param {ProjectAssetCreateArgs} args - Arguments to create a ProjectAsset.
     * @example
     * // Create one ProjectAsset
     * const ProjectAsset = await prisma.projectAsset.create({
     *   data: {
     *     // ... data to create a ProjectAsset
     *   }
     * })
     * 
     */
    create<T extends ProjectAssetCreateArgs>(args: SelectSubset<T, ProjectAssetCreateArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectAssets.
     * @param {ProjectAssetCreateManyArgs} args - Arguments to create many ProjectAssets.
     * @example
     * // Create many ProjectAssets
     * const projectAsset = await prisma.projectAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectAssetCreateManyArgs>(args?: SelectSubset<T, ProjectAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectAssets and returns the data saved in the database.
     * @param {ProjectAssetCreateManyAndReturnArgs} args - Arguments to create many ProjectAssets.
     * @example
     * // Create many ProjectAssets
     * const projectAsset = await prisma.projectAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectAssets and only return the `id`
     * const projectAssetWithIdOnly = await prisma.projectAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectAsset.
     * @param {ProjectAssetDeleteArgs} args - Arguments to delete one ProjectAsset.
     * @example
     * // Delete one ProjectAsset
     * const ProjectAsset = await prisma.projectAsset.delete({
     *   where: {
     *     // ... filter to delete one ProjectAsset
     *   }
     * })
     * 
     */
    delete<T extends ProjectAssetDeleteArgs>(args: SelectSubset<T, ProjectAssetDeleteArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectAsset.
     * @param {ProjectAssetUpdateArgs} args - Arguments to update one ProjectAsset.
     * @example
     * // Update one ProjectAsset
     * const projectAsset = await prisma.projectAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectAssetUpdateArgs>(args: SelectSubset<T, ProjectAssetUpdateArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectAssets.
     * @param {ProjectAssetDeleteManyArgs} args - Arguments to filter ProjectAssets to delete.
     * @example
     * // Delete a few ProjectAssets
     * const { count } = await prisma.projectAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectAssetDeleteManyArgs>(args?: SelectSubset<T, ProjectAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectAssets
     * const projectAsset = await prisma.projectAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectAssetUpdateManyArgs>(args: SelectSubset<T, ProjectAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAssets and returns the data updated in the database.
     * @param {ProjectAssetUpdateManyAndReturnArgs} args - Arguments to update many ProjectAssets.
     * @example
     * // Update many ProjectAssets
     * const projectAsset = await prisma.projectAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectAssets and only return the `id`
     * const projectAssetWithIdOnly = await prisma.projectAsset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectAsset.
     * @param {ProjectAssetUpsertArgs} args - Arguments to update or create a ProjectAsset.
     * @example
     * // Update or create a ProjectAsset
     * const projectAsset = await prisma.projectAsset.upsert({
     *   create: {
     *     // ... data to create a ProjectAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectAsset we want to update
     *   }
     * })
     */
    upsert<T extends ProjectAssetUpsertArgs>(args: SelectSubset<T, ProjectAssetUpsertArgs<ExtArgs>>): Prisma__ProjectAssetClient<$Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetCountArgs} args - Arguments to filter ProjectAssets to count.
     * @example
     * // Count the number of ProjectAssets
     * const count = await prisma.projectAsset.count({
     *   where: {
     *     // ... the filter for the ProjectAssets we want to count
     *   }
     * })
    **/
    count<T extends ProjectAssetCountArgs>(
      args?: Subset<T, ProjectAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAssetAggregateArgs>(args: Subset<T, ProjectAssetAggregateArgs>): Prisma.PrismaPromise<GetProjectAssetAggregateType<T>>

    /**
     * Group by ProjectAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAssetGroupByArgs} args - Group by arguments.
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
      T extends ProjectAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectAssetGroupByArgs['orderBy'] }
        : { orderBy?: ProjectAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectAsset model
   */
  readonly fields: ProjectAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectAsset model
   */
  interface ProjectAssetFieldRefs {
    readonly id: FieldRef<"ProjectAsset", 'String'>
    readonly projectId: FieldRef<"ProjectAsset", 'String'>
    readonly kind: FieldRef<"ProjectAsset", 'AssetKind'>
    readonly fileName: FieldRef<"ProjectAsset", 'String'>
    readonly objectKey: FieldRef<"ProjectAsset", 'String'>
    readonly publicUrl: FieldRef<"ProjectAsset", 'String'>
    readonly contentType: FieldRef<"ProjectAsset", 'String'>
    readonly fileSize: FieldRef<"ProjectAsset", 'Int'>
    readonly createdAt: FieldRef<"ProjectAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectAsset findUnique
   */
  export type ProjectAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset findUniqueOrThrow
   */
  export type ProjectAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset findFirst
   */
  export type ProjectAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
  }

  /**
   * ProjectAsset findFirstOrThrow
   */
  export type ProjectAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAsset to fetch.
     */
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
  }

  /**
   * ProjectAsset findMany
   */
  export type ProjectAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAssets to fetch.
     */
    where?: ProjectAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAssets to fetch.
     */
    orderBy?: ProjectAssetOrderByWithRelationInput | ProjectAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAssets.
     */
    cursor?: ProjectAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAssets.
     */
    distinct?: ProjectAssetScalarFieldEnum | ProjectAssetScalarFieldEnum[]
  }

  /**
   * ProjectAsset create
   */
  export type ProjectAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectAsset.
     */
    data: XOR<ProjectAssetCreateInput, ProjectAssetUncheckedCreateInput>
  }

  /**
   * ProjectAsset createMany
   */
  export type ProjectAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectAssets.
     */
    data: ProjectAssetCreateManyInput | ProjectAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectAsset createManyAndReturn
   */
  export type ProjectAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectAssets.
     */
    data: ProjectAssetCreateManyInput | ProjectAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAsset update
   */
  export type ProjectAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectAsset.
     */
    data: XOR<ProjectAssetUpdateInput, ProjectAssetUncheckedUpdateInput>
    /**
     * Choose, which ProjectAsset to update.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset updateMany
   */
  export type ProjectAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectAssets.
     */
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAssets to update
     */
    where?: ProjectAssetWhereInput
    /**
     * Limit how many ProjectAssets to update.
     */
    limit?: number
  }

  /**
   * ProjectAsset updateManyAndReturn
   */
  export type ProjectAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * The data used to update ProjectAssets.
     */
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAssets to update
     */
    where?: ProjectAssetWhereInput
    /**
     * Limit how many ProjectAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAsset upsert
   */
  export type ProjectAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectAsset to update in case it exists.
     */
    where: ProjectAssetWhereUniqueInput
    /**
     * In case the ProjectAsset found by the `where` argument doesn't exist, create a new ProjectAsset with this data.
     */
    create: XOR<ProjectAssetCreateInput, ProjectAssetUncheckedCreateInput>
    /**
     * In case the ProjectAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectAssetUpdateInput, ProjectAssetUncheckedUpdateInput>
  }

  /**
   * ProjectAsset delete
   */
  export type ProjectAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
    /**
     * Filter which ProjectAsset to delete.
     */
    where: ProjectAssetWhereUniqueInput
  }

  /**
   * ProjectAsset deleteMany
   */
  export type ProjectAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAssets to delete
     */
    where?: ProjectAssetWhereInput
    /**
     * Limit how many ProjectAssets to delete.
     */
    limit?: number
  }

  /**
   * ProjectAsset without action
   */
  export type ProjectAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAsset
     */
    select?: ProjectAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAsset
     */
    omit?: ProjectAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAssetInclude<ExtArgs> | null
  }


  /**
   * Model RenderTask
   */

  export type AggregateRenderTask = {
    _count: RenderTaskCountAggregateOutputType | null
    _avg: RenderTaskAvgAggregateOutputType | null
    _sum: RenderTaskSumAggregateOutputType | null
    _min: RenderTaskMinAggregateOutputType | null
    _max: RenderTaskMaxAggregateOutputType | null
  }

  export type RenderTaskAvgAggregateOutputType = {
    candidateCount: number | null
    progressPercent: number | null
  }

  export type RenderTaskSumAggregateOutputType = {
    candidateCount: number | null
    progressPercent: number | null
  }

  export type RenderTaskMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    providerCode: string | null
    modelCode: string | null
    styleCode: string | null
    budgetLevel: string | null
    candidateCount: number | null
    status: $Enums.RenderTaskStatus | null
    progressPercent: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RenderTaskMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    providerCode: string | null
    modelCode: string | null
    styleCode: string | null
    budgetLevel: string | null
    candidateCount: number | null
    status: $Enums.RenderTaskStatus | null
    progressPercent: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RenderTaskCountAggregateOutputType = {
    id: number
    projectId: number
    providerCode: number
    modelCode: number
    styleCode: number
    budgetLevel: number
    constraints: number
    candidateCount: number
    status: number
    progressPercent: number
    requestPayload: number
    responseSummary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RenderTaskAvgAggregateInputType = {
    candidateCount?: true
    progressPercent?: true
  }

  export type RenderTaskSumAggregateInputType = {
    candidateCount?: true
    progressPercent?: true
  }

  export type RenderTaskMinAggregateInputType = {
    id?: true
    projectId?: true
    providerCode?: true
    modelCode?: true
    styleCode?: true
    budgetLevel?: true
    candidateCount?: true
    status?: true
    progressPercent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RenderTaskMaxAggregateInputType = {
    id?: true
    projectId?: true
    providerCode?: true
    modelCode?: true
    styleCode?: true
    budgetLevel?: true
    candidateCount?: true
    status?: true
    progressPercent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RenderTaskCountAggregateInputType = {
    id?: true
    projectId?: true
    providerCode?: true
    modelCode?: true
    styleCode?: true
    budgetLevel?: true
    constraints?: true
    candidateCount?: true
    status?: true
    progressPercent?: true
    requestPayload?: true
    responseSummary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RenderTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderTask to aggregate.
     */
    where?: RenderTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderTasks to fetch.
     */
    orderBy?: RenderTaskOrderByWithRelationInput | RenderTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenderTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RenderTasks
    **/
    _count?: true | RenderTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RenderTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RenderTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenderTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenderTaskMaxAggregateInputType
  }

  export type GetRenderTaskAggregateType<T extends RenderTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateRenderTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenderTask[P]>
      : GetScalarType<T[P], AggregateRenderTask[P]>
  }




  export type RenderTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderTaskWhereInput
    orderBy?: RenderTaskOrderByWithAggregationInput | RenderTaskOrderByWithAggregationInput[]
    by: RenderTaskScalarFieldEnum[] | RenderTaskScalarFieldEnum
    having?: RenderTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenderTaskCountAggregateInputType | true
    _avg?: RenderTaskAvgAggregateInputType
    _sum?: RenderTaskSumAggregateInputType
    _min?: RenderTaskMinAggregateInputType
    _max?: RenderTaskMaxAggregateInputType
  }

  export type RenderTaskGroupByOutputType = {
    id: string
    projectId: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints: string[]
    candidateCount: number
    status: $Enums.RenderTaskStatus
    progressPercent: number
    requestPayload: JsonValue | null
    responseSummary: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: RenderTaskCountAggregateOutputType | null
    _avg: RenderTaskAvgAggregateOutputType | null
    _sum: RenderTaskSumAggregateOutputType | null
    _min: RenderTaskMinAggregateOutputType | null
    _max: RenderTaskMaxAggregateOutputType | null
  }

  type GetRenderTaskGroupByPayload<T extends RenderTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenderTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenderTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenderTaskGroupByOutputType[P]>
            : GetScalarType<T[P], RenderTaskGroupByOutputType[P]>
        }
      >
    >


  export type RenderTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    providerCode?: boolean
    modelCode?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    constraints?: boolean
    candidateCount?: boolean
    status?: boolean
    progressPercent?: boolean
    requestPayload?: boolean
    responseSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    results?: boolean | RenderTask$resultsArgs<ExtArgs>
    _count?: boolean | RenderTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderTask"]>

  export type RenderTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    providerCode?: boolean
    modelCode?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    constraints?: boolean
    candidateCount?: boolean
    status?: boolean
    progressPercent?: boolean
    requestPayload?: boolean
    responseSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderTask"]>

  export type RenderTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    providerCode?: boolean
    modelCode?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    constraints?: boolean
    candidateCount?: boolean
    status?: boolean
    progressPercent?: boolean
    requestPayload?: boolean
    responseSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderTask"]>

  export type RenderTaskSelectScalar = {
    id?: boolean
    projectId?: boolean
    providerCode?: boolean
    modelCode?: boolean
    styleCode?: boolean
    budgetLevel?: boolean
    constraints?: boolean
    candidateCount?: boolean
    status?: boolean
    progressPercent?: boolean
    requestPayload?: boolean
    responseSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RenderTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "providerCode" | "modelCode" | "styleCode" | "budgetLevel" | "constraints" | "candidateCount" | "status" | "progressPercent" | "requestPayload" | "responseSummary" | "createdAt" | "updatedAt", ExtArgs["result"]["renderTask"]>
  export type RenderTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    results?: boolean | RenderTask$resultsArgs<ExtArgs>
    _count?: boolean | RenderTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RenderTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type RenderTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $RenderTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RenderTask"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      results: Prisma.$RenderResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      providerCode: string
      modelCode: string
      styleCode: string
      budgetLevel: string
      constraints: string[]
      candidateCount: number
      status: $Enums.RenderTaskStatus
      progressPercent: number
      requestPayload: Prisma.JsonValue | null
      responseSummary: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["renderTask"]>
    composites: {}
  }

  type RenderTaskGetPayload<S extends boolean | null | undefined | RenderTaskDefaultArgs> = $Result.GetResult<Prisma.$RenderTaskPayload, S>

  type RenderTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenderTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenderTaskCountAggregateInputType | true
    }

  export interface RenderTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RenderTask'], meta: { name: 'RenderTask' } }
    /**
     * Find zero or one RenderTask that matches the filter.
     * @param {RenderTaskFindUniqueArgs} args - Arguments to find a RenderTask
     * @example
     * // Get one RenderTask
     * const renderTask = await prisma.renderTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenderTaskFindUniqueArgs>(args: SelectSubset<T, RenderTaskFindUniqueArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RenderTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenderTaskFindUniqueOrThrowArgs} args - Arguments to find a RenderTask
     * @example
     * // Get one RenderTask
     * const renderTask = await prisma.renderTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenderTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, RenderTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskFindFirstArgs} args - Arguments to find a RenderTask
     * @example
     * // Get one RenderTask
     * const renderTask = await prisma.renderTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenderTaskFindFirstArgs>(args?: SelectSubset<T, RenderTaskFindFirstArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskFindFirstOrThrowArgs} args - Arguments to find a RenderTask
     * @example
     * // Get one RenderTask
     * const renderTask = await prisma.renderTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenderTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, RenderTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RenderTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RenderTasks
     * const renderTasks = await prisma.renderTask.findMany()
     * 
     * // Get first 10 RenderTasks
     * const renderTasks = await prisma.renderTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renderTaskWithIdOnly = await prisma.renderTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenderTaskFindManyArgs>(args?: SelectSubset<T, RenderTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RenderTask.
     * @param {RenderTaskCreateArgs} args - Arguments to create a RenderTask.
     * @example
     * // Create one RenderTask
     * const RenderTask = await prisma.renderTask.create({
     *   data: {
     *     // ... data to create a RenderTask
     *   }
     * })
     * 
     */
    create<T extends RenderTaskCreateArgs>(args: SelectSubset<T, RenderTaskCreateArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RenderTasks.
     * @param {RenderTaskCreateManyArgs} args - Arguments to create many RenderTasks.
     * @example
     * // Create many RenderTasks
     * const renderTask = await prisma.renderTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenderTaskCreateManyArgs>(args?: SelectSubset<T, RenderTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RenderTasks and returns the data saved in the database.
     * @param {RenderTaskCreateManyAndReturnArgs} args - Arguments to create many RenderTasks.
     * @example
     * // Create many RenderTasks
     * const renderTask = await prisma.renderTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RenderTasks and only return the `id`
     * const renderTaskWithIdOnly = await prisma.renderTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenderTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, RenderTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RenderTask.
     * @param {RenderTaskDeleteArgs} args - Arguments to delete one RenderTask.
     * @example
     * // Delete one RenderTask
     * const RenderTask = await prisma.renderTask.delete({
     *   where: {
     *     // ... filter to delete one RenderTask
     *   }
     * })
     * 
     */
    delete<T extends RenderTaskDeleteArgs>(args: SelectSubset<T, RenderTaskDeleteArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RenderTask.
     * @param {RenderTaskUpdateArgs} args - Arguments to update one RenderTask.
     * @example
     * // Update one RenderTask
     * const renderTask = await prisma.renderTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenderTaskUpdateArgs>(args: SelectSubset<T, RenderTaskUpdateArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RenderTasks.
     * @param {RenderTaskDeleteManyArgs} args - Arguments to filter RenderTasks to delete.
     * @example
     * // Delete a few RenderTasks
     * const { count } = await prisma.renderTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenderTaskDeleteManyArgs>(args?: SelectSubset<T, RenderTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RenderTasks
     * const renderTask = await prisma.renderTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenderTaskUpdateManyArgs>(args: SelectSubset<T, RenderTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderTasks and returns the data updated in the database.
     * @param {RenderTaskUpdateManyAndReturnArgs} args - Arguments to update many RenderTasks.
     * @example
     * // Update many RenderTasks
     * const renderTask = await prisma.renderTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RenderTasks and only return the `id`
     * const renderTaskWithIdOnly = await prisma.renderTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenderTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, RenderTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RenderTask.
     * @param {RenderTaskUpsertArgs} args - Arguments to update or create a RenderTask.
     * @example
     * // Update or create a RenderTask
     * const renderTask = await prisma.renderTask.upsert({
     *   create: {
     *     // ... data to create a RenderTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RenderTask we want to update
     *   }
     * })
     */
    upsert<T extends RenderTaskUpsertArgs>(args: SelectSubset<T, RenderTaskUpsertArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RenderTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskCountArgs} args - Arguments to filter RenderTasks to count.
     * @example
     * // Count the number of RenderTasks
     * const count = await prisma.renderTask.count({
     *   where: {
     *     // ... the filter for the RenderTasks we want to count
     *   }
     * })
    **/
    count<T extends RenderTaskCountArgs>(
      args?: Subset<T, RenderTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenderTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RenderTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RenderTaskAggregateArgs>(args: Subset<T, RenderTaskAggregateArgs>): Prisma.PrismaPromise<GetRenderTaskAggregateType<T>>

    /**
     * Group by RenderTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderTaskGroupByArgs} args - Group by arguments.
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
      T extends RenderTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenderTaskGroupByArgs['orderBy'] }
        : { orderBy?: RenderTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RenderTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenderTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RenderTask model
   */
  readonly fields: RenderTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RenderTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenderTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends RenderTask$resultsArgs<ExtArgs> = {}>(args?: Subset<T, RenderTask$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RenderTask model
   */
  interface RenderTaskFieldRefs {
    readonly id: FieldRef<"RenderTask", 'String'>
    readonly projectId: FieldRef<"RenderTask", 'String'>
    readonly providerCode: FieldRef<"RenderTask", 'String'>
    readonly modelCode: FieldRef<"RenderTask", 'String'>
    readonly styleCode: FieldRef<"RenderTask", 'String'>
    readonly budgetLevel: FieldRef<"RenderTask", 'String'>
    readonly constraints: FieldRef<"RenderTask", 'String[]'>
    readonly candidateCount: FieldRef<"RenderTask", 'Int'>
    readonly status: FieldRef<"RenderTask", 'RenderTaskStatus'>
    readonly progressPercent: FieldRef<"RenderTask", 'Int'>
    readonly requestPayload: FieldRef<"RenderTask", 'Json'>
    readonly responseSummary: FieldRef<"RenderTask", 'Json'>
    readonly createdAt: FieldRef<"RenderTask", 'DateTime'>
    readonly updatedAt: FieldRef<"RenderTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RenderTask findUnique
   */
  export type RenderTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * Filter, which RenderTask to fetch.
     */
    where: RenderTaskWhereUniqueInput
  }

  /**
   * RenderTask findUniqueOrThrow
   */
  export type RenderTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * Filter, which RenderTask to fetch.
     */
    where: RenderTaskWhereUniqueInput
  }

  /**
   * RenderTask findFirst
   */
  export type RenderTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * Filter, which RenderTask to fetch.
     */
    where?: RenderTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderTasks to fetch.
     */
    orderBy?: RenderTaskOrderByWithRelationInput | RenderTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderTasks.
     */
    cursor?: RenderTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderTasks.
     */
    distinct?: RenderTaskScalarFieldEnum | RenderTaskScalarFieldEnum[]
  }

  /**
   * RenderTask findFirstOrThrow
   */
  export type RenderTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * Filter, which RenderTask to fetch.
     */
    where?: RenderTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderTasks to fetch.
     */
    orderBy?: RenderTaskOrderByWithRelationInput | RenderTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderTasks.
     */
    cursor?: RenderTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderTasks.
     */
    distinct?: RenderTaskScalarFieldEnum | RenderTaskScalarFieldEnum[]
  }

  /**
   * RenderTask findMany
   */
  export type RenderTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * Filter, which RenderTasks to fetch.
     */
    where?: RenderTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderTasks to fetch.
     */
    orderBy?: RenderTaskOrderByWithRelationInput | RenderTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RenderTasks.
     */
    cursor?: RenderTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderTasks.
     */
    distinct?: RenderTaskScalarFieldEnum | RenderTaskScalarFieldEnum[]
  }

  /**
   * RenderTask create
   */
  export type RenderTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a RenderTask.
     */
    data: XOR<RenderTaskCreateInput, RenderTaskUncheckedCreateInput>
  }

  /**
   * RenderTask createMany
   */
  export type RenderTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RenderTasks.
     */
    data: RenderTaskCreateManyInput | RenderTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RenderTask createManyAndReturn
   */
  export type RenderTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * The data used to create many RenderTasks.
     */
    data: RenderTaskCreateManyInput | RenderTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderTask update
   */
  export type RenderTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a RenderTask.
     */
    data: XOR<RenderTaskUpdateInput, RenderTaskUncheckedUpdateInput>
    /**
     * Choose, which RenderTask to update.
     */
    where: RenderTaskWhereUniqueInput
  }

  /**
   * RenderTask updateMany
   */
  export type RenderTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RenderTasks.
     */
    data: XOR<RenderTaskUpdateManyMutationInput, RenderTaskUncheckedUpdateManyInput>
    /**
     * Filter which RenderTasks to update
     */
    where?: RenderTaskWhereInput
    /**
     * Limit how many RenderTasks to update.
     */
    limit?: number
  }

  /**
   * RenderTask updateManyAndReturn
   */
  export type RenderTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * The data used to update RenderTasks.
     */
    data: XOR<RenderTaskUpdateManyMutationInput, RenderTaskUncheckedUpdateManyInput>
    /**
     * Filter which RenderTasks to update
     */
    where?: RenderTaskWhereInput
    /**
     * Limit how many RenderTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderTask upsert
   */
  export type RenderTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the RenderTask to update in case it exists.
     */
    where: RenderTaskWhereUniqueInput
    /**
     * In case the RenderTask found by the `where` argument doesn't exist, create a new RenderTask with this data.
     */
    create: XOR<RenderTaskCreateInput, RenderTaskUncheckedCreateInput>
    /**
     * In case the RenderTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenderTaskUpdateInput, RenderTaskUncheckedUpdateInput>
  }

  /**
   * RenderTask delete
   */
  export type RenderTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
    /**
     * Filter which RenderTask to delete.
     */
    where: RenderTaskWhereUniqueInput
  }

  /**
   * RenderTask deleteMany
   */
  export type RenderTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderTasks to delete
     */
    where?: RenderTaskWhereInput
    /**
     * Limit how many RenderTasks to delete.
     */
    limit?: number
  }

  /**
   * RenderTask.results
   */
  export type RenderTask$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    where?: RenderResultWhereInput
    orderBy?: RenderResultOrderByWithRelationInput | RenderResultOrderByWithRelationInput[]
    cursor?: RenderResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenderResultScalarFieldEnum | RenderResultScalarFieldEnum[]
  }

  /**
   * RenderTask without action
   */
  export type RenderTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderTask
     */
    select?: RenderTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderTask
     */
    omit?: RenderTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderTaskInclude<ExtArgs> | null
  }


  /**
   * Model RenderResult
   */

  export type AggregateRenderResult = {
    _count: RenderResultCountAggregateOutputType | null
    _avg: RenderResultAvgAggregateOutputType | null
    _sum: RenderResultSumAggregateOutputType | null
    _min: RenderResultMinAggregateOutputType | null
    _max: RenderResultMaxAggregateOutputType | null
  }

  export type RenderResultAvgAggregateOutputType = {
    score: number | null
  }

  export type RenderResultSumAggregateOutputType = {
    score: number | null
  }

  export type RenderResultMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    renderTaskId: string | null
    title: string | null
    imageUrl: string | null
    score: number | null
    styleCode: string | null
    createdAt: Date | null
  }

  export type RenderResultMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    renderTaskId: string | null
    title: string | null
    imageUrl: string | null
    score: number | null
    styleCode: string | null
    createdAt: Date | null
  }

  export type RenderResultCountAggregateOutputType = {
    id: number
    projectId: number
    renderTaskId: number
    title: number
    imageUrl: number
    score: number
    styleCode: number
    createdAt: number
    _all: number
  }


  export type RenderResultAvgAggregateInputType = {
    score?: true
  }

  export type RenderResultSumAggregateInputType = {
    score?: true
  }

  export type RenderResultMinAggregateInputType = {
    id?: true
    projectId?: true
    renderTaskId?: true
    title?: true
    imageUrl?: true
    score?: true
    styleCode?: true
    createdAt?: true
  }

  export type RenderResultMaxAggregateInputType = {
    id?: true
    projectId?: true
    renderTaskId?: true
    title?: true
    imageUrl?: true
    score?: true
    styleCode?: true
    createdAt?: true
  }

  export type RenderResultCountAggregateInputType = {
    id?: true
    projectId?: true
    renderTaskId?: true
    title?: true
    imageUrl?: true
    score?: true
    styleCode?: true
    createdAt?: true
    _all?: true
  }

  export type RenderResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderResult to aggregate.
     */
    where?: RenderResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderResults to fetch.
     */
    orderBy?: RenderResultOrderByWithRelationInput | RenderResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenderResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RenderResults
    **/
    _count?: true | RenderResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RenderResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RenderResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenderResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenderResultMaxAggregateInputType
  }

  export type GetRenderResultAggregateType<T extends RenderResultAggregateArgs> = {
        [P in keyof T & keyof AggregateRenderResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenderResult[P]>
      : GetScalarType<T[P], AggregateRenderResult[P]>
  }




  export type RenderResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderResultWhereInput
    orderBy?: RenderResultOrderByWithAggregationInput | RenderResultOrderByWithAggregationInput[]
    by: RenderResultScalarFieldEnum[] | RenderResultScalarFieldEnum
    having?: RenderResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenderResultCountAggregateInputType | true
    _avg?: RenderResultAvgAggregateInputType
    _sum?: RenderResultSumAggregateInputType
    _min?: RenderResultMinAggregateInputType
    _max?: RenderResultMaxAggregateInputType
  }

  export type RenderResultGroupByOutputType = {
    id: string
    projectId: string
    renderTaskId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt: Date
    _count: RenderResultCountAggregateOutputType | null
    _avg: RenderResultAvgAggregateOutputType | null
    _sum: RenderResultSumAggregateOutputType | null
    _min: RenderResultMinAggregateOutputType | null
    _max: RenderResultMaxAggregateOutputType | null
  }

  type GetRenderResultGroupByPayload<T extends RenderResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenderResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenderResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenderResultGroupByOutputType[P]>
            : GetScalarType<T[P], RenderResultGroupByOutputType[P]>
        }
      >
    >


  export type RenderResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    renderTaskId?: boolean
    title?: boolean
    imageUrl?: boolean
    score?: boolean
    styleCode?: boolean
    createdAt?: boolean
    renderTask?: boolean | RenderTaskDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderResult"]>

  export type RenderResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    renderTaskId?: boolean
    title?: boolean
    imageUrl?: boolean
    score?: boolean
    styleCode?: boolean
    createdAt?: boolean
    renderTask?: boolean | RenderTaskDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderResult"]>

  export type RenderResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    renderTaskId?: boolean
    title?: boolean
    imageUrl?: boolean
    score?: boolean
    styleCode?: boolean
    createdAt?: boolean
    renderTask?: boolean | RenderTaskDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderResult"]>

  export type RenderResultSelectScalar = {
    id?: boolean
    projectId?: boolean
    renderTaskId?: boolean
    title?: boolean
    imageUrl?: boolean
    score?: boolean
    styleCode?: boolean
    createdAt?: boolean
  }

  export type RenderResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "renderTaskId" | "title" | "imageUrl" | "score" | "styleCode" | "createdAt", ExtArgs["result"]["renderResult"]>
  export type RenderResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renderTask?: boolean | RenderTaskDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type RenderResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renderTask?: boolean | RenderTaskDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type RenderResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renderTask?: boolean | RenderTaskDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $RenderResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RenderResult"
    objects: {
      renderTask: Prisma.$RenderTaskPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      renderTaskId: string
      title: string
      imageUrl: string
      score: number
      styleCode: string
      createdAt: Date
    }, ExtArgs["result"]["renderResult"]>
    composites: {}
  }

  type RenderResultGetPayload<S extends boolean | null | undefined | RenderResultDefaultArgs> = $Result.GetResult<Prisma.$RenderResultPayload, S>

  type RenderResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenderResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenderResultCountAggregateInputType | true
    }

  export interface RenderResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RenderResult'], meta: { name: 'RenderResult' } }
    /**
     * Find zero or one RenderResult that matches the filter.
     * @param {RenderResultFindUniqueArgs} args - Arguments to find a RenderResult
     * @example
     * // Get one RenderResult
     * const renderResult = await prisma.renderResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenderResultFindUniqueArgs>(args: SelectSubset<T, RenderResultFindUniqueArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RenderResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenderResultFindUniqueOrThrowArgs} args - Arguments to find a RenderResult
     * @example
     * // Get one RenderResult
     * const renderResult = await prisma.renderResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenderResultFindUniqueOrThrowArgs>(args: SelectSubset<T, RenderResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultFindFirstArgs} args - Arguments to find a RenderResult
     * @example
     * // Get one RenderResult
     * const renderResult = await prisma.renderResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenderResultFindFirstArgs>(args?: SelectSubset<T, RenderResultFindFirstArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultFindFirstOrThrowArgs} args - Arguments to find a RenderResult
     * @example
     * // Get one RenderResult
     * const renderResult = await prisma.renderResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenderResultFindFirstOrThrowArgs>(args?: SelectSubset<T, RenderResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RenderResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RenderResults
     * const renderResults = await prisma.renderResult.findMany()
     * 
     * // Get first 10 RenderResults
     * const renderResults = await prisma.renderResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renderResultWithIdOnly = await prisma.renderResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenderResultFindManyArgs>(args?: SelectSubset<T, RenderResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RenderResult.
     * @param {RenderResultCreateArgs} args - Arguments to create a RenderResult.
     * @example
     * // Create one RenderResult
     * const RenderResult = await prisma.renderResult.create({
     *   data: {
     *     // ... data to create a RenderResult
     *   }
     * })
     * 
     */
    create<T extends RenderResultCreateArgs>(args: SelectSubset<T, RenderResultCreateArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RenderResults.
     * @param {RenderResultCreateManyArgs} args - Arguments to create many RenderResults.
     * @example
     * // Create many RenderResults
     * const renderResult = await prisma.renderResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenderResultCreateManyArgs>(args?: SelectSubset<T, RenderResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RenderResults and returns the data saved in the database.
     * @param {RenderResultCreateManyAndReturnArgs} args - Arguments to create many RenderResults.
     * @example
     * // Create many RenderResults
     * const renderResult = await prisma.renderResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RenderResults and only return the `id`
     * const renderResultWithIdOnly = await prisma.renderResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenderResultCreateManyAndReturnArgs>(args?: SelectSubset<T, RenderResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RenderResult.
     * @param {RenderResultDeleteArgs} args - Arguments to delete one RenderResult.
     * @example
     * // Delete one RenderResult
     * const RenderResult = await prisma.renderResult.delete({
     *   where: {
     *     // ... filter to delete one RenderResult
     *   }
     * })
     * 
     */
    delete<T extends RenderResultDeleteArgs>(args: SelectSubset<T, RenderResultDeleteArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RenderResult.
     * @param {RenderResultUpdateArgs} args - Arguments to update one RenderResult.
     * @example
     * // Update one RenderResult
     * const renderResult = await prisma.renderResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenderResultUpdateArgs>(args: SelectSubset<T, RenderResultUpdateArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RenderResults.
     * @param {RenderResultDeleteManyArgs} args - Arguments to filter RenderResults to delete.
     * @example
     * // Delete a few RenderResults
     * const { count } = await prisma.renderResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenderResultDeleteManyArgs>(args?: SelectSubset<T, RenderResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RenderResults
     * const renderResult = await prisma.renderResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenderResultUpdateManyArgs>(args: SelectSubset<T, RenderResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderResults and returns the data updated in the database.
     * @param {RenderResultUpdateManyAndReturnArgs} args - Arguments to update many RenderResults.
     * @example
     * // Update many RenderResults
     * const renderResult = await prisma.renderResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RenderResults and only return the `id`
     * const renderResultWithIdOnly = await prisma.renderResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenderResultUpdateManyAndReturnArgs>(args: SelectSubset<T, RenderResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RenderResult.
     * @param {RenderResultUpsertArgs} args - Arguments to update or create a RenderResult.
     * @example
     * // Update or create a RenderResult
     * const renderResult = await prisma.renderResult.upsert({
     *   create: {
     *     // ... data to create a RenderResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RenderResult we want to update
     *   }
     * })
     */
    upsert<T extends RenderResultUpsertArgs>(args: SelectSubset<T, RenderResultUpsertArgs<ExtArgs>>): Prisma__RenderResultClient<$Result.GetResult<Prisma.$RenderResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RenderResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultCountArgs} args - Arguments to filter RenderResults to count.
     * @example
     * // Count the number of RenderResults
     * const count = await prisma.renderResult.count({
     *   where: {
     *     // ... the filter for the RenderResults we want to count
     *   }
     * })
    **/
    count<T extends RenderResultCountArgs>(
      args?: Subset<T, RenderResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenderResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RenderResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RenderResultAggregateArgs>(args: Subset<T, RenderResultAggregateArgs>): Prisma.PrismaPromise<GetRenderResultAggregateType<T>>

    /**
     * Group by RenderResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderResultGroupByArgs} args - Group by arguments.
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
      T extends RenderResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenderResultGroupByArgs['orderBy'] }
        : { orderBy?: RenderResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RenderResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenderResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RenderResult model
   */
  readonly fields: RenderResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RenderResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenderResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    renderTask<T extends RenderTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RenderTaskDefaultArgs<ExtArgs>>): Prisma__RenderTaskClient<$Result.GetResult<Prisma.$RenderTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RenderResult model
   */
  interface RenderResultFieldRefs {
    readonly id: FieldRef<"RenderResult", 'String'>
    readonly projectId: FieldRef<"RenderResult", 'String'>
    readonly renderTaskId: FieldRef<"RenderResult", 'String'>
    readonly title: FieldRef<"RenderResult", 'String'>
    readonly imageUrl: FieldRef<"RenderResult", 'String'>
    readonly score: FieldRef<"RenderResult", 'Float'>
    readonly styleCode: FieldRef<"RenderResult", 'String'>
    readonly createdAt: FieldRef<"RenderResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RenderResult findUnique
   */
  export type RenderResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * Filter, which RenderResult to fetch.
     */
    where: RenderResultWhereUniqueInput
  }

  /**
   * RenderResult findUniqueOrThrow
   */
  export type RenderResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * Filter, which RenderResult to fetch.
     */
    where: RenderResultWhereUniqueInput
  }

  /**
   * RenderResult findFirst
   */
  export type RenderResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * Filter, which RenderResult to fetch.
     */
    where?: RenderResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderResults to fetch.
     */
    orderBy?: RenderResultOrderByWithRelationInput | RenderResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderResults.
     */
    cursor?: RenderResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderResults.
     */
    distinct?: RenderResultScalarFieldEnum | RenderResultScalarFieldEnum[]
  }

  /**
   * RenderResult findFirstOrThrow
   */
  export type RenderResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * Filter, which RenderResult to fetch.
     */
    where?: RenderResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderResults to fetch.
     */
    orderBy?: RenderResultOrderByWithRelationInput | RenderResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderResults.
     */
    cursor?: RenderResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderResults.
     */
    distinct?: RenderResultScalarFieldEnum | RenderResultScalarFieldEnum[]
  }

  /**
   * RenderResult findMany
   */
  export type RenderResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * Filter, which RenderResults to fetch.
     */
    where?: RenderResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderResults to fetch.
     */
    orderBy?: RenderResultOrderByWithRelationInput | RenderResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RenderResults.
     */
    cursor?: RenderResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderResults.
     */
    distinct?: RenderResultScalarFieldEnum | RenderResultScalarFieldEnum[]
  }

  /**
   * RenderResult create
   */
  export type RenderResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * The data needed to create a RenderResult.
     */
    data: XOR<RenderResultCreateInput, RenderResultUncheckedCreateInput>
  }

  /**
   * RenderResult createMany
   */
  export type RenderResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RenderResults.
     */
    data: RenderResultCreateManyInput | RenderResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RenderResult createManyAndReturn
   */
  export type RenderResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * The data used to create many RenderResults.
     */
    data: RenderResultCreateManyInput | RenderResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderResult update
   */
  export type RenderResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * The data needed to update a RenderResult.
     */
    data: XOR<RenderResultUpdateInput, RenderResultUncheckedUpdateInput>
    /**
     * Choose, which RenderResult to update.
     */
    where: RenderResultWhereUniqueInput
  }

  /**
   * RenderResult updateMany
   */
  export type RenderResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RenderResults.
     */
    data: XOR<RenderResultUpdateManyMutationInput, RenderResultUncheckedUpdateManyInput>
    /**
     * Filter which RenderResults to update
     */
    where?: RenderResultWhereInput
    /**
     * Limit how many RenderResults to update.
     */
    limit?: number
  }

  /**
   * RenderResult updateManyAndReturn
   */
  export type RenderResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * The data used to update RenderResults.
     */
    data: XOR<RenderResultUpdateManyMutationInput, RenderResultUncheckedUpdateManyInput>
    /**
     * Filter which RenderResults to update
     */
    where?: RenderResultWhereInput
    /**
     * Limit how many RenderResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderResult upsert
   */
  export type RenderResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * The filter to search for the RenderResult to update in case it exists.
     */
    where: RenderResultWhereUniqueInput
    /**
     * In case the RenderResult found by the `where` argument doesn't exist, create a new RenderResult with this data.
     */
    create: XOR<RenderResultCreateInput, RenderResultUncheckedCreateInput>
    /**
     * In case the RenderResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenderResultUpdateInput, RenderResultUncheckedUpdateInput>
  }

  /**
   * RenderResult delete
   */
  export type RenderResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
    /**
     * Filter which RenderResult to delete.
     */
    where: RenderResultWhereUniqueInput
  }

  /**
   * RenderResult deleteMany
   */
  export type RenderResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderResults to delete
     */
    where?: RenderResultWhereInput
    /**
     * Limit how many RenderResults to delete.
     */
    limit?: number
  }

  /**
   * RenderResult without action
   */
  export type RenderResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderResult
     */
    select?: RenderResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderResult
     */
    omit?: RenderResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderResultInclude<ExtArgs> | null
  }


  /**
   * Model ShareLink
   */

  export type AggregateShareLink = {
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  export type ShareLinkMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    shareCode: string | null
    shareUrl: string | null
    title: string | null
    description: string | null
    status: $Enums.ShareStatus | null
    createdAt: Date | null
  }

  export type ShareLinkMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    shareCode: string | null
    shareUrl: string | null
    title: string | null
    description: string | null
    status: $Enums.ShareStatus | null
    createdAt: Date | null
  }

  export type ShareLinkCountAggregateOutputType = {
    id: number
    projectId: number
    shareCode: number
    shareUrl: number
    title: number
    description: number
    status: number
    createdAt: number
    _all: number
  }


  export type ShareLinkMinAggregateInputType = {
    id?: true
    projectId?: true
    shareCode?: true
    shareUrl?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type ShareLinkMaxAggregateInputType = {
    id?: true
    projectId?: true
    shareCode?: true
    shareUrl?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type ShareLinkCountAggregateInputType = {
    id?: true
    projectId?: true
    shareCode?: true
    shareUrl?: true
    title?: true
    description?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ShareLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLink to aggregate.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareLinks
    **/
    _count?: true | ShareLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareLinkMaxAggregateInputType
  }

  export type GetShareLinkAggregateType<T extends ShareLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateShareLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareLink[P]>
      : GetScalarType<T[P], AggregateShareLink[P]>
  }




  export type ShareLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithAggregationInput | ShareLinkOrderByWithAggregationInput[]
    by: ShareLinkScalarFieldEnum[] | ShareLinkScalarFieldEnum
    having?: ShareLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareLinkCountAggregateInputType | true
    _min?: ShareLinkMinAggregateInputType
    _max?: ShareLinkMaxAggregateInputType
  }

  export type ShareLinkGroupByOutputType = {
    id: string
    projectId: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status: $Enums.ShareStatus
    createdAt: Date
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  type GetShareLinkGroupByPayload<T extends ShareLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
        }
      >
    >


  export type ShareLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    shareCode?: boolean
    shareUrl?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    shareCode?: boolean
    shareUrl?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    shareCode?: boolean
    shareUrl?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectScalar = {
    id?: boolean
    projectId?: boolean
    shareCode?: boolean
    shareUrl?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ShareLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "shareCode" | "shareUrl" | "title" | "description" | "status" | "createdAt", ExtArgs["result"]["shareLink"]>
  export type ShareLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ShareLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareLink"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      shareCode: string
      shareUrl: string
      title: string
      description: string
      status: $Enums.ShareStatus
      createdAt: Date
    }, ExtArgs["result"]["shareLink"]>
    composites: {}
  }

  type ShareLinkGetPayload<S extends boolean | null | undefined | ShareLinkDefaultArgs> = $Result.GetResult<Prisma.$ShareLinkPayload, S>

  type ShareLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareLinkCountAggregateInputType | true
    }

  export interface ShareLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareLink'], meta: { name: 'ShareLink' } }
    /**
     * Find zero or one ShareLink that matches the filter.
     * @param {ShareLinkFindUniqueArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareLinkFindUniqueArgs>(args: SelectSubset<T, ShareLinkFindUniqueArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareLinkFindUniqueOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareLinkFindFirstArgs>(args?: SelectSubset<T, ShareLinkFindFirstArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareLinks
     * const shareLinks = await prisma.shareLink.findMany()
     * 
     * // Get first 10 ShareLinks
     * const shareLinks = await prisma.shareLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareLinkFindManyArgs>(args?: SelectSubset<T, ShareLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareLink.
     * @param {ShareLinkCreateArgs} args - Arguments to create a ShareLink.
     * @example
     * // Create one ShareLink
     * const ShareLink = await prisma.shareLink.create({
     *   data: {
     *     // ... data to create a ShareLink
     *   }
     * })
     * 
     */
    create<T extends ShareLinkCreateArgs>(args: SelectSubset<T, ShareLinkCreateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareLinks.
     * @param {ShareLinkCreateManyArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareLinkCreateManyArgs>(args?: SelectSubset<T, ShareLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareLinks and returns the data saved in the database.
     * @param {ShareLinkCreateManyAndReturnArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareLink.
     * @param {ShareLinkDeleteArgs} args - Arguments to delete one ShareLink.
     * @example
     * // Delete one ShareLink
     * const ShareLink = await prisma.shareLink.delete({
     *   where: {
     *     // ... filter to delete one ShareLink
     *   }
     * })
     * 
     */
    delete<T extends ShareLinkDeleteArgs>(args: SelectSubset<T, ShareLinkDeleteArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareLink.
     * @param {ShareLinkUpdateArgs} args - Arguments to update one ShareLink.
     * @example
     * // Update one ShareLink
     * const shareLink = await prisma.shareLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareLinkUpdateArgs>(args: SelectSubset<T, ShareLinkUpdateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareLinks.
     * @param {ShareLinkDeleteManyArgs} args - Arguments to filter ShareLinks to delete.
     * @example
     * // Delete a few ShareLinks
     * const { count } = await prisma.shareLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareLinkDeleteManyArgs>(args?: SelectSubset<T, ShareLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareLinkUpdateManyArgs>(args: SelectSubset<T, ShareLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks and returns the data updated in the database.
     * @param {ShareLinkUpdateManyAndReturnArgs} args - Arguments to update many ShareLinks.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareLink.
     * @param {ShareLinkUpsertArgs} args - Arguments to update or create a ShareLink.
     * @example
     * // Update or create a ShareLink
     * const shareLink = await prisma.shareLink.upsert({
     *   create: {
     *     // ... data to create a ShareLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareLink we want to update
     *   }
     * })
     */
    upsert<T extends ShareLinkUpsertArgs>(args: SelectSubset<T, ShareLinkUpsertArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkCountArgs} args - Arguments to filter ShareLinks to count.
     * @example
     * // Count the number of ShareLinks
     * const count = await prisma.shareLink.count({
     *   where: {
     *     // ... the filter for the ShareLinks we want to count
     *   }
     * })
    **/
    count<T extends ShareLinkCountArgs>(
      args?: Subset<T, ShareLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareLinkAggregateArgs>(args: Subset<T, ShareLinkAggregateArgs>): Prisma.PrismaPromise<GetShareLinkAggregateType<T>>

    /**
     * Group by ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkGroupByArgs} args - Group by arguments.
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
      T extends ShareLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareLinkGroupByArgs['orderBy'] }
        : { orderBy?: ShareLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShareLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareLink model
   */
  readonly fields: ShareLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShareLink model
   */
  interface ShareLinkFieldRefs {
    readonly id: FieldRef<"ShareLink", 'String'>
    readonly projectId: FieldRef<"ShareLink", 'String'>
    readonly shareCode: FieldRef<"ShareLink", 'String'>
    readonly shareUrl: FieldRef<"ShareLink", 'String'>
    readonly title: FieldRef<"ShareLink", 'String'>
    readonly description: FieldRef<"ShareLink", 'String'>
    readonly status: FieldRef<"ShareLink", 'ShareStatus'>
    readonly createdAt: FieldRef<"ShareLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareLink findUnique
   */
  export type ShareLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findUniqueOrThrow
   */
  export type ShareLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findFirst
   */
  export type ShareLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findFirstOrThrow
   */
  export type ShareLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findMany
   */
  export type ShareLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLinks to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink create
   */
  export type ShareLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareLink.
     */
    data: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
  }

  /**
   * ShareLink createMany
   */
  export type ShareLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareLink createManyAndReturn
   */
  export type ShareLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink update
   */
  export type ShareLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareLink.
     */
    data: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
    /**
     * Choose, which ShareLink to update.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink updateMany
   */
  export type ShareLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
  }

  /**
   * ShareLink updateManyAndReturn
   */
  export type ShareLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink upsert
   */
  export type ShareLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareLink to update in case it exists.
     */
    where: ShareLinkWhereUniqueInput
    /**
     * In case the ShareLink found by the `where` argument doesn't exist, create a new ShareLink with this data.
     */
    create: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
    /**
     * In case the ShareLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
  }

  /**
   * ShareLink delete
   */
  export type ShareLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter which ShareLink to delete.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink deleteMany
   */
  export type ShareLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLinks to delete
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to delete.
     */
    limit?: number
  }

  /**
   * ShareLink without action
   */
  export type ShareLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
  }


  /**
   * Model AiProvider
   */

  export type AggregateAiProvider = {
    _count: AiProviderCountAggregateOutputType | null
    _avg: AiProviderAvgAggregateOutputType | null
    _sum: AiProviderSumAggregateOutputType | null
    _min: AiProviderMinAggregateOutputType | null
    _max: AiProviderMaxAggregateOutputType | null
  }

  export type AiProviderAvgAggregateOutputType = {
    timeoutMs: number | null
    retryLimit: number | null
    dailyBudgetLimit: Decimal | null
  }

  export type AiProviderSumAggregateOutputType = {
    timeoutMs: number | null
    retryLimit: number | null
    dailyBudgetLimit: Decimal | null
  }

  export type AiProviderMinAggregateOutputType = {
    id: string | null
    providerCode: string | null
    providerName: string | null
    baseUrl: string | null
    apiKeyRef: string | null
    timeoutMs: number | null
    retryLimit: number | null
    dailyBudgetLimit: Decimal | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiProviderMaxAggregateOutputType = {
    id: string | null
    providerCode: string | null
    providerName: string | null
    baseUrl: string | null
    apiKeyRef: string | null
    timeoutMs: number | null
    retryLimit: number | null
    dailyBudgetLimit: Decimal | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiProviderCountAggregateOutputType = {
    id: number
    providerCode: number
    providerName: number
    baseUrl: number
    apiKeyRef: number
    timeoutMs: number
    retryLimit: number
    dailyBudgetLimit: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiProviderAvgAggregateInputType = {
    timeoutMs?: true
    retryLimit?: true
    dailyBudgetLimit?: true
  }

  export type AiProviderSumAggregateInputType = {
    timeoutMs?: true
    retryLimit?: true
    dailyBudgetLimit?: true
  }

  export type AiProviderMinAggregateInputType = {
    id?: true
    providerCode?: true
    providerName?: true
    baseUrl?: true
    apiKeyRef?: true
    timeoutMs?: true
    retryLimit?: true
    dailyBudgetLimit?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiProviderMaxAggregateInputType = {
    id?: true
    providerCode?: true
    providerName?: true
    baseUrl?: true
    apiKeyRef?: true
    timeoutMs?: true
    retryLimit?: true
    dailyBudgetLimit?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiProviderCountAggregateInputType = {
    id?: true
    providerCode?: true
    providerName?: true
    baseUrl?: true
    apiKeyRef?: true
    timeoutMs?: true
    retryLimit?: true
    dailyBudgetLimit?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiProvider to aggregate.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiProviders
    **/
    _count?: true | AiProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiProviderMaxAggregateInputType
  }

  export type GetAiProviderAggregateType<T extends AiProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateAiProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiProvider[P]>
      : GetScalarType<T[P], AggregateAiProvider[P]>
  }




  export type AiProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiProviderWhereInput
    orderBy?: AiProviderOrderByWithAggregationInput | AiProviderOrderByWithAggregationInput[]
    by: AiProviderScalarFieldEnum[] | AiProviderScalarFieldEnum
    having?: AiProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiProviderCountAggregateInputType | true
    _avg?: AiProviderAvgAggregateInputType
    _sum?: AiProviderSumAggregateInputType
    _min?: AiProviderMinAggregateInputType
    _max?: AiProviderMaxAggregateInputType
  }

  export type AiProviderGroupByOutputType = {
    id: string
    providerCode: string
    providerName: string
    baseUrl: string
    apiKeyRef: string
    timeoutMs: number
    retryLimit: number
    dailyBudgetLimit: Decimal | null
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: AiProviderCountAggregateOutputType | null
    _avg: AiProviderAvgAggregateOutputType | null
    _sum: AiProviderSumAggregateOutputType | null
    _min: AiProviderMinAggregateOutputType | null
    _max: AiProviderMaxAggregateOutputType | null
  }

  type GetAiProviderGroupByPayload<T extends AiProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiProviderGroupByOutputType[P]>
            : GetScalarType<T[P], AiProviderGroupByOutputType[P]>
        }
      >
    >


  export type AiProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerCode?: boolean
    providerName?: boolean
    baseUrl?: boolean
    apiKeyRef?: boolean
    timeoutMs?: boolean
    retryLimit?: boolean
    dailyBudgetLimit?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    models?: boolean | AiProvider$modelsArgs<ExtArgs>
    _count?: boolean | AiProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiProvider"]>

  export type AiProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerCode?: boolean
    providerName?: boolean
    baseUrl?: boolean
    apiKeyRef?: boolean
    timeoutMs?: boolean
    retryLimit?: boolean
    dailyBudgetLimit?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiProvider"]>

  export type AiProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerCode?: boolean
    providerName?: boolean
    baseUrl?: boolean
    apiKeyRef?: boolean
    timeoutMs?: boolean
    retryLimit?: boolean
    dailyBudgetLimit?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiProvider"]>

  export type AiProviderSelectScalar = {
    id?: boolean
    providerCode?: boolean
    providerName?: boolean
    baseUrl?: boolean
    apiKeyRef?: boolean
    timeoutMs?: boolean
    retryLimit?: boolean
    dailyBudgetLimit?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerCode" | "providerName" | "baseUrl" | "apiKeyRef" | "timeoutMs" | "retryLimit" | "dailyBudgetLimit" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["aiProvider"]>
  export type AiProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | AiProvider$modelsArgs<ExtArgs>
    _count?: boolean | AiProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AiProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AiProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiProvider"
    objects: {
      models: Prisma.$AiModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerCode: string
      providerName: string
      baseUrl: string
      apiKeyRef: string
      timeoutMs: number
      retryLimit: number
      dailyBudgetLimit: Prisma.Decimal | null
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiProvider"]>
    composites: {}
  }

  type AiProviderGetPayload<S extends boolean | null | undefined | AiProviderDefaultArgs> = $Result.GetResult<Prisma.$AiProviderPayload, S>

  type AiProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiProviderCountAggregateInputType | true
    }

  export interface AiProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiProvider'], meta: { name: 'AiProvider' } }
    /**
     * Find zero or one AiProvider that matches the filter.
     * @param {AiProviderFindUniqueArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiProviderFindUniqueArgs>(args: SelectSubset<T, AiProviderFindUniqueArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiProviderFindUniqueOrThrowArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, AiProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderFindFirstArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiProviderFindFirstArgs>(args?: SelectSubset<T, AiProviderFindFirstArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderFindFirstOrThrowArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, AiProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiProviders
     * const aiProviders = await prisma.aiProvider.findMany()
     * 
     * // Get first 10 AiProviders
     * const aiProviders = await prisma.aiProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiProviderWithIdOnly = await prisma.aiProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiProviderFindManyArgs>(args?: SelectSubset<T, AiProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiProvider.
     * @param {AiProviderCreateArgs} args - Arguments to create a AiProvider.
     * @example
     * // Create one AiProvider
     * const AiProvider = await prisma.aiProvider.create({
     *   data: {
     *     // ... data to create a AiProvider
     *   }
     * })
     * 
     */
    create<T extends AiProviderCreateArgs>(args: SelectSubset<T, AiProviderCreateArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiProviders.
     * @param {AiProviderCreateManyArgs} args - Arguments to create many AiProviders.
     * @example
     * // Create many AiProviders
     * const aiProvider = await prisma.aiProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiProviderCreateManyArgs>(args?: SelectSubset<T, AiProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiProviders and returns the data saved in the database.
     * @param {AiProviderCreateManyAndReturnArgs} args - Arguments to create many AiProviders.
     * @example
     * // Create many AiProviders
     * const aiProvider = await prisma.aiProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiProviders and only return the `id`
     * const aiProviderWithIdOnly = await prisma.aiProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, AiProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiProvider.
     * @param {AiProviderDeleteArgs} args - Arguments to delete one AiProvider.
     * @example
     * // Delete one AiProvider
     * const AiProvider = await prisma.aiProvider.delete({
     *   where: {
     *     // ... filter to delete one AiProvider
     *   }
     * })
     * 
     */
    delete<T extends AiProviderDeleteArgs>(args: SelectSubset<T, AiProviderDeleteArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiProvider.
     * @param {AiProviderUpdateArgs} args - Arguments to update one AiProvider.
     * @example
     * // Update one AiProvider
     * const aiProvider = await prisma.aiProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiProviderUpdateArgs>(args: SelectSubset<T, AiProviderUpdateArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiProviders.
     * @param {AiProviderDeleteManyArgs} args - Arguments to filter AiProviders to delete.
     * @example
     * // Delete a few AiProviders
     * const { count } = await prisma.aiProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiProviderDeleteManyArgs>(args?: SelectSubset<T, AiProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiProviders
     * const aiProvider = await prisma.aiProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiProviderUpdateManyArgs>(args: SelectSubset<T, AiProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiProviders and returns the data updated in the database.
     * @param {AiProviderUpdateManyAndReturnArgs} args - Arguments to update many AiProviders.
     * @example
     * // Update many AiProviders
     * const aiProvider = await prisma.aiProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiProviders and only return the `id`
     * const aiProviderWithIdOnly = await prisma.aiProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, AiProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiProvider.
     * @param {AiProviderUpsertArgs} args - Arguments to update or create a AiProvider.
     * @example
     * // Update or create a AiProvider
     * const aiProvider = await prisma.aiProvider.upsert({
     *   create: {
     *     // ... data to create a AiProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiProvider we want to update
     *   }
     * })
     */
    upsert<T extends AiProviderUpsertArgs>(args: SelectSubset<T, AiProviderUpsertArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderCountArgs} args - Arguments to filter AiProviders to count.
     * @example
     * // Count the number of AiProviders
     * const count = await prisma.aiProvider.count({
     *   where: {
     *     // ... the filter for the AiProviders we want to count
     *   }
     * })
    **/
    count<T extends AiProviderCountArgs>(
      args?: Subset<T, AiProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiProviderAggregateArgs>(args: Subset<T, AiProviderAggregateArgs>): Prisma.PrismaPromise<GetAiProviderAggregateType<T>>

    /**
     * Group by AiProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderGroupByArgs} args - Group by arguments.
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
      T extends AiProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiProviderGroupByArgs['orderBy'] }
        : { orderBy?: AiProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiProvider model
   */
  readonly fields: AiProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends AiProvider$modelsArgs<ExtArgs> = {}>(args?: Subset<T, AiProvider$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AiProvider model
   */
  interface AiProviderFieldRefs {
    readonly id: FieldRef<"AiProvider", 'String'>
    readonly providerCode: FieldRef<"AiProvider", 'String'>
    readonly providerName: FieldRef<"AiProvider", 'String'>
    readonly baseUrl: FieldRef<"AiProvider", 'String'>
    readonly apiKeyRef: FieldRef<"AiProvider", 'String'>
    readonly timeoutMs: FieldRef<"AiProvider", 'Int'>
    readonly retryLimit: FieldRef<"AiProvider", 'Int'>
    readonly dailyBudgetLimit: FieldRef<"AiProvider", 'Decimal'>
    readonly enabled: FieldRef<"AiProvider", 'Boolean'>
    readonly createdAt: FieldRef<"AiProvider", 'DateTime'>
    readonly updatedAt: FieldRef<"AiProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiProvider findUnique
   */
  export type AiProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider findUniqueOrThrow
   */
  export type AiProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider findFirst
   */
  export type AiProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiProviders.
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiProviders.
     */
    distinct?: AiProviderScalarFieldEnum | AiProviderScalarFieldEnum[]
  }

  /**
   * AiProvider findFirstOrThrow
   */
  export type AiProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiProviders.
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiProviders.
     */
    distinct?: AiProviderScalarFieldEnum | AiProviderScalarFieldEnum[]
  }

  /**
   * AiProvider findMany
   */
  export type AiProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProviders to fetch.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiProviders.
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiProviders.
     */
    distinct?: AiProviderScalarFieldEnum | AiProviderScalarFieldEnum[]
  }

  /**
   * AiProvider create
   */
  export type AiProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a AiProvider.
     */
    data: XOR<AiProviderCreateInput, AiProviderUncheckedCreateInput>
  }

  /**
   * AiProvider createMany
   */
  export type AiProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiProviders.
     */
    data: AiProviderCreateManyInput | AiProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiProvider createManyAndReturn
   */
  export type AiProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * The data used to create many AiProviders.
     */
    data: AiProviderCreateManyInput | AiProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiProvider update
   */
  export type AiProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a AiProvider.
     */
    data: XOR<AiProviderUpdateInput, AiProviderUncheckedUpdateInput>
    /**
     * Choose, which AiProvider to update.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider updateMany
   */
  export type AiProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiProviders.
     */
    data: XOR<AiProviderUpdateManyMutationInput, AiProviderUncheckedUpdateManyInput>
    /**
     * Filter which AiProviders to update
     */
    where?: AiProviderWhereInput
    /**
     * Limit how many AiProviders to update.
     */
    limit?: number
  }

  /**
   * AiProvider updateManyAndReturn
   */
  export type AiProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * The data used to update AiProviders.
     */
    data: XOR<AiProviderUpdateManyMutationInput, AiProviderUncheckedUpdateManyInput>
    /**
     * Filter which AiProviders to update
     */
    where?: AiProviderWhereInput
    /**
     * Limit how many AiProviders to update.
     */
    limit?: number
  }

  /**
   * AiProvider upsert
   */
  export type AiProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the AiProvider to update in case it exists.
     */
    where: AiProviderWhereUniqueInput
    /**
     * In case the AiProvider found by the `where` argument doesn't exist, create a new AiProvider with this data.
     */
    create: XOR<AiProviderCreateInput, AiProviderUncheckedCreateInput>
    /**
     * In case the AiProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiProviderUpdateInput, AiProviderUncheckedUpdateInput>
  }

  /**
   * AiProvider delete
   */
  export type AiProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter which AiProvider to delete.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider deleteMany
   */
  export type AiProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiProviders to delete
     */
    where?: AiProviderWhereInput
    /**
     * Limit how many AiProviders to delete.
     */
    limit?: number
  }

  /**
   * AiProvider.models
   */
  export type AiProvider$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    where?: AiModelWhereInput
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    cursor?: AiModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiProvider without action
   */
  export type AiProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
  }


  /**
   * Model AiModel
   */

  export type AggregateAiModel = {
    _count: AiModelCountAggregateOutputType | null
    _avg: AiModelAvgAggregateOutputType | null
    _sum: AiModelSumAggregateOutputType | null
    _min: AiModelMinAggregateOutputType | null
    _max: AiModelMaxAggregateOutputType | null
  }

  export type AiModelAvgAggregateOutputType = {
    temperature: number | null
    topP: number | null
    candidateCount: number | null
  }

  export type AiModelSumAggregateOutputType = {
    temperature: number | null
    topP: number | null
    candidateCount: number | null
  }

  export type AiModelMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    modelCode: string | null
    displayName: string | null
    modelType: $Enums.ModelType | null
    enabled: boolean | null
    isDefault: boolean | null
    temperature: number | null
    topP: number | null
    imageSize: string | null
    aspectRatio: string | null
    candidateCount: number | null
    responseFormat: string | null
    promptOptimizerEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiModelMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    modelCode: string | null
    displayName: string | null
    modelType: $Enums.ModelType | null
    enabled: boolean | null
    isDefault: boolean | null
    temperature: number | null
    topP: number | null
    imageSize: string | null
    aspectRatio: string | null
    candidateCount: number | null
    responseFormat: string | null
    promptOptimizerEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiModelCountAggregateOutputType = {
    id: number
    providerId: number
    modelCode: number
    displayName: number
    modelType: number
    enabled: number
    isDefault: number
    temperature: number
    topP: number
    imageSize: number
    aspectRatio: number
    candidateCount: number
    responseFormat: number
    promptOptimizerEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiModelAvgAggregateInputType = {
    temperature?: true
    topP?: true
    candidateCount?: true
  }

  export type AiModelSumAggregateInputType = {
    temperature?: true
    topP?: true
    candidateCount?: true
  }

  export type AiModelMinAggregateInputType = {
    id?: true
    providerId?: true
    modelCode?: true
    displayName?: true
    modelType?: true
    enabled?: true
    isDefault?: true
    temperature?: true
    topP?: true
    imageSize?: true
    aspectRatio?: true
    candidateCount?: true
    responseFormat?: true
    promptOptimizerEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiModelMaxAggregateInputType = {
    id?: true
    providerId?: true
    modelCode?: true
    displayName?: true
    modelType?: true
    enabled?: true
    isDefault?: true
    temperature?: true
    topP?: true
    imageSize?: true
    aspectRatio?: true
    candidateCount?: true
    responseFormat?: true
    promptOptimizerEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiModelCountAggregateInputType = {
    id?: true
    providerId?: true
    modelCode?: true
    displayName?: true
    modelType?: true
    enabled?: true
    isDefault?: true
    temperature?: true
    topP?: true
    imageSize?: true
    aspectRatio?: true
    candidateCount?: true
    responseFormat?: true
    promptOptimizerEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiModel to aggregate.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiModels
    **/
    _count?: true | AiModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiModelMaxAggregateInputType
  }

  export type GetAiModelAggregateType<T extends AiModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAiModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiModel[P]>
      : GetScalarType<T[P], AggregateAiModel[P]>
  }




  export type AiModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiModelWhereInput
    orderBy?: AiModelOrderByWithAggregationInput | AiModelOrderByWithAggregationInput[]
    by: AiModelScalarFieldEnum[] | AiModelScalarFieldEnum
    having?: AiModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiModelCountAggregateInputType | true
    _avg?: AiModelAvgAggregateInputType
    _sum?: AiModelSumAggregateInputType
    _min?: AiModelMinAggregateInputType
    _max?: AiModelMaxAggregateInputType
  }

  export type AiModelGroupByOutputType = {
    id: string
    providerId: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled: boolean
    isDefault: boolean
    temperature: number | null
    topP: number | null
    imageSize: string | null
    aspectRatio: string | null
    candidateCount: number | null
    responseFormat: string | null
    promptOptimizerEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: AiModelCountAggregateOutputType | null
    _avg: AiModelAvgAggregateOutputType | null
    _sum: AiModelSumAggregateOutputType | null
    _min: AiModelMinAggregateOutputType | null
    _max: AiModelMaxAggregateOutputType | null
  }

  type GetAiModelGroupByPayload<T extends AiModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiModelGroupByOutputType[P]>
            : GetScalarType<T[P], AiModelGroupByOutputType[P]>
        }
      >
    >


  export type AiModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    modelCode?: boolean
    displayName?: boolean
    modelType?: boolean
    enabled?: boolean
    isDefault?: boolean
    temperature?: boolean
    topP?: boolean
    imageSize?: boolean
    aspectRatio?: boolean
    candidateCount?: boolean
    responseFormat?: boolean
    promptOptimizerEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiModel"]>

  export type AiModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    modelCode?: boolean
    displayName?: boolean
    modelType?: boolean
    enabled?: boolean
    isDefault?: boolean
    temperature?: boolean
    topP?: boolean
    imageSize?: boolean
    aspectRatio?: boolean
    candidateCount?: boolean
    responseFormat?: boolean
    promptOptimizerEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiModel"]>

  export type AiModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    modelCode?: boolean
    displayName?: boolean
    modelType?: boolean
    enabled?: boolean
    isDefault?: boolean
    temperature?: boolean
    topP?: boolean
    imageSize?: boolean
    aspectRatio?: boolean
    candidateCount?: boolean
    responseFormat?: boolean
    promptOptimizerEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiModel"]>

  export type AiModelSelectScalar = {
    id?: boolean
    providerId?: boolean
    modelCode?: boolean
    displayName?: boolean
    modelType?: boolean
    enabled?: boolean
    isDefault?: boolean
    temperature?: boolean
    topP?: boolean
    imageSize?: boolean
    aspectRatio?: boolean
    candidateCount?: boolean
    responseFormat?: boolean
    promptOptimizerEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "modelCode" | "displayName" | "modelType" | "enabled" | "isDefault" | "temperature" | "topP" | "imageSize" | "aspectRatio" | "candidateCount" | "responseFormat" | "promptOptimizerEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["aiModel"]>
  export type AiModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }
  export type AiModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }
  export type AiModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }

  export type $AiModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiModel"
    objects: {
      provider: Prisma.$AiProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      modelCode: string
      displayName: string
      modelType: $Enums.ModelType
      enabled: boolean
      isDefault: boolean
      temperature: number | null
      topP: number | null
      imageSize: string | null
      aspectRatio: string | null
      candidateCount: number | null
      responseFormat: string | null
      promptOptimizerEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiModel"]>
    composites: {}
  }

  type AiModelGetPayload<S extends boolean | null | undefined | AiModelDefaultArgs> = $Result.GetResult<Prisma.$AiModelPayload, S>

  type AiModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiModelCountAggregateInputType | true
    }

  export interface AiModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiModel'], meta: { name: 'AiModel' } }
    /**
     * Find zero or one AiModel that matches the filter.
     * @param {AiModelFindUniqueArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiModelFindUniqueArgs>(args: SelectSubset<T, AiModelFindUniqueArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiModelFindUniqueOrThrowArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiModelFindUniqueOrThrowArgs>(args: SelectSubset<T, AiModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelFindFirstArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiModelFindFirstArgs>(args?: SelectSubset<T, AiModelFindFirstArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelFindFirstOrThrowArgs} args - Arguments to find a AiModel
     * @example
     * // Get one AiModel
     * const aiModel = await prisma.aiModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiModelFindFirstOrThrowArgs>(args?: SelectSubset<T, AiModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiModels
     * const aiModels = await prisma.aiModel.findMany()
     * 
     * // Get first 10 AiModels
     * const aiModels = await prisma.aiModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiModelWithIdOnly = await prisma.aiModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiModelFindManyArgs>(args?: SelectSubset<T, AiModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiModel.
     * @param {AiModelCreateArgs} args - Arguments to create a AiModel.
     * @example
     * // Create one AiModel
     * const AiModel = await prisma.aiModel.create({
     *   data: {
     *     // ... data to create a AiModel
     *   }
     * })
     * 
     */
    create<T extends AiModelCreateArgs>(args: SelectSubset<T, AiModelCreateArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiModels.
     * @param {AiModelCreateManyArgs} args - Arguments to create many AiModels.
     * @example
     * // Create many AiModels
     * const aiModel = await prisma.aiModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiModelCreateManyArgs>(args?: SelectSubset<T, AiModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiModels and returns the data saved in the database.
     * @param {AiModelCreateManyAndReturnArgs} args - Arguments to create many AiModels.
     * @example
     * // Create many AiModels
     * const aiModel = await prisma.aiModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiModels and only return the `id`
     * const aiModelWithIdOnly = await prisma.aiModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiModelCreateManyAndReturnArgs>(args?: SelectSubset<T, AiModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiModel.
     * @param {AiModelDeleteArgs} args - Arguments to delete one AiModel.
     * @example
     * // Delete one AiModel
     * const AiModel = await prisma.aiModel.delete({
     *   where: {
     *     // ... filter to delete one AiModel
     *   }
     * })
     * 
     */
    delete<T extends AiModelDeleteArgs>(args: SelectSubset<T, AiModelDeleteArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiModel.
     * @param {AiModelUpdateArgs} args - Arguments to update one AiModel.
     * @example
     * // Update one AiModel
     * const aiModel = await prisma.aiModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiModelUpdateArgs>(args: SelectSubset<T, AiModelUpdateArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiModels.
     * @param {AiModelDeleteManyArgs} args - Arguments to filter AiModels to delete.
     * @example
     * // Delete a few AiModels
     * const { count } = await prisma.aiModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiModelDeleteManyArgs>(args?: SelectSubset<T, AiModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiModels
     * const aiModel = await prisma.aiModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiModelUpdateManyArgs>(args: SelectSubset<T, AiModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiModels and returns the data updated in the database.
     * @param {AiModelUpdateManyAndReturnArgs} args - Arguments to update many AiModels.
     * @example
     * // Update many AiModels
     * const aiModel = await prisma.aiModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiModels and only return the `id`
     * const aiModelWithIdOnly = await prisma.aiModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiModelUpdateManyAndReturnArgs>(args: SelectSubset<T, AiModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiModel.
     * @param {AiModelUpsertArgs} args - Arguments to update or create a AiModel.
     * @example
     * // Update or create a AiModel
     * const aiModel = await prisma.aiModel.upsert({
     *   create: {
     *     // ... data to create a AiModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiModel we want to update
     *   }
     * })
     */
    upsert<T extends AiModelUpsertArgs>(args: SelectSubset<T, AiModelUpsertArgs<ExtArgs>>): Prisma__AiModelClient<$Result.GetResult<Prisma.$AiModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelCountArgs} args - Arguments to filter AiModels to count.
     * @example
     * // Count the number of AiModels
     * const count = await prisma.aiModel.count({
     *   where: {
     *     // ... the filter for the AiModels we want to count
     *   }
     * })
    **/
    count<T extends AiModelCountArgs>(
      args?: Subset<T, AiModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiModelAggregateArgs>(args: Subset<T, AiModelAggregateArgs>): Prisma.PrismaPromise<GetAiModelAggregateType<T>>

    /**
     * Group by AiModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiModelGroupByArgs} args - Group by arguments.
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
      T extends AiModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiModelGroupByArgs['orderBy'] }
        : { orderBy?: AiModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiModel model
   */
  readonly fields: AiModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends AiProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AiProviderDefaultArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AiModel model
   */
  interface AiModelFieldRefs {
    readonly id: FieldRef<"AiModel", 'String'>
    readonly providerId: FieldRef<"AiModel", 'String'>
    readonly modelCode: FieldRef<"AiModel", 'String'>
    readonly displayName: FieldRef<"AiModel", 'String'>
    readonly modelType: FieldRef<"AiModel", 'ModelType'>
    readonly enabled: FieldRef<"AiModel", 'Boolean'>
    readonly isDefault: FieldRef<"AiModel", 'Boolean'>
    readonly temperature: FieldRef<"AiModel", 'Float'>
    readonly topP: FieldRef<"AiModel", 'Float'>
    readonly imageSize: FieldRef<"AiModel", 'String'>
    readonly aspectRatio: FieldRef<"AiModel", 'String'>
    readonly candidateCount: FieldRef<"AiModel", 'Int'>
    readonly responseFormat: FieldRef<"AiModel", 'String'>
    readonly promptOptimizerEnabled: FieldRef<"AiModel", 'Boolean'>
    readonly createdAt: FieldRef<"AiModel", 'DateTime'>
    readonly updatedAt: FieldRef<"AiModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiModel findUnique
   */
  export type AiModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel findUniqueOrThrow
   */
  export type AiModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel findFirst
   */
  export type AiModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiModels.
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiModels.
     */
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiModel findFirstOrThrow
   */
  export type AiModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModel to fetch.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiModels.
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiModels.
     */
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiModel findMany
   */
  export type AiModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter, which AiModels to fetch.
     */
    where?: AiModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiModels to fetch.
     */
    orderBy?: AiModelOrderByWithRelationInput | AiModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiModels.
     */
    cursor?: AiModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiModels.
     */
    distinct?: AiModelScalarFieldEnum | AiModelScalarFieldEnum[]
  }

  /**
   * AiModel create
   */
  export type AiModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * The data needed to create a AiModel.
     */
    data: XOR<AiModelCreateInput, AiModelUncheckedCreateInput>
  }

  /**
   * AiModel createMany
   */
  export type AiModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiModels.
     */
    data: AiModelCreateManyInput | AiModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiModel createManyAndReturn
   */
  export type AiModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * The data used to create many AiModels.
     */
    data: AiModelCreateManyInput | AiModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiModel update
   */
  export type AiModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * The data needed to update a AiModel.
     */
    data: XOR<AiModelUpdateInput, AiModelUncheckedUpdateInput>
    /**
     * Choose, which AiModel to update.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel updateMany
   */
  export type AiModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiModels.
     */
    data: XOR<AiModelUpdateManyMutationInput, AiModelUncheckedUpdateManyInput>
    /**
     * Filter which AiModels to update
     */
    where?: AiModelWhereInput
    /**
     * Limit how many AiModels to update.
     */
    limit?: number
  }

  /**
   * AiModel updateManyAndReturn
   */
  export type AiModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * The data used to update AiModels.
     */
    data: XOR<AiModelUpdateManyMutationInput, AiModelUncheckedUpdateManyInput>
    /**
     * Filter which AiModels to update
     */
    where?: AiModelWhereInput
    /**
     * Limit how many AiModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiModel upsert
   */
  export type AiModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * The filter to search for the AiModel to update in case it exists.
     */
    where: AiModelWhereUniqueInput
    /**
     * In case the AiModel found by the `where` argument doesn't exist, create a new AiModel with this data.
     */
    create: XOR<AiModelCreateInput, AiModelUncheckedCreateInput>
    /**
     * In case the AiModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiModelUpdateInput, AiModelUncheckedUpdateInput>
  }

  /**
   * AiModel delete
   */
  export type AiModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
    /**
     * Filter which AiModel to delete.
     */
    where: AiModelWhereUniqueInput
  }

  /**
   * AiModel deleteMany
   */
  export type AiModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiModels to delete
     */
    where?: AiModelWhereInput
    /**
     * Limit how many AiModels to delete.
     */
    limit?: number
  }

  /**
   * AiModel without action
   */
  export type AiModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiModel
     */
    select?: AiModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiModel
     */
    omit?: AiModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiModelInclude<ExtArgs> | null
  }


  /**
   * Model PromptTemplate
   */

  export type AggregatePromptTemplate = {
    _count: PromptTemplateCountAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  export type PromptTemplateMinAggregateOutputType = {
    id: string | null
    sceneType: string | null
    styleCode: string | null
    promptTemplate: string | null
    negativePrompt: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateMaxAggregateOutputType = {
    id: string | null
    sceneType: string | null
    styleCode: string | null
    promptTemplate: string | null
    negativePrompt: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateCountAggregateOutputType = {
    id: number
    sceneType: number
    styleCode: number
    promptTemplate: number
    negativePrompt: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptTemplateMinAggregateInputType = {
    id?: true
    sceneType?: true
    styleCode?: true
    promptTemplate?: true
    negativePrompt?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateMaxAggregateInputType = {
    id?: true
    sceneType?: true
    styleCode?: true
    promptTemplate?: true
    negativePrompt?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateCountAggregateInputType = {
    id?: true
    sceneType?: true
    styleCode?: true
    promptTemplate?: true
    negativePrompt?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplate to aggregate.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptTemplates
    **/
    _count?: true | PromptTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type GetPromptTemplateAggregateType<T extends PromptTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptTemplate[P]>
      : GetScalarType<T[P], AggregatePromptTemplate[P]>
  }




  export type PromptTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithAggregationInput | PromptTemplateOrderByWithAggregationInput[]
    by: PromptTemplateScalarFieldEnum[] | PromptTemplateScalarFieldEnum
    having?: PromptTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptTemplateCountAggregateInputType | true
    _min?: PromptTemplateMinAggregateInputType
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type PromptTemplateGroupByOutputType = {
    id: string
    sceneType: string
    styleCode: string
    promptTemplate: string
    negativePrompt: string | null
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromptTemplateCountAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  type GetPromptTemplateGroupByPayload<T extends PromptTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PromptTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sceneType?: boolean
    styleCode?: boolean
    promptTemplate?: boolean
    negativePrompt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sceneType?: boolean
    styleCode?: boolean
    promptTemplate?: boolean
    negativePrompt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sceneType?: boolean
    styleCode?: boolean
    promptTemplate?: boolean
    negativePrompt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectScalar = {
    id?: boolean
    sceneType?: boolean
    styleCode?: boolean
    promptTemplate?: boolean
    negativePrompt?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sceneType" | "styleCode" | "promptTemplate" | "negativePrompt" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["promptTemplate"]>

  export type $PromptTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sceneType: string
      styleCode: string
      promptTemplate: string
      negativePrompt: string | null
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptTemplate"]>
    composites: {}
  }

  type PromptTemplateGetPayload<S extends boolean | null | undefined | PromptTemplateDefaultArgs> = $Result.GetResult<Prisma.$PromptTemplatePayload, S>

  type PromptTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptTemplateCountAggregateInputType | true
    }

  export interface PromptTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptTemplate'], meta: { name: 'PromptTemplate' } }
    /**
     * Find zero or one PromptTemplate that matches the filter.
     * @param {PromptTemplateFindUniqueArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptTemplateFindUniqueArgs>(args: SelectSubset<T, PromptTemplateFindUniqueArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptTemplateFindUniqueOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptTemplateFindFirstArgs>(args?: SelectSubset<T, PromptTemplateFindFirstArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany()
     * 
     * // Get first 10 PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptTemplateFindManyArgs>(args?: SelectSubset<T, PromptTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptTemplate.
     * @param {PromptTemplateCreateArgs} args - Arguments to create a PromptTemplate.
     * @example
     * // Create one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.create({
     *   data: {
     *     // ... data to create a PromptTemplate
     *   }
     * })
     * 
     */
    create<T extends PromptTemplateCreateArgs>(args: SelectSubset<T, PromptTemplateCreateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptTemplates.
     * @param {PromptTemplateCreateManyArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptTemplateCreateManyArgs>(args?: SelectSubset<T, PromptTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptTemplates and returns the data saved in the database.
     * @param {PromptTemplateCreateManyAndReturnArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptTemplate.
     * @param {PromptTemplateDeleteArgs} args - Arguments to delete one PromptTemplate.
     * @example
     * // Delete one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.delete({
     *   where: {
     *     // ... filter to delete one PromptTemplate
     *   }
     * })
     * 
     */
    delete<T extends PromptTemplateDeleteArgs>(args: SelectSubset<T, PromptTemplateDeleteArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptTemplate.
     * @param {PromptTemplateUpdateArgs} args - Arguments to update one PromptTemplate.
     * @example
     * // Update one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptTemplateUpdateArgs>(args: SelectSubset<T, PromptTemplateUpdateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptTemplates.
     * @param {PromptTemplateDeleteManyArgs} args - Arguments to filter PromptTemplates to delete.
     * @example
     * // Delete a few PromptTemplates
     * const { count } = await prisma.promptTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptTemplateDeleteManyArgs>(args?: SelectSubset<T, PromptTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptTemplateUpdateManyArgs>(args: SelectSubset<T, PromptTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates and returns the data updated in the database.
     * @param {PromptTemplateUpdateManyAndReturnArgs} args - Arguments to update many PromptTemplates.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptTemplate.
     * @param {PromptTemplateUpsertArgs} args - Arguments to update or create a PromptTemplate.
     * @example
     * // Update or create a PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.upsert({
     *   create: {
     *     // ... data to create a PromptTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PromptTemplateUpsertArgs>(args: SelectSubset<T, PromptTemplateUpsertArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateCountArgs} args - Arguments to filter PromptTemplates to count.
     * @example
     * // Count the number of PromptTemplates
     * const count = await prisma.promptTemplate.count({
     *   where: {
     *     // ... the filter for the PromptTemplates we want to count
     *   }
     * })
    **/
    count<T extends PromptTemplateCountArgs>(
      args?: Subset<T, PromptTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptTemplateAggregateArgs>(args: Subset<T, PromptTemplateAggregateArgs>): Prisma.PrismaPromise<GetPromptTemplateAggregateType<T>>

    /**
     * Group by PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateGroupByArgs} args - Group by arguments.
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
      T extends PromptTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PromptTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptTemplate model
   */
  readonly fields: PromptTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PromptTemplate model
   */
  interface PromptTemplateFieldRefs {
    readonly id: FieldRef<"PromptTemplate", 'String'>
    readonly sceneType: FieldRef<"PromptTemplate", 'String'>
    readonly styleCode: FieldRef<"PromptTemplate", 'String'>
    readonly promptTemplate: FieldRef<"PromptTemplate", 'String'>
    readonly negativePrompt: FieldRef<"PromptTemplate", 'String'>
    readonly enabled: FieldRef<"PromptTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"PromptTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptTemplate findUnique
   */
  export type PromptTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findUniqueOrThrow
   */
  export type PromptTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findFirst
   */
  export type PromptTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findFirstOrThrow
   */
  export type PromptTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findMany
   */
  export type PromptTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplates to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate create
   */
  export type PromptTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a PromptTemplate.
     */
    data: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
  }

  /**
   * PromptTemplate createMany
   */
  export type PromptTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate createManyAndReturn
   */
  export type PromptTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate update
   */
  export type PromptTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a PromptTemplate.
     */
    data: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
    /**
     * Choose, which PromptTemplate to update.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate updateMany
   */
  export type PromptTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to update.
     */
    limit?: number
  }

  /**
   * PromptTemplate updateManyAndReturn
   */
  export type PromptTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to update.
     */
    limit?: number
  }

  /**
   * PromptTemplate upsert
   */
  export type PromptTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the PromptTemplate to update in case it exists.
     */
    where: PromptTemplateWhereUniqueInput
    /**
     * In case the PromptTemplate found by the `where` argument doesn't exist, create a new PromptTemplate with this data.
     */
    create: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
    /**
     * In case the PromptTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
  }

  /**
   * PromptTemplate delete
   */
  export type PromptTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter which PromptTemplate to delete.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate deleteMany
   */
  export type PromptTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplates to delete
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to delete.
     */
    limit?: number
  }

  /**
   * PromptTemplate without action
   */
  export type PromptTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
  }


  /**
   * Model StylePreset
   */

  export type AggregateStylePreset = {
    _count: StylePresetCountAggregateOutputType | null
    _avg: StylePresetAvgAggregateOutputType | null
    _sum: StylePresetSumAggregateOutputType | null
    _min: StylePresetMinAggregateOutputType | null
    _max: StylePresetMaxAggregateOutputType | null
  }

  export type StylePresetAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type StylePresetSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type StylePresetMinAggregateOutputType = {
    id: string | null
    styleCode: string | null
    styleName: string | null
    coverImage: string | null
    promptTemplate: string | null
    negativePromptTemplate: string | null
    sortOrder: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StylePresetMaxAggregateOutputType = {
    id: string | null
    styleCode: string | null
    styleName: string | null
    coverImage: string | null
    promptTemplate: string | null
    negativePromptTemplate: string | null
    sortOrder: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StylePresetCountAggregateOutputType = {
    id: number
    styleCode: number
    styleName: number
    coverImage: number
    roomTypes: number
    promptTemplate: number
    negativePromptTemplate: number
    materialKeywords: number
    lightingKeywords: number
    furnitureKeywords: number
    colorPalette: number
    sortOrder: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StylePresetAvgAggregateInputType = {
    sortOrder?: true
  }

  export type StylePresetSumAggregateInputType = {
    sortOrder?: true
  }

  export type StylePresetMinAggregateInputType = {
    id?: true
    styleCode?: true
    styleName?: true
    coverImage?: true
    promptTemplate?: true
    negativePromptTemplate?: true
    sortOrder?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StylePresetMaxAggregateInputType = {
    id?: true
    styleCode?: true
    styleName?: true
    coverImage?: true
    promptTemplate?: true
    negativePromptTemplate?: true
    sortOrder?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StylePresetCountAggregateInputType = {
    id?: true
    styleCode?: true
    styleName?: true
    coverImage?: true
    roomTypes?: true
    promptTemplate?: true
    negativePromptTemplate?: true
    materialKeywords?: true
    lightingKeywords?: true
    furnitureKeywords?: true
    colorPalette?: true
    sortOrder?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StylePresetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StylePreset to aggregate.
     */
    where?: StylePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StylePresets to fetch.
     */
    orderBy?: StylePresetOrderByWithRelationInput | StylePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StylePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StylePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StylePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StylePresets
    **/
    _count?: true | StylePresetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StylePresetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StylePresetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StylePresetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StylePresetMaxAggregateInputType
  }

  export type GetStylePresetAggregateType<T extends StylePresetAggregateArgs> = {
        [P in keyof T & keyof AggregateStylePreset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStylePreset[P]>
      : GetScalarType<T[P], AggregateStylePreset[P]>
  }




  export type StylePresetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StylePresetWhereInput
    orderBy?: StylePresetOrderByWithAggregationInput | StylePresetOrderByWithAggregationInput[]
    by: StylePresetScalarFieldEnum[] | StylePresetScalarFieldEnum
    having?: StylePresetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StylePresetCountAggregateInputType | true
    _avg?: StylePresetAvgAggregateInputType
    _sum?: StylePresetSumAggregateInputType
    _min?: StylePresetMinAggregateInputType
    _max?: StylePresetMaxAggregateInputType
  }

  export type StylePresetGroupByOutputType = {
    id: string
    styleCode: string
    styleName: string
    coverImage: string | null
    roomTypes: string[]
    promptTemplate: string
    negativePromptTemplate: string | null
    materialKeywords: string[]
    lightingKeywords: string[]
    furnitureKeywords: string[]
    colorPalette: string[]
    sortOrder: number
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: StylePresetCountAggregateOutputType | null
    _avg: StylePresetAvgAggregateOutputType | null
    _sum: StylePresetSumAggregateOutputType | null
    _min: StylePresetMinAggregateOutputType | null
    _max: StylePresetMaxAggregateOutputType | null
  }

  type GetStylePresetGroupByPayload<T extends StylePresetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StylePresetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StylePresetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StylePresetGroupByOutputType[P]>
            : GetScalarType<T[P], StylePresetGroupByOutputType[P]>
        }
      >
    >


  export type StylePresetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleCode?: boolean
    styleName?: boolean
    coverImage?: boolean
    roomTypes?: boolean
    promptTemplate?: boolean
    negativePromptTemplate?: boolean
    materialKeywords?: boolean
    lightingKeywords?: boolean
    furnitureKeywords?: boolean
    colorPalette?: boolean
    sortOrder?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stylePreset"]>

  export type StylePresetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleCode?: boolean
    styleName?: boolean
    coverImage?: boolean
    roomTypes?: boolean
    promptTemplate?: boolean
    negativePromptTemplate?: boolean
    materialKeywords?: boolean
    lightingKeywords?: boolean
    furnitureKeywords?: boolean
    colorPalette?: boolean
    sortOrder?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stylePreset"]>

  export type StylePresetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleCode?: boolean
    styleName?: boolean
    coverImage?: boolean
    roomTypes?: boolean
    promptTemplate?: boolean
    negativePromptTemplate?: boolean
    materialKeywords?: boolean
    lightingKeywords?: boolean
    furnitureKeywords?: boolean
    colorPalette?: boolean
    sortOrder?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stylePreset"]>

  export type StylePresetSelectScalar = {
    id?: boolean
    styleCode?: boolean
    styleName?: boolean
    coverImage?: boolean
    roomTypes?: boolean
    promptTemplate?: boolean
    negativePromptTemplate?: boolean
    materialKeywords?: boolean
    lightingKeywords?: boolean
    furnitureKeywords?: boolean
    colorPalette?: boolean
    sortOrder?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StylePresetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "styleCode" | "styleName" | "coverImage" | "roomTypes" | "promptTemplate" | "negativePromptTemplate" | "materialKeywords" | "lightingKeywords" | "furnitureKeywords" | "colorPalette" | "sortOrder" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["stylePreset"]>

  export type $StylePresetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StylePreset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      styleCode: string
      styleName: string
      coverImage: string | null
      roomTypes: string[]
      promptTemplate: string
      negativePromptTemplate: string | null
      materialKeywords: string[]
      lightingKeywords: string[]
      furnitureKeywords: string[]
      colorPalette: string[]
      sortOrder: number
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stylePreset"]>
    composites: {}
  }

  type StylePresetGetPayload<S extends boolean | null | undefined | StylePresetDefaultArgs> = $Result.GetResult<Prisma.$StylePresetPayload, S>

  type StylePresetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StylePresetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StylePresetCountAggregateInputType | true
    }

  export interface StylePresetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StylePreset'], meta: { name: 'StylePreset' } }
    /**
     * Find zero or one StylePreset that matches the filter.
     * @param {StylePresetFindUniqueArgs} args - Arguments to find a StylePreset
     * @example
     * // Get one StylePreset
     * const stylePreset = await prisma.stylePreset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StylePresetFindUniqueArgs>(args: SelectSubset<T, StylePresetFindUniqueArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StylePreset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StylePresetFindUniqueOrThrowArgs} args - Arguments to find a StylePreset
     * @example
     * // Get one StylePreset
     * const stylePreset = await prisma.stylePreset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StylePresetFindUniqueOrThrowArgs>(args: SelectSubset<T, StylePresetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StylePreset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetFindFirstArgs} args - Arguments to find a StylePreset
     * @example
     * // Get one StylePreset
     * const stylePreset = await prisma.stylePreset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StylePresetFindFirstArgs>(args?: SelectSubset<T, StylePresetFindFirstArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StylePreset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetFindFirstOrThrowArgs} args - Arguments to find a StylePreset
     * @example
     * // Get one StylePreset
     * const stylePreset = await prisma.stylePreset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StylePresetFindFirstOrThrowArgs>(args?: SelectSubset<T, StylePresetFindFirstOrThrowArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StylePresets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StylePresets
     * const stylePresets = await prisma.stylePreset.findMany()
     * 
     * // Get first 10 StylePresets
     * const stylePresets = await prisma.stylePreset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stylePresetWithIdOnly = await prisma.stylePreset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StylePresetFindManyArgs>(args?: SelectSubset<T, StylePresetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StylePreset.
     * @param {StylePresetCreateArgs} args - Arguments to create a StylePreset.
     * @example
     * // Create one StylePreset
     * const StylePreset = await prisma.stylePreset.create({
     *   data: {
     *     // ... data to create a StylePreset
     *   }
     * })
     * 
     */
    create<T extends StylePresetCreateArgs>(args: SelectSubset<T, StylePresetCreateArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StylePresets.
     * @param {StylePresetCreateManyArgs} args - Arguments to create many StylePresets.
     * @example
     * // Create many StylePresets
     * const stylePreset = await prisma.stylePreset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StylePresetCreateManyArgs>(args?: SelectSubset<T, StylePresetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StylePresets and returns the data saved in the database.
     * @param {StylePresetCreateManyAndReturnArgs} args - Arguments to create many StylePresets.
     * @example
     * // Create many StylePresets
     * const stylePreset = await prisma.stylePreset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StylePresets and only return the `id`
     * const stylePresetWithIdOnly = await prisma.stylePreset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StylePresetCreateManyAndReturnArgs>(args?: SelectSubset<T, StylePresetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StylePreset.
     * @param {StylePresetDeleteArgs} args - Arguments to delete one StylePreset.
     * @example
     * // Delete one StylePreset
     * const StylePreset = await prisma.stylePreset.delete({
     *   where: {
     *     // ... filter to delete one StylePreset
     *   }
     * })
     * 
     */
    delete<T extends StylePresetDeleteArgs>(args: SelectSubset<T, StylePresetDeleteArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StylePreset.
     * @param {StylePresetUpdateArgs} args - Arguments to update one StylePreset.
     * @example
     * // Update one StylePreset
     * const stylePreset = await prisma.stylePreset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StylePresetUpdateArgs>(args: SelectSubset<T, StylePresetUpdateArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StylePresets.
     * @param {StylePresetDeleteManyArgs} args - Arguments to filter StylePresets to delete.
     * @example
     * // Delete a few StylePresets
     * const { count } = await prisma.stylePreset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StylePresetDeleteManyArgs>(args?: SelectSubset<T, StylePresetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StylePresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StylePresets
     * const stylePreset = await prisma.stylePreset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StylePresetUpdateManyArgs>(args: SelectSubset<T, StylePresetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StylePresets and returns the data updated in the database.
     * @param {StylePresetUpdateManyAndReturnArgs} args - Arguments to update many StylePresets.
     * @example
     * // Update many StylePresets
     * const stylePreset = await prisma.stylePreset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StylePresets and only return the `id`
     * const stylePresetWithIdOnly = await prisma.stylePreset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StylePresetUpdateManyAndReturnArgs>(args: SelectSubset<T, StylePresetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StylePreset.
     * @param {StylePresetUpsertArgs} args - Arguments to update or create a StylePreset.
     * @example
     * // Update or create a StylePreset
     * const stylePreset = await prisma.stylePreset.upsert({
     *   create: {
     *     // ... data to create a StylePreset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StylePreset we want to update
     *   }
     * })
     */
    upsert<T extends StylePresetUpsertArgs>(args: SelectSubset<T, StylePresetUpsertArgs<ExtArgs>>): Prisma__StylePresetClient<$Result.GetResult<Prisma.$StylePresetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StylePresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetCountArgs} args - Arguments to filter StylePresets to count.
     * @example
     * // Count the number of StylePresets
     * const count = await prisma.stylePreset.count({
     *   where: {
     *     // ... the filter for the StylePresets we want to count
     *   }
     * })
    **/
    count<T extends StylePresetCountArgs>(
      args?: Subset<T, StylePresetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StylePresetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StylePreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StylePresetAggregateArgs>(args: Subset<T, StylePresetAggregateArgs>): Prisma.PrismaPromise<GetStylePresetAggregateType<T>>

    /**
     * Group by StylePreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylePresetGroupByArgs} args - Group by arguments.
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
      T extends StylePresetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StylePresetGroupByArgs['orderBy'] }
        : { orderBy?: StylePresetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StylePresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStylePresetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StylePreset model
   */
  readonly fields: StylePresetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StylePreset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StylePresetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StylePreset model
   */
  interface StylePresetFieldRefs {
    readonly id: FieldRef<"StylePreset", 'String'>
    readonly styleCode: FieldRef<"StylePreset", 'String'>
    readonly styleName: FieldRef<"StylePreset", 'String'>
    readonly coverImage: FieldRef<"StylePreset", 'String'>
    readonly roomTypes: FieldRef<"StylePreset", 'String[]'>
    readonly promptTemplate: FieldRef<"StylePreset", 'String'>
    readonly negativePromptTemplate: FieldRef<"StylePreset", 'String'>
    readonly materialKeywords: FieldRef<"StylePreset", 'String[]'>
    readonly lightingKeywords: FieldRef<"StylePreset", 'String[]'>
    readonly furnitureKeywords: FieldRef<"StylePreset", 'String[]'>
    readonly colorPalette: FieldRef<"StylePreset", 'String[]'>
    readonly sortOrder: FieldRef<"StylePreset", 'Int'>
    readonly enabled: FieldRef<"StylePreset", 'Boolean'>
    readonly createdAt: FieldRef<"StylePreset", 'DateTime'>
    readonly updatedAt: FieldRef<"StylePreset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StylePreset findUnique
   */
  export type StylePresetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * Filter, which StylePreset to fetch.
     */
    where: StylePresetWhereUniqueInput
  }

  /**
   * StylePreset findUniqueOrThrow
   */
  export type StylePresetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * Filter, which StylePreset to fetch.
     */
    where: StylePresetWhereUniqueInput
  }

  /**
   * StylePreset findFirst
   */
  export type StylePresetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * Filter, which StylePreset to fetch.
     */
    where?: StylePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StylePresets to fetch.
     */
    orderBy?: StylePresetOrderByWithRelationInput | StylePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StylePresets.
     */
    cursor?: StylePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StylePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StylePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StylePresets.
     */
    distinct?: StylePresetScalarFieldEnum | StylePresetScalarFieldEnum[]
  }

  /**
   * StylePreset findFirstOrThrow
   */
  export type StylePresetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * Filter, which StylePreset to fetch.
     */
    where?: StylePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StylePresets to fetch.
     */
    orderBy?: StylePresetOrderByWithRelationInput | StylePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StylePresets.
     */
    cursor?: StylePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StylePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StylePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StylePresets.
     */
    distinct?: StylePresetScalarFieldEnum | StylePresetScalarFieldEnum[]
  }

  /**
   * StylePreset findMany
   */
  export type StylePresetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * Filter, which StylePresets to fetch.
     */
    where?: StylePresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StylePresets to fetch.
     */
    orderBy?: StylePresetOrderByWithRelationInput | StylePresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StylePresets.
     */
    cursor?: StylePresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StylePresets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StylePresets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StylePresets.
     */
    distinct?: StylePresetScalarFieldEnum | StylePresetScalarFieldEnum[]
  }

  /**
   * StylePreset create
   */
  export type StylePresetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * The data needed to create a StylePreset.
     */
    data: XOR<StylePresetCreateInput, StylePresetUncheckedCreateInput>
  }

  /**
   * StylePreset createMany
   */
  export type StylePresetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StylePresets.
     */
    data: StylePresetCreateManyInput | StylePresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StylePreset createManyAndReturn
   */
  export type StylePresetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * The data used to create many StylePresets.
     */
    data: StylePresetCreateManyInput | StylePresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StylePreset update
   */
  export type StylePresetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * The data needed to update a StylePreset.
     */
    data: XOR<StylePresetUpdateInput, StylePresetUncheckedUpdateInput>
    /**
     * Choose, which StylePreset to update.
     */
    where: StylePresetWhereUniqueInput
  }

  /**
   * StylePreset updateMany
   */
  export type StylePresetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StylePresets.
     */
    data: XOR<StylePresetUpdateManyMutationInput, StylePresetUncheckedUpdateManyInput>
    /**
     * Filter which StylePresets to update
     */
    where?: StylePresetWhereInput
    /**
     * Limit how many StylePresets to update.
     */
    limit?: number
  }

  /**
   * StylePreset updateManyAndReturn
   */
  export type StylePresetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * The data used to update StylePresets.
     */
    data: XOR<StylePresetUpdateManyMutationInput, StylePresetUncheckedUpdateManyInput>
    /**
     * Filter which StylePresets to update
     */
    where?: StylePresetWhereInput
    /**
     * Limit how many StylePresets to update.
     */
    limit?: number
  }

  /**
   * StylePreset upsert
   */
  export type StylePresetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * The filter to search for the StylePreset to update in case it exists.
     */
    where: StylePresetWhereUniqueInput
    /**
     * In case the StylePreset found by the `where` argument doesn't exist, create a new StylePreset with this data.
     */
    create: XOR<StylePresetCreateInput, StylePresetUncheckedCreateInput>
    /**
     * In case the StylePreset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StylePresetUpdateInput, StylePresetUncheckedUpdateInput>
  }

  /**
   * StylePreset delete
   */
  export type StylePresetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
    /**
     * Filter which StylePreset to delete.
     */
    where: StylePresetWhereUniqueInput
  }

  /**
   * StylePreset deleteMany
   */
  export type StylePresetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StylePresets to delete
     */
    where?: StylePresetWhereInput
    /**
     * Limit how many StylePresets to delete.
     */
    limit?: number
  }

  /**
   * StylePreset without action
   */
  export type StylePresetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylePreset
     */
    select?: StylePresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StylePreset
     */
    omit?: StylePresetOmit<ExtArgs> | null
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


  export const UploadTicketScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    contentType: 'contentType',
    fileSize: 'fileSize',
    objectKey: 'objectKey',
    publicUrl: 'publicUrl',
    expiresIn: 'expiresIn',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UploadTicketScalarFieldEnum = (typeof UploadTicketScalarFieldEnum)[keyof typeof UploadTicketScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    nickname: 'nickname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    roomType: 'roomType',
    styleCode: 'styleCode',
    budgetLevel: 'budgetLevel',
    status: 'status',
    originalImageUrl: 'originalImageUrl',
    latestRenderTaskId: 'latestRenderTaskId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectConstraintScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type ProjectConstraintScalarFieldEnum = (typeof ProjectConstraintScalarFieldEnum)[keyof typeof ProjectConstraintScalarFieldEnum]


  export const ProjectAssetScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    kind: 'kind',
    fileName: 'fileName',
    objectKey: 'objectKey',
    publicUrl: 'publicUrl',
    contentType: 'contentType',
    fileSize: 'fileSize',
    createdAt: 'createdAt'
  };

  export type ProjectAssetScalarFieldEnum = (typeof ProjectAssetScalarFieldEnum)[keyof typeof ProjectAssetScalarFieldEnum]


  export const RenderTaskScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    providerCode: 'providerCode',
    modelCode: 'modelCode',
    styleCode: 'styleCode',
    budgetLevel: 'budgetLevel',
    constraints: 'constraints',
    candidateCount: 'candidateCount',
    status: 'status',
    progressPercent: 'progressPercent',
    requestPayload: 'requestPayload',
    responseSummary: 'responseSummary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RenderTaskScalarFieldEnum = (typeof RenderTaskScalarFieldEnum)[keyof typeof RenderTaskScalarFieldEnum]


  export const RenderResultScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    renderTaskId: 'renderTaskId',
    title: 'title',
    imageUrl: 'imageUrl',
    score: 'score',
    styleCode: 'styleCode',
    createdAt: 'createdAt'
  };

  export type RenderResultScalarFieldEnum = (typeof RenderResultScalarFieldEnum)[keyof typeof RenderResultScalarFieldEnum]


  export const ShareLinkScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    shareCode: 'shareCode',
    shareUrl: 'shareUrl',
    title: 'title',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ShareLinkScalarFieldEnum = (typeof ShareLinkScalarFieldEnum)[keyof typeof ShareLinkScalarFieldEnum]


  export const AiProviderScalarFieldEnum: {
    id: 'id',
    providerCode: 'providerCode',
    providerName: 'providerName',
    baseUrl: 'baseUrl',
    apiKeyRef: 'apiKeyRef',
    timeoutMs: 'timeoutMs',
    retryLimit: 'retryLimit',
    dailyBudgetLimit: 'dailyBudgetLimit',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiProviderScalarFieldEnum = (typeof AiProviderScalarFieldEnum)[keyof typeof AiProviderScalarFieldEnum]


  export const AiModelScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    modelCode: 'modelCode',
    displayName: 'displayName',
    modelType: 'modelType',
    enabled: 'enabled',
    isDefault: 'isDefault',
    temperature: 'temperature',
    topP: 'topP',
    imageSize: 'imageSize',
    aspectRatio: 'aspectRatio',
    candidateCount: 'candidateCount',
    responseFormat: 'responseFormat',
    promptOptimizerEnabled: 'promptOptimizerEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiModelScalarFieldEnum = (typeof AiModelScalarFieldEnum)[keyof typeof AiModelScalarFieldEnum]


  export const PromptTemplateScalarFieldEnum: {
    id: 'id',
    sceneType: 'sceneType',
    styleCode: 'styleCode',
    promptTemplate: 'promptTemplate',
    negativePrompt: 'negativePrompt',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptTemplateScalarFieldEnum = (typeof PromptTemplateScalarFieldEnum)[keyof typeof PromptTemplateScalarFieldEnum]


  export const StylePresetScalarFieldEnum: {
    id: 'id',
    styleCode: 'styleCode',
    styleName: 'styleName',
    coverImage: 'coverImage',
    roomTypes: 'roomTypes',
    promptTemplate: 'promptTemplate',
    negativePromptTemplate: 'negativePromptTemplate',
    materialKeywords: 'materialKeywords',
    lightingKeywords: 'lightingKeywords',
    furnitureKeywords: 'furnitureKeywords',
    colorPalette: 'colorPalette',
    sortOrder: 'sortOrder',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StylePresetScalarFieldEnum = (typeof StylePresetScalarFieldEnum)[keyof typeof StylePresetScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'AssetKind'
   */
  export type EnumAssetKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetKind'>
    


  /**
   * Reference to a field of type 'AssetKind[]'
   */
  export type ListEnumAssetKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetKind[]'>
    


  /**
   * Reference to a field of type 'RenderTaskStatus'
   */
  export type EnumRenderTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RenderTaskStatus'>
    


  /**
   * Reference to a field of type 'RenderTaskStatus[]'
   */
  export type ListEnumRenderTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RenderTaskStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ShareStatus'
   */
  export type EnumShareStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShareStatus'>
    


  /**
   * Reference to a field of type 'ShareStatus[]'
   */
  export type ListEnumShareStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShareStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ModelType'
   */
  export type EnumModelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelType'>
    


  /**
   * Reference to a field of type 'ModelType[]'
   */
  export type ListEnumModelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelType[]'>
    
  /**
   * Deep Input Types
   */


  export type UploadTicketWhereInput = {
    AND?: UploadTicketWhereInput | UploadTicketWhereInput[]
    OR?: UploadTicketWhereInput[]
    NOT?: UploadTicketWhereInput | UploadTicketWhereInput[]
    id?: StringFilter<"UploadTicket"> | string
    fileName?: StringFilter<"UploadTicket"> | string
    contentType?: StringFilter<"UploadTicket"> | string
    fileSize?: IntFilter<"UploadTicket"> | number
    objectKey?: StringFilter<"UploadTicket"> | string
    publicUrl?: StringFilter<"UploadTicket"> | string
    expiresIn?: IntFilter<"UploadTicket"> | number
    status?: StringFilter<"UploadTicket"> | string
    createdAt?: DateTimeFilter<"UploadTicket"> | Date | string
  }

  export type UploadTicketOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    expiresIn?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadTicketWhereInput | UploadTicketWhereInput[]
    OR?: UploadTicketWhereInput[]
    NOT?: UploadTicketWhereInput | UploadTicketWhereInput[]
    fileName?: StringFilter<"UploadTicket"> | string
    contentType?: StringFilter<"UploadTicket"> | string
    fileSize?: IntFilter<"UploadTicket"> | number
    objectKey?: StringFilter<"UploadTicket"> | string
    publicUrl?: StringFilter<"UploadTicket"> | string
    expiresIn?: IntFilter<"UploadTicket"> | number
    status?: StringFilter<"UploadTicket"> | string
    createdAt?: DateTimeFilter<"UploadTicket"> | Date | string
  }, "id">

  export type UploadTicketOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    expiresIn?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UploadTicketCountOrderByAggregateInput
    _avg?: UploadTicketAvgOrderByAggregateInput
    _max?: UploadTicketMaxOrderByAggregateInput
    _min?: UploadTicketMinOrderByAggregateInput
    _sum?: UploadTicketSumOrderByAggregateInput
  }

  export type UploadTicketScalarWhereWithAggregatesInput = {
    AND?: UploadTicketScalarWhereWithAggregatesInput | UploadTicketScalarWhereWithAggregatesInput[]
    OR?: UploadTicketScalarWhereWithAggregatesInput[]
    NOT?: UploadTicketScalarWhereWithAggregatesInput | UploadTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadTicket"> | string
    fileName?: StringWithAggregatesFilter<"UploadTicket"> | string
    contentType?: StringWithAggregatesFilter<"UploadTicket"> | string
    fileSize?: IntWithAggregatesFilter<"UploadTicket"> | number
    objectKey?: StringWithAggregatesFilter<"UploadTicket"> | string
    publicUrl?: StringWithAggregatesFilter<"UploadTicket"> | string
    expiresIn?: IntWithAggregatesFilter<"UploadTicket"> | number
    status?: StringWithAggregatesFilter<"UploadTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UploadTicket"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
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
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    username?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    name?: StringFilter<"Project"> | string
    roomType?: StringFilter<"Project"> | string
    styleCode?: StringFilter<"Project"> | string
    budgetLevel?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    originalImageUrl?: StringFilter<"Project"> | string
    latestRenderTaskId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assets?: ProjectAssetListRelationFilter
    renderTasks?: RenderTaskListRelationFilter
    renderResults?: RenderResultListRelationFilter
    shareLinks?: ShareLinkListRelationFilter
    constraints?: ProjectConstraintListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    roomType?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    status?: SortOrder
    originalImageUrl?: SortOrder
    latestRenderTaskId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    assets?: ProjectAssetOrderByRelationAggregateInput
    renderTasks?: RenderTaskOrderByRelationAggregateInput
    renderResults?: RenderResultOrderByRelationAggregateInput
    shareLinks?: ShareLinkOrderByRelationAggregateInput
    constraints?: ProjectConstraintOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringNullableFilter<"Project"> | string | null
    name?: StringFilter<"Project"> | string
    roomType?: StringFilter<"Project"> | string
    styleCode?: StringFilter<"Project"> | string
    budgetLevel?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    originalImageUrl?: StringFilter<"Project"> | string
    latestRenderTaskId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assets?: ProjectAssetListRelationFilter
    renderTasks?: RenderTaskListRelationFilter
    renderResults?: RenderResultListRelationFilter
    shareLinks?: ShareLinkListRelationFilter
    constraints?: ProjectConstraintListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    roomType?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    status?: SortOrder
    originalImageUrl?: SortOrder
    latestRenderTaskId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    name?: StringWithAggregatesFilter<"Project"> | string
    roomType?: StringWithAggregatesFilter<"Project"> | string
    styleCode?: StringWithAggregatesFilter<"Project"> | string
    budgetLevel?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    originalImageUrl?: StringWithAggregatesFilter<"Project"> | string
    latestRenderTaskId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectConstraintWhereInput = {
    AND?: ProjectConstraintWhereInput | ProjectConstraintWhereInput[]
    OR?: ProjectConstraintWhereInput[]
    NOT?: ProjectConstraintWhereInput | ProjectConstraintWhereInput[]
    id?: StringFilter<"ProjectConstraint"> | string
    projectId?: StringFilter<"ProjectConstraint"> | string
    value?: StringFilter<"ProjectConstraint"> | string
    createdAt?: DateTimeFilter<"ProjectConstraint"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectConstraintOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectConstraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectConstraintWhereInput | ProjectConstraintWhereInput[]
    OR?: ProjectConstraintWhereInput[]
    NOT?: ProjectConstraintWhereInput | ProjectConstraintWhereInput[]
    projectId?: StringFilter<"ProjectConstraint"> | string
    value?: StringFilter<"ProjectConstraint"> | string
    createdAt?: DateTimeFilter<"ProjectConstraint"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectConstraintOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectConstraintCountOrderByAggregateInput
    _max?: ProjectConstraintMaxOrderByAggregateInput
    _min?: ProjectConstraintMinOrderByAggregateInput
  }

  export type ProjectConstraintScalarWhereWithAggregatesInput = {
    AND?: ProjectConstraintScalarWhereWithAggregatesInput | ProjectConstraintScalarWhereWithAggregatesInput[]
    OR?: ProjectConstraintScalarWhereWithAggregatesInput[]
    NOT?: ProjectConstraintScalarWhereWithAggregatesInput | ProjectConstraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectConstraint"> | string
    projectId?: StringWithAggregatesFilter<"ProjectConstraint"> | string
    value?: StringWithAggregatesFilter<"ProjectConstraint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectConstraint"> | Date | string
  }

  export type ProjectAssetWhereInput = {
    AND?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    OR?: ProjectAssetWhereInput[]
    NOT?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    id?: StringFilter<"ProjectAsset"> | string
    projectId?: StringFilter<"ProjectAsset"> | string
    kind?: EnumAssetKindFilter<"ProjectAsset"> | $Enums.AssetKind
    fileName?: StringNullableFilter<"ProjectAsset"> | string | null
    objectKey?: StringFilter<"ProjectAsset"> | string
    publicUrl?: StringFilter<"ProjectAsset"> | string
    contentType?: StringNullableFilter<"ProjectAsset"> | string | null
    fileSize?: IntNullableFilter<"ProjectAsset"> | number | null
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectAssetOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    kind?: SortOrder
    fileName?: SortOrderInput | SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    contentType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    OR?: ProjectAssetWhereInput[]
    NOT?: ProjectAssetWhereInput | ProjectAssetWhereInput[]
    projectId?: StringFilter<"ProjectAsset"> | string
    kind?: EnumAssetKindFilter<"ProjectAsset"> | $Enums.AssetKind
    fileName?: StringNullableFilter<"ProjectAsset"> | string | null
    objectKey?: StringFilter<"ProjectAsset"> | string
    publicUrl?: StringFilter<"ProjectAsset"> | string
    contentType?: StringNullableFilter<"ProjectAsset"> | string | null
    fileSize?: IntNullableFilter<"ProjectAsset"> | number | null
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectAssetOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    kind?: SortOrder
    fileName?: SortOrderInput | SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    contentType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectAssetCountOrderByAggregateInput
    _avg?: ProjectAssetAvgOrderByAggregateInput
    _max?: ProjectAssetMaxOrderByAggregateInput
    _min?: ProjectAssetMinOrderByAggregateInput
    _sum?: ProjectAssetSumOrderByAggregateInput
  }

  export type ProjectAssetScalarWhereWithAggregatesInput = {
    AND?: ProjectAssetScalarWhereWithAggregatesInput | ProjectAssetScalarWhereWithAggregatesInput[]
    OR?: ProjectAssetScalarWhereWithAggregatesInput[]
    NOT?: ProjectAssetScalarWhereWithAggregatesInput | ProjectAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectAsset"> | string
    projectId?: StringWithAggregatesFilter<"ProjectAsset"> | string
    kind?: EnumAssetKindWithAggregatesFilter<"ProjectAsset"> | $Enums.AssetKind
    fileName?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null
    objectKey?: StringWithAggregatesFilter<"ProjectAsset"> | string
    publicUrl?: StringWithAggregatesFilter<"ProjectAsset"> | string
    contentType?: StringNullableWithAggregatesFilter<"ProjectAsset"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"ProjectAsset"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectAsset"> | Date | string
  }

  export type RenderTaskWhereInput = {
    AND?: RenderTaskWhereInput | RenderTaskWhereInput[]
    OR?: RenderTaskWhereInput[]
    NOT?: RenderTaskWhereInput | RenderTaskWhereInput[]
    id?: StringFilter<"RenderTask"> | string
    projectId?: StringFilter<"RenderTask"> | string
    providerCode?: StringFilter<"RenderTask"> | string
    modelCode?: StringFilter<"RenderTask"> | string
    styleCode?: StringFilter<"RenderTask"> | string
    budgetLevel?: StringFilter<"RenderTask"> | string
    constraints?: StringNullableListFilter<"RenderTask">
    candidateCount?: IntFilter<"RenderTask"> | number
    status?: EnumRenderTaskStatusFilter<"RenderTask"> | $Enums.RenderTaskStatus
    progressPercent?: IntFilter<"RenderTask"> | number
    requestPayload?: JsonNullableFilter<"RenderTask">
    responseSummary?: JsonNullableFilter<"RenderTask">
    createdAt?: DateTimeFilter<"RenderTask"> | Date | string
    updatedAt?: DateTimeFilter<"RenderTask"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    results?: RenderResultListRelationFilter
  }

  export type RenderTaskOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    providerCode?: SortOrder
    modelCode?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    constraints?: SortOrder
    candidateCount?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    requestPayload?: SortOrderInput | SortOrder
    responseSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    results?: RenderResultOrderByRelationAggregateInput
  }

  export type RenderTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RenderTaskWhereInput | RenderTaskWhereInput[]
    OR?: RenderTaskWhereInput[]
    NOT?: RenderTaskWhereInput | RenderTaskWhereInput[]
    projectId?: StringFilter<"RenderTask"> | string
    providerCode?: StringFilter<"RenderTask"> | string
    modelCode?: StringFilter<"RenderTask"> | string
    styleCode?: StringFilter<"RenderTask"> | string
    budgetLevel?: StringFilter<"RenderTask"> | string
    constraints?: StringNullableListFilter<"RenderTask">
    candidateCount?: IntFilter<"RenderTask"> | number
    status?: EnumRenderTaskStatusFilter<"RenderTask"> | $Enums.RenderTaskStatus
    progressPercent?: IntFilter<"RenderTask"> | number
    requestPayload?: JsonNullableFilter<"RenderTask">
    responseSummary?: JsonNullableFilter<"RenderTask">
    createdAt?: DateTimeFilter<"RenderTask"> | Date | string
    updatedAt?: DateTimeFilter<"RenderTask"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    results?: RenderResultListRelationFilter
  }, "id">

  export type RenderTaskOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    providerCode?: SortOrder
    modelCode?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    constraints?: SortOrder
    candidateCount?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    requestPayload?: SortOrderInput | SortOrder
    responseSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RenderTaskCountOrderByAggregateInput
    _avg?: RenderTaskAvgOrderByAggregateInput
    _max?: RenderTaskMaxOrderByAggregateInput
    _min?: RenderTaskMinOrderByAggregateInput
    _sum?: RenderTaskSumOrderByAggregateInput
  }

  export type RenderTaskScalarWhereWithAggregatesInput = {
    AND?: RenderTaskScalarWhereWithAggregatesInput | RenderTaskScalarWhereWithAggregatesInput[]
    OR?: RenderTaskScalarWhereWithAggregatesInput[]
    NOT?: RenderTaskScalarWhereWithAggregatesInput | RenderTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RenderTask"> | string
    projectId?: StringWithAggregatesFilter<"RenderTask"> | string
    providerCode?: StringWithAggregatesFilter<"RenderTask"> | string
    modelCode?: StringWithAggregatesFilter<"RenderTask"> | string
    styleCode?: StringWithAggregatesFilter<"RenderTask"> | string
    budgetLevel?: StringWithAggregatesFilter<"RenderTask"> | string
    constraints?: StringNullableListFilter<"RenderTask">
    candidateCount?: IntWithAggregatesFilter<"RenderTask"> | number
    status?: EnumRenderTaskStatusWithAggregatesFilter<"RenderTask"> | $Enums.RenderTaskStatus
    progressPercent?: IntWithAggregatesFilter<"RenderTask"> | number
    requestPayload?: JsonNullableWithAggregatesFilter<"RenderTask">
    responseSummary?: JsonNullableWithAggregatesFilter<"RenderTask">
    createdAt?: DateTimeWithAggregatesFilter<"RenderTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RenderTask"> | Date | string
  }

  export type RenderResultWhereInput = {
    AND?: RenderResultWhereInput | RenderResultWhereInput[]
    OR?: RenderResultWhereInput[]
    NOT?: RenderResultWhereInput | RenderResultWhereInput[]
    id?: StringFilter<"RenderResult"> | string
    projectId?: StringFilter<"RenderResult"> | string
    renderTaskId?: StringFilter<"RenderResult"> | string
    title?: StringFilter<"RenderResult"> | string
    imageUrl?: StringFilter<"RenderResult"> | string
    score?: FloatFilter<"RenderResult"> | number
    styleCode?: StringFilter<"RenderResult"> | string
    createdAt?: DateTimeFilter<"RenderResult"> | Date | string
    renderTask?: XOR<RenderTaskScalarRelationFilter, RenderTaskWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type RenderResultOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    renderTaskId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    score?: SortOrder
    styleCode?: SortOrder
    createdAt?: SortOrder
    renderTask?: RenderTaskOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type RenderResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RenderResultWhereInput | RenderResultWhereInput[]
    OR?: RenderResultWhereInput[]
    NOT?: RenderResultWhereInput | RenderResultWhereInput[]
    projectId?: StringFilter<"RenderResult"> | string
    renderTaskId?: StringFilter<"RenderResult"> | string
    title?: StringFilter<"RenderResult"> | string
    imageUrl?: StringFilter<"RenderResult"> | string
    score?: FloatFilter<"RenderResult"> | number
    styleCode?: StringFilter<"RenderResult"> | string
    createdAt?: DateTimeFilter<"RenderResult"> | Date | string
    renderTask?: XOR<RenderTaskScalarRelationFilter, RenderTaskWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type RenderResultOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    renderTaskId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    score?: SortOrder
    styleCode?: SortOrder
    createdAt?: SortOrder
    _count?: RenderResultCountOrderByAggregateInput
    _avg?: RenderResultAvgOrderByAggregateInput
    _max?: RenderResultMaxOrderByAggregateInput
    _min?: RenderResultMinOrderByAggregateInput
    _sum?: RenderResultSumOrderByAggregateInput
  }

  export type RenderResultScalarWhereWithAggregatesInput = {
    AND?: RenderResultScalarWhereWithAggregatesInput | RenderResultScalarWhereWithAggregatesInput[]
    OR?: RenderResultScalarWhereWithAggregatesInput[]
    NOT?: RenderResultScalarWhereWithAggregatesInput | RenderResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RenderResult"> | string
    projectId?: StringWithAggregatesFilter<"RenderResult"> | string
    renderTaskId?: StringWithAggregatesFilter<"RenderResult"> | string
    title?: StringWithAggregatesFilter<"RenderResult"> | string
    imageUrl?: StringWithAggregatesFilter<"RenderResult"> | string
    score?: FloatWithAggregatesFilter<"RenderResult"> | number
    styleCode?: StringWithAggregatesFilter<"RenderResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RenderResult"> | Date | string
  }

  export type ShareLinkWhereInput = {
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    projectId?: StringFilter<"ShareLink"> | string
    shareCode?: StringFilter<"ShareLink"> | string
    shareUrl?: StringFilter<"ShareLink"> | string
    title?: StringFilter<"ShareLink"> | string
    description?: StringFilter<"ShareLink"> | string
    status?: EnumShareStatusFilter<"ShareLink"> | $Enums.ShareStatus
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ShareLinkOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    shareCode?: SortOrder
    shareUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ShareLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareCode?: string
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    projectId?: StringFilter<"ShareLink"> | string
    shareUrl?: StringFilter<"ShareLink"> | string
    title?: StringFilter<"ShareLink"> | string
    description?: StringFilter<"ShareLink"> | string
    status?: EnumShareStatusFilter<"ShareLink"> | $Enums.ShareStatus
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "shareCode">

  export type ShareLinkOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    shareCode?: SortOrder
    shareUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ShareLinkCountOrderByAggregateInput
    _max?: ShareLinkMaxOrderByAggregateInput
    _min?: ShareLinkMinOrderByAggregateInput
  }

  export type ShareLinkScalarWhereWithAggregatesInput = {
    AND?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    OR?: ShareLinkScalarWhereWithAggregatesInput[]
    NOT?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareLink"> | string
    projectId?: StringWithAggregatesFilter<"ShareLink"> | string
    shareCode?: StringWithAggregatesFilter<"ShareLink"> | string
    shareUrl?: StringWithAggregatesFilter<"ShareLink"> | string
    title?: StringWithAggregatesFilter<"ShareLink"> | string
    description?: StringWithAggregatesFilter<"ShareLink"> | string
    status?: EnumShareStatusWithAggregatesFilter<"ShareLink"> | $Enums.ShareStatus
    createdAt?: DateTimeWithAggregatesFilter<"ShareLink"> | Date | string
  }

  export type AiProviderWhereInput = {
    AND?: AiProviderWhereInput | AiProviderWhereInput[]
    OR?: AiProviderWhereInput[]
    NOT?: AiProviderWhereInput | AiProviderWhereInput[]
    id?: StringFilter<"AiProvider"> | string
    providerCode?: StringFilter<"AiProvider"> | string
    providerName?: StringFilter<"AiProvider"> | string
    baseUrl?: StringFilter<"AiProvider"> | string
    apiKeyRef?: StringFilter<"AiProvider"> | string
    timeoutMs?: IntFilter<"AiProvider"> | number
    retryLimit?: IntFilter<"AiProvider"> | number
    dailyBudgetLimit?: DecimalNullableFilter<"AiProvider"> | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFilter<"AiProvider"> | boolean
    createdAt?: DateTimeFilter<"AiProvider"> | Date | string
    updatedAt?: DateTimeFilter<"AiProvider"> | Date | string
    models?: AiModelListRelationFilter
  }

  export type AiProviderOrderByWithRelationInput = {
    id?: SortOrder
    providerCode?: SortOrder
    providerName?: SortOrder
    baseUrl?: SortOrder
    apiKeyRef?: SortOrder
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrderInput | SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    models?: AiModelOrderByRelationAggregateInput
  }

  export type AiProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerCode?: string
    AND?: AiProviderWhereInput | AiProviderWhereInput[]
    OR?: AiProviderWhereInput[]
    NOT?: AiProviderWhereInput | AiProviderWhereInput[]
    providerName?: StringFilter<"AiProvider"> | string
    baseUrl?: StringFilter<"AiProvider"> | string
    apiKeyRef?: StringFilter<"AiProvider"> | string
    timeoutMs?: IntFilter<"AiProvider"> | number
    retryLimit?: IntFilter<"AiProvider"> | number
    dailyBudgetLimit?: DecimalNullableFilter<"AiProvider"> | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFilter<"AiProvider"> | boolean
    createdAt?: DateTimeFilter<"AiProvider"> | Date | string
    updatedAt?: DateTimeFilter<"AiProvider"> | Date | string
    models?: AiModelListRelationFilter
  }, "id" | "providerCode">

  export type AiProviderOrderByWithAggregationInput = {
    id?: SortOrder
    providerCode?: SortOrder
    providerName?: SortOrder
    baseUrl?: SortOrder
    apiKeyRef?: SortOrder
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrderInput | SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiProviderCountOrderByAggregateInput
    _avg?: AiProviderAvgOrderByAggregateInput
    _max?: AiProviderMaxOrderByAggregateInput
    _min?: AiProviderMinOrderByAggregateInput
    _sum?: AiProviderSumOrderByAggregateInput
  }

  export type AiProviderScalarWhereWithAggregatesInput = {
    AND?: AiProviderScalarWhereWithAggregatesInput | AiProviderScalarWhereWithAggregatesInput[]
    OR?: AiProviderScalarWhereWithAggregatesInput[]
    NOT?: AiProviderScalarWhereWithAggregatesInput | AiProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiProvider"> | string
    providerCode?: StringWithAggregatesFilter<"AiProvider"> | string
    providerName?: StringWithAggregatesFilter<"AiProvider"> | string
    baseUrl?: StringWithAggregatesFilter<"AiProvider"> | string
    apiKeyRef?: StringWithAggregatesFilter<"AiProvider"> | string
    timeoutMs?: IntWithAggregatesFilter<"AiProvider"> | number
    retryLimit?: IntWithAggregatesFilter<"AiProvider"> | number
    dailyBudgetLimit?: DecimalNullableWithAggregatesFilter<"AiProvider"> | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolWithAggregatesFilter<"AiProvider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AiProvider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiProvider"> | Date | string
  }

  export type AiModelWhereInput = {
    AND?: AiModelWhereInput | AiModelWhereInput[]
    OR?: AiModelWhereInput[]
    NOT?: AiModelWhereInput | AiModelWhereInput[]
    id?: StringFilter<"AiModel"> | string
    providerId?: StringFilter<"AiModel"> | string
    modelCode?: StringFilter<"AiModel"> | string
    displayName?: StringFilter<"AiModel"> | string
    modelType?: EnumModelTypeFilter<"AiModel"> | $Enums.ModelType
    enabled?: BoolFilter<"AiModel"> | boolean
    isDefault?: BoolFilter<"AiModel"> | boolean
    temperature?: FloatNullableFilter<"AiModel"> | number | null
    topP?: FloatNullableFilter<"AiModel"> | number | null
    imageSize?: StringNullableFilter<"AiModel"> | string | null
    aspectRatio?: StringNullableFilter<"AiModel"> | string | null
    candidateCount?: IntNullableFilter<"AiModel"> | number | null
    responseFormat?: StringNullableFilter<"AiModel"> | string | null
    promptOptimizerEnabled?: BoolFilter<"AiModel"> | boolean
    createdAt?: DateTimeFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeFilter<"AiModel"> | Date | string
    provider?: XOR<AiProviderScalarRelationFilter, AiProviderWhereInput>
  }

  export type AiModelOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    modelCode?: SortOrder
    displayName?: SortOrder
    modelType?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    temperature?: SortOrderInput | SortOrder
    topP?: SortOrderInput | SortOrder
    imageSize?: SortOrderInput | SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    candidateCount?: SortOrderInput | SortOrder
    responseFormat?: SortOrderInput | SortOrder
    promptOptimizerEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: AiProviderOrderByWithRelationInput
  }

  export type AiModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiModelWhereInput | AiModelWhereInput[]
    OR?: AiModelWhereInput[]
    NOT?: AiModelWhereInput | AiModelWhereInput[]
    providerId?: StringFilter<"AiModel"> | string
    modelCode?: StringFilter<"AiModel"> | string
    displayName?: StringFilter<"AiModel"> | string
    modelType?: EnumModelTypeFilter<"AiModel"> | $Enums.ModelType
    enabled?: BoolFilter<"AiModel"> | boolean
    isDefault?: BoolFilter<"AiModel"> | boolean
    temperature?: FloatNullableFilter<"AiModel"> | number | null
    topP?: FloatNullableFilter<"AiModel"> | number | null
    imageSize?: StringNullableFilter<"AiModel"> | string | null
    aspectRatio?: StringNullableFilter<"AiModel"> | string | null
    candidateCount?: IntNullableFilter<"AiModel"> | number | null
    responseFormat?: StringNullableFilter<"AiModel"> | string | null
    promptOptimizerEnabled?: BoolFilter<"AiModel"> | boolean
    createdAt?: DateTimeFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeFilter<"AiModel"> | Date | string
    provider?: XOR<AiProviderScalarRelationFilter, AiProviderWhereInput>
  }, "id">

  export type AiModelOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    modelCode?: SortOrder
    displayName?: SortOrder
    modelType?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    temperature?: SortOrderInput | SortOrder
    topP?: SortOrderInput | SortOrder
    imageSize?: SortOrderInput | SortOrder
    aspectRatio?: SortOrderInput | SortOrder
    candidateCount?: SortOrderInput | SortOrder
    responseFormat?: SortOrderInput | SortOrder
    promptOptimizerEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiModelCountOrderByAggregateInput
    _avg?: AiModelAvgOrderByAggregateInput
    _max?: AiModelMaxOrderByAggregateInput
    _min?: AiModelMinOrderByAggregateInput
    _sum?: AiModelSumOrderByAggregateInput
  }

  export type AiModelScalarWhereWithAggregatesInput = {
    AND?: AiModelScalarWhereWithAggregatesInput | AiModelScalarWhereWithAggregatesInput[]
    OR?: AiModelScalarWhereWithAggregatesInput[]
    NOT?: AiModelScalarWhereWithAggregatesInput | AiModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiModel"> | string
    providerId?: StringWithAggregatesFilter<"AiModel"> | string
    modelCode?: StringWithAggregatesFilter<"AiModel"> | string
    displayName?: StringWithAggregatesFilter<"AiModel"> | string
    modelType?: EnumModelTypeWithAggregatesFilter<"AiModel"> | $Enums.ModelType
    enabled?: BoolWithAggregatesFilter<"AiModel"> | boolean
    isDefault?: BoolWithAggregatesFilter<"AiModel"> | boolean
    temperature?: FloatNullableWithAggregatesFilter<"AiModel"> | number | null
    topP?: FloatNullableWithAggregatesFilter<"AiModel"> | number | null
    imageSize?: StringNullableWithAggregatesFilter<"AiModel"> | string | null
    aspectRatio?: StringNullableWithAggregatesFilter<"AiModel"> | string | null
    candidateCount?: IntNullableWithAggregatesFilter<"AiModel"> | number | null
    responseFormat?: StringNullableWithAggregatesFilter<"AiModel"> | string | null
    promptOptimizerEnabled?: BoolWithAggregatesFilter<"AiModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiModel"> | Date | string
  }

  export type PromptTemplateWhereInput = {
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    id?: StringFilter<"PromptTemplate"> | string
    sceneType?: StringFilter<"PromptTemplate"> | string
    styleCode?: StringFilter<"PromptTemplate"> | string
    promptTemplate?: StringFilter<"PromptTemplate"> | string
    negativePrompt?: StringNullableFilter<"PromptTemplate"> | string | null
    enabled?: BoolFilter<"PromptTemplate"> | boolean
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
  }

  export type PromptTemplateOrderByWithRelationInput = {
    id?: SortOrder
    sceneType?: SortOrder
    styleCode?: SortOrder
    promptTemplate?: SortOrder
    negativePrompt?: SortOrderInput | SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    sceneType?: StringFilter<"PromptTemplate"> | string
    styleCode?: StringFilter<"PromptTemplate"> | string
    promptTemplate?: StringFilter<"PromptTemplate"> | string
    negativePrompt?: StringNullableFilter<"PromptTemplate"> | string | null
    enabled?: BoolFilter<"PromptTemplate"> | boolean
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
  }, "id">

  export type PromptTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    sceneType?: SortOrder
    styleCode?: SortOrder
    promptTemplate?: SortOrder
    negativePrompt?: SortOrderInput | SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptTemplateCountOrderByAggregateInput
    _max?: PromptTemplateMaxOrderByAggregateInput
    _min?: PromptTemplateMinOrderByAggregateInput
  }

  export type PromptTemplateScalarWhereWithAggregatesInput = {
    AND?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    OR?: PromptTemplateScalarWhereWithAggregatesInput[]
    NOT?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptTemplate"> | string
    sceneType?: StringWithAggregatesFilter<"PromptTemplate"> | string
    styleCode?: StringWithAggregatesFilter<"PromptTemplate"> | string
    promptTemplate?: StringWithAggregatesFilter<"PromptTemplate"> | string
    negativePrompt?: StringNullableWithAggregatesFilter<"PromptTemplate"> | string | null
    enabled?: BoolWithAggregatesFilter<"PromptTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
  }

  export type StylePresetWhereInput = {
    AND?: StylePresetWhereInput | StylePresetWhereInput[]
    OR?: StylePresetWhereInput[]
    NOT?: StylePresetWhereInput | StylePresetWhereInput[]
    id?: StringFilter<"StylePreset"> | string
    styleCode?: StringFilter<"StylePreset"> | string
    styleName?: StringFilter<"StylePreset"> | string
    coverImage?: StringNullableFilter<"StylePreset"> | string | null
    roomTypes?: StringNullableListFilter<"StylePreset">
    promptTemplate?: StringFilter<"StylePreset"> | string
    negativePromptTemplate?: StringNullableFilter<"StylePreset"> | string | null
    materialKeywords?: StringNullableListFilter<"StylePreset">
    lightingKeywords?: StringNullableListFilter<"StylePreset">
    furnitureKeywords?: StringNullableListFilter<"StylePreset">
    colorPalette?: StringNullableListFilter<"StylePreset">
    sortOrder?: IntFilter<"StylePreset"> | number
    enabled?: BoolFilter<"StylePreset"> | boolean
    createdAt?: DateTimeFilter<"StylePreset"> | Date | string
    updatedAt?: DateTimeFilter<"StylePreset"> | Date | string
  }

  export type StylePresetOrderByWithRelationInput = {
    id?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    roomTypes?: SortOrder
    promptTemplate?: SortOrder
    negativePromptTemplate?: SortOrderInput | SortOrder
    materialKeywords?: SortOrder
    lightingKeywords?: SortOrder
    furnitureKeywords?: SortOrder
    colorPalette?: SortOrder
    sortOrder?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StylePresetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    styleCode?: string
    AND?: StylePresetWhereInput | StylePresetWhereInput[]
    OR?: StylePresetWhereInput[]
    NOT?: StylePresetWhereInput | StylePresetWhereInput[]
    styleName?: StringFilter<"StylePreset"> | string
    coverImage?: StringNullableFilter<"StylePreset"> | string | null
    roomTypes?: StringNullableListFilter<"StylePreset">
    promptTemplate?: StringFilter<"StylePreset"> | string
    negativePromptTemplate?: StringNullableFilter<"StylePreset"> | string | null
    materialKeywords?: StringNullableListFilter<"StylePreset">
    lightingKeywords?: StringNullableListFilter<"StylePreset">
    furnitureKeywords?: StringNullableListFilter<"StylePreset">
    colorPalette?: StringNullableListFilter<"StylePreset">
    sortOrder?: IntFilter<"StylePreset"> | number
    enabled?: BoolFilter<"StylePreset"> | boolean
    createdAt?: DateTimeFilter<"StylePreset"> | Date | string
    updatedAt?: DateTimeFilter<"StylePreset"> | Date | string
  }, "id" | "styleCode">

  export type StylePresetOrderByWithAggregationInput = {
    id?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    roomTypes?: SortOrder
    promptTemplate?: SortOrder
    negativePromptTemplate?: SortOrderInput | SortOrder
    materialKeywords?: SortOrder
    lightingKeywords?: SortOrder
    furnitureKeywords?: SortOrder
    colorPalette?: SortOrder
    sortOrder?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StylePresetCountOrderByAggregateInput
    _avg?: StylePresetAvgOrderByAggregateInput
    _max?: StylePresetMaxOrderByAggregateInput
    _min?: StylePresetMinOrderByAggregateInput
    _sum?: StylePresetSumOrderByAggregateInput
  }

  export type StylePresetScalarWhereWithAggregatesInput = {
    AND?: StylePresetScalarWhereWithAggregatesInput | StylePresetScalarWhereWithAggregatesInput[]
    OR?: StylePresetScalarWhereWithAggregatesInput[]
    NOT?: StylePresetScalarWhereWithAggregatesInput | StylePresetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StylePreset"> | string
    styleCode?: StringWithAggregatesFilter<"StylePreset"> | string
    styleName?: StringWithAggregatesFilter<"StylePreset"> | string
    coverImage?: StringNullableWithAggregatesFilter<"StylePreset"> | string | null
    roomTypes?: StringNullableListFilter<"StylePreset">
    promptTemplate?: StringWithAggregatesFilter<"StylePreset"> | string
    negativePromptTemplate?: StringNullableWithAggregatesFilter<"StylePreset"> | string | null
    materialKeywords?: StringNullableListFilter<"StylePreset">
    lightingKeywords?: StringNullableListFilter<"StylePreset">
    furnitureKeywords?: StringNullableListFilter<"StylePreset">
    colorPalette?: StringNullableListFilter<"StylePreset">
    sortOrder?: IntWithAggregatesFilter<"StylePreset"> | number
    enabled?: BoolWithAggregatesFilter<"StylePreset"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StylePreset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StylePreset"> | Date | string
  }

  export type UploadTicketCreateInput = {
    id?: string
    fileName: string
    contentType: string
    fileSize: number
    objectKey: string
    publicUrl: string
    expiresIn?: number
    status?: string
    createdAt?: Date | string
  }

  export type UploadTicketUncheckedCreateInput = {
    id?: string
    fileName: string
    contentType: string
    fileSize: number
    objectKey: string
    publicUrl: string
    expiresIn?: number
    status?: string
    createdAt?: Date | string
  }

  export type UploadTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTicketCreateManyInput = {
    id?: string
    fileName: string
    contentType: string
    fileSize: number
    objectKey: string
    publicUrl: string
    expiresIn?: number
    status?: string
    createdAt?: Date | string
  }

  export type UploadTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    expiresIn?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phone?: string | null
    nickname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone?: string | null
    nickname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone?: string | null
    nickname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskUncheckedCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultUncheckedCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUncheckedUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUncheckedUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectConstraintCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutConstraintsInput
  }

  export type ProjectConstraintUncheckedCreateInput = {
    id?: string
    projectId: string
    value: string
    createdAt?: Date | string
  }

  export type ProjectConstraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutConstraintsNestedInput
  }

  export type ProjectConstraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectConstraintCreateManyInput = {
    id?: string
    projectId: string
    value: string
    createdAt?: Date | string
  }

  export type ProjectConstraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectConstraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetCreateInput = {
    id?: string
    kind: $Enums.AssetKind
    fileName?: string | null
    objectKey: string
    publicUrl: string
    contentType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAssetsInput
  }

  export type ProjectAssetUncheckedCreateInput = {
    id?: string
    projectId: string
    kind: $Enums.AssetKind
    fileName?: string | null
    objectKey: string
    publicUrl: string
    contentType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type ProjectAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type ProjectAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetCreateManyInput = {
    id?: string
    projectId: string
    kind: $Enums.AssetKind
    fileName?: string | null
    objectKey: string
    publicUrl: string
    contentType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type ProjectAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderTaskCreateInput = {
    id?: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutRenderTasksInput
    results?: RenderResultCreateNestedManyWithoutRenderTaskInput
  }

  export type RenderTaskUncheckedCreateInput = {
    id?: string
    projectId: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: RenderResultUncheckedCreateNestedManyWithoutRenderTaskInput
  }

  export type RenderTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutRenderTasksNestedInput
    results?: RenderResultUpdateManyWithoutRenderTaskNestedInput
  }

  export type RenderTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: RenderResultUncheckedUpdateManyWithoutRenderTaskNestedInput
  }

  export type RenderTaskCreateManyInput = {
    id?: string
    projectId: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultCreateInput = {
    id?: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
    renderTask: RenderTaskCreateNestedOneWithoutResultsInput
    project: ProjectCreateNestedOneWithoutRenderResultsInput
  }

  export type RenderResultUncheckedCreateInput = {
    id?: string
    projectId: string
    renderTaskId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
  }

  export type RenderResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renderTask?: RenderTaskUpdateOneRequiredWithoutResultsNestedInput
    project?: ProjectUpdateOneRequiredWithoutRenderResultsNestedInput
  }

  export type RenderResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    renderTaskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultCreateManyInput = {
    id?: string
    projectId: string
    renderTaskId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
  }

  export type RenderResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    renderTaskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateInput = {
    id?: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status?: $Enums.ShareStatus
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutShareLinksInput
  }

  export type ShareLinkUncheckedCreateInput = {
    id?: string
    projectId: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status?: $Enums.ShareStatus
    createdAt?: Date | string
  }

  export type ShareLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutShareLinksNestedInput
  }

  export type ShareLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateManyInput = {
    id?: string
    projectId: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status?: $Enums.ShareStatus
    createdAt?: Date | string
  }

  export type ShareLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiProviderCreateInput = {
    id?: string
    providerCode: string
    providerName: string
    baseUrl: string
    apiKeyRef: string
    timeoutMs?: number
    retryLimit?: number
    dailyBudgetLimit?: Decimal | DecimalJsLike | number | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: AiModelCreateNestedManyWithoutProviderInput
  }

  export type AiProviderUncheckedCreateInput = {
    id?: string
    providerCode: string
    providerName: string
    baseUrl: string
    apiKeyRef: string
    timeoutMs?: number
    retryLimit?: number
    dailyBudgetLimit?: Decimal | DecimalJsLike | number | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: AiModelUncheckedCreateNestedManyWithoutProviderInput
  }

  export type AiProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKeyRef?: StringFieldUpdateOperationsInput | string
    timeoutMs?: IntFieldUpdateOperationsInput | number
    retryLimit?: IntFieldUpdateOperationsInput | number
    dailyBudgetLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: AiModelUpdateManyWithoutProviderNestedInput
  }

  export type AiProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKeyRef?: StringFieldUpdateOperationsInput | string
    timeoutMs?: IntFieldUpdateOperationsInput | number
    retryLimit?: IntFieldUpdateOperationsInput | number
    dailyBudgetLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: AiModelUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type AiProviderCreateManyInput = {
    id?: string
    providerCode: string
    providerName: string
    baseUrl: string
    apiKeyRef: string
    timeoutMs?: number
    retryLimit?: number
    dailyBudgetLimit?: Decimal | DecimalJsLike | number | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKeyRef?: StringFieldUpdateOperationsInput | string
    timeoutMs?: IntFieldUpdateOperationsInput | number
    retryLimit?: IntFieldUpdateOperationsInput | number
    dailyBudgetLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKeyRef?: StringFieldUpdateOperationsInput | string
    timeoutMs?: IntFieldUpdateOperationsInput | number
    retryLimit?: IntFieldUpdateOperationsInput | number
    dailyBudgetLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelCreateInput = {
    id?: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled?: boolean
    isDefault?: boolean
    temperature?: number | null
    topP?: number | null
    imageSize?: string | null
    aspectRatio?: string | null
    candidateCount?: number | null
    responseFormat?: string | null
    promptOptimizerEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: AiProviderCreateNestedOneWithoutModelsInput
  }

  export type AiModelUncheckedCreateInput = {
    id?: string
    providerId: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled?: boolean
    isDefault?: boolean
    temperature?: number | null
    topP?: number | null
    imageSize?: string | null
    aspectRatio?: string | null
    candidateCount?: number | null
    responseFormat?: string | null
    promptOptimizerEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: AiProviderUpdateOneRequiredWithoutModelsNestedInput
  }

  export type AiModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelCreateManyInput = {
    id?: string
    providerId: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled?: boolean
    isDefault?: boolean
    temperature?: number | null
    topP?: number | null
    imageSize?: string | null
    aspectRatio?: string | null
    candidateCount?: number | null
    responseFormat?: string | null
    promptOptimizerEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateCreateInput = {
    id?: string
    sceneType: string
    styleCode: string
    promptTemplate: string
    negativePrompt?: string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUncheckedCreateInput = {
    id?: string
    sceneType: string
    styleCode: string
    promptTemplate: string
    negativePrompt?: string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateCreateManyInput = {
    id?: string
    sceneType: string
    styleCode: string
    promptTemplate: string
    negativePrompt?: string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylePresetCreateInput = {
    id?: string
    styleCode: string
    styleName: string
    coverImage?: string | null
    roomTypes?: StylePresetCreateroomTypesInput | string[]
    promptTemplate: string
    negativePromptTemplate?: string | null
    materialKeywords?: StylePresetCreatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetCreatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetCreatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetCreatecolorPaletteInput | string[]
    sortOrder?: number
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StylePresetUncheckedCreateInput = {
    id?: string
    styleCode: string
    styleName: string
    coverImage?: string | null
    roomTypes?: StylePresetCreateroomTypesInput | string[]
    promptTemplate: string
    negativePromptTemplate?: string | null
    materialKeywords?: StylePresetCreatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetCreatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetCreatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetCreatecolorPaletteInput | string[]
    sortOrder?: number
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StylePresetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    roomTypes?: StylePresetUpdateroomTypesInput | string[]
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePromptTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    materialKeywords?: StylePresetUpdatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetUpdatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetUpdatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetUpdatecolorPaletteInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylePresetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    roomTypes?: StylePresetUpdateroomTypesInput | string[]
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePromptTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    materialKeywords?: StylePresetUpdatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetUpdatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetUpdatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetUpdatecolorPaletteInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylePresetCreateManyInput = {
    id?: string
    styleCode: string
    styleName: string
    coverImage?: string | null
    roomTypes?: StylePresetCreateroomTypesInput | string[]
    promptTemplate: string
    negativePromptTemplate?: string | null
    materialKeywords?: StylePresetCreatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetCreatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetCreatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetCreatecolorPaletteInput | string[]
    sortOrder?: number
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StylePresetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    roomTypes?: StylePresetUpdateroomTypesInput | string[]
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePromptTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    materialKeywords?: StylePresetUpdatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetUpdatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetUpdatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetUpdatecolorPaletteInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylePresetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    styleName?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    roomTypes?: StylePresetUpdateroomTypesInput | string[]
    promptTemplate?: StringFieldUpdateOperationsInput | string
    negativePromptTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    materialKeywords?: StylePresetUpdatematerialKeywordsInput | string[]
    lightingKeywords?: StylePresetUpdatelightingKeywordsInput | string[]
    furnitureKeywords?: StylePresetUpdatefurnitureKeywordsInput | string[]
    colorPalette?: StylePresetUpdatecolorPaletteInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
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

  export type UploadTicketCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    expiresIn?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTicketAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    expiresIn?: SortOrder
  }

  export type UploadTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    expiresIn?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTicketMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    expiresIn?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadTicketSumOrderByAggregateInput = {
    fileSize?: SortOrder
    expiresIn?: SortOrder
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectAssetListRelationFilter = {
    every?: ProjectAssetWhereInput
    some?: ProjectAssetWhereInput
    none?: ProjectAssetWhereInput
  }

  export type RenderTaskListRelationFilter = {
    every?: RenderTaskWhereInput
    some?: RenderTaskWhereInput
    none?: RenderTaskWhereInput
  }

  export type RenderResultListRelationFilter = {
    every?: RenderResultWhereInput
    some?: RenderResultWhereInput
    none?: RenderResultWhereInput
  }

  export type ShareLinkListRelationFilter = {
    every?: ShareLinkWhereInput
    some?: ShareLinkWhereInput
    none?: ShareLinkWhereInput
  }

  export type ProjectConstraintListRelationFilter = {
    every?: ProjectConstraintWhereInput
    some?: ProjectConstraintWhereInput
    none?: ProjectConstraintWhereInput
  }

  export type ProjectAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenderTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenderResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectConstraintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    roomType?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    status?: SortOrder
    originalImageUrl?: SortOrder
    latestRenderTaskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    roomType?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    status?: SortOrder
    originalImageUrl?: SortOrder
    latestRenderTaskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    roomType?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    status?: SortOrder
    originalImageUrl?: SortOrder
    latestRenderTaskId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectConstraintCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectConstraintMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectConstraintMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAssetKindFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetKind | EnumAssetKindFieldRefInput<$PrismaModel>
    in?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetKindFilter<$PrismaModel> | $Enums.AssetKind
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

  export type ProjectAssetCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    kind?: SortOrder
    fileName?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAssetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type ProjectAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    kind?: SortOrder
    fileName?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAssetMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    kind?: SortOrder
    fileName?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAssetSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type EnumAssetKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetKind | EnumAssetKindFieldRefInput<$PrismaModel>
    in?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetKindWithAggregatesFilter<$PrismaModel> | $Enums.AssetKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetKindFilter<$PrismaModel>
    _max?: NestedEnumAssetKindFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumRenderTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderTaskStatus | EnumRenderTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderTaskStatusFilter<$PrismaModel> | $Enums.RenderTaskStatus
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RenderTaskCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    providerCode?: SortOrder
    modelCode?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    constraints?: SortOrder
    candidateCount?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    requestPayload?: SortOrder
    responseSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderTaskAvgOrderByAggregateInput = {
    candidateCount?: SortOrder
    progressPercent?: SortOrder
  }

  export type RenderTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    providerCode?: SortOrder
    modelCode?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    candidateCount?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderTaskMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    providerCode?: SortOrder
    modelCode?: SortOrder
    styleCode?: SortOrder
    budgetLevel?: SortOrder
    candidateCount?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderTaskSumOrderByAggregateInput = {
    candidateCount?: SortOrder
    progressPercent?: SortOrder
  }

  export type EnumRenderTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderTaskStatus | EnumRenderTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.RenderTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRenderTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumRenderTaskStatusFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type RenderTaskScalarRelationFilter = {
    is?: RenderTaskWhereInput
    isNot?: RenderTaskWhereInput
  }

  export type RenderResultCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    renderTaskId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    score?: SortOrder
    styleCode?: SortOrder
    createdAt?: SortOrder
  }

  export type RenderResultAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RenderResultMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    renderTaskId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    score?: SortOrder
    styleCode?: SortOrder
    createdAt?: SortOrder
  }

  export type RenderResultMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    renderTaskId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    score?: SortOrder
    styleCode?: SortOrder
    createdAt?: SortOrder
  }

  export type RenderResultSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type EnumShareStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareStatus | EnumShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShareStatusFilter<$PrismaModel> | $Enums.ShareStatus
  }

  export type ShareLinkCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    shareCode?: SortOrder
    shareUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    shareCode?: SortOrder
    shareUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareLinkMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    shareCode?: SortOrder
    shareUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumShareStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareStatus | EnumShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShareStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShareStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShareStatusFilter<$PrismaModel>
    _max?: NestedEnumShareStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AiModelListRelationFilter = {
    every?: AiModelWhereInput
    some?: AiModelWhereInput
    none?: AiModelWhereInput
  }

  export type AiModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiProviderCountOrderByAggregateInput = {
    id?: SortOrder
    providerCode?: SortOrder
    providerName?: SortOrder
    baseUrl?: SortOrder
    apiKeyRef?: SortOrder
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiProviderAvgOrderByAggregateInput = {
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrder
  }

  export type AiProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    providerCode?: SortOrder
    providerName?: SortOrder
    baseUrl?: SortOrder
    apiKeyRef?: SortOrder
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiProviderMinOrderByAggregateInput = {
    id?: SortOrder
    providerCode?: SortOrder
    providerName?: SortOrder
    baseUrl?: SortOrder
    apiKeyRef?: SortOrder
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiProviderSumOrderByAggregateInput = {
    timeoutMs?: SortOrder
    retryLimit?: SortOrder
    dailyBudgetLimit?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumModelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeFilter<$PrismaModel> | $Enums.ModelType
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

  export type AiProviderScalarRelationFilter = {
    is?: AiProviderWhereInput
    isNot?: AiProviderWhereInput
  }

  export type AiModelCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    modelCode?: SortOrder
    displayName?: SortOrder
    modelType?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    imageSize?: SortOrder
    aspectRatio?: SortOrder
    candidateCount?: SortOrder
    responseFormat?: SortOrder
    promptOptimizerEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiModelAvgOrderByAggregateInput = {
    temperature?: SortOrder
    topP?: SortOrder
    candidateCount?: SortOrder
  }

  export type AiModelMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    modelCode?: SortOrder
    displayName?: SortOrder
    modelType?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    imageSize?: SortOrder
    aspectRatio?: SortOrder
    candidateCount?: SortOrder
    responseFormat?: SortOrder
    promptOptimizerEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiModelMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    modelCode?: SortOrder
    displayName?: SortOrder
    modelType?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    temperature?: SortOrder
    topP?: SortOrder
    imageSize?: SortOrder
    aspectRatio?: SortOrder
    candidateCount?: SortOrder
    responseFormat?: SortOrder
    promptOptimizerEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiModelSumOrderByAggregateInput = {
    temperature?: SortOrder
    topP?: SortOrder
    candidateCount?: SortOrder
  }

  export type EnumModelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeFilter<$PrismaModel>
    _max?: NestedEnumModelTypeFilter<$PrismaModel>
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

  export type PromptTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    sceneType?: SortOrder
    styleCode?: SortOrder
    promptTemplate?: SortOrder
    negativePrompt?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    sceneType?: SortOrder
    styleCode?: SortOrder
    promptTemplate?: SortOrder
    negativePrompt?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    sceneType?: SortOrder
    styleCode?: SortOrder
    promptTemplate?: SortOrder
    negativePrompt?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StylePresetCountOrderByAggregateInput = {
    id?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    coverImage?: SortOrder
    roomTypes?: SortOrder
    promptTemplate?: SortOrder
    negativePromptTemplate?: SortOrder
    materialKeywords?: SortOrder
    lightingKeywords?: SortOrder
    furnitureKeywords?: SortOrder
    colorPalette?: SortOrder
    sortOrder?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StylePresetAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StylePresetMaxOrderByAggregateInput = {
    id?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    coverImage?: SortOrder
    promptTemplate?: SortOrder
    negativePromptTemplate?: SortOrder
    sortOrder?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StylePresetMinOrderByAggregateInput = {
    id?: SortOrder
    styleCode?: SortOrder
    styleName?: SortOrder
    coverImage?: SortOrder
    promptTemplate?: SortOrder
    negativePromptTemplate?: SortOrder
    sortOrder?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StylePresetSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectAssetCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type RenderTaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<RenderTaskCreateWithoutProjectInput, RenderTaskUncheckedCreateWithoutProjectInput> | RenderTaskCreateWithoutProjectInput[] | RenderTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderTaskCreateOrConnectWithoutProjectInput | RenderTaskCreateOrConnectWithoutProjectInput[]
    createMany?: RenderTaskCreateManyProjectInputEnvelope
    connect?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
  }

  export type RenderResultCreateNestedManyWithoutProjectInput = {
    create?: XOR<RenderResultCreateWithoutProjectInput, RenderResultUncheckedCreateWithoutProjectInput> | RenderResultCreateWithoutProjectInput[] | RenderResultUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutProjectInput | RenderResultCreateOrConnectWithoutProjectInput[]
    createMany?: RenderResultCreateManyProjectInputEnvelope
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
  }

  export type ShareLinkCreateNestedManyWithoutProjectInput = {
    create?: XOR<ShareLinkCreateWithoutProjectInput, ShareLinkUncheckedCreateWithoutProjectInput> | ShareLinkCreateWithoutProjectInput[] | ShareLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutProjectInput | ShareLinkCreateOrConnectWithoutProjectInput[]
    createMany?: ShareLinkCreateManyProjectInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type ProjectConstraintCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectConstraintCreateWithoutProjectInput, ProjectConstraintUncheckedCreateWithoutProjectInput> | ProjectConstraintCreateWithoutProjectInput[] | ProjectConstraintUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectConstraintCreateOrConnectWithoutProjectInput | ProjectConstraintCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectConstraintCreateManyProjectInputEnvelope
    connect?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
  }

  export type ProjectAssetUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
  }

  export type RenderTaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<RenderTaskCreateWithoutProjectInput, RenderTaskUncheckedCreateWithoutProjectInput> | RenderTaskCreateWithoutProjectInput[] | RenderTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderTaskCreateOrConnectWithoutProjectInput | RenderTaskCreateOrConnectWithoutProjectInput[]
    createMany?: RenderTaskCreateManyProjectInputEnvelope
    connect?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
  }

  export type RenderResultUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<RenderResultCreateWithoutProjectInput, RenderResultUncheckedCreateWithoutProjectInput> | RenderResultCreateWithoutProjectInput[] | RenderResultUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutProjectInput | RenderResultCreateOrConnectWithoutProjectInput[]
    createMany?: RenderResultCreateManyProjectInputEnvelope
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
  }

  export type ShareLinkUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ShareLinkCreateWithoutProjectInput, ShareLinkUncheckedCreateWithoutProjectInput> | ShareLinkCreateWithoutProjectInput[] | ShareLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutProjectInput | ShareLinkCreateOrConnectWithoutProjectInput[]
    createMany?: ShareLinkCreateManyProjectInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectConstraintCreateWithoutProjectInput, ProjectConstraintUncheckedCreateWithoutProjectInput> | ProjectConstraintCreateWithoutProjectInput[] | ProjectConstraintUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectConstraintCreateOrConnectWithoutProjectInput | ProjectConstraintCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectConstraintCreateManyProjectInputEnvelope
    connect?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type UserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectAssetUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutProjectInput | ProjectAssetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type RenderTaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<RenderTaskCreateWithoutProjectInput, RenderTaskUncheckedCreateWithoutProjectInput> | RenderTaskCreateWithoutProjectInput[] | RenderTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderTaskCreateOrConnectWithoutProjectInput | RenderTaskCreateOrConnectWithoutProjectInput[]
    upsert?: RenderTaskUpsertWithWhereUniqueWithoutProjectInput | RenderTaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: RenderTaskCreateManyProjectInputEnvelope
    set?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    disconnect?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    delete?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    connect?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    update?: RenderTaskUpdateWithWhereUniqueWithoutProjectInput | RenderTaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: RenderTaskUpdateManyWithWhereWithoutProjectInput | RenderTaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: RenderTaskScalarWhereInput | RenderTaskScalarWhereInput[]
  }

  export type RenderResultUpdateManyWithoutProjectNestedInput = {
    create?: XOR<RenderResultCreateWithoutProjectInput, RenderResultUncheckedCreateWithoutProjectInput> | RenderResultCreateWithoutProjectInput[] | RenderResultUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutProjectInput | RenderResultCreateOrConnectWithoutProjectInput[]
    upsert?: RenderResultUpsertWithWhereUniqueWithoutProjectInput | RenderResultUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: RenderResultCreateManyProjectInputEnvelope
    set?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    disconnect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    delete?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    update?: RenderResultUpdateWithWhereUniqueWithoutProjectInput | RenderResultUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: RenderResultUpdateManyWithWhereWithoutProjectInput | RenderResultUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: RenderResultScalarWhereInput | RenderResultScalarWhereInput[]
  }

  export type ShareLinkUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ShareLinkCreateWithoutProjectInput, ShareLinkUncheckedCreateWithoutProjectInput> | ShareLinkCreateWithoutProjectInput[] | ShareLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutProjectInput | ShareLinkCreateOrConnectWithoutProjectInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutProjectInput | ShareLinkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ShareLinkCreateManyProjectInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutProjectInput | ShareLinkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutProjectInput | ShareLinkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type ProjectConstraintUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectConstraintCreateWithoutProjectInput, ProjectConstraintUncheckedCreateWithoutProjectInput> | ProjectConstraintCreateWithoutProjectInput[] | ProjectConstraintUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectConstraintCreateOrConnectWithoutProjectInput | ProjectConstraintCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectConstraintUpsertWithWhereUniqueWithoutProjectInput | ProjectConstraintUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectConstraintCreateManyProjectInputEnvelope
    set?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    disconnect?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    delete?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    connect?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    update?: ProjectConstraintUpdateWithWhereUniqueWithoutProjectInput | ProjectConstraintUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectConstraintUpdateManyWithWhereWithoutProjectInput | ProjectConstraintUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectConstraintScalarWhereInput | ProjectConstraintScalarWhereInput[]
  }

  export type ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput> | ProjectAssetCreateWithoutProjectInput[] | ProjectAssetUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAssetCreateOrConnectWithoutProjectInput | ProjectAssetCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAssetCreateManyProjectInputEnvelope
    set?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    disconnect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    delete?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    connect?: ProjectAssetWhereUniqueInput | ProjectAssetWhereUniqueInput[]
    update?: ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAssetUpdateManyWithWhereWithoutProjectInput | ProjectAssetUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
  }

  export type RenderTaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<RenderTaskCreateWithoutProjectInput, RenderTaskUncheckedCreateWithoutProjectInput> | RenderTaskCreateWithoutProjectInput[] | RenderTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderTaskCreateOrConnectWithoutProjectInput | RenderTaskCreateOrConnectWithoutProjectInput[]
    upsert?: RenderTaskUpsertWithWhereUniqueWithoutProjectInput | RenderTaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: RenderTaskCreateManyProjectInputEnvelope
    set?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    disconnect?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    delete?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    connect?: RenderTaskWhereUniqueInput | RenderTaskWhereUniqueInput[]
    update?: RenderTaskUpdateWithWhereUniqueWithoutProjectInput | RenderTaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: RenderTaskUpdateManyWithWhereWithoutProjectInput | RenderTaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: RenderTaskScalarWhereInput | RenderTaskScalarWhereInput[]
  }

  export type RenderResultUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<RenderResultCreateWithoutProjectInput, RenderResultUncheckedCreateWithoutProjectInput> | RenderResultCreateWithoutProjectInput[] | RenderResultUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutProjectInput | RenderResultCreateOrConnectWithoutProjectInput[]
    upsert?: RenderResultUpsertWithWhereUniqueWithoutProjectInput | RenderResultUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: RenderResultCreateManyProjectInputEnvelope
    set?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    disconnect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    delete?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    update?: RenderResultUpdateWithWhereUniqueWithoutProjectInput | RenderResultUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: RenderResultUpdateManyWithWhereWithoutProjectInput | RenderResultUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: RenderResultScalarWhereInput | RenderResultScalarWhereInput[]
  }

  export type ShareLinkUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ShareLinkCreateWithoutProjectInput, ShareLinkUncheckedCreateWithoutProjectInput> | ShareLinkCreateWithoutProjectInput[] | ShareLinkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutProjectInput | ShareLinkCreateOrConnectWithoutProjectInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutProjectInput | ShareLinkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ShareLinkCreateManyProjectInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutProjectInput | ShareLinkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutProjectInput | ShareLinkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectConstraintCreateWithoutProjectInput, ProjectConstraintUncheckedCreateWithoutProjectInput> | ProjectConstraintCreateWithoutProjectInput[] | ProjectConstraintUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectConstraintCreateOrConnectWithoutProjectInput | ProjectConstraintCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectConstraintUpsertWithWhereUniqueWithoutProjectInput | ProjectConstraintUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectConstraintCreateManyProjectInputEnvelope
    set?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    disconnect?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    delete?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    connect?: ProjectConstraintWhereUniqueInput | ProjectConstraintWhereUniqueInput[]
    update?: ProjectConstraintUpdateWithWhereUniqueWithoutProjectInput | ProjectConstraintUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectConstraintUpdateManyWithWhereWithoutProjectInput | ProjectConstraintUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectConstraintScalarWhereInput | ProjectConstraintScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutConstraintsInput = {
    create?: XOR<ProjectCreateWithoutConstraintsInput, ProjectUncheckedCreateWithoutConstraintsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutConstraintsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutConstraintsNestedInput = {
    create?: XOR<ProjectCreateWithoutConstraintsInput, ProjectUncheckedCreateWithoutConstraintsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutConstraintsInput
    upsert?: ProjectUpsertWithoutConstraintsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutConstraintsInput, ProjectUpdateWithoutConstraintsInput>, ProjectUncheckedUpdateWithoutConstraintsInput>
  }

  export type ProjectCreateNestedOneWithoutAssetsInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumAssetKindFieldUpdateOperationsInput = {
    set?: $Enums.AssetKind
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAssetsInput
    upsert?: ProjectUpsertWithoutAssetsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAssetsInput, ProjectUpdateWithoutAssetsInput>, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type RenderTaskCreateconstraintsInput = {
    set: string[]
  }

  export type ProjectCreateNestedOneWithoutRenderTasksInput = {
    create?: XOR<ProjectCreateWithoutRenderTasksInput, ProjectUncheckedCreateWithoutRenderTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRenderTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type RenderResultCreateNestedManyWithoutRenderTaskInput = {
    create?: XOR<RenderResultCreateWithoutRenderTaskInput, RenderResultUncheckedCreateWithoutRenderTaskInput> | RenderResultCreateWithoutRenderTaskInput[] | RenderResultUncheckedCreateWithoutRenderTaskInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutRenderTaskInput | RenderResultCreateOrConnectWithoutRenderTaskInput[]
    createMany?: RenderResultCreateManyRenderTaskInputEnvelope
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
  }

  export type RenderResultUncheckedCreateNestedManyWithoutRenderTaskInput = {
    create?: XOR<RenderResultCreateWithoutRenderTaskInput, RenderResultUncheckedCreateWithoutRenderTaskInput> | RenderResultCreateWithoutRenderTaskInput[] | RenderResultUncheckedCreateWithoutRenderTaskInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutRenderTaskInput | RenderResultCreateOrConnectWithoutRenderTaskInput[]
    createMany?: RenderResultCreateManyRenderTaskInputEnvelope
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
  }

  export type RenderTaskUpdateconstraintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRenderTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.RenderTaskStatus
  }

  export type ProjectUpdateOneRequiredWithoutRenderTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutRenderTasksInput, ProjectUncheckedCreateWithoutRenderTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRenderTasksInput
    upsert?: ProjectUpsertWithoutRenderTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutRenderTasksInput, ProjectUpdateWithoutRenderTasksInput>, ProjectUncheckedUpdateWithoutRenderTasksInput>
  }

  export type RenderResultUpdateManyWithoutRenderTaskNestedInput = {
    create?: XOR<RenderResultCreateWithoutRenderTaskInput, RenderResultUncheckedCreateWithoutRenderTaskInput> | RenderResultCreateWithoutRenderTaskInput[] | RenderResultUncheckedCreateWithoutRenderTaskInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutRenderTaskInput | RenderResultCreateOrConnectWithoutRenderTaskInput[]
    upsert?: RenderResultUpsertWithWhereUniqueWithoutRenderTaskInput | RenderResultUpsertWithWhereUniqueWithoutRenderTaskInput[]
    createMany?: RenderResultCreateManyRenderTaskInputEnvelope
    set?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    disconnect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    delete?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    update?: RenderResultUpdateWithWhereUniqueWithoutRenderTaskInput | RenderResultUpdateWithWhereUniqueWithoutRenderTaskInput[]
    updateMany?: RenderResultUpdateManyWithWhereWithoutRenderTaskInput | RenderResultUpdateManyWithWhereWithoutRenderTaskInput[]
    deleteMany?: RenderResultScalarWhereInput | RenderResultScalarWhereInput[]
  }

  export type RenderResultUncheckedUpdateManyWithoutRenderTaskNestedInput = {
    create?: XOR<RenderResultCreateWithoutRenderTaskInput, RenderResultUncheckedCreateWithoutRenderTaskInput> | RenderResultCreateWithoutRenderTaskInput[] | RenderResultUncheckedCreateWithoutRenderTaskInput[]
    connectOrCreate?: RenderResultCreateOrConnectWithoutRenderTaskInput | RenderResultCreateOrConnectWithoutRenderTaskInput[]
    upsert?: RenderResultUpsertWithWhereUniqueWithoutRenderTaskInput | RenderResultUpsertWithWhereUniqueWithoutRenderTaskInput[]
    createMany?: RenderResultCreateManyRenderTaskInputEnvelope
    set?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    disconnect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    delete?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    connect?: RenderResultWhereUniqueInput | RenderResultWhereUniqueInput[]
    update?: RenderResultUpdateWithWhereUniqueWithoutRenderTaskInput | RenderResultUpdateWithWhereUniqueWithoutRenderTaskInput[]
    updateMany?: RenderResultUpdateManyWithWhereWithoutRenderTaskInput | RenderResultUpdateManyWithWhereWithoutRenderTaskInput[]
    deleteMany?: RenderResultScalarWhereInput | RenderResultScalarWhereInput[]
  }

  export type RenderTaskCreateNestedOneWithoutResultsInput = {
    create?: XOR<RenderTaskCreateWithoutResultsInput, RenderTaskUncheckedCreateWithoutResultsInput>
    connectOrCreate?: RenderTaskCreateOrConnectWithoutResultsInput
    connect?: RenderTaskWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutRenderResultsInput = {
    create?: XOR<ProjectCreateWithoutRenderResultsInput, ProjectUncheckedCreateWithoutRenderResultsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRenderResultsInput
    connect?: ProjectWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RenderTaskUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<RenderTaskCreateWithoutResultsInput, RenderTaskUncheckedCreateWithoutResultsInput>
    connectOrCreate?: RenderTaskCreateOrConnectWithoutResultsInput
    upsert?: RenderTaskUpsertWithoutResultsInput
    connect?: RenderTaskWhereUniqueInput
    update?: XOR<XOR<RenderTaskUpdateToOneWithWhereWithoutResultsInput, RenderTaskUpdateWithoutResultsInput>, RenderTaskUncheckedUpdateWithoutResultsInput>
  }

  export type ProjectUpdateOneRequiredWithoutRenderResultsNestedInput = {
    create?: XOR<ProjectCreateWithoutRenderResultsInput, ProjectUncheckedCreateWithoutRenderResultsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRenderResultsInput
    upsert?: ProjectUpsertWithoutRenderResultsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutRenderResultsInput, ProjectUpdateWithoutRenderResultsInput>, ProjectUncheckedUpdateWithoutRenderResultsInput>
  }

  export type ProjectCreateNestedOneWithoutShareLinksInput = {
    create?: XOR<ProjectCreateWithoutShareLinksInput, ProjectUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutShareLinksInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumShareStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShareStatus
  }

  export type ProjectUpdateOneRequiredWithoutShareLinksNestedInput = {
    create?: XOR<ProjectCreateWithoutShareLinksInput, ProjectUncheckedCreateWithoutShareLinksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutShareLinksInput
    upsert?: ProjectUpsertWithoutShareLinksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutShareLinksInput, ProjectUpdateWithoutShareLinksInput>, ProjectUncheckedUpdateWithoutShareLinksInput>
  }

  export type AiModelCreateNestedManyWithoutProviderInput = {
    create?: XOR<AiModelCreateWithoutProviderInput, AiModelUncheckedCreateWithoutProviderInput> | AiModelCreateWithoutProviderInput[] | AiModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AiModelCreateOrConnectWithoutProviderInput | AiModelCreateOrConnectWithoutProviderInput[]
    createMany?: AiModelCreateManyProviderInputEnvelope
    connect?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
  }

  export type AiModelUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<AiModelCreateWithoutProviderInput, AiModelUncheckedCreateWithoutProviderInput> | AiModelCreateWithoutProviderInput[] | AiModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AiModelCreateOrConnectWithoutProviderInput | AiModelCreateOrConnectWithoutProviderInput[]
    createMany?: AiModelCreateManyProviderInputEnvelope
    connect?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AiModelUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AiModelCreateWithoutProviderInput, AiModelUncheckedCreateWithoutProviderInput> | AiModelCreateWithoutProviderInput[] | AiModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AiModelCreateOrConnectWithoutProviderInput | AiModelCreateOrConnectWithoutProviderInput[]
    upsert?: AiModelUpsertWithWhereUniqueWithoutProviderInput | AiModelUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AiModelCreateManyProviderInputEnvelope
    set?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    disconnect?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    delete?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    connect?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    update?: AiModelUpdateWithWhereUniqueWithoutProviderInput | AiModelUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AiModelUpdateManyWithWhereWithoutProviderInput | AiModelUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AiModelScalarWhereInput | AiModelScalarWhereInput[]
  }

  export type AiModelUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<AiModelCreateWithoutProviderInput, AiModelUncheckedCreateWithoutProviderInput> | AiModelCreateWithoutProviderInput[] | AiModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: AiModelCreateOrConnectWithoutProviderInput | AiModelCreateOrConnectWithoutProviderInput[]
    upsert?: AiModelUpsertWithWhereUniqueWithoutProviderInput | AiModelUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: AiModelCreateManyProviderInputEnvelope
    set?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    disconnect?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    delete?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    connect?: AiModelWhereUniqueInput | AiModelWhereUniqueInput[]
    update?: AiModelUpdateWithWhereUniqueWithoutProviderInput | AiModelUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: AiModelUpdateManyWithWhereWithoutProviderInput | AiModelUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: AiModelScalarWhereInput | AiModelScalarWhereInput[]
  }

  export type AiProviderCreateNestedOneWithoutModelsInput = {
    create?: XOR<AiProviderCreateWithoutModelsInput, AiProviderUncheckedCreateWithoutModelsInput>
    connectOrCreate?: AiProviderCreateOrConnectWithoutModelsInput
    connect?: AiProviderWhereUniqueInput
  }

  export type EnumModelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ModelType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AiProviderUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<AiProviderCreateWithoutModelsInput, AiProviderUncheckedCreateWithoutModelsInput>
    connectOrCreate?: AiProviderCreateOrConnectWithoutModelsInput
    upsert?: AiProviderUpsertWithoutModelsInput
    connect?: AiProviderWhereUniqueInput
    update?: XOR<XOR<AiProviderUpdateToOneWithWhereWithoutModelsInput, AiProviderUpdateWithoutModelsInput>, AiProviderUncheckedUpdateWithoutModelsInput>
  }

  export type StylePresetCreateroomTypesInput = {
    set: string[]
  }

  export type StylePresetCreatematerialKeywordsInput = {
    set: string[]
  }

  export type StylePresetCreatelightingKeywordsInput = {
    set: string[]
  }

  export type StylePresetCreatefurnitureKeywordsInput = {
    set: string[]
  }

  export type StylePresetCreatecolorPaletteInput = {
    set: string[]
  }

  export type StylePresetUpdateroomTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StylePresetUpdatematerialKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StylePresetUpdatelightingKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StylePresetUpdatefurnitureKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StylePresetUpdatecolorPaletteInput = {
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

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssetKindFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetKind | EnumAssetKindFieldRefInput<$PrismaModel>
    in?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetKindFilter<$PrismaModel> | $Enums.AssetKind
  }

  export type NestedEnumAssetKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetKind | EnumAssetKindFieldRefInput<$PrismaModel>
    in?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetKind[] | ListEnumAssetKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetKindWithAggregatesFilter<$PrismaModel> | $Enums.AssetKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetKindFilter<$PrismaModel>
    _max?: NestedEnumAssetKindFilter<$PrismaModel>
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

  export type NestedEnumRenderTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderTaskStatus | EnumRenderTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderTaskStatusFilter<$PrismaModel> | $Enums.RenderTaskStatus
  }

  export type NestedEnumRenderTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RenderTaskStatus | EnumRenderTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RenderTaskStatus[] | ListEnumRenderTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRenderTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.RenderTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRenderTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumRenderTaskStatusFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumShareStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareStatus | EnumShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShareStatusFilter<$PrismaModel> | $Enums.ShareStatus
  }

  export type NestedEnumShareStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareStatus | EnumShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareStatus[] | ListEnumShareStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShareStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShareStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShareStatusFilter<$PrismaModel>
    _max?: NestedEnumShareStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumModelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeFilter<$PrismaModel> | $Enums.ModelType
  }

  export type NestedEnumModelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumModelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelTypeFilter<$PrismaModel>
    _max?: NestedEnumModelTypeFilter<$PrismaModel>
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

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskUncheckedCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultUncheckedCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringNullableFilter<"Project"> | string | null
    name?: StringFilter<"Project"> | string
    roomType?: StringFilter<"Project"> | string
    styleCode?: StringFilter<"Project"> | string
    budgetLevel?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    originalImageUrl?: StringFilter<"Project"> | string
    latestRenderTaskId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    phone?: string | null
    nickname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    phone?: string | null
    nickname?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectAssetCreateWithoutProjectInput = {
    id?: string
    kind: $Enums.AssetKind
    fileName?: string | null
    objectKey: string
    publicUrl: string
    contentType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type ProjectAssetUncheckedCreateWithoutProjectInput = {
    id?: string
    kind: $Enums.AssetKind
    fileName?: string | null
    objectKey: string
    publicUrl: string
    contentType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type ProjectAssetCreateOrConnectWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    create: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssetCreateManyProjectInputEnvelope = {
    data: ProjectAssetCreateManyProjectInput | ProjectAssetCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type RenderTaskCreateWithoutProjectInput = {
    id?: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: RenderResultCreateNestedManyWithoutRenderTaskInput
  }

  export type RenderTaskUncheckedCreateWithoutProjectInput = {
    id?: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: RenderResultUncheckedCreateNestedManyWithoutRenderTaskInput
  }

  export type RenderTaskCreateOrConnectWithoutProjectInput = {
    where: RenderTaskWhereUniqueInput
    create: XOR<RenderTaskCreateWithoutProjectInput, RenderTaskUncheckedCreateWithoutProjectInput>
  }

  export type RenderTaskCreateManyProjectInputEnvelope = {
    data: RenderTaskCreateManyProjectInput | RenderTaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type RenderResultCreateWithoutProjectInput = {
    id?: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
    renderTask: RenderTaskCreateNestedOneWithoutResultsInput
  }

  export type RenderResultUncheckedCreateWithoutProjectInput = {
    id?: string
    renderTaskId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
  }

  export type RenderResultCreateOrConnectWithoutProjectInput = {
    where: RenderResultWhereUniqueInput
    create: XOR<RenderResultCreateWithoutProjectInput, RenderResultUncheckedCreateWithoutProjectInput>
  }

  export type RenderResultCreateManyProjectInputEnvelope = {
    data: RenderResultCreateManyProjectInput | RenderResultCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ShareLinkCreateWithoutProjectInput = {
    id?: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status?: $Enums.ShareStatus
    createdAt?: Date | string
  }

  export type ShareLinkUncheckedCreateWithoutProjectInput = {
    id?: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status?: $Enums.ShareStatus
    createdAt?: Date | string
  }

  export type ShareLinkCreateOrConnectWithoutProjectInput = {
    where: ShareLinkWhereUniqueInput
    create: XOR<ShareLinkCreateWithoutProjectInput, ShareLinkUncheckedCreateWithoutProjectInput>
  }

  export type ShareLinkCreateManyProjectInputEnvelope = {
    data: ShareLinkCreateManyProjectInput | ShareLinkCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectConstraintCreateWithoutProjectInput = {
    id?: string
    value: string
    createdAt?: Date | string
  }

  export type ProjectConstraintUncheckedCreateWithoutProjectInput = {
    id?: string
    value: string
    createdAt?: Date | string
  }

  export type ProjectConstraintCreateOrConnectWithoutProjectInput = {
    where: ProjectConstraintWhereUniqueInput
    create: XOR<ProjectConstraintCreateWithoutProjectInput, ProjectConstraintUncheckedCreateWithoutProjectInput>
  }

  export type ProjectConstraintCreateManyProjectInputEnvelope = {
    data: ProjectConstraintCreateManyProjectInput | ProjectConstraintCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    update: XOR<ProjectAssetUpdateWithoutProjectInput, ProjectAssetUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectAssetCreateWithoutProjectInput, ProjectAssetUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAssetUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectAssetWhereUniqueInput
    data: XOR<ProjectAssetUpdateWithoutProjectInput, ProjectAssetUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAssetUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectAssetScalarWhereInput
    data: XOR<ProjectAssetUpdateManyMutationInput, ProjectAssetUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectAssetScalarWhereInput = {
    AND?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
    OR?: ProjectAssetScalarWhereInput[]
    NOT?: ProjectAssetScalarWhereInput | ProjectAssetScalarWhereInput[]
    id?: StringFilter<"ProjectAsset"> | string
    projectId?: StringFilter<"ProjectAsset"> | string
    kind?: EnumAssetKindFilter<"ProjectAsset"> | $Enums.AssetKind
    fileName?: StringNullableFilter<"ProjectAsset"> | string | null
    objectKey?: StringFilter<"ProjectAsset"> | string
    publicUrl?: StringFilter<"ProjectAsset"> | string
    contentType?: StringNullableFilter<"ProjectAsset"> | string | null
    fileSize?: IntNullableFilter<"ProjectAsset"> | number | null
    createdAt?: DateTimeFilter<"ProjectAsset"> | Date | string
  }

  export type RenderTaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: RenderTaskWhereUniqueInput
    update: XOR<RenderTaskUpdateWithoutProjectInput, RenderTaskUncheckedUpdateWithoutProjectInput>
    create: XOR<RenderTaskCreateWithoutProjectInput, RenderTaskUncheckedCreateWithoutProjectInput>
  }

  export type RenderTaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: RenderTaskWhereUniqueInput
    data: XOR<RenderTaskUpdateWithoutProjectInput, RenderTaskUncheckedUpdateWithoutProjectInput>
  }

  export type RenderTaskUpdateManyWithWhereWithoutProjectInput = {
    where: RenderTaskScalarWhereInput
    data: XOR<RenderTaskUpdateManyMutationInput, RenderTaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type RenderTaskScalarWhereInput = {
    AND?: RenderTaskScalarWhereInput | RenderTaskScalarWhereInput[]
    OR?: RenderTaskScalarWhereInput[]
    NOT?: RenderTaskScalarWhereInput | RenderTaskScalarWhereInput[]
    id?: StringFilter<"RenderTask"> | string
    projectId?: StringFilter<"RenderTask"> | string
    providerCode?: StringFilter<"RenderTask"> | string
    modelCode?: StringFilter<"RenderTask"> | string
    styleCode?: StringFilter<"RenderTask"> | string
    budgetLevel?: StringFilter<"RenderTask"> | string
    constraints?: StringNullableListFilter<"RenderTask">
    candidateCount?: IntFilter<"RenderTask"> | number
    status?: EnumRenderTaskStatusFilter<"RenderTask"> | $Enums.RenderTaskStatus
    progressPercent?: IntFilter<"RenderTask"> | number
    requestPayload?: JsonNullableFilter<"RenderTask">
    responseSummary?: JsonNullableFilter<"RenderTask">
    createdAt?: DateTimeFilter<"RenderTask"> | Date | string
    updatedAt?: DateTimeFilter<"RenderTask"> | Date | string
  }

  export type RenderResultUpsertWithWhereUniqueWithoutProjectInput = {
    where: RenderResultWhereUniqueInput
    update: XOR<RenderResultUpdateWithoutProjectInput, RenderResultUncheckedUpdateWithoutProjectInput>
    create: XOR<RenderResultCreateWithoutProjectInput, RenderResultUncheckedCreateWithoutProjectInput>
  }

  export type RenderResultUpdateWithWhereUniqueWithoutProjectInput = {
    where: RenderResultWhereUniqueInput
    data: XOR<RenderResultUpdateWithoutProjectInput, RenderResultUncheckedUpdateWithoutProjectInput>
  }

  export type RenderResultUpdateManyWithWhereWithoutProjectInput = {
    where: RenderResultScalarWhereInput
    data: XOR<RenderResultUpdateManyMutationInput, RenderResultUncheckedUpdateManyWithoutProjectInput>
  }

  export type RenderResultScalarWhereInput = {
    AND?: RenderResultScalarWhereInput | RenderResultScalarWhereInput[]
    OR?: RenderResultScalarWhereInput[]
    NOT?: RenderResultScalarWhereInput | RenderResultScalarWhereInput[]
    id?: StringFilter<"RenderResult"> | string
    projectId?: StringFilter<"RenderResult"> | string
    renderTaskId?: StringFilter<"RenderResult"> | string
    title?: StringFilter<"RenderResult"> | string
    imageUrl?: StringFilter<"RenderResult"> | string
    score?: FloatFilter<"RenderResult"> | number
    styleCode?: StringFilter<"RenderResult"> | string
    createdAt?: DateTimeFilter<"RenderResult"> | Date | string
  }

  export type ShareLinkUpsertWithWhereUniqueWithoutProjectInput = {
    where: ShareLinkWhereUniqueInput
    update: XOR<ShareLinkUpdateWithoutProjectInput, ShareLinkUncheckedUpdateWithoutProjectInput>
    create: XOR<ShareLinkCreateWithoutProjectInput, ShareLinkUncheckedCreateWithoutProjectInput>
  }

  export type ShareLinkUpdateWithWhereUniqueWithoutProjectInput = {
    where: ShareLinkWhereUniqueInput
    data: XOR<ShareLinkUpdateWithoutProjectInput, ShareLinkUncheckedUpdateWithoutProjectInput>
  }

  export type ShareLinkUpdateManyWithWhereWithoutProjectInput = {
    where: ShareLinkScalarWhereInput
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyWithoutProjectInput>
  }

  export type ShareLinkScalarWhereInput = {
    AND?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    OR?: ShareLinkScalarWhereInput[]
    NOT?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    projectId?: StringFilter<"ShareLink"> | string
    shareCode?: StringFilter<"ShareLink"> | string
    shareUrl?: StringFilter<"ShareLink"> | string
    title?: StringFilter<"ShareLink"> | string
    description?: StringFilter<"ShareLink"> | string
    status?: EnumShareStatusFilter<"ShareLink"> | $Enums.ShareStatus
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
  }

  export type ProjectConstraintUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectConstraintWhereUniqueInput
    update: XOR<ProjectConstraintUpdateWithoutProjectInput, ProjectConstraintUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectConstraintCreateWithoutProjectInput, ProjectConstraintUncheckedCreateWithoutProjectInput>
  }

  export type ProjectConstraintUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectConstraintWhereUniqueInput
    data: XOR<ProjectConstraintUpdateWithoutProjectInput, ProjectConstraintUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectConstraintUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectConstraintScalarWhereInput
    data: XOR<ProjectConstraintUpdateManyMutationInput, ProjectConstraintUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectConstraintScalarWhereInput = {
    AND?: ProjectConstraintScalarWhereInput | ProjectConstraintScalarWhereInput[]
    OR?: ProjectConstraintScalarWhereInput[]
    NOT?: ProjectConstraintScalarWhereInput | ProjectConstraintScalarWhereInput[]
    id?: StringFilter<"ProjectConstraint"> | string
    projectId?: StringFilter<"ProjectConstraint"> | string
    value?: StringFilter<"ProjectConstraint"> | string
    createdAt?: DateTimeFilter<"ProjectConstraint"> | Date | string
  }

  export type ProjectCreateWithoutConstraintsInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutConstraintsInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskUncheckedCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultUncheckedCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutConstraintsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutConstraintsInput, ProjectUncheckedCreateWithoutConstraintsInput>
  }

  export type ProjectUpsertWithoutConstraintsInput = {
    update: XOR<ProjectUpdateWithoutConstraintsInput, ProjectUncheckedUpdateWithoutConstraintsInput>
    create: XOR<ProjectCreateWithoutConstraintsInput, ProjectUncheckedCreateWithoutConstraintsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutConstraintsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutConstraintsInput, ProjectUncheckedUpdateWithoutConstraintsInput>
  }

  export type ProjectUpdateWithoutConstraintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutConstraintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUncheckedUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUncheckedUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutAssetsInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
    renderTasks?: RenderTaskCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAssetsInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renderTasks?: RenderTaskUncheckedCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultUncheckedCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAssetsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
  }

  export type ProjectUpsertWithoutAssetsInput = {
    update: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
    create: XOR<ProjectCreateWithoutAssetsInput, ProjectUncheckedCreateWithoutAssetsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAssetsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAssetsInput, ProjectUncheckedUpdateWithoutAssetsInput>
  }

  export type ProjectUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
    renderTasks?: RenderTaskUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renderTasks?: RenderTaskUncheckedUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUncheckedUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutRenderTasksInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutRenderTasksInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultUncheckedCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutRenderTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutRenderTasksInput, ProjectUncheckedCreateWithoutRenderTasksInput>
  }

  export type RenderResultCreateWithoutRenderTaskInput = {
    id?: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutRenderResultsInput
  }

  export type RenderResultUncheckedCreateWithoutRenderTaskInput = {
    id?: string
    projectId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
  }

  export type RenderResultCreateOrConnectWithoutRenderTaskInput = {
    where: RenderResultWhereUniqueInput
    create: XOR<RenderResultCreateWithoutRenderTaskInput, RenderResultUncheckedCreateWithoutRenderTaskInput>
  }

  export type RenderResultCreateManyRenderTaskInputEnvelope = {
    data: RenderResultCreateManyRenderTaskInput | RenderResultCreateManyRenderTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutRenderTasksInput = {
    update: XOR<ProjectUpdateWithoutRenderTasksInput, ProjectUncheckedUpdateWithoutRenderTasksInput>
    create: XOR<ProjectCreateWithoutRenderTasksInput, ProjectUncheckedCreateWithoutRenderTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutRenderTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutRenderTasksInput, ProjectUncheckedUpdateWithoutRenderTasksInput>
  }

  export type ProjectUpdateWithoutRenderTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutRenderTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUncheckedUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type RenderResultUpsertWithWhereUniqueWithoutRenderTaskInput = {
    where: RenderResultWhereUniqueInput
    update: XOR<RenderResultUpdateWithoutRenderTaskInput, RenderResultUncheckedUpdateWithoutRenderTaskInput>
    create: XOR<RenderResultCreateWithoutRenderTaskInput, RenderResultUncheckedCreateWithoutRenderTaskInput>
  }

  export type RenderResultUpdateWithWhereUniqueWithoutRenderTaskInput = {
    where: RenderResultWhereUniqueInput
    data: XOR<RenderResultUpdateWithoutRenderTaskInput, RenderResultUncheckedUpdateWithoutRenderTaskInput>
  }

  export type RenderResultUpdateManyWithWhereWithoutRenderTaskInput = {
    where: RenderResultScalarWhereInput
    data: XOR<RenderResultUpdateManyMutationInput, RenderResultUncheckedUpdateManyWithoutRenderTaskInput>
  }

  export type RenderTaskCreateWithoutResultsInput = {
    id?: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutRenderTasksInput
  }

  export type RenderTaskUncheckedCreateWithoutResultsInput = {
    id?: string
    projectId: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderTaskCreateOrConnectWithoutResultsInput = {
    where: RenderTaskWhereUniqueInput
    create: XOR<RenderTaskCreateWithoutResultsInput, RenderTaskUncheckedCreateWithoutResultsInput>
  }

  export type ProjectCreateWithoutRenderResultsInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutRenderResultsInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskUncheckedCreateNestedManyWithoutProjectInput
    shareLinks?: ShareLinkUncheckedCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutRenderResultsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutRenderResultsInput, ProjectUncheckedCreateWithoutRenderResultsInput>
  }

  export type RenderTaskUpsertWithoutResultsInput = {
    update: XOR<RenderTaskUpdateWithoutResultsInput, RenderTaskUncheckedUpdateWithoutResultsInput>
    create: XOR<RenderTaskCreateWithoutResultsInput, RenderTaskUncheckedCreateWithoutResultsInput>
    where?: RenderTaskWhereInput
  }

  export type RenderTaskUpdateToOneWithWhereWithoutResultsInput = {
    where?: RenderTaskWhereInput
    data: XOR<RenderTaskUpdateWithoutResultsInput, RenderTaskUncheckedUpdateWithoutResultsInput>
  }

  export type RenderTaskUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutRenderTasksNestedInput
  }

  export type RenderTaskUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutRenderResultsInput = {
    update: XOR<ProjectUpdateWithoutRenderResultsInput, ProjectUncheckedUpdateWithoutRenderResultsInput>
    create: XOR<ProjectCreateWithoutRenderResultsInput, ProjectUncheckedCreateWithoutRenderResultsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutRenderResultsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutRenderResultsInput, ProjectUncheckedUpdateWithoutRenderResultsInput>
  }

  export type ProjectUpdateWithoutRenderResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutRenderResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUncheckedUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutShareLinksInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProjectsInput
    assets?: ProjectAssetCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutShareLinksInput = {
    id?: string
    userId?: string | null
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProjectAssetUncheckedCreateNestedManyWithoutProjectInput
    renderTasks?: RenderTaskUncheckedCreateNestedManyWithoutProjectInput
    renderResults?: RenderResultUncheckedCreateNestedManyWithoutProjectInput
    constraints?: ProjectConstraintUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutShareLinksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutShareLinksInput, ProjectUncheckedCreateWithoutShareLinksInput>
  }

  export type ProjectUpsertWithoutShareLinksInput = {
    update: XOR<ProjectUpdateWithoutShareLinksInput, ProjectUncheckedUpdateWithoutShareLinksInput>
    create: XOR<ProjectCreateWithoutShareLinksInput, ProjectUncheckedCreateWithoutShareLinksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutShareLinksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutShareLinksInput, ProjectUncheckedUpdateWithoutShareLinksInput>
  }

  export type ProjectUpdateWithoutShareLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProjectsNestedInput
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutShareLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUncheckedUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUncheckedUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AiModelCreateWithoutProviderInput = {
    id?: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled?: boolean
    isDefault?: boolean
    temperature?: number | null
    topP?: number | null
    imageSize?: string | null
    aspectRatio?: string | null
    candidateCount?: number | null
    responseFormat?: string | null
    promptOptimizerEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelUncheckedCreateWithoutProviderInput = {
    id?: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled?: boolean
    isDefault?: boolean
    temperature?: number | null
    topP?: number | null
    imageSize?: string | null
    aspectRatio?: string | null
    candidateCount?: number | null
    responseFormat?: string | null
    promptOptimizerEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelCreateOrConnectWithoutProviderInput = {
    where: AiModelWhereUniqueInput
    create: XOR<AiModelCreateWithoutProviderInput, AiModelUncheckedCreateWithoutProviderInput>
  }

  export type AiModelCreateManyProviderInputEnvelope = {
    data: AiModelCreateManyProviderInput | AiModelCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type AiModelUpsertWithWhereUniqueWithoutProviderInput = {
    where: AiModelWhereUniqueInput
    update: XOR<AiModelUpdateWithoutProviderInput, AiModelUncheckedUpdateWithoutProviderInput>
    create: XOR<AiModelCreateWithoutProviderInput, AiModelUncheckedCreateWithoutProviderInput>
  }

  export type AiModelUpdateWithWhereUniqueWithoutProviderInput = {
    where: AiModelWhereUniqueInput
    data: XOR<AiModelUpdateWithoutProviderInput, AiModelUncheckedUpdateWithoutProviderInput>
  }

  export type AiModelUpdateManyWithWhereWithoutProviderInput = {
    where: AiModelScalarWhereInput
    data: XOR<AiModelUpdateManyMutationInput, AiModelUncheckedUpdateManyWithoutProviderInput>
  }

  export type AiModelScalarWhereInput = {
    AND?: AiModelScalarWhereInput | AiModelScalarWhereInput[]
    OR?: AiModelScalarWhereInput[]
    NOT?: AiModelScalarWhereInput | AiModelScalarWhereInput[]
    id?: StringFilter<"AiModel"> | string
    providerId?: StringFilter<"AiModel"> | string
    modelCode?: StringFilter<"AiModel"> | string
    displayName?: StringFilter<"AiModel"> | string
    modelType?: EnumModelTypeFilter<"AiModel"> | $Enums.ModelType
    enabled?: BoolFilter<"AiModel"> | boolean
    isDefault?: BoolFilter<"AiModel"> | boolean
    temperature?: FloatNullableFilter<"AiModel"> | number | null
    topP?: FloatNullableFilter<"AiModel"> | number | null
    imageSize?: StringNullableFilter<"AiModel"> | string | null
    aspectRatio?: StringNullableFilter<"AiModel"> | string | null
    candidateCount?: IntNullableFilter<"AiModel"> | number | null
    responseFormat?: StringNullableFilter<"AiModel"> | string | null
    promptOptimizerEnabled?: BoolFilter<"AiModel"> | boolean
    createdAt?: DateTimeFilter<"AiModel"> | Date | string
    updatedAt?: DateTimeFilter<"AiModel"> | Date | string
  }

  export type AiProviderCreateWithoutModelsInput = {
    id?: string
    providerCode: string
    providerName: string
    baseUrl: string
    apiKeyRef: string
    timeoutMs?: number
    retryLimit?: number
    dailyBudgetLimit?: Decimal | DecimalJsLike | number | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiProviderUncheckedCreateWithoutModelsInput = {
    id?: string
    providerCode: string
    providerName: string
    baseUrl: string
    apiKeyRef: string
    timeoutMs?: number
    retryLimit?: number
    dailyBudgetLimit?: Decimal | DecimalJsLike | number | string | null
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiProviderCreateOrConnectWithoutModelsInput = {
    where: AiProviderWhereUniqueInput
    create: XOR<AiProviderCreateWithoutModelsInput, AiProviderUncheckedCreateWithoutModelsInput>
  }

  export type AiProviderUpsertWithoutModelsInput = {
    update: XOR<AiProviderUpdateWithoutModelsInput, AiProviderUncheckedUpdateWithoutModelsInput>
    create: XOR<AiProviderCreateWithoutModelsInput, AiProviderUncheckedCreateWithoutModelsInput>
    where?: AiProviderWhereInput
  }

  export type AiProviderUpdateToOneWithWhereWithoutModelsInput = {
    where?: AiProviderWhereInput
    data: XOR<AiProviderUpdateWithoutModelsInput, AiProviderUncheckedUpdateWithoutModelsInput>
  }

  export type AiProviderUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKeyRef?: StringFieldUpdateOperationsInput | string
    timeoutMs?: IntFieldUpdateOperationsInput | number
    retryLimit?: IntFieldUpdateOperationsInput | number
    dailyBudgetLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiProviderUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    providerName?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKeyRef?: StringFieldUpdateOperationsInput | string
    timeoutMs?: IntFieldUpdateOperationsInput | number
    retryLimit?: IntFieldUpdateOperationsInput | number
    dailyBudgetLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    roomType: string
    styleCode: string
    budgetLevel: string
    status?: $Enums.ProjectStatus
    originalImageUrl: string
    latestRenderTaskId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput
    renderTasks?: RenderTaskUncheckedUpdateManyWithoutProjectNestedInput
    renderResults?: RenderResultUncheckedUpdateManyWithoutProjectNestedInput
    shareLinks?: ShareLinkUncheckedUpdateManyWithoutProjectNestedInput
    constraints?: ProjectConstraintUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    originalImageUrl?: StringFieldUpdateOperationsInput | string
    latestRenderTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetCreateManyProjectInput = {
    id?: string
    kind: $Enums.AssetKind
    fileName?: string | null
    objectKey: string
    publicUrl: string
    contentType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
  }

  export type RenderTaskCreateManyProjectInput = {
    id?: string
    providerCode: string
    modelCode: string
    styleCode: string
    budgetLevel: string
    constraints?: RenderTaskCreateconstraintsInput | string[]
    candidateCount?: number
    status?: $Enums.RenderTaskStatus
    progressPercent?: number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderResultCreateManyProjectInput = {
    id?: string
    renderTaskId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
  }

  export type ShareLinkCreateManyProjectInput = {
    id?: string
    shareCode: string
    shareUrl: string
    title: string
    description: string
    status?: $Enums.ShareStatus
    createdAt?: Date | string
  }

  export type ProjectConstraintCreateManyProjectInput = {
    id?: string
    value: string
    createdAt?: Date | string
  }

  export type ProjectAssetUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAssetUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumAssetKindFieldUpdateOperationsInput | $Enums.AssetKind
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: StringFieldUpdateOperationsInput | string
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderTaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: RenderResultUpdateManyWithoutRenderTaskNestedInput
  }

  export type RenderTaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: RenderResultUncheckedUpdateManyWithoutRenderTaskNestedInput
  }

  export type RenderTaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerCode?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    styleCode?: StringFieldUpdateOperationsInput | string
    budgetLevel?: StringFieldUpdateOperationsInput | string
    constraints?: RenderTaskUpdateconstraintsInput | string[]
    candidateCount?: IntFieldUpdateOperationsInput | number
    status?: EnumRenderTaskStatusFieldUpdateOperationsInput | $Enums.RenderTaskStatus
    progressPercent?: IntFieldUpdateOperationsInput | number
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responseSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renderTask?: RenderTaskUpdateOneRequiredWithoutResultsNestedInput
  }

  export type RenderResultUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    renderTaskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    renderTaskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareCode?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumShareStatusFieldUpdateOperationsInput | $Enums.ShareStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectConstraintUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectConstraintUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectConstraintUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultCreateManyRenderTaskInput = {
    id?: string
    projectId: string
    title: string
    imageUrl: string
    score: number
    styleCode: string
    createdAt?: Date | string
  }

  export type RenderResultUpdateWithoutRenderTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutRenderResultsNestedInput
  }

  export type RenderResultUncheckedUpdateWithoutRenderTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderResultUncheckedUpdateManyWithoutRenderTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    styleCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelCreateManyProviderInput = {
    id?: string
    modelCode: string
    displayName: string
    modelType: $Enums.ModelType
    enabled?: boolean
    isDefault?: boolean
    temperature?: number | null
    topP?: number | null
    imageSize?: string | null
    aspectRatio?: string | null
    candidateCount?: number | null
    responseFormat?: string | null
    promptOptimizerEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiModelUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiModelUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelCode?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    modelType?: EnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    imageSize?: NullableStringFieldUpdateOperationsInput | string | null
    aspectRatio?: NullableStringFieldUpdateOperationsInput | string | null
    candidateCount?: NullableIntFieldUpdateOperationsInput | number | null
    responseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    promptOptimizerEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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