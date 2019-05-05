export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  _root?: Maybe<Scalars["String"]>;
  createUser?: Maybe<UserMutationResponse>;
  updateUser?: Maybe<UserMutationResponse>;
  deleteUser?: Maybe<UserMutationResponse>;
};

export type MutationCreateUserArgs = {
  user: UserInputCreate;
};

export type MutationUpdateUserArgs = {
  id?: Maybe<Scalars["Int"]>;
  username?: Maybe<Scalars["String"]>;
  payload: UserInputUpdate;
};

export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars["Int"]>;
  username?: Maybe<Scalars["String"]>;
};

export type MutationResponseInterface = {
  code: Scalars["Int"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
};

export type Query = {
  _root?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type User = {
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
  createdAt?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type UserInputCreate = {
  firstName: Scalars["String"];
  lastName?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
};

export type UserInputUpdate = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserMutationResponse = MutationResponseInterface & {
  code: Scalars["Int"];
  success: Scalars["Boolean"];
  message: Scalars["String"];
  user?: Maybe<User>;
};
import { Context } from "../types/context";

import { GraphQLResolveInfo } from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  String: Scalars["String"];
  ID: Scalars["ID"];
  User: User;
  Mutation: {};
  UserInputCreate: UserInputCreate;
  UserMutationResponse: UserMutationResponse;
  MutationResponseInterface: MutationResponseInterface;
  Int: Scalars["Int"];
  Boolean: Scalars["Boolean"];
  UserInputUpdate: UserInputUpdate;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Mutation"]
> = {
  _root?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createUser?: Resolver<
    Maybe<ResolversTypes["UserMutationResponse"]>,
    ParentType,
    ContextType,
    MutationCreateUserArgs
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes["UserMutationResponse"]>,
    ParentType,
    ContextType,
    MutationUpdateUserArgs
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["UserMutationResponse"]>,
    ParentType,
    ContextType,
    MutationDeleteUserArgs
  >;
};

export type MutationResponseInterfaceResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["MutationResponseInterface"]
> = {
  __resolveType: TypeResolveFn<"UserMutationResponse", ParentType, ContextType>;
  code?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Query"]
> = {
  _root?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    QueryUserArgs
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type UserMutationResponseResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["UserMutationResponse"]
> = {
  code?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Mutation?: MutationResolvers<ContextType>;
  MutationResponseInterface?: MutationResponseInterfaceResolvers;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserMutationResponse?: UserMutationResponseResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
